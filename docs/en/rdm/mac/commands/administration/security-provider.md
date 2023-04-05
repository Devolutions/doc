---
title: Security Provider
---
The security provider is available from Administration - Security Provider . The security provider is responsible for encrypting the data in the database. 

{% snippet icon.badgeInfo %} 
This features requires an [Advanced Data Source](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Regardless of the security provider you&apos;ve selected, the passwords that are stored in the data store are ALWAYS encrypted using AES 256 bit encryption. 
{% endsnippet %}
 
{% snippet icon.shieldNotice %} 
By using a Security Provider, you ensure that nobody can read your entry configuration data, even when people have a direct access to your database(s) or a backup. You should always use this when you use a data source that is not local. 
{% endsnippet %}
 
## Settings 

{% snippet icon.badgeInfo %} 
Please note that changing a security provider on a data source with a great number of entries is a lengthy operation. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Applying a new security provider does process the whole database, therefore we advise you to create a backup prior to this operation. 
{% endsnippet %}
 
1. Click on Change security settings to change the security provider.  
![Security Provider - Change security settings](/img/en/rdm/mac/clip10378.png) 
1. Select your new security type from the drop down menu.  
![Security Provider - Security type](/img/en/rdm/mac/clip10379.png) 

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
None 
		</td>
		<td>
The session data will not be encrypted except for the passwords. 
		</td>
	</tr>
	<tr>
		<td>
Basic 
		</td>
		<td>
All of the data is encrypted with a key stored in Remote Desktop Manager and it&apos;s impossible for an external system to access it. 
		</td>
	</tr>
	<tr>
		<td>
Default 
		</td>
		<td>
This is the legacy security provider. The data is encrypted if the entry configuration is set accordingly in the advanced settings of the entries. 
		</td>
	</tr>
	<tr>
		<td>
Shared passphrase 
		</td>
		<td>
See below for more details. 
		</td>
	</tr>
	<tr>
		<td>
Certificate 
		</td>
		<td>
See below for more details. 
		</td>
	</tr>
</table>

## Shared Passphrase 

{% snippet icon.badgeWarning %} 
If the passphrase is lost, there is nothing that can be done to recover the data. &#160;Always copy it to a secure location when putting it in place. 
{% endsnippet %}
 
All of the entries configuration data is encrypted with a mix of key stored in {{ en.RDM }} for Mac and the passphrase you&apos;ve entered. The passphrase is required only when configuring the data source. 

## Certificate 

If you have chosen Certificate as your Security Provider, &#160;it will encrypt the entry configuration data with a mix of key stored in Remote Desktop Manager and the private key contained in the certificate.  
![Certificate Security Provider](/img/en/rdm/mac/clip10380.png) 

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
Thumbprint 
		</td>
		<td>
Select a certificate that already exist to use it for the encryption. 
		</td>
	</tr>
</table>


