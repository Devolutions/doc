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
![Manage – Add Roles and Features](https://webdevolutions.azureedge.net/docs/en/kb/KB4317.png)
1. In the **Installation Type*** section, select the installation type that applies to your situation, then click ***Next***.  
![Installation Type](https://webdevolutions.azureedge.net/docs/en/kb/KB4318.png)
1. In the ***Server Selection*** section, select the destination server, then click ***Next***.  
![Server Selection](https://webdevolutions.azureedge.net/docs/en/kb/KB4319.png)
1. In the ***Server Roles*** section, expand ***Web Server (IIS)*** role, ***Web Server***, then ***Health and Diagnostics***. Check the ***Tracing*** box and click ***Next***.  
![Server Roles](https://webdevolutions.azureedge.net/docs/en/kb/KB4320.png)
1. In the ***Features*** section, simply click ***Next***.  
![Features](https://webdevolutions.azureedge.net/docs/en/kb/KB4321.png)  
1. In the ***Confirmation*** section, click ***Install***.  
![Confirmation](https://webdevolutions.azureedge.net/docs/en/kb/KB4322.png)  
1. In the ***Results*** section, click ***Close***.  
![Results](https://webdevolutions.azureedge.net/docs/en/kb/KB4323.png)  
