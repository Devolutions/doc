---
eleventyComputed:
  title: Play list actions
---
{% youtube 'VTGPUMl5zKY' %}  

You can create Local or Shared play List in {{ en.RDM }}. There are several methods to create or edit a Play List:  

* Using the Play List Management. 
* Create Play List depending on entries state and selection. 
* Edit an existing Play List. 

{% snippet icon.badgeInfo %} 
You can also use the context menu to create and edit your Play List. When your entries are selected, right-click in the ***{{ en.NPANE }}*** and select ***Play List – Add Selection to Existing Play List***. 
{% endsnippet %}
 
## Settings 

### Use the Play list management 

From the ribbon, go to ***Edit – Play List – Play List Management***.  
![Local Play List](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10253.png) 

Play lists can be saved three different ways: 

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
Local 
		</td>
		<td>
The Play List is saved locally and can only be accessed as such. These can only be launched through the Play List Management. 
		</td>
	</tr>
	<tr>
		<td>
Shared 
		</td>
		<td>
The Play List is saved in the database. It can be accessed by anyone on the data source. These can be launched through the Play List Management or by using the entry itself. 
		</td>
	</tr>
	<tr>
		<td>
{{ en.UVLT_MAJ }} 
		</td>
		<td>
The Play List is saved in your {{ en.UVLT }} and can only be accessed by the user. These can be launched through the Play List Management or by using the entry itself. 
		</td>
	</tr>
</table>

## Actions 

### Create Play List depending on entries state and selection 

1. If you wish to pre-determine a list of entries, select them for your Play List in the {{ en.UVLT }}.  
![Selected Entries in the {{ en.NPANE }}](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10902.png) 
1. In the ***Edit*** ribbon menu, click ***Play List***, then select whichever setting you prefer.  
![Edit - Play List - New](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10792.png) 

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
New 
		</td>
		<td>
Creates a new Play List directly, a window prompt will ask you where you wish to save it and which selection you would like to highlight. 
		</td>
	</tr>
	<tr>
		<td>
Create from Opened Sessions 
		</td>
		<td>
Brings up the window for creating a new Play List with all currently opened session already selected for the Play List. You can select and remove additional entries if desired. 
		</td>
	</tr>
	<tr>
		<td>
Add Selection to Existing Play List (X Entry) 
		</td>
		<td>
Prompts a window where you can select currently accessible Play Lists and adds the selection in the {{ en.NPANE }} to the Play List. 
		</td>
	</tr>
</table>

3. Choose if you wish to save your Play List locally, in a shared {{ en.VLT }} or in your {{ en.UVLT }}. Saving it locally will prompt a different window. This window will contain everything needed for a local Play List.  
![Save New Play List](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10255.png) 
1. The next window lets you choose how you want your current selection or opened sessions to affect your playlist.  
![Selected Entries in {{ en.NPANE }}](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10256.png) 

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
Selected Entries in <b><i>{{ en.NPANE }}</i></b> 
		</td>
		<td>
All currently selected entries in the <b><i>{{ en.NPANE }}</i></b> will already be selected for your Play List. You can still add and remove entries to the Play List if you desire. 
		</td>
	</tr>
	<tr>
		<td>
Opened Tabbed Sessions 
		</td>
		<td>
All currently opened sessions (embedded only) will already be selected for your Play List. You can still add and remove entries to the Play List if you desire. 
		</td>
	</tr>
	<tr>
		<td>
No Selection 
		</td>
		<td>
No pre-determined selection will be taken into account, create your Play List from a fresh start. 
		</td>
	</tr>
</table>

5. Follow this sequence: 
	1. Enter a name for your ***Play List***. 
	1. You can review, add or remove entries from the play list on the ***Connections*** tab. 
	1. In ***Advanced*** you can set how the entries open.  
	![Play List Editor](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10787.png) 

And there you have it, your ***Play List*** is ready for use. 

### Edit Existing Play List 

1. In ***Edit***, click ***Play List Management***.  
![View - Play List Management](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11490.png) 
1. Select the ***Play List*** you wish to modify and click ***Edit***.  
![Play List Management](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10259.png) 

{% snippet icon.badgeInfo %} 
If the ***Play List*** is shared or saved in your {{ en.UVLT }}, you can also right-click the entry and click ***Properties*** to access it. 
{% endsnippet %}
 

