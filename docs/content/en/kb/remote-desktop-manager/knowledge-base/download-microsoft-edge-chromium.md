---
eleventyComputed:
  title: Download Microsoft Edge Chromium
  description: When launching an entry in {{ en.RDM }} with Microsoft Edge Chromium it might require you to download the WebView2 Runtime from Microsoft.
  keywords: 
  -  Microsoft Edge Chromium
  -  WebView2 Runtime 
---
{% snippet icon.badgeCaution %}
{{ en.RDM }} will need to be restarted for this download to apply.
{% endsnippet %}

Many features in {{ en.RDM }} use Microsoft's [WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section). Its installation is highly recommended.

The compatible download link for {{ en.RDM }} is the one under the Evergreen Bootstrapper.  
![Evergreen Bootstrapper](https://webdevolutions.azureedge.net/docs/en/kb/KB6021.png)  

Here is a list of features that require ***WebView2 Runtime***:

* Onboarding
* Dashboards
* Web browser (ex: Edge embedded)
* SAML authentication in CyberArk
* Reports
* Handbook/Documentation
* Compare prompt (ex: documentation)
* Help prompt
* Change history in available update prompt
