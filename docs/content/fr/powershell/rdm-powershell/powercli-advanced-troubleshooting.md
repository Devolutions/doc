---
eleventyComputed:
  title: PowerCLI dépannage avancé
---
{{ fr.RDM }} appelle les applets de commande PowerCLI et présente les résultats dans son interface utilisateur.

Voici des étapes pour aider à isoler les problèmes lorsque l'intégration ne fonctionne pas comme prévu.

## Script A : Obtenir la liste des machines virtuelles
GETVMS.PS1  

```powershell
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

## Exemple d'utilisation
`.\GetVMs.ps1 [NOM_DU_SERVEUR] [NOM_UTILISATEUR] [MOT_DE_PASSE]`

Nom          $_.Moref.Value
----          --------------
MACHINE1      18
MACHINE2      19

## Script B : Lancer le vmrc
CONNECTVMRCFROMPOWERCLI.PS1  

```powershell
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

## Exemple d'utilisation
Vous devez envoyer la valeur MoRef qui a été obtenue en utilisant le Script A, dans notre exemple, démarrer MACHINE2 qui a 19 pour ID.  

.\ConnectVMRCFromPowerCLI.ps1 [NOM_DU_SERVEUR] [NOM_UTILISATEUR] [MOT_DE_PASSE] 19  

Le VMRC devrait apparaître et vous permettre d'interagir avec lui.
