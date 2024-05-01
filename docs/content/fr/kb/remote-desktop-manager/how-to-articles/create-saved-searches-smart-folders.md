---
eleventyComputed:
  title: Create saved searches with smart folders
---
Smart folders are saved searches. You can search by entry name and/or tag.

The smart folder lists search results in the dashboard. You can open and edit entries directly from the smart folder.

The smart folder updates dynamically; each time you open the folder it searches.

## Add a smart folder

1. Click ***New Entry***.
1. Click ***Miscellaneous***, then select ***Smart Folder***.
1. Name the smart folder. This is how the smart folder name will appear in the ***{{ en.NPANE }}***. It is not for the search terms.
1. Enter a search parameter: ***Tags*** or ***Entry name***.

To choose tags, click ***More options*** A list of tags you have used is available.

To add tags for individual entries, go to the ***More*** section in ***Properties***.

{% snippet icon.badgeNotice %}
A tag will automatically be deleted from the list of tags when not used by any entry. To remove a tag from the list, do an Advanced search by Tags. Select all the entries, in the result window, and by right-clicking select ***Edit – Batch Edit – Override the tags*** in the ***Description*** menu, deselect the tag you want to delete and click ***OK***.
{% endsnippet %}

```
Smart folders search for the term anywhere in the entry name.
  To search for multiple terms, use:
    &&: and
    ||: or
```

![!!KB4133](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4133.png)

## Use a smart folder

1. To display the search results, select the smart folder in the ***{{ en.NPANE }}***.
1. You can work with an entry directly from the search results.

Double-click to open the entry.

Right-click to access the context menu for other actions (e.g.View Password, Select entry in ***{{ en.NPANE }}***).
