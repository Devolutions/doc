---
title: Force quit the {{ en.RDM }} application
---
Here are some steps to follow in the event {{ en.RDM }} crashes and you need to force quit the application.
### Solution
1. Open your ***Windows Event Viewer***
2. Click ***Windows Logs - Application*** and validate there are no issues linked with the crash.
3. Launch ***Task Manager***
4. In the ***Processes*** tab, locate and ***End tasks*** on all {{ en.RDM }} applications that might be running.
5. Launch {{ en.RDM }}  
{% snippet icon.badgeHelp %}
In the event {{ en.RDM }} still crashes at relaunch, try a [portable {{ en.RDM }} installation](/kb/remote-desktop-manager/how-to-articles/portable-rdm-installation/)
{% endsnippet %}
