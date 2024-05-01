---
eleventyComputed:
  title: "{{ en.DSEND }}"
  description: "{{ en.DSEND }} features a secure method to generate a link to share secrets instead of using insecure email to send sensitive data."
  order: 65
---
Send a password through in-app secure messaging or email external contacts directly from an entry. Create a shareable link to send secrets outside your organization securely.

This feature needs {{ en.DVLS }} to have ***SMTP*** configured. This option can be found under ***Administration*** – ***Server Settings*** – ***Email***.
{% snippet icon.badgeInfo %}
Additionally, ***Allow users to send password with {{ en.DSEND }}*** needs to be enabled. This option can be found under ***Administration*** – ***Server Settings*** – ***Features***. It is enabled by default.
{% endsnippet %}

![Allow users to send password with {{ en.DSEND }}](https://cdnweb.devolutions.net/docs/DVLS0000_2024_1.png)

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

## How to use {{ en.DSEND }} with {{ en.DVLS }}
1. Open the {{ en.DVLS }} web page.
1. Click on ***Messages*** next to the user's avatar.
![Messages](https://cdnweb.devolutions.net/docs/DVLS0011_2024_1.png)
1. Click ***New message***.
![New message](https://cdnweb.devolutions.net/docs/DVLS0002_2024_1.png)
1. Select one of the three available options:
    * [Send in-app](#send-in-app)
    * [Send by Email](#send-by-email)
    * [Create Shareable Link](#create-shareable-link)

### Send in-app
![Send in-app](https://cdnweb.devolutions.net/docs/DVLS0009_2024_1.png)
This feature is covered in [***Secure messages***](/server/web-interface/messages/).

### Send by Email
![Send by Email](https://cdnweb.devolutions.net/docs/DVLS0003_2024_1.png)
1. Enter the recipient(s) email in the ***To*** field.
1. Enter the information in the ***Secure Message*** field.
   {% snippet icon.badgeInfo %}
   A ***Passphrase*** may be added for additional security.
   {% endsnippet %}
1. Click ***Send by email***.
![Send by email](https://cdnweb.devolutions.net/docs/DVLS0005_2024_1.png)

### Create Shareable Link
![Create Shareable Link](https://cdnweb.devolutions.net/docs/DVLS0004_2024_1.png)
1. Enter the information in the ***Secure Message*** field.
   {% snippet icon.badgeInfo %}
   A ***Passphrase*** may be added for additional security.
   {% endsnippet %}
1. Click on ***Create link***.
![Create link](https://cdnweb.devolutions.net/docs/DVLS0006_2024_1.png)
1. Copy the link and send it to the intended individual(s).
![Copy to Clipboard](https://cdnweb.devolutions.net/docs/DVLS0007_2024_1.png)

## Send Copy of a password
It is also possible to send a password directly to another user in-app or outside of {{ en.DVLS }} by using {{ en.DSEND }}. The user needs to have [view permission](/server/web-interface/user-groups-based-security/permissions/) on that entry to send it.
![Send Copy](https://cdnweb.devolutions.net/docs/DVLS0008_2024_1.png)

The main difference with this option is that the password is automatically added and hidden as the message. The password can only be edited if the text is revealed (by clicking the eye icon).
![Editable only when revealed](https://cdnweb.devolutions.net/docs/DVLS0010_2024_1.png)

To learn more about the ***Secure message*** features, please refer to the above section on [How to use {{ en.DSEND }} with {{ en.DVLS }}](#how-to-use-devolutions-send-with-devolutions-server).
