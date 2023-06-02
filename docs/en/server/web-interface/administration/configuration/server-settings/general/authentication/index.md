---
title: Authentication
order: 10
---
The Authentication section allows the administrator to select which authentication types will be used to connect on {{ en.DVLS }} .  

![Adminsitration – Server Settings – Authentication](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8100.png)

## Settings 
### Authentication Modes 
{% snippet icon.badgeCaution %} 
The machine hosting {{ en.DVLS }} must be joined to the configured domain for Windows Authentication to work. 
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
Authenticate with domain user 
		</td>
		<td>
The domain is used to authenticate the user. 
		</td>
	</tr>
	<tr>
		<td>
Authenticate with Office365 user 
		</td>
		<td>
AzureAD is used to authenticate the user. 
		</td>
	</tr>
		<tr>
		<td>
Authenticate with Okta user 
		</td>
		<td>
Okta is used to authenticate the user. 
		</td>
	</tr>
	<tr>
		<td>
Authenticate with {{ en.DVLS }} user 
		</td>
		<td>
The {{ en.DVLS }} is used to authenticate the user. You must create the initial user through the console. 
		</td>
	</tr>
	<tr>
		<td>
Enable Windows authentication 
		</td>
		<td>
The application will use the current Windows authenticated user to authenticate to the {{ en.DVLS }} instance. To complete the activation of the feature, consult this <a href="/kb/devolutions-server/how-to-articles/configure-windows-authentication/" target="_blank">page</a>. 
		</td>
	</tr>
		<tr>
		<td>
Enable Emergency Code authentication 
		</td>
		<td>
The application will send an email that contains an emergency code to authenticate if any of the above authentication methods are not working. The <a href="/server/web-interface/administration/configuration/server-settings/general/email/" target="_blank">Email</a> setting is required for this option to work. 
		</td>
	</tr>
</table>

### Configuration 
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
Configure the <a href="/server/web-interface/administration/configuration/server-settings/general/authentication/domain/" target="_blank">Domain</a> type. 
		</td>
	</tr>
	<tr>
		<td>
Office365 
		</td>
		<td>
Configure the <a href="/server/web-interface/administration/configuration/server-settings/general/authentication/office-365/" target="_blank">Office365</a> type. 
		</td>
	</tr>
	<tr>
		<td>
Okta 
		</td>
		<td>
Configure the Okta type. 
		</td>
	</tr>
	<tr>
		<td>
Authentication migration 
		</td>
		<td>
Migrate the authentication method of the existing user account to another authentication method or another domain in Active Diectory or Azure Active Directory. To start and complete the migration process, consult this <a href="/kb/devolutions-server/how-to-articles/configure-windows-authentication/" target="_blank">page</a>.
		</td>
	</tr>
</table>



