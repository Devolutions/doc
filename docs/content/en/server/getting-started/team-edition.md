---
eleventyComputed:
  title: Team edition
  description: After the purchase of the {{ en.DVLS }} Team edition, an email is sent with the license serial.
---
After the purchase of the {{ en.DVLS }} Team edition, an email is sent with the license serial. This key allows you to create a new instance of {{ en.DVLS }}.  

The installation procedure is available at [{{ en.DVLS }} Installation](/server/installation/) 
{% snippet icon.badgeCaution %} 
Please check your junk/spam mail folder if you do not see the email in your inbox. 
{% endsnippet %}
 
## Domain requirements 

These requirements apply only if you intend to use Automatic User Account Creation (see [Authentication](/server/web-interface/administration/configuration/server-settings/general/authentication/)) and/or User Groups to manage your instance. 

1. Create Active Directory groups to manage your instance. Typical examples are: {{ en.RDM }} Admins, {{ en.RDM }} Operators, {{ en.RDM }} Users.
1. Add domain users to the Active Directory groups.

## Checklist for installing and running the Team edition

### Software requirements on the server hosting the instance 

* Microsoft .NET Framework 4.8.
* Microsoft SQL Server database (see [Database instance](/server/installation/database-instance/))
* Information Services (IIS) 7.0 or better (see [Install IIS and ASP.NET Modules](https://technet.microsoft.com/en-ca/library/hh831475.aspx#InstallIIS))

### Installation steps 

1. Create a new instance of {{ en.DVLS }} (see [Create {{ en.DVLS }} instance](/server/installation/create-server-instance/)).
1. Create a {{ en.DVLS }} administrator account in the [User management](/server/web-interface/administration/security-management/users/).
1. Create [User groups](/server/web-interface/administration/security-management/user-groups/).
1. Add domain users or built-in users (see [User management](/server/web-interface/administration/security-management/users/)).
