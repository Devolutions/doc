---
title: Folders and Dynamic Variables
---
In {{ en.RDM }}, you can use ***Folder*** entries to organize your sessions in the application. It is possible to store information at the top level folder and use Variables in the child entries to resolve information that you have saved in the parent folder.

{% snippet icon.badgeInfo %}
Variables are only supported for Advanced Data Sources like SQL Server and {{ en.DPS }}
{% endsnippet %}

## SETTINGS

1. Create a Company, Database, Device, Domain, Identity, Printer, Server, Site, Software or Workstation folder in the Navigation Pane.
1. Enter information in Folder properties. Only include a password if you want to put password protection on the folder.  
![!!KB4267.png](/img/en/kb/KB4267.png)
1. In the child sessions, use the appropriate Variables to retrieve the information that is saved at the folder level.  
![!!KB4268.png](/img/en/kb/KB4268.png)
