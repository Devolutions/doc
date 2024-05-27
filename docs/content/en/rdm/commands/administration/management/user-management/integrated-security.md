---
eleventyComputed:
  title: User management integrated security
---
***Integrated Security*** is a Microsoft technology, which uses the credentials of the current Windows session and send them automatically to the remote resources for authentication.

{% snippet, "badgeInfo" %}
This feature is available with the [SQL Server](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) or [{{ en.DVLS }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/server/) data sources.
{% endsnippet %}

## Settings
To use the ***Integrated Security***, enable the ***Integrated Security*** box in the ***User Management*** window. The ***Password*** field is disabled because the operating system will provide a cached copy automatically.
![Integrated Security](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10291.png)

When the option is activated, an ellipsis button either appears or is enabled. Click this button to display the ***Select User*** dialog.
![Select User](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10294.png)

{% snippet, "badgeInfo" %}
Ensure the appropriate domain is displayed in the ***From this location*** field. Sometime the location defaults to the local computer. Click the ***Locations*** button to browse for the domain instead.
{% endsnippet %}

When using ***Integrated Security***, the currently running windows session must be from a user of the domain. If you need to use other credentials, {{ en.RDM }} must be started using the RUNAS command as described in Running {{ en.RDM }} as Another User.

