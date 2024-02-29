---
eleventyComputed:
  title: "{{ en.DSEND }}"
  description: Send the password through in-app secure messaging or email external contacts directly from an entry.
  order: 65
---
Send the password through in-app secure messaging or email external contacts directly from an entry. Create a shareable link to send secrets outside your organization securely.

This features needs the user or user group to have ***Send messages with attachments*** enabled. This option can be found under ***Administration*** – ***Users*** or ***User Groups***.
![Copy to Clipboard](https://cdnweb.devolutions.net/docs/en/hub/Hub0013.png)

{% snippet icon.badgeInfo %}
The ***External password sharing*** option also needs to be enabled for this feature to work. The option can be found under ***Administration*** – ***System Settings*** – ***Advanced***. It is enabled by default.
{% endsnippet %}

## Features
{% snippet icon.badgeInfo %}
[{{ en.DSEND_STANDALONE }}](https://devolutions.net/devolutions-send/) is also available if you do not have a license for one of our compatible products.
{% endsnippet %}

Despite sharing the same underlying architecture, slight differences exist between the feature set of the standalone and in-app versions of {{ en.DSEND }}.

* Unique short-lived (24-hour) link encrypted on the client side.
* Optional protection via a client-provided passphrase.
* Users may be non-Devolutions users (not linked to a {{ en.DA }}).
* Character limit of 10 kb.
* A sender email is required and stored with the GUID as part of the “payload” stored in the database.

## How to use {{ en.DSEND }} with {{ en.DHUBB }}
1. Open the {{ en.DHUBB }} web page.
1. Click on ***Messages*** next to the user's avatar.
![Messages](https://cdnweb.devolutions.net/docs/en/hub/Hub0015.png)
1. Click ***New message***.
![New message](https://cdnweb.devolutions.net/docs/en/hub/Hub0014.png)
1. Select one of the three available options:
    * [Send In-app](#send-in-app)
    * [Send by Email](#send-by-email)
    * [Create Shareable Link](#create-shareable-link)

### Send In-app
![Send In-app](https://cdnweb.devolutions.net/docs/en/hub/Hub0007.png)
This feature is covered in [***Secure messages***](/hub/web-interface/secure-messages/).

### Send by Email
![Send by Email](https://cdnweb.devolutions.net/docs/en/hub/Hub0008.png)
1. Enter the ***Recipient(s) Email***.
1. Enter the information in the ***Secure Message*** field.
   {% snippet icon.badgeInfo %}
   A ***Passphrase*** may be added for additional security.
   {% endsnippet %}
1. Click ***Submit***.
![Submit](https://cdnweb.devolutions.net/docs/en/hub/Hub0019.png)

### Create Shareable Link
![Create Shareable Link](https://cdnweb.devolutions.net/docs/en/hub/Hub0010.png)
1. Enter the information in the ***Secure Message*** field.
   {% snippet icon.badgeInfo %}
   A ***Passphrase*** may be added for additional security.
   {% endsnippet %}
1. Click on ***Create Link***.
![Create Link](https://cdnweb.devolutions.net/docs/en/hub/Hub0020.png)
1. Copy the link and send it to the intended individual(s).
![Copy to Clipboard](https://cdnweb.devolutions.net/docs/en/hub/Hub0012.png)

## Send Copy of a password
It is also possible to send a password directly to another user in-app or outside of {{ en.DHUBB }} by using {{ en.DSEND }}. The user needs to have [***View*** permission](/hub/web-interface/administration/configuration-security/system-permissions/roles-permissions/) on that entry to send it.
![Send Copy](https://cdnweb.devolutions.net/docs/en/hub/Hub0021.png)

The main difference with this option is that the password is automatically added and hidden as the message. The password can only be edited if the text is revealed (by clicking the eye icon).
![Editable only when revealed](https://cdnweb.devolutions.net/docs/en/hub/Hub0022.png)

To learn more about the ***New Message*** features, please refer to the above section on [How to use {{ en.DSEND }} with {{ en.DHUBB }}](#how-to-use-devolutions-send-with-devolutions-hub-business).
