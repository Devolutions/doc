---
eleventyComputed:
  title: High CPU usage
---
Since the release of {{ en.RDM }} 13, some users have experienced high CPU usage on their systems, especially in Terminal Services / Remote Desktop Services (RDS) environment. This is caused by the entry state verification feature.
{% snippet, "badgeInfo" %}
This option is available with version 13.0.13.0 and above.
{% endsnippet %}

## Solution
Disable the option ***Allow entry states (Lock, Running, Checkout)*** in ***Administration – System Settings – General*** to improve performance on your servers and your workstations.
![!!KB2024](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2024.png)
