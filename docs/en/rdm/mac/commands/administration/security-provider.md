---
eleventyComputed:
  title: Security provider
---
The security provider is available from ***Administration – Security Provider***. The security provider is responsible for encrypting the data in the database.

{% snippet, "badgeInfo" %}
This features requires an [Advanced Data Source](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "badgeInfo" %}
Regardless of the security provider you have selected, the passwords that are stored in the data store are ALWAYS encrypted using AES 256 bit encryption.
{% endsnippet %}

{% snippet, "shieldNotice" %}
By using a Security Provider, you ensure that nobody can read your entry configuration data, even when people have a direct access to your database(s) or a backup. You should always use this when you use a data source that is not local.
{% endsnippet %}

## Settings
{% snippet, "badgeInfo" %}
Please note that changing a security provider on a data source with a great number of entries is a lengthy operation.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Applying a new security provider does process the whole database, therefore we advise you to create a backup prior to this operation.
{% endsnippet %}

1. Click on Change security settings to change the security provider.
![Security Provider - Change security settings](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10378.png)
1. Select your new security type from the drop down menu.
![Security Provider - Security type](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10379.png)

| OPTION            | DESCRIPTION                                                      |
|-------------------|------------------------------------------------------------------|
| None              | The session data will not be encrypted except for the passwords. |
| Basic             | All of the data is encrypted with a key stored in {{ en.RDM }} and it is impossible for an external system to access it. |
| Default           | This is the default security mode. The XML is not encrypted by default. Please note that the passwords are always encrypted. |
| Shared passphrase | See below for more details.                                      |
| Certificate       | See below for more details.                                      |

## Shared Passphrase
{% snippet, "badgeWarning" %}
If the passphrase is lost, there is nothing that can be done to recover the data.  Always copy it to a secure location when putting it in place.
{% endsnippet %}

All of the entries configuration data is encrypted with a mix of key stored in {{ en.RDMMAC }} and the passphrase you have entered. The passphrase is required only when configuring the data source.

## Certificate
If you have chosen Certificate as your Security Provider,  it will encrypt the entry configuration data with a mix of key stored in {{ en.RDM }} and the private key contained in the certificate.
![Certificate Security Provider](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10380.png)

| OPTION     | DESCRIPTION                                                           |
|------------|-----------------------------------------------------------------------|
| Thumbprint | Select a certificate that already exist to use it for the encryption. |
