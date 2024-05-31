---
eleventyComputed:
  title: Exécuter un script PowerShell avant d'ouvrir une connexion
---
Il est possible d'exécuter un script PowerShell avant d'établir une connexion, d'annuler le lancement ou même d'importer des scripts PowerShell externes. Pour ce faire, vous devez aller dans les ***Propriétés*** de l'entrée sous ***Événements – Avant Ouverture – PowerShell***.

En utilisant la propriété $RDM.connection, le script modifie temporairement l'une des propriétés de la session dans le contexte du lancement de la session uniquement. Lorsque la session est fermée, les propriétés reviennent à leurs valeurs originales.

Voici quelques exemples de scripts qui peuvent être exécutés.

## Changer le titre de l'onglet en ajoutant la date
Dans la fenêtre ***Script PowerShell***, copiez le script fourni ci-dessous et cliquez sur ***OK***.

```powershell
$date = Get-Date -DisplayHint Date
$RDM.Connection.TabTitle = $RDM.Connection.Name + "(" + $date + ")"
```
![!!KB4701](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4701.png)

## Exécuter un script et annuler le lancement de la session
Pour annuler le lancement d'une session, dans la fenêtre ***Script PowerShell*** de l'entrée, copiez le script ci-dessous et cliquez sur ***OK*** pour enregistrer.

`$RDM.Cancel = $true`

## Importer un script PowerShell externe
La cmdlet Import-Module peut être utilisée pour appeler un script PowerShell externe.

Dans l'exemple suivant, il charge le script RSAToken.ps1 et appelle sa fonction New_RSAToken qui retourne une valeur. Ensuite, il ajoute le contenu de la variable $RSAToken au mot de passe de la session avant d'ouvrir la session RDP.
![!!KB8114](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8114.png)
