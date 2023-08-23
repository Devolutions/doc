---
title: Keeper Credential Entry Settings
---
Keeper is one of the multiple external password managers integrated in {{ en.RDM }}

### Settings

***Login type*** determines the method that {{ en.RDM }} will use to connect to Keeper.  

* ***Vault login*** uses the ***Email*** address and a ***Master Password*** to log in.
* ***Enterprise SSO*** uses the ***Email*** address to log in.
* ***Enterprise SSO (Domain)*** uses the ***Enterprise domain*** to log in.

The ***Use “My Account Settings”*** option, available for the ***Vault login*** and ***Enterprise SSO*** login types, allows the entry to refer to the credentials saved under ***File - My Account Settings*** rather than entering them manually in the Keeper entry.  

The ***Region*** allows you to choose from where your Keeper server is located.  

The ***Always ask password*** option will prompt you to enter your Keeper password each time the entry is used instead of saving it in the entry.  

The ***Credentials*** field is used to specify which credential will be retrieved from Keeper.  

The option ***Always prompt with list*** allows users to select the credential each time the entry is used, rather than determining it.  

![!!KB4960.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4960.png)

### Procedure

1. Select your desired ***Login type*** (Vault Login, Enterprise SSO or Enterprise SSO (Domain)).
1. Enter the required information, based on the ***Login type*** selected.
1. Use the ***Credentials*** field to specify which credential should be retrieved from Keeper or use the ***Always prompt with list*** option to select which credential to retrieve each time the Keeper entry is used.
1. Click ***OK***.
