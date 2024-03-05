---
eleventyComputed:
  title: "{{ en.DGW }} configuration with {{ en.DHUBB }}"
  order: 30
  description: "{{ en.DGW }} provides a flexible and secure alternative to VPNs, allowing for easy access management and efficient use of network resources."
---
{{ en.DGW }} allows for just-in-time connections at the session level, eliminating the need to change the system's global configuration. {{ en.DGW }} provides a flexible and secure alternative to VPNs, allowing for easy access management and efficient use of network resources.  

{% snippet icon.badgeInfo %}
Every {{ en.DHUBB }} license comes with a free {{ en.DGW }} license that supports up to 5 concurrent sessions.
{% endsnippet %}

{% snippet icon.badgeCaution %}
If your clients fail to connect with {{ en.DGW }}, ensure the certificate contains the entire chain. This certificate chain includes any intermediate certificates. For example:
Root Certificate Authority – Secure Certificate Authority – Purchased XYZ Certificate
{% endsnippet %}  

Click on the browser link below to read more about the installation method:  

* [{{ en.DGW }} installation on {{ en.DHUBB }}](/hub/dgw/hub-business-configuration/install-manually/)
