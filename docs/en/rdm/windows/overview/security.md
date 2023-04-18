---
title: Security
---
All passwords stored in the data sources are encrypted using a strong encryption algorithm, to the extent that if a user attempts to access the data directly in the database, it will be considered unreadable.  

If you choose to store passwords locally, {{ en.RDM }} will use the same mechanism used by mstsc.exe ( {{ en.RDM }} client), which stores the passwords in the Windows Credential Manager. It must be noted that the password will not be able to be viewed due to being encrypted by Windows. For obvious reasons, this choice also means that credentials stored in this fashion are not shared.  

## U.S. Federal Government Approved Encryption 

Our application integrates an Advanced Encryption Standard (AES) algorithm to protect sensitive data in the database.  

This cipher is proven to be very secure. AES/Rijndael became effective as a U.S. Federal government standard and is approved by the National Security Agency (NSA) for top secret information. 

## Tips 

{% snippet icon.shieldWarning %} 
Encryption of data while in transit is offered natively by our cloud services. Whenever you decide to use an on-premise solution, encryption of data in transit must be implemented by using the tools involving your chosen technologies. Most customers with security concerns choose [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) . Follow instructions specific to the chosen solution. 
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
The encryption key is built-in the application and is therefore the same for all copies of the software in circulation. It is imperative that you follow our recommended steps and apply a [Security Provider](Administration_SecurityProviders) to encrypt not only the passwords, but also &#32; ***all connection data*** stored in the data source. This will provide protection over your data at rest, using a key under your exclusive control. 
{% endsnippet %}
 
We recommend you follow these steps to ensure data security:  

* Use an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) and grant user access by assigning permissions. 
* Use encrypted communication with the database when available. 
* Use the [System Settings](Commands_DataSourceSettingsSecurity) to control settings impacting security. 
* Use the [Security Provider](Administration_SecurityProviders) to encrypt entries completely instead of just the password. 
* If using the offline mode, add your own password for an additional layer of protection to the local cache. Go to ***File - Options - Security*** . 
* Require a password to launch the application and even require two-factor authentication. Go to ***File - Options - Security*** . 
* If your data source supports it, choose not to save password in the data source, which will prompt for the credentials on the first connection. 
* Use our [Group policies](/kb/remote-desktop-manager/how-to-articles/group-policies/) to set up the system. 

