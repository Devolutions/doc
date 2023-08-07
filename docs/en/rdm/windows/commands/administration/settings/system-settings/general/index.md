---
title: General
---
The ***General*** section allows to manage the availability of different features related to the database. 

{% snippet icon.shieldCaution %} 
These settings applies to all users that have access to the data source. 
{% endsnippet %}
 
![System Settings - General](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10720.png) 

<table>
	<tr>
		<th>

GENERAL 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Allow user Specific Settings 
		</td>
		<td>
Allow users to save [User Specific Settings](/rdm/windows/commands/edit/setting-overrides/specific-settings/) . 
		</td>
	</tr>
	<tr>
		<td>
Allow database clean up 
		</td>
		<td>
Allows logs and deleted history to be cleaned up. For more information, please consult the [Clean up](/rdm/windows/commands/administration/) topic. 
		</td>
	</tr>
	<tr>
		<td>
Allow shortcuts 
		</td>
		<td>
Allow the reiteration of entries through the shortcut feature. 
		</td>
	</tr>
	<tr>
		<td>
Allow entry states (Lock, Running, Checkout) 
		</td>
		<td>
Allow entries to be locked when used or edited. 
		</td>
	</tr>
	<tr>
		<td>
Allow virtual folders 
		</td>
		<td>
Allow to store entries in virtual folders (not supported with {{ en.DVLS }} ). 
		</td>
	</tr>
	<tr>
		<td>
Automatic check in after 
		</td>
		<td>
Force checked out entries to check in automatically after a set delay. 
		</td>
	</tr>
	<tr>
		<td>
Allow sub entries 
		</td>
		<td>
Allow users to create sub entries. 
		</td>
	</tr>
	<tr>
		<td>
Allow favorites 
		</td>
		<td>
Allow users to favorite connections. 
		</td>
	</tr>
	<tr>
		<td>
Allow embedded credential source mode (legacy) 
		</td>
		<td>
Allow embedded Credential entry in the entry itself. This mode is deprecated and not recommended. Please review other [Credentials options](/rdm/windows/commands/edit/entries/entry-credentials-options/) available. 
		</td>
	</tr>
	<tr>
		<td>
Add entry mode 
		</td>
		<td>
Select if users are prompted to choose a template when creating a new entry. Select between:  

* ***Default*** 
* ***Template list (include default)*** 
* ***Template list only*** 
* ***No template selection*** 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
COMMENTS 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Allow log comments editing 
		</td>
		<td>
Enable the log comment editing for all users. 
		</td>
	</tr>
	<tr>
		<td>
Minimum length (char) 
		</td>
		<td>
Set the minimum length (in characters) allowed for comments. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
FILE SIZE 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Maximum file size (MB) 
		</td>
		<td>
Limit the size of attachments and document entries to avoid to over load the data source. 
		</td>
	</tr>
</table>



