---
title: Data Sources Types
---
{% youtube 'ji4G8Ti7lls' %}  

{{ en.RDM }} supports multiple types of data sources. First decide which data source you are going to use. 

{% snippet icon.badgeNotice %} 
Upon initial installation, you will be running from a local data source which is a SQLite database. 
{% endsnippet %}
 
## Data Source Types  

<table>
	<tr>
		<th>

ICON 
		</th>
		<th>
NAME 
		</th>
		<th>
DESCRIPTION 
		</th>
		<th>
PROS AND CONS 
		</th>
	</tr>
	<tr>
		<td>
![!!DataSourceDODLarge.png](/img/common/DataSourceDODLarge.png) 
		</td>
		<td>
{{ en.DODV }} 
		</td>
		<td>
{{ en.RDM }} uses {{ en.DODV }} to store and synchronize your sessions. Access your sessions from anywhere using an Internet connection.  

For more information, please consult our [Online Drive](/cloud/rdm-online-services/online-drive/) topic. 
		</td>
		<td>
Pros: 

* Quick. 
* Reliable. 
* Free service. 

Cons: 

* No possibility of sharing. 
* No security management. 
		</td>
	</tr>
	<tr>
		<td>
![!!ApplicationHubLarge.png](/img/en/rdm/windows/ApplicationHubLarge.png) 
		</td>
		<td>
{{ en.HUB }} Business 
		</td>
		<td>
{{ en.RDM }} connects to the {{ en.HUB }} Business vault.  

Note that there are different subscription levels for this product.  

For more information, please see the [products features and highlights](https://devolutions.net/password-hub/) and consult our [Hub Business](RDM_Password_Hub_Business) topic. 
		</td>
		<td>
Pros: 

* Quick. 
* Reliable. 
* Secure. 
* Shareable. 

Cons: 

* Cannot be hosted on premises. 
* No offline mode. 
		</td>
	</tr>
	<tr>
		<td>
![!!hub-personal-32x32.png](/img/en/rdm/windows/hub-personal-32x32.png) 
		</td>
		<td>
{{ en.HUB }} Personal 
		</td>
		<td>
{{ en.RDM }} uses {{ en.HUB }} Personal to store and synchronize your sessions. Access your sessions from anywhere using an Internet connection.  

For more information, please consult our [Hub Personal](/rdm/windows/data-sources/data-sources-types/hub-personal/) topic. 
		</td>
		<td>
Pros: 

* Quick. 
* Reliable. 
* Free service. 

Cons: 

* No possibility of sharing. 
* No offline mode. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceDPSLarge.png](/img/common/DataSourceDPSLarge.png) 
		</td>
		<td>
{{ en.RDMS }} 
		</td>
		<td>
{{ en.RDM }} uses {{ en.RDMS }} to store session information.  

For more information, please consult our [{{ en.RDMS }}](DS_RDMS) topic. 
		</td>
		<td>
Pros: 

* Quick. 
* Reliable. 
* Secure. 
* Supports all features, such as attachments, [Usage Logs](/server/web-interface/reports/) , [Offline Mode](/server/web-interface/administration/security-management/user-groups/settings/) and [User Management](/server/web-interface/administration/security-management/users/) . 
* Active Directory integration. 

Cons: 

* Installation required. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceDropBoxLarge.png](/img/common/DataSourceDropBoxLarge.png) 
		</td>
		<td>
Dropbox 
		</td>
		<td>
{{ en.RDM }} uses the Dropbox API to retrieve the XML file from the configured repository.  

For more information, please consult our [Dropbox](/rdm/mac/data-sources/data-sources-types/dropbox/) topic. 
		</td>
		<td>
Pros: 

* Can be shared in read-only mode. 
* Backups (by Dropbox) are automatic. 
* Storage infrastructure is free (if within your free storage quota). 

Cons: 

* No security management. 
* There is a possibility for conflict or data corruption to occur. 
* Does not support all features, such as [Attachments](Pane_Attachments) , [Usage Logs](View_Logs_Global) , [Offline Mode](/rdm/windows/data-sources/offline-mode/) and [User Management](Administration_UserManagement) . 
* Dropbox integration uses the Dropbox SDK, so features exclusive to the Business or Enterprise editions are NOT supported. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceAzureLarge.png](/img/common/DataSourceAzureLarge.png) 
		</td>
		<td>
Microsoft Azure SQL 
		</td>
		<td>
{{ en.RDM }} uses the Microsoft cloud platform to save and manage all sessions.  

For more information, please consult our [Azure SQL](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/) topic. 
		</td>
		<td>
Pros: 

* Quick. 
* Reliable. 
* Secure. 
* Supports all features, such as [Attachments](Pane_Attachments) , [Usage Logs](View_Logs_Global) , [Offline Mode](/rdm/windows/data-sources/offline-mode/) and [User Management](Administration_UserManagement) . 

Cons: 

* Microsoft Azure needs to be configured. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceSQLServerLarge.png](/img/common/DataSourceSQLServerLarge.png) 
		</td>
		<td>
Microsoft SQL Server 
		</td>
		<td>
{{ en.RDM }} uses SQLServer to save and manage all sessions. This is one of the available data source for a multi-user environment.  

For more information, please consult our [SQL Server (MSSQL)](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) topic. 
		</td>
		<td>
Pros: 

* Quick. 
* Reliable. 
* Secure. 
* Supports all features, such as [Attachments](Pane_Attachments) , [Usage Logs](View_Logs_Global) , [Offline mode](/rdm/windows/data-sources/offline-mode/) and [User Management](Administration_UserManagement) . 
* SQL Server Express is free. 

Cons: 

* SQL Server must be installed. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceSQLiteLarge.png](/img/common/DataSourceSQLiteLarge.png) 
		</td>
		<td>
SQLite 
		</td>
		<td>
{{ en.RDM }} uses a SQLite database to store session information.  

For more information, please consult our [SQLite](/rdm/mac/data-sources/data-sources-types/sqlite/) topic. 
		</td>
		<td>
Pros: 

* Quick. 
* Reliable. 
* Free database. 
* Supports all features, such as [Attachments](Pane_Attachments) , [Usage Logs](View_Logs_Global) , [Offline Mode](/rdm/windows/data-sources/offline-mode/) and [User Management](Administration_UserManagement) . 

Cons: 

* No possibility of sharing. 
* No security management. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceXMLLarge.png](/img/common/DataSourceXMLLarge.png) 
		</td>
		<td>
XML 
		</td>
		<td>
{{ en.RDM }} saves the settings directly in a file with the XML format.  

For more information, please consult our [XML](/rdm/mac/data-sources/data-sources-types/xml/) topic. 
		</td>
		<td>
Pros: 

* Easy backup. 
* Can be edited manually or by an external system. 
* No installation. 

Cons: 

* No possibility of sharing. 
* No security management. 
* There is a possibility for conflict or data corruption to occur. 
* Does not support all features, such as [Attachments](Pane_Attachments) , [Usage Logs](View_Logs_Global) , [Offline Mode](/rdm/windows/data-sources/offline-mode/) and [User Management](Administration_UserManagement) . 
		</td>
	</tr>
</table>



