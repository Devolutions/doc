---
eleventyComputed:
  title: Batch edit
---
Use the Edit - Batch Edit or the Batch Edit option in the context menu to change the settings of multiple sessions in one operation. It can be used for example to remove or update all of the credentials of a group of sessions.  
![Batch Edit](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10346.png) 

You could also change:  

* Host Name 
* Credentials 
* Passwords 
* General Settings 
* Session Type Settings 
* User Specific Settings 
* User Group 

## Advanced Search 

You can select multiple entries by using Command and mouse click. For a method with a little more power, use our [Advanced Search](/rdm/mac/commands/view/advanced-search/) dialog, accessible from ***View - Advanced Search***. The Advanced Search allows you to select multiple criteria at once.  
![Advanced Search](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10605.png) 

After you have tweaked your criteria to get the results you want, press on Select in ***{{ en.NPANE }}*** and then ***Action - Batch Edit***. 

## Settings 

### Change Saved Host Name 

![Change Saved Host Name](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10031.png) 

You can change multiple host name at the same time. 

### Change Saved Credentials 

You can change the configured credentials for multiple sessions in a batch.  
![Change Saved credentials](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10606.png) 

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
Use specified credentials 
		</td>
		<td>
Use a specific username, password and domain. 
		</td>
	</tr>
	<tr>
		<td>
Use credential repository 
		</td>
		<td>
Use a Credential entry linked entry which can can be external credentials like KeePass for example. This is very useful for sharing or reusing existing credentials among entries. 
		</td>
	</tr>
	<tr>
		<td>
Use inherited 
		</td>
		<td>
Use the credentials of its parent entry or group. 
		</td>
	</tr>
	<tr>
		<td>
Use my personal credentials 
		</td>
		<td>
This allows you to use one set of credentials to replace or emulate the ones from your Windows session.
		</td>
	</tr>
	<tr>
		<td>
Use {{ en.UVLT }} search 
		</td>
		<td>

Use credentials stored in your [{{ en.UVLT }}](/rdm/mac/user-interface/navigation-pane/user-vault/). 
		</td>
	</tr>
	<tr>
		<td>
None 
		</td>
		<td>
Do not use any credentials. 
		</td>
	</tr>
</table>

### Reset All Saved Credentials 

Clear all existing credentials for the selected sessions. 

### Reset All Saved Passwords 

Clear all existing passwords for the selected sessions. 

### Edit Sessions (General Settings) 

![Batch Edit - General Settings](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10348.png) 

Edit Sessions (General Settings) allows you to change common sessions settings simultaneously. The session can be of any type, because a common set of options are shared among sessions. The following common general settings can be changed:  

* Group/Folder 
* Display 
* Allow show credentials (everybody) 
* Image 
* Description 
* Keywords/Tags 
* VPN 
* Events 
* Logs 
* Advanced Settings tab 

### Edit Sessions (Session Type Settings) 

{% snippet icon.badgeInfo %} 
Edit Sessions Session Type Settings is only available for specific session types like RDP. 
{% endsnippet %}
 
![Batch Edit - Session Type](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10347.png) 

### Edit Sessions (User Specific Settings) 

User Specific Settings can be modified in a batch if they are supported by the session type.  
![Batch Edit - User Specific settings](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10349.png) 
