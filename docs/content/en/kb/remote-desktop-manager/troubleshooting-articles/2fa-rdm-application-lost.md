---
eleventyComputed:
  title: Lost the 2FA set on the {{ en.RDM }} application
---
This solution applies if you have set a 2FA or an Application password on your {{ en.RDM }} application in ***File – Settings – Security*** and if you have lost your phone or locked yourself out of the application.
## Solution
1. Close {{ en.RDM }}.
1. Find your **RemoteDesktopManager.cfg** configuration file and rename it "**RemoteDesktopManager.old**". 
{% snippet, "badgeInfo" %}
If the application was installed by default, you can locate the file:  

For the Team Edition: **%localappdata%\Devolutions\RemoteDesktopManager**  

For the Free Edition: **%localappdata%\Devolutions\RemoteDesktopManager\Free**  
{% endsnippet %}  

3. Launch {{ en.RDM }}.
