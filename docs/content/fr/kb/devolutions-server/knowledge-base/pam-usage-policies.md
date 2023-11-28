---
eleventyComputed:
  title: PAM usage policies
  description: PAM Usage Policies are useful to set which entry types and applications your users can use with PAM accounts.
---
PAM Usage Policies are useful to set which entry types and applications your users can use with PAM accounts, it is a nice additional layer of security to have. Making changes in these settings will affect the entire {{ en.DVLS }}.

## Where to find and modify PAM Usage Policies
1. In the web interface for {{ en.DVLS }}, make sure you are connected to the right data source.
1. Go to ***Administration*** – ***Privileged Access*** – ***Usage Policies***.  
![Administration – Privileged Access – Usage Policies](https://webdevolutions.azureedge.net/docs/en/kb/KB0159.png)
1. Modify the desired applications or entry types policies.
1. Click ***Save***.

{% snippet icon.badgeInfo %}
Ensure that privileged accounts function correctly and are disabled appropriately based on your choice. Also, ensure that connections saved with PAM credentials are blocked at runtime before disabling a specific connection type.
{% endsnippet %}
