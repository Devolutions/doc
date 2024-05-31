---
eleventyComputed:
  title: Changer votre source de synchronisation
---
Si vous avez utilisé la version {{ fr.RDM }} avec la fonctionnalité ***Action en cas de non-concordance d'entrée***, les étapes suivantes vous permettront de changer facilement votre source avec une commande Powershell sans avoir à recréer toutes vos sessions, marquant ainsi toutes les entrées sélectionnées comme créées par le synchronisateur.

## Paramètres
1. Sélectionner votre entrée de Synchronisateur dans votre vue en arborescence, cliquer droit et sélectionner ***Propriétés***.
1. Copier l'***ID d'entrée*** dans le menu ***Informations sur l'entrée*** (vous aurez ensuite besoin de ce numéro d'ID pour l'insérer dans votre commande Powershell).
![Advanced - Session ID](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10577.png)
1. Sélectionner vos entrées et atteindre le dialogue de Commande PowerShell Personnalisée comme décrit dans [Commandes PowerShell Personnalisées](/powershell/rdm-powershell/powershell-scripting/custom-powershell-commands/)
1. Écrire la ligne suivante pour votre commande Powershell :

```powershell
$connection.CreationSource = "***** ID de synchronisateur obtenu à l'étape 2 *****"
$RDM.Save();
```
![Custom Powershell Command](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10613.png)
