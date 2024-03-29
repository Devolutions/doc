---
eleventyComputed:
  title: SAML troubleshooting for CyberArk dashboard
  description: When connecting to your ***CyberArk Dashboard*** entry configured with SAML authentication, you may encounter an issue where your safe selector is empty. We recommend updating {{ en.RDM }} to at least version 2023.2.18 as improvements have been implemented in this version for the SAML authentication mode.
---
{% snippet icon.badgeCaution %}
SAML authentication for CyberArk Privilege Cloud requires {{ en.RDM }} 2023.2.18.0 or later.
{% endsnippet %}

When connecting to your ***CyberArk Dashboard*** entry configured with SAML authentication, you may encounter an issue where your safe selector is empty. We recommend updating {{ en.RDM }} to at least version 2023.2.18 as improvements have been implemented in this version for the SAML authentication mode. Follow the steps below:
1. [Download and install](https://devolutions.net/remote-desktop-manager) {{ en.RDM }} or update it to version 2023.2.18 or later.

{% snippet icon.badgeNotice %}
If you are using a shared data source, we recommend to use a [portable version of {{ en.RDM }}](/rdm/windows/installation/client/portable-usb/) on a local data source to test.
{% endsnippet %}

2. In {{ en.RDM }}, create your ***CyberArk Dashboard*** entry. Make sure to created it from version 2023.2.18 or later and **not** from the previous version.
1. Enter the necessary information. See [CyberArk Dashboard Configuration and Use](/kb/remote-desktop-manager/how-to-articles/cyberark-dashboard-configuration/) for more information.

![CyberArk Dashboard SAML Configuration](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2167.png)

4. Once your entry is created, go to ***File – Settings – Advanced***.
1. Click the link at the bottom that leads to your {{ en.RDM }} configuration files.

![Link to Configuration Files](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2168.png)

6. Open the folder called "WebView2.Cache", then delete the "CyberArk_SAML" folder that is inside.

![Delete "CyberArk_SAML" Folder](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2169.png)

7. Try to connect again to your entry. You may need to refresh or restart {{ en.RDM }} for this solution to work.
