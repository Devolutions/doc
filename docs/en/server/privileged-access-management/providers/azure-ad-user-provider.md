---
title: Azure AD user provider
---
The Azure AD User Provider allows {{ en.DVLS }} to store the Azure AD application information to be used for Azure AD accounts discovery or to achieve password rotation. See the [Create an Azure AD PAM Provider](/kb/devolutions-server/how-to-articles/create-azure-ad-pam-provider/) knowledge base article for more information on its configuration.  
![Azure AD Users provider](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8095.png) 

### General 

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
Name 
		</td>
		<td>
Display name of the Provider. 
		</td>
	</tr>
	<tr>
		<td>
Description 
		</td>
		<td>
Description of the Provider. 
		</td>
	</tr>
</table>

### Password settings 

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
Password template used on generation 
		</td>
		<td>
Password template that will be used to generate the password during the reset password operation. 
		</td>
	</tr>
</table>

### Server 

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
ID of the Azure tenant 
		</td>
	</tr>
	<tr>
		<td>
Client ID 
		</td>
		<td>
ID of the Azure Application 
		</td>
	</tr>
	<tr>
		<td>
Secret key 
		</td>
		<td>
Secret key of the Azure Application
		</td>
	</tr>
</table>

### Actions 

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
Add PAM Vault 
		</td>
		<td>
Will create a PAM Vault with the provider's name if enabled. 
		</td>
	</tr>
	<tr>
		<td>
Add Scan Configuration 
		</td>
		<td>
Will open the Scan Configuration dialog if enabled. 
		</td>
	</tr>
</table>
