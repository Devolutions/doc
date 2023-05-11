---
title: Advanced Options
---
Use ***File – Options – Advanced*** to control the behavior of the application with respect to the lower level settings.  
![File – Options – Advanced](/img/en/rdm/windows/clip10595.png) 

## Settings 

### Advanced 

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
Debug level 
		</td>
		<td>
Set the level of debugging information that {{ en.RDM }} will capture. This should only be modified upon request from a Devolutions support technician as it might cause your system to slow down. 
		</td>
	</tr>
	<tr>
		<td>
Logs 
		</td>
		<td>
The logs can be saved in a file or in a database file. Select between: 

* ***Both*** :   Logs will be saved in a text file and in a database file. 
* ***Database*** :   Logs will be saved in a file named RemoteDesktopManager.log.db. The file is located in the installation folder of the application. 
* ***File*** :   Logs will be saved in a file named RemoteDesktopManager.log. The file is located in the installation folder of the application. 
		</td>
	</tr>
	<tr>
		<td>
Offline engine 
		</td>
		<td>
You can choose your Offline engine between MCDF v2.0 (default), SQLite (deprecated), or MCDF (deprecated). Only change this option upon request from a Devolutions support technician. 
		</td>
	</tr>
	<tr>
		<td>
Force "localhost" when using VPN dynamic port 
		</td>
		<td>
Force the use of "localhost" when using the VPN dynamic port. 
		</td>
	</tr>
	<tr>
		<td>
Hardware acceleration 
		</td>
		<td>
Select in the drop-down list how {{ en.RDM }} will handle hardware acceleration:  

* ***Default (Automatic)*** : Graphics rendering is completely left to the operating system. 
* ***Disabled (GDI+)*** : Hardware acceleration is forced disabled. 
* ***DirectX*** : Hardware acceleration is forced enabled. The graphics rendering is performed by the graphics card. Performance is sped up in some cases, which is often required for high resolutions. 

This setting does not need to be modified unless there are UI performance issues. 
		</td>
	</tr>
	<tr>
		<td>
Last comments count 
		</td>
		<td>
If an entry is set up to ask for a comment on opening/closing, a list of the last comments will be displayed to help the user. Set the number of last comments that will be saved then shown in that list. 
		</td>
	</tr>
	<tr>
		<td>
Confirm on multiple sessions open if open count greater than 
		</td>
		<td>
Select a target number where mass opening sessions will demand confirmation. 
		</td>
	</tr>
</table>

### Other Options – Connection 

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
Allow embedded credential source mode (legacy) 
		</td>
		<td>
Allow Embedded Credential mode in entries. This mode is deprecated and not recommended. Please review the [Credentials Options](/rdm/windows/commands/edit/entries/entry-credentials-options/) available. 
		</td>
	</tr>
	<tr>
		<td>
Allow sub entries 
		</td>
		<td>
Allow the creation of sub entries. 
		</td>
	</tr>
	<tr>
		<td>
Automatically open file location after session recording 
		</td>
		<td>
After a session recording, it will open the destination folder where the file is saved. 
		</td>
	</tr>
	<tr>
		<td>
Disable close all confirmation message 
		</td>
		<td>
Disable the Close all confirmation message when closing/disconnecting multiple entries at the same time. 
		</td>
	</tr>
	<tr>
		<td>
Disable compromised password (pwned) check 
		</td>
		<td>
Disable the pwned check feature if it is not forced by the administrator in ***Administration – System Settings – Password Validation*** . 
		</td>
	</tr>
	<tr>
		<td>
Disable DPAPI on offline cache 
		</td>
		<td>
Disable the DPAPI encryption on the offline cache. This encryption is provided by Windows and used to make the offline cache more secure. 
		</td>
	</tr>
	<tr>
		<td>
Disable form editor cache 
		</td>
		<td>
Disable the form editor cache and force {{ en.RDM }} to always fetch the information. It is not recommended to disable this feature for performance reasons. 
		</td>
	</tr>
	<tr>
		<td>
Disable log off confirmation message 
		</td>
		<td>
When pressing the logoff button in an embedded RDP session, {{ en.RDM }} , will disconnect the session without the logoff confirmation message. 
		</td>
	</tr>
	<tr>
		<td>
Disable multi-thread loading 
		</td>
		<td>
This setting allows {{ en.RDM }} to use multiple threads to load the data. Disabling this option will decrease the performance. 
		</td>
	</tr>
	<tr>
		<td>
Disable multi-thread offline file 
		</td>
		<td>
This setting allows {{ en.RDM }} to use multiple threads in the offline file. Disabling this option will decrease the performance. 
		</td>
	</tr>
	<tr>
		<td>
Disable resilient database connection handling 
		</td>
		<td>
Resilient Database connection handling is a mechanism we put in place to retry certain database connections in {{ en.RDM }} to avoid certain errors. Some slowness can be expected when enabled. 
		</td>
	</tr>
	<tr>
		<td>
