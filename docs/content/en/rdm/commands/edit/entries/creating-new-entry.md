---
eleventyComputed:
  title: Create an entry
  description: When getting started with {{ en.RDM }}, you must configure your entries. There are many types of entries; you should know what third party or technology you will use to choose the appropriate entry type(s) that you plan on configuring.
---
{% youtube '-3Dfoy1qaQ0' %}

When getting started with {{ en.RDM }}, you must configure your entries. There are many types of entries; you should know what third party or technology you will use to choose the appropriate entry type(s) that you plan on configuring.

## Create an entry

### From the Ribbon

In the ***{{ en.NPANE }}***, select where you wish the entry to be located. In the ***Ribbon***, go to ***Edit*** and click on ***New Entry***. You will be prompted to customize your settings in the entry properties window.
![Add an entry from the Ribbon](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMWin2182.png)

### From the contextual menu

In the ***{{ en.NPANE }}***, right-click where you wish the entry to be located and select ***Add*** from the menu. To initialize a new session, you can specify either the type of session or a template. You will be prompted to customize your settings in the entry properties window.
![Add an entry from the contextual menu](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMWin2181.png)

### With drag and drop

You can also create a session by dragging and dropping an RDP file in the ***{{ en.NPANE }}***. By doing so, {{ en.RDM }} will ask you whether to import the content and create a new session, or create a session linked to the RDP file. It is also possible to drag and drop the LogMeIn desktop shortcut to create a LogMeIn session.
{% snippet icon.badgeInfo %}
It is possible that drag and drop will not work because of your security settings. They may prevent applications running in different contexts from interacting. For example, if {{ en.RDM }} is running in an elevated context (administrator mode) and Internet Explorer is running in default mode, Windows will not allow you to drag a URL link in the application.
{% endsnippet %}

### By importing a configuration

You can also import entries by using the [Import Computer Wizard](/rdm/windows/commands/file/import/computer-wizard/), or by importing its configuration directly from any compatible applications supported by our import tools. Learn more in [Import](/rdm/windows/commands/file/import/).

## Create a sub entry

{% snippet icon.badgeInfo %}
Since {{ en.RDM }} version 2022.3, sub entries have replaced sub connections. They are different in that sub connections were stored as XML in their parent entry, which is not the case with sub entries, making them much more versatile.

The migration of preexisting sub connections to the new sub entries is automatic when updating from {{ en.RDM }} version 2022.2 or prior to version 2022.3 or later.
{% endsnippet %}

Sub entries are full-fledged, independant entries located bewlow a "parent" entry in the tree view. They refer to their parent with an ID. They are compatible with attachments, documentation, full history, etc.

They can be found under the parent entry or in the ***Sub Entries*** tab of the parent entry [***Dashboard***](/rdm/windows/user-interface/content-area/dashboards/).

{% snippet icon.badgeInfo %}
To create sub entries, make sure the ***Allow sub entries*** option is enabled in the option lists in ***File – Options – Advanced***.

To see sub entries in the ***{{ en.NPANE }}***, make sure the ***Load sub entry in tree view*** option is enabled in the option lists in ***File – Options – User Interface – Tree View***.
{% endsnippet %}

### From the Ribbon

In the ***{{ en.NPANE }}***, select the entry under which you wish to place a sub entry. In the ***Ribbon***, go to ***Edit*** and click on ***New Entry***. Since you have previously selected the parent entry, you will be prompted to choose either to create a sub entry or an entry. Select ***New Sub Entry***. Then, customize your settings in the entry properties window.

{% snippet icon.badgeInfo %}
You cannot create a sub entry under another sub entry.
{% endsnippet %}

![Add a sub entry from the Ribbon](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMWin2182.png)
![New Sub Entry prompt](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMWin2184.png)

### From the contextual menu

In the ***{{ en.NPANE }}***, right-click the entry under which you wish to place a sub entry and select ***Add*** from the menu. To initialize a new session, you can specify either the type of session or a template. You will be prompted to choose either to create a sub entry or an entry. Select ***New Sub Entry***. Then, customize your settings in the entry properties window.

{% snippet icon.badgeInfo %}
You cannot create a sub entry under another sub entry.
{% endsnippet %}

![Add a sub entry from the contextual menu](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMWin2183.png)
![New Sub Entry prompt](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMWin2184.png)
