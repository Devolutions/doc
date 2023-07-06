---
eleventyComputed:
  title: Office365 authentication with {{ en.DVLS }}
  keywords:
  - Roles
---
{% snippet icon.badgeInfo %}
Microsoft Azure Active Directory subscription is required to configure Office365 authentication in {{ en.DVLS }}. One new app registration is required in Microsoft Azure Active Directory before completing the authentication settings. For more information about the app registrations, see [Azure portal configuration guide for Microsoft authentication](/kb/devolutions-server/how-to-articles/azure-portal-configuration-guide-microsoft-authentication/).
{% endsnippet %}  

The ***Microsoft Authentication*** tab allows {{ en.DVLS }} to authenticate users using Office365 authentication. All fields are mandatory except the ***Automatic User Creation*** section.

![Authentication - Configure Office365](https://webdevolutions.azureedge.net/docs/en/server/AuthenticationOffice365.png)

## Settings
### PARAMETERS
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
The name displayed in
		</td>
	</tr>
	<tr>
		<td>
Tenant ID
		</td>
		<td>
The TenantID is the Directory ID of the Azure Active Directory.
		</td>
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
Use specific client ID for users and user groups cache
		</td>
		<td>
Only use this if the secret is in another Azure application.
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

### AUTOMATIC USER CREATION
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
A
		</td>
	</tr>
	<tr>
		<td>
User type
		</td>
		<td>
r
		</td>
	</tr>
	<tr>
		<td>
Only from this group
		</td>
		<td>
R
		</td>
	</tr>
</table>  

### MICROSOFT AUTHENTICATION USERS AND USER GROUP CACHE
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

Client ID:
Application ID of the Azure AD application.  

Redirect URI:
Redirect URI from the Azure AD application.  

Secret Key:
Key from the Password generated in Settings – Keys of the Azure AD application.  

Auto create domain users in database:
Automatically create the Office365 user account in the database on the first login attempt.  

Create read-only user:
Set the user account as a read-only account.  

Default Vault:
Will give access to that {{ en.VLT }} to the user.  

Update users and groups data every:
Set the hours and minutes period that the Office365 Users and User Groups Cache will be refreshed. Default value is set to 30 minutes.  
