---
title: Getting Started
order: 10
---
{% snippet icon.badgeInfo %} 
This topic is for {{ en.TITLECORP }} . If you have purchased {{ en.TITLESBE }} instead, please consult [Team Edition](/server/getting-started/team-edition/) . 
{% endsnippet %}
 
After completing your purchase of {{ en.TITLECORP }} , you will receive an email with three license serials. Each license serial allows for running a {{ en.RDMS }} instance. An instance is in itself a web server application which acts as a back-end for our client applications. You can think of it as a specialized database for your data. All instances can be installed on the same physical server or spread across many.  

{{ en.RDMS }} can be installed through different [topologies](/server/overview/topologies/) .  

## Domain requirements 

These requirements apply especially if you intend to use Automatic User Account Creation (see [Authentication](/server/web-interface/administration/configuration/server-settings/general/authentication/) ) and/or User Groups to manage your instance.  

<table>
	<tr>
		<td>

![!!clip10129.png](/img/en/server/clip10129.png) 
		</td>
		<td>
Create Active Directory groups to manage your instance. Typical examples are: RDM Admins, RDM Operators, RDM Users . 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](/img/en/server/clip10129.png) 
		</td>
		<td>
Add domain users to the Active Directory groups. 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](/img/en/server/clip10129.png) 
		</td>
		<td>
Create a VaultOwner account that will be the owner of the database. Performing upgrades with this account will ensure the proper rights are held. 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](/img/en/server/clip10129.png) 
		</td>
		<td>
Create a VaultRunner account that will be used as the identity of the website. This will allow you to harden the permissions to what is minimally required. 
		</td>
	</tr>
</table>

## Checklist for installing and running {{ en.RDMS }}  

### Software requirements on the server hosting the instance 

<table>
	<tr>
		<td>

![!!clip10129.png](/img/en/server/clip10129.png) 
		</td>
		<td>
Microsoft .NET Framework 4.8. 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](/img/en/server/clip10129.png) 
		</td>
		<td>
Microsoft SQL Server (see [Database Instance](/server/installation/database-instance/) ) if you intend to host the solution on a single server (see [Topologies](/server/overview/topologies/) ). 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](/img/en/server/clip10129.png) 
		</td>
		<td>
Internet Information Services (IIS) 7.0 or better (see this Microsoft topic for more information: [Install IIS and ASP.NET Modules](https://docs.microsoft.com/en-us/iis/application-frameworks/scenario-build-an-aspnet-website-on-iis/configuring-step-1-install-iis-and-asp-net-modules) ). 
		</td>
	</tr>
</table>

### Installation steps 

<table>
	<tr>
		<td>

![!!clip10129.png](/img/en/server/clip10129.png) 
		</td>
		<td>
Create a new instance of {{ en.RDMS }} (see [Create {{ en.RDMS }} Instance](/server/installation/create-server-instance/) ). 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](/img/en/server/clip10129.png) 
		</td>
		<td>
Create a {{ en.RDMS }} administrator account in the [User Management](/server/web-interface/administration/security-management/users/) . 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](/img/en/server/clip10129.png) 
		</td>
		<td>
Create [User Groups](/server/web-interface/administration/security-management/user-groups/) . 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](/img/en/server/clip10129.png) 
		</td>
		<td>
Add domain users or built-in users (see [User Management](/server/web-interface/administration/security-management/users/) ). 
		</td>
	</tr>
</table>



