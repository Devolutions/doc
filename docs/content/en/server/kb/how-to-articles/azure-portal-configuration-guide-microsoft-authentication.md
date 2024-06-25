---
eleventyComputed:
  title: Azure Portal configuration guide for Microsoft authentication
  description: Configure Azure and {{ en.DVLS }} properly to use Microsoft authentication.
---
Configure Azure and {{ en.DVLS }} properly to use Microsoft authentication by following the instructions below.

## Requirements
* {{ en.DVLS }} scheduler installed and running
* A Microsoft Azure AD subscription
* An Azure AD web application for the {{ en.DVLS }} web application and the cache

## Creation of Azure AD applications and {{ en.DVLS }} Microsoft configuration

To simplify the configuration steps and to easily copy and paste all the required parameters, keep the {{ en.DVLS }} and Azure Portal web pages open side by side throughout the whole process.

#### In {{ en.DVLS }}
1. Log in to your {{ en.DVLS }} and navigate to ***Administration – Server Settings – Authentication***.
![]()
1. Under ***Authentication modes***, ensure ***Authenticate with Microsoft user*** is enabled.
![]()
1. Under ***Configuration***, click on ***Microsoft authentication***.
![]()

#### In the Azure Portal
4. Log in to your [Microsoft Azure Portal](https://portal.azure.com) using administrator credentials.
1. Once logged in, select ***Microsoft Entra ID*** in the Azure services section. If you do not see it, click on ***More services*** to make other services appear or search for it in the search bar.
![Microsoft Entra ID service](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2331.png)
1. In ***Properties***, copy the ***Tenant ID*** value.
![Copy the Tenant ID](https://cdnweb.devolutions.net/docs/INTERFACE2037.png)

#### In {{ en.DVLS }}
7. Paste this value in the ***Tenant ID*** field of the {{ en.DVLS }} ***Microsoft Authentication*** configuration page.
   {% snippet, "badgeInfo" %}
   The ***Use specific client ID for users and user groups cache*** option should only be check to support configurations when migrating from an older {{ en.DVLS }} version.
   {% endsnippet %}

   ![Paste the Tenant ID](https://cdnweb.devolutions.net/docs/DVLS2031_2024_2.png)

#### In the Azure Portal
8. In the ***Manage*** menu section, click ***App registrations*** then ***New registration***.
![App registrations – New registration](https://cdnweb.devolutions.net/docs/INTERFACE2038.png)
1. Enter a significant name for the application. This name will not be used outside of the Azure Portal.
1. Set which ***Supported account types*** are allowed to connect. Usually, selecting ***Accounts in this organizational directory only*** is more than enough for your Azure AD authentication.
1. Set the ***Redirect URI*** to ***Web*** and enter a valid URL, the URL to reach your {{ en.DVLS }} instance, with **/api/external-provider-response** at the end.
![Register an application](https://cdnweb.devolutions.net/docs/INTERFACE2040.png)
1. Click on ***Register***.
1. Click on ***Copy to clipboard*** next to ***Application (client) ID***.
![Copy the application ID](https://cdnweb.devolutions.net/docs/INTERFACE2041.png)

#### In {{ en.DVLS }}
14. Paste the ***Application (client) ID*** in the ***Client ID*** field.
![Paste the application ID](https://cdnweb.devolutions.net/docs/DVLS2032_2024_2.png)

#### In the Azure Portal
15. In the ***Authentication*** section, under ***Implicit grant and hybrid flows***, enable ***Access tokens*** and ***ID tokens***.
![Enable access tokens and ID tokens](https://cdnweb.devolutions.net/docs/INTERFACE2042.png)
1. Click ***Save***.
1. In the ***Certificates & secrets*** section, click ***New client secret***.
![Certificates & secrets – New client secret](https://cdnweb.devolutions.net/docs/INTERFACE2043.png)
1. Enter a description and set an expiry date.
![Add a client secret](https://cdnweb.devolutions.net/docs/INTERFACE2044.png)
1. Click ***Add***.
1. Copy the ***Value***. Be sure to save the ***Value*** in a safe place before switching to another Azure Portal page, as the copy button will no longer be available.
![Copy the client secret value](https://cdnweb.devolutions.net/docs/INTERFACE2045.png)

#### In {{ en.DVLS }}
21. Ensure the ***Use only the TokenID for authentication*** setting is disabled. This setting should only be activated if you have enabled ID tokens in Azure, but not access tokens, for retrocompatibility reasons.
1. Paste the ***Value*** in the ***Secret value*** field.
![Paste the client secret value](https://cdnweb.devolutions.net/docs/DVLS2034_2024_2.png)

#### In the Azure Portal
23. In the ***API permissions*** section, click on ***Add a permission***.
![API permissions – Add a permission](https://cdnweb.devolutions.net/docs/INTERFACE2046.png)
1. Select ***Microsoft Graph***.
![Microsoft Graph](https://cdnweb.devolutions.net/docs/INTERFACE2047.png)
1. Select ***Application permissions***.
![Application permissions](https://cdnweb.devolutions.net/docs/INTERFACE2048.png)
1. Select ***Group.Read.All*** under the ***Group*** section and ***User.Read.All*** under the ***User*** section.
![Group.Read.All permission](https://cdnweb.devolutions.net/docs/INTERFACE2049.png)
![User.Read.All permission](https://cdnweb.devolutions.net/docs/INTERFACE2050.png)
1. Click on ***Add permissions***.
1. Click the three dots next to the ***User.Read*** permission and remove it.
![Remove the User.Read permission](https://cdnweb.devolutions.net/docs/INTERFACE2051.png)
1. Confirm the removal by clicking ***Yes, remove*** since this permission is not required for the sync application.
1. If the ***Status*** of the ***User.Read.All*** and ***Group.Read.All*** permissions is set to ***Not granted***, an administrator must grant consent. If the account used to create the application is already an administrator in Azure, click on ***Grant admin consent for &lt;your organization&gt;***. 
![Grant admin consent for your organization](https://cdnweb.devolutions.net/docs/INTERFACE2052.png)

#### In {{ en.DVLS }}
31. Click ***Save***.

You should now be able to use the ***Microsoft*** button on the web interface.
{% snippet, "badgeCaution" %}
After activating the Microsoft authentication, it may take a while for the cache to load before being able to import users and user groups. If the issue persists, please consult [Unable to import Azure AD users or groups](/server/kb/troubleshooting-articles/unable-import-azure-ad-users-groups/) for troubleshooting.
{% endsnippet %}

![Microsoft authentication method](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4980.png)

Following the login process, you may get the following prompt to authorize the application to read the user accounts and groups. Enable the ***Consent on behalf of your organization*** option then click ***Accept***.
![Consent on behalf of your organization](https://cdnweb.devolutions.net/docs/INTERFACE2053.png)