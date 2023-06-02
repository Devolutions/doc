---
title: Select the Data Source Type – Teams
---
This topic is for teams that use the functionality offered by our Team Edition.  

{% snippet icon.shieldWarning %} 
When choosing any data source type that is not on-premises, you need to think about the safety of the data both at rest and during transport. We strongly recommend that you further encrypt your data by applying a master key for file-based solutions or a [Security Provider](/rdm/windows/commands/administration/settings/security-providers/) for [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). This ensures only you can read the data. 
{% endsnippet %}
 
To help you select a data source, here is a set of concerns and the list of data sources that can serve in such context.  

<table>
	<tr>
		<th>

CONCERN 
		</th>
		<th>
{{ en.DVLS }} 
		</th>
		<th>
SQL 
SERVER 
		</th>
		<th>
SQL 
AZURE 
		</th>
	</tr>
	<tr>
		<td>
Database not accessible to end users 
		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>
Note 1 and 2 
		</td>
		<td>
Note 1 
		</td>
	</tr>
	<tr>
		<td>
AD accounts used for authentication 
		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
AD group membership used to assign permissions 
		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
Data stored on-premises 
		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
Activity Logs 
		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
	</tr>
	<tr>
		<td>
Data accessible globally 
		</td>
		<td>
Note 3 
		</td>
		<td>
Note 4 
		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
	</tr>
	<tr>
		<td>
Optional local cache of connections 
		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
	</tr>
</table>

## Notes 

### Note 1 

Administrators can create accounts for end users without divulging the passwords. A locked data source definition is imported for each end user. This requires a lot of manual operations by the administrator.  

### Note 2 

Integrated security is the name of a Microsoft technology that allows access to an instance of SQL Server without sending credentials, but rather by using the token provided by the authentication in your Windows computer. This therefore allows the users to connect directly to the database using other tools. It should not be used if you need to prevent direct access to the database.  

Our SQL Server data source offers a third authentication option, namely the ***Custom (Devolutions)*** user type. It allows for the user to be impersonated and therefore not be made aware of the credentials used to connect to the database. Please consult [User Management](/rdm/windows/commands/administration/management/user-management/) for details. 

### Note 3 

You should not expose a {{ en.DVLS }} instance to the Internet without being able to protect it from DDoS attacks. Strong passwords must be used as well as obscure account names that are not easily inferred using social data mining. 

### Note 4 

You can indeed expose a database to the Internet, but you must use SSL/TLS to encrypt traffic and also protect against DDoS attacks. Cloud services like Azure have that concern in the forefront. The default settings of the firewall should be to block everything and then add exceptions and rules. It is also necessary to open the minimum number of required ports, add the numbers of these ports to the exception list, and filter all future requests based on their origin. 

