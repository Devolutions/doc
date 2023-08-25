---
title: Extraire l'ID TeamViewer
---
Vous pouvez utiliser Powershell pour extraire l'ID TeamViewer d'une session. 

## Paramètres 
Voici un script pour extraire l'ID TeamViewer d'une session :  

```powershell
$sessions = Get-RDM-Session | where {$_.Session.Kind -eq "TeamViewer"} 
$sessions[0].Session.GetProperty("TeamViewer", "ID") 
```
