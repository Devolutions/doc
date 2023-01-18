---
title: IIS Logging
---
# {{ en.TOPICTITLE }}
Here is the description of desired settings when we troubleshoot a performance/connectivity issue related to the client application.
### IIS Web Site Logging
1. Open IIS Manager and go in the ***Logging*** settings.  
![KB4290.png](/img/en/kb/KB4290.png)
2. Click on ***Select Fields***  
![KB4291.png](/img/en/kb/KB4291.png)
3. We recommend that at the very least the following fields be selected :  
![KB4292.png](/img/en/kb/KB4292.png)
### Application pool recycle
The application pool that is in fact running the instance can be restarted for a multitude of reasons.  It may be useful to know when those recycles occur as well as the reasons. Go in the ***Application pools*** section of the IIS manager , then open the ***Advanced settings*** for your application pool. Enable all of the ***Recycle events*** , it will create a log entry in the ***Windows Event Log***  
![KB4293.png](/img/en/kb/KB4293.png)
