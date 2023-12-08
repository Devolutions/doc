---
eleventyComputed:
  title: Configure SSO authentication with Okta
  description: Here are the steps to configure Okta with {{ en.DHUBB }} for SSO authentication.
  keywords:
  - SSO
  - Okta
---
Use Okta with {{ en.DHUBB }} for single sign-on (SSO) authentication by following the steps in this page. First see the requirements and supported features below.

## Requirements

To use SSO or automatic provisioning (SCIM) with Okta, you need an [Okta account](https://www.okta.com/) with the appropriate rights. You also need to complete the [Domain validation procedure](#domain-verification) to prove that you own the configured domain(s). Only users with emails whose domains have been verified will be allowed to log in via SSO or be provisioned via SCIM.

## Supported features

* Connect to the Hub via Okta SSO
* Just-in-time (JIT) provisioning of connected users via Okta SSO
* Synchronize your Okta to {{ en.DHUB }}
   * Create/update users from your Okta to {{ en.DHUB }} (create users, update user attributes, and deactivate users)
   * Create/update groups from your Okta to {{ en.DHUB }} (group push)

{% snippet icon.badgeCaution %} 
Users provisioned JIT by SSO or created by SCIM synchronization must be invited to the Hub in ***Administration – Users***, as described in the steps below.
{% endsnippet %}

## Configuration steps

Here are the steps to [validate your domain](#domain-verification), [configure single sign-on](#single-sign-on-sso-configuration), and [perform user provisioning](#provisioning-configuration).

### Domain verification

**In {{ en.DHUBB }}**  

1. Go to ***Administration – Authentication – Domain***, then click on ***Verify domain***.  
![Administration – Authentication – Domain – Verify domain](https://webdevolutions.azureedge.net/docs/en/hub/Hub2322.png)  

1. Fill in your ***Domain***, then click on ***Verify domain*** again.  
![Domain](https://webdevolutions.azureedge.net/docs/en/hub/Hub2323.png)  

   {% snippet icon.shieldInfo %} 
   For security purposes, only emails that end with your domain name will be allowed to log in to {{ en.DHUB }} using Okta authentication. For example, if your employees' emails are in the format "bob@windjammer.co", your domain is "windjammer.co".
   {% endsnippet %}

1. Create a [DNS TXT Record](https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider) using the provided ***Hostname*** and ***TXT value***. This allows us to verify the ownership of the domain supplied.  
![Hostname and TXT value](https://webdevolutions.azureedge.net/docs/en/hub/Hub2324.png)  

   We recommend that you verify that your configuration is adequate through DNS querying tools such as [MXToolBox](https://mxtoolbox.com/SuperTool.aspx) or [whatsmydns.net](https://www.whatsmydns.net/). The example below uses MXToolBox's TXT Lookup tool. The first part of the Domain Name must match the ***Hostname*** in {{ en.DHUB }} and the Record must match the ***TXT value*** in {{ en.DHUB }} as well.  
   {% snippet icon.badgeCaution %} 
   DNS TXT Records can take a while to propagate.
   {% endsnippet %}

   ![DNS TXT Record in MXToolBox](https://webdevolutions.azureedge.net/docs/en/hub/Hub2236.png)  

1. If everything matches up, click ***Done***.  
![Done](https://webdevolutions.azureedge.net/docs/en/hub/Hub2326.png)  

1. Wait for the verification status to change from ***Pending*** to ***Verified***.  
![Verified domain verification](https://webdevolutions.azureedge.net/docs/en/hub/Hub2329.png)

   {% snippet icon.badgeCaution %} 
   This validation lasts for 48 hours and does not restart automatically after that period. If you do not configure your TXT record within those 48 hours, your validation status will be ***Expired***. If that happens, you can click on ***Retry***.  

   If you experience any issues while trying to verify your domain, visit our [Domain validation troubleshooting](/kb/hub-business/troubleshooting-articles/domain-validation-troubleshooting/) guide.
   {% endsnippet %}  

### Single sign-on (SSO) configuration

1. Once the domain is verified, go to ***Administration – Authentication – Single Sign-On (SSO)***, then click on ***Okta Single Sign-On (SSO)***. You will be directed to the configuration page.  
![Administration – Authentication – Single Sign-On (SSO) – Okta Single Sign-On (SSO)](https://webdevolutions.azureedge.net/docs/en/hub/Hub2333.png)  

1. ***Name*** your SSO configuration. This name will only appear in your {{ en.DHUB }} SSO settings menu. The default name is "Okta".  
![Configuration name](https://webdevolutions.azureedge.net/docs/en/hub/Hub2334.png)

   {% snippet icon.badgeCaution %} 
   Do not close this setup page, as the following steps will show you where to find the information to enter in its fields. 
   {% endsnippet %}

**In Okta**  

3. Log in to your Okta account.
1. In ***Applications***, click ***Browse App Catalog***.  
![Applications – Browse App Catalog](https://webdevolutions.azureedge.net/docs/en/hub/Hub2348.png)

1. Search for ***{{ en.DHUB }}***, then click on the application in the search results.  
![Search for {{ en.DHUB }}](https://webdevolutions.azureedge.net/docs/en/hub/Hub2349.png)  
1. Click on ***Add Integration*** at the top.  
1. In the ***Sign On*** tab, copy the ***Client ID***.  
![Copy the client ID](https://webdevolutions.azureedge.net/docs/en/hub/Hub2350.png)  

**In {{ en.DHUBB }}**  

8. Back on the ***Configure Single Sign-On (SSO)*** page, paste the ***Client ID*** from the last step in the field of the same name.  
![Paste the client ID](https://webdevolutions.azureedge.net/docs/en/hub/Hub2337.png)  

**In Okta**  

9. Back in the ***Sign On*** tab, copy the ***Client secret***.  
![Copy the client secret](https://webdevolutions.azureedge.net/docs/en/hub/Hub2351.png)  

**In {{ en.DHUBB }}**  

10. Back on the ***Configure Single Sign-On (SSO)*** page, paste the ***Client secret*** from the last step in the ***Client secret Key*** field.  
![Paste the client secret](https://webdevolutions.azureedge.net/docs/en/hub/Hub2338.png)  
1. In ***Discovery URL***, enter the URL you use to access Okta, without the "-admin" part.  

   {% snippet icon.badgeCaution %} 
   Do not test the connection just yet, as you need to make sure your users are assigned to the application first.
   {% endsnippet %}  

   ![Discovery URL](https://webdevolutions.azureedge.net/docs/en/hub/Hub2339.png)  

**In Okta**  

12. In the ***Assignment*** tab at the top, make sure each user you want to use to test the configuration is assigned to the application. For more details, see Okta's own documentation on user management and application assignment.
![Assignment](https://webdevolutions.azureedge.net/docs/en/hub/Hub2262.png)  

**In {{ en.DHUBB }}**  

13. Test the configuration in {{ en.DHUB }}. A new window opens to connect you to {{ en.DHUB }} through Okta. You will get a success message when connected.  

   {% snippet icon.badgeCaution %}
   If the popup does not appear, your browser or browser extension may be blocking it. You will need to change your browser and/or extension settings. If this still does not work, deactivating/removing the extension or changing browser may also solve the problem.
   {% endsnippet %}

14. Click ***Save*** in the ***Summary*** of your Okta SSO configuration.
![Save the configuration](https://webdevolutions.azureedge.net/docs/en/hub/Hub2340.png)  

You should now see that the SSO configuration has a green checkmark icon next to it. This means that your SSO configuration through Okta is now enabled on your hub.  
![Active SSO configuration](https://webdevolutions.azureedge.net/docs/en/hub/Hub2341.png)

### Provisioning configuration

Synchronize your users and user groups from your providers to the hub.  

#### Settings

{% snippet icon.badgeInfo %}
This feature will be available soon!
{% endsnippet %}
