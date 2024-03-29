---
eleventyComputed:
  title: Documentation search
  description: We can search documentation pages linked to entries. Documentation Search provides a preview of the documentation pages, page title, and related entry details. The tool searches the current repository.
---
We can search documentation pages linked to entries. ***Documentation Search*** provides a preview of the documentation pages, page title, and related entry details. The tool searches the current repository.

{% snippet icon.badgeInfo %}
***Documentation Search*** is available with {{ en.DVLS }} and SQL Server data sources.
{% endsnippet %}

{% snippet icon.badgeInfo %}
The ***Documentation*** feature is encrypted only for the {{ en.DVLS }} data source. If you are using data sources such as SQL Server or Azure SQL, the feature is not encrypted.
{% endsnippet %}

![Documentation Search Window](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip9001.png)

## User Interface

![Documentation Search Elements](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip7003.png)

| ELEMENTS                 | DESCRIPTION                                   |
|--------------------------|-----------------------------------------------|
| (1) ***{{ en.NPANE }}*** | Lists search results by location and entry.   |
| (2) Content area         | Displays a preview of the documentation page. |
| (3) Drop-down menu       | Lists the different page titles. When an entry contains multiple documentation pages with the searched term, a list of the page titles is available. |

It is possible to select multiple entries at once by <kbd>Shift</kbd>-clicking or all of them with the <kbd>Ctrl</kbd>+<kbd>A</kbd> shortcut. Right-clicking one or more entries shows the same menu and options as the ***{{ en.NPANE }}***.

### Other functions
The ***Select in {{ en.NPANE }}*** button, when pressed, takes you directly to the selected entry or folder in the corresponding {{ en.VLT }}'s ***{{ en.NPANE }}***.

The ***Reset*** button clears all your search results and options, giving you a clean slate for a new search.
