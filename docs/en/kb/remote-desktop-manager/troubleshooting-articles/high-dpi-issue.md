---
title: High DPI Issue
description: There are multiple problems that can be caused by high DPI in RDP sessions.
keywords:
- DPI
- Higher resolution
- Dots per inch
---
There are multiple problems that can be caused by high DPI in RDP sessions, the most commons are the following: 
* RDP connections are tiny 
* RDP connections are big 
* RDP connections always have a scroll bar 
* RDM is blurry 
* 4K resolution issues 
## Solution 
There are multiple methods on how to solve these issues. 
### Method 1 
1. In {{ en.RDM }}, go to ***File – Options – User Interface*** and change the ***Display scaling*** to ***DPI unaware***. 
![Display scaling](/img/en/kb/KB4994.png) 

If you cannot see the setting because of display issues, you can add the line in your config files directly. 
{% snippet icon.badgeHelp %} 
To locate your config file refer to [Configuration File Location](/kb/remote-desktop-manager/knowledge-base/locating-configuration-file/). 
{% endsnippet %}
 
2. Once you have found the right folder, open RemoteDesktopManager.cfg with your preferred text editor. 
3. Under the line <CreationDate>XXXX-XX-XXT00:00:00-00:00</CreationDate> change to None the <DPIAwareness>Default</DPIAwareness> and save. 
4. Restart {{ en.RDM }}. 
### Method 2 
1. Close {{ en.RDM }}. 
1. Right-click on your {{ en.RDM }} icon. 
1. Go to ***Properties***. 
1. In the ***Compatibility*** tab, click ***Change high DPI settings***. 
![Change high DPI settings](/img/en/kb/KB4995.png) 
1. In the ***High DPI scaling override*** section, check ***Override high DPI scaling behavior*** and click OK. 
![High DPI scaling override](/img/en/kb/KB4996.png) 
{% snippet icon.badgeInfo %} 
When applying this change, you must log off and log back in with your user for changes to take effect. 
{% endsnippet %}
 
### Method 3 
In ***File – Options – Type – Remote Desktop – Advanced***, uncheck the ***Disable RDP scale factor (HDPI)*** option. 
![Disable RDP scale factor (HDPI)](/img/en/kb/KB4997.png) 

