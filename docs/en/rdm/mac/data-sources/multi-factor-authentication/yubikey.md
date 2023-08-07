---
title: Yubikey
---
{{ en.RDMMAC }} allows you to use a ***Yubikey*** to provide an additional security layer when opening a data source. 

{% snippet icon.badgeCaution %} 
{{ en.RDMMAC }} only support the Yubico OTP at this time. 
{% endsnippet %}
 
## Settings 

{% snippet icon.badgeInfo %} 
Before you start the configuration, make sure you have a ***Yubikey*** in your possession. 
{% endsnippet %}
 
1. If not already done, follow these [Multi-Factor Authentication Configuration steps](/rdm/mac/data-sources/multi-factor-authentication/) . 
1. After having selected the ***Yubikey*** MFA type, click ***Apply*** .  
![Apply Multi-Factor Authentication](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10068.png) 
1. Insert the ***Yubikey*** into a USB port of your computer. 
1. Hold the gold button on the ***Yubikey*** to have the code filled in the field.  
![Yubikey Setup](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10069.png) 
1. Click ***Save*** . 
1. Relaunch {{ en.RDMMAC }} to be prompted for a Yubikey code. 

