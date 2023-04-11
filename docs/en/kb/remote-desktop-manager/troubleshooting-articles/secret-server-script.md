---
title: Secret Server Script
---
Testing procedure with PowerShell 

Here is a script that you can use to test your access from a client workstation.  

1. Save the following code in a file called searchsecret.ps1.  
1. Change the script as needed to match your Secret Server and username/password/domain.  
1. Change the $searchterm to match your search.  

This will allow you to test the connectivity between your workstation and your Secret Server server.  

```
$url = 'http<area>://mysecretserver/webservices/sswebservice.asmx'  
$username = 'myusername'  
$password = 'mypassword'  
$domain = 'mydomain'   # leave blank for local users  

$searchterm = 'VPN'  
$proxy = New-WebServiceProxy -uri $url -UseDefaultCredential  

# get a token for further use by authenticating using username/password  
$result1 = $proxy.Authenticate($username, $password, '', $domain)  
if ($result1.Errors.length -gt 0){  
$result1.Errors[0]  
exit  
}  
else  
{  
$token = $result1.Token  
}  

# search secrets with our searchterm (authenticate by passing in our token)  
Write-Host 'Searching for: ' $searchterm  
$result2 = $proxy.SearchSecrets($token, $searchterm,$null,$null)  
if ($result2.Errors.length -gt 0){  
$result2.Errors[0]  
}  
else  
{  
Write-Host 'Got search results: ' $result2.SecretSummaries.length  

# If you want the data as XML  
# $xml = convertto-xml $result2.SecretSummaries -As string -Depth 20  
# $xml  

$result2.SecretSummaries | ForEach-Object { Write-Host 'SecretId:' $_.SecretId '  Name:' $_.SecretName  ' FolderId:' $_.FolderId }  

# if ($result2.SecretSummaries.length -gt 0) {  
# $result2.SecretSummaries[0]  
# }  

}  
```