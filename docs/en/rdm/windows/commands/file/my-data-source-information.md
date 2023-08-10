---
title: My Data Source Information
---
The ***Data Source Information*** window displays various information related to the current data source, such as the current user and security access. 

{% snippet icon.badgeInfo %} 
The ***My Data Source Information*** view can be different depending on the [Data Source Type](/rdm/windows/data-sources/data-sources-types/) . This topic uses an SQL Server data source. 
{% endsnippet %}
 
![File – My Data Source Information](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3567.png) 

## User and security 

### General 

The General tab displays information about the current user and data source configuration.  
![My Data Source Information - General](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10881.png) 

<table>
	<tr>
		<th>
OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Database user 
		</td>
		<td>
The name of the user currently logged to the database. 
		</td>
	</tr>
	<tr>
		<td>
User 
		</td>
		<td>
The actual windows user. 
		</td>
	</tr>
	<tr>
		<td>
Description 
		</td>
		<td>
Display the description of the user connected to the data source. 
		</td>
	</tr>
	<tr>
		<td>
Is administrator 
		</td>
		<td>
Indicates if the user is an administrator. 
		</td>
	</tr>
	<tr>
		<td>
Allow offline mode 
		</td>
		<td>
Indicates if the user can use the data source in offline mode. 
		</td>
	</tr>
	<tr>
		<td>
Allow drag-and-drop 
		</td>
		<td>
Indicates if the user can drag-and-drop entries in the data source. 
		</td>
	</tr>
	<tr>
		<td>
Is Auto Refresh 
		</td>
		<td>
Indicates if the data source auto refreshes. 
		</td>
	</tr>
	<tr>
		<td>
Auto refresh interval 
		</td>
		<td>
Indicates the delay for the auto refresh to occur. 
		</td>
	</tr>
	<tr>
		<td>
Is Two Factor Configuration 
		</td>
		<td>
Indicates if the data source is configured with a second factor of authentication. 
		</td>
	</tr>
</table>

### Entries 

![My Data Source Information – Entries](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10065.png) 

<table>
	<tr>
		<th>
OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Add, Edit and Delete entries 
		</td>
		<td>
Indicates if the user has the right to add, edit, or delete entries. 
		</td>
	</tr>
	<tr>
		<td>
View information section 
		</td>
		<td>
Indicates if the user can view the information section of entries. 
		</td>
	</tr>
	<tr>
		<td>
Import and Export entries 
		</td>
		<td>
Indicates if the user has the privilege to import or export entries. 
		</td>
	</tr>
	<tr>
		<td>
Allow add entry in {{ en.VLT }} folder 
		</td>
		<td>
Indicates if the user can add entries in the {{ en.VLT }} of the data source. 
		</td>
	</tr>
</table>

### User Groups 

The ***User Groups*** tab displays the user groups that the user is a member of and the rights related to those user groups. 

{% snippet icon.badgeInfo %} 
This feature is only available with an SQL Server/Azure SQL and a {{ en.DVLS }} (DVLS) data source. 
{% endsnippet %}
 
![!!RdmWin4037.png](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RdmWin4037.png) 

