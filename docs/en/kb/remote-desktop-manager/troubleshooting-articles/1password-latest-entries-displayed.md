---
eleventyComputed:
  title: 1Password – only latest entries are displayed
---

{% snippet icon.badgeInfo %}
The integration of credentials from password managers is only available in the Team version of {{ en.RDM }}.
{% endsnippet %}  

When you create a new 1Password Credential entry, only the latest entries added to 1Password are displayed.
## Solution
Head in 1Password (Fat Client), go in ***File - Repair 1Password {{ en.VLT }}*** This should fix the issue.  
![!!KB4008](https://webdevolutions.azureedge.net/docs/en/kb/KB4008.png)
