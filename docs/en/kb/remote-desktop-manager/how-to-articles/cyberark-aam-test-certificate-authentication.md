---
eleventyComputed:
  title: CyberArk AAM test certificate authentication
  description: A good way of testing Cyberark’s rest API for AAM, is from Windows Powershell, or Powershell ISE.
---
A REST API is an API that complies with the design principles of the REST, or Representational State Transfer, architectural style. REST APIs are therefore sometimes referred to as RESTful APIs. 

A convenient way to test CyberArk's Rest API for AAM (Application Access Manager) is from ***Windows Powershell*** or ***Powershell ISE***.

```
# Change location into your personal certificate store.
Set-Location "Cert:\CurrentUser\My\"

# Store the certificate with the thumbprint <your certificate thumbprint> in a variable ($Cert).
$Cert = Get-ChildItem | Where-Object {$_.Thumbprint -eq "<your thumbprint>"}

#then est the Invoke-RestMethod -Method Get...
Invoke-RestMethod -Method Get -Uri "<your Cyberark PasswordVaukt>AIMWebService/api/Accounts" -Certificate $cert -Body @{AppID = "<Your APP ID>"; Safe = "<Your Safe>"; Object = "<Object name>"}
```