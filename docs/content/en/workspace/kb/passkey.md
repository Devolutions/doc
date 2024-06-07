---
eleventyComputed:
  title: Passkeys
  description: Passkeys represent a modern approach to authentication, offering enhanced security and convenience by eliminating the need for traditional passwords. 
---

Passkeys represent a modern approach to authentication, offering enhanced security and convenience by eliminating the need for traditional passwords. Unlike passwords, which can be guessed or stolen, passkeys are cryptographic keys stored on your device, making them more secure and user-friendly. Passkeys can include biometrics like fingerprints or facial recognition, which provide an extra layer of security and convenience. A list of passkey supported websites, apps, and services can be found [here](https://passkeys.directory/).

## Integration of Passkeys in Devolutions products

The {{ en.WBEX }} serves as the bridge for adding and managing passkeys within the {{ en.RDM }} and {{ en.DHUBP }} data sources.

## Using {{ en.WBEX }}

1. Install the [{{ en.WBEX }}](/workspace/workspace-browser-extension/installation/).
1. Configure the extension to connect with [{{ en.RDM }}](/workspace/workspace-browser-extension/remote-desktop-manager/first-login/first-login-rdm-windows/) and [{{ en.DHUBP }}](/workspace/workspace-browser-extension/hub-personal/first-login/).
1. Create a [Passkey](https://www.passkeys.io/).
1. The {{ en.WBEX }} ***Add Passkey*** window open.
1. Select the app where you want to save the passkey ({{ en.RDM }} or {{ en.DHUBP }}).
1. Choose a ***Name***, a ***Folder***, and select the ***{{ en.VLT }}*** in which you will be storing the passkey.
1. Click ***Save*** to save the passkey.

When accessing a service, {{ en.WBEX }} will automatically use the stored passkey entry for authentication. Passkey entries cannot be edited except for their title.  
 







