---
eleventyComputed:
  title: Web browser Firefox executable path
---
Launching Firefox in embedded mode prompts for an executable path in {{ en.RDM }}.
{% snippet, "badgeCaution" %}
The Firefox web browser is deprecated in embedded mode.
{% endsnippet %}

## Solution
1. To workaround this issue, you need to download thezip [Firefox embedded package](https://cdn.devolutions.net/download/Firefox/FirefoxRunner2021.1.0.zip)
1. Extract the content in a folder on your computer.
1. In {{ en.RDM }} go to ***File – Settings – Paths – Configure Installation Path***.
1. Find the ***Firefox Xul Runner Installation Path***.
![!!KB4950](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4950.png)
1. Click on the ellipsis box to select the path where thezip file was extracted.
1. Click ***OK***.
