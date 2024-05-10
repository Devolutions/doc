---
eleventyComputed:
  title: Forticlient
  description: Fortinet removed the feature to inject credentials in FortiClient 5.4 and above. However, they left the feature with FortiSSL.
---
Fortinet removed the feature to inject credentials in FortiClient 5.4 and above. However, they left the feature with FortiSSL.

Company terminology:  

* Fortinet: Name of the company
* Fortigate: Fortinet router
* Forticlient and FortiSSL: Fortinet VPNs

### Solution
The CLI for FortiSSL is not included anymore with the download of FortiClient. You need to [download the tools](https://www.fortinet.com/support/product-downloads) related to the current version of FortiClient.

The **FortiSSLVPNClient.exe** file needs to be saved in the installation folder of FortiClient.

{% snippet icon.badgeInfo %}
You need to have a support plan with Fortinet to download the tools. If you do not have a support plan, try to contact Fortinet directly and ask them to send you the file.
{% endsnippet %}
