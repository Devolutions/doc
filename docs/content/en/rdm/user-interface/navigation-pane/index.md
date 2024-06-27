---
eleventyComputed:
  title: "{{ en.NPANE }}"
  description:
---
The ***{{ en.NPANE }}*** is one of the main components of the {{ en.RDM }} user interface. It lists all available entries in the current data source and allows to switch to another data source or {{ en.VLT }}.
![{{ en.NPANE }}](https://cdnweb.devolutions.net/docs/RDMW0001_2024_2.png)

| ELEMENT                   | DESCRIPTION                                                             |
|---------------------------|-------------------------------------------------------------------------|
| Data source selector      | Allows to switch to another configured data source.                     |
| {{ en.VLT_MAJ }} selector | Allows to switch to another configured {{ en.VLT }} in the data source. |
| Entry list                | Displays the content of the current data source, depending on the selected tab. It allows to select entries and perform action on them. |
| Tabs                      | Allows to switch to different views of the entry list, such as the ***Favorite entries*** or the ***Opened sessions***. |

## Column chooser
Choose the columns to display in the tree view. Right-clicking on the column name in the ***{{ en.NPANE }}*** and select ***Column chooser***.
![Column chooser](https://cdnweb.devolutions.net/docs/RDMW0002_2024_2.png)

{% snippet, "badgeInfo" %}
Additional tree view settings and information are available in ***File*** – ***Settings*** – ***User interface*** – ***Tree view***.
{% endsnippet %}

For more information on each tab, please consult the following topics:

* [{{ en.VLT_MAJ }}](/rdm/windows/commands/view/panels/vault/)
* [{{ en.UVLT_MAJ }}](/rdm/windows/data-sources/user-vault/)
* [Opened Sessions](/rdm/windows/commands/view/panels/opened-sessions/)
* [Favorite Entries](/rdm/windows/user-interface/navigation-pane/favorite-entries/)
* [Most Recently Used Entries](/rdm/windows/user-interface/navigation-pane/most-recently-used-entries/)
* [Account](/rdm/windows/user-interface/navigation-pane/account/)
