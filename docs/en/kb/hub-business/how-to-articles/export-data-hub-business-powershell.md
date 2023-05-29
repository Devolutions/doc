---
eleventyComputed:
  title: Export Data from {{ en.PHUB }} Business with PowerShell
---

In {{ en.PHUB }} Business, you can export your data in the Json or Csv format using a [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2&viewFallbackFrom=powershell-7.1) script. This feature is accessible via the ***Tools*** tab, under the ***Export*** section.  
![Export with PowerShell.png](https://webdevolutions.azureedge.net/docs/en/kb/KB2079.png)

## Steps

Before exporting your data, if not already done, [create an application user](/hub/web-interface/hub-overview/administration/management/application-users/manage-application-users/) and assign it the ***Manager*** role to the vault wanted.

{% snippet icon.badgeCaution %}
Keep the ***Application Secret*** and ***Application key*** of your newly-created application user or retrieve them if your user was already set up, as they will be needed in the following steps.
{% endsnippet %}

Go to the section that corresponds to your needs:

- [Automatically fill in the information](#automatic)
- [Manually fill in the information](#manual)

### Automatically fill in the information
<a name="automatic"></a>

1. In ***Tools – Export with PowerShell*** , select the ***Automatic*** tab.  
![Automatic Export.png](https://webdevolutions.azureedge.net/docs/en/kb/KB2080.png)
1. Enter your application user's ***Application Secret*** and ***Application key*** in the corresponding fields.
1. Enter the ***Destination folder path*** in the corresponding field. This is where your data will be exported.
1. Choose to export in ***Json*** or ***Csv*** format.
1. Click the ***Download*** button to download the PowerShell script.
1. Run the script using PowerShell 7.  

Your data has been exported to the destination folder you specified in step 3.
### Manually fill in the information
<a name="manual"></a>

1. In ***Tools – Export with PowerShell*** , select the ***Manual*** tab.  
![Manual Export.png](https://webdevolutions.azureedge.net/docs/en/kb/KB2081.png)
1. Choose to export in ***Json*** or ***Csv*** format.
1. Copy and paste the script in a PowerShell file (.ps1).
1. In your copied script, change the variables with the appropriate information. See the table below.  
   | Variable                | Description |
   | ----------------------- | ----------- |
   | `$url`                  | Enter your {{ en.PHUB }} Business URL. This variable is automatically filled in, but it is still possible to change it. |
   | `$appSecret`            | Enter the application user's ***Application Secret*** |
   | `$appKey`               | Enter the application user's ***Application key***    |
   | `$pathToExportedFolder` | Enter the ***Destination folder path*** This is where your data will be exported. |

   ![Variables in PowerShell](https://webdevolutions.azureedge.net/docs/en/kb/KB2082.png)

5. Run the script using PowerShell 7.

Your data has been exported to the destination folder specified in step 
