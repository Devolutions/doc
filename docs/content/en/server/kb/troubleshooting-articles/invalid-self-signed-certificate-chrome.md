---
eleventyComputed:
  title: Invalid self-signed certificate in Chrome and Edge
  description: The default self-signed certificates generated in Windows Server (prior to 2022) are no longer considered valid by Chrome and Edge.
---
The default self-signed certificates generated in Windows Server (prior to 2022) are no longer considered valid by Chrome and Edge. For more information for Chrome, see the Google documentation on the [RSAKeyUsageForLocalAnchorsEnabled policy](https://chromeenterprise.google/policies/#RSAKeyUsageForLocalAnchorsEnabled).

In Windows Server 2022, you can generate a new self-signed certificate. In older versions, you can use the following PowerShell script to generate a valid self-signed certificate:
```powershell
#Create the cert and place it in the personal cert store
$cert = New-SelfSignedCertificate -DnsName $(([System.Net.Dns]::GetHostByName($env:computerName)).HostName) -CertStoreLocation "cert:\LocalMachine\My" -KeyUsage DigitalSignature,CertSign,CRLSign -KeyAlgorithm RSA -KeyLength 2048 -Provider "Microsoft Enhanced RSA and AES Cryptographic Provider" -NotAfter (Get-Date).AddYears(5)
```
