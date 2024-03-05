---
eleventyComputed:
  title: Authentication migration tool
  status: Topic available in German language
---
These instructions explain how to migrate the user accounts and user groups from one authentication provider to another. The tool can be found in three locations on the web interface of your {{ en.DVLS }} instance:
* ***Administration*** – ***Server Settings*** – ***Authentication***
* ***Administration*** – ***Users***
* ***Administration*** – ***User Groups***

{% snippet icon.badgeInfo %}
To migrate users and user groups to the same Identity provider (for example: Active Directory to another Active Directory), the information under ***Administration*** – ***Server Settings*** – ***Authentication*** must be changed to the new domain before using the Authentication Migration Tool.
{% endsnippet %}

## Migration
1. As mentioned in the ***Introduction***, important operations are required before going through this process. Click ***Next***.
![!!KB8124](https://cdnweb.devolutions.net/docs/en/kb/KB8124.png)

1. In the ***Options***, select the source and the destination of the migration.
![!!KB8125](https://cdnweb.devolutions.net/docs/en/kb/KB8125.png)

1. In the ***Users mapping***, the wizard should automatically match the accounts that are similar. The other accounts will need to be selected manually.
![!!KB8126](https://cdnweb.devolutions.net/docs/en/kb/KB8126.png)

1. In the ***User groups mapping*** some groups will also be matched automatically by the wizard, the rest will have to be done manually.
![!!KB8127](https://cdnweb.devolutions.net/docs/en/kb/KB8127.png)

1. The ***Confirmation*** shows the number of selected users, user groups and the ones that are not selected for the migration process.
![!!KB8128](https://cdnweb.devolutions.net/docs/en/kb/KB8128.png)

1. Click on the ***Start migration*** button to start the process and get the migration confirmation report.
![!!KB8129](https://cdnweb.devolutions.net/docs/en/kb/KB8129.png)
