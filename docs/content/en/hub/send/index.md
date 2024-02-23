---
eleventyComputed:
  title: "{{ en.DSEND }}"
  description: Send the password through in-app secure messaging or email external contacts directly from an entry.
---
Send the password through in-app secure messaging or email external contacts directly from an entry. Create a shareable link to send secrets outside your organization securely.

## Features
{% snippet icon.badgeInfo %}
[{{ en.DSEND_STANDALONE }}](https://devolutions.net/devolutions-send/) is also available if you do not have a liscence for one of our compatible products.
{% endsnippet %}

Despite sharing the same underlying architecture, slight differences exist between the feature set of the standalone and in-app versions of {{ en.DSEND }}.

* Unique short-lived (24-hour) link encrypted on the client side.
* Optional protection via a client-provided passphrase.
* Users may be non-Devolutions users (not linked to a {{ en.DA }}).
* Character limit of 10 kb.
* A sender email is required and stored with the GUID as part of the “payload” stored in the database.

## How to use {{ en.DSEND }} with {{ en.DHUBB }}
1. Open the {{ en.DHUBB }} webpage.
1. Click on ***Messages*** next to the user's avatar.
1. Click ***New mesasge***.
1. Select one of the three available options:
    1. [Send In-app](#send-in-app)
    1. [Send by Email](#send-by-email)
    1. [Create Shareable Link](#create-shareable-link)

### Send In-app


### Send by Email


### Create Shareable Link


{% snippet icon.badgeInfo %}
There is another topic covering [***Messages***](/hub/web-interface/secure-messages/) in {{ en.DHUBB }}.
{% endsnippet %}

{% snippet icon.badgeInfo %}
The ***External password sharing*** option needs to be enabled for this feature to work. It is enabled by default.
{% endsnippet %}
