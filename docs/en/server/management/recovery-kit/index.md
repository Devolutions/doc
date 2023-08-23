---
title: Generate Recovery Kit
description: This topic will cover how to create a Recovery Kit.
---
The ***Recovery Kit*** is very useful if your {{ en.DVLS }} has to be restored or with a new instance. It is possible to [***Generate***](#generate) a local backup or use Azure Key Vault to store the backup. If a backup is already created with Azure Key Vault you can [***Download***](#download) it.
{% snippet icon.badgeHelp %}
To learn more about creating and managing an Azure Key Vault account, please consult the [documentation](https://learn.microsoft.com/en-us/azure/key-vault/) on their official website.
{% endsnippet %}  

## Generate
1. In the {{ en.DVLSCONSOLE }}, go to the ***Tools*** tab.
1. Click on ***Generate***.  
![Generate](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0037.png)
1. Select the ***Location***;
  * ***Local***
    * ***Export path***: The destination folder where the ***Local*** backup will be saved  
![Local](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0038.png)
  * ***Azure Key Vault***
    * ***URL***: The URL to your Azure Key Vault
    * ***Tenant ID***: The Tenant ID from your Azure AD
    * ***Client ID***: The ID of your Azure Key Vault
    * ***Client secret***: An application secret from your Azure AD  
![Azure Key Vault](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0039.png)
   {% snippet icon.badgeInfo %}
   Checking the ***Include sensitive data*** option will include passwords for the database credentials only if it is an SQL database, otherwise no passwords can be saved.
   {% endsnippet %}  
1. Enter the ***Password*** and the enter the same one in the ***Confirm Password*** field.  
   {% snippet icon.badgeCaution %}
   If this password is lost, it will be impossible to use the backup for restoration purposes.
   {% endsnippet %}  
1. Click ***OK*** to save this configuration and create the backup.
1. Click ***Close*** once the generation is done.  
![Close button](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0040.png)

## Download
1. In the {{ en.DVLSCONSOLE }}, go to the ***Tools*** tab.
1. Click on ***Download***.  
![Download](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0041.png)
1. The ***Filename*** field serves to choose the destination folder where the ***Azure Key Vault*** backup will be saved as well as naming said backup file.  
![Recovery Kit - Download](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0042.png)
   {% snippet icon.badgeInfo %}
   Clicking the ellipsis button opens a Save As dialog.
   {% endsnippet %}  
1. Enter the correct information in the Azure Key Vault section;
  * ***URL***: The URL to your Azure Key Vault
  * ***Tenant ID***: The Tenant ID from your Azure AD
  * ***Client ID***: The ID of your Azure Key Vault
  * ***Client secret***: An application secret from your Azure AD
  * ***Secret name***: The name of the application secret
1. Click ***OK*** to download the specific backup zip file.
