---
eleventyComputed:
  title: Dashboard
  description: The Dashboard displays commands and information related to the selected entry. Its contents depend on the selected entry type.
---
{% tabs %}
{% tabItem "Windows" %}
The ***Dashboard*** displays commands and information related to the selected entry. Its contents depend on the selected entry type.  
![Dashboard for credential entry](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3576.png) 

The different tabs available in the dashboard are the following:  

* ***Actions***: Add special Open actions to dashboard, similar to ***Open Session*** or ***Properties*** in the contextual menu. Configure in ***File – Options – User Interface***. 
* ***Overview*** 
* ***Documentation*** 
* ***Macros/Scripts/Tools*** 
* ***Management Tools***: Configure the Hyper-V, VMware, XenServer Dashboard before using the dashboard. 
* ***Information*** 
* ***Sub Entries*** 
* ***Attachments*** 
* ***Logs*** 
* ***Recordings*** 

{% snippet icon.badgeInfo %} 
The tabs can be hidden if they are not necessary for a user.  

Simply right-click any tab, then select an item to toggle the visibility of its relative tab.  
![!!clip3577](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3577.png) 
{% endsnippet %}
{% endtabItem %}

{% tabItem "macOS" %}
The Dashboard displays commands and information related to the selected entry. The dashboard is context sensitive and its content depends on the type of the selected entry.
![Dashboard for credential entry](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip6010.png)

For more information about the dashboard of a specific type of entry, please consult the following topics:

* [Session](/rdm/mac/user-interface/content-area/dashboard/session/)
* [Information](/rdm/mac/user-interface/content-area/dashboard/information/)
* [Folder](/rdm/mac/user-interface/content-area/dashboard/folder/)
* [Credentials](/rdm/mac/user-interface/content-area/dashboard/credentials/)
{% endtabItem %}
{% endtabs %}