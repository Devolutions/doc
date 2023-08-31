---
title: Configure Google Authenticator 2-factor authentication
---
{% youtube 'Oi27Y8FfcNg' %}

{{ en.RDM }} has the option to use Google Authenticator to provide an additional security layer when the application starts.

## Settings

{% snippet icon.badgeNotice %}
Before you start the configuration, make sure you have installed the [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en) application on your mobile device.
{% endsnippet %}

1. Click on ***File - Options - Security*** and select ***Require a TOTP validation ({{ en.DWS }} or Google Authenticator)*** in the ***2-Factor Authentication*** section. Then click on ***Configure*** to set up your Google Authentication.  
![!!KB4512](https://webdevolutions.azureedge.net/docs/en/kb/KB4512.png)
1. Scan the QR code on your screen with the Google Authenticator application to setup {{ en.RDM }} in Google Authenticator. When {{ en.RDM }} is configured in Google Authenticator, enter the ***Validation code*** provided by Google Authenticator in {{ en.RDM }}.  
![!!KB4513](https://webdevolutions.azureedge.net/docs/en/kb/KB4513.png)
1. When the validation code is entered, click on ***Validate***, then ***OK***.
1. Relaunch {{ en.RDM }} to be prompted for the Google Authenticator code.

{% snippet icon.badgeInfo %}
Google Authenticator generates a new validation code every 30 seconds. There will be a color indicating the end of the time window is approaching, please consult the application documentation of your device for complete information.
{% endsnippet %}
