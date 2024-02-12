---
eleventyComputed:
  title: Lock a data source
---
{% tabs %}
{% tabItem "Windows" %}
To protect sensitive data in your data source configuration (e.g. server URL or credentials), you may wish to lock the data source configuration before you deploy it to your users. You can do it by using the ***Lock/Unlock*** button from the toolbar. 

## Settings 

![Lock Data Source toolbar](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10395.png) 

The locked data source will require a password. The password must be specify when the lock is applied. Use the same password to unlock it or to modify the data source configuration.  
![Lock Data Source dialog](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10396.png) 

{% snippet icon.badgeWarning %} 
There is no way of unlocking the data source if the password is lost or forgotten. In such an event, you will need to configure a new data source. However the content of the database will not be lost. 
{% endsnippet %}
{% endtabItem %}

{% tabItem "macOS" %}
To protect sensitive data in your data source configuration (e.g. server URL or credentials), you may wish to lock the data source configuration before you deploy it to your users. You can do it by using the Lock/Unlock button from the toolbar. 

## Settings 

![Data Sources - Lock data source](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip5070.png) 

The locked data source will require a password to be unlocked which must be specified when the lock is applied. Use the same password to unlock it to modify the data source configuration.  
![Lock data source dialog](https://webdevolutions.azureedge.net/docs/en/rdm/mac/2014-05-29_13-46-00.png) 

{% snippet icon.badgeWarning %} 
There is NO way of unlocking the data source if the password is lost or forgotten. In such an event, you will need to configure a new data source. However the content of the database will not be lost. 
{% endsnippet %}
{% endtabItem %}
{% endtabs %}