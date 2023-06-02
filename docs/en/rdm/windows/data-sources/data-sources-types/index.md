---
title: Data Sources Types
order: 20
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
![!!DataSourceDODLarge.png](https://webdevolutions.azureedge.net/docs/common/DataSourceDODLarge.png) 
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
![!!ApplicationHubLarge.png](https://webdevolutions.azureedge.net/docs/en/rdm/windows/ApplicationHubLarge.png) 
		</td>
		<td>
{{ en.HUB }} Business 
		</td>
		<td>
{{ en.RDM }} connects to the {{ en.HUB }} Business vault.  

Note that there are different subscription levels for this product.  

For more information, please see the [products features and highlights](https://devolutions.net/password-hub/) and consult our [Hub Business](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/hub-business/) topic. 
		</td>
		<td>
Pros: 

* Quick. 
* Reliable. 
* Secure. 
* Shareable. 

Cons: 

* Cannot be self-hosted. 
* No offline mode. 
		</td>
	</tr>
	<tr>
		<td>
![!!hub-personal-32x32.png](https://webdevolutions.azureedge.net/docs/en/rdm/windows/hub-personal-32x32.png) 
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
![!!DataSourceDPSLarge.png](https://webdevolutions.azureedge.net/docs/common/DataSourceDPSLarge.png) 
		</td>
		<td>
{{ en.DVLS }} 
		</td>
		<td>
{{ en.RDM }} uses {{ en.DVLS }} to store session information.  

For more information, please consult our [{{ en.DVLS }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/server/) topic. 
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
![!!DataSourceDropBoxLarge.png](https://webdevolutions.azureedge.net/docs/common/DataSourceDropBoxLarge.png) 
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
* Does not support all features, such as [Attachments](/rdm/windows/commands/view/layout/attachments/) , [Usage Logs](/rdm/windows/commands/view/view/activity-logs/) , [Offline Mode](/rdm/windows/data-sources/offline-mode/) and [User Management](/rdm/windows/commands/administration/management/user-management/) . 
* Dropbox integration uses the Dropbox SDK, so features exclusive to the Business or Enterprise editions are NOT supported. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceAzureLarge.png](https://webdevolutions.azureedge.net/docs/common/DataSourceAzureLarge.png) 
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
* Supports all features, such as [Attachments](/rdm/windows/commands/view/layout/attachments/) , [Usage Logs](/rdm/windows/commands/view/view/activity-logs/) , [Offline Mode](/rdm/windows/data-sources/offline-mode/) and [User Management](/rdm/windows/commands/administration/management/user-management/) . 

Cons: 

* Microsoft Azure needs to be configured. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceSQLServerLarge.png](https://webdevolutions.azureedge.net/docs/common/DataSourceSQLServerLarge.png) 
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
* Supports all features, such as [Attachments](/rdm/windows/commands/view/layout/attachments/) , [Usage Logs](/rdm/windows/commands/view/view/activity-logs/) , [Offline mode](/rdm/windows/data-sources/offline-mode/) and [User Management](/rdm/windows/commands/administration/management/user-management/) . 
* SQL Server Express is free. 

Cons: 

* SQL Server must be installed. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceSQLiteLarge.png](https://webdevolutions.azureedge.net/docs/common/DataSourceSQLiteLarge.png) 
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
* Supports all features, such as [Attachments](/rdm/windows/commands/view/layout/attachments/) , [Usage Logs](/rdm/windows/commands/view/view/activity-logs/) , [Offline Mode](/rdm/windows/data-sources/offline-mode/) and [User Management](/rdm/windows/commands/administration/management/user-management/) . 

Cons: 

* No possibility of sharing. 
* No security management. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceXMLLarge.png](https://webdevolutions.azureedge.net/docs/common/DataSourceXMLLarge.png) 
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
* Does not support all features, such as [Attachments](/rdm/windows/commands/view/layout/attachments/) , [Usage Logs](/rdm/windows/commands/view/view/activity-logs/) , [Offline Mode](/rdm/windows/data-sources/offline-mode/) and [User Management](/rdm/windows/commands/administration/management/user-management/) . 
		</td>
	</tr>
</table>



