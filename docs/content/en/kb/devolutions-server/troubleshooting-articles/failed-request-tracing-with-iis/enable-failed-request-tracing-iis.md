---
eleventyComputed:
  title: Enable failed request tracing in IIS
  description: Follow these instructions to enable failed request tracing in IIS.
---
Follow these instructions to enable failed request tracing in IIS:

{% snippet icon.badgeInfo %}
The following steps apply to Windows Server 2016 and later.
{% endsnippet %}

1. Open the ***Server Manager***.
1. In the ***Manage*** tab, select ***Add Roles and Features***.
![Manage – Add Roles and Features](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4317.png)
1. In the **Installation Type*** section, select the installation type that applies to your situation, then click ***Next***.
![Installation Type](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4318.png)
1. In the ***Server Selection*** section, select the destination server, then click ***Next***.
![Server Selection](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4319.png)
1. In the ***Server Roles*** section, expand ***Web Server (IIS)*** role, ***Web Server***, then ***Health and Diagnostics***. Check the ***Tracing*** box and click ***Next***.
![Server Roles](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4320.png)
1. In the ***Features*** section, simply click ***Next***.
![Features](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4321.png)
1. In the ***Confirmation*** section, click ***Install***.
![Confirmation](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4322.png)
1. In the ***Results*** section, click ***Close***.
![Results](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4323.png)
