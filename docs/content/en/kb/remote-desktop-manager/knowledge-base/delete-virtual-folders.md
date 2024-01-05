---
eleventyComputed:
  title: Convert virtual folders in {{ en.RDM }}
  description: This topic describes how to convert virtual folders in {{ en.RDM }}.
---
## Manual method
Deleting virtual folders can be done by manually editing each virtual folder, saving the changes and converting them into real folders. However, this process becomes time-consuming when dealing with a significant number of virtual folders, as it requires converting each one manually.

## PowerShell method
{% snippet icon.badgeWarning %}
This method deletes all virtual folders in the data source {{ en.VLT }}s.
{% endsnippet %}

{% snippet icon.badgeWarning %}
Delete duplicate folders before running the PowerShell script from the new entry.
{% endsnippet %}

1. Launch {{ en.RDM }} as an administrator by right-clicking on the application and choosing ***Run as administrator***.
1. Select the data source {{ en.VLT }}s from which you want to convert all virtual folders in the ***{{ en.NPANE }}***.
1. Add a new entry.
1. Go to ***Session – PowerShell*** to create a PowerShell session entry.  
![PowerShell session entry](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6014.png)
1. Name the entry and choose the folder in which you want to create it.
1. Set the entry to ***Embedded Script***.  
![Embedded Script](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6020.png)
1. Click on ***Edit embedded script***.  
![Edit embedded script](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6019.png)
1. Add the following script:  
```powershell
#check if Remote Desktop Manager PS module is installed
if(-not (Get-Module Devolutions.PowerShell -ListAvailable)){
    Install-Module Devolutions.PowerShell -Scope CurrentUser
}

$beforeAllGroups = Get-Date

$vaults = Get-RDMVault

foreach ($vault in $vaults)
{
    Set-RDMCurrentRepository -Repository $vault
    $vaultname = $vault.Name
    Write-Host "Current Vault is "$vaultname

    # Get all entries' folder path
    $sessions = Get-RDMSession 
    $allGroups = @()
    foreach($session in $sessions)
    {
        # Split the group folder location for each shortcut
        $tempFolder = $session.Group
        $shortcuts = $tempFolder.split(';')

        foreach ($shortcut in $shortcuts)
        {    
            $folder = $shortcut
            if ($folder)
            {
                $levels = $folder.split('\')
                $nblevels = 1
                $Groupfolder = ""
                foreach($level in $levels)
                {
                    $name = $level
                    if ($nblevels -eq 1)
                    {
                        $Groupfolder = $name
                    }
                    else
                    {
                        $Groupfolder = $Groupfolder + "\" + $name
                    }
                    $item = New-Object PSObject -Property @{Name = $name; Group = $Groupfolder; Levels = $nbLevels}
                    $allGroups += $item
                    $nblevels++
                }
            }
        }
    }

    # Get all folders that exist in the database
    $groups = Get-RDMSession | where {$_.ConnectionType -eq "Group"}
    $realGroups = @()
    foreach ($group in $groups) 
    {
        # Split the group folder location for each shortcut
        $tempFolder = $group.Group
        $shortcuts = $tempFolder.split(';')

        foreach ($shortcut in $shortcuts)
        {    
            $folder = $group.Group
            if ($folder)
            {
                $levels = $folder.split('\')
                $nbLevels = $levels.Count
                $name = $group.Name
                $item = New-Object PSObject -Property @{Name = $name; Group = $folder; Levels = $nbLevels}
                $realGroups += $item
            }
        }
    }

    # Sort arrays and extratc virtual folders
    $realGroups = $realGroups | Sort-Object -Property Levels, Name, Group -Unique
    $allGroups = $allGroups | Sort-Object -Property Levels, Name, Group -Unique
    $results = $allGroups | where {$realGroups.Group -notcontains $_.Group}
    $results = $results | Sort-Object -Property Levels, Name, Group -Unique

    # Convert virtual folders in the database
    foreach ($group in $results)
    {
        $name = $group.Name
        $folder = $group.Group
        try
        {
            $session = New-RDMSession -Name $name -Group $folder -Type Group -SetSession -ErrorAction Stop
            Update-RDMUI
        }
        catch
        {
            # Split the parent folder
            $tempFolder = $folder.Replace("\$name",'')
            $parents = $tempFolder.split('\')
            
            foreach ($parent in $parents)
            {
                try
                {
                    $exist = Get-RDMSession -Name $parent -ErrorAction Stop
                }
                catch
                {
                    $name = $parent
                    $index = $parents.Indexof($parent)
                    $folder = ""
                    for ($item = 0;$item -le $index;$item++)
                    {
                        if ($item -gt 0)
                        {
                            $folder += "\"
                        }
                        $folder += $parents[$item]
                    }
                    $session = New-RDMSession -Name $name -Group $folder -Type Group -SetSession
                    Update-RDMUI                
                    Write-Host "Virtual folder $name has been successfully created in the database!" 
                }
            }
            $name = $group.Name
            $folder = $group.Group
            $session = New-RDMSession -Name $name -Group $folder -Type Group -SetSession
            Update-RDMUI
        }
        Write-Host "Virtual folder $name has been successfully created in the database!" 
    }
}

$afterCreatingGroups = Get-Date
Write-Host "Time taken to convert virtual folders: $(($afterCreatingGroups).Subtract($beforeAllGroups).Seconds) second(s)"
```
9. Click ***OK*** to apply the script.
1. Click ***OK*** the save the entry settings and close the window.
1. Click on ***Open Session*** to run the entry.  
![Open Session](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6018.png)

The script will now convert all virtual folders in the data source {{ en.VLT }}s.
