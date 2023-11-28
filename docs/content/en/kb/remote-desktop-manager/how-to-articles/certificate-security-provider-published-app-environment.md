---
eleventyComputed:
  title: Certificate security provider in a published app environment
---
When configuring a Certificate Security Provider in a published app environment (Citrix, RemoteApp, XenApp) as a Security Provider, the user who will run {{ en.RDM }} in the RemoteApp environment (Citrix) will require a Read permission on the certificate. If the Read permission is not correctly set, {{ en.RDM }} will generate the CryptographicException - Keyset does not exist error dialog.  
![!!KB4208](https://webdevolutions.azureedge.net/docs/en/kb/KB4208.png)

## Step-by-step guide

These steps require that the certificate has been successfully installed on the machine on which {{ en.RDM }} will run.

1. Open ***Local Machine Certificate Manager*** on the machine (certlm.msc).
1. Locate the ***Certificates***.
1. Right click on ***Certificates - All Tasks - Manage Private Keys***.  
![!!KB4859](https://webdevolutions.azureedge.net/docs/en/kb/KB4859.png)
1. Grant the ***Read permission*** over the certificate file to the proper group(s) or user(s).

{% snippet icon.badgeInfo %}
The following Microsoft blog article provides more method on how to find the certificate file: [https://docs.microsoft.com/en-us/archive/blogs/dsnotes/service-failure-with-cryptographicexception-keyset-does-not-exist](https://docs.microsoft.com/en-us/archive/blogs/dsnotes/service-failure-with-cryptographicexception-keyset-does-not-exist)
{% endsnippet %}
