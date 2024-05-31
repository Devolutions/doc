---
eleventyComputed:
  title: Convertir les dossiers virtuels dans {{ fr.RDM }}
  description: Ce sujet décrit comment convertir les dossiers virtuels dans {{ fr.RDM }}.
---
## Méthode manuelle
Supprimer les dossiers virtuels peut être fait en éditant manuellement chaque dossier virtuel, enregistrer les modifications et les convertir en dossiers réels. Cependant, ce processus devient chronophage lorsqu'il s'agit d'un nombre significatif de dossiers virtuels, car il nécessite de convertir chacun manuellement.

## Méthode PowerShell

{% snippet, "badgeWarning" %}
Avant de procéder avec la méthode PowerShell, veuillez prendre note des points suivants :
* Cette méthode supprime tous les dossiers virtuels dans les sources de données {{ fr.VLT }}s.
* Supprimer les dossiers en double avant d'exécuter le script PowerShell depuis la nouvelle entrée.
{% endsnippet %}

1. Lancer {{ fr.RDM }} en tant qu'administrateur en cliquant droit sur l'application et en choisissant ***Exécuter en tant qu'administrateur***.
1. Sélectionner la source de données {{ fr.VLT }}s depuis laquelle vous souhaitez convertir tous les dossiers virtuels dans le ***{{ fr.NPANE }}***.
1. Ajouter une nouvelle entrée.
1. Aller à ***Session – PowerShell*** pour créer une entrée de session PowerShell.
![Entrée de session PowerShell](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6014.png)
1. Nommer l'entrée et choisir le dossier dans lequel vous souhaitez la créer.
1. Définir l'entrée sur ***Script intégré***.
![Script intégré](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6020.png)
1. Cliquer sur ***Modifier le script intégré***.
![Modifier le script intégré](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6019.png)
1. Ajouter le script suivant :
```powershell
#vérifier si le module PowerShell de Remote Desktop Manager est installé
if(-not (Get-Module Devolutions.PowerShell -ListAvailable)){
    Install-Module Devolutions.PowerShell -Scope CurrentUser
}

$beforeAllGroups = Get-Date

$vaults = Get-RDMVault

foreach ($vault in $vaults)
{
    Set-RDMCurrentRepository -Repository $vault
    $vaultname = $vault.Name
    Write-Host "Coffre actuel est "$vaultname

    # Obtenir le chemin de dossier de toutes les entrées
    $sessions = Get-RDMSession
    $allGroups = @()
    foreach($session in $sessions)
    {
        # Diviser l'emplacement du dossier de groupe pour chaque raccourci
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

    # Obtenir tous les dossiers existant dans la base de données
    $groups = Get-RDMSession | where {$_.ConnectionType -eq "Group"}
    $realGroups = @()
    foreach ($group in $groups)
    {
        # Diviser l'emplacement du dossier de groupe pour chaque raccourci
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

    # Trier les tableaux et extraire les dossiers virtuels
    $realGroups = $realGroups | Sort-Object -Property Levels, Name, Group -Unique
    $allGroups = $allGroups | Sort-Object -Property Levels, Name, Group -Unique
    $results = $allGroups | where {$realGroups.Group -notcontains $_.Group}
    $results = $results | Sort-Object -Property Levels, Name, Group -Unique

    # Convertir les dossiers virtuels dans la base de données
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
            # Diviser le dossier parent
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
                    Write-Host "Dossier virtuel $name a été créé avec succès dans la base de données !"
                }
            }
            $name = $group.Name
            $folder = $group.Group
            $session = New-RDMSession -Name $name -Group $folder -Type Group -SetSession
            Update-RDMUI
        }
        Write-Host "Dossier virtuel $name a été créé avec succès dans la base de données !"
    }
}

$afterCreatingGroups = Get-Date
Write-Host "Temps pris pour convertir les dossiers virtuels : $(($afterCreatingGroups).Subtract($beforeAllGroups).Seconds) seconde(s)"
```
9. Cliquer ***OK*** pour appliquer le script.
1. Cliquer ***OK*** pour enregistrer les paramètres de l'entrée et fermer la fenêtre.
1. Cliquer sur ***Ouvrir la session*** pour exécuter l'entrée.
![Ouvrir la session](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6018.png)

Le script va maintenant convertir tous les dossiers virtuels dans les sources de données {{ fr.VLT }}s.
