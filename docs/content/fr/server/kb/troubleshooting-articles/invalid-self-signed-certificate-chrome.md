---
eleventyComputed:
  title: Certificat auto-signé invalide dans Chrome et Edge
  description: Les certificats auto-signés par défaut générés dans Windows Server (avant 2022) ne sont plus considérés comme valides par Chrome et Edge.
---
Les certificats auto-signés par défaut générés dans Windows Server (avant 2022) ne sont plus considérés comme valides par Chrome et Edge. Pour plus d'informations pour Chrome, consulter la documentation Google sur la [politique RSAKeyUsageForLocalAnchorsEnabled](https://chromeenterprise.google/policies/#RSAKeyUsageForLocalAnchorsEnabled).

Dans Windows Server 2022, il est possible de générer un nouveau certificat auto-signé. Dans les versions antérieures, utiliser le script PowerShell suivant pour générer un certificat auto-signé valide :
```powershell
#Créer le certificat et le placer dans le magasin de certificats personnel
$cert = New-SelfSignedCertificate -DnsName $(([System.Net.Dns]::GetHostByName($env:computerName)).HostName) -CertStoreLocation "cert:\LocalMachine\My" -KeyUsage DigitalSignature,CertSign,CRLSign -KeyAlgorithm RSA -KeyLength 2048 -Provider "Microsoft Enhanced RSA and AES Cryptographic Provider" -NotAfter (Get-Date).AddYears(5)
```
