---
title: Liste des noms de propriétés pour du script PowerShell
keywords:
- PowerShell
- GUID
- Permissions
---
On nous demande souvent une liste complète des noms de propriétés et il est difficile de la fournir pour de multiples raisons. L'approche la plus efficace reste l'examen de la structure XML d'une entrée pertinente pour identifier les noms des champs.

## Rétro-ingénierie de la structure d'une entrée
1. Créer une entrée du type requis, n'ajouter pour l'instant que les données obligatoires. Cliquer sur ***OK*** pour enregistrer l'entrée.
1. Cliquer avec le bouton droit de la souris sur l'entrée, puis utiliser ***Presse-papiers – Copier***.
1. Dans le dialogue qui s'affiche, passer à l'onglet ***Aperçu***, copier la structure XML dans un fichier texte. Il s'agit de l'AVANT.
1. Effectuer manuellement la modification de l'entrée qui doit être automatisée à l'aide de PowerShell, enregistrer l'entrée.
1. En utilisant ***Presse-papiers – Copier***, enregistrer le XML modifié dans un autre fichier. Ceci est l'APRÈS.
1. Comparer les deux fichiers avec votre outil de comparaison préféré, les champs qui ont changé et les valeurs qui ont été attribuées indiqueront ce que votre script doit faire.  
{% snippet icon.badgeInfo %}
Lire davantage sur les [propriétés des identifiants GUIDS dans {{ fr.RDM }}](/fr/kb/devolutions-powershell/remote-desktop-manager/xml-information/).
{% endsnippet %}

{% snippet icon.badgeInfo %}
Lire davantage sur les [propriétés des identifiants GUIDS dans {{ fr.DVLS }}](/fr/kb/devolutions-powershell/devolutions-server/xml-information/).
{% endsnippet %}

## Trucs et astuces
* Pour trouver les propriétés et les chemins d'accès, procéder à l'ingénierie inverse du format de fichier XML de la session. Créer un exemple de session dans {{ fr.RDM }} et l'exporter en utilisant le menu du clic droit ***Importer/Exporter - Exporter la session (.rdm)***. Une fois exporté, ouvrir le fichier .rdm avec un éditeur. Parcourir la structure XML pour trouver le chemin d'accès et le nom de la propriété.
* Pour répertorier toutes les propriétés d'une entrée, envoyer l'objet de session au cmdlet Get-Member.

```powershell
$session = Get-RDMSession -Name "MaSessionRDP"  
$session | Get-Member
```

* Utiliser la méthode AddDataEntryKind pour définir le type d'entrée de données sur Web.
