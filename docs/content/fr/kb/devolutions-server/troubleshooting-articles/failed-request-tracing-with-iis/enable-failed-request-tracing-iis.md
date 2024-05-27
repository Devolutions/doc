---
eleventyComputed:
  title: Enable failed request tracing in IIS
---
{% snippet, "badgeInfo" %}
The following steps are applicable on Windows Server 2016 and up.
{% endsnippet %}

1. Open the ***Server Manager*** Choose ***Add Roles and Features*** from the ***Manage*** menu.
![!!KB4317](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4317.png)
1. Select the ***Installation Type*** and then click ***Next***.
![!!KB4318](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4318.png)
1. Select the destination server and then click ***Next***.
![!!KB4319](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4319.png)
1. On the ***Select server role*** page, expand the ***Web Server (IIS) role***, expand ***Web Server***, and expand ***Health and Diagnostics***. Then, select ***Tracing*** and click ***Next***.
![!!KB4320](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4320.png)
1. On the page ***Select features***, click ***Next***.
![!!KB4321](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4321.png)
1. On the page ***Confirm installation selections***, click ***Install***.
![!!KB4322](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4322.png)
1. On the ***Results*** page, click ***Close***.
![!!KB4323](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4323.png)
