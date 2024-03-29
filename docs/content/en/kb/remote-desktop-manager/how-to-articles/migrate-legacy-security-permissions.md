---
eleventyComputed:
  title: Disable legacy security in {{ en.RDM }}
  status: Topic available in German language
  description: This topic demonstrates how to safely disable legacy security in {{ en.RDM }} to use permissions instead.
  keywords:
  - Legacy Security
  - Permissions
---
{% snippet icon.badgeWarning %}
Legacy security and security groups have been deprecated and will be completely removed starting with version 2023.3 of {{ en.RDM }}.

Before disabling legacy security, it is advised to configure the ***User Groups***. See [Migrate from security groups to user groups](/kb/remote-desktop-manager/how-to-articles/migration-security-groups-user-groups/).
{% endsnippet %}

Follow the steps below to disable ***Legacy Security*** in {{ en.RDM }}.

1. Navigate to the ***Administration*** tab in {{ en.RDM }}.
1. Under the ***Settings*** section, select ***System Settings***.
![Administration – System Settings](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0026.png)
1. Go to ***{{ en.VLT_MAJ }} Management – Security Settings – Security*** and disable ***Use legacy security***.
![Use legacy security](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0027.png)
1. Click ***Ok*** to apply the changes and close the window.
