---
title: The Remote Server Returned an Error (405) Method Not Allowed
---
# {{ en.TOPICTITLE }}
You get the following error message dialog when you try to create or modify an entry.  
![KB4285.png](/img/en/kb/KB4285.png)
## Steps
{% snippet icon.badgeCaution %}
Please note that you will have to restart the server after removing the WebDAV Publishing role to complete the procedure.
{% endsnippet %}  

1. On the server where the {{ en.DPS }} instance is hosted, open the Server Manager application.
1. Then, open the ***Remove Roles and Features*** in the ***Manage*** menu.  
![KB4286.png](/img/en/kb/KB4286.png)
1. In the ***Server Roles*** , uncheck the ***WebDAV Publishing role***  
![KB4287.png](/img/en/kb/KB4287.png)
1. Click on the ***Remove*** button to uninstall the WebDAV Publishing role from the server.  
![KB4288.png](/img/en/kb/KB4288.png)
