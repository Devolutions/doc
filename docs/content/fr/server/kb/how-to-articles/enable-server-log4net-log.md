---
eleventyComputed:
  title: Activer les fichiers journaux du {{ fr.DVLS }}
  description: Il se peut que notre équipe de support vous demande d'obtenir les fichiers journaux du {{ fr.DVLS }}. Ils se trouvent dans le dossier App_Data de l'application web {{ fr.DVLS }}.  
---
Il se peut que notre équipe de support vous demande d'obtenir les fichiers journaux du {{ fr.DVLS }}. Ils se trouvent dans le dossier App_Data de l'application web {{ fr.DVLS }}.  

Les fichiers nécessaires à cet emplacement sont ceux commençant par "DPS_Main" (**DPS_Main_001.log**, **DPS_Main_002.log**, etc.). S'ils ne sont pas présents, c'est probablement parce que l'***Identité du Pool d'Applications*** ne peut pas écrire dans ce dossier. Résolvez ce problème en donnant à cette identité la permission ***Modifier*** sur le dossier App_Data.