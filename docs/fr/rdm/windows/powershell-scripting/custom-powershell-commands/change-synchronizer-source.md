---
title: Changer la source d'un synchroniseur
---
Si vous avez utilisé la version {{ fr.RDM }} avec la fonction du synchroniseur ***Action sur l'incompatibilité de l'entrée*** , les étapes suivantes vous permettront de modifier votre source avec une commande Powershell sans avoir à recréer toutes vos sessions, marquant ainsi toutes les entrées sélectionnées comme créées par le synchroniseur. 

## Paramètres 

1. Sélectionner votre entrée Synchroniseur dans votre arborescence, cliquer avec le bouton droit et sélectionner ***Propriétés*** . 
1. Copier l' ***ID de l'entrée*** dans ***Information de l'entrée*** .  
![!!RdmWin4058.png](/img/fr/rdm/windows/RdmWin4058.png) 
1. Sélectionner vos entrées et accéder à la boîte de dialogue Commande PowerShell personnalisée comme décrit dans [Commandes PowerShell personnalisées](/fr/rdm/windows/powershell-scripting/custom-powershell-commands/) . 
1. Écrire la ligne suivante pour votre commande Powershell: 

```powershell
$connection.CreationSource = "ID de l'entrée du synchroniseur"
$RDM.Save();
```
![!!RdmWin4059.png](/img/fr/rdm/windows/RdmWin4059.png) 

