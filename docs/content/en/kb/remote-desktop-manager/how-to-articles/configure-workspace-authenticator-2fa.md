---
eleventyComputed:
  title: Configure {{ en.WS }} 2-factor authentication
---
{% youtube 'Oi27Y8FfcNg' %}

{{ en.RDM }} has the option to use {{ en.WS }} to provide an additional security layer when the application starts.

## Settings

{% snippet icon.badgeNotice %}
Before you start the configuration, make sure you have installed the [{{ en.WMAPP  }}](https://devolutions.net/authenticator).
{% endsnippet %}

1. Click on ***File – Settings – Security*** and select ***Require a TOTP validation ({{ en.WS }} or Google Authenticator)*** in the ***2-Factor Authentication*** section. Then click on ***Configure*** to set up your Google Authentication.
![!!KB4512](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4512.png)
1. Scan the QR code on your screen with the {{ en.WMAPP }} to setup {{ en.RDM }}. Enter the ***Validation code*** provided by {{ en.WS }} into {{ en.RDM }}.
![!!KB4513](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4513.png)
1. Click ***Validate***, then ***OK***.
1. Relaunch {{ en.RDM }} to be prompted for the {{ en.WS }} code.
{% snippet icon.badgeInfo %}
{{ en.WS }} generates a new validation code every 30 seconds.
{% endsnippet %}
