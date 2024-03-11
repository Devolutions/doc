---
eleventyComputed:
  title: HTTP Error 500.31 - Failed to load ASP.NET Core runtime
  description: When updating {{ en.DVLS }} to version 2024.1 or later, the web UI displays HTTP Error 500.31 - Failed to load ASP.NET Core runtime.
---
When updating {{ en.DVLS }} to version 2024.1 or later, the web UI displays ***HTTP Error 500.31 - Failed to load ASP.NET Core runtime***. The reason is that the ASP.Net Core version 8.0.x is not installed on the server where {{ en.DVLS }} is hosted.
![HTTP Error 500.31 - Failed to load ASP.NET Core runtime](https://cdnweb.devolutions.net/docs/en/kb/CLOUD2014_2024_1.png)

### Solution

1. Update the {{ en.DVLSCONSOLE }} to version 2024.1.x or later.
1. Download the [ASP.Net Core Module 8.0.x hosting bundle](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).
1. Install it on the server where {{ en.DVLS }} is hosted.

{% snippet icon.badgeHelp %}
Please contact our support technicians at [service@devolutions.net](mailto:service@devolutions.net) if this solution does not solve your problem.
{% endsnippet %}