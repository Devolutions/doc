---
eleventyComputed:
  title: Authentication
  description: The Authentication section allows you to configure how your users will log into your hub.
---
The ***Authentication*** section allows you to configure how your users will log into your hub.  

## General 

In the ***General*** section, you can enable login settings for your users.  
![Administration – Authentication – General](https://webdevolutions.azureedge.net/docs/en/hub/Hub2342.png)  

* ***Force prompt login*** enforces a login prompt for all users. If users have set up their 2-step verification in their {{ en.DA }}, this will only prompt 2-step verification. 
* ***Enforce 2-step verification on {{ en.DA }}*** enforces all users to set a multi-factor verification on their {{ en.DA }}. 
* ***Enforce 2-step verification number matching*** enables 2FA number matching for all users of this hub. 

{% snippet icon.badgeCaution %} 
The ***Enforce 2-step verification on {{ en.DA }}*** and ***Enforce 2-step verification number matching*** settings do not apply to users that log in with Single Sign-on (SSO). 
{% endsnippet %}

It is also possible to set the ***Inactivity Logout Time*** to different values ranging from 5 minutes to 4 hours or to leave it ***Off***.  

## Domain

Verify your domain for single sign-on. It is mandatory as it allows us to verify the ownership of the domain supplied.

![Administration – Authentication – Domain](https://webdevolutions.azureedge.net/docs/en/hub/Hub2343.png)

In a separate window, log in to your domain host and find your DNS records. Create and save a new TXT record using the information provided below. Then, select ***Verify Domain***.

![Domain information](https://webdevolutions.azureedge.net/docs/en/hub/Hub2345.png)

You know that your domain has been successfully verified when its status changes from ***Pending*** to ***Verified***, as seen below.

![Verified domain](https://webdevolutions.azureedge.net/docs/en/hub/Hub2329.png)

{% snippet icon.badgeHelp %}
For the full domain verification and SSO setup instructions, visit [Get started with SSO in {{ en.DHUB }}](/hub/getting-started/get-started-sso-hub-business/).
{% endsnippet %}  

## Single Sign-On (SSO) 

Once your [domain](#domain) is verified, you have access to the ***Single Sign-On (SSO)*** section to configure SSO for your {{ en.DHUB }} users. Start by selecting the identity manager of your choice between Microsoft and Okta.
![Administration – Authentication – Single Sign-On (SSO)](https://webdevolutions.azureedge.net/docs/en/hub/Hub2344.png)  

You then have to enter some information as seen below.

![SSO information (example with Microsoft Azure)](https://webdevolutions.azureedge.net/docs/en/hub/Hub2346.png)  

By default, SSO will be enabled once you complete its configuration. You can also ***Force SSO on all users***. 

{% snippet icon.badgeWarning %} 
If you enable ***Force SSO on all users***, users will not have access to {{ en.DHUBB }} in case of misconfiguration or downtime of your SSO provider. We strongly recommend that you inform all existing users in your {{ en.DHUBB }} of this new authentication method prior to activating it. 
{% endsnippet %}

![Active SSO (example with Okta)](https://webdevolutions.azureedge.net/docs/en/hub/Hub2341.png)

After SSO is set up, users will then be able to log in to your hub using their Azure AD or Okta credentials in addition to being able to do so with their {{ en.DA }} credentials.

{% snippet icon.badgeHelp %}
For the full SSO setup instructions, visit [Get started with SSO in {{ en.DHUB }}](/hub/getting-started/get-started-sso-hub-business/).
{% endsnippet %}  

After having configured and saved your SSO settings, it is still possible to edit them or even delete them.  

## Provisioning 

{% snippet icon.badgeInfo %}
User and user group provisioning is currently only available with Microsoft Azure AD.
{% endsnippet %}  

Synchronize and automate the provisioning and deprovisioning process of your {{ en.DHUB }} users and groups by configuring your Identity Provider with your hub using the SCIM (System for Cross-domain Identity Management) specification under your idP (Identity Provider) configurations.  

{% snippet icon.badgeInfo %} 
[Single Sign-on](#single-sign-on-sso) must first be configured and enabled to set up the provisioning. 
{% endsnippet %}
 
![Administration – Authentication – Provisioning](https://webdevolutions.azureedge.net/docs/en/hub/Hub2332.png)  

{% snippet icon.badgeHelp %}
For the full provisioning setup instructions, visit [Get started with SSO in {{ en.DHUB }}](/hub/getting-started/get-started-sso-hub-business/).
{% endsnippet %}  
