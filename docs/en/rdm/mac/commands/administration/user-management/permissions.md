---
title: Permissions
---
The Permissions section allows you to assign permissions. Controls are sometimes hidden depending on the data source or the state of other controls. 

## Settings 

### Permissions 

![User Management - Permissions](/img/en/rdm/mac/clip10389.png) 

The options directly above the grid are for public folders, meaning any folder that hasn&apos;t been assigned a security group will be assigned those rights. They also act as the most basic permission you can assign because they are needed in order to allow permissions for each of the security group listed below, when they are not checked the corresponding column of the grid is grayed out. 

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
View 
		</td>
		<td>
Allows the user to View AND USE the entries for that security group. 
		</td>
	</tr>
	<tr>
		<td>
Add 
		</td>
		<td>
Allows the user to add entries in group/folders for that security group. Will also grant the Add privilege for public groups. Also controls the visibility of the Add column in the Groups grid. The Add privilege need to be check if the user need to add sessions in the {{ en.PVLT }} . 
		</td>
	</tr>
	<tr>
		<td>
Edit 
		</td>
		<td>
Allows the user to edit entries in groups/folders for that security group. Will also grant the Edit privilege for public groups. Also controls the visibility of the Edit column in the Groups grid. The Edit privilege need to be check if the user need to edit sessions in the {{ en.PVLT }} . 
		</td>
	</tr>
	<tr>
		<td>
Delete 
		</td>
		<td>
Allows the user to delete entries in groups/folders for that security group. Will also grant the Delete privilege for public groups. Also controls the visibility of the Delete column in the Groups grid. The Delete privilege need to be check if the user need to delete sessions in the {{ en.PVLT }} . 
		</td>
	</tr>
</table>

{% snippet icon.shieldWarning %} 
For higher security, its a best practice to set security groups on all the vault level folders. This ensures there are no public folders and that you have good control over the activity in your system. 
{% endsnippet %}
 
All security groups are listed in the grid, and you can assign permissions using the corresponding columns. 

{% snippet icon.shieldWarning %} 
Granting the View permission does allow the right to also launch/open the sessions of that group. 
{% endsnippet %}
 

