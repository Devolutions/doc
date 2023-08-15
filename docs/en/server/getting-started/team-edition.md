---
title: Team Edition
keywords:
- Roles
---
After the purchase of the {{ en.DVLS }} Team Edition, an email is sent with the license serial. This key allows you to create a new instance of {{ en.DVLS }}.  

The installation procedure is available at [{{ en.DVLS }} Installation](/server/installation/) 
{% snippet icon.badgeCaution %} 
Please check your junk/spam mail folder if you do not see the email in your inbox. 
{% endsnippet %}
 
## Domain requirements 

These requirements apply only if you intend to use Automatic User Account Creation (see [Authentication](/server/web-interface/administration/configuration/server-settings/general/authentication/)) and/or User Groups to manage your instance. 

<table>
	<tr>
		<td>

![!!clip10129.png](https://webdevolutions.azureedge.net/docs/en/server/clip10129.png) 
		</td>
		<td>
Create Active Directory groups to manage your instance. Typical examples are: {{ en.RDM }} Admins, {{ en.RDM }} Operators, {{ en.RDM }} Users. 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](https://webdevolutions.azureedge.net/docs/en/server/clip10129.png) 
		</td>
		<td>
Add domain users to the Active Directory groups. 
		</td>
	</tr>
</table>

## Check list for installing and running Team Edition

### Software requirements on the server hosting the instance 

<table>
	<tr>
		<td>

![!!clip10129.png](https://webdevolutions.azureedge.net/docs/en/server/clip10129.png) 
		</td>
		<td>
Microsoft .NET Framework 4.8. 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](https://webdevolutions.azureedge.net/docs/en/server/clip10129.png) 
		</td>
		<td>
Microsoft SQL Server database (see [Database Instance](/server/installation/database-instance/)). 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](https://webdevolutions.azureedge.net/docs/en/server/clip10129.png) 
		</td>
		<td>
Information Services (IIS) 7.0 or better (see [Install IIS and ASP.NET Modules](https://technet.microsoft.com/en-ca/library/hh831475.aspx#InstallIIS)). 
		</td>
	</tr>
</table>

### Installation steps 

<table>
	<tr>
		<td>
		
![!!clip10129.png](https://webdevolutions.azureedge.net/docs/en/server/clip10129.png) 
		</td>
		<td>
Create a new instance of {{ en.DVLS }} (see [Create {{ en.DVLS }} Instance](/server/installation/create-server-instance/)). 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](https://webdevolutions.azureedge.net/docs/en/server/clip10129.png) 
		</td>
		<td>
Create a {{ en.DVLS }} administrator account in the [User Management](/server/web-interface/administration/security-management/users/). 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](https://webdevolutions.azureedge.net/docs/en/server/clip10129.png) 
		</td>
		<td>
Create [User Groups](/server/web-interface/administration/security-management/user-groups/). 
		</td>
	</tr>
	<tr>
		<td>
![!!clip10129.png](https://webdevolutions.azureedge.net/docs/en/server/clip10129.png) 
		</td>
		<td>
Add domain users or built-in users (see [User Management](/server/web-interface/administration/security-management/users/)). 
		</td>
	</tr>
</table>


