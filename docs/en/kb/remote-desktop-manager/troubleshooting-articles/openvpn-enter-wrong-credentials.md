---
title: OpenVPN Enter Wrong Credentials
---
{% snippet icon.badgeCaution %}
Note that for OpenVPN to work properly, you will need version 11.15.0.0 of the OpenVPN GUI.
{% endsnippet %}  

Starting OpenVPN in {{ en.RDM }} causes that credentials are partially entered.
## Solution
Enable the feature ***Use authentication file*** in the OpenVpn entry.  

1. Open OpenVPN's ***Properties***
1. On the ***Advanced*** tab enable ***Use authentication file***  
![KB4006.png](/img/en/kb/KB4006.png)
