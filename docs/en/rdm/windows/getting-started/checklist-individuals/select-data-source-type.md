---
  title: Select a data source type – Individuals
  description: To help you select a data source type, here is a set of concerns and the list of data sources that can serve in such a context.
---
This topic is intended primarly for individuals, but also for teams of three or fewer users who do not want to set up security.  

To help you select a data source type, here is a set of concerns and the list of data sources that can serve in such a context. If you have multiple concerns, create the intersection of all sets to isolate a list of choices.  

{% snippet icon.shieldWarning %} 
When choosing any type of data source that is not on-premises, you must consider the security of the data at rest and in transit. We strongly recommend that you further encrypt your data using a master key for file-based solutions or a [security provider](/rdm/windows/commands/administration/settings/security-providers/) for [advanced data sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). This ensures that only you can read the data.  

For additional security features such as encryption at rest and in transit, no direct database access, and zero-knowkedge encryption, consider our [enterprise data sources](/rdm/windows/getting-started/checklist-teams/select-data-source-type/).
{% endsnippet %}
 
<table>
	<tr>
		<th>

DATA SOURCE 
		</th>
		<th style="text-align: center;">
LOCAL 
		</th>
		<th style="text-align: center;">
SELF-HOSTED 
		</th>
		<th style="text-align: center;">
CLOUD-BASED 
		</th>
		<th style="text-align: center;">
SHARED BETWEEN YOUR COMPUTERS 
		</th>
		<th style="text-align: center;">
WORKS OFFLINE 
		</th>
		<th style="text-align: center;">
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
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
SQLite 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
		<td>

		</td>
		<td>

		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
XML 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
		<td>

		</td>
		<td>

		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
	</tr>
	<tr>
		<td>
{{ en.DOD }} 
		</td>
		<td>

		</td>
		<td>

		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
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
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
		<td style="text-align: center;">
Note 1 
		</td>
	</tr>
	<tr>
		<td>
Google Drive 
		</td>
		<td>

		</td>
		<td>

		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td align="center">
![!!BadgeNoticeSmall](https://webdevolutions.azureedge.net/docs/common/BadgeNoticeSmall.png) 
		</td>
		<td>

		</td>
	</tr>
</table>

## Notes 

### Note 1 

There is no protection against data contention issues. The data source is designed to allow one user to access the data from multiple computers. Therefore, it is impossible for multiple users to use the data at the same time.  

### Note 2 

The master XML file is maintained by a single user and synchronized by {{ en.RDM }} to a website that is hosted to your specifications. Access to the data via a URL ensures that it is read-only for other users.  
