---
eleventyComputed:
  title: "{{ en.DSEND_STANDALONE }}"
  description: "{{ en.DSEND_STANDALONE }} features a secure method to generate a link to share secrets instead of using insecure email to send sensitive data."
---
{% youtube 'hClqb2jvGj0?si=wZ4vQVa6vte0riOX&amp;start=37' %}

![!!DevolutionsSendLogo](https://cdnweb.devolutions.net/images/projects/devolutions-send/devolutions-send-color-shadow.svg)

[{{ en.DSEND_STANDALONE }}](https://devolutions.net/devolutions-send/) features a secure method to generate a link to share secrets instead of using insecure email to send sensitive data.

## Features
{% snippet, "badgeInfo" %}
The in-app version of {{ en.DSEND }} is currently under development and will be progressively deployed in {{ en.RDM }}, {{ en.DVLS }}, and {{ en.DHUB }}. More information will come in the future.
{% endsnippet %}

Despite sharing the same underlying architecture, slight differences exist between the feature set of the standalone and in-app versions of {{ en.DSEND }}.

* Unique short-lived (24-hour) link encrypted on the client side.
* Optional protection via a client-provided passphrase.
* Users may be non-Devolutions users (not linked to a {{ en.DA }}).
* Character limit of 10 kb.
* A sender email is required and stored with the GUID as part of the “payload” stored in the database.

## How to use {{ en.DSEND_STANDALONE }}
1. Go to the [{{ en.DSEND_STANDALONE }}](https://send.devolutions.com/) website.
1. Enter the ***Sender email***, which is required and stored with the GUID as part of the “payload” stored in the database.
1. Enter your ***Secure message*** to encrypt.
1. Add a ***Passphrase*** for extra security (mandatory if the recipient does not have a {{ en.DA }}, optional otherwise).
1. Read and agree to our [online services terms](https://devolutions.net/legal/online-services-terms/).
1. Click on ***Create secure link*** to get your in-browser encrypted, 24-hour short-lived link.
![{{ en.DSEND_STANDALONE }} interface](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2363.png)

## How to receive a {{ en.DSEND_STANDALONE }} secret
1. Click on the received encrypted link.
   {% snippet, "badgeCaution" %}
   A {{ en.DSEND_STANDALONE }} secret will always start with `https://send.devolutions.com/receive/`.
   {% endsnippet %}
1. Enter the ***Passphrase*** the sender provided (if necessary) and click on ***Decrypt***.
![Decrypt button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0187.png)
1. Click on ***Unmask text***.
   {% snippet, "shieldCaution" %}
   Make certain to be in a private setting before reading this message if it contains sensitive information.
   {% endsnippet %}

   ![Unmask text](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0188.png)
1. Once done, click on ***Delete Now***.
1. Click ***Yes***.
![Yes button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0189.png)
![Deleted secure message](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0190.png)

## Technical details
The core tenant of {{ en.DSEND }} is that Devolutions itself cannot decrypt the user's secret. This is accomplished via client-side (browser) encryption through a Rust program compiled to WASM (WebAssembly) in-browser. Therefore, Devolutions does not hold the encryption key and cannot decrypt the data.
