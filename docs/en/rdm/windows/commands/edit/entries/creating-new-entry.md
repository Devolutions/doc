---
title: Creating an Entry
---
{% youtube '-3Dfoy1qaQ0' %}  

When getting started with {{ en.RDM }} , you must configure your entries. There are many types of entries; you should know what third party or technology you will use in order to choose the appropriate entry type(s) that you plan on configuring. 

## Creating an entry from the context menu 

On the main application window, right-click on the name of the data source and select ***Add*** from the menu. To initialize a new session, you can specify either the type of session or a template. You will be prompted to customize your settings in the entry properties window.  
![Adding a new entry](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11224.png) 

## Creating an entry with drag & drop 

You can also create a session by dragging and dropping an .rdp file in the main application window. By doing so, {{ en.RDM }} will ask you whether to import the content and create a new session, or create a session linked to the .rdp file. It is also possible to drag and drop the LogMeIn desktop shortcut to create a LogMeIn session. 
{% snippet icon.badgeInfo %} 
It is possible that drag and drop will not work because of your security settings. They may prevent applications running in different contexts from interacting. For example, if {{ en.RDM }} is running in an elevated context (administrator mode) and Internet Explorer is running in default mode, Windows will not allow you to drag a URL link in the application. 
{% endsnippet %}
 
## Creating an entry by importing its configuration 

You can also import entries by using the [Import Computer Wizard](/rdm/windows/commands/file/import/computer-wizard/), or by importing its configuration directly from any compatible applications supported by our import tools. You can learn more in the [Import](/rdm/windows/commands/file/import/sessions/) section. 
