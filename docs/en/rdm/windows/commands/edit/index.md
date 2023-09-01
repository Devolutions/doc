---
title: Edit
---
The ***Edit*** tab contains operations to quickly ***Add***, ***Edit***, ***Override***, ***Batch Edit***, or ***Export*** entries.  
![Ribbon - Edit](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10207.png) 

## Add 

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
New Entry 
		</td>
		<td>
Create a new entry (session, folder, information entry, credentials, etc.). 
		</td>
	</tr>
	<tr>
		<td>
Duplicate 
		</td>
		<td>
Create a duplicate of your entry. 
		</td>
	</tr>
	<tr>
		<td>
Create Shortcut 
		</td>
		<td>
Link your entry to more than one group. For more information, consult the text below. 
		</td>
	</tr>
	<tr>
		<td>
Save as Template 
		</td>
		<td>
Save the selected entry as a local or database template. 
		</td>
	</tr>
</table>

A shortcut is the reiteration of an existing entry. In contrast to a duplicated entry, which has its own ID and properties, a shortcut is a link to an entry and its properties. You can create shortcuts easily by right-clicking the entry, then going to ***Edit – Create Shortcut***, or by using the aforementioned button in the ***Edit*** tab. There are a few scenarios where a user would want to use the same entry differently, such as connecting to two different hosts with a single RDP session.  

For example, it is possible to:  

* Assign different access to the same entry. 
* Create a favorite folder with everything centralized. 
* Reuse a document for different scenarios.  
![These two entries are the exactly the same](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10209.png) 

Entries reiterated this way also have both folder paths indicated in their Folder field in their properties, the paths are separated by a semi-colon. 

{% snippet icon.badgeInfo %} 
There is no visual differences between the shortcut and the original entry. Therefore, you’ll need to delete all entries to completely remove said entry. You will be asked for confirmation when attempting to delete said shortcut. 
{% endsnippet %}
 
## Edit 

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
Properties 
		</td>
		<td>
Edit the properties of the selected entry. 
		</td>
	</tr>
	<tr>
		<td>
Rename 
		</td>
		<td>
Rename the selected entry. 
		</td>
	</tr>
	<tr>
		<td>
Move 
		</td>
		<td>
Move the selected entry to another folder. 
		</td>
	</tr>
	<tr>
		<td>
Delete 
		</td>
		<td>
Delete the selected entry. A confirmation dialog is displayed to confirm the action. 
		</td>
	</tr>
	<tr>
		<td>
Play List 
		</td>
		<td>
Use the various play list features. 
		</td>
	</tr>
</table>

The ***Play List*** feature in {{ en.RDM }} is a lot like a music play list. It opens a list of entries, in a specific order, automatically.The Play List can be used to create groups of sessions for a specific task or for security reasons. You can build your own Play List and start all entries from a Play List at the same time.  

* [Create and Edit a Play List](/rdm/windows/commands/edit/edit/play-list/play-list-actions/) 
* [Using a Play List](/rdm/windows/commands/edit/edit/play-list/play-list-management/) 

## Setting Overrides 

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
User Specific Settings 
		</td>
		<td>
Override properties of the selected entry with settings with settings specific to the current user. For more information, please consult [Specific Settings](/rdm/windows/commands/edit/setting-overrides/specific-settings/). 
		</td>
	</tr>
	<tr>
		<td>
Local Specific Settings 
		</td>
		<td>
Override properties of the selected entry with settings specific to the local machine. For more information, please consult [Specific Settings](/rdm/windows/commands/edit/setting-overrides/specific-settings/). 
		</td>
	</tr>
</table>

{% snippet icon.badgeInfo %} 
A Specific Settings column can be added in the ***{{ en.NPANE }}***. Right-click on the column ***Name*** in the ***{{ en.NPANE }}*** and select ***Column Chooser***. Double-Click on ***Specific Settings*** to add the column. Now, if there is a specific setting applied to an entry, it will be displayed next to the entry name.  
![{{ en.NPANE }} - Column Chooser](https://webdevolutions.azureedge.net/docs/en/rdm/windows/SpecificSettingsColumnChooser.png) 
{% endsnippet %}
 
## Batch 

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
Edit (Special Actions) 
		</td>
		<td>
Perform special actions on the selected entries, such as change the type, run a script, and more. For more information, please consult the [Batch Actions Samples](/rdm/windows/powershell-scripting/custom-powershell-commands/batch-actions-samples/). 
		</td>
	</tr>
	<tr>
		<td>
Batch Edit 
		</td>
		<td>
Perform an action on multiple entries at once. This is particularly useful for doing mass modifications of entries (such as changing the display mode after modifying the workspace or their credential entries when changing your passwords). Multiple entries must be selected for this feature to be visible. For more information, please consult [Batch Edit](/rdm/windows/commands/edit/batch/batch-edit/). 
		</td>
	</tr>
	<tr>
		<td>
Move to {{ en.VLT }} 
		</td>
		<td>
Transfer the selected entries to another {{ en.VLT }} in the database. 
		</td>
	</tr>
</table>

## Export 

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
Export Entry as Remote Desktop File (.rdp) 
		</td>
		<td>
Export the selected entries in a Remote Desktop File (.rdp) format. 
		</td>
	</tr>
	<tr>
		<td>
Export Selection (.rdm) 
		</td>
		<td>
Export the selected entries in a .rdm file that can then be imported into any {{ en.RDM }} data source. You could choose to include the credentials of your entry in your export format and secure your file with a master key. 
		</td>
	</tr>
</table>
