---
eleventyComputed:
  title: Change the listening port of the Recording Server after installation
---
This topic explains how to change the listening port of the recording server after having installed {{ en.DVLS }} with the {{ en.DVLSCONSOLE }}.

## Steps
1. In the {{ en.DVLSCONSOLE }}, go to the ***Companions*** tab.
1. In the ***Recording Server*** section, click on ***Explore***.  
![Explore](https://webdevolutions.azureedge.net/docs/en/kb/KB0062.png)
1. This will open a Windows Explorer window, open the ***collector*** folder.
1. Right-click on **collector.cfg** and open it with an editor.
1. Change the ***<Port></Port>*** value to the desired one.
1. Close the document and save the changes.
1. Log in to the {{ en.DVLS }} web UI as an administrator.
1. Go to ***Administration*** – ***System Settings*** – ***Recording Server***.
1. Change the ***Port*** to match the changes made in step 5.  
![Port](https://webdevolutions.azureedge.net/docs/en/kb/KB0063.png)
1. Go back to {{ en.DVLS }}, find and open the ***Services*** Windows app.
1. Find and select ***Devolutions Recording Collector***, then click on ***Restart the service***.
