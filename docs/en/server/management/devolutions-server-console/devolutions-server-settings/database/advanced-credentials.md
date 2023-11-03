---
eleventyComputed:
  title: Advanced credentials
  keywords:
  - Roles
---
The ***Advanced Credentials*** are used to allow {{ en.DVLS }} to communicate with the SQL database. 
{% snippet icon.badgeCaution %} 
Only SQL login accounts can be used. 
{% endsnippet %}
 
For further information about these accounts, please see [Pre-Deployment Account Survey](/kb/devolutions-server/knowledge-base/pre-deployment-account-survey/). 

![Advanced Credentials Dialog](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8168.png) 

## Settings 
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
Management Tools 
		</td>
		<td>
Credentials that allow the {{ en.DVLSCONSOLE }} to communicate with the SQL database. Must be an SQL account. 
		</td>
	</tr>
	<tr>
		<td>
Scheduler Service 
		</td>
		<td>
Credentials used for the Scheduler Service features (Backup Manager, Email Notifications, Secure Messaging, Domain Users and User groups cache, Azure AD cache). Must be an SQL account. If the Integrated Security option is enabled, the Username and Password fields are grayed out. 
		</td>
	</tr>
	<tr>
		<td>
Web Application 
		</td>
		<td>
Credentials used for the Web Application to communicate with the SQL database. Must be an SQL account. If the Integrated Security option is enabled, the Username and Password fields are grayed out. 
		</td>
	</tr>
	<tr>
		<td>
Test Connection 
		</td>
		<td>
Test against the SQL server the credentials set in the Username/Password fields. If the Integrated Security option is enabled, the button is grayed out. 
		</td>
	</tr>
	<tr>
		<td>
Apply Least Permissions 
		</td>
		<td>
Will execute an SQL statement to grant least permissions on the database for the Scheduler Service or the Web Application accounts. 
		</td>
	</tr>
	<tr>
		<td>
Generate Script 
		</td>
		<td>
Will generate an SQL script that can be run on the SQL database for the Scheduler Service or the Web Application accounts. Only available with Windows Authentication. 
		</td>
	</tr>
</table>
