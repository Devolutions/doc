---
eleventyComputed:
  title: Prevent {{ en.RDM }} and {{ en.DWS }} from disconnecting when switching network
  description: When switching your computer from wired network to wifi, {{ en.RDM }} and {{ en.DWS }} disconnect from {{ en.DVLS }} and you have to reconnect.
  keywords:
  - Switching Network
  - Public IP
  - Token
---
## Scenario 1

When switching your computer from a wired network to wifi, {{ en.RDM }} and {{ en.DWS }} disconnect from {{ en.DVLS }} and you have to reconnect.

## Scenario 2

If you have multiple different public IP addresses, {{ en.RDM }} and {{ en.DWS }} are not able to connect to {{ en.DVLS }}.

## Solution

To prevent this behaviour, go to the {{ en.DVLS }} web interface and, under ***Administration – Server Settings – Security***, disable ***Force token public IP validation***.  
![Administration – Server Settings – Security – Force token public IP validation](https://webdevolutions.azureedge.net/docs/en/kb/KB2290.png)  
