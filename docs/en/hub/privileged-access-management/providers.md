---
eleventyComputed:
  title: Providers
  order: 20
  description: The Azure AD user provider allows {{ en.DHUBB }} to store the Azure AD application information to be used for Azure AD automatic password rotation.
---
The Azure AD user provider allows {{ en.DHUBB }} to store the Azure AD application information to be used for Azure AD automatic password rotation.

{% snippet icon.badgeHelp %}
See [Create an Azure AD PAM provider](/kb/hub-business/how-to-articles/create-azure-ad-pam-provider/) for more information on its configuration.
{% endsnippet %}  

![Azure AD user provider](https://webdevolutions.azureedge.net/docs/en/hub/Hub2287.png)

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
		
[Password template](/hub/web-interface/administration/management/password-templates/) used to generate the password during the reset password operation 
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
