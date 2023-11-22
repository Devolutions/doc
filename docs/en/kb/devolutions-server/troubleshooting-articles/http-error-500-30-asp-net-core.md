---
eleventyComputed:
  title: HTTP Error 500.30 - ASP.NET Core app failed to start
  description: Verify that Enable 32 Bit Application is set to False in the {{ en.DVLS }} application pool advanced settings in IIS Manager. 
---
Following the upgrade process, when trying to open the {{ en.DVLS }} web page, the browser display the following error.  
![HTTP Error 500.30 - ASP.NET Core app failed to start](https://webdevolutions.azureedge.net/docs/en/kb/KB8109.png)
### Solution

Verify that ***Enable 32 Bit Application*** is set to ***False*** in the {{ en.DVLS }} application pool advanced settings in ***IIS Manager***. 
![Enable 32 Bit Application is set to False](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6161.png)  
If ***Enable 32 Bit Application*** is already set to false, ensure that the service account designated as the ***Application Pool Identity*** in the ***{{ en.DVLS }} application pool*** has enough rights on the App_Data subfolder in the ***{{ en.DVLS }} web application folder***.

Make sure that the APS.Net Core Hostin Bundle installed on the server where {{ en.DVLS }} is hosted is the [latest version](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-6.0.25-windows-hosting-bundle-installer).

{% snippet icon.badgeInfo %}
Please contact us at [service@devolutions.net](mailto:service@devolutions.net) if the solution do not solve your problem.
{% endsnippet %}  