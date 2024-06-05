---
eleventyComputed:
  title: Liste des noms de propriétés pour script PowerShell
  status: Sujet disponible en langue allemande
  keywords:
  - PowerShell
  - GUID
  - Permissions
---
On nous demande souvent une liste complète des noms de propriétés et il est difficile de la fournir pour plusieurs raisons. L'approche la plus efficace reste d'examiner la structure XML d'une entrée pertinente pour déterminer les noms des champs.

## Ingénierie inverse de la structure d'une entrée
1. Créer une entrée du type nécessaire, ajouter uniquement les données obligatoires à ce moment. Cliquer sur ***OK*** pour sauvegarder l'entrée.
1. Faire un clic droit sur l'entrée, puis utiliser ***Presse-papiers – Copier***.
1. Dans la boîte de dialogue qui apparaît, passer à l'onglet ***Aperçu***, copier la structure XML dans un fichier texte. C'est le AVANT.
1. Effectuer manuellement la modification de l'entrée qui devrait être automatisée à l'aide de PowerShell, sauvegarder l'entrée.
1. En utilisant ***Presse-papiers – Copier***, sauvegarder le XML modifié dans un autre fichier. C'est le APRÈS.
1. Comparer les deux fichiers avec un outil de différence, les champs qui ont changé et les valeurs qui ont été assignées indiqueront ce que le script devrait faire.  
{% snippet icon.badgeHelp %}
Pour en savoir plus sur les GUIDs des propriétés d'identifiants [{{ fr.RDM }}](/powershell/rdm-powershell/xml-information/).
{% endsnippet %}

{% snippet icon.badgeHelp %}
Pour en savoir plus sur les GUIDs des propriétés d'identifiants [{{ fr.DVLS }}](/powershell/dvls-powershell/xml-information/).
{% endsnippet %}

## Astuces et conseils

* Pour trouver des propriétés et des chemins, faire de l'ingénierie inverse sur le format de fichier XML de session. Créer une session exemple dans {{ fr.RDM }} et l'exporter en utilisant le menu clic droit ***Import/Export – Exporter Session (.rdm)***. Une fois exporté, ouvrir le fichier .rdm avec un éditeur. Parcourir la structure XML pour trouver le chemin et le nom de la propriété.
* Pour lister toutes les propriétés d'une entrée, passer l'objet session au cmdlet Get-Member.

```powershell
$session = Get-RDMSession -Name "MyRDPSession"  
$session | Get-Member
```
