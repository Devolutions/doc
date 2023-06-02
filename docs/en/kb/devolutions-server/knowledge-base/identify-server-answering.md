---
title: Identify the Server Answering on a High Availability Topology
---
The following steps will explain how to define which server is answering when connecting on the {{ en.DVLS }} web page on a High Availability/Load Balancing topology.

1. Open IIS Manager on the server where the {{ en.DVLS }} is hosted.
1. Expand the nodes in the ***Connections*** pane and select the {{ en.DVLS }} web application.  
![!!KB4346.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4346.png)
1. Open the ***HTTP Response Headers***.  
![!!KB4347.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4347.png)
1. Click on ***Add***.. in the ***Actions*** pane to add a new ***HTTP Response Header***.  
![!!KB4348.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4348.png)
1. Enter a ***Name*** and a ***Value*** that will identify the server. Then click on ***OK*** to save this information.  
![!!KB4349.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4349.png)
1. Repeat steps 1 to 5 on each server of your ***High Availability/Load Balancing*** cluster. It is important to set a different value for each server but keeping the same ***Name***.
1. Open your favorite browser.
1. Open the ***Developer Tools*** in the browser. Usually the ***F12*** key will open the ***Developer Tools*** in Google Chrome , Firefox or Microsoft Edge.
1. Browse to your {{ en.DVLS }} web page.
1. Using Firefox , in the ***Network*** tab, you should find the ***Custom HTTP Response Header*** value of the answering server of the cluster.  
![!!KB4350.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4350.png)

## Command Line

```
%systemroot%\system32\inetsrv\APPCMD.EXE set config "Default Web Site" -section:system.webServer/httpProtocol /+"customHeaders.[name='X-Server-Name',value='node1']" /commit:apphost
```