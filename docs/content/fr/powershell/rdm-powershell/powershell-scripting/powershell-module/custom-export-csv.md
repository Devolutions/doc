---
eleventyComputed:
  title: Exportation personnalisée vers CSV
---
De nombreux clients demandent un export spécial qui contiendrait des champs spécifiques.

## Paramétrage
Voici un petit script qui peut être utilisé pour générer des URL pour notre nouveau gestionnaire de protocole web. Nous générons un fichier csv qui contient le nom et l'URL.

```powershell
## obtenir l'ID de la source de données, notez que le bouton "Créer une URL Web" génère un ID différent, mais les deux sont acceptés
$dsid = Get-RDM-DataSource | where {$_.IsCurrent -eq "X"} | select -expand "ID"
## obtenir les sessions RDP, créer un nouvel objet avec les champs désirés.
## Simplement ajouter des commandes "add-member" pour inclure un nouveau champ
$s = Get-RDM-Session |
    where {$_.Session.Kind -eq "RDPConfigured"} |
    foreach {
        new-Object Object |
            Add-Member NoteProperty Name $_.Name –PassThru |
          Add-Member NoteProperty URL "rdm://open?DataSource=$dsid&Session=$($_.ID)" –PassThru
};
## sauvegarder en csv, les noms des champs sont utilisés comme en-têtes de colonnes.
$s | export-csv c:\temp\sessions.csv -notypeinformation;
```
