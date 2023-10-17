---
eleventyComputed:
  title: Security
---
All passwords stored in the application database are encrypted using a strong encryption algorithm, to the extent that if a user attempts to access the data directly in the database, it will be considered unreadable. 

## U.S. Federal Government Approved Encryption 

Our application integrates an Advanced Encryption Standard (AES) algorithm to protect your local files and your sensitive data in the database.  

This cipher is incredibly secure. AES/Rijndael became effective as a U.S. Federal Government standard and is approved by the National Security Agency (NSA) for top secret information. 

## Tips 

{% snippet icon.shieldWarning %} 
Encryption of data while in transit is offered natively by our cloud services. Whenever you decide to use an on-premises solution, implementing encryption of data in transit must be implemented by using the tools involving your chosen technologies. Most customers that have security concerns already choose one of the supported [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/), follow instructions specific to the chosen solution. 
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
The encryption is built-in the application and is therefore the same for all copies of the software in circulation. It is imperative that you follow our recommended steps and apply a [Security Provider](/rdm/mac/commands/administration/security-provider/) to encrypt not only the passwords, but also all of the connection data that is stored in the data source. This will give you protection over your data at rest, using a key under your exclusive control. 
{% endsnippet %}
 
We recommend you follow these steps to ensure security:  

* Use an [Advanced Data Source](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) and grant user access by assigning permissions. 
* Use encrypted communication with the database when available. 
* Use the [Data Source Settings](/rdm/mac/commands/administration/system-settings/) to control many settings impacting security. 
* Use the [Security Provider](/rdm/mac/commands/administration/security-provider/) to encrypt entries completely instead of just the password. 
* If using the offline mode, add your own password for an additional layer of protection to the local cache. Go to ***File - Preferences - Security***. 
* Require a password to launch the application and even require two-factor authentication. Go to ***File - Preferences - Security***. 
* If your data source supports it, choose not to save password in the data source, which will prompt for the credential on the first connection. 

