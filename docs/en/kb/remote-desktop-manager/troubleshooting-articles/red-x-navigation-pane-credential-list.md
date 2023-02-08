---
title: Red X in Navigation Pane or Credential List
---
{% youtube '6MVSl2zqD-o' %}  

There is a huge Red &quot;X&quot; in the Navigation Pane or in the Credential List
## Solution
There are a few things you can try to get rid of the red X.  

First, try going to the Window tab and click Reset Layout  

Sometimes that can fix some Red X issues.  

If that doesn’t work, you can try to close RDM, then navigate to %localappdata% -&gt; Devolutions -&gt; RemoteDesktopManager and delete every file with thelyt extension.  

If neither of those methods does the trick, you will have to move the RemoteDesktopManager folder from localappdata to your desktop, then uninstall RDM, reboot your computer and reinstall RDM. Once you reopen RDM, the red X should be gone.
