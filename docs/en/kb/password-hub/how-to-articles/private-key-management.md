---
title: Private Key Management
description: Your Private Key is mandatory in case you access your {{ en.HUB }} from a new device or a private browsing session. You can configure its storage method(s) in your Devolutions Portal.
keywords:
- private key
- qr code
- push
- mobile
---
## First Connection to {{ en.HUB }}

When connecting to your {{ en.HUB }} for the first time, a Private Key will be created. The method of storing it depends on whether you already have a {{ en.DA }} or not and on whether Single Sign-on (SSO) is enabled on the {{ en.PHUB }}:
* If you already have a {{ en.DA }}, or if you do not have a {{ en.DA }} and you try to connect to a {{ en.PHUB }} that does **not** offer Single Sign-on (SSO), your Private Key will be stored using a password, the same one used to connect to your {{ en.DA }}.
* If you do not have a {{ en.DA }} and you try to connect to a {{ en.PHUB }} using Single Sign-on (SSO), you will be prompted to choose a storage method for your Private Key. After following the steps, your {{ en.DA }} will be created using the selected method.

## Storage Management

Your Private Key is mandatory in case you access your {{ en.HUB }} from a new device or a private browsing session. You can configure its storage method(s) in your [Devolutions Portal](https://portal.devolutions.com/security/private-key):

* Mobile Device **(Recommended)**: Your Private Key can be stored on the [Devolutions Workspace mobile app](https://devolutions.net/workspace/). You will receive a push notification to easily approve new devices.
* QR Code: Download and print your Private Key as a QR code. When required to approve new devices, you will need to scan the QR Code.
* Password: Approve new devices by entering a password, the same as your {{ en.DA }}.

All three methods (stored on a mobile device, as a QR code, or using a password) can be enabled at the same time, and you will always have at least one configured storage method for your Private Key. A configured storage method will have a checkmark inside a green circle next to it, while an unconfigured one will have an "x" inside a red circle.

In most cases, if you never configured other storage methods in the Devolutions Portal, you will only have the password method configured, as shown in the image below.

![Private Key Storage Methods – Password Method Configured](/img/en/kb/KB2185.png)  
*Private Key Storage Methods – Password Method Configured*{.caption}

In the event that you connected to a SSO {{ en.PHUB }} without a {{ en.DA }}, you would have chosen a storage method when prompted. If you chose the mobile device method, you should see something like this:

![Private Key Storage Methods – Mobile Device Method Configured](/img/en/kb/KB2186.png)  
*Private Key Storage Methods – Mobile Device Method Configured*{.caption}

If you chose the QR code method, it should instead look like this:

![Private Key Storage Methods – QR Code Method Configured](/img/en/kb/KB2187.png)  
*Private Key Storage Methods – QR Code Method Configured*{.caption}

### Store on a Mobile Device (Recommended)

This method is recommended because there is no need to remember a password or store your QR code somewhere. This is especially useful for access from a new device or a private browsing session, as your password is not stored in your browser in this situation.

Follow the steps below to configure this method.

1. In the ***Private Key Storage Methods*** section of your Devolutions Portal, click ***Configure*** in the mobile device method box.  

![Configure the Mobile Device Method](/img/en/kb/KB2188.png)  
*Configure the Mobile Device Method*{.caption}

1. [Download](https://devolutions.net/workspace/) on a mobile device the Devolutions {{ en.WS }} application.

![Download Devolutions {{ en.WS }}](/img/en/kb/KB2189.png)  
*Download Devolutions {{ en.WS }}*{.caption}

1. Once done, click ***Continue***. A QR code will appear.
1. In the Devolutions {{ en.WS }} application, access the ***Authenticator*** space.
1. Click ***Add***, then ***Scan a QR code***.
1. Scan the QR code in the browser with your mobile device.

![Scan the QR Code](/img/en/kb/KB2190.png)  
*Scan the QR Code*{.caption}

The pairing process will begin. After it ends (it should only take a few seconds), your Private Key will be stored on the Devolutions {{ en.WS }} mobile application. Next time you connect to your {{ en.PHUB }}, if you choose this authentication method, you will receive a Push notification on your mobile device to verify your identity.  

At any moment, you can decide to delete that storage configuration by clicking on ***Unpair***. This option is useful if you have pairing problems with your mobile device and want to redo the configuration from the start.  

![Unpair the Mobile Device](/img/en/kb/KB2191.png)  
*Unpair the Mobile Device*{.caption}

### Store as a QR Code

If you do not have access to a mobile device, this option is the best alternative. Follow the steps below to configure this method.

1. In the ***Private Key Storage Methods*** section of your Devolutions Portal, click ***Configure*** in the QR code method box.  

![Configure the QR Code Method](/img/en/kb/KB2192.png)  
*Configure the QR Code Method*{.caption}

1. Either ***Download*** or ***Print*** the QR code. Whichever you choose, be sure to keep it in a safe place.

![Download or Print the QR Code](/img/en/kb/KB2193.png)  
*Download or Print the QR Code*{.caption}

The configuration process is over. Next time you connect to your {{ en.PHUB }}, if you choose this authentication method, you will need to provide this QR code.

If you encounter problems using this method to authenticate, you can generate a new QR code by clicking on the vertical ellipsis and selecting ***Regenerate a new QR Code***, or you can delete the current code without generating a new one by selecting ***Delete Current QR Code***.  

![Regenerate or Delete a QR Code](/img/en/kb/KB2194.png)  
*Regenerate or Delete a QR Code*{.caption}

{% snippet icon.badgeCaution %}
Generating a new QR code makes your old code unusable. We therefore recommend that you delete the old code after generating the new one.
{% endsnippet %}  

### Store Using a Password

Follow the steps below to configure this method.

1. In the ***Private Key Storage Methods*** section of your Devolutions Portal, click ***Configure*** in the password method box.  

![Configure the Password Method](/img/en/kb/KB2195.png)  
*Configure the Password Method*{.caption}

1. In the ***Password*** field, enter a password that follows the specified rules written underneath.

{% snippet icon.badgeNotice %}
If you have installed our {{ en.DWL }} extension in your browser, try its ***Password Generator*** feature to create a secure password that follows these requirements.
{% endsnippet %}  

3. Enter the same password in the second field to confirm it, then click on ***Create password***.

The configuration process is over. Next time you connect to your {{ en.PHUB }}, if you choose this authentication method, you will need to provide this password.

We recommend that you update your password regularly for extra protection. To do so, click on the ***Change Password*** icon.

![Change Password](/img/en/kb/KB2196.png)  
*Change Password*{.caption}

Start by entering your current password in the first field, then enter your new password in the last two fields. Your new password must follow the same rules as your current password. Click ***Change Password*** when done.

![Current and New Passwords](/img/en/kb/KB2196.png)  
*Current and New Passwords*{.caption}
