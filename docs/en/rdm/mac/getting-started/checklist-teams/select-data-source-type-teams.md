---
  title: Select a data source type – Enterprises
  description: To help you select a data source type, here is a set of concerns and the list of data sources that can serve in such a context.
---
This topic is for enterprises that use the functionality offered by our Team Edition. 

To help you select a data source type, here is a set of concerns and the list of data sources that can serve in such a a context.  

{% snippet icon.shieldWarning %} 
When choosing any type of data source that is not on-premises, you must consider the security of the data at rest and in transit. We strongly recommend that you further encrypt your data using a master key for file-based solutions or a [security provider](/rdm/mac/commands/administration/security-provider/) for [advanced data sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). This ensures that only you can read the data. 
{% endsnippet %}

<table>
	<tr>
		<th>

CONCERN 
		</th>
		<th style="text-align: center;">
{{ en.DVLS }} 
		</th>
		<th style="text-align: center;">
{{ en.DHUBB }}
		</th>
	</tr>
	<tr>
		<td>
Self-hosted data 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
Cloud-hosted data 
		</td>
		<td>

		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
	</tr>
	<tr>
		<td>
Database not accessible to end users 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
	</tr>
	<tr>
		<td>
Encryption at rest and in transit 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
	</tr>
	<tr>
		<td>
Zero-knowledge on sensitive data
		</td>
		<td>

		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
	</tr>
	<tr>
		<td>
Privileged Access Management (PAM) module 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td style="text-align: center;">
Note 1 
		</td>
	</tr>
	<tr>
		<td>
AD accounts used for authentication 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
AD group membership used to assign permissions 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
	</tr>
	<tr>
		<td>
Activity logs 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
	</tr>
	<tr>
		<td>
Data accessible globally 
		</td>
		<td style="text-align: center;">
Note 2 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
	</tr>
	<tr>
		<td>
Just-in-time (JIT) connections via {{ en.DGW }}
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
	</tr>
</table>

## Notes 

### Note 1 

The ***Privileged Access Management*** module in {{ en.DHUBB }} is currently in beta development. Please contact our [sales department](mailto:sales@devolutions.net) for further information.

### Note 2 

You should not expose a {{ en.DVLS }} instance to the Internet without being able to protect it from DDoS attacks. Strong passwords must be used, as well as obscure account names that are not easily deduced by social data mining.  
