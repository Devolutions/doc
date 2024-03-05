---
eleventyComputed:
  title: Authentication login
---
To connect to the {{ en.DVLS }} ***Web Interface***, users will need to choose an authentication method. The authentication methods available for login will depend upon the administrator authentication type setup made in ***Administration - Server Settings - Authentication***.

{% snippet icon.badgeHelp %}
Follow this [link](/server/web-interface/administration/configuration/server-settings/general/authentication/) to learn on how to set an authentication type.
{% endsnippet %}

### User authentication
1. Open a web browser and navigate to the URL of the {{ en.DVLS }} instance.
{% snippet icon.badgeInfo %}
If the instance has been created with the default URL, it would be available at https<area>://<ServerName>/dvls.
{% endsnippet %}

2. Choose your authentication method between Microsoft, Domain, Okta or {{ en.DVLS }} user.
{% snippet icon.badgeHelp %}
The [Emergency Login](/kb/devolutions-server/how-to-articles/enable-emergency-login-code-authentication/) is a feature that needs to be enabled to allow an emergency access login for administrators even if providers are down (Azure or AD).
{% endsnippet %}

![!!ServerOp4088](https://cdnweb.devolutions.net/docs/en/server/ServerOp4088.png)
3. Enter the ***Username*** and ***Password*** of the chosen authentication method to connect. Domain authentication method shown here:
{% snippet icon.badgeNotice %}
Click ***Choose your authentication method*** to go back to the list of authentication types.
{% endsnippet %}

![!!ServerOp4022](https://cdnweb.devolutions.net/docs/en/server/ServerOp4022.png)
4. Click ***Sign In***.

