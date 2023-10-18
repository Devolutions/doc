---
eleventyComputed:
  title: Configure PAM domain account provider through {{ en.DGW }}
---
Support Active Directory domain accounts in {{ en.DVLS }} PAM for multiple domains on different networks, via {{ en.DGW }}. It gives you the ability to use {{ en.DVLS }} PAM to manage several Active Directory domains at once and isolate {{ en.DVLS }} from the rest of Active Directory to force use of {{ en.DGW }}. This feature is especially useful for MSP's needing to access multiple subnets from different clients.

## Configuration
1. Connect to the {{ en.DVLS }} web interface.
1. Go to ***Administration*** – ***Privileged Access*** – ***Providers***.
1. Click ***Edit*** on an already configured ***Domain Provider***.  
   {% snippet icon.badgeHelp %} 
   Read more about [Domain Providers](/server/privileged-access-management/providers/domain-provider/).
   {% endsnippet %}

1. Enable on ***Use {{ en.DGW }}***.
1. Click on the ellipsis button to choose the {{ en.DGW }} and then click on ***Select***.
1. Click on ***Edit*** to choose the Domain controller (which is now mandatory because of the {{ en.DGW }} option).
1. Click on ***Save***.
1. To save these changes and close the window click on ***Save***.
