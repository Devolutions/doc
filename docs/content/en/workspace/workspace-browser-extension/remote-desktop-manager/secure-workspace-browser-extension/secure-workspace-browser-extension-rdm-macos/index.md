---
eleventyComputed:
  title: Secure the {{ en.WBEX }} with {{ en.RDMMAC }}
  description: In {{ en.RDM }} versions 2021.1 and above, we changed how the {{ en.WBEX }} communicates with {{ en.RDMMAC }} to fill in credentials inside web pages. We made these changes to increase the security of this feature.
  order: 20
---
In {{ en.RDM }} versions 2021.1 and above, we changed how our {{ en.WBEX }} communicates with {{ en.RDMMAC }} to fill in credentials inside web pages. We made these changes to increase the security of this feature. Visit [First login](/workspace/workspace-browser-extension/remote-desktop-manager/first-login/first-login-rdm-macos/) for the setup steps.

{% snippet, "shieldWarning" %}
If you are using a version below 2021.1, as mentioned in the [{{ en.WBEX }} Overview](/workspace/workspace-browser-extension/), installing the extension in a Remote Desktop Services (Terminal Services) environment can introduce security risks. In such environments, each user must have a distinct port assigned as well as an application key to prevent any other {{ en.WBEX }} from listening in.

If you insist on using these older versions, it is critical that each user be assigned a distinct port. An application key must be set as well. The first client application that starts will be able to use the port exclusively. ALL {{ en.WBEX }} calling on that port will get the responses unless an application key is set. Continue to the next section for the setup steps.
{% endsnippet %}

### Set up the {{ en.WBEX }} for versions below 2021.1 and for Remote Desktop servers

{% snippet, "shieldWarning" %}
The application key is displayed in clear text. It must be kept secret by the user.
{% endsnippet %}

To enable the security layer in {{ en.RDM }}, follow these steps:

1. In {{ en.RDM }}, navigate to ***File – Preferences – Browser Extensions***.
1. Under the ***{{ en.WBEX }}*** section, click ***Default***. Enter a custom ***Port*** and click ***Done***.
![Port](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2021.png)
1. Type an ***Application key***. Your changes will only be applied after an application restart.
![Application Key](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2023.png)
1. In your browser, click the {{ en.WBEX }} icon and go to ***Settings – Data sources – {{ en.RDM }}***.
1. In the ***General*** tab, uncheck ***Use default port***, then enter the custom ***Port*** created earlier in {{ en.RDM }}.
![General Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_Dwl2000.png)
1. In the ***Advanced*** tab, enter the same ***Application key*** as in {{ en.RDM }}, then click ***Save***.
![Advanced Tab](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_Dwl4033.png)
