---
eleventyComputed:
  title: Migrate from legacy security to permissions in {{ en.RDM }}
  status: Topic available in German language
  description: This topic demonstrates how to safely migrate from Legacy Security to Permissions in {{ en.RDM }}.
  keywords: 
  - Legacy Security
  - Permissions
---
{% snippet icon.badgeWarning %}
Legacy security and security groups have been deprecated and will be completely removed starting with version 2023.3 of {{ en.RDM }}.  

Before migrating from legacy security, it is advised to configure the ***User Groups*** beforehand. See [Migrate from security groups to user groups](/kb/remote-desktop-manager/how-to-articles/migration-security-groups-user-groups/).
{% endsnippet %}  

Follow the steps below to safely migrate from ***Legacy Security*** to ***Permissions*** in {{ en.RDM }}.

1. Navigate to the ***Administration*** tab in {{ en.RDM }}.
1. Under the ***Settings*** section, select ***System Settings***.  
![Administration – System Settings](https://webdevolutions.azureedge.net/docs/en/kb/KB0026.png)
1. Go to ***{{ en.VLT }} Management – Security Settings – Security*** and disable ***Use legacy security***.  
![Use legacy security](https://webdevolutions.azureedge.net/docs/en/kb/KB0027.png)
1. Click ***Ok*** to apply the changes and close the window.
