---
title: Batch Actions
---
Use the Edit - Batch Edit - Batch Actions to change the settings of multiple sessions in one operation. It can be used for a batch action command on a group of sessions. 

{% snippet icon.badgeInfo %} 
Batch Actions are only applied to entries currently selected in your ***{{ en.NPANE }}***. 
{% endsnippet %}
 
![Batch Edit - Batch Actions](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10350.png) 

## Settings 

### General 

![Batch action - General](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10351.png) 

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
Custom AppleScript 
		</td>
		<td>
Run a custom Applescript command on multiple selected sessions all at once to update the properties. 
		</td>
	</tr>
	<tr>
		<td>
Detect Mac Addresses 
		</td>
		<td>
It will scan all of your sessions in your current database to detect if there is any mac addresses. 
		</td>
	</tr>
</table>

### Web 

{% snippet icon.badgeInfo %} 
These options will only work for ***Website*** session entries, NOT for ***Website (Legacy)*** data entries. 
{% endsnippet %}
 
![Batch Action - Web](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10102.png) 

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
Discover HTML Autofill 
		</td>
		<td>

Once you have selected your ***Website*** session entries and run the batch action, it will automatically fill in the HTML login information. 
		</td>
	</tr>
	<tr>
		<td>
Set Default HTML Autofill 
		</td>
		<td>
Once you have selected your ***Website*** session entries and run the batch action, it will automatically fill in the Username ID and Password ID fields with the default values. 
		</td>
	</tr>
</table>

![Website Html Control ID Settings](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10352.png) 

### SSH 

![Batch Action - Web](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10103.png) 

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
Convert Putty/Rebex Session to SSH/Telnet/PortForward Session 
		</td>
		<td>
It will automatically convert your selected Putty/Rebex  sessions into SSH/Telnet/PortForward sessions. 
		</td>
	</tr>
	<tr>
		<td>
Convert SSH/Telnet/PortForward Session to Putty/Rebex Session 
		</td>
		<td>
It will automatically convert your selected SSH/Telnet/PortForward sessions into Putty/Rebex sessions. 
		</td>
	</tr>
</table>
