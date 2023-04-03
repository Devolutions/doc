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
* If you already have a {{ en.DA }}, or if you do not have a {{ en.DA }} and Single Sign-on (SSO) is **not** enabled on the {{ en.PHUB }} you are trying to connect to, your Private Key will be stored using a password, the same one used to connect to your {{ en.DA }}.
* If you do not have a {{ en.DA }} and Single Sign-on (SSO) is enabled on the {{ en.PHUB }} you are trying to connect to, you will be prompted to choose a storage method for your Private Key. After following the steps, your {{ en.DA }} will be created using the selected method.

## Storage Management

Your Private Key is mandatory in case you access your {{ en.HUB }} from a new device or a private browsing session. You can configure its storage method(s) in your [Devolutions Portal](https://portal.devolutions.com/security/private-key).

You will always have at least one configured storage method: on a mobile device, as a QR code, or using a password. A configured storage method will have a checkmark inside a green circle next to it, while a unconfigured storage method will have an "x" inside a red circle.

![Private Key Storage Methods](/img/en/kb/KB.png)  
*Private Key Storage Methods*{.caption}

In most cases, unless you connected to a SSO {{ en.PHUB }} without a {{ en.DA }}, you will only have the password method configured. This means that you approve new devices by entering a password, the same as your {{ en.DA }}.





* Mobile Device **(Recommended)**: Your Private Key can be stored on the [Devolutions Workspace mobile app](https://devolutions.net/workspace/). You will receive a push notification to easily approve new devices. This method is recommended because there is no need to remember a password or store your QR code somewhere. This is especially useful for access from a new device or a private browsing session, as your password is not stored in your browser in this situation.
* QR Code: Download and print your Private Key as a QR code. When required to approve new devices, you will need to scan the QR Code.
* Password: Approve new devices by entering a password, the same as your {{ en.DA }}.
