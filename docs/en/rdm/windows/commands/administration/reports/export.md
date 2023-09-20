---
  title: Report export
---
The Export Reports is a way to execute and export reports through a command line. You can use this feature in a shortcut or in a batch file and use the Windows task scheduler to execute it.  

You will be able to export Data Report, Inventory report as well as most of the reports found in our Generate Report list except for the Password Usage. 

{% snippet icon.badgeInfo %} 
You must have the rights to run report in {{ en.RDM }} to use this feature. 
{% endsnippet %}
 
## Settings 

For Reports containing settings, you will have to start with exporting your report settings to create the *.rdr file that the command line use to generate the reports. Here is a list of reports containing settings:  

1. Select your Report in Administrations – Report and then select the option ***Export Settings*** in the ***More*** text button. It will create an *.rdr file containing all your report settings. This is also where you Report ID is located (this will be useful later on).  
![Export Settings](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10006.png) 
1. In your Windows Command Prompt enter the following command line: 
```powershell
C:\*** /DataSource:*** /report:***/reportoutput:"***" /reportsettings:"***.rdr" 
```

<table>
	<tr>
		<th>
PARAMETERS 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
C:\ 
		</td>
		<td>
Enter the path used to start your {{ en.RDM }} application (path of the RemoteDesktopManager.exe file) 
		</td>
	</tr>
	<tr>
		<td>
/DataSource 
		</td>
		<td>
Specify the data source ID. 
		</td>
	</tr>
	<tr>
		<td>
/report 
		</td>
		<td>
Specify the type of report to generate or the report ID. 
		</td>
	</tr>
	<tr>
		<td>
/reportoutput 
		</td>
		<td>
Specify the path to save your report and the name for the newly generated report. 
		</td>
	</tr>
	<tr>
		<td>
/reportsettings 
		</td>
		<td>
Specify the path of your report settings file (.rdr). 
		</td>
	</tr>
</table>

To find your Data Source ID and the Command Line use to start {{ en.RDM }} edit one of your session from your data source and select the Advanced section.  
![RDP Session - Advanced Section ](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10008.png) 

Here is a list of types of ***Reports*** you can find in {{ en.RDM }} and the name to enter in the command line to generate the report: 

<table>
	<tr>
		<th>
REPORT TYPE 
		</th>
		<th>
REPORT NAME (TYPE) TO INSERT IN THE COMMAND LINE 
		</th>
	</tr>
	<tr>
		<td>
Activity Logs Report 
		</td>
		<td>
SharedConnectionLog 
		</td>
	</tr>
	<tr>
		<td>
Duplicate Entry 
		</td>
		<td>
DuplicateEntry 
		</td>
	</tr>
	<tr>
		<td>
Entry Information 
		</td>
		<td>
ConnectionInformation 
		</td>
	</tr>
	<tr>
		<td>
Entry Status 
		</td>
		<td>
ConnectionStatus 
		</td>
	</tr>
	<tr>
		<td>
Expired Entry List 
		</td>
		<td>
ConnectionExpiredEntry 
		</td>
	</tr>
	<tr>
		<td>
Expired Passports 
		</td>
		<td>
ConnectionExpiredPassport 
		</td>
	</tr>
	<tr>
		<td>
Expired Softwares 
		</td>
		<td>
ConnectionExpiredSoftware 
		</td>
	</tr>
	<tr>
		<td>
Expired Warranties 
		</td>
		<td>
ConnectionExpiredWarranty 
		</td>
	</tr>
	<tr>
		<td>
Password Complexity 
		</td>
		<td>
PasswordComplexity 
		</td>
	</tr>
	<tr>
		<td>
VPN Groups 
		</td>
		<td>
VPNGroup 
		</td>
	</tr>
</table>

Here is an example of a command line for an Entry Information Report:  

```powershell
C:\Program Files (x86)\Devolutions\Remote Desktop Manager\RemoteDesktopManager<area>.exe /DataSource:8a4f2f70-5e8a-4d6c-9c7b-119080a4c879 /report:EntryInformation /reportoutput:C:\dev\devolutions\Rapport\rapportEntry.csv /reportsettings:C:\dev\devolutions\Rapport\SettingsEntryInformation.rdr 
```
