---
eleventyComputed:
  title: Azure Portal configuration guide Microsoft Authentication
---
The following topic contains the procedure to configure Azure and {{ en.DVLS }} properly to use Microsoft authentication.
## Requirements
* {{ en.DVLS }} Scheduler installed and running.
* A Microsoft Azure AD subscription.
* An Azure AD Web Application for the {{ en.DVLS }} web application and the cache.
## Creation of Azure AD applications and {{ en.DVLS }} Microsoft configuration
1. Log in to your [Microsoft Azure Portal](https://portal.azure.com) using administrator credentials.
1. To simplify the configuration steps and to easily copy and paste all the required parameters, please have the Azure Portal and the {{ en.DVLS }} web UI opened side by side in ***Administration – Server Settings – Authentication – Microsoft Authentication***.
1. Once logged in, go to ***Azure Active Directory – Properties***.
1. Click on the ***Copy to clipboard*** button beside the ***Tenant ID*** property.
![Copy the Tenant ID](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4401.png)
1. Paste this value in the ***Tenant ID*** field of the {{ en.DVLS }} ***Microsoft Authentication*** configuration page.
   {% snippet, "badgeInfo" %}
   The ***Use specific client ID for users and user groups cache*** option should only be check to support configurations when migrating from an older {{ en.DVLS }} version.
   {% endsnippet %}

   ![Paste the Tenant ID](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4982.png)

1. Click ***App registrations*** in the ***Manage*** menu section.
![App registrations](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4403.png)
1. Create the application using the ***New registration*** button.
![New registration](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4404.png)
1. Enter a significant name for the application. This name will not be used outside of the Azure Portal.

1. Set which ***Supported account types*** are allowed to connect. Usually, selecting ***Accounts in this organizational directory only*** is more than enough for your Azure AD authentication.

1. Set the ***Redirect URI*** to ***Web*** and enter a valid URL, the URL to reach your {{ en.DVLS }} instance, with **/api/external-provider-response** at the end.
![Redirect URI](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5010.png)
1. Click on the ***Register*** button.

1. Click on the ***Copy to clipboard*** button next to the ***Application (client) ID***.
![Copy the Application ID](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4407.png)
1. Paste the ***Application (client) ID*** in the ***Client ID*** field of the web application section in the {{ en.DVLS }} ***Microsoft Authentication*** configuration page.
![Paste the Application ID](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4984.png)
1. Select the ***Authentication*** tab of the Azure Web application and enable the ***ID tokens*** under the ***Implicit grant and hybrid flows*** section.
![Enable ID tokens](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4418.png)
1. Click ***Save***.

1. Select the ***Certificates & secrets*** tab and click ***New client secret***.
![Certificates & secrets – New client secret](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5011.png)
1. Enter a description and set an expiry date. Then, click on the ***Add*** button.
![Client secret setup](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4423.png)
1. Click on the ***Copy to clipboard*** button of the ***Value***. Be sure to save the ***Value*** in a safe place as once you will switch to another page of the Azure portal, the copy button will no longer be available.
![Copy the client secret value](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4424.png)
1. Paste the ***Value*** in the ***Secret key*** field of the web application section in the {{ en.DVLS }} ***Microsoft Authentication*** configuration page.
![Paste the client secret value](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4985.png)
1. Select the ***API permissions*** tab of the Azure web application and click on ***Add a permission***.
![API permissions – Add a permission](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4427.png)
1. Select ***Microsoft Graph***.
![Microsoft Graph](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4428.png)
1. Select ***Application permissions***.
![Application permissions](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4429.png)
1. Select ***Group.Read.All*** under the ***Group*** section and ***User.Read.All*** under the ***User*** section.
![Group.Read.All permission](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4986.png)
![User.Read.All permission](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4987.png)
1. Click on ***Add permissions***.
1. Select the ***User.Read*** permission and delete it using the ***Remove permission*** button.
![Remove the User.Read permission](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4432.png)
1. Confirm the removal by clicking ***Yes, remove*** since this permission is not required for the sync application.

1. If the ***Status*** of the ***User.Read.All*** and ***Group.Read.All*** permissions is ***Not granted***, an administrator must grant consent.
   {% snippet, "shieldCaution" %}
   It may be possible that the newly added permissions require an Azure administrator to consent. If the account used to create the application is already an administrator in Azure, click on ***Grant admin consent for &lt;your organization&gt;***.
   {% endsnippet %}

   ![Grant admin consent for your organization](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8010.png)
1. Your configuration page should look similar to the screenshot below. Click ***Save***.
![Save your configuration](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4981.png)

You should now be able to use the ***Microsoft*** button on the web interface.
{% snippet, "badgeCaution" %}
After activating the Microsoft authentication, it may take a while for the cache to load before being able to import users and user groups. If the issue persists, please consult [Unable to import Azure AD users or groups](/kb/devolutions-server/troubleshooting-articles/unable-import-azure-ad-users-groups/) for troubleshooting.
{% endsnippet %}

![Microsoft authentication method](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4980.png)

Following the login process, you may get this prompt to authorize the application to read the user accounts and groups. You need to check the ***Consent on behalf of your organization*** option and then click ***Accept***.
![Consent on behalf of your organization](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8108.png)
