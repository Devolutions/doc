---
title: Debugging
---
When an issue occurs, while using {{ en.RDM }} , the support personnel may ask you to turn on debugging and send the information back.  
{% snippet icon.badgeInfo %}
Any debug level other than zero will slow down the application and write a lot of information in the application logs. As soon as you have completed the diagnostics, you should revert back the debug level to zero.
{% endsnippet %}  

The Ad hoc debugging method is sufficient in most cases, use the in-depth debugging method whenever you need to diagnose the startup or the initial connection.
## Solution
### Method AD HOC Debugging
1. In RDM, open ***Help – Profiler*** , move the window aside to clear the main window.  
![!!KB2022.png](/img/en/kb/KB2022.png)
1. In the ***Debug Only*** tab, click on the ellipsis button and activate the proper debug categories.
1. In {{ en.RDM }} , perform the action that is under investigation.  

For timing session load times, please press CTRL-F5 to invalidate the cache and perform a full refresh. You should see debug information appear in the profiler window.  

4. Click on ***Send trace to Support***
1. In the following dialog, ensure you specify enough information to link the report to the appropriate ticket.  

If the process was started from the forum include your forum username.
### Method In-Depth Debugging
1. In {{ en.RDM }} open ***File – Options – Advanced***
1. Click on the ***Debug level*** ellipsis button and activate the proper debug categories.
1. In the ***Information*** section, you will see a hyperlink to your configuration folder, press on it to have a file explorer window opened in that folder.  
![!!KB2023.png](/img/en/kb/KB2023.png)
1. Close {{ en.RDM }}  

As a preparatory phase, it would be best to clear existing logs to limit the scope of what will need to be analyzed.  

5. Delete or rename files named RemoteDesktopManager.log, RemoteDesktopManager.log.db and RemoteDesktopManager.debug from your configuration folder.
1. Start {{ en.RDM }}
1. Perform the action that is under investigation.
1. Open ***File – Options – Advanced*** , set the ***Debug level*** to zero.
1. Close {{ en.RDM }}
1. Package the *.log, *.log.db and *.debug files from your configuration folder and send them to us.
