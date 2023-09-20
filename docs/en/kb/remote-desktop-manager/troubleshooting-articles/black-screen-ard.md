---
  title: Black screen with an ARD session
---
You get a black screen appear after connecting with an Apple Remote Desktop session entry.  

## Solution

Activating logging on the mac may help our support team or the engineering department resolving this issue. In order to activate the logging server side, execute the following command in Terminal:  

***sudo defaults write /Library/Preferences/com.apple.RemoteManagement ARDCollectLogs -bool YES***.  

Once this is done, you can try to connect normally using Remote Dekstop Manager. The log will then be located in ***/tmp*** folder on the Mac computer. Simply send them to [service@devolutions.net](mailto:service@devolutions.net) with details of your issue. 

To turn off logging, execute this command: 

***sudo defaults write /Library/Preferences/com.apple.RemoteManagement ARDCollectLogs -bool NOTBD***
