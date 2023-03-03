---
title: Office365
keywords:
- Roles
---
{% snippet icon.badgeInfo %} 
Microsoft Azure Active Directory subscription is required to configure Office365 authentication in {{ en.RDMS }} . You need to create three new app registrations in Microsoft Azure Active Directory before completing the authentication settings. For more information about the app registrations, see Azure portal configuration guide for Office 365 authentication. 
{% endsnippet %}  

 
The Office365 tab allows {{ en.RDMS }} to authenticate users using Office365 authentication . All fields are mandatory except the Automatic User Creation section. 

![Authentication - Configure Office365](/img/en/server/authenticationoffice365.png)

## Settings 
### Office365 Parameters 
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
Tenant ID 
		</td>
		<td>
The TenantID is the Directory ID of the Azure Active Directory. 
		</td>
	</tr>
</table>

### Native Application (RDM) 
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
Client ID 
		</td>
		<td>
Application ID of the Azure AD application. 
		</td>
	</tr>
	<tr>
		<td>
Resources ID 
		</td>
		<td>
resourceAppid from the Manifest of the Azure AD application. 
		</td>
	</tr>
	<tr>
		<td>
Redirect URI 
		</td>
		<td>
Redirect URI from the Azure AD application. 
		</td>
	</tr>
</table>

### Web Application 
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
Client ID 
		</td>
		<td>
Application ID from the web app section of the Azure AD application. 
		</td>
	</tr>
</table>

### Users and User Groups Cache 
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
Client ID 
		</td>
		<td>
Application ID of the Azure AD application. 
		</td>
	</tr>
	<tr>
		<td>
Redirect URI 
		</td>
		<td>
Redirect URI from the Azure AD application. 
		</td>
	</tr>
	<tr>
		<td>
Secret Key 
		</td>
		<td>
Key from the Password generated in Settings – Keys of the Azure AD application. 
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
Auto create domain users in database 
		</td>
		<td>
Automatically create the Office365 user account in the database on the first login attempt. 
		</td>
	</tr>
	<tr>
		<td>
Create read-only user 
		</td>
		<td>
Set the user account as a read-only account. 
		</td>
	</tr>
	<tr>
		<td>
Default Vault 
		</td>
		<td>
Will give access to that {{ en.VLT }} to the user. 
		</td>
	</tr>
</table>

### Office365 Users and User Groups Cache 
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
Update users and groups data every: 
		</td>
		<td>
Set the hours and minutes period that the Office365 Users and User Groups Cache will be refreshed. Default value is set to 30 minutes. 
		</td>
	</tr>
</table>


