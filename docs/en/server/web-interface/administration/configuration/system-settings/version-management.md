---
eleventyComputed:
  title: Version management
  status: Topic available in German language
---
The ***Version Management*** allows the administrators to manage the data source availability in other versions of {{ en.RDM }} for Windows, Mac, and Linux. 

![Administration – System Settings – Version Management](https://webdevolutions.blob.core.windows.net/docs/en/server/ServerOp6075.png)

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
Minimal version 
		</td>
		<td>
Forces users of the data source to use a minimal version of {{ en.RDM }}. Enter the entire version number (2019.1.0.0) to force a specific version. Use this to disable connecting to the data source with an older version. 
		</td>
	</tr>
	<tr>
		<td>
Minimal version custom message 
		</td>
		<td>
Enter a custom message for the minimal version notification. 
		</td>
	</tr>
	<tr>
		<td>
Maximal version 
		</td>
		<td>
Forces users of the data source to use a maximal version. Enter the entire version number (2019.1.0.0) to force a specific version. Use this to disable connecting to the data source with a newer version. 
		</td>
	</tr>
	<tr>
		<td>
Maximal version custom message 
		</td>
		<td>
Enter a custom message for the maximal version notification. 
		</td>
	</tr>
	<tr>
		<td>
Recommended version
		</td>
		<td>
Recommended version will be displayed to the user via the updater as the recommended version to be downloaded and installed.
		</td>
	</tr>
	<tr>
		<td>		
Disable checks for updates
		</td>
		<td>
Disable the auto update notification message. Use this to manually update the application and prevent from getting notified when new versions are available. 
		</td>
	</tr>
	<tr>
		<td>
Show custom minimal/maximal version message for administrators	
		</td>
		<td>
Show the custom minimal/maximal version message to administrators. 
		</td>
	</tr>
	<tr>
		<td>		
Download URL 
		</td>
		<td>
Use in conjunction with the minimal or maximal version, once a minimal or maximal version requirement is not met the system will prompt the user that the version is no longer valid and it will open the link (path/URL) to download the newer or older version. 
		</td>
	</tr>
</table>
