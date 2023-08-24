---
title: Security Providers
---
{% youtube 'phg2jL9fsIQ' %}  

The ***Security Provider*** allows for encrypting the data source content. To access the security provider, navigate to ***Administration – Security Provider***. 

{% snippet icon.badgeInfo %} 
This feature requires an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Regardless of the selected security provider, passwords stored in data sources are ALWAYS encrypted using AES 256 bit encryption. 
{% endsnippet %}
 
{% snippet icon.badgeHelp %} 
When configuring a Certificate Security Provider in a published app environment (Citrix, RemoteApp, XenApp) as a Security Provider, the user who will run {{ en.RDM }} in the RemoteApp environment (Citrix) will require a ***Read permission*** on the certificate.  

If the ***Read permission*** is not correctly set, {{ en.RDM }} will generate the CryptographicException - Keyset does not exist error dialog. Follow the [Certificate Security Provider in a Published app Environment](/kb/remote-desktop-manager/how-to-articles/certificate-security-provider-published-app-environment/) topic to resolve the issue. 
{% endsnippet %}
 
{% snippet icon.shieldNotice %} 
By using a security provider, you ensure that nobody can read entries configuration data, even when people have a direct access to the database(s) or a backup. Shared data sources should always be secured with a security provider. 
{% endsnippet %}
 
{% snippet icon.shieldCaution %} 
Prior to applying a new or changing an existing security provider, make sure that every users are disconnected from the data source. If you are changing an existing Shared Passphrase or Certificate, please note that users will get back access to the data source when they enter the new Shared Passphrase or Certificate on their computer. 
{% endsnippet %}
 
## Settings 

{% snippet icon.badgeInfo %} 
Please note that changing a security provider on a data source with a great number of entries is a lengthy operation. 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
Applying a new security provider does process the whole database, therefore we advise you to create a backup prior to this operation. 
{% endsnippet %}
 
1. Click on Change Security Settings to change the security provider.  
![Security Provider](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10284.png) 
1. Select a security type from the drop-down list.  
![Security Type](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10285.png) 

<table>
	<tr>
		<th>
OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Default 
		</td>
		<td>
This is the default security mode. The XML is not encrypted by default. Please note that the passwords are always encrypted. 
		</td>
	</tr>
	<tr>
		<td>
Shared passphrase 
		</td>
		<td>
Set up a shared passphrase for the Security Provider. 
		</td>
	</tr>
	<tr>
		<td>
Certificate 
		</td>
		<td>
Set up a Certificate for the Security Provider. 
		</td>
	</tr>
</table>

## Shared Passphrase 

{% snippet icon.shieldWarning %} 
If the passphrase is lost, nothing that can be done to recover the data. When using a passphrase, always copy it to a secure location. 
{% endsnippet %}
 
![Security Provider - Shared Passphrase](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3436.png) 

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
![Security Provider - Certificate](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10286.png) 

<table>
	<tr>
		<th>

OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Location 
		</td>
		<td>
Indicate the certificate location. Select between:  

* ***Current user*** 
* ***Local machine*** 
		</td>
	</tr>
	<tr>
		<td>
Store 
		</td>
		<td>
Indicate the store location of the certificate. Select between:  

* ***Address book*** 
* ***Authorization root*** 
* ***Certificate authority*** 
* ***Disallowed*** 
* ***My*** 
* ***Root*** 
* ***Trusted people*** 
* ***Trusted publisher*** 
		</td>
	</tr>
	<tr>
		<td>
Thumbprint 
		</td>
		<td>
Select an existing RSA certificate. 
		</td>
	</tr>
</table>

### Create Certificate 

It is possible to create a Self Signed certificate by clicking on ***Create Certificate***.  
![Self Signed Certificate](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10288.png) 

<table>
	<tr>
		<th>

OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Common name 
		</td>
		<td>
Name of the certificate. 
		</td>
	</tr>
	<tr>
		<td>
Key size (bits) 
		</td>
		<td>
Indicate the key size (bits) of the certificate. Select between:  

* 384 
* 512 
* 1024 
* 2048 
* 4096 
* 8192 
* 16384 
		</td>
	</tr>
	<tr>
		<td>
Valid from 
		</td>
		<td>
Start date of the certificate. 
		</td>
	</tr>
	<tr>
		<td>
Valid to 
		</td>
		<td>
End date of the certificate. 
		</td>
	</tr>
	<tr>
		<td>
Save to file (pfx) 
		</td>
		<td>
Save the certificate as a pfx file and secure this certificate with a password. 
		</td>
	</tr>
	<tr>
		<td>
Save to certificate store 
		</td>
		<td>
Indicate the location and the store to save the certificate. 
		</td>
	</tr>
</table>


