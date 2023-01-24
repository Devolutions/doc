---
title: HDPI Scaling Issues
---
# {{ en.TOPICTITLE }}
4k screens make {{ en.RDM }} unusable.  
{% snippet icon.badgeHelp %}
For DPI issues with RDP session in {{ en.RDM }} , consult this topic: [High DPI Issue](/kb/remote-desktop-manager/troubleshooting-articles/high-dpi-issue/)
{% endsnippet %}  

## Solution
### Method 1
1. In {{ en.RDM }} , go to ***File – Options – User Interface*** and change the ***Display scaling*** to ***DPI unaware***  
![KB4994.png](/img/en/kb/KB4994.png)  

If you cannot see the setting because of display issues, you can add the line in your config files directly.  
{% snippet icon.badgeHelp %}
To locate your config file refer to [Configuration File Location](/kb/remote-desktop-manager/knowledge-base/locating-configuration-file/)
{% endsnippet %}  

2. Once you have found the right folder, open RemoteDesktopManager.cfg with your preferred text editor.
1. Under the line &lt;CreationDate&gt;XXXX-XX-XXT00:00:00-00:00&lt;/CreationDate&gt; change to None the &lt;DPIAwareness&gt;Default&lt;/DPIAwareness&gt;
1. Restart {{ en.RDM }}
### Method 2
1. Close {{ en.RDM }}
1. Right-click on your {{ en.RDM }} icon.
1. Go to ***Properties***
1. In the ***Compatibility*** tab, click ***Change high DPI settings***  
![KB4995.png](/img/en/kb/KB4995.png)
1. In the ***High DPI scaling override*** section, check ***Override high DPI scaling behavior*** and click OK.
![KB4996.png](/img/en/kb/KB4996.png)  
{% snippet icon.badgeInfo %}
When applying this change, you must log off and log back in with your user for changes to take effect.
{% endsnippet %}
