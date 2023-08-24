---
title: PowerCLI advanced troubleshooting
---
{{ en.RDM }} calls PowerCLI's cmdlets and presents the results in its user interface.  

Here are steps to help isolate issues when the integration is not working as expected.
## Script A: Get the list of virtual machines
GETVMS.PS1  

```
Param(  
    [Parameter(Mandatory=$true)]  
    [string]$viServer,  
    [Parameter(Mandatory=$true)]  
    [string]$userName,  
    [Parameter(Mandatory=$true)]  
    [string]$password  
) #end param  

$VMHost = Connect-VIServer $($viServer) -User $userName -Password $password  
if ($VMHost -eq $null ) { throw "Connection to server failed!";}  
try  
{  
    Get-View -ViewType VirtualMachine |  select -Property Name, {$_.Moref.Value};  
}  
catch  
{  
    write-host $ErrorMessage  
}  
Disconnect-VIServer $VMHost -Force -Confirm:$false  
```
## Example use
`.\GetVMs.ps1 [SERVER_NAME] [USER_NAME] [PASSWORD]`

Name          $_.Moref.Value  
----          --------------  
MACHINE1      18  
MACHINE2      19  

## Script B -:Launching the vmrc
CONNECTVMRCFROMPOWERCLI.PS1  

```
Param(  
    [Parameter(Mandatory=$true)]  
    [string]$viServer,  
    [Parameter(Mandatory=$true)]  
    [string]$userName,  
    [Parameter(Mandatory=$true)]  
    [string]$password,  
    [Parameter(Mandatory=$true)]  
    [string]$morefId = ""  
) #end param  

$VMHost = Connect-VIServer $($viServer) -User $userName -Password $password  

if ($VMHost -eq $null ) { throw "Connection to server failed!";}  
$si = Get-View ServiceInstance  
$sm = Get-View $si.Content.SessionManager  
$ticket = $sm.AcquireCloneTicket()  
try  
{  
    Start-Process -FilePath "C:\Program Files (x86)\VMware\VMware Remote Console\vmrc.exe" -ArgumentList "vmrc://clone:$($ticket)@$($viServer)/?moid=$($morefId)"  
}  
catch  
{  
    write-host $ErrorMessage  
}  
#must wait to allow for the process to be started BEFORE we disconnect from the server  
Start-Sleep -s 10  
Disconnect-VIServer $VMHost -Force -Confirm:$false  
```
## Example use
You must send the MoRef.Value which was obtained using Script A, in our example, start MACHINE2 which has 19 for ID.  

.\ConnectVMRCFromPowerCLI.ps1 [SERVER_NAME] [USER_NAME] [PASSWORD] 19  

The VMRC should appear and allow you to interact with it.
