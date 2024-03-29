---
eleventyComputed:
  title: Create entries manually
  description: Create entries manually and save your data in {{ en.DVLS }}.
---
Create entries manually and save your data in {{ en.DVLS }}.

## Create an entry

1. Select the {{ en.VLT }} or {{ en.UVLT }} and the folder in which you wish to create the new entry.
1. Click on the ***Add*** button located in the ***{{ en.NPANE }}***.
   ![Add](https://cdnweb.devolutions.net/docs/DVLS6040_2024_1.png)
1. Select an [entry type](/server/web-interface/vault/entries/entry-type/) from the list.
   ![Entry type](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2090.png)
1. Click ***Continue***.
1. Configure the entry with all the required information.
1. Click ***Add*** to save.

## Create a sub entry

Sub entries are full-fledged, independant entries located bewlow a "parent" entry in the tree view. They refer to their parent with an ID. They are compatible with attachments, documentation, full history, etc.

You cannot create sub entries via the {{ en.DVLS }} web interface. You must use {{ en.RDM }} with a {{ en.DVLS }} data source. See [Create an entry (Windows)](/rdm/windows/commands/edit/entries/creating-new-entry/) or [Create an entry (macOS)](/rdm/mac/commands/edit/entries/creating-new-entry/).
