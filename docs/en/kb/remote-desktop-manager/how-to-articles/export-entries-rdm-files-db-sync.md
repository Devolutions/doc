---
title: Export all Entries in .RDM Files for Database Synchronization
---
# {{ en.TOPICTITLE }}
The following PowerShell script is intended for exporting all entries from a data source intoRDM files. One file per repository will be created.
### Step-by-step guide
Before being able to export the entries from the data source, some preparation is required.
1. Install {{ en.RDM }} on the machine where the PowerShell script will be running.
1. Create a new data source configuration in {{ en.RDM }} within the user's Windows profile.
1. The user account who will run the script must have proper permissions on the destination folder.
1. Update the password in the script.
1. Adapt the destination path, in the script, where theRDM files will be saved.
1. The PowerShell script needs to be saved in aps1 file on the computer on which it will run.
1. Create a scheduled task to run the script on a regular basis.  

```
Import-Module 'C:\Program Files (x86)\Devolutions\Remote Desktop Manager\RemoteDesktopManager.PowerShellModule.psd1'  

$ds = Get-RDMDataSource -Name "NameOfYourDataSourceHere"  
Set-RDMCurrentDataSource $ds  

# Update the password  
$passwd = ConvertTo-SecureString -AsPlainText -Force "YourPasswordHere"  

$repos = Get-RDMRepository  

foreach ($repo in $repos)  
{  
    Set-RDMCurrentRepository $repo  
    Update-RDMUI  

    $sessions = Get-RDMSession  
    $reponame = $repo.name  
    
    # Adapt the destination path for the .rdm files  
    Export-RDMSession -Path "C:\temp\$reponame.rdm" -Sessions $sessions -IncludeCredentials -XML -Password $passwd  
}  
```