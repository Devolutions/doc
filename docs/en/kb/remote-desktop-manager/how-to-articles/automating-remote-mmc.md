---
title: Automating Remote Microsoft Management Console (MMC)
---
# {{ en.TOPICTITLE }}
You can configure a MMC Snap-In console to run on any of your servers. The Snap-In need to support remote access.
## Settings
1. Create the session tool via ***New Entry – Add Macros/Scripts/Tools***
1. Select ***Command Line***
1. Name the session DHCP.
1. Type the following in the Run field: dhcpmgmt.msc /ComputerName $HOST$ ($HOST$ is the variable that will be replaced by the server name or IP address).  
![KB4529.png](/img/en/kb/KB4529.png)
1. Select ***Run as Administrator*** in the ***Execution Mode*** tab.  
{% snippet icon.shieldInfo %}
If you are running a Windows 64bit edition, you would need to enable the Run in 64-bit mode option in the ***Execution Mode*** tab.
{% endsnippet %}  

6. Click ***OK*** to save your entry.
1. Now, you would need to verify that your sessions use the appropriate credential to run the tool. In the ***Management Tools*** section of each session, make sure you’ve selected the proper credentials to be sup plied:  
![KB4530.png](/img/en/kb/KB4530.png)
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
Use default credentials
		</td>
		<td>
Use the credentials from the Windows session
		</td>
	</tr>
	<tr>
		<td>
Use session credentials
		</td>
		<td>
Use the same credentials as the session
		</td>
	</tr>
	<tr>
		<td>
Prompt for credentials
		</td>
		<td>
Prompts for the credentials on use.
		</td>
	</tr>
	<tr>
		<td>
Custom credentials
		</td>
		<td>
Use the Username, Password and Domain specify
		</td>
	</tr>
	<tr>
		<td>
Credential repository
		</td>
		<td>
Specify a set of credentials from the repository
		</td>
	</tr>
	<tr>
		<td>
Use my personal credentials
		</td>
		<td>
Use <a href="https://help.remotedesktopmanager.com/file_templates_mypersonalcredentials.html" target="_blank">My Personal Credentials</a>
		</td>
	</tr>
</table>

To run the Snap-In, select your session and execute the tool from the dashboard.  

![KB4531.png](/img/en/kb/KB4531.png)
