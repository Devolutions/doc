---
eleventyComputed:
  title: Domain
  order: 10
---
The domain is used to authenticate the user. This is the most secure, flexible and easiest to manage. No need to sync users between the domain and {{ en.DVLS }}. With the Automatic User Creation On First Login option enabled, on first use of the {{ en.DVLS }} data source, the user will be created and be given access rights according to their role in the organization as defined on the domain. You simply need to grant appropriate permissions to your user groups in {{ en.DVLS }}. Upon authentication we will validate the AD groups to which the user belongs and for any that have a corresponding user group we will grant the permissions to the user.  

{% snippet icon.badgeNotice %} 
The Multi Domain feature requires the {{ en.DVLS }} Platinum Edition license. Please see [Multi Domain](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/multi-domain/) for more information about its configuration. 
{% endsnippet %}  

![Authentication - Configure Domain](https://webdevolutions.azureedge.net/docs/en/server/AuthenticationDomain.png)
 
## Settings 
### Domain Authentication 

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Domain 
		</td>
		<td>
Specify the remote computer domain name. 
		</td>
	</tr>
	<tr>
		<td>
Display name 
		</td>
		<td>
Specify the domain name that will be displayed in the application usage like informational messages.<br>

Specify the Active Directory Organizational Unit (OU) or Group to restrict the search in a specific area in the Active Directory structure. The format must be the distinguished name (CN=Users,DC=windjammer,DC=loc). 
		</td>
	</tr>
	<tr>
		<td>
Administration credentials 
		</td>
		<td>
Add the credentials of a domain or service account to access the Active Directory forest and obtain user account information through LDAP queries. This account needs to be able to retrieve user account information and group memberships. It may requires higher privileges than being part of the Domain Users built-in Active Directory group. In most case, it should be sufficient. 
		</td>
	</tr>
</table>

### LDAPS  

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Enable LDAPS 
		</td>
		<td>
Enable the LDAP over SSL communication. 
		</td>
	</tr>
	<tr>
		<td>
Port 
		</td>
		<td>
Default: LDAPS default communication port.  <br>

Custom: Set a specific port value. 
		</td>
	</tr>
</table>

### Automatic User Creation  

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Auto create users in {{ en.DVLS }} 
		</td>
		<td>
Automatically create the domain user account in the {{ en.DVLS }} on the first login attempt. 
		</td>
	</tr>
	<tr>
		<td>
User type 
		</td>
		<td>
Choose between Read only user or User type account. 
		</td>
	</tr>
	<tr>
		<td>
Default {{ en.VLT }} 
		</td>
		<td>
Will give access to that {{ en.VLT }} to the user. 
		</td>
	</tr>
	<tr>
		<td>
Only from this AD group 
		</td>
		<td>
Will create automatically the user only if he is a member of this AD group. 
		</td>
	</tr>
	<tr>
		<td>
Username Format 
		</td>
		<td>
Select the username format that will be created in the database.  <br>

* UPN: The user will be created using the UPN format ex: bill@windjammer.loc.  <br>

* NetBios: The user will be created using the NetBios format ex: WINDJAMMER\bill.  <br>

* Username: The user will be created using the SAM account name.  
		</td>
	</tr>
</table>

### Domain Users and User Group Cache  

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>
Enable domain cache feature 
		</td>
		<td>
Enable the Domain users and user group cache. 
		</td>
	</tr>
	<tr>
		<td>
Recurrence 
		</td>
		<td>
Interval: Refresh the cache based on the refresh rate set with Hours and minutes parameters.  <br>

Daily: Refresh the cache based on the refresh rate set with Every X days and At parameters. 
		</td>
	</tr>
	<tr>
		<td>
Update users and user groups data every: 
		</td>
		<td>
Will refresh the cache based on the selected refresh method. 
		</td>
	</tr>
</table>
