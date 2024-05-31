---
eleventyComputed:
  title: Script Secret Server
---
Procédure de test avec PowerShell :

Voici un script que vous pouvez utiliser pour tester votre accès depuis un poste client.

1. Enregistrer le code suivant dans un fichier appelé searchsecret.ps1.
1. Modifier le script selon les besoins pour correspondre à votre Secret Server et nom d'utilisateur/mot de passe/domaine.
1. Modifier le $searchterm pour correspondre à votre recherche.

Cela vous permettra de tester la connectivité entre votre poste de travail et votre Secret Server.

```powershell
$url = 'http<area>://mysecretserver/webservices/sswebservice.asmx'
$username = 'myusername'
$password = 'mypassword'
$domain = 'mydomain'   # laisser vide pour les utilisateurs locaux

$searchterm = 'VPN'
$proxy = New-WebServiceProxy -uri $url -UseDefaultCredential

# obtenir un jeton pour une utilisation ultérieure en s'authentifiant à l'aide du nom d'utilisateur/du mot de passe
$result1 = $proxy.Authenticate($username, $password, '', $domain)
if ($result1.Errors.length -gt 0){
$result1.Errors[0]
exit
}
else
{
$token = $result1.Token
}

# rechercher des secrets avec notre terme de recherche (s'authentifier en passant notre jeton)
Write-Host 'Recherche de : ' $searchterm
$result2 = $proxy.SearchSecrets($token, $searchterm,$null,$null)
if ($result2.Errors.length -gt 0){
$result2.Errors[0]
}
else
{
Write-Host 'Résultats de recherche obtenus : ' $result2.SecretSummaries.length

# Si vous voulez les données en XML
# $xml = convertto-xml $result2.SecretSummaries -As string -Depth 20
# $xml

$result2.SecretSummaries | ForEach-Object { Write-Host 'SecretId:' $_.SecretId '  Name:' $_.SecretName  ' FolderId:' $_.FolderId }

# if ($result2.SecretSummaries.length -gt 0) {
# $result2.SecretSummaries[0]
# }

}
```
