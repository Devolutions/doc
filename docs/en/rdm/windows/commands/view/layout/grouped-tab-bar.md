---
title: Grouped Tab Bar
---
{{ en.RDM }} allows you to run multiple sessions at once using its embedded/tabbed display mode, which is especially useful if you are using multiple remote control technologies at the same time. Since all of your sessions are running in tabs within the same tool used to launch them, it eliminates the need to dig through your task bar to locate the session you are interested in.  

But when you reach a certain number of running sessions, it may become difficult to identify them using only their name. To improve user experience, the ***Grouped Tab Bar*** feature was created to filter the tab pages.  

To enable the ***Grouped Tab Bar***, navigate to ***View – Layout*** in the ribbon, then select ***Grouped Tab Bar***.  
![Grouped Tab Bar Button](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2045.png) 

{% snippet icon.badgeInfo %} 
The ***Grouped Tab Bar*** will only appear if a session that is part of a ***Tab group*** (other than the ***All*** tab) is active. To make it show at all times, check the ***Always show grouped tab bar*** box in ***File – Options – User Interface – Advanced***. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
The ***Tab Groups*** feature in the ***View*** section lets you see a tree view of the various tab groups. For more information, visit the [***View***](/rdm/windows/commands/view/view/) topic. 
{% endsnippet %}
 
## Setting up a Tab group 

The ***Tab group*** settings are found in the ***User Interface*** side menu of your session properties. The ***Properties*** option can be found when right-clicking on an entry.  
![Properties – Common – User Interface – Tab Page](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2041.png) 

The ***Tab group*** field lets you choose between a custom or inherited tab group. If you want to specify a custom name, you can simply type a name or choose an already existing one in the ***Tab group name*** field to create a tab group when launching an instance, then click on ***OK***.  

When the ***All*** group tab is selected, it performs no filtering. All running sessions are visible in this tab.  
![All Groups Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2043.png) 

When a different group tab is selected, it hides all the sessions that do not match with the filter. In the example below, only two sessions appear in the custom Windjammer group tab.  
![Custom Group Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2044.png) 
