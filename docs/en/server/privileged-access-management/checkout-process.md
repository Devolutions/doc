---
  title: Checkout Process
  description: This topic will cover both the PAM checkout process and the PAM checkout using a custom time frame.
---
{% snippet icon.badgeNotice %} 
A license is required to enable the Privileged Access Management (PAM) module. Please contact our [sales department](mailto:sales@devolutions.net) for more information about the license. 
{% endsnippet %}  

This topic will cover both the [PAM checkout process](#checkout) and the [PAM checkout using a custom time frame](#checkout-with-custom-time). The latter option is especially useful for planned maintenance outside of normal work hours, when approvers are not available.

## Checkout
1. In the web interface for {{ en.DVLS }}, make sure you are connected to the right data source.
1. Go to the ***Privileged Access*** tab and select the desired {{ en.VLT }}.
1. Click on an entry and then click ***Check Out***.  
![Check Out](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0033.png)
1. Set the desired time of the ***Check-out Request*** by either selecting from the ***Access duration*** dropdown or by manually setting a custom time with the ***Hours*** and ***minutes*** fields.  
![Check-out Request](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0034.png)
   {% snippet icon.badgeInfo %}
   The minimum checkout time is 10 minutes.
   {% endsnippet %}  
1. Click the ***Check Out*** button to confirm and close this dialog box.

## Checkout with custom time
{% snippet icon.badgeInfo %}
Making a ***Checkout*** request in advance is only available in PAM {{ en.VLT }}s.
{% endsnippet %}  

1. In the web interface for {{ en.DVLS }}, make sure you are connected to the right data source.
1. Go to the ***Privileged Access*** tab and select the desired {{ en.VLT }}.
1. Click on an entry and then click ***Check Out***.  
![Check Out](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0036.png)
1. Enable ***Set custom time frame***.  
![PAM checkout with custom time frame](https://webdevolutions.azureedge.net/docs/en/server/ServerOp0035.png)
1. Choose the ***Start time*** and ***End time***.
1. Click the ***Check Out*** button to confirm and close this dialog box.
