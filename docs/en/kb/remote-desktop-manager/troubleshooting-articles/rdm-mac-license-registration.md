---
eleventyComputed:
  title: RDM {{ en.MAC }} License Registration
---
Issue with {{ en.RDM }} Registration on {{ en.MAC }} &quot;No Enterprise license found&quot;

## Solution

Performing those steps will reset the configuration of {{ en.RDM }} and should allow you to enter your license properly and reconfigure your data source to get access to your data again.  

1. Close {{ en.RDM }}
1. Open ***Finder***
1. Click on ***Go*** menu at the top and select ***Go to Folder***
1. Enter the following path: ***~/Library/Application Support***
1. Open the folder: ***com.devolutions.remotedesktopmanager***
1. Locate and rename the ***RemoteDesktopManager.cfg*** file into ***RemoteDesktopManager.old***
1. Restart {{ en.RDM }}
