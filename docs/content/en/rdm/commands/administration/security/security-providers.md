---
eleventyComputed:
  title: Security providers
  description: The Security Provider allows for encrypting the data source content. To access the security provider, navigate to Administration – Security Provider. 
---
{% youtube 'phg2jL9fsIQ' %}  

The ***Security Provider*** allows for encrypting the data source content. To access the security provider, navigate to ***Administration – Security Provider***. 

{% snippet, "badgeInfo" %} 
This feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
Regardless of the selected security provider, passwords stored in data sources are **ALWAYS** encrypted using AES 256 bit encryption. 
 
When configuring a Certificate Security Provider in a published app environment (Citrix, RemoteApp, XenApp) as a Security Provider, the user who will run {{ en.RDM }} in the RemoteApp environment (Citrix) will require a ***Read permission*** on the certificate.  

If the ***Read permission*** is not correctly set, {{ en.RDM }} will generate the CryptographicException - Keyset does not exist error dialog. Follow [Certificate Security Provider in a Published app Environment](/rdm/kb/rdm-windows/how-to-articles/certificate-security-provider-published-app-environment/) to resolve the issue. 
 
By using a security provider, you ensure that nobody can read entries configuration data, even when people have a direct access to the database(s) or a backup. Shared data sources should always be secured with a security provider. 
 
{% snippet, "shieldCaution" %} 
Prior to applying a new or changing an existing security provider, make sure that every users are disconnected from the data source. If you are changing an existing Shared Passphrase or Certificate, please note that users will get back access to the data source when they enter the new Shared Passphrase or Certificate on their computer. 
{% endsnippet %}
 
## Settings 

Please note that changing a security provider on a data source with a great number of entries is a lengthy operation. 
 
{% snippet, "badgeCaution" %} 
Applying a new security provider does process the whole database, therefore we advise you to create a backup prior to this operation. 
{% endsnippet %}

1. Go to ***Administration*** – ***Security Provider*** in the ribbon of {{ en.RDM }}.  
1. Click on ***Change Security Settings*** to change the security provider.  
![Security Provider](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6226.png) 
1. Select a security type from the drop-down list.  
![Security Type](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6227.png) 

| OPTION           | DESCRIPTION                                                                                                                  |
|------------------|------------------------------------------------------------------------------------------------------------------------------|
| Default          | This is the default security mode. The XML is not encrypted by default. Please note that the passwords are always encrypted. |
| Shared passphrase (V2) | The security provider encrypts the whole XML using AES with a passphrase mixed to a private key. The passphrase will be asked once on each machine.Provider. |
| Shared passphrase (V3) | The security provider encrypts the whole XML with a passphrase. The passphrase will be asked one on each machine.                                                                        |
| Certificate      | Set up a Certificate for the Security Provider. Require elevated privileges.  
| Certificate (V2)     | The security provider encrypts the whole XML using the private key of a certificate.                                                                 |
| Keyfile     | The security provider encrypts the whole XML using a keyfile provided by you. 

## Shared Passphrase 

{% snippet, "shieldWarning" %} 
If the passphrase is lost, nothing that can be done to recover the data. When using a passphrase, always copy it to a secure location. 
{% endsnippet %}
 
![Security Provider - Shared Passphrase](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6228.png) 

Entries configuration data is encrypted using a mix of a key stored in {{ en.RDM }} and the passphrase you have entered.  

The passphrase is required only when configuring the data source. A policy can be enabled to always prompt for the passphrase when connecting to the data source.  

When configuring a security provider with a shared passphrase, you have the choice of whether or not you wish to save it in the registry. {{ en.RDM }} will try first to save it on the LOCAL_MACHINE, if unable it will save it in the CURRENT_USER instead.  

* **HKEY_CURRENT_USER\SOFTWARE\RemoteDesktopManager<Datasource ID>.shk** 
* **HKEY_LOCAL_MACHINE\SOFTWARE\RemoteDesktopManager<Datasource ID>.shk** 

If the option is not enabled, then the passphrase is saved locally at the following location:  

* **%LOCALAPPDATA%\Devolutions\RemoteDesktopManager<Datasource ID>.shk** 

In a Terminal Services environment, it should be saved at this location:  

* **%APPDATA%\Devolutions\RemoteDesktopManager<Datasource ID>.shk** 

In a portable installation of {{ en.RDM }}, the passphrase will be saved at the same location as the portable {{ en.RDM }} instance. 

## Certificate 

When choosing ***Certificate*** as Security Provider, entries configuration data is encrypted using a mix of a key stored in {{ en.RDM }} and the private key contained in the certificate.  
![Security Provider - Certificate](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6229.png) 

| OPTION    | DESCRIPTION                                                                                   |
|-----------|-----------------------------------------------------------------------------------------------|
| Location  | Indicate the certificate location. Select between:<br><ul><li>***Current user***</li><li>***Local machine***</li></ul> |
| Store     | Indicate the store location of the certificate. Select between:<br><ul><li>***Other people***</li> <li>***Third-Party Root Certification Authorities***</li> <li>***Intermediate Certification***</li> <li>***Untrusted Certificates***</li> <li>***Personal***</li> <li>***Trusted Root Certification Authorities***</li> <li>***Trusted people***</li> <li>***Trusted publisher***</li></ul> |
| Thumbprint| Select an existing RSA certificate.                                                           |

### Create Certificate 

It is possible to create a Self Signed certificate by clicking on ***Create Certificate***.  
![Self Signed Certificate](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6230.png) 

| OPTION                    | DESCRIPTION                                                                                     |
|---------------------------|-------------------------------------------------------------------------------------------------|
| Common name               | Name of the certificate.                                                                        |
| Key size (bits)           | Indicate the key size (bits) of the certificate. Select between:<br><ul><li>384</li><li>512</li><li>1024</li><li>2048</li><li>4096</li><li>8192</li><li>16384</li></ul> |
| Valid from                | Start date of the certificate.                                                                  |
| Valid to                  | End date of the certificate.                                                                    |
| Saving method       | Save the certificate as a pfx file and secure this certificate with a password. Indicate the location and the store to save the certificate.                   |
| Password | Specify a certificate password.                                |

