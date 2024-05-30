---
eleventyComputed:
  title: Security
---
All passwords stored in the data sources are encrypted using a strong encryption algorithm, to the extent that if a user attempts to access the data directly in the database, it will be considered unreadable.  

If you choose to store passwords locally, {{ en.RDM }} will use the same mechanism used by mstsc.exe ({{ en.RDM }} client), which stores the passwords in the Windows Credential Manager. It must be noted that the password will not be able to be viewed due to being encrypted by Windows. For obvious reasons, this choice also means that credentials stored in this fashion are not shared.  

## Encryption algorithm

Our application uses the XChaCha20Poly1305 encryption algorithm to protect sensitive data in the database. Consult [Devolutions cryptographic library](https://github.com/Devolutions/devolutions-crypto) for more details.

{% snippet, "shieldInfo" %}
The local RDM data is encrypted using Advanced Encryption Standard (AES) for computers running in FIPS mode.
{% endsnippet %}

## Tips 

{% snippet, "shieldWarning" %} 
Encryption of data while in transit is offered natively by our cloud services. Whenever you decide to use an on-premises solution, encryption of data in transit must be implemented by using the tools involving your chosen technologies. Most customers with security concerns choose [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). Follow instructions specific to the chosen solution. 
{% endsnippet %}
 
{% snippet, "shieldWarning" %} 
The encryption key is built-in the application and is therefore the same for all copies of the software in circulation. It is imperative that you follow our recommended steps and apply a [Security Provider](/rdm/commands/administration/security/security-providers/) to encrypt not only the passwords, but also ***all connection data*** stored in the data source. This will provide protection over your data at rest, using a key under your exclusive control. 
{% endsnippet %}
 
We recommend you follow these steps to ensure data security:  

* Use an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) and grant user access by assigning permissions. 
* Use encrypted communication with the database when available. 
* Use the [System Settings](/rdm/commands/administration/settings/system-settings/vault-management/security/) to control settings impacting security. 
* Use the [Security Provider](/rdm/commands/administration/security/security-providers/) to encrypt entries completely instead of just the password. 
* If using the offline mode, add your own password for an additional layer of protection to the local cache. Go to ***File – Settings – Security***. 
* Require a password to launch the application and even require two-factor authentication. Go to ***File – Settings – Security***. 
* If your data source supports it, choose not to save password in the data source, which will prompt for the credentials on the first connection. 
* Use our [Group policies](/rdm/kb/rdm-windows/how-to-articles/group-policies/) to set up the system. 

