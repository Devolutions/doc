## Manage the front matter metadata

We use metadata for discoverability of the content via search and for driving aspects of the site experience. In the case of Eleventy (11ty), global variables are managed in the front matter, which is located on line 1 of the file and is enclosed between `---` at the beginning and end.  

When editing an existing article, you typically won't need to modify the metadata. However, when creating a new article, certain mandatory metadata values must be included in the front matter of the file.  

Below is an example demonstrating the application of metadata within the front matter of a Markdown article:  

```markdown
---
title: The title of the topic # Used for the H1 and the navigation tree. 
order: 0-9 # Used for custom ordering in the navigation tree. 
description: The topic description # Used to summarize the document (will be displayed in search results from a search engine). 
keywords: Specific topic keywords # Used by the Algolia application (internal use only). 
- keyword 1
- keyword 2
---

## Markdown content
```

Variables are listed in the [_data](https://github.com/Devolutions/doc/tree/master/docs/_data) folder. To add a variable in the front matter, insert "eleventyComputed:" (uppercase "C") at the top and add a tab before the lines under it, as shown here:  

```markdown
---
eleventyComputed:
  title: Title with {{ en.VARIABLE }}
  description: The topic description # Used to summarize the document (will be displayed in a search result from a search engine).
---

## Markdown content
```

Attributes are case-sensitive. Make sure to enter them exactly as listed, using a colon and a space to separate the attributes from their values. If an attribute value contains special characters such as a colon (:), a hash (#), or others, it must be enclosed within either single (') or double (") quotes. Here's an example for clarification:  

```markdown
---
title: 'Quickstart: How to use special characters in Markdown article'
---

## Markdown content
```
