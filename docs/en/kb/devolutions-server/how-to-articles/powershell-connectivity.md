---
eleventyComputed:
  title: PowerShell connectivity methods to {{ en.DPS }}
---
The following methods describe how to connect to {{ en.DPS }} using PowerShell.
### Method 1: Using the {{ en.RDM }} PowerShell module  
{% snippet icon.badgeNotice %}
This new data source created with PowerShell will only exist in the user context it was created.
{% endsnippet %}  

1. Follow the instruction on this article [{{ en.RDM }} PowerShell Core module](/kb/remote-desktop-manager/knowledge-base/rdm-powershell-core-module/) to properly install the module.
1. Create a new {{ en.DPS }} data source using an [Application Key and the Application Secret](/server/web-interface/administration/security-management/applications/) using the following script. This script should only be used once to avoid creating many new data sources. Please replace the values of the 4 variables with your own information. Then run the script.  

```
$dsname = "DVLS PowerShell"  
$dsurl = "https<area>://your_dvls_url"  
$appkey = "your_appkey"  
$appsecret = "your_appsecret"  

$ds = New-RDMDataSource -DVLS -Name $dsname -Server $dsurl -ScriptingTenantID $appkey -ScriptingApplicationPassword $appsecret -SetDatasource -WarningAction SilentlyContinue Set-RDMDataSource $d
```
3. To connect to the data source, please use these lines in all your scripts.  

```
$dsname = "DVLS PowerShell"  
$ds = Get-RDMDataSource -Name $dsname  
Set-RDMCurrentDataSource $ds  
```
### Method 2: Using the {{ en.DPS }} PowerShell Module

1. Install the [{{ en.DPS }} PowerShell module](https://www.powershellgallery.com/packages/Devolutions.Server) from the PSGallery.
1. The script expects that credentials and the url to your {{ en.DPS }} be defined in environment variables. Since storing credentials in scripts is frowned upon, adapt a local file for running your own tests.  

```
$env:DS_URL= ' http<area>://localhost/dps  
$env:DS_USER = '{your user here}'  
$env:DS_PASSWORD = '{your password here}'  
```

3. The following sample script can be used to connect using again an [Application Key and its Application Secret](/server/web-interface/administration/security-management/applications/)  

```
Import-Module -Name Devolutions.Server -Force  
[string]$Username = $env:DS_USER  
[string]$Password = $env:DS_PASSWORD  
[string]$DVLSUrl = $env:DS_URL  

[securestring]$SecPassword = ConvertTo-SecureString $Password -AsPlainText -Force  
[pscredential]$Creds = New-Object System.Management.Automation.PSCredential ($Username, $SecPassword)  

$Response = New-DSSession -Credential $Creds -BaseURI $DVLSUrl -AsApplication
```

4. Once the script is completed and all tasks fulfill, then you need to close the session using the Close-DSSession cmdlet.  

```
Close-DSSession | out-null  
Write-Output ' ' 
Write-Output '...Done!'  
Write-Output ' '
```