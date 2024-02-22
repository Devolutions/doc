---
eleventyComputed:
  title: Tab group bar
  description: When you reach a certain number of running sessions, improve your user experience with the Tab group bar feature to filter the tab pages.
---
{% tabs %}
{% tabItem "Windows" %}
{{ en.RDM }} allows you to run multiple sessions at once using its embedded/tabbed display mode, which is especially useful if you are using multiple remote control technologies at the same time. Since all of your sessions are running in tabs within the same tool used to launch them, it eliminates the need to dig through your task bar to locate the session you are interested in.  

But when you reach a certain number of running sessions, it may become difficult to identify them using only their name. To improve user experience, the ***Tab Group Bar*** feature was created to filter the tab pages.  

To enable the ***Tab Group Bar***, navigate to ***View – Tabs*** in the ribbon, then select ***Tab Group Bar***.  
![Tab Group Bar Button](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6211.png) 

{% snippet icon.badgeInfo %} 
The ***Tab Group Bar*** will only appear if a session that is part of a ***Tab group*** (other than the ***All*** tab) is active. To make it show at all times, check the ***Always show Tab Group Bar*** box in ***File – Options – User Interface – Advanced***. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
The ***Tab Groups*** feature in the ***View*** section lets you see a tree view of the various tab groups. For more information, visit [***View***](/rdm/windows/commands/view/view/). 
{% endsnippet %}
 
## Setting up a Tab group 

The ***Tab group*** settings are found in the ***User Interface*** side menu of your session properties. The ***Properties*** option can be found when right-clicking on an entry.  
![Properties – Common – User Interface – Tab Page](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2041.png) 

The ***Tab group*** field lets you choose between a custom or inherited tab group. If you want to specify a custom name, you can simply type a name or choose an already existing one in the ***Tab group name*** field to create a tab group when launching an instance, then click on ***OK***.  

When the ***All*** group tab is selected, it performs no filtering. All running sessions are visible in this tab.  
![All Groups Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2043.png) 

When a different group tab is selected, it hides all the sessions that do not match with the filter. In the example below, only two sessions appear in the custom Windjammer group tab.  
![Custom Group Tab](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2044.png)
{% endtabItem %}
{% endtabs %}