Disable system event handlers 
		</td>
		<td>
Only used for diagnostic purposes. Do not enable unless recommended by the Devolutions Support team. 
		</td>
	</tr>
	<tr>
		<td>
Disable thumbnail view for Google Chrome 
		</td>
		<td>
Disable the thumbnail view for Google Chrome in ***View – Thumbnails*** to improve the application performance. 
		</td>
	</tr>
	<tr>
		<td>
Enable global event logging for Telnet and SSH (DevolutionsTerminal.log) 
		</td>
		<td>
Enable global event logging for Telnet and SSH entries. It will create the file DevolutionsTerminal.log at the same place where the configuration file is located. 
		</td>
	</tr>
	<tr>
		<td>
Enable offline read/write locks 
		</td>
		<td>
Activate locks for the Offline read/write rights. 
		</td>
	</tr>
	<tr>
		<td>
Ensure that KeePass is running 
		</td>
		<td>
Validate that KeePass is running on your computer before accessing any KeePass data. 
		</td>
	</tr>
	<tr>
		<td>
Force refresh before edit entry 
		</td>
		<td>
Perform a refresh of the entry before entering in edit mode. This is useful in a multi-user environment with a shared data source. This ensures that you are editing the most recent version of the entry. 
		</td>
	</tr>
	<tr>
		<td>
Force restore application with desktop shortcut 
		</td>
		<td>
When double-clicking on the desktop shortcut, it will restore the application that is already open. If the option is unchecked, a second {{ en.RDM }} window will open. 
		</td>
	</tr>
	<tr>
		<td>
Open shortcut session silent 
		</td>
		<td>
Disable the command line warning message when using a shortcut. 
		</td>
	</tr>
	<tr>
		<td>
Show deprecated data source types 
		</td>
		<td>
Some data sources are not supported anymore. Enabling this option will show them again. 
		</td>
	</tr>
	<tr>
		<td>
Use connection loader optimization 
		</td>
		<td>
Only enable this option upon request from our Devolutions Support team. 
		</td>
	</tr>
</table>

### Other Options – General 

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
Add folder in hierarchy during batch add 
		</td>
		<td>
When adding folders in batches, depending on the option chosen, the folders will all be created at the same level or will be children of the previous folder. 
		</td>
	</tr>
	<tr>
		<td>
Allow multiple instances 
		</td>
		<td>
Allow more than one instance of {{ en.RDM }} to run concurrently. This is not a recommended practice. 
		</td>
	</tr>
	<tr>
		<td>
Allow non upgraded data source 
		</td>
		<td>
Allow {{ en.RDM }} to work on an older data source that has not been upgraded. 
		</td>
	</tr>
	<tr>
		<td>
Check focus content on RDP activation 
		</td>
		<td>
If an RDP session requests the focus, it will pull {{ en.RDM }} to the foreground, focusing it. 
		</td>
	</tr>
	<tr>
		<td>
Confirm on drag and drop move 
		</td>
		<td>
When session(s) are moved by drag and drop, a confirmation message will appear to confirm the move. 
		</td>
	</tr>
	<tr>
		<td>
Disable all Gravatar images 
		</td>
		<td>
Disable all Gravatar images to improve application performance. 
		</td>
	</tr>
	<tr>
		<td>
Disable favicon cache 
		</td>
		<td>
Disable the favicon cache and force {{ en.RDM }} to always fetch the favicon from the web. It is not recommended to disable this feature for performance reasons. 
		</td>
	</tr>
	<tr>
		<td>
Disable Gravatar images in user management 
		</td>
		<td>

Disable fetching the Gravatar in ***Administration – Users*** to improve application performance. 
		</td>
	</tr>
	<tr>
		<td>
Disable prompt for confirmation on cancel in properties 
		</td>
		<td>
Enable to suppress the confirmation prompt when cancelling the edit of an entry. 
		</td>
	</tr>
	<tr>
		<td>
Disable stack trace 
		</td>
		<td>
Disable the stack trace details when an error occurs in {{ en.RDM }} . This is a security feature. 
		</td>
	</tr>
	<tr>
		<td>
Disable telemetry 
		</td>
		<td>
Disable the analysis of data or statistics. Telemetry is the equivalent of Google Analytics. Note that the statistics are anonymous. 
		</td>
	</tr>
	<tr>
		<td>
Focus content on application activation 
		</td>
		<td>
Set focus on the last embedded session when the application is activated. 
		</td>
	</tr>
	<tr>
		<td>
Include Active Directory computers in select computer dialog 
		</td>
		<td>
Enable to view the list of all Active Directory. 
		</td>
	</tr>
	<tr>
		<td>
Include network neighborhood computers in select computer dialog 
		</td>
		<td>
Enable to view the list of all neighboring computers. It is not recommended to enable this feature for performance reasons. 
		</td>
	</tr>
	<tr>
		<td>
