---
eleventyComputed:
  title: Configure SSO authentication with Okta
  description: Here are the steps to configure Okta with {{ en.DHUBB }} for SSO authentication.
  keywords:
  - SSO
  - Okta
---
Here are the steps to configure Okta with {{ en.DHUBB }} for SSO authentication.

{% snippet icon.badgeCaution %}
An [Okta account](https://www.okta.com/) with the appropriate rights is required.
{% endsnippet %}

## Domain verification

**In {{ en.DHUBB }}**

1. Go to ***Administration – Authentication – Domain***, then click on ***Add Domain***.
![Administration – Authentication – Domain – Add domain](https://cdnweb.devolutions.net/docs/HUBB2000_2024_1.png)
1. Fill in your domain, then click on the checkmark to start the verification process.
![Domain](https://cdnweb.devolutions.net/docs/HUBB2001_2024_1.png)
   {% snippet icon.shieldInfo %} 
   For security purposes, only emails that end with your domain name will be allowed to log in to {{ en.DHUB }} using Okta authentication. For example, if your employees' emails are in the format "bob@windjammer.co", your domain is "windjammer.co".
   {% endsnippet %}
1. To have multiple domains, click ***Add Domain*** once again, fill in your other domain, then click on the checkmark. Repeat this process for every domain you wish to add.
![Multiple domains](https://cdnweb.devolutions.net/docs/HUBB2002_2024_1.png)
1. Create a [DNS TXT Record](https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider) using the provided ***Host name*** and ***TXT value***. This allows us to verify the ownership of the domain(s) supplied.
![Host name and TXT value](https://cdnweb.devolutions.net/docs/HUBB2003_2024_1.png)

   We recommend that you verify that your configuration is adequate through DNS querying tools such as [MXToolBox](https://mxtoolbox.com/SuperTool.aspx) or [whatsmydns.net](https://www.whatsmydns.net/). The example below uses MXToolBox's TXT Lookup tool. The first part of the Domain Name must match the ***Host name*** in {{ en.DHUB }} and the Record must match the ***TXT value*** in {{ en.DHUB }} as well.
   {% snippet icon.badgeCaution %}
   DNS TXT Records can take a while to propagate.
   {% endsnippet %}

   ![DNS TXT Record in MXToolBox](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2236.png)
1. Await domain verification. Upon successful verification, a checkmark within a green circle will display next to the domain. You may proceed to configure Single Sign-On (SSO) during the verification process; however, user provisioning will become accessible only after the domain has been verified.
![Verified domain](https://cdnweb.devolutions.net/docs/HUBB2004_2024_1.png)

   {% snippet icon.badgeCaution %}
   This validation lasts for 48 hours and does not restart automatically after that period. If you do not configure your TXT record within those 48 hours, your validation status will be ***Expired***. If that happens, you can click on ***Retry***.

   If you experience any issues while trying to verify your domain, visit our [Domain validation troubleshooting](/kb/hub-business/troubleshooting-articles/domain-validation-troubleshooting/) guide.
   {% endsnippet %}


## Single Sign-On (SSO) configuration

1. Go to ***Administration – Authentication – Single Sign-On (SSO)***, then click on ***Okta Single Sign-On (SSO)***. You will be directed to the configuration page.
![Administration – Authentication – Single Sign-On (SSO) – Okta Single Sign-On (SSO)](https://cdnweb.devolutions.net/docs/HUBB2007_2024_1.png)

1. ***Name*** your SSO configuration. This name will only appear in your {{ en.DHUB }} SSO settings menu. The default name is "Okta".
![Configuration name](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2334.png)

   {% snippet icon.badgeCaution %}
   Do not close this setup page, as the following steps will show you where to find the information to enter in its fields.
   {% endsnippet %}

**In Okta**

3. Log in to your Okta account.
1. In ***Applications***, click ***Create App Integration***.
![Applications – Create App Integration](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2238.png)
1. For the ***Sign-in method***, select ***OIDC - OpenID Connect***.
![Sign-in method – OIDC - OpenID Connect](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2239.png)
1. For the ***Application type***, select ***Web Application***.
![Application type – Web Application](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2240.png)
1. Click ***Next***. The ***New Web App Integration*** settings page will appear.
1. Under ***General Settings***, enter an ***App integration name***.
   ![App integration name](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2249.png)

   {% snippet icon.badgeNotice %}
   The app name does not need to match the one in {{ en.DHUB }}. We recommend including either "Devolutions" or "Hub" in the name.
   {% endsnippet %}

1. In ***Grant type***, check ***Refresh Token*** and ***Implicit (hybrid)***.
![Grant type](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2250.png)

**In {{ en.DHUBB }}**

10. Back on the ***Configure Single Sign-On (SSO)*** page, copy the ***Callback URL*** by clicking on the ***Copy to Clipboard*** icon next to it.
![Copy the Callback URL](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2336.png)

**In Okta**

11. Back in Okta, paste the ***Callback URL*** in the ***Sign-in redirect URIs*** field.
![Sign-in redirect URIs](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2251.png)

**In {{ en.DHUBB }}**

12. Back on the ***Configure Single Sign-On (SSO)*** page, copy the ***Logout redirect URL*** by clicking on the ***Copy to Clipboard*** icon next to it.
![Copy the Logout redirect URL](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2335.png)

**In Okta**

13. Back in Okta, paste the ***Logout redirect URL*** in the ***Sign-out redirect URIs*** field.
![Sign-out redirect URIs](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2252.png)

1. Under ***Assignments***, select the ***Controlled access*** option that best suits your needs. This choice is left to your discretion.

   {% snippet icon.badgeCaution %}
   If you choose to ***Allow everyone in your organization to access***, do **not** check the ***Enable immediate access with Federation Broker Mode*** option, as doing so would prevent you from enabling SCIM provisioning in the future. If you choose to ***Limit access to selected groups*** or ***Skip group assignment for now***, you must manually assign to this app the users you wish to authorize to connect to your {{ en.DHUBB }} via Okta.
   {% endsnippet %}

   ![Assignments](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2253.png)

1. Click ***Save***. You will be redirected to your new SSO application.
1. Copy the ***Client ID*** by clicking on the ***Copy to clipboard*** icon next to it.
![Copy the Client ID](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2254.png)

**In {{ en.DHUBB }}**

17. Back on the ***Configure Single Sign-On (SSO)*** page, paste the ***Client ID*** from the last step in the field of the same name.
![Client ID](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2337.png)

**In Okta**

18. Back in Okta, copy the ***Client secret*** by clicking on the ***Copy to clipboard*** icon next to it.
![Copy the Client secret](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2256.png)

   {% snippet icon.badgeCaution %}
   Do not close this setup page, as the following steps will require you to make further changes in it.
   {% endsnippet %}

**In {{ en.DHUBB }}**

19. Back on the ***Configure Single Sign-On (SSO)*** page, paste the ***Client secret*** from the last step in the ***Client secret Key*** field.
![Client secret Key](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2338.png)
1. In ***Discovery URL***, enter the URL you use to access Okta, without the "-admin" part.

   {% snippet icon.badgeCaution %}
   Do not test the connection just yet, as a few additional steps are required in Okta.
   {% endsnippet %}

   ![Discovery URL](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2339.png)

**In Okta**

21. Click ***Edit*** in the ***General Settings*** section.
![Edit the General Settings](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2260.png)
1. Set the ***Refresh token behavior*** to ***Rotate token after every use***.
![Rotate token after every use](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2261.png)
1. Click ***Save***.
1. In the ***Assignment*** tab at the top, make sure each user you want to use to test the configuration is assigned to the application. For more details, see Okta's own documentation on user management and application assignment.
![Assignment](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2262.png)

**In {{ en.DHUBB }}**

25. Test the configuration in {{ en.DHUB }}. A new window should open to connect you to {{ en.DHUB }} through Okta. You will get a success message when connected.

   {% snippet icon.badgeCaution %}
   If the popup page does not appear, see [Devolutions login page does not open in the browser](/kb/general-knowledge-base/devolutions-login-page-does-not-open-browser/).
   {% endsnippet %}

26. Click ***Save*** in the ***Summary*** of your Okta SSO configuration.
![Save the configuration](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2340.png)

You should now see that the SSO configuration has a green checkmark icon next to it. This means that your SSO configuration through Okta is now enabled on your hub.
![Active SSO configuration](https://cdnweb.devolutions.net/docs/HUBB2008_2024_1.png)

## Provisioning configuration

Synchronize your users and user groups from your providers to the hub.

### Settings

{% snippet icon.badgeInfo %}
This feature will be available soon!
{% endsnippet %}
