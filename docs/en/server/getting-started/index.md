---
eleventyComputed:
  title: Getting started
  description: After completing your purchase of {{ en.DVLS }} Enterprise Edition, you will receive an email with three license serials.
  order: 10
---
{% snippet icon.badgeInfo %} 
This topic is for {{ en.DVLS }} Enterprise Edition. If you have purchased {{ en.DVLS }} Team Edition instead, please consult [Team Edition](/server/getting-started/team-edition/). 
{% endsnippet %}

After completing your purchase of {{ en.DVLS }} Enterprise Edition, you will receive an email with three license serials. Each license serial allows for running a {{ en.DVLS }} instance. An instance is in itself a web server application which acts as a back-end for our client applications. You can think of it as a specialized database for your data. All instances can be installed on the same physical server or spread across many.  

{{ en.DVLS }} can be installed through different [topologies](/server/overview/topologies/).  

## Domain requirements 

These requirements apply especially if you intend to use Automatic User Account Creation (see [Authentication](/server/web-interface/administration/configuration/server-settings/general/authentication/)) and/or User Groups to manage your instance.  

1. Create Active Directory groups to manage your instance. Typical examples are: {{ en.RDM }} Admins, {{ en.RDM }} Operators, {{ en.RDM }} Users.
1. Add domain users to the Active Directory groups.
1. Create a VaultDBOwner account that will be the owner of the database. Performing upgrades with this account will ensure the proper rights are held.
1. Create a VaultDBRunner account that will be used as the identity of the website. This will allow you to harden the permissions to what is minimally required.

## Checklist for installing and running {{ en.DVLS }}  

### Software requirements on the server hosting the instance 

* Microsoft .NET Framework 4.8.
* Microsoft SQL Server (see [Database Instance](/server/installation/database-instance/)) if you intend to host the solution on a single server (see [Topologies](/server/overview/topologies/)).
* Internet Information Services (IIS) 7.0 or better (see this Microsoft's [Install IIS and ASP.NET Modules](https://docs.microsoft.com/en-us/iis/application-frameworks/scenario-build-an-aspnet-website-on-iis/configuring-step-1-install-iis-and-asp-net-modules)) for more information.

### Installation steps 

1. Create a new instance of {{ en.DVLS }} (see [Create {{ en.DVLS }} instance](/server/installation/create-server-instance/)).
1. Create a {{ en.DVLS }} administrator account in the [User management](/server/web-interface/administration/security-management/users/).
1. Create [User groups](/server/web-interface/administration/security-management/user-groups/).
1. Add domain users or built-in users (see [User management](/server/web-interface/administration/security-management/users/)).