Lock integrated security: validate only against domain context 
		</td>
		<td>
The integrated security lock validates by default against the local machine and the domain context. You have the option to validate only against the domain. 
		</td>
	</tr>
	<tr>
		<td>
No Internet connection 
		</td>
		<td>
Disable the application to access the internet. 
		</td>
	</tr>
	<tr>
		<td>
Prompt Onboarding on startup 
		</td>
		<td>
Enable to get prompted with the Onboarding of the application on startup. 
		</td>
	</tr>
	<tr>
		<td>
Use application directory for local play list 
		</td>
		<td>
Use the installation folder to save the local play list that has been created. 
		</td>
	</tr>
	<tr>
		<td>
Use application directory for offline cache 
		</td>
		<td>
Use the installation folder to save the offline cache file. 
		</td>
	</tr>
	<tr>
		<td>
Use Devolutions updater 
		</td>
		<td>
Only modify this option upon request from our Devolutions Support team. 
		</td>
	</tr>
	<tr>
		<td>
Use Microsoft Office instead of editors 
		</td>
		<td>
When adding a new document by selecting a file supported by a Microsoft Office application (Word, Excel), it will make a Word/Excel document instead of a Rich Text Editor/Spreadsheet Editor entry. 
		</td>
	</tr>
	<tr>
		<td>
Use ZipCrypto compression (not recommended) 
		</td>
		<td>
Enable this option to allow the ZipCrypto compression in {{ en.RDM }} . We do not recommend enabling this option. Here is a blog written by our security team about the subject: [Why you should never use the native .Zip Crypto in Windows](https://blog.devolutions.net/2020/08/why-you-should-never-use-zipcrypto/) . 
		</td>
	</tr>
</table>

### Other Options – microsoft edge 

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
Use embedded Microsoft Edge for documentation and markdown 
		</td>
		<td>
Enabling this option will allow to use the browser Microsoft Edge instead of Internet Explorer for the documentation and markdown. 
		</td>
	</tr>
	<tr>
		<td>
Use embedded Microsoft Edge for overview panel 
		</td>
		<td>
Enabling this option will allow to use the browser Microsoft Edge instead of Internet Explorer for the overview panel. 
		</td>
	</tr>
	<tr>
		<td>
Use embedded Microsoft Edge for release notes 
		</td>
		<td>
Enabling this option will allow to use the browser Microsoft Edge instead of Internet Explorer to display release notes. 
		</td>
	</tr>
	<tr>
		<td>
Use embedded Microsoft Edge for reports 
		</td>
		<td>
Enabling this option will allow to use the browser Microsoft Edge instead of Internet Explorer to display the reports. 
		</td>
	</tr>
</table>

### Other Options – User Interface 

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
Always show "Go Offline" button 
		</td>
		<td>
Always display the "Go Offline" button in the status bar when [Offline Mode](/rdm/windows/data-sources/offline-mode/) is active. 
		</td>
	</tr>
	<tr>
		<td>
Disable custom images 
		</td>
		<td>
Disable the loading of any custom images in the tree view. Too many custom images could dramatically increase the size of the data source and increase the load time at the same time. 
		</td>
	</tr>
	<tr>
		<td>
Disable document selector (Ctrl + Tab) 
		</td>
		<td>
When left enabled, it will allow to switch from multiple open tab connections. 
		</td>
	</tr>
	<tr>
		<td>
Disable layout restoration 
		</td>
		<td>
Disable manually configured tab layout and restore the layout settings on a {{ en.RDM }} restart. 
		</td>
	</tr>
	<tr>
		<td>
Enable tags textbox in properties 
		</td>
		<td>
By default, the ***Tags*** field in the properties of an entry can only be filled through the tag selector. With this option, it lifts that restriction and you can write in the ***Tags*** text box directly. 
		</td>
	</tr>
	<tr>
		<td>
Hide last opened play list in play list management 
		</td>
		<td>
Hide the last opened play list at startup in the play list dialog. 
		</td>
	</tr>
	<tr>
		<td>
Hide loading data sources progress bar 
		</td>
		<td>
Hide the loading data sources progress bar when loading. 
		</td>
	</tr>
	<tr>
		<td>
Keep View Password window on top 
		</td>
		<td>
Force the ***View Password*** window to display on top of all the {{ en.RDM }} windows. 
		</td>
	</tr>
	<tr>
		<td>
Use old entry sort 
		</td>
		<td>
Use the old entry sort from previous version of {{ en.RDM }} . 
		</td>
	</tr>
</table>

### Information 

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
Created on 
		</td>
		<td>
Creation date of the {{ en.RDM }} configuration folder. 
		</td>
	</tr>
	<tr>
		<td>
Source 
		</td>
		<td>
Source of the {{ en.RDM }} configuration settings. 
		</td>
	</tr>
	<tr>
		<td>
Path 
		</td>
		<td>
Shortcut to access the configuration folder directly. 
		</td>
	</tr>
</table>


