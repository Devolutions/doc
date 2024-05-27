---
eleventyComputed:
  title: No Enterprise license found in {{ en.RDM }} with {{ en.DHUBB }}
---
With a valid {{ en.RDM }} license, you get prompt with the error message ***No Enterprise License Found*** in version 2022.3.X linked with a {{ en.DHUBB }} data source.

{% snippet, "badgeInfo" %}
To learn more about this major improvement, read our latest Devolutions blog [{{ en.RDM }} Free and Enterprise are now unified](https://blog.devolutions.net/2022/10/news-remote-desktop-manager-is-changing-for-the-better/).
{% endsnippet %}

## Solution

Save the {{ en.RDM }} product license in {{ en.DHUB }} and assign it to users.

{% snippet, "badgeCaution" %}
Only ***Administrators*** and users with permissions in the ***System Permissions*** section will have access to register a license in {{ en.DHUBB }}.
{% endsnippet %}

1. In {{ en.RDM }}, click ***Administration – License*** to be redirected to the {{ en.DHUB }} web interface.
1. Click the ***Add*** button.
![Administration – Licenses](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5024.png)
1. Paste the {{ en.RDM }} ***License*** and click ***Add***.
![Product License](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5023.png)
1. Assign the {{ en.RDM }} product license by clicking the ***Edit*** button.
![Administration – Licenses – Edit](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5025.png)
1. Click ***Assigned To*** and manage your users license access.
![Product License – Assigned To](https://cdnweb.devolutions.net/docs/docs_en_kb_KB5026.png)
1. Click ***Update*** to save.
1. Restart {{ en.RDM }}.
