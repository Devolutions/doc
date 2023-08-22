---
eleventyComputed:
  title: Red X in the {{ en.NPANE }} or credential List
---
{% youtube '6MVSl2zqD-o' %}  

There is a red "X" in the ***{{ en.NPANE }}*** or in the credential list.
## Solution
There are a few things you can try to get rid of the red X.  

First, try going to the Window tab and click Reset Layout  

Sometimes that can fix some Red X issues.  

If that does not work, you can try to close {{ en.RDM }}, then navigate to %localappdata% -> Devolutions -> RemoteDesktopManager and delete every file with thelyt extension.  

If neither of those methods does the trick, you will have to move the RemoteDesktopManager folder from localappdata to your desktop, then uninstall {{ en.RDM }}, reboot your computer and reinstall {{ en.RDM }}. Once you reopen {{ en.RDM }}, the red X should be gone.
