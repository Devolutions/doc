---
title: Configure SSO authentication with Okta
description: Here are the steps to configure Okta with {{ en.DHUBB }} for SSO authentication and user provisioning.
keywords:
- SSO
- Okta
---
Here are the steps to configure Okta with {{ en.DHUBB }} for SSO authentication and user provisioning.

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

3. Using the ***Hostname*** and ***TXT value***, create a [DNS TXT Record](https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider). This allows us to verify the ownership of the domain supplied.  
![Hostname and TXT value](https://webdevolutions.azureedge.net/docs/en/hub/Hub2235.png)  

DNS TXT Records can take a while to propagate. You can verify that your configuration is adequate through DNS querying tools such as [MXToolBox](https://mxtoolbox.com/SuperTool.aspx) or [whatsmydns.net](https://www.whatsmydns.net/). The example below uses MXToolBox. The first part of the Domain Name must match the ***Hostname*** in {{ en.HUB }}. The Record must match the ***TXT value*** in {{ en.HUB }}.  
![DNS TXT Record in MXToolBox](https://webdevolutions.azureedge.net/docs/en/hub/Hub2236.png)  

4. If everything matches up, click ***Verify domain***.
1. ***Name*** your SSO configuration. This name will only appear in your {{ en.HUB }} SSO settings menu. The default name is "Okta".  
![Configuration name](https://webdevolutions.azureedge.net/docs/en/hub/Hub2248.png)

{% snippet icon.badgeCaution %} 
Do not close this setup page, as the following steps will show you where to find the information to enter in its fields. 
{% endsnippet %}

***In Okta***  

6. Log in to your Okta account.
1. In ***Applications***, click ***Create App Integration***.  
![Applications – Create App Integration](https://webdevolutions.azureedge.net/docs/en/hub/Hub2238.png)  
1. For the ***Sign-in method***, select ***OIDC - OpenID Connect***.
![Sign-in method – OIDC - OpenID Connect](https://webdevolutions.azureedge.net/docs/en/hub/Hub2239.png)  
1. For the ***Application type***, select ***Web Application***.
![Application type – Web Application](https://webdevolutions.azureedge.net/docs/en/hub/Hub2240.png)  
1. Click ***Next***. The ***New Web App Integration*** settings page will appear.
1. Under ***General Settings***, enter an ***App integration name***.
![App integration name](https://webdevolutions.azureedge.net/docs/en/hub/Hub2241.png)  

{% snippet icon.badgeNotice %} 
The app name does not need to match the one in {{ en.HUB }}. We recommend including either "Devolutions" or "{{ en.HUB }}" in the name. 
{% endsnippet %}

12. In ***Grant type***, check ***Refresh Token*** and ***Implicit (hybrid)***.
![Grant type](https://webdevolutions.azureedge.net/docs/en/hub/Hub2242.png)  

**In {{ en.DHUBB }}**  

13. Back on the ***Configure Single Sign-On (SSO)*** page, copy the ***Callback URL*** by clicking on the ***Copy to Clipboard*** icon next to it.  
![Copy the Callback URL](https://webdevolutions.azureedge.net/docs/en/hub/Hub2246.png)  

***In Okta***  

14. Back in Okta, paste the ***Callback URL*** in the ***Sign-in redirect URIs*** field.  
![Sign-in redirect URIs](https://webdevolutions.azureedge.net/docs/en/hub/Hub2243.png)  

**In {{ en.DHUBB }}**  

15. Back on the ***Configure Single Sign-On (SSO)*** page, copy the ***Logout redirect URL*** by clicking on the ***Copy to Clipboard*** icon next to it.  
![Copy the Logout redirect URL](https://webdevolutions.azureedge.net/docs/en/hub/Hub2247.png)  

***In Okta***  

16. Back in Okta, paste the ***Logout redirect URL*** in the ***Sign-out redirect URIs*** field.  
![Sign-out redirect URIs](https://webdevolutions.azureedge.net/docs/en/hub/Hub2244.png)  

1. Under ***Assignments***, select the ***Controlled access*** option that best suits your needs. This choice is left to your discretion.  
![Assignments](https://webdevolutions.azureedge.net/docs/en/hub/Hub2245.png)  

{% snippet icon.badgeCaution %} 
If you choose to ***Allow everyone in your organization to access***, do **not** check the ***Enable immediate access with Federation Broker Mode*** option, as doing so would prevent you from enabling SCIM provisioning in the future.  

If you choose to ***Limit access to selected groups*** or ***Skip group assignment for now***, you must manually assign to this app the users you wish to authorize to connect to your {{ en.HUBB}} via Okta.
{% endsnippet %}

18. Click ***Save***. You will be redirected to your new SSO application.
1. Copy the ***Client ID*** by clicking on the ***Copy to clipboard*** icon next to it.  
![Copy the Client ID](https://webdevolutions.azureedge.net/docs/en/hub/Hub.png)  

**In {{ en.DHUBB }}**  

20. Back on the ***Configure Single Sign-On (SSO)*** page, paste the ***Client ID*** from the last step in the field of the same name.  
![Client ID](https://webdevolutions.azureedge.net/docs/en/hub/Hub.png)  

***In Okta***  

21. Back in Okta, copy the ***Client secret*** by clicking on the ***Copy to clipboard*** icon next to it.  
![Copy the Client secret](https://webdevolutions.azureedge.net/docs/en/hub/Hub.png)  

**In {{ en.DHUBB }}**  

22. Back on the ***Configure Single Sign-On (SSO)*** page, paste the ***Client secret*** from the last step in the ***Client secret Key*** field.  
![Client secret Key](https://webdevolutions.azureedge.net/docs/en/hub/Hub.png)  
1. In the 

