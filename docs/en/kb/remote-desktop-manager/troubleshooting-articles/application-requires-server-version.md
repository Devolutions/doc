---
eleventyComputed:
  title: Application requires {{ en.DVLS }} version greater or equal than...
---
This application requires a {{ en.DVLS }} version greater or equal than...  
![!!KB4045.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4045.png)  
When {{ en.RDM }} is connected to a {{ en.DVLS }} data source, it will validate at start up the compatibility of both applications version. If an incompatibility occurs, the warning message above will appear in {{ en.RDM }}
## Solution
Firstly, we recommend a {{ en.DVLS }} upgrade. This link will provide instructions about how to perform the upgrade: [Upgrading {{ en.DVLS }}](/server/installation/upgrade-server/) If you require assistance to perform the upgrade please contact us at [service@devolutions.net](mailto:service@devolutions.net)
## Recommendation
1. We strongly advise to deactivate the auto-update feature to avoid any unwanted update. Follow this link for more information about how to apply policies on {{ en.RDM }} group policies (GPO).
1. We recommend the use of the ***Version Management*** tool in ***Administration - System Settings - Applications*** of {{ en.RDM }} This feature will prevent any unwanted upgrade unless approved by the administrator. Using this feature allows the administrator to control the {{ en.RDM }} versions available inside the organization.  
![System Settings - Application - Version Management.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4046.png)
