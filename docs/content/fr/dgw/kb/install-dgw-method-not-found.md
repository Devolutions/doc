---
eleventyComputed:
  title: Installation de {{ fr.DGW }} en parallèle méthode non trouvée
---
Lors de l'installation de {{ fr.DGW }} sur la même machine que {{ fr.DVLS }} (installation en parallèle), cette erreur peut se déclencher dans les journaux d'installation.

Méthode non trouvée : 'Void System.Management.Automation.Runspaces.InitialSessionState.set_ExecutionPolicy(Microsoft.PowerShell.ExecutionPolicy)'.

## Solution
Comme {{ fr.DGW }} nécessite au moins la version 5.1 de PowerShell, veuillez mettre à jour PowerShell vers cette version pour résoudre le problème. Puis recommencer l'installation de {{ fr.DGW }}.
