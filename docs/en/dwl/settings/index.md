---
title: Settings
order: 20
keywords:
- Private vault
---
The {{ en.DWL }} settings can be accessed via the ***Settings*** button in the browser extension window regardless of which Devolutions application you are using with {{ en.DWL }}.  

![Devolutions Web Login Settings Button.png](https://webdevolutions.azureedge.net/docs/en/dwl/Dwl2000.png)  

The ***Settings*** are separated in two categories: <a href="#configuration">***Configuration***</a> and <a href="#source">***Data sources***</a>.  

![Devolutions Web Login Settings.png](https://webdevolutions.azureedge.net/docs/en/dwl/Dwl4027.png)

### Configuration <a name="configuration"></a>

The ***General*** settings are about the user interface and interaction.  

* ***General*** tab  
	* Show the {{ en.DWL }} extension icon in the credentials fields.  
	* Show the prompt when saving credentials on new login.  
	* Show the context menu options.  
	* Color the fields that are filled with {{ en.DWL }}.  
	* Set the color ***Theme*** of the application.  

* ***Advanced*** tab  
	* Disable the analytics telemetry.  
	* Enable the Beta versions of {{ en.DWL }}.  

The ***Never List*** displays the list of locally added websites to which the user will never be prompted to save their credentials.  

* Types are ***Never add site***, ***Never Autofill***, ***Never do anything***, and ***Never show icons in fields***.  
* Matching options are ***Base domain***, ***Host***, ***Starts with***, ***RegEx***, and ***Exact***.  

The ***Import/Export Settings*** allow to save and transfer your currently set preferred settings.  

* Import settings from other browsers or users. 
* Choose to export {{ en.DWL }}  ***Settings, Password Generator*** templates, and the ***Never List***.  

### Data sources <a name="source"></a>

The ***Data sources*** settings are used to customize {{ en.DWL }} interactions with <a href="#rdm">{{ en.RDM }}</a>, <a href="#server">{{ en.DVLS }}</a>, and <a href="#hub">{{ en.PHUB }}</a> Business or Personal.  

### {{ en.RDM }} <a name="rdm"></a>

<table>
	<tr>
		<th>
GENERAL TAB 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Enable {{ en.RDM }} app 
		</td>
		<td>
Retrieve entries from {{ en.RDM }} when the application is open. 
		</td>
	</tr>
	<tr>
		<td>
Use default port (19443) 
		</td>
		<td>
Communicate with the default port 19443 between the application. 
		</td>
	</tr>
	<tr>
		<td>
Add entry in user vault by default 
		</td>
		<td>
Save new entries in the {{ en.PVLT }} . 
		</td>
	</tr>
	<tr>
		<td>
Destination folder 
		</td>
		<td>
Choose the folder where the credentials are stored in the {{ en.VLT }} . 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
ACTIONS TAB 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Automatically retrieve credentials on page load 
		</td>
		<td>
{{ en.DWL }} automatically searches for credentials in the data source when connecting to a website.<br>

If disabled, click on the {{ en.DWL }} extension icon to manually retrieve credentials. 
		</td>
	</tr>
	<tr>
		<td>
Automatically fill in credentials on load 
		</td>
		<td>
Automatically fill the credentials when loading a web page. 
		</td>
	</tr>
	<tr>
		<td>
Automatically submit the form after filling 
		</td>
		<td>
Automatically submit the credentials when the fields are filled. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
ADVANCED TAB 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Application key 
		</td>
		<td>
Secure the port with an application key by using the same code in {{ en.RDM }} and {{ en.DWL }} .<br>

Navigate to <b><i>File – Options – Browser Extensions</b></i> in {{ en.RDM }} to set the application key. 
		</td>
	</tr>
	<tr>
		<td>
Enable native messaging 
		</td>
		<td>
Exchange messages with a native application installed on the user's computer. 
		</td>
	</tr>
	<tr>
		<td>
Use legacy API 
		</td>
		<td>
Use the old browser extension API for compatibility with older versions of {{ en.RDM }} . 
		</td>
	</tr>
</table>

### {{ en.DVLS }} <a name="server"></a>

<table>
	<tr>
		<th>
GENERAL TAB 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Enable {{ en.DVLS }} 
		</td>
		<td>
Retrieve entries from {{ en.DVLS }} . 
		</td>
	</tr>
	<tr>
		<td>
Destination folder 
		</td>
		<td>
Choose the folder where the credentials are stored in the {{ en.VLT }} . 
		</td>
	</tr>
	<tr>
		<td>
Server URL 
		</td>
		<td>
Enter the URL of the {{ en.DVLS }} instance to connect to. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
ACTIONS TAB 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Automatically retrieve credentials on page load 
		</td>
		<td>
{{ en.DWL }} automatically searches for credentials in the data source when connecting to a website.<br>

If disabled, click on the {{ en.DWL }} extension icon to manually retrieve credentials. 
		</td>
	</tr>
	<tr>
		<td>
Automatically fill in credentials on load 
		</td>
		<td>
Automatically fill the credentials when loading a web page. 
		</td>
	</tr>
	<tr>
		<td>
Automatically submit the form after filling 
		</td>
		<td>
Automatically submit the credentials when the fields are filled. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
ADVANCED TAB 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Default compare type 
		</td>
		<td>
Set a default comparing option type between <b><i>Base domain , Host , Starts with , RegEx , Exact</b></i> , and <b><i>Never</b></i> . 
		</td>
	</tr>
	<tr>
		<td>
Sync all available vaults 
		</td>
		<td>
Enable to synchronize all the available {{ en.VLT }}s from {{ en.DVLS }} . 
		</td>
	</tr>
</table>

### {{ en.PHUB }} Business and Personal <a name="hub"></a>

<table>
	<tr>
		<th>
GENERAL TAB 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Enable Devolutions {{ en.PHUB }} Business/Personal 
		</td>
		<td>
Retrieve entries from {{ en.PHUB }} . 
		</td>
	</tr>
	<tr>
		<td>
Server URL (available with {{ en.PHUB }} Business only) 
		</td>
		<td>
Enter the URL of the {{ en.PHUB }} Business instance to connect to. 
		</td>
	</tr>
	<tr>
		<td>
Username 
		</td>
		<td>
Enter a username to connect to {{ en.PHUB }} with. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
ACTIONS TAB 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Automatically fill in credentials on load 
		</td>
		<td>
Automatically fill the credentials when loading a web page. 
		</td>
	</tr>
	<tr>
		<td>
Automatically submit the form after filling 
		</td>
		<td>
Automatically submit the credentials when the fields are filled. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
ADVANCED TAB 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
{{ en.DA }} login 
		</td>
		<td>
Set your {{ en.DA }} login URL. 
		</td>
	</tr>
	<tr>
		<td>
Show Favicon 
		</td>
		<td>
Display the {{ en.DWL }} favicon. 
		</td>
	</tr>
	<tr>
		<td>
{{ en.DWL }} 
		</td>
		<td>
Enable or disable {{ en.DWL }} with {{ en.PHUB }} . 
		</td>
	</tr>
	<tr>
		<td>
Default compare type 
		</td>
		<td>
Set a default comparing option type between <b><i>Base domain , Host , Starts with , RegEx , Exact</b></i> , and <b><i>Never</b></i> 
		</td>
	</tr>
	<tr>
		<td>
Sync all available vaults (available with {{ en.PHUB }} Business only) 
		</td>
		<td>
Enable to synchronize all the available {{ en.VLT }}s from {{ en.PHUB }} Business. 
		</td>
	</tr>
</table>



