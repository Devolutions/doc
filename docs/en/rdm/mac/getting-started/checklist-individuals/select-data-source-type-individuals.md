---
title: Select the Data Source Type – Individuals
---
This topic is primarily intended for individuals, but also for teams of three (3) users or less who do not wish to set up security.  

To help you select a data source, here is a set of concerns and the list of data sources that can serve in such context. If you have multiple concerns, create the intersection of all sets to isolate a list of choices. 

{% snippet icon.shieldWarning %} 
When choosing any data source type that is not on-premises, you need to think of the safety of the data at rest and during transport. We strongly recommend that you further encrypt your data by applying a master key for file-based solutions or a [Security Provider](/rdm/mac/commands/administration/security-provider/) for [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). This ensures only you can read the data. 
{% endsnippet %}
 
<table>
	<tr>
		<th>
DATA SOURCE 
		</th>
		<th>
LOCAL 
		</th>
		<th>
SELF-HOSTED 
		</th>
		<th>
CLOUD-BASED 
		</th>
		<th>
SHARED BETWEEN YOUR COMPUTERS 
		</th>
		<th>
WORKS OFFLINE 
		</th>
		<th>
MULTI-USER 
		</th>
	</tr>
	<tr>
		<td>
{{ en.DHUBP }} 
		</td>
		<td>

		</td>
		<td>

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
		<td>

		</td>
	</tr>
	<tr>
		<td>
SQLite 
		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
		<td>

		</td>
		<td>

		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
XML 
		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
		<td>

		</td>
		<td>

		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
{{ en.DODV }} 
		</td>
		<td>

		</td>
		<td>

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
		<td>

		</td>
	</tr>
	<tr>
		<td>
Dropbox 
		</td>
		<td>

		</td>
		<td>

		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>
![!!BadgeNoticeSmall.png](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
		<td>
Note 1 
		</td>
	</tr>
</table>

## Notes 

### Note 1 

There is no protection against data contention issues. The data source is designed for one user to access the data from multiple computers. It is therefore impossible for several users to use the data simultaneously. 

### Note 2 

The master XML is maintained by a single user and synchronized by {{ en.RDM }} to a website that is hosted as per your requirements. Accessing the data through a URL ensures it is read-only for other users. 

