---
eleventyComputed:
  title: Export Data from {{ en.PHUB }} Business with PowerShell
---
# {{ en.TOPICTITLE }}
In {{ en.PHUB }} Business, you can export your data in the Json or Csv format using a [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2&amp;viewFallbackFrom=powershell-7.1) script. This feature is accessible via the ***Tools*** tab, under the ***Export*** section.  
![Export with PowerShell.png](/img/en/kb/kb2079.png)
## Steps
Before exporting your data, if not already done, [create an application user](https://helphub.devolutions.net/hub_manage_application_users.html) and assign it the ***Manager*** role to the vault wanted.  
{% snippet icon.badgeCaution %}
Keep the ***Application Secret*** and ***Application key*** of your newly-created application user or retrieve them if your user was already set up, as they will be needed in the following steps.
{% endsnippet %}  

Go to the section that corresponds to your needs:  

* <a href="#automatic">Automatically fill in the information</a> 
* <a href="#manual">Manually fill in the information</a> 

### Automatically fill in the information
<a name="automatic"></a>

1. In ***Tools – Export with PowerShell*** , select the ***Automatic*** tab.  
![Automatic Export.png](/img/en/kb/kb2080.png)
1. Enter your application user&apos;s ***Application Secret*** and ***Application key*** in the corresponding fields.
1. Enter the ***Destination folder path*** in the corresponding field. This is where your data will be exported.
1. Choose to export in ***Json*** or ***Csv*** format.
1. Click the ***Download*** button to download the PowerShell script.
1. Run the script using PowerShell 7.  

Your data has been exported to the destination folder you specified in step 3.
### Manually fill in the information
<a name="manual"></a>

1. In ***Tools – Export with PowerShell*** , select the ***Manual*** tab.  
![Manual Export.png](/img/en/kb/kb2081.png)
1. Choose to export in ***Json*** or ***Csv*** format.
1. Copy and paste the script in a PowerShell file (.ps1).
1. In your copied script, change the variables with the appropriate information. See the table below.
<table>
	<tr>
		<th>
Variable
		</th>
		<th>
Description
		</th>
	</tr>
	<tr>
		<td>
$url
		</td>
		<td>
Enter your Password Hub Business URL. This variable is automatically filled in, but it is still possible to change it.
		</td>
	</tr>
	<tr>
		<td>
$appSecret
		</td>
		<td>
Enter the application user&apos;s <b><i>Application Secret</i></b>
		</td>
	</tr>
	<tr>
		<td>
$appKey
		</td>
		<td>
Enter the application user&apos;s <b><i>Application key</i></b>
		</td>
	</tr>
	<tr>
		<td>
$pathToExportedFolder
		</td>
		<td>
Enter the <b><i>Destination folder path</i></b> This is where your data will be exported.
		</td>
	</tr>
</table>

![Variables in PowerShell](/img/en/kb/KB2082.png)

5. Run the script using PowerShell 7.  

Your data has been exported to the destination folder specified in step 
