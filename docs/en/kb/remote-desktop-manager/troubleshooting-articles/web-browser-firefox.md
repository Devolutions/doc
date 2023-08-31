---
title: Web browser Firefox
---
Firefox in embedded mode does not work in the application.  
{% snippet icon.badgeCaution %}
The Firefox web browser is deprecated in embedded mode.
{% endsnippet %}  

{{ en.RDM }} starts Firefox in a separate application (**Embedded32.exe**) and then re-parents the application inside {{ en.RDM }}  

Firefox does not work when the Team Viewer QuickConnect button is present in the title bar.
![!!KB4101](https://webdevolutions.azureedge.net/docs/en/kb/KB4101.png)

## Solution
To resolve this issue, you need to disable the ***QuickConnect*** button in Team Viewer by unchecking the option in ***Extra – Options – Advanced – Show advanced options – QuickConnect button – Configure – Show QuickConnect*** button.
