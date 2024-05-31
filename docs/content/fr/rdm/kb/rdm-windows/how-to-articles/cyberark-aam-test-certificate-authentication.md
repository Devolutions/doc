---
eleventyComputed:
  title: Authentification par certificat de test CyberArk AAM
  description: Une bonne manière de tester l'API REST de CyberArk pour AAM, est depuis Windows Powershell, ou Powershell ISE.
---
Une API REST est une API qui respecte les principes de conception du style architectural REST, ou Transfer de l'État Représentationnel. Les API REST sont donc parfois appelées API RESTful.

Une manière pratique de tester l'API Rest de CyberArk pour AAM (Gestionnaire d'Accès aux Applications) est depuis ***Windows Powershell*** ou ***Powershell ISE***.

```powershell
#Changer de répertoire pour votre magasin de certificats personnels.
Set-Location "Cert:\CurrentUser\My\"

#Stocker le certificat avec l'empreinte <votre empreinte de certificat> dans une variable ($Cert).
$Cert = Get-ChildItem | Where-Object {$_.Thumbprint -eq "<votre empreinte>"}

#puis tester la méthode Invoke-RestMethod -Method Get...
Invoke-RestMethod -Method Get -Uri "<votre Cyberark PasswordVaukt>AIMWebService/api/Accounts" -Certificate $cert -Body @{AppID = "<Votre ID APP>"; Safe = "<Votre Coffre>"; Object = "<Nom de l'objet>"}
```
