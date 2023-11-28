---
eleventyComputed:
  title: Configure Yubikey 2-factor authentication
---
{% youtube 'Oi27Y8FfcNg' %}

{{ en.RDM }} allows you to configure a Yubikey to provide an additional security layer when the application starts.

{% snippet icon.badgeCaution %}
{{ en.RDM }} only support the Yubico OTP at this time.
{% endsnippet %}

## Settings

{% snippet icon.shieldWarning %}
Before starting the configuration, make sure you have a [Yubikey](https://www.yubico.com/) in your possession.
{% endsnippet %}

1. Insert the Yubikey into a USB port of your computer.
1. Click on ***File - Options - Security*** and select ***Require Yubikey authentication*** in the ***2-Factor Authentication*** section. Press and hold the gold button on the Yubikey to have the code in {{ en.RDM }} and click ***OK***.  
![!!KB4514](https://webdevolutions.azureedge.net/docs/en/kb/KB4514.png)
1. Relaunch {{ en.RDM }} to be prompted for a Yubikey code.  
![!!KB4515](https://webdevolutions.azureedge.net/docs/en/kb/KB4515.png)
1. Press and hold the gold button on the Yubikey and access will be granted.
