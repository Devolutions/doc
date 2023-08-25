---
title: Administration
---
The ***Administration*** tab allows to manage settings and users of a data source, view reports such as the activity logs, and much more. This tab is only available to administrators of the data source. 

{% snippet icon.badgeInfo %} 
Most features contained in the ***Administration*** tab are only available when using an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
![Ribbon - Administration](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10692.png) 

### Management 

{% snippet icon.badgeInfo %} 
These feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
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
Users 
		</td>
		<td>
Opens the [User Management](/rdm/windows/commands/administration/management/user-management/). 
		</td>
	</tr>
	<tr>
		<td>
Security Groups (Legacy) 
		</td>
		<td>
Legacy security and security groups have been deprecated and will be completely removed starting with version 2023.3 of {{ en.RDM }}. See [Migrate from security groups to user groups](/kb/remote-desktop-manager/how-to-articles/migration-security-groups-user-groups/).
		</td>
	</tr>
	<tr>
		<td>
{{ en.VLT }} s 
		</td>
		<td>
Opens the {{ en.VLT }} Management tab of User Management. 
		</td>
	</tr>
	<tr>
		<td>
User Groups 
		</td>
		<td>
Opens the [User Groups Management](/rdm/windows/commands/administration/management/user-groups-management/) tab of User Management. 
		</td>
	</tr>
</table>

### Reports 

{% snippet icon.badgeInfo %} 
The logs feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
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
Reports 
		</td>
		<td>
Open the [***Reports***](/rdm/windows/commands/administration/reports/) section to select which type of report best suit your current needs. 
		</td>
	</tr>
	<tr>
		<td>
Administration Logs 
		</td>
		<td>
Opens the ***Administration Logs***. 
		</td>
	</tr>
	<tr>
		<td>
Deleted Entries 
		</td>
		<td>
Open a log of all [***Deleted Entries***](/rdm/windows/commands/administration/reports/deleted-entries/) (since last clean up). 
		</td>
	</tr>
</table>

### Settings 

{% snippet icon.badgeInfo %} 
These feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
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
{{ en.VLT }} Settings 
		</td>
		<td>
Opens the {{ en.VLT }} Settings. The {{ en.VLT }} Folder is the one at the top of the ***{{ en.NPANE }}*** (in Tree View). It is the one from which all entries and folder stem. By default, lower level folders inherit settings and security from parent folder until reaching the {{ en.VLT }}. Therefore, using permissions on the {{ en.VLT }} folder allows to secure all entries below the {{ en.VLT }} level. Refer to [Default security for entries](/rdm/windows/commands/administration/settings/vault-settings/default-security-entries/) for more information. 
		</td>
	</tr>
	<tr>
		<td>
System Settings (Data Source Settings) 
		</td>
		<td>
Opens the System Settings. There are many features here, all meant to help you customize your data source and security needs. Remember that these settings applies to all users that have access to the data source. 
		</td>
	</tr>
	<tr>
		<td>
System Permissions 
		</td>
		<td>
Modify [System Permissions](/rdm/windows/commands/administration/settings/system-permissions/). 
		</td>
	</tr>
	<tr>
		<td>
Security Provider 
		</td>
		<td>
Set up a [Security Provider](/rdm/windows/commands/administration/settings/security-providers/) for an additional layer of security. 
		</td>
	</tr>
</table>

### Clean Up 

{% snippet icon.badgeInfo %} 
This feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
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
Clean Up Deleted History 
		</td>
		<td>
Perform a partial or full clean up of the [Deleted History](/rdm/windows/commands/administration/clean-up/deleted-history/). 
		</td>
	</tr>
	<tr>
		<td>
Clean Up Entry History 
		</td>
		<td>
Perform a partial or full clean up of the [Entry History](/rdm/windows/commands/administration/clean-up/entries-history/). 
		</td>
	</tr>
	<tr>
		<td>
Clean Up Activity Logs 
		</td>
		<td>
Perform a partial or full clean up of the [Activity Logs](/rdm/windows/commands/administration/clean-up/logs/). You also have the option to clean up the ***Administration Logs*** if desired. 
		</td>
	</tr>
	<tr>
		<td>
Pack Data Source (Optimize) 
		</td>
		<td>
The [Pack Data Source (Optimize)](/rdm/windows/commands/administration/clean-up/pack-data-source-optimize/) feature analyzes all entries, compress and save them, thus saving space in your data source. 
		</td>
	</tr>
</table>
