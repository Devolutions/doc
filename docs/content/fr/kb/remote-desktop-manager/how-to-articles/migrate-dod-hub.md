---
eleventyComputed:
  title: Migrate from {{ en.DOD }} to {{ en.DHUBP }}
  description: To benefit from all the latest features and better security, it is recommended to use {{ en.DHUBP }} instead of {{ en.DOD }}.
---
To benefit from all the latest features, it is recommended to use {{ en.DHUBP }} instead of {{ en.DOD }}. {{ en.DHUBP }} provides a secure {{ en.VLT }} for individual users to safeguard and manage their personal passwords. It also serves as a data source for {{ en.RDM }}.
{% snippet icon.badgeInfo %}
A [{{ en.DHUBP }}](/hub/getting-started/create-hub/hub-personal/) needs to be created before migrating from {{ en.DOD }}.
{% endsnippet %}

## Steps
1. Connect to the {{ en.DOD }} data source.
1. A prompt will appear about migrating to {{ en.DHUBP }}, click ***Yes***.
![Migration Prompt](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0028.png)
1. Select the databases that should be migrated, then click ***Next***.
![Databases](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0029.png)
1. Enter the ***Master Key*** and click ***Open***.
![Master Key](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0030.png)
1. Once the files are done migrating, click ***Next***.
![Migrating Files](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0031.png)
1. A prompt will show files that were successful, skipped or had errors while migrating. Click ***Finish***.
![Migration Report](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0032.png)
1. The migrated files will now appear in the {{ en.DHUBP }} data source.
![Migrated Files](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0033.png)
