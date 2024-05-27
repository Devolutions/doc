---
eleventyComputed:
  title: Use the NLA option for an RDP connection via {{ en.DGW }}
  description: Since 2022.3, {{ en.DGW }} supports KDC Proxy combined with API hooking RDP in {{ en.RDM }}.
  keywords:
  - NLA
---
Since 2022.3, {{ en.DGW }} supports KDC Proxy combined with API hooking RDP in {{ en.RDM }}, letting Kerberos work effortlessly with RDP NLA.

## Steps
1. Access the ***Administration*** tab on the left.
1. Under the ***Modules*** section, click on ***{{ en.DGW }}***.
1. Click ***Edit*** on the desired {{ en.DGW }}.
1. Go to the ***KDC proxy*** tab.
![KDC proxy Tab](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0025.png)
1. Enter the domain controller (adding tcp:// before) in the ***KDC Server URL*** field.
1. Enter the {{ en.DVLS }} domain name in the ***Kerberos realm*** field.
{% snippet, "badgeCaution" %}
If this does not work, check the ***Advanced*** tab and make certain the ***Force using IP address for RDP connections*** option is off.
{% endsnippet %}
