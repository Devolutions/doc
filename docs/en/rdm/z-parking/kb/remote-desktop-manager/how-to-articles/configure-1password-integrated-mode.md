---
eleventyComputed:
  title: Configure 1Password with integrated mode
---
{% snippet, "badgeInfo" %}
The integration of credentials from password managers is only available in the Team version of {{ en.RDM }}.
{% endsnippet %}

1. In the 1Password app, use ***1Password - New {{ en.VLT }} on this PC***.
![!!KB4233](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4233.png)
1. Configure the {{ en.VLT }} to your liking and use ***Choose a folder to sync this {{ en.VLT }}*** to select the destination of the local database.
1. In {{ en.RDM }}, create a new 1Password entry. Set the ***Mode*** to ***Linked to a local file***.
1. Use the ellipsis button to select the local database file. Its extension will be **.opvault** and it will be located in the folder you selected earlier.
1. Once that is done, all there is left to do is to select which credential you wish to retrieve, using the ***Title*** field or its ***ellipsis button*** If you’d rather not select a credential and be prompted with every use instead, check ***Always prompt with list*** instead.
