---
eleventyComputed:
  title: HTTP Error 500
  description: There are many different HTTP Error 500 types, each with their own solution(s). This topic deals with a few of them.
---

There are many different HTTP Error 500 types, each with their own solution(s). This topic contains a few of them. This topic deals with a few of them:

- [500.19 – Internal Server Error](500.19---internal-server-error)
- [500.30 – Enable the Database ***TrustServerCertificate*** option](500.30---enable-the-data-source-trustservercertificate-option)
- [500.30 – Core 6.0 Runtime (v6.0.7)](500.30---core-6.0-runtime-6.0.7)
- [500.30 – ASP.NET Core app failed to start](500.30---asp.net-core-app-failed-to-start)
- [500.37 – ASP.NET Core app failed to start within startup time limit](500.37---asp.net-core-app-failed-to-start-within-startup-time-limit)

## 500.19 - Internal Server Error

When trying to load the {{ en.DVLS }} web page, the following ***HTTP Error 500.19 - Internal Server Error*** is displayed in the browser:
![HTTP Error 500.19 - Internal Server Error](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8102.png)

This error is due to the absence of the IIS ASP.NET Core Module (ANCM) and/or the IIS Rewrite Module:
![ISS Features Diagnostic](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8103.png)

## Solution

1. From the {{ en.DVLSCONSOLE }}, edit the instance.
1. Select the ***IIS*** tab.
1. Click on ***IIS Diagnostic***.
1. Click on ***Install Prerequisites***.
![Install Prerequisites](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8104.png)

{% snippet, "badgeCaution" %}
If running the PowerShell script from the {{ en.DVLSCONSOLE }} is blocked due to restrictions on the system, the script is located in the ***Scripts*** folder of the {{ en.DVLSCONSOLE }} installation folder.
{% endsnippet %}

## 500.30 – Enable the data source ***TrustServerCertificate*** option

Most of the time, {{ en.DVLS }} returns this 500.30 error when a SQL server (Azure or local) is configured with a self-signed certificate not found in the certificate store.

### Solution

In ***File*** – ***Data sources***, choose the data source experiencing the 500.30 error. Then go to ***Edit data source*** – ***Advanced*** and set the ***TrustServerCertificate*** to **true**.

![Set TrustServerCertificate to true](https://cdnweb.devolutions.net/docs/RDMW4080_2024_2.png)

## 500.30 – Core 6.0 Runtime (v6.0.6)

When updating {{ en.DVLS }} to version 2024.1 or later, the web UI displays ***HTTP Error 500.31 - Failed to load ASP.NET Core runtime***. The reason is that the ASP.Net Core version 8.0.x is not installed on the server where {{ en.DVLS }} is hosted.
![HTTP Error 500.31 - Failed to load ASP.NET Core runtime](https://cdnweb.devolutions.net/docs/INTERFACE2026.png)

### Solution

1. Update the {{ en.DVLSCONSOLE }} to version 2024.1.x or later.
1. Download the [ASP.Net Core Module 8.0.x hosting bundle](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).
1. Install it on the server where {{ en.DVLS }} is hosted.

## 500.30 – ASP.NET Core app failed to start

Following the upgrade process, when trying to open the {{ en.DVLS }} web page, the browser displays ***HTTP Error 500.30 - ASP.NET Core app failed to start***.
![HTTP Error 500.30 - ASP.NET Core app failed to start](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8109.png)

### Solution

Verify that ***Enable 32-Bit Applications*** is set to ***False*** in the {{ en.DVLS }} application pool's ***Advanced Settings*** in IIS Manager.
![Enable 32-Bit Applications set to False](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6161.png)

If ***Enable 32-Bit Applications*** is already set to false, ensure that the service account designated as the ***Application Pool Identity*** in the ***{{ en.DVLS }} application pool*** has enough rights on the App_Data subfolder in the ***{{ en.DVLS }} web application folder***.

Make sure that the APS.Net Core Hosting Bundle installed on the server where {{ en.DVLS }} is hosted is the [latest version](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-6.0.25-windows-hosting-bundle-installer).

{% snippet, "badgeHelp" %}
Contact our support technicians at [service@devolutions.net](mailto:service@devolutions.net) if these solutions do not solve your problem.
{% endsnippet %}