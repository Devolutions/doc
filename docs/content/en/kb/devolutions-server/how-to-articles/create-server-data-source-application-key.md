---
eleventyComputed:
  title: Create a {{ en.DVLS }} data source with an application key
---
With the {{ en.PS }} module, it is possible to connect to a {{ en.DVLS }} instance using an [***Application key and Application Secret***](/server/web-interface/administration/security-management/applications/). You can create a {{ en.DVLS }} data source [in {{ en.RDM }}](#rdm) or manually [using PowerShell](#powershell). Follow the method that best suits your needs.

## Steps

### Method 1: {{ en.RDM }}
1. In {{ en.RDM }}, go to ***File – Data Sources***.
1. Click the ***Add a New Data Source*** button.  
![File – Data Sources – Add a New Data Source](https://webdevolutions.azureedge.net/docs/en/kb/KB2117.png)
1. In the next window, select the ***{{ en.DVLS }}*** team data source, then click ***OK***.  
![{{ en.DVLS }} data source](https://webdevolutions.azureedge.net/docs/en/kb/KB2118.png)
1. In the ***General*** tab, enter a ***Name***, a ***Host***, and a ***Username*** for your new data source. You can then click on the ***Test Connection*** button to confirm that the connection is working.  
![General tab](https://webdevolutions.azureedge.net/docs/en/kb/KB2120.png)
1. Click on the ***PowerShell*** tab.  
![PowerShell tab](https://webdevolutions.azureedge.net/docs/en/kb/KB2119.png)
1. Enter your [***Application key and Application Secret***](/server/web-interface/administration/security-management/applications/) in the ***Tenant ID*** field and the ***Password*** field respectively, then click ***OK***.  

Your new {{ en.DVLS }} data source is now created. You can now connect to your {{ en.DVLS }} and run your scripts.

### Method 2: PowerShell
1. Using the PowerShell cmdlets, paste the following sample script:
   ```powershell
   $dsname = "DVLS PowerShell"
   $dsurl = "https<area>://your_dvls_url"
   $appkey = "your_appkey"
   $appsecret = "your_appsecret"

   $ds = New-RDMDataSource -DVLS -Name $dsname -Server $dsurl -ScriptingTenantID $appkey -ScriptingApplicationPassword $appsecret -SetDatasource -WarningAction SilentlyContinue
   Set-RDMDataSource $ds
   Set-RDMCurrentDataSource $ds
   ```
1. Replace the variable values with your own, then run the script.

Your new {{ en.DVLS }} data source is now created. You can now connect to your {{ en.DVLS }} and run your scripts.
