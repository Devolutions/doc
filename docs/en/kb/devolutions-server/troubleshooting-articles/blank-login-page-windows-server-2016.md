---
title: Blank Login Page on a Windows Server 2016
---
When you open the web page of the {{ en.DPS }} instance that is hosted on a Windows Server 2016, **the web page is blank**. 

## Steps

1. Open the **IIS Manager** on the server. 
2. Expand the root and select ***Application Pools***.  
![!!KB4295.png](/img/en/kb/KB4295.png) 
1. Select the {{ en.DPS }} application pool and click on ***Advanced Settings***... in the ***Actions*** pane on the right.  
![!!KB4296.png](/img/en/kb/KB4296.png) 
1. Set the ***Enable 32-Bit Applications*** to the value ***True***.  
![!!KB4297.png](/img/en/kb/KB4297.png) 