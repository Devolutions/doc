---
eleventyComputed:
  title: Download Microsoft Edge Chromium
  description: We highly recommend that you download and install the Microsoft Edge WebView2 Runtime, as many of {{ en.RDM }}'s features require it to function.
  keywords:
  -  Microsoft Edge Chromium
  -  WebView2 Runtime
---
We highly recommend that you download and install the Microsoft Edge WebView2 Runtime, as many of {{ en.RDM }}'s features require it to function, such as:
* Onboarding
* Dashboards
* Web browser (ex: Edge embedded)
* SAML authentication in CyberArk
* Reports
* Handbook/Documentation
* Compare prompt (ex: documentation)
* Help prompt
* Change history in available update prompt

Download the [Microsoft Edge WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section). The compatible download link for {{ en.RDM }} is the one under the ***Evergreen Bootstrapper*** section.
![Evergreen Bootstrapper download](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMW2007_2024_1.png)

Once downloaded and installed, restart {{ en.RDM }} for the installation to take effect.

{% snippet icon.badgeHelp %}
If you get an error message indicating that installation has failed due to an existing installation on the current system, you need to force reinstallation of the program by deleting a registry key. Follow the steps in [Microsoft Edge WebView2 Runtime installation troubleshooting](/kb/remote-desktop-manager/troubleshooting-articles/microsoft-edge-webview2-runtime-installation-troubleshooting).
{% endsnippet %}