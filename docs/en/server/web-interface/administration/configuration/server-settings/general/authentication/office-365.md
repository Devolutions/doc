---
eleventyComputed:
  title: Microsoft Authentication with {{ en.DVLS }}
  keywords:
  - Roles
---
{% snippet icon.badgeInfo %}
Microsoft Azure Active Directory subscription is required to configure Office365 authentication in {{ en.DVLS }}. One new app registration is required in Microsoft Azure Active Directory before completing the authentication settings. For more information about the app registrations, see [Azure portal configuration guide for Microsoft Authentication](/kb/devolutions-server/how-to-articles/azure-portal-configuration-guide-microsoft-authentication/).
{% endsnippet %}  

The ***Microsoft Authentication*** tab allows {{ en.DVLS }} to authenticate users using Office365 authentication. The ***Display name***, ***Tenant ID***, ***Client ID*** and ***Secret value*** fields are mandatory.

![Authentication - Configure Microsoft Authentication](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0022.png)  

## Settings
### Parameters
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
Display name
		</td>
		<td>
The name displayed for this configuration
		</td>
	</tr>
	<tr>
		<td>
Tenant ID
		</td>
		<td>
The TenantID is the Directory ID of the Azure Active Directory
		</td>
	</tr>
	<tr>
		<td>
Client ID
		</td>
		<td>
Application ID of the Azure AD application
		</td>
	</tr>
	<tr>
		<td>
Use specific client ID for users and user groups cache
		</td>
		<td>
Only use this if the secret is in another Azure application
		</td>
	</tr>
	<tr>
		<td>
Secret value
		</td>
		<td>
Secret generated in Azure
		</td>
	</tr>
	<tr>
		<td>
Type of user interaction on login
		</td>
		<td>
<b><i>Automatic</b></i>: Choose the most appropriate method for the context
<br>
<b><i>Select account</b></i>: Always display account selection
<br>
<b><i>None</b></i>: Silent connection only, the user must be connected through another application of the provider
<br>
<b><i>Login</b></i>: Forces the user to the provider every time
		</td>
	</tr>
	<tr>
		<td>
Test connection
		</td>
		<td>
Test the connection given the current parameters
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
Auto create on first login
		</td>
		<td>
Creates a user with the first login
		</td>
	</tr>
	<tr>
		<td>
User type
		</td>
		<td>
Choose between <b><i>User</b></i> and <b><i>Read-only user</b></i> (only available when <b><i>Auto create on first login</b></i> is enabled)
		</td>
	</tr>
	<tr>
		<td>
Only from this group
		</td>
		<td>
Only users from this group will be created on first login (only available when <b><i>Auto create on first login</b></i> is enabled)
		</td>
	</tr>
</table>  

### Microsoft Authentication Users and User Group Cache
{% snippet icon.badgeInfo %}
It is recommended to disable the cache feature, as the hybrid mode is more efficient. By default the option is already disabled.
{% endsnippet %}  

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
Enable cache feature
		</td>
		<td>
If enabled: Puts the users, groups and links between them in the database<br>
If disabled: Hybrid mode
		</td>
	</tr>
	<tr>
		<td>
Recurrence
		</td>
		<td>
<b><i>Interval</b></i>: Updates the users and user groups data at timed intervals (hours and minutes)<br>
<b><i>Daily</b></i>: Updates the users and user groups data every day at the set time
		</td>
	</tr>
</table>
