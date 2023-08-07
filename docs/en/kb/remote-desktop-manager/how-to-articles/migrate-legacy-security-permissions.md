---
eleventyComputed:
  title: Migrate from legacy security to permissions in {{ en.RDM }}
  description: This topic demonstrates how to safely migrate from Legacy Security to Permissions in {{ en.RDM }}.
  keywords: 
  - Legacy Security
  - Permissions
---
{% snippet icon.badgeInfo %}
Security groups are deprecated as of version 2023.3 of Remote Desktop Manager.
{% endsnippet %}

This topic demonstrates how to safely migrate from ***Legacy Security*** to ***Permissions*** in {{ en.RDM }}.
{% snippet icon.badgeCaution %}
Before migrating from ***Legacy Security*** it is advised to also configure the ***User Groups*** beforehand. Read more about it in [Migration from Security Groups to User Groups](/kb/remote-desktop-manager/how-to-articles/migration-security-groups-user-groups/).
{% endsnippet %}  

## Migrating from legacy security to permissions

1. Navigate to the ***Administration*** tab in {{ en.RDM }}.
1. Under the ***Settings*** section, select ***System Settings***.  
![System Settings](https://webdevolutions.azureedge.net/docs/en/kb/KB0026.png)
1. Go to ***Vault Management – Security Settings – Security***, and uncheck ***Use legacy security***.  
![Use legacy security](https://webdevolutions.azureedge.net/docs/en/kb/KB0027.png)
1. Click ***Ok*** to apply the changes and close the window.
