---
title: Configure SSO Authentication with Okta
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

2. Fill in your ***Domain***, then click ***Continue***.
![Domain](https://webdevolutions.azureedge.net/docs/en/hub/Hub2234.png)  

{% snippet icon.shieldInfo %} 
For security purposes, only emails that end with your domain name will be allowed to log in to {{ en.HUB }} using Okta authentication.  
For example, if your employees' emails are in the format "bob@windjammer.co", your domain is "windjammer.co".
{% endsnippet %}