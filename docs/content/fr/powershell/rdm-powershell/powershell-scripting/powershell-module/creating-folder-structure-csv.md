---
eleventyComputed:
  title: Exemples PowerShell - créer une structure de dossiers à partir d'un fichier CSV
---
{% snippet, "badgeInfo" %}
Veuillez noter que le fichier CSV doit être encodé en UTF-8 pour prendre en charge les caractères spéciaux.
{% endsnippet %}

Cet exemple crée une structure de dossiers de groupe à partir d'un fichier CSV.

## Exemple
```powershell
$csv = Import-Csv "c:\YourFolder\GroupFolder.csv"

foreach ($csvEntry in $csv) {
        $groupName = $csvEntry.Name

    # Extraire le nom du dossier de groupe
    if ($groupName.Contains("\")) {
         $groupName = $groupName.Substring($groupName.LastIndexOf("\"), $groupName.Length - $groupName.LastIndexOf("\"))
         $groupName = $groupName.TrimStart("\")
        }

    # Créer le dossier de groupe s'il n'est pas null, vide ou rempli de caractères d'espacement
    if (![string]::IsNullOrWhiteSpace($groupName)) {
        $session = New-RDMSession -Type "Group" -Name $groupName
        $session.Group = $csvEntry.Name
        Set-RDMSession $session
        Write-Host "Dossier de groupe $groupName créé" -f Yellow
        }
}

Update-RDMUI
```

## Notes
Le fichier CSV doit avoir une seule colonne avec le titre défini comme Nom.

Le chemin complet doit être spécifié pour chaque sous-dossier.

Voici un exemple de ce fichier CSV :
![Exemple de fichier CSV](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11585.png)
