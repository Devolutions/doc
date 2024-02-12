---
eleventyComputed:
  title: Setting overrides
---
{% tabs %}
{% tabItem "Windows" %}
***Specific Settings*** are used to override the properties of an entry. Several settings can be overridden, such as the credentials or the display mode. There are two types of ***Specific Settings***: user specific settings and local machine specific settings.  

* ***User Specific Settings*** override an entry's properties for a single user. 
* ***Local Specific Settings*** override an entry's properties for all users of a specific device. 

{% snippet icon.badgeInfo %} 
This feature is only available when using an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). A setting on the data source allows usage of ***Specific Settings***. Contact your administrator if the menu is grayed out. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %}
***User Specific Settings*** are shared between {{ en.RDM }}, {{ en.DVLS }} and {{ en.DHUB }}.
{% endsnippet %}  

{% snippet icon.badgeInfo %} 
If both ***User Specific Settings*** and ***Local Specific Settings*** are defined on the same entry, Local Specific Settings have the priority. 
{% endsnippet %}

The options are available in the ribbon. Select ***Edit*** – ***Setting Overrides*** – ***User Specific Settings*** or ***Local Specific Settings***. 

![Edit – Setting Overrides – User Specific Settings or Local Specific Settings](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6166.png) 

These can also be accessed by using the right-click on an entry and going to ***Edit – User/Local Specific Settings***. 
 
![Context menu – Edit – User and Local Specific Settings](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10214.png) 

### Specific settings indicator 

An indicator icon is displayed in the dashboard when an entry with ***Specific Settings*** is selected. Click on the icon to open the ***Specific Settings*** dialog.  
![Specific Settings indicator](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6167.png) 

## Workflow 

In the majority of cases, editing the ***Specific Settings*** displays the following dialog:  
![User Specific Settings](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin6168.png) 
{% snippet icon.badgeInfo %} 
***Specific settings*** are context sensitive, and several settings might not be available for some entry types. 
{% endsnippet %}
{% endtabItem %}

{% tabItem "macOS" %}
Setting Overrides options are used to override the user specific settings or the local specific settings of a session.

## Settings
![Edit – Setting Overrides](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10337.png)

| OPTION                               | DESCRIPTION                                                                                  |
|--------------------------------------|----------------------------------------------------------------------------------------------|
| Edit Entry (User Specific Settings)  | Allows session setting override for a user. For more information see User Specific Settings. |
| Edit Entry (Local Specific Settings) | Allow session setting override for the local machine. For more information see Local Machine Specific Settings. |
{% endtabItem %}
{% endtabs %}