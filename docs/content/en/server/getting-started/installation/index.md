---
eleventyComputed:
  title: Installation
  order: 20
  description: A {{ en.DVLS }} instance is a web application. This allows for exposing its services on the Internet or an Intranet.
---
{% snippet icon.badgeInfo %} 
If you have just received your license serials, please refer to [Getting started](/server/getting-started/). 
{% endsnippet %}

## Topology

A {{ en.DVLS }} instance is a web application. This allows for exposing its services on the Internet or an Intranet.

The recommended [Topology](/server/overview/topologies/) is the use of two servers: a database server and a Web server. For smaller installations, a single server can be used, but resources will be shared between the two user groups, thereby affecting performance.

Key points to consider:
* Please ensure before starting the installation that you have .NET 8.0 installed on your machine.
* It is highly recommended to enable SSL Encryption to protect communication with the instance of the SQL Server. Please follow the instructions from Microsoft in [Configure SQL Server Database Engine for encrypting connections](https://learn.microsoft.com/en-US/sql/database-engine/configure-windows/configure-sql-server-encryption). Note that we recommend this be done after the initial setup is complete.
* For full Active Directory integration, the application pool uses a domain identity. Both servers need to be joined to the domain. 

## Installing {{ en.DVLS }}

### Web server prerequisistes

Please refer to [Installing web server prerequisites](/server/installation/installing-web-server-prerequisites/). 

{% snippet icon.badgeCaution %} 
After you have installed the prerequisites, test the IIS installation by navigating to http<area>://localhost. Do not proceed further if you do not see the IIS welcome screen. There are issues that must be resolved. 
{% endsnippet %}
 
### Database server prerequisites

Please refer to [Database Instance](/server/installation/database-instance/). 

### Create {{ en.DVLS }} instance

Please refer to [Create a {{ en.DVLS }} instance](/server/installation/create-server-instance/).