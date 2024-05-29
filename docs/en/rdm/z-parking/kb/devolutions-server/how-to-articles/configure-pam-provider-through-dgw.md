---
eleventyComputed:
  title: Configure PAM domain account provider through {{ en.DGW }}
---
This option makes it possible to support Active Directory domain accounts in {{ en.DVLS }} PAM for multiple domains on different networks, via {{ en.DGW }}. It gives you the ability to use {{ en.DVLS }} PAM to manage several Active Directory domains at once and isolate {{ en.DVLS }} from the rest of Active Directory to force use of {{ en.DGW }}. This feature is especially useful for MSP's needing to access multiple subnets from different clients.

## Configuration
1. Connect to the {{ en.DVLS }} web interface.
1. Go to ***Administration*** – ***Privileged Access*** – ***Providers***.
1. Click ***Edit*** on an already configured ***Domain Provider***.
![Edit](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0160.png)
   {% snippet, "badgeHelp" %}
   Read more about [Domain Providers](/pam/server/providers/domain-provider/).
   {% endsnippet %}

1. Enable ***Use {{ en.DGW }}*** under the ***Domain*** section.
![PAM domain account provider](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0000.png)
1. Click on the ellipsis button to choose the {{ en.DGW }} and then click on ***Select***.
![Select](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0161.png)
1. Click on ***Edit*** to choose the ***Domain controller*** (which is now mandatory because of the ***Use {{ en.DGW }}*** option).
1. Click on ***Save*** in the ***Preferred domain controller*** window.
![Save](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0162.png)
1. To save these settings and close the window click on ***Save***.
