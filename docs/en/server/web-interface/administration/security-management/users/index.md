---
eleventyComputed:
  title: Users
  order: 10
---
***Users*** is where you can create, import and manage users. To access the user management, navigate to ***Administration – Users***. Click on a user to configure specific settings and permissions. 

## Settings 

![Administration - Users](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6082.png) 

{% snippet icon.badgeInfo %}
***User Specific Settings*** are shared between {{ en.RDM }}, {{ en.DVLS }} and {{ en.DHUB }}.
{% endsnippet %}  

### Global Options 

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>

![!!AddSmallGrey](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6079.png) 
		</td>
		<td>
Add a user. 
		</td>
	</tr>
	<tr>
		<td>
![!!NavImportSmall](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6080.png) 
		</td>
		<td>
Import users from LDAP or Azure. 
		</td>
	</tr>
	<tr>
		<td>
![!!Migrate_user](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6077.png) 
		</td>
		<td>
Migrate users and user groups from one authentication provider to another.
		</td>
	</tr>
	<tr>
		<td>
![!!NavImportSmall](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6078.png) 
		</td>
		<td>
Synchronize users from provider(s). 
		</td>
	</tr>
	<tr>
		<td>				
![!!RibbonRefreshGraySmall](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6081.png) 
		</td>
		<td>
Refresh users list. 
		</td>
	</tr>
</table>

![!!ServerOp8004](https://webdevolutions.blob.core.windows.net/docs/en/hub/Hub6063.png) 

### User Options 

<table>
	<tr>
		<th>
Option 
		</th>
		<th>
Description 
		</th>
	</tr>
	<tr>
		<td>

![!!RibbonEditSmall](https://webdevolutions.azureedge.net/docs/common/RibbonEditSmall.png) 
		</td>
		<td>
Edit user settings. 
		</td>
	</tr>
	<tr>
		<td>
![!!EditAssignGroup](https://webdevolutions.azureedge.net/docs/common/EditAssignGroup.png) 
		</td>
		<td>
Assign user groups to user account. 
		</td>
	</tr>
	<tr>
		<td>
![!!EditAssign{{ en.VLT }}](https://webdevolutions.azureedge.net/docs/common/EditAssignVault.png) 
		</td>
		<td>
Assign {{ en.VLT }}s to the user account. 
		</td>
	</tr>
	<tr>
		<td>
![!!ServerOp7016](https://webdevolutions.azureedge.net/docs/en/server/ServerOp7016.png) 
		</td>
		<td>
See user activity report. 
		</td>
	</tr>
	<tr>
		<td>
![!!ViewPasswordSmall](https://webdevolutions.azureedge.net/docs/en/server/Icons/ViewPasswordSmall.png) 
		</td>
		<td>
Change password for {{ en.DVLS }} user accounts only. 
		</td>
	</tr>
	<tr>
		<td>
![!!RibbonTrashSmall](https://webdevolutions.azureedge.net/docs/common/RibbonTrashSmall.png) 
		</td>
		<td>
Delete user. 
		</td>
	</tr>
</table>
