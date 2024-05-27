---
eleventyComputed:
  title: Add a proxy in {{ en.DVLS }}
  description: To add a proxy in {{ en.DVLS }}, you need to add command lines to the web.config file.
  keywords:
  - proxy
---
To add a proxy in {{ en.DVLS }}, you need to add a few command lines to the **web.config** file.

1. Locate and open the **web.config** file. Its default location is **C:\inetpub\wwwroot\dvls\web.config**.
1. In the file, locate the `<environmentVariables>` and `</environmentVariables>` tags.
1. Add the following code between them, replacing the values with your information:
```
<environmentVariable name="http_proxy" value="myproxyaddress"/>
<environmentVariable name="https_proxy" value="myproxyaddress"/>
```
{% snippet, "badgeInfo" %}
For more options, you can refer to [Configuring a proxy using environment variables](https://github.com/Azure/azure-sdk-for-net/blob/main/sdk/core/Azure.Core/samples/Configuration.md#configuring-a-proxy-using-environment-variables).
{% endsnippet %}
4. Save and close the file.  
