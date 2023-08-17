---
eleventyComputed:
  title: Configure {{ en.DWS }} 2-Factor Authentication
---
{% youtube 'Oi27Y8FfcNg' %}

{{ en.RDM }} has the option to use {{ en.DWS }} to provide an additional security layer when the application starts.

## Settings

{% snippet icon.badgeNotice %}
Before you start the configuration, make sure you have installed the [{{ en.DWS }}](https://devolutions.net/authenticator) application on your mobile device.
{% endsnippet %}

1. Click on ***File - Options - Security*** and select ***Require a TOTP validation ({{ en.DWS }} or Google Authenticator)*** in the ***2-Factor Authentication*** section. Then click on ***Configure*** to set up your Google Authentication.  
![!!KB4512.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4512.png)
1. Scan the QR code on your screen with the {{ en.DWS }} application to setup {{ en.RDM }} Enter the ***Validation code*** provided by Devolutions Worspace into {{ en.RDM }}  
![!!KB4513.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4513.png)
1. Click ***Validate***, then ***OK***
1. Relaunch {{ en.RDM }} to be prompted for the {{ en.DWS }} code.  
{% snippet icon.badgeInfo %}
{{ en.DWS }} generates a new validation code every 30 seconds.
{% endsnippet %}
