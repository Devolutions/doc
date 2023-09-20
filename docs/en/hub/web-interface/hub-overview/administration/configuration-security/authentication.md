---
  title: Authentication
---
The ***Authentication*** section allows you to configure how your users will log into your hub.  

## General 

In the ***General*** section, you can enable login settings for your users.  
![Administration – Authentication – General](https://webdevolutions.azureedge.net/docs/en/hub/Hub2194.png)  

* ***Force prompt login*** enforces a login prompt for all users. If users have set up their 2-step verification in their {{ en.DA }}, this will only prompt 2-step verification. 
* ***Enforce 2-step verification on {{ en.DA }}*** enforces all users to set a multi-factor verification on their {{ en.DA }}. 

{% snippet icon.badgeCaution %} 
The ***Enforce 2-step verification on {{ en.DA }}*** setting does not apply to users that log in with Single Sign-on (SSO). 
{% endsnippet %}
 
It is also possible to set the ***Inactivity Logout Time*** to different values ranging from 5 minutes to 4 hours or to leave it ***Off***.  

## Single Sign-On (SSO) 

In the ***Single Sign-On (SSO)*** section, you can ***Configure Single Sign-On (SSO)*** for your {{ en.DHUB }} users. They will then be able to log in to your hub using their Azure AD credentials in addition to being able to do so with their {{ en.DA }} credentials.  
![Administration – Authentication – Single Sign-On (SSO)](https://webdevolutions.azureedge.net/docs/en/hub/Hub2196.png)  

{% snippet icon.badgeHelp %} 
When setting up SSO, you will have to fill in some fields in the ***Configure Single Sign-On (SSO)*** page. Consult [Get Started With SSO in {{ en.DHUBB }}](/hub/getting-started/get-started-sso-hub-business/) for more information. 
{% endsnippet %}
 
![Configure Single Sign-On (SSO)](https://webdevolutions.azureedge.net/docs/en/hub/Hub2197.png)  

After having configured and saved your SSO settings, it is still possible to edit them or even delete them.  

By default, SSO will be enabled once you complete the configuration. You can also ***Force SSO on all users***.  

{% snippet icon.badgeWarning %} 
If you enable ***Force SSO on all users***, users will not have access to {{ en.DHUBB }} in case of misconfiguration or downtime of your SSO provider. We strongly recommend that you inform all existing users in your {{ en.DHUBB }} of this new authentication method prior to activating it. 
{% endsnippet %}
 
![Configured Single Sign-On (SSO)](https://webdevolutions.azureedge.net/docs/en/hub/Hub2198.png)  

## Provisioning 

Synchronize and automate the provisioning and deprovisioning process of your hub users and groups by configuring your Identity Provider (Azure Active Directory) with your hub using the SCIM (System for Cross-domain Identity Management) specification under your idP (Identity Provider) configurations.  

{% snippet icon.badgeInfo %} 
[Single Sign-on](#single-sign-on-sso) must first be configured and enabled to set up the provisioning. 
{% endsnippet %}
 
![Administration – Authentication – Provisioning](https://webdevolutions.azureedge.net/docs/en/hub/Hub2195.png)  

After having enabled SSO, you can generate a ***SCIM Token***. You can always delete that token and regenerate a new one.  
![Generate SCIM Token](https://webdevolutions.azureedge.net/docs/en/hub/Hub2199.png)  

You will then get access to the ***Tenant URL*** in addition to the token to [configure the provisioning in Azure](/hub/getting-started/get-started-sso-hub-business/configure-sso-authentication-microsoft-azure/).  
![Tenant URL and SCIM Token](https://webdevolutions.azureedge.net/docs/en/hub/Hub2200.png)  

When everything has been configured, you can ***Enable the synchronization*** of your hub users and groups with the ones in Azure AD.  
![Enable the synchronization](https://webdevolutions.azureedge.net/docs/en/hub/Hub2201.png)  
