const autocompleteElement = document.querySelector('#algolia-autocomplete');

if (autocompleteElement) {
  const { autocomplete, getAlgoliaFacets, getAlgoliaResults } = window['@algolia/autocomplete-js'];
  const { createTagsPlugin } = window['@algolia/autocomplete-plugin-tags'];

  const searchClient = algoliasearch(
    'LNWCTDWZS0',
    'e51799c9709067fc3bcab5ec439fa770'
  );

  const tagsPlugin = createTagsPlugin({
    initialTags: autocompleteElement.dataset.tags ? JSON.parse(autocompleteElement.dataset.tags) : [],
    getTagsSubscribers() {
      return [
        {
          sourceId: 'docs',
          getTag({ item }) {
            return item;
          },
        }
      ];
    }
  });

  function mapToAlgoliaFilters(tagsByFacet, operator = 'AND') {
    return Object.keys(tagsByFacet)
      .map((facet) => {
        return `(${tagsByFacet[facet]
          .map(({ label }) => `${facet}:"${label}"`)
          .join(' OR ')})`;
      })
      .join(` ${operator} `);
  }
  
  function groupBy(items, predicate) {
    return items.reduce((acc, item) => {
      const key = predicate(item);
  
      if (!acc.hasOwnProperty(key)) {
        acc[key] = [];
      }
  
      acc[key].push(item);
  
      return acc;
    }, {});
  }

  function mapToAlgoliaNegativeFilters(tags, facetsToNegate, operator = 'AND') {
    return tags
      .map(({ label, facet }) => {
        const filter = `${facet}:"${label}"`
  
        return facetsToNegate.includes(facet) && `NOT ${filter}`
      })
      .filter(Boolean)
      .join(` ${operator} `)
  }

  

  autocomplete({
    container: '#algolia-autocomplete',
    placeholder: autocompleteElement.dataset.placeholder,
    openOnFocus: true,
    detachedMediaQuery: '',
    defaultActiveItemId: 0,
    getSources({ query, state }) {
      const tagsByFacet = groupBy(
        state.context.tagsPlugin.tags,
        (tag) => tag.facet
        
      );
      

      return [
        {
          sourceId: 'docs',
          onSelect({ item, setQuery }) {
            if (item.label.toLowerCase().includes(query.toLowerCase())) {
              setQuery('')
            }
          },
          getItems({ query }) {
            return getAlgoliaFacets({
              searchClient,
              queries: [
                {
                  indexName: autocompleteElement.dataset.index,
                  facet: 'doc',
                  params: {
                    facetQuery: query,
                    maxFacetHits: 6,
                    filters: mapToAlgoliaNegativeFilters(
                      state.context.tagsPlugin.tags,
                      ['doc']
                    )
                  }
                }
              ],
              transformResponse({ facetHits }) {
                const order = ['Remote Desktop Manager (Windows)', 'Remote Desktop Manager (macOS)', 'Devolutions Server', 'Devolutions Hub', 'Knowledge Base', 'Cloud Services'];
                const map = new Map();
                order.forEach((x, i) => map.set(x, i));
                return facetHits[0].map((hit) => ({ ...hit, facet: 'doc' })).sort((x, y) => {
                  if (map.get(x.label) !== undefined && map.get(y.label) !== undefined) {
                    return map.get(x.label) - map.get(y.label); 
                  } else if (map.get(x.label) !== undefined) {
                    return -1;
                  }
                  return 0;
                });
              }
            });
          },
          templates: {
            header({ html }) {
              return html`<span class="aa-SourceHeaderTitle">
                  Documentation
                </span>
                <div class="aa-SourceHeaderLine" />`;
            },
            item({ item, components, html }) {
              return html`<div class="aa-ItemWrapper">
                <div class="aa-ItemContent">
                  <div class="aa-ItemContentBody">
                    <div class="aa-ItemContentTitle">
                      ${components.Highlight({ hit: item, attribute: 'label' })}               
                    </div>
                  </div>
                </div>
                <div class="aa-ItemActions">
                  <button
                    class="aa-ItemActionButton aa-DesktopOnly aa-ActiveOnly"
                    type="button"
                    title="Filter"
                  >
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                      />
                    </svg>
                  </button>
                </div>
              </div>`;
            }
          }
        },
        {
          sourceId: 'hits',
          getItems({ query }) {
          
            if (query != "" || state.context.tagsPlugin.tags.length > 0) {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: autocompleteElement.dataset.index,
                    query,
                    params: {
                      filters: mapToAlgoliaFilters(tagsByFacet),
                      hitsPerPage: 32,
                    },
                  },
                ]
              });
            }

            return [];
          },
          getItemUrl({ item }) {
            return item.url;
          },
          templates: {
            header({ html }) {
              return html`<span class="aa-SourceHeaderTitle">
                  Topics
                </span>
                <div class="aa-SourceHeaderLine" />`;
            },
            item({ item, components, html }) {
              let urlBreadcrumb = components.Highlight({
                hit: item,
                attribute: 'url',
              });
           
              urlBreadcrumb = urlBreadcrumb.props.children[0].replaceAll("/", " > ").substring(3, urlBreadcrumb.length);
              
              if (urlBreadcrumb.substring(urlBreadcrumb.length - 3, urlBreadcrumb.length) == " > ") {
                urlBreadcrumb = urlBreadcrumb.substring(0, urlBreadcrumb.length - 3);
              }

              return html`<a class="aa-ItemLink" href="${item.url}">
                <div class="aa-ItemContent">
                  <div className="aa-ItemIcon">
                    <img src="${item.icon}" alt="${item.doc}" width="24" height="24"/>
                  </div>
                  <div class="aa-ItemContentBody">
                    <div class="aa-ItemContentTitle">
                      ${components.Highlight({
                        hit: item,
                        attribute: 'title',
                      })}
                      
                    </div>              
                    <div class="aa-ItemContentContent">
                      ${components.Highlight({
                        hit: item,
                        attribute: 'content',
                      })}
                    </div>
                    <div class="aa-ItemContentLink">
                      ${ urlBreadcrumb }
                    </div>
                  </div>
                </div>
              </a>`;
            },
          },
        },
        // {
        //   sourceId: 'suggestions',
        //   getItems({ query }) {
        //     return getAlgoliaResults({
        //       searchClient,
        //       queries: [
        //         {
        //           indexName: document.querySelector('#algolia-autocomplete')
        //           .dataset.index,
        //           query,
        //           params: {
        //             hitsPerPage: 4,
        //           },
        //         },
        //       ],
        //     });
        //   },
        //   onSelect({ item, setQuery, setIsOpen, refresh }) {
        //     setQuery(`${item.query} `);
        //     setIsOpen(true);
        //     refresh();
        //   },
        //   templates: {
        //     header({ html }) {
        //       return html`<span className="aa-SourceHeaderTitle">
        //         Can't find what you're looking for?
        //       </span>
        //       <div className="aa-SourceHeaderLine" />`;
        //     },
        //     item({ item, components, html }) {
        //       return html`<div className="aa-QuerySuggestion">
        //         ${components.ReverseHighlight({
        //           hit: item,
        //           attribute: 'query'
        //         })}
        //       </div>`;
        //     },
        //   },
        // },
      ];
    },
    plugins: [tagsPlugin]
  });
}