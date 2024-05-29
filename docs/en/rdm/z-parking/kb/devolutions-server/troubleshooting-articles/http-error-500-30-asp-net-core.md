---
eleventyComputed:
  title: HTTP Error 500.30 - ASP.NET Core app failed to start
  description: Following the upgrade process, when trying to open the {{ en.DVLS }} web page, the browser displays HTTP Error 500.30 - ASP.NET Core app failed to start.
---
Following the upgrade process, when trying to open the {{ en.DVLS }} web page, the browser displays ***HTTP Error 500.30 - ASP.NET Core app failed to start***.
![HTTP Error 500.30 - ASP.NET Core app failed to start](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8109.png)

### Solution

Verify that ***Enable 32-Bit Applications*** is set to ***False*** in the {{ en.DVLS }} application pool's advanced settings in IIS Manager.
![Enable 32-Bit Applications set to False](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6161.png)
If ***Enable 32-Bit Applications*** is already set to false, ensure that the service account designated as the ***Application Pool Identity*** in the ***{{ en.DVLS }} application pool*** has enough rights on the App_Data subfolder in the ***{{ en.DVLS }} web application folder***.

Make sure that the APS.Net Core Hostin Bundle installed on the server where {{ en.DVLS }} is hosted is the [latest version](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-6.0.25-windows-hosting-bundle-installer).

{% snippet, "badgeHelp" %}
Please contact our support technicians at [service@devolutions.net](mailto:service@devolutions.net) if this solution does not solve your problem.
{% endsnippet %}