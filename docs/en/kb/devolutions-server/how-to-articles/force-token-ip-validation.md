---
eleventyComputed:
  title: Prevent {{ en.RDM }} and {{ en.DWS }} from disconnecting when switching network
  description: When switching your computer from wired network to wifi, {{ en.RDM }} and {{ en.DWS }} will be disconnected from {{ en.DVLS }} and you will have to reconnect.
  keywords:
  - Switching Network
  - Public IP
  - Token
---
## Scenario 1

When switching your computer from a wired network to wifi, {{ en.RDM }} and {{ en.DWS }} will be disconnected from {{ en.DVLS }} and you will have to reconnect.

## Scenario 2

If you have multiple different public IP addresses, {{ en.RDM }} and {{ en.DWS }} will not be able to connect to {{ en.DVLS }}.

## Solution

{% snippet icon.shieldCaution %}
Disabling the option will decrease the security of the {{ en.DVLS }} instance.
{% endsnippet %}

To prevent this behaviour, disable the ***Force token public IP validation*** option in ***Administration – Server Settings – Security***.

![Administration – Server Settings – Security](https://webdevolutions.azureedge.net/docs/en/kb/KB8094.png)  
