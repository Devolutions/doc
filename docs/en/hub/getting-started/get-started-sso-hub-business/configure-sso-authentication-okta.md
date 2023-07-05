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

## Configure Single Sign-On (SSO) 

**In {{ en.DHUBB }}**  

1. Go to ***Administration – Authentication – Single Sign-On (SSO)***, then click on ***Okta Single Sign-On (SSO)***. You will be directed to the configuration page.  
![Administration – Authentication – Single Sign-On (SSO) – Okta Single Sign-On (SSO)](https://webdevolutions.azureedge.net/docs/en/hub/Hub2232.png)  

1. Fill in your ***Domain***, then click ***Continue***.
![Domain](https://webdevolutions.azureedge.net/docs/en/hub/Hub2234.png)  

{% snippet icon.shieldInfo %} 
For security purposes, only emails that end with your domain name will be allowed to log in to {{ en.HUB }} using Okta authentication.  
For example, if your employees' emails are in the format "bob@windjammer.co", your domain is "windjammer.co".
{% endsnippet %}

3. Create a [DNS TXT Record](https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider) using the provided ***Hostname*** and ***TXT value***. This allows us to verify the ownership of the domain supplied.  
![Hostname and TXT value](https://webdevolutions.azureedge.net/docs/en/hub/Hub2235.png)  

We recommend that you verify that your configuration is adequate through DNS querying tools such as [MXToolBox](https://mxtoolbox.com/SuperTool.aspx) or [whatsmydns.net](https://www.whatsmydns.net/). The example below uses MXToolBox's SuperTool TXT Lookup. The first part of the Domain Name must match the ***Hostname*** in {{ en.HUB }} and the Record must match the ***TXT value*** in {{ en.HUB }} as well.  

{% snippet icon.badgeCaution %} 
DNS TXT Records can take a while to propagate.
{% endsnippet %}

![DNS TXT Record in MXToolBox](https://webdevolutions.azureedge.net/docs/en/hub/Hub2236.png)  

{% snippet icon.badgeCaution %} 
This validation lasts for 48 hours and does not restart after that period. If you do not configure your TXT record within those 48 hours, your validation status will be ***Expired*** and you will be stuck. If that happens, see [Expired domain verification in Okta SSO configuration](/kb/hub-business/troubleshooting-articles/expired-domain-verification-okta-sso-configuration).
{% endsnippet %}

4. If everything matches up, click ***Verify domain***.
1. ***Name*** your SSO configuration. This name will only appear in your {{ en.HUB }} SSO settings menu. The default name is "Okta".  
![Configuration name](https://webdevolutions.azureedge.net/docs/en/hub/Hub2248.png)

{% snippet icon.badgeCaution %} 
Do not close this setup page, as the following steps will show you where to find the information to enter in its fields. 
{% endsnippet %}

**In Okta**  

6. Log in to your Okta account.
1. In ***Applications***, click ***Create App Integration***.  
![Applications – Create App Integration](https://webdevolutions.azureedge.net/docs/en/hub/Hub2238.png)  
1. For the ***Sign-in method***, select ***OIDC - OpenID Connect***.
![Sign-in method – OIDC - OpenID Connect](https://webdevolutions.azureedge.net/docs/en/hub/Hub2239.png)  
1. For the ***Application type***, select ***Web Application***.
![Application type – Web Application](https://webdevolutions.azureedge.net/docs/en/hub/Hub2240.png)  
1. Click ***Next***. The ***New Web App Integration*** settings page will appear.
1. Under ***General Settings***, enter an ***App integration name***.
![App integration name](https://webdevolutions.azureedge.net/docs/en/hub/Hub2249.png)  

{% snippet icon.badgeNotice %} 
The app name does not need to match the one in {{ en.HUB }}. We recommend including either "Devolutions" or "{{ en.HUB }}" in the name. 
{% endsnippet %}

12. In ***Grant type***, check ***Refresh Token*** and ***Implicit (hybrid)***.
![Grant type](https://webdevolutions.azureedge.net/docs/en/hub/Hub2250.png)  

**In {{ en.DHUBB }}**  

13. Back on the ***Configure Single Sign-On (SSO)*** page, copy the ***Callback URL*** by clicking on the ***Copy to Clipboard*** icon next to it.  
![Copy the Callback URL](https://webdevolutions.azureedge.net/docs/en/hub/Hub2246.png)  

**In Okta**  

14. Back in Okta, paste the ***Callback URL*** in the ***Sign-in redirect URIs*** field.  
![Sign-in redirect URIs](https://webdevolutions.azureedge.net/docs/en/hub/Hub2251.png)  

**In {{ en.DHUBB }}**  

15. Back on the ***Configure Single Sign-On (SSO)*** page, copy the ***Logout redirect URL*** by clicking on the ***Copy to Clipboard*** icon next to it.  
![Copy the Logout redirect URL](https://webdevolutions.azureedge.net/docs/en/hub/Hub2247.png)  

**In Okta**  

16. Back in Okta, paste the ***Logout redirect URL*** in the ***Sign-out redirect URIs*** field.  
![Sign-out redirect URIs](https://webdevolutions.azureedge.net/docs/en/hub/Hub2252.png)  

1. Under ***Assignments***, select the ***Controlled access*** option that best suits your needs. This choice is left to your discretion.  

{% snippet icon.badgeCaution %} 
If you choose to ***Allow everyone in your organization to access***, do **not** check the ***Enable immediate access with Federation Broker Mode*** option, as doing so would prevent you from enabling SCIM provisioning in the future.  

If you choose to ***Limit access to selected groups*** or ***Skip group assignment for now***, you must manually assign to this app the users you wish to authorize to connect to your {{ en.HUBB}} via Okta.
{% endsnippet %}

![Assignments](https://webdevolutions.azureedge.net/docs/en/hub/Hub2253.png)  

18. Click ***Save***. You will be redirected to your new SSO application.
1. Copy the ***Client ID*** by clicking on the ***Copy to clipboard*** icon next to it.  
![Copy the Client ID](https://webdevolutions.azureedge.net/docs/en/hub/Hub2254.png)  

**In {{ en.DHUBB }}**  

20. Back on the ***Configure Single Sign-On (SSO)*** page, paste the ***Client ID*** from the last step in the field of the same name.  
![Client ID](https://webdevolutions.azureedge.net/docs/en/hub/Hub2255.png)  

**In Okta**  

21. Back in Okta, copy the ***Client secret*** by clicking on the ***Copy to clipboard*** icon next to it.  
![Copy the Client secret](https://webdevolutions.azureedge.net/docs/en/hub/Hub2256.png)  

{% snippet icon.badgeCaution %} 
Do not close this setup page, as the following steps will require you to make further changes in it. 
{% endsnippet %}

**In {{ en.DHUBB }}**  

22. Back on the ***Configure Single Sign-On (SSO)*** page, paste the ***Client secret*** from the last step in the ***Client secret Key*** field.  
![Client secret Key](https://webdevolutions.azureedge.net/docs/en/hub/Hub2257.png)  
1. In ***Discovery URL***, enter the URL you use to access Okta, without the "-admin" part.  

{% snippet icon.badgeCaution %} 
Do not test the connection just yet, as a few additional steps are required in Okta.
{% endsnippet %}  

![Discovery URL](https://webdevolutions.azureedge.net/docs/en/hub/Hub2259.png)  

**In Okta**  

24. Click ***Edit*** in the ***General Settings*** section.  
![Edit the General Settings](https://webdevolutions.azureedge.net/docs/en/hub/Hub2260.png)  
1. Set the ***Refresh token behavior*** to ***Rotate token after every use***.  
![Rotate token after every use](https://webdevolutions.azureedge.net/docs/en/hub/Hub2261.png)  
1. Click ***Save***.  
1. In the ***Assignment*** tab at the top, make sure each user you want to use to test the configuration is assigned to the application. For more details, see Okta's own documentation on user management and application assignment.
![Assignment](https://webdevolutions.azureedge.net/docs/en/hub/Hub2262.png)  

**In {{ en.DHUBB }}**  

28. Test the configuration in {{ en.HUB }}. A new window should open to connect you to {{ en.HUB }} through Okta. You will get a success message when connected.  
1. Click ***Save*** in the ***Summary*** of your Okta SSO configuration.
![Save the configuration](https://webdevolutions.azureedge.net/docs/en/hub/Hub2264.png)  

The hourglass icon means that the ***Domain Verification Status*** is ***Pending***. You will not be able to connect through Okta until the domain ownership is ***Verified***.  
![Pending domain verification](https://webdevolutions.azureedge.net/docs/en/hub/Hub2265.png)  

Domain verification might take up to 24 hours depending on your domain host. You can still save your SSO configuration and the domain verification will continue in the background. SSO will be activated upon successful domain verification.  

{% snippet icon.badgeHelp %}
If it takes longer than 24 hours, or if you need any help, contact our support team at [service@devolutions.net](mailto:service@devolutions.net).  
{% endsnippet %}

When the domain verification is done, the SSO configuration will get a green checkmark icon next to it. This means that your SSO configuration through Okta is now enabled on your {{ en.HUB }}.  
![Active SSO configuration](https://webdevolutions.azureedge.net/docs/en/hub/Hub2266.png)
