---
eleventyComputed:
  title: Create a {{ en.DPS }} Data Source with an Application Key
---
# {{ en.TOPICTITLE }} 
With the {{ en.RDM }} PowerShell Module, it is possible to connect to a {{ en.DPS }} instance using an [***Application key and Application Secret***](https://helpserver.devolutions.net/webinterface_applications.html) . You can create a {{ en.DPS }} data source <a href="#rdm">in {{ en.RDM }}</a> or manually <a href="#powershell">using PowerShell</a> . Follow the method that best suits your needs. 
## Steps 
### Method 1: {{ en.RDM }} 
<a name="rdm"></a>

1. In {{ en.RDM }} , go to ***File – Data Sources*** . 
1. Click the ***Add a New Data Source*** button.  
![File – Data Sources – Add a New Data Source.png](/img/en/kb/kb2117.png) 
1. In the next window, select the ***{{ en.DPS }}*** team data source, then click ***OK*** .  
![Devolutions Server Data Source.png](/img/en/kb/kb2118.png) 
1. In the ***General*** tab, enter a ***Name*** , a ***Host*** , and a ***Username*** for your new data source. You can then click on the ***Test Connection*** button to confirm that the connection is working.  
![General Tab.png](/img/en/kb/kb2120.png) 
1. Click on the ***PowerShell*** tab.  
![PowerShell Tab.png](/img/en/kb/kb2119.png) 
1. Enter your [***Application key and Application Secret***](https://helpserver.devolutions.net/webinterface_applications.html) in the ***Tenant ID*** field and the ***Password*** field respectively, then click ***OK*** .  

Your new {{ en.DPS }} data source is now created. You can now connect to your {{ en.DPS }} and run your scripts. 
### Method 2: PowerShell 
<a name="powershell"></a>

1. Using the PowerShell cmdlets, paste the following sample script:  

```
$dsname = "DVLS PowerShell"  
$dsurl = "https<area>://your_dvls_url"  
$appkey = "your_appkey"  
$appsecret = "your_appsecret"  

$ds = New-RDMDataSource -DVLS -Name $dsname -Server $dsurl -ScriptingTenantID $appkey -ScriptingApplicationPassword $appsecret -SetDatasource -WarningAction SilentlyContinue  
Set-RDMDataSource $ds  
Set-RDMCurrentDataSource $ds 
```
2. Replace the variable values with your own, then run the script.  

Your new {{ en.DPS }} data source is now created. You can now connect to your {{ en.DPS }} and run your scripts. 

