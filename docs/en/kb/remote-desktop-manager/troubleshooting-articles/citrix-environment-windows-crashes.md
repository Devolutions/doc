---
title: Citrix environment Windows crash
---
When an RDS server prompts for credentials, it uses adll and if we prompt it too many times by many users, Windows will crash.
## Solution
All the sessions must be configured to not use the Windows prompt. In the entries properties:
1. Change the Credentials type to ***Default***.
1. Check the box ***Always ask password***.  

If you have many entries that needs to be changed, follow these steps. A backup of your database is recommended.

1. Select every RDP session that you need to edit (an [Advanced search](/rdm/windows/commands/view/panels/search/advanced/) can be used).
1. Right click on them and select ***Edit - Edit (Special Actions)***.  
![!!KB4628.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4628.png)
1. Select ***Custom Powershell Command***.  
![!!KB4629.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4629.png)
1. And in the next windows type the text below:  

`$connection.PromptCredentials = $true;`  
`$RDM.Save();`
1. Click ***OK*** Then every session will be configured with the prompt for credentials.
