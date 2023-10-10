---
eleventyComputed:
  title: Create an Azure AD PAM provider
  description: The following guide provides steps to create an Azure AD user PAM provider for {{ en.DHUBB }}.
---
The following guide provides steps to create an Azure AD user PAM provider for {{ en.DHUBB }}.

## Create an Azure AD PAM provider

**In the Azure Portal**

1. In a browser page, open the [Microsoft Azure Portal](https://azure.microsoft.com) and sign in to your account.
1. Select ***Microsoft Entra ID*** ([formerly Azure Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/new-name)) in the ***Azure Services*** section. If you do not see it, click on ***More services*** to make other services appear.
![Microsoft Entra ID service](https://webdevolutions.azureedge.net/docs/en/kb/KB2291.png)
1. In ***App registrations***, click on ***New registration***.
![App registrations – New registration](https://webdevolutions.azureedge.net/docs/en/kb/KB2292.png)
1. Set the ***Name*** of the new registration.
![Name](https://webdevolutions.azureedge.net/docs/en/kb/KB2315.png)
1. Click ***Register*** at the bottom when done. You will be presented with an overview of your application. 
1. Locate the ***Application (client) ID*** and ***Directory (tenant) ID***. You will need this information in later steps, so do not close this window.
![Application (client) ID and Directory (tenant) ID](https://webdevolutions.azureedge.net/docs/en/kb/KB2294.png)

**In {{ en.DHUBB }}**

7. Connect to your hub.
1. Go to ***Administration – Privileged Access – Providers***.
1. Click on ***Add Provider (+)***.
![Administration – Privileged Access – Providers – Add Provider](https://webdevolutions.azureedge.net/docs/en/kb/KB2295.png)
1. Enter a ***Name*** (mandatory) for your provider. Optionally, enter a ***Description*** and select a [***Password template***](/hub/web-interface/hub-overview/administration/management/password-templates/).
![Name, Description, and Password template](https://webdevolutions.azureedge.net/docs/en/kb/KB2296.png)
1. Enter the ***Tenant ID*** and ***Client ID*** that you previously located in the ***Overview*** page of the enterprise application in your Azure Portal.
![Tenant ID and Client ID](https://webdevolutions.azureedge.net/docs/en/kb/KB2297.png)

   {% snippet icon.badgeInfo %}
   Do not close the provider settings window as you still need to enter the ***Secret key***. Follow the steps below to create a client secret.
   {% endsnippet %}  

## Create a client secret

**In the Azure Portal**

1. In ***Certificates & secrets***, select ***Client secrets***, then click on ***New client secret***.
![New client secret](https://webdevolutions.azureedge.net/docs/en/kb/KB2298.png)
1. Enter a ***Description*** and set an expiry date (or use the recommended one).
![Add a client secret](https://webdevolutions.azureedge.net/docs/en/kb/KB2299.png)
1. Click ***Add***.
1. Copy the ***Value*** of your new client secret (not the ***Secret ID***).
![Client secret value](https://webdevolutions.azureedge.net/docs/en/kb/KB2300.png)

**In {{ en.DHUBB }}**

5. Paste the client secret ***Value*** in the ***Secret key*** field.
![Secret key](https://webdevolutions.azureedge.net/docs/en/kb/KB2301.png)
1. Click ***Add***.  

Your new provider has now been added to the list of ***Providers***.

## Set API permissions

**In the Azure Portal**

1. In your recently created application page, go to ***API permissions*** and click on ***Add a permission***.
![Add a permission](https://webdevolutions.azureedge.net/docs/en/kb/KB2314.png)
1. Select ***Microsoft Graph***.
![Microsoft Graph](https://webdevolutions.azureedge.net/docs/en/kb/KB2303.png)
1. Select ***Application permissions***.
![Application permissions](https://webdevolutions.azureedge.net/docs/en/kb/KB2304.png)
1. Locate and check the boxes next to the following Microsoft Graph API permissions: 
   * ***Group.Read.All***
   * ***RoleManagement.Read.Directory***
   * ***User.Read.All***  

   ![Select permissions](https://webdevolutions.azureedge.net/docs/en/kb/KB2305.png)
1. Click on ***Add permissions*** at the bottom.
1. Click on ***Grant admin consent for [your organization]***, then confirm by clicking ***Yes***.
![Grant admin consent](https://webdevolutions.azureedge.net/docs/en/kb/KB2306.png)  

   The ***Status*** next to each permission should now be updated.

## Enable the application to rotate passwords

**In the Azure Portal**

1. Go back to Microsoft Entra ID, then go to ***Roles and administrators*** in the left menu.

   {% snippet icon.badgeCaution %}
   Make sure to go back to the main overview of Microsoft Entra ID. If you go to ***Roles and administrators*** while in the overview of your app registration or enterprise application, for example, you will only have access to administrative roles that are available for that section.
   {% endsnippet %}

1. In ***All roles***, search for the ***Helpdesk Administrator*** role. If the accounts managed by the PAM module are members of any administrator roles or groups, then also search for the ***Privileged Authentication Administrator*** role and complete the next steps for both roles.
1. Click on the name of the role (do not check the box).
![Roles and administrators](https://webdevolutions.azureedge.net/docs/en/kb/KB2307.png)
1. Click on ***Add assignments***.
![Add assignments](https://webdevolutions.azureedge.net/docs/en/kb/KB2308.png)
1. Click on ***No member selected***.
![No member selected](https://webdevolutions.azureedge.net/docs/en/kb/KB2309.png)
1. Search through the list to find the application.
1. Check the box next to the application, then click ***Select***.
![Select the application](https://webdevolutions.azureedge.net/docs/en/kb/KB2310.png)
1. Click ***Next***.
![Next](https://webdevolutions.azureedge.net/docs/en/kb/KB2311.png)
1. Enter a justification for the assignment, then click ***Assign***.
   ![Enter justification and Assign](https://webdevolutions.azureedge.net/docs/en/kb/KB2312.png)
   Your application has now been added to the list. 

   {% snippet icon.badgeInfo %}
   If the accounts managed by the PAM module are members of any administrator roles or groups, remember to complete the above steps with the ***Privileged Authentication Administrator*** role as well.
   {% endsnippet %}
