---
eleventyComputed:
  title: Invalid client ID or secret with Microsoft SSO
  description: When trying to sign in to your {{ en.DHUBB }} using Microsoft Single Sign-On (SSO), you may encounter the following error message "The client ID or secret supplied by your organization is invalid, please contact an administrator of your organization."
---
When trying to sign in to your {{ en.DHUBB }} using Microsoft Single Sign-On (SSO), you may encounter the following error message: "The client ID or secret supplied by your organization is invalid, please contact an administrator of your organization."

![Invalid client ID or secret error message](https://cdnweb.devolutions.net/docs/en/kb/KB2319.png)

## Solution

This most likely means that your client secret is expired in the Microsoft Azure Portal. The solution is to create a new secret and change it in your {{ en.DHUBB }} SSO configuration.

### Verify the client secret expiration date

1. In a new web browser page, open your [Microsoft Azure Portal](https://azure.microsoft.com/) and sign in to your account.
1. Select ***Microsoft Entra ID*** (formerly [Azure Active Directory](https://learn.microsoft.com/en-us/entra/fundamentals/new-name)) in the ***Azure services*** section. If you do not see it, click on ***More services*** to make other services appear.
![Microsoft Entra ID service](https://cdnweb.devolutions.net/docs/en/hub/Hub2331.png)
1. Click on ***App registrations*** in the left menu.
![App registrations](https://cdnweb.devolutions.net/docs/en/kb/KB2321.png)
1. In the list, click on the application that you configured single sign-on with in your hub to go to its overview.
1. Click on ***Certificates & secrets*** in the left menu.
1. Locate the secret that is currently used in your {{ en.DHUBB }} SSO configuration and see if it is expired in the ***Expires*** column.
![Enterprise applications](https://cdnweb.devolutions.net/docs/en/kb/KB2320.png)
If it is indeed expired, this is most likely the cause of your connection issue. You need to create a new client secret and change it in your {{ en.DHUBB }} SSO configuration by following the next steps.

{% snippet icon.badgeInfo %}
If the client secret is not expired, the issue may come from your client ID. Verify that it matches the one in your SSO configuration then try logging in again.
{% endsnippet %}

### Create a new client secret

1. Click on ***New client secret***.
![New client secret](https://cdnweb.devolutions.net/docs/en/hub/Hub2151.png)
1. In the ***Add a client secret*** window, enter a ***Description*** (for example, the name of your Enterprise app) and select an expiration date for this client secret, as per your best internal security practices.
![Add a client secret](https://cdnweb.devolutions.net/docs/en/hub/Hub2152.png)
1. Click ***Add***.
1. Copy the ***Value*** of this new client secret by clicking on the ***Copy to clipboard*** icon next to it.
![Copy the client secret value](https://cdnweb.devolutions.net/docs/en/hub/Hub2153.png)

   {% snippet icon.badgeInfo %}
   The expired client secret can be deleted without any issue since it is expired and cannot be used anymore.
   {% endsnippet %}

1. Log in to {{ en.DHUBB }} using your {{ en.DA }}.
   {% snippet icon.badgeHelp %}
   If you have enabled the ***Force SSO on all users*** option in your configuration, you will not be able to log in using your {{ en.DA }}. In this case, [contact our support team](mailto:service@devolutions.net) to request the disabling of this option.
   {% endsnippet %}
1. Once logged in, go to ***Administration – Authentication – Single Sign-On (SSO)***, then select your Microsoft SSO configuration.
1. Replace the currently expired ***Client secret key*** with the newly created one you copied earlier.
![Replace the client secret key](https://cdnweb.devolutions.net/docs/en/kb/KB2323.png)
1. Click ***Test Configuration***.
![Test Configuration](https://cdnweb.devolutions.net/docs/en/hub/Hub2224.png)
1. If the connection is successful, your account will connect with Entra ID (formerly Azure AD) and you will see a summary of your configuration.
1. In the ***Summary*** of your configuration, click ***Save***.
![Save your configuration](https://cdnweb.devolutions.net/docs/en/hub/Hub2225.png)

You and your users should now be able to sign in to the hub using Microsoft SSO.

{% snippet icon.badgeHelp %}
If you still encounter issues, [contact our support team](mailto:service@devolutions.net).
{% endsnippet %}
