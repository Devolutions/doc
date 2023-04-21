---
title: Configure an SMTP Email With Azure
---
Since version 2022.3.10 of {{ en.DVLS }}, the modern authentication for Azure can now be used for the email configuration.

## Steps

Before proceeding with the configuration in {{ en.DVLS }}, you must perform the following in your Azure portal:
1. Create an app registration. You can also reuse the one used for Azure AD / Office 365 authentication.
1. Add the "Mail.Send" application permission.

You can now configure the SMTP email in {{ en.DVLS }}.
1. In {{ en.DVLS }}, go to ***Administration – Server Settings – Email***.
1. In the ***Authentication type*** drop-down list, select ***Azure***.
![Azure Authentication type](/img/en/kb/KB2204.png) 
3. In the ***Administrator Email*** field, enter the recipient email address that will receive the errors.
1. In the ***Client ID*** field, enter the ID of the application. In the Azure portal, this information is called ***Application (client) ID*** and can be found in the ***Overview*** of your app.
1. In the ***Tenant ID*** field, enter the ID of the tenant that can be found in the ***Overview*** of your application.
{% snippet icon.badgeInfo %}
Please note that emails can only be sent to accounts of the same tenant; they cannot be sent externally.
{% endsnippet %}  

6. In the ***User ID*** field, enter the ID of the user that is listed in the "From" section of the email.
1. In the ***Secret value*** field, enter the client secret. Either reuse the already existing Azure AD authentication secret or create a new one in your app registration by going to the ***Certificates & secret*** section and clicking on ***New client secret***.
1. Once the information has been provided, test your email settings with the ***Test Email*** button. 
1. If successful, ***Save*** your configuration using the icon at the top right.
