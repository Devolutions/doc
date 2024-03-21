---
eleventyComputed:
  title: Create an entry
  description: When getting started with {{ en.RDMMAC }}, you must configure your entries. There are many types of entries; you should know what third party or technology you will use to choose the appropriate entry type(s) that you plan on configuring.
---
When getting started with {{ en.RDMMAC }}, you must first configure your entries. There are many type of entries; you should know what third party or technology you will use to choose the appropriate entry type(s) that you plan on configuring.

## Create an entry

### From the Ribbon

In the ***{{ en.NPANE }}***, select where you wish the entry to be located. In the ***Ribbon***, go to ***Edit*** and click on ***New Entry***. You will be prompted to customize your settings in the entry properties window.
![Add an entry from the Ribbon](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2092.png)

### From the contextual menu

In the ***{{ en.NPANE }}***, right-click where you wish the entry to be located and select ***Add*** from the menu. To initialize a new session, you can specify either the type of session or a template. You will be prompted to customize your settings in the entry properties window.
![Add an entry from the contextual menu](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2093.png)

### By importing a configuration

You can also import entries in ***File – Import***. Learn more in [Import](/rdm/mac/commands/file/import/sessions/).

## Create a sub entry

{% snippet icon.badgeInfo %}
Since {{ en.RDM }} version 2022.3, sub entries have replaced sub connections. They are different in that sub connections were stored as XML in their parent entry, which is not the case with sub entries, making them much more versatile.

The migration of preexisting sub connections to the new sub entries is automatic when updating from {{ en.RDM }} version 2022.2 or prior to version 2022.3 or later.
{% endsnippet %}

Sub entries are full-fledged, independant entries located bewlow a "parent" entry in the tree view. They refer to their parent with an ID. They are compatible with attachments, documentation, full history, etc.

They can be found under the parent entry or in the ***Sub Entries*** tab of the parent entry [***Dashboard***](/rdm/mac/user-interface/content-area/dashboard/).

{% snippet icon.badgeInfo %}
You cannot create a sub entry under another sub entry.
{% endsnippet %}

### From the Ribbon

In the ***{{ en.NPANE }}***, select the entry under which you wish to place a sub entry. In the ***Ribbon***, go to ***Edit*** and click on ***New Entry***. Since you have previously selected the parent entry, you will be prompted to choose either to create a sub entry or an entry. Select ***New Sub Entry***. Then, customize your settings in the entry properties window.

{% snippet icon.badgeInfo %}
You cannot create a sub entry under another sub entry.
{% endsnippet %}

![Add a sub entry from the Ribbon](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2092.png)
![New Sub Entry prompt](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2096.png)

### From the contextual menu

In the ***{{ en.NPANE }}***, right-click the entry under which you wish to place a sub entry and select ***Add*** from the menu. To initialize a new session, you can specify either the type of session or a template. You will be prompted to choose either to create a sub entry or an entry. Select ***New Sub Entry***. Then, customize your settings in the entry properties window.

{% snippet icon.badgeInfo %}
You cannot create a sub entry under another sub entry.
{% endsnippet %}

![Add a sub entry from the contextual menu](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2095.png)
![New Sub Entry prompt](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2096.png)
