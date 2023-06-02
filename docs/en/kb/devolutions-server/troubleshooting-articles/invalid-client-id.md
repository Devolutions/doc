---
title: The Specified 'client_id' is Invalid
description: The specified 'client_id' is invalid error is displayed when you try to login on the Devolutions Server web page.
keywords:
- client_id
---
The following error is displayed when you try to login on the {{ en.DVLS }} web page.  

**error:invalid_request**  
**error_description:The specified 'client_id' is invalid.**  
**error_uri:https<area>://documentation.openiddict.com/errors/ID2052**  

## Solution

The reason of this issue is the upgrade that has been made with an older {{ en.DVLSCONSOLE }} version. To solve this problem, please go on the {{ en.DVLS }} [download page](https://server.devolutions.net/home/download) to download the {{ en.DVLSCONSOLE }} version that correspond to the {{ en.DVLS }} web application version and install it. Then, install again the {{ en.DVLS }} web application over the current installation with the ***Update*** button in the ***Server*** tab.  

![Devolutions Server Console](https://webdevolutions.azureedge.net/docs/en/kb/KB8062.png) 