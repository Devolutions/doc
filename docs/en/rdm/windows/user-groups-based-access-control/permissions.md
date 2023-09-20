---
  title: Permissions
---
{% youtube 'FQACxCIj_GU' %}  

The ***Permissions*** window, which is only available in an [advanced data source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), can be found in every entry properties in ***Security – Permission*** section (or ***Security – Inherited permissions*** for the {{ en.VLT }} root).  

The user group based permission system can give a very accurate control of the security. Here is an overview of the permission window:  
![Permission panel](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6083.png) 

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
Permission 
		</td>
		<td>
Sets the permission mode. Select between:  

* ***Inherited (Default)***: will inherit the permissions from the parent groups. 
* ***Custom***: lets you specify a custom value for each of the permission. 
* ***Everyone***: everyone will be granted all the permissions below. 
* ***Never***: no one but the administrators will be granted the permission. 
		</td>
	</tr>
	<tr>
		<td>
Grant Access 
		</td>
		<td>
Allows [batch grant access](/rdm/windows/commands/administration/settings/system-settings/vault-management/batch-grant-access) to a specific entry or entries. 
		</td>
	</tr>
	<tr>
		<td>
Inherited values 
		</td>
		<td>
Indicates what is inherited from parent groups. 
		</td>
	</tr>
	<tr>
		<td>
Select user groups or users 
		</td>
		<td>
Lets you select Users / User groups to be granted the permission. Available only if the permission is set to ***Custom***. 
		</td>
	</tr>
</table>

![Batch Grant Access](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6082.png) 
