---
eleventyComputed:
  title: Private Key Management
  description: Your Private Key is mandatory in case you access your {{ en.DHUB }} from a new device or a private browsing session. You can configure its storage method(s) in your {{ en.DPORTAL }}.
  keywords:
  - private key
  - qr code
  - push
  - mobile
---
## First Connection to {{ en.DHUB }}

{% snippet icon.badgeNotice %}
A Private Key is mandatory in case you access your {{ en.DHUB }} from a new device or a private browsing session.
{% endsnippet %}  

When connecting to your {{ en.DHUB }} for the first time, a Private Key will be created. The storage method depends on whether you already have a {{ en.DA }} or not and on whether Single Sign-on (SSO) is enabled on the hub:
* If you already have a {{ en.DA }}, your Private Key will be stored using your password.
* If you do not have a {{ en.DA }} and your hub does not offer Single Sign-on (SSO), your Private Key will be stored using the password that will be created.
* If you do not have a {{ en.DA }} and you connect to a hub using Single Sign-on (SSO), you will be prompted to choose a storage method for your Private Key. 
    * Mobile Device **(Recommended)**: Your Private Key can be stored on the [{{ en.DWS }} mobile app](https://devolutions.net/workspace/). You will receive a push notification to easily approve new devices.
    * QR Code: Download and print your Private Key as a QR code. When required to approve new devices, you will need to scan the QR Code.
    * Password: Approve new devices by entering a password.

## Storage Management

After the first connection, you can add/modify more methods. You can do this in your [{{ en.DPORTAL }}](https://portal.devolutions.com/security/private-key).

All three methods can be enabled at the same time, and you will always have at least one configured storage method for your Private Key. Your active storage method will have a checkmark inside a green circle next to it, while an unconfigured one will have an "x" inside a red circle. 

See the examples below:

![Private Key Storage Methods – Password Method Configured](https://webdevolutions.azureedge.net/docs/en/kb/KB2185.png)

![Private Key Storage Methods – Mobile Device Method Configured](https://webdevolutions.azureedge.net/docs/en/kb/KB2186.png)

![Private Key Storage Methods – QR Code Method Configured](https://webdevolutions.azureedge.net/docs/en/kb/KB2187.png)

### Store on a Mobile Device (Recommended)

This method is recommended because there is no need to remember a password or store your QR code somewhere. This is especially useful for access from a new device or a private browsing session, as your password is not stored in your browser in this situation.

Follow the steps below to configure this method.

1. In the ***Private Key Storage Methods*** section of your {{ en.DPORTAL }}, click ***Configure*** in the mobile device method box.  
![Configure the Mobile Device Method](https://webdevolutions.azureedge.net/docs/en/kb/KB2188.png)
1. [Download](https://devolutions.net/workspace/) on a mobile device the {{ en.DWS }} application.  
![Download {{ en.DWS }}](https://webdevolutions.azureedge.net/docs/en/kb/KB2189.png)
1. Once done, click ***Continue***. A QR code will appear.
1. In the {{ en.DWS }} application, access the ***Authenticator*** space.
1. Click ***Add***, then ***Scan a QR code***.
1. Scan the QR code in the browser with your mobile device.
![Scan the QR Code](https://webdevolutions.azureedge.net/docs/en/kb/KB2190.png)

The pairing process will begin. After it ends (it should only take a few seconds), your Private Key will be stored on the {{ en.DWS }} mobile application.  

#### Unpair

At any moment, you can decide to delete that storage configuration by clicking on ***Unpair***. This option is useful if you have pairing problems with your mobile device and want to redo the configuration from the start.  
![Unpair the Mobile Device](https://webdevolutions.azureedge.net/docs/en/kb/KB2191.png)

### Store as a QR Code

If you do not have access to a mobile device or if you want an additional method, this option is the best alternative. Follow the steps below to configure this method.

1. In the ***Private Key Storage Methods*** section of your {{ en.DPORTAL }}, click ***Configure*** in the QR code method box.  
![Configure the QR Code Method](https://webdevolutions.azureedge.net/docs/en/kb/KB2192.png)
1. Either ***Download*** or ***Print*** the QR code. Whichever you choose, **be sure to keep it in a safe place**.
![Download or Print the QR Code](https://webdevolutions.azureedge.net/docs/en/kb/KB2193.png)

#### Regenerate

If you encounter problems using this method to authenticate or if you lost your QR code, you can generate a new one by clicking on the vertical ellipsis and selecting ***Regenerate a new QR Code***. You can also delete the current code without generating a new one by selecting ***Delete Current QR Code***.  

![Regenerate or Delete a QR Code](https://webdevolutions.azureedge.net/docs/en/kb/KB2194.png)

{% snippet icon.badgeCaution %}
Generating a new QR code makes your old code unusable. We therefore recommend that you delete the old code after generating the new one.
{% endsnippet %}  

### Store Using a Password

Follow the steps below to configure this method.

1. In the ***Private Key Storage Methods*** section of your {{ en.DPORTAL }}, click ***Configure*** in the password method box.  
![Configure the Password Method](https://webdevolutions.azureedge.net/docs/en/kb/KB2195.png)
1. In the ***Password*** fields, enter a password that follows the specified rules written underneath. **Be sure to keep it in a sake place.**  
1. Click on ***Create password***.

If you want to change this password, click on the ***Change Password*** icon.

![Change Password](https://webdevolutions.azureedge.net/docs/en/kb/KB2196.png)

Follow the steps, then click ***Change Password*** when done.

![Current and New Passwords](https://webdevolutions.azureedge.net/docs/en/kb/KB2197.png)
