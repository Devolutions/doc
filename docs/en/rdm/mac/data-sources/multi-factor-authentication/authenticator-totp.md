---
title: Authenticator (TOTP)
---
{{ en.RDM }} for Mac allows you to use an Authenticator (TOTP) such as [Devolutions Workspace](https://devolutions.net/workspace/) or Google Authenticator to provide an additional security layer when opening a data source. 

## Settings 

{% snippet icon.badgeInfo %} 
Before you start the configuration, make sure you have installed the [Devolutions Workspace](https://devolutions.net/workspace/) or Google Authenticator applications on a supported device. 
{% endsnippet %}
 
1. If not already done, follow these [Multi-Factor Authentication Configuration steps](/rdm/mac/data-sources/multi-factor-authentication/) . 
1. After having selected the ***Authenticator (TOTP)*** MFA type, click ***Apply*** .  
![Apply Multi-Factor Authentication](/img/en/rdm/mac/clip10503.png) 
1. Scan the QR code that appears in the ***Authentication Setup*** window with your device application. 
1. Enter the ***Validation code*** provided by the ***Authenticator (TOTP)*** .  
![Authenticator Setup](/img/en/rdm/mac/clip10067.png) 
1. Click ***Validate*** . 
1. Relaunch {{ en.RDM }} for Mac to be prompted for the ***Authenticator (TOTP)*** code. 

