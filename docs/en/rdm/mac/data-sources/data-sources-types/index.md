---
eleventyComputed:
  title: Data source types
  order: 20
---
{{ en.RDMMAC }} supports multiple types of data source. First decide which data source you are going to use.  

{% snippet icon.badgeNotice %} 
Upon initial installation, you will be running from a local data source which is an SQLite database. 
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

![!!DataSourceDODLarge](https://webdevolutions.azureedge.net/docs/common/DataSourceDODLarge.png) 
		</td>
		<td>
{{ en.DOD }} 
		</td>
		<td>
{{ en.RDMMAC }} uses {{ en.DOD }} to store and synchronize your sessions. Access your sessions from anywhere using an Internet connection.  

For more information, please consult [{{ en.DOD }}](/cloud/rdm-online-services/online-drive/). 
		</td>
		<td>
Pros: 

* Quick. 
* Reliable. 
* Free service. 

Cons: 

* No possibility for sharing. 
* No security management. 
		</td>
	</tr>
	<tr>
		<td>
![!!dvls-90X90](https://webdevolutions.azureedge.net/docs/common/dvls-90X90.png) 
		</td>
		<td>
{{ en.DVLS }} 
		</td>
		<td>
{{ en.RDMMAC }} uses {{ en.DVLS }} to store session information.  

For more information, please consult [{{ en.DVLS }}](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/server/). 

		</td>
		<td>
Pros: 

* Quick. 
* Reliable. 
* Secure. 
* Supports all features, such as attachments, [Usage Logs](/server/web-interface/reports/), [Offline Mode](/server/web-interface/administration/security-management/user-groups/settings/) and [User Management](/server/web-interface/administration/security-management/users/). 
* Active Directory integration. 

Cons: 

* Installation required. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceDropBoxLarge](https://webdevolutions.azureedge.net/docs/common/DataSourceDropBoxLarge.png) 
		</td>
		<td>
Dropbox 
		</td>
		<td>
{{ en.RDMMAC }} uses the Dropbox API to retrieve the XML file from the configured repository.  

For more information, please consult [Dropbox](/rdm/mac/data-sources/data-sources-types/dropbox/). 
		</td>
		<td>
Pros: 

* Can be shared in read-only mode. 
* Backups (by Dropbox) are automatic. 
* Storage infrastructure is free (if within your free storage quota). 

Cons: 

* No security management. 
* There is a possibility for conflict or data corruption to occur. 
* Does not support all features, such as attachments, [Usage Logs](/rdm/mac/commands/view/activity-logs/), [Offline Mode](/rdm/mac/commands/file/go-offline/) and [User Management](/rdm/mac/commands/administration/user-management/). 
* Dropbox integration uses the Dropbox SDK, so features exclusive to the Business or Enterprise editions are NOT supported. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceAzureLarge](https://webdevolutions.azureedge.net/docs/common/DataSourceAzureLarge.png) 
		</td>
		<td>
Microsoft Azure SQL 
		</td>
		<td>
{{ en.RDMMAC }} uses the Microsoft cloud platform to save and manage all sessions.  

For more information, please consult [Microsoft Azure SQL](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/). 
		</td>
		<td>
Pros: 

* Quick. 
* Reliable. 
* Secure. 
* Supports all features, such as attachments, [Usage Logs](/rdm/mac/commands/view/activity-logs/), [Offline Mode](/rdm/mac/commands/file/go-offline/) and [User Management](/rdm/mac/commands/administration/user-management/). 

Cons: 

* Microsoft Azure needs to be configured. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceSQLServerLarge](https://webdevolutions.azureedge.net/docs/common/DataSourceSQLServerLarge.png) 
		</td>
		<td>
Microsoft SQL Server 
		</td>
		<td>
{{ en.RDMMAC }} uses SQL Server to save and manage all sessions. This is one of the available data source for a multi-user environment.  

For more information, please consult [SQL Server (MSSQL)](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/). 

		</td>
		<td>
Pros: 

* Quick. 
* Reliable. 
* Secure. 
* Supports all features, such as attachments, [Usage Logs](/rdm/mac/commands/view/activity-logs/), [Offline Mode](/rdm/mac/commands/file/go-offline/) and [User Management](/rdm/mac/commands/administration/user-management/). 
* SQLServer Express is free. 

Cons: 

* SQLServer must be installed. 
		</td>
	</tr>
	<tr>
		<td>
![!!ApplicationHubLarge](https://webdevolutions.azureedge.net/docs/common/ApplicationHubLarge.png) 
		</td>
		<td>
{{ en.DHUBB }} 
		</td>
		<td>
{{ en.RDMMAC }} connects to the {{ en.DHUBB }} {{ en.VLT }}.  

Note that there are different subscription levels for this product.  

For more information, please see [Products features and highlights](https://devolutions.net/password-hub) and consult [{{ en.DHUBB }}](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/hub-business/). 
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
![!!Hub-personal-32x32](https://webdevolutions.azureedge.net/docs/common/hub-personal-32x32.png) 
		</td>
		<td>
{{ en.DHUBP }} 
		</td>
		<td>
{{ en.RDMMAC }} uses {{ en.DHUBP }} to store and synchronize your sessions. Access your sessions from anywhere using an Internet connection.  

For more information, please consult [{{ en.DHUBP }}](/rdm/mac/data-sources/data-sources-types/hub-personal/). 

		</td>
		<td>
Pros: 

* Quick. 
* Reliable. 
* Free service. 

Cons: 

* No possibility for sharing. 
* No offline mode. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceSQLiteLarge](https://webdevolutions.azureedge.net/docs/common/DataSourceSQLiteLarge.png) 
		</td>
		<td>
SQLite 
		</td>
		<td>
{{ en.RDMMAC }} uses a SQLite database to store session information.  

For more information, please consult [SQLite](/rdm/mac/data-sources/data-sources-types/sqlite/). 

		</td>
		<td>
Pros: 

* Quick. 
* Reliable. 
* Free database. 
* Supports all features, such as attachments and [Usage Logs](/rdm/mac/commands/view/activity-logs/), [Offline Mode](/rdm/mac/commands/file/go-offline/) and [User Management](/rdm/mac/commands/administration/user-management/). 

Cons: 

* No possibility for sharing. 
* No security management. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceXMLLarge](https://webdevolutions.azureedge.net/docs/common/DataSourceXMLLarge.png) 
		</td>
		<td>
XML 
		</td>
		<td>
{{ en.RDMMAC }} saves the settings directly in a file with the XML format.  

For more information, please consult [XML](/rdm/mac/data-sources/data-sources-types/xml/). 

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
* Does not support all features, such as attachments, [Usage Logs](/rdm/mac/commands/view/activity-logs/), [Offline Mode](/rdm/mac/commands/file/go-offline/) and [User Management](/rdm/mac/commands/administration/user-management/). 
		</td>
	</tr>
</table>
