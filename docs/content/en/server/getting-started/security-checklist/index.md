---
eleventyComputed:
  title: Security checklist
---
To achieve the highest level of security, you should adhere to the following guidelines.  

{% snippet, "shieldWarning" %} 
These recommendations are valid ONLY if the {{ en.DVLS }} instance is hosted on an intranet EXCLUSIVELY. You must involve a person with knowledge of Internet security to safely host any application on the Internet. You need to protect the site from Denial of Service attacks using an appliance or a security module that is external to {{ en.DVLS }}. 
{% endsnippet %}
 
## General 

* Use Windows Authentication exclusively. 
* Ensure all LDAP communication uses [LDAP over SSL](/server/getting-started/security-checklist/ldap-over-ssl/). 

## SQL Server 

* Enable only the ***Windows Authentication Mode***. 
* Create a domain account that will be used to create the database (VaultDBOwner), as well as another account that will be used by the web server to connect to the database (VaultDBRunner). The latter must have only the minimal set of permissions to perform its tasks. 
* Communicate ONLY through an encrypted connection, please see [Encrypting Connections to SQL Server](/server/getting-started/security-checklist/encrypting-connections-sql-server/). 

## Web Server 

* Configure the application pool to use domain credentials. This account will be added to the SQL Server as a login and be granted only the permissions that are needed (VaultDBRunner). 
* Serve content through SSL (https). See [Configure SSL](/server/kb/how-to-articles/configure-ssl/). 
