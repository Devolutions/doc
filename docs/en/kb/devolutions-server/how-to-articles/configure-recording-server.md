---
title: Configure Recording Server
---
# {{ en.TOPICTITLE }}
The following steps will describe the options to install the Recording Server for {{ en.DPS }} It is possible to install the Recording Server on a stand alone machine.
{% snippet icon.badgeInfo %}
The {{ en.DVLSCONSOLE }} is required to install the Recording Server.
{% endsnippet %}  

1. In the {{ en.DVLSCONSOLE }} , select the ***Companions*** tab and click on the ***Install*** button of the ***Recording Server*** section.  
![KB8014.png](/img/en/kb/KB8014.png)
1. Agree to the terms of the ***License Agreement*** and click ***Next***  
![KB8015.png](/img/en/kb/KB8015.png)
1. Select the ***Source*** of the package according to the installed {{ en.DPS }} version and click ***Next***  
![KB8016.png](/img/en/kb/KB8016.png)
1. Set the settings for the machine where the Recording Server will be installed and click ***Next***  
![KB8017.png](/img/en/kb/KB8017.png)
<table>
	<tr>
		<td>
Recording Server Properties
		</td>
		<td>
Description
		</td>
	</tr>
	<tr>
		<td>
Server name
		</td>
		<td>
Name of the host where the Recording Server will run. Click the ***Get Hostname*** button to autofill this field.
		</td>
	</tr>
	<tr>
		<td>
Port
		</td>
		<td>
TCP port number to communicate with the Recording Server.
		</td>
	</tr>
	<tr>
		<td>
Installation Folder
		</td>
		<td>
Recording Server application installation folder.
		</td>
	</tr>
	<tr>
		<td>
Output Folder
		</td>
		<td>
Destination folder of the recorded sessions.
		</td>
	</tr>
	<tr>
		<td>
Certificate
		</td>
		<td>
Description
		</td>
	</tr>
	<tr>
		<td>
Use Existing Certificate
		</td>
		<td>
Path to an existing certificate file.
		</td>
	</tr>
	<tr>
		<td>
Cert. Password
		</td>
		<td>
Certificate password.
		</td>
	</tr>
	<tr>
		<td>
Advanced
		</td>
		<td>
Description
		</td>
	</tr>
	<tr>
		<td>
Max Parallel Processing
		</td>
		<td>
Maximum number of files to be converted at the same moment to a readable format.
		</td>
	</tr>
</table>

5. Set the ***Service Account*** that will run the Recording Service and click ***Next***  
![kb8018.png](/img/en/kb/kb8018.png)

6. Set the ***Server URL*** and ***Administration Credentials*** account that will create the ***Application Key*** to allow the Recording Server to communicate with the {{ en.DPS }} instance, then click ***Next***  
![KB8019.png](/img/en/kb/KB8019.png)
<table>
	<tr>
		<td>
Devolutions Server Credentials
		</td>
		<td>
Description
		</td>
	</tr>
	<tr>
		<td>
Server URL
		</td>
		<td>
URL of the {{ en.DPS }} instance.
		</td>
	</tr>
	<tr>
		<td>
Administration Credentials
		</td>
		<td>
Description
		</td>
	</tr>
	<tr>
		<td>
Username
		</td>
		<td>
Username of an administrator account in {{ en.DPS }}
		</td>
	</tr>
	<tr>
		<td>
Password
		</td>
		<td>
Password of the administrator account.
		</td>
	</tr>
	<tr>
		<td>
Application Credentials
		</td>
		<td>
Description
		</td>
	</tr>
	<tr>
		<td>
Use existing Application Credentials
		</td>
		<td>
Enable the usage of an existing ***Application Credentials*** in {{ en.DPS }}
		</td>
	</tr>
	<tr>
		<td>
Application key
		</td>
		<td>
Key of the ***Application Credentials***
		</td>
	</tr>
	<tr>
		<td>
Application secret
		</td>
		<td>
Secret key of the ***Application Credentials***
		</td>
	</tr>
	<tr>
		<td>
Devolutions Server uses a different path to access recordings
		</td>
		<td>
Enable this option to be able to download the recording files using a different access path.
		</td>
	</tr>
	<tr>
		<td>
Public Output Folder
		</td>
		<td>
Set the public folder from which the users can download the recording files. This could be a UNC path.
		</td>
	</tr>
</table>

7. Click on the ***Install*** button to start the installation of the Recording Server.  
![KB8020.png](/img/en/kb/KB8020.png)

1. Once finished, an ***Operation Successful*** dialog message will be displayed.  
![KB8021.png](/img/en/kb/KB8021.png)

1. Click ***OK*** and ***Close*** the window.
{% snippet icon.badgeInfo %}
To upgrade the Recording Server, you need to uninstall and reinstall it from the ***Companions*** tab of the {{ en.DVLSCONSOLE }}
{% endsnippet %}
