---
title: Error Uploading Document
---
You get an HTTP 413 error when trying to upload or attach a document to an existing entry.  
![!!KB4337](https://webdevolutions.azureedge.net/docs/en/kb/KB4337.png)

## Steps

1. Open the IIS Manager on the server where {{ en.DVLS }} is hosted.
1. Expand the Tree View and select the {{ en.DVLS }} web application name and open the ***Configuration Editor*** in the ***Management*** section.  
![!!KB4338](https://webdevolutions.azureedge.net/docs/en/kb/KB4338.png)
1. Select the value ***system.webServer/serverRuntime*** in the ***Section*** drop down menu. Then, increase the value of the ***uploadReadAheadSize*** parameter. This value is in bytes so if you want to load a 50MB file, you have to change the value to 51200.  
![!!KB4339](https://webdevolutions.azureedge.net/docs/en/kb/KB4339.png)  

For more information about these settings, you can consult this web page [https://www.iis.net/configreference/system.webserver/serverruntime](https://www.iis.net/configreference/system.webserver/serverruntime)
