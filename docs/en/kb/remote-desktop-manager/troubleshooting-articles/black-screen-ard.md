---
title: Black Screen with ARD
---
Black screen appear after connecting with Apple Remote Desktop  

## Solution

Activating logging on the mac may help the Devolutions Support team or the Engineering department resolving this issue. In order to activate the logging server side, execute the following command in Terminal :  

***sudo defaults write /Library/Preferences/com.apple.RemoteManagement ARDCollectLogs -bool YES***  

Once this is done, you can try to connect normally using Remote Dekstop Manager. The log will then be located in ***/tmp*** folder on the Mac computer. &#160;Simply send them to [service@devolutions.net](mailto:service@devolutions.net) with details of your issue.  

To turn off logging, execute this command:  

***sudo defaults write /Library/Preferences/com.apple.RemoteManagement ARDCollectLogs -bool NOTBD***
