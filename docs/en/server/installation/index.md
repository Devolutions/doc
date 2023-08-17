---
title: Installation
order: 20
---
## Topology 
{% snippet icon.badgeInfo %} 
If you have just received your license serials, please refer to the [Getting Started](/server/getting-started/) topic. 
{% endsnippet %}
 
A {{ en.DVLS }} instance is actually a web application. This allows for exposing its services on the Internet or an Intranet.  

The recommended [Topology](/server/overview/topologies/) is the use of two servers: a Database server and a Web server. For smaller installations, a single server can be used, but resources will be shared between the two user groups, thereby affecting performance.  

{% snippet icon.badgeInfo %} 
The {{ en.DVLSCONSOLE }} is now offered as a stand alone application. It is available on the [Devolutions download page](https://server.devolutions.net/home/download). 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
Please ensure before starting the installation that you have .NET 4.8 installed on your machine. Available to download from this Microsoft link: [.NET Framework 4.8 Offline Installer](https://api.devolutions.net/redirection/a2ad328a-b3a3-4e04-977a-a3e8681f00dc). 
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
It is highly recommended to enable SSL Encryption in order to protect communication with the instance of the SQL Server. Please follow the instructions from Microsoft on [How to enable SSL encryption](http://support.microsoft.com/kb/316898). Note that we recommend this be done after the initial setup is complete. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
For full Active Directory integration, the application pool uses a domain identity. Both servers need to be joined to the domain. 
{% endsnippet %}
 
## Install {{ en.DVLS }} 

### Web Server Prerequisites 

Please refer to the appropriate topic depending on the operating system of the web server. 

### Installing Web User Groups 

Please refer to the [Installing Web User Groups Prerequisites](/server/installation/installing-web-server-prerequisites/) topic. 

{% snippet icon.badgeCaution %} 
After you have installed the prerequisites, test the IIS installation by navigating to http<area>://localhost. Do not proceed further if you do not see the IIS welcome screen. There are issues that must be resolved. 
{% endsnippet %}
 
### Database Server Prerequisites  

Please refer to the [Database Instance](/server/installation/database-instance/) topic. 

### Create {{ en.DVLS }} Instance 

Please refer to the [Create {{ en.DVLS }} Instance](/server/installation/create-server-instance/) topic. 

