---
eleventyComputed:
  title: Getting started
  description: After completing your purchase of {{ en.DVLS }} Enterprise Edition, you will receive an email with three license serials.
  order: 10
---

After receiving your [free edition](/server/getting-started/installation/registration/register-free-server-license/) or completing your purchase of an [edition of {{ en.DVLS }}](/server/getting-started/installation/registration/register-server-license/), you will receive an email containing the licenses according to your edition. Each license serial allows for running a {{ en.DVLS }} instance.

An instance is in itself a web server application which acts as a back-end for our client applications. You can think of it as a specialized database for your data. All instances can be installed on the same physical server or spread across many. {{ en.DVLS }} can be installed through different [topologies](/server/overview/topologies/).  

## Domain requirements 

These requirements apply especially if you intend to use Automatic User Account Creation (see [Authentication](/server/web-interface/administration/configuration/server-settings/general/authentication/)) and/or User Groups to manage your instance.  

1. Create Active Directory groups to manage your instance. Typical examples are: {{ en.RDM }} Admins, {{ en.RDM }} Operators, {{ en.RDM }} Users.
1. Add domain users to the Active Directory groups.
1. Create a VaultDBOwner account that will be the owner of the database. Performing upgrades with this account will ensure the proper rights are held.
1. Create a VaultDBRunner account that will be used as the identity of the website. This will allow you to harden the permissions to what is minimally required.

## Installation steps 

1. Create a new instance of {{ en.DVLS }} (see [Create {{ en.DVLS }} instance](/server/installation/create-server-instance/)).
1. Create a {{ en.DVLS }} administrator account in the [User management](/server/web-interface/administration/security-management/users/).
1. Create [User groups](/server/web-interface/administration/security-management/user-groups/).
1. Add domain users or built-in users (see [User management](/server/web-interface/administration/security-management/users/)).
