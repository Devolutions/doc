---
eleventyComputed:
  title: Generate recovery kit
  description: This topic will cover how to create a Recovery Kit.
---
The ***Recovery Kit*** is very useful if your {{ en.DVLS }} has to be restored or with a new instance. It is possible to [***Generate***](#generate) a local backup or use Azure Key Vault to store the backup. If a backup is already created with Azure Key Vault you can [***Download***](#download) it.
{% snippet, "badgeHelp" %}
To learn more about creating and managing an Azure Key Vault account, please consult the [documentation](https://learn.microsoft.com/en-us/azure/key-vault/) on their official website.
{% endsnippet %}

## Generate
1. In the {{ en.DVLSCONSOLE }}, go to the ***Tools*** tab.
1. Click on ***Generate***.
![Generate](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0037.png)
1. Select the ***Location***;
    * ***Local***
        * ***Export path***: The destination folder where the ***Local*** backup will be saved
![Local](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0038.png)
    * ***Azure Key Vault***
        * ***URL***: The URL to your Azure Key Vault
        * ***Tenant ID***: The Tenant ID from your Azure AD
        * ***Client ID***: The ID of your Azure Key Vault
        * ***Client secret***: An application secret from your Azure AD
![Azure Key Vault](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0039.png)
4. Verify the ***Response File*** section.
   {% snippet, "badgeInfo" %}
   Checking the ***Include sensitive data*** option will include passwords for the database credentials only if it is an SQL database, otherwise no passwords can be saved.
   {% endsnippet %}
1. Enter the ***Password***, then enter the same one in the ***Confirm Password*** field.
   {% snippet, "badgeCaution" %}
   If this password is lost, it will be impossible to use the backup.
   {% endsnippet %}
1. Click ***OK*** to save this configuration and create the backup.
1. Click ***Close*** once the generation is done.
![Close button](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0040.png)

## Download 
1. In the {{ en.DVLSCONSOLE }}, go to the ***Tools*** tab.
1. Click on ***Download***.
![Download](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0041.png)
1. The ***Filename*** field serves to choose the destination folder where the ***Azure Key Vault*** backup will be saved as well as naming said backup file.
![Recovery Kit - Download](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0042.png)

Clicking the ellipsis button in the ***Filename*** field opens a Save As dialog.

1. Enter the correct information in the Azure Key Vault section;
    * ***URL***: The URL to your Azure Key Vault
    * ***Tenant ID***: The Tenant ID from your Azure AD
    * ***Client ID***: The ID of your Azure Key Vault
    * ***Client secret***: An application secret from your Azure AD
    * ***Secret name***: The name of the application secret
5. Click ***OK*** to download the specific backup zip file.

   {% snippet, "badgeInfo" %}
  A recovery kit created with Azure Key Vault can be retrieved directly from Azure to install a new instance. 
   {% endsnippet %}
