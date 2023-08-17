---
eleventyComputed:
  title: Create entries manually
  description: Create entries manually and save your data in {{ en.HUBB }}.
---
Create entries manually and save your data in {{ en.HUBB }}.

## Create an entry

1. Select the {{ en.VLT }} / {{ en.UVLT }} and the folder in which you wish to create the new entry.
1. Click on the ***Add*** button located in the ***{{ en.NPANE }}***.
   ![Add](https://webdevolutions.azureedge.net/docs/en/hub/Hub2285.png)
1. Select an [entry type](/hub/web-interface/hub-overview/entries/entry-type/) from the list.
   ![Entry type](https://webdevolutions.azureedge.net/docs/en/hub/Hub2286.png)
1. Click ***Continue***.
1. Configure the entry with all the required information.
1. Click ***Add*** to save.

## Create a sub entry

Sub entries are full-fledged, independant entries located bewlow a "parent" entry in the tree view. They refer to their parent with an ID. They are compatible with attachments, documentation, full history, etc.

* In the {{ en.DHUB }} web interface, create a regular entry by following the instructions above, then drag and drop the entry onto another.
* In {{ en.RDM }} with a {{ en.DHUB }} data source, see [Create an entry (Windows)](/rdm/windows/commands/edit/entries/creating-new-entry/) or [Create an entry ({{ en.MAC}})](/rdm/mac/commands/edit/entries/creating-new-entry/).

{% snippet icon.badgeInfo %}
You cannot create a sub entry under another sub entry.
{% endsnippet %}
