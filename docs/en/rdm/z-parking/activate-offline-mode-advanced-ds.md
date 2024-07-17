---
eleventyComputed:
  title: Enable offline mode for an advanced data source
---
{% youtube 'W7jK8g4WbNQ' %}

{% snippet, "badgeCaution" %}
You must enable to offline mode on multiple levels; the Data Source, the Users, the User groups (only for {{ en.DVLS }}), the System Settings and each {{ en.VLT }}.
{% endsnippet %}

1. For the data source, go to ***File – Data sources - Advanced - Caching Mode***, and set to ***File*** or ***In-memory***. We would also recommend checking the ***Auto go offline*** option.
![Data source settings](https://cdnweb.devolutions.net/docs/RDMW4083_2024_2.png)
1. For users, go in ***Administration - Users - Edit - Settings - Offline mode***.
![User management](https://cdnweb.devolutions.net/docs/RDMW4088_2024_2.png)
1. If you have a {{ en.DVLS }}, for user groups, go in ***Administration - User groups - Edit - Settings***.
![{{ en.DVLS }} User groups settings](https://cdnweb.devolutions.net/docs/RDMW4084_2024_2.png)
1. For system settings, go in ***Administration - System Settings - Application specific - Offline mode***.
![System settings](https://cdnweb.devolutions.net/docs/RDMW4087_2024_2.png)
1. For each {{ en.VLT }} in ***Administration - {{ en.VLT_MAJ }} settings - Security Settings - Allow offline***.
![{{ en.VLT_MAJ }} settings](https://cdnweb.devolutions.net/docs/RDMW4086_2024_2.png)