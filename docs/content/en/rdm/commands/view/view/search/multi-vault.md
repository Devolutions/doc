---
eleventyComputed:
  title: Multi {{ en.VLT }} search
  description: The Multi {{ en.VLT }} search feature of {{ en.RDM }} allows you to search for folders and entries in all the {{ en.VLT }}s of the selected data source at once.
---
The ***Multi {{ en.VLT }} search*** feature of {{ en.RDM }} allows you to search for folders and entries in all the {{ en.VLT }}s of the selected data source at once.
![Multi {{ en.VLT }} Search Window](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2008.png)

### Criteria types

The following criteria are available to refine your search: ***Connection type***, ***Creation date***, ***Description***, ***Folder***, ***Last update date*** and ***Name***.

{% snippet icon.badgeInfo %}
At least one criterion must be used to filter your results, and a maximum of four criteria can be applied at once.
{% endsnippet %}

![Multi {{ en.VLT }} Search Criteria](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2009.png)

{% snippet icon.badgeInfo %}
In ***Hub*** databases, only the ***Name*** criterion is available.
{% endsnippet %}

Drop-down lists will appear when selecting certain criteria to give you more search options.
![Multi {{ en.VLT }} Search Drop-down](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2010.png)

Below is a description of what each of these drop-down lists type is used for.

| CRITERIA                            | DROP-DOWN LIST DESCRIPTION |
|-------------------------------------|----------------------------|
| Connection type                     | Select from the list the connection type of the entries you are looking for. |
| Creation date <br> Last update date | Select from the list the period of time, up to 90 days ago, when the entries/folders were created or last updated. There also is a custom option in the list that allows you to specify dates to delimit your time period. This can be useful if you want to search between specific dates or if the entries or folders were created / last updated more than 90 days ago. |
| Description <br> Folder <br> Name   | Search by typing part or all of a word in the name of the entries or folders or in their description. From the list, select the option that applies: <ul><li>***Contains*** – any name that includes the characters you have entered, anywhere in the field name.</li><li>***Starts with*** – any name beginning with the characters you have entered.</li><li>***Ends with*** – any name ending with the characters you have entered.</li><li>***Exact expression*** – will find names that match every character you have entered, exactly as entered.</li></ul> |


### Results Display

The results are displayed when the ***Search*** button is pressed. Once done, the name of all entries and folders and the {{ en.VLT }} in which they are located are shown in the results field. The paths to entries or folders are also displayed above each result or result group.
![Search Button](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2011.png)

It is possible to select multiple entries at once by <kbd>Shift</kbd>–clicking or all of them with the <kbd>Ctrl</kbd>+<kbd>A</kbd> shortcut. Right-clicking one or more entries shows the same menu and options as the ***{{ en.NPANE }}***.

### Other functions

The ***Select in {{ en.NPANE }}*** button, when pressed, takes you directly to the selected entry or folder in the corresponding {{ en.VLT }}'s ***{{ en.NPANE }}***.

The ***Reset*** button clears all your search results and options, giving you a clean slate for a new search.
