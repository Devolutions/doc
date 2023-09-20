---
eleventyComputed:
  title: Création de structure dossiers à partir d'un fichier CSV
---
{% snippet icon.badgeInfo %} 
Veuillez noter que le fichier CSV doit être encodé en UTF-8 pour prendre en charge les caractères spéciaux. 
{% endsnippet %}
 
Cet exemple crée une structure de dossier de groupe à partir d'un fichier CSV. 

## Échantillon 

```powershell
$csv = Import-Csv "c:\YourFolder\GroupFolder.csv"
 
foreach ($csvEntry in $csv) {
    $groupName = $csvEntry.Name
 
 # Extract the group folder name
 if ($groupName.Contains("\")) {
            $groupName = $groupName.Substring($groupName.LastIndexOf("\"), $groupName.Length - $groupName.LastIndexOf("\"))
            $groupName = $groupName.TrimStart("\")
         }
 
 # Create the group folder if it is not null, empty or fill in with space characters
 if (![string]::IsNullOrWhiteSpace($groupName)) {
     $session = New-RDMSession -Type "Group" -Name $groupName
     $session.Group = $csvEntry.Name
     Set-RDMSession $session
     Write-Host "Group Folder $groupName created" -f Yellow
 }
}
 
Update-RDMUI
```

## Remarques 

Le fichier CSV ne doit avoir qu'une seule colonne avec le titre défini comme Nom.  

Le chemin complet doit être spécifié pour chaque sous-dossier.  

Voici un exemple de ce fichier CSV :  
![Exemple de fichier CSV](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip11585.png) 
