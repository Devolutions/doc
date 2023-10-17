---
eleventyComputed:
  title: Azure AD user provider
---
The Azure AD user provider allows {{ en.DVLS }} to store the Azure AD application information to be used for Azure AD accounts discovery or to achieve password rotation.

{% snippet icon.badgeHelp %}
See [Create an Azure AD PAM provider](/kb/devolutions-server/how-to-articles/create-azure-ad-pam-provider/) for more information on its configuration. 
{% endsnippet %}  

![Azure AD user provider](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8095.png) 

## General 

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
Display name of the provider 
		</td>
	</tr>
	<tr>
		<td>
Description 
		</td>
		<td>
Description of the provider 
		</td>
	</tr>
</table>

## Password settings 

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
Password template used to generate the password during the reset password operation 
		</td>
	</tr>
</table>

## Server 

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
ID of the Azure application 
		</td>
	</tr>
	<tr>
		<td>
Secret key 
		</td>
		<td>
Secret key of the Azure application
		</td>
	</tr>
</table>

## Actions 

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
Add PAM {{ en.VLT }} 
		</td>
		<td>
If enabled, creates a PAM {{ en.VLT }} with the name of the provider.
		</td>
	</tr>
	<tr>
		<td>
Add Scan Configuration 
		</td>
		<td>
If enabled, opens the ***Scan Configuration*** dialog.
		</td>
	</tr>
</table>
