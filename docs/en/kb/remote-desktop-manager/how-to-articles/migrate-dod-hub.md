---
eleventyComputed:
  title: Migrate from {{ en.DOD }} to {{ en.HUBP }}
  description: To benefit from all the latest features and better security, it is recommended to use {{ en.HUBP }} instead of {{ en.DOD }}.
---
To benefit from all the latest features, it is recommended to use {{ en.HUBP }} instead of {{ en.DOD }}. Devolutions {{ en.HUBP }} provides a secure vault for individual users to safeguard and manage their personal passwords. It also serves as a data source for {{ en.RDM }}.
{% snippet icon.badgeInfo %}
A [{{ en.HUBP }}](/hub/getting-started/create-hub/hub-personal/) needs to be created before migrating from {{ en.DOD }}.
{% endsnippet %}  

## Steps
1. Connect to the {{ en.DOD }} data source.
1. A prompt will appear about migrating to {{ en.HUBP }}, click ***Yes***.  
![Migration Prompt](https://webdevolutions.azureedge.net/docs/en/kb/KB0028.png)
1. Select the databases that should be migrated, then click ***Next***.  
![Databases](https://webdevolutions.azureedge.net/docs/en/kb/KB0029.png)
1. Enter the ***Master Key*** and click ***Open***.  
![Master Key](https://webdevolutions.azureedge.net/docs/en/kb/KB0030.png)
1. Once the files are done migrating, click ***Next***.  
![Migrating Files](https://webdevolutions.azureedge.net/docs/en/kb/KB0031.png)
1. A prompt will show files that were successful, skipped or had errors while migrating. Click ***Finish***.  
![Migration Report](https://webdevolutions.azureedge.net/docs/en/kb/KB0032.png)
1. The migrated files will now appear in the {{ en.HUBP }} data source.  
![Migrated Files](https://webdevolutions.azureedge.net/docs/en/kb/KB0033.png)
