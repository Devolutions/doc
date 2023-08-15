---
title: Database
order: 20
---
The ***Database*** tab section contains the information of the SQL Server, the SQL credentials information and the database name used by {{ en.DVLS }}. 

![Server Settings - Database](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8002.png) 

## Settings 
### Database 
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
Host 
		</td>
		<td>
Name of the host where the database will be stored. 
		</td>
	</tr>
	<tr>
		<td>
Database 
		</td>
		<td>
Name of the database on the server. 
		</td>
	</tr>
	<tr>
		<td>
Advanced Settings 
		</td>
		<td>

Access the [Advanced Settings](/server/management/devolutions-server-console/devolutions-server-settings/database/advanced-settings/). 
		</td>
	</tr>
	<tr>
		<td>
Test Server 
		</td>
		<td>
Test the connection with the server to validate if the proper information has been provided. 
		</td>
	</tr>
	<tr>
		<td>
Test Database 
		</td>
		<td>
Test the connection with the database to validate if the proper information has been provided. 
		</td>
	</tr>
	<tr>
		<td>
Update Database 
		</td>
		<td>
Update the database on the server. 
		</td>
	</tr>
	<tr>
		<td>
Save Schema 
		</td>
		<td>
Save the database schema in a file to allow sending it to our [support team](mailto:service@devolutions.net). 
		</td>
	</tr>
	<tr>
		<td>
View Database Version 
		</td>
		<td>
View what is the current database version. 
		</td>
	</tr>
</table>

### Credentials 

{% snippet icon.badgeInfo %} 
Note that the Integrated Security or Credentials settings affect how the {{ en.DVLS }} communicates with the SQL database. These options do not have any impact on how users will authenticate on the {{ en.DVLS }} instance. 
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
Authentication type 
		</td>
		<td>

Select between ***Windows Authentication*** or ***SQL Server Authentication*** for authenticating to the database. In order for [Windows Authentication](/kb/devolutions-server/how-to-articles/configure-server-use-integrated-security/) to be used to connect to the database, you must set a domain account as the Application Pool identity in the IIS Manager. 
		</td>
	</tr>
	<tr>
		<td>
Username 
		</td>
		<td>
SQL login account username if SQL Authentication is selected as the authentication type. 
		</td>
	</tr>
	<tr>
		<td>
Password 
		</td>
		<td>
SQL login account password if SQL Authentication is selected as the authentication type. 
		</td>
	</tr>
	<tr>
		<td>
Advanced Credentials 
		</td>
		<td>
Access the [Advanced Credentials](/server/management/devolutions-server-console/devolutions-server-settings/database/advanced-credentials/) that allows the {{ en.DVLSCONSOLE }} to communicate with the SQL database. 
		</td>
	</tr>
</table>




