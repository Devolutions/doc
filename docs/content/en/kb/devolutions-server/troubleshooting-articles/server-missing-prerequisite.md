---
eleventyComputed:
  title: HTTP Error 500.19 - Internal Server Error
  description: When trying to load the {{ en.DVLS }} web page, HTTP Error 500.19 - Internal Server Error is displayed in the browser.
---
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
