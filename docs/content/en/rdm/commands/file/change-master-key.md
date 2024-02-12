---
eleventyComputed:
  title: Manage password
---
{% tabs %}
{% tabItem "Windows" %}
Use ***File – Change Master Key*** to encrypt the data source.  

The master key prevents unauthorized users to access the data source without knowing the master key. It is highly recommended to apply a master key to the data source if you are using {{ en.RDM }} in a portable environment (i.e., USB Flash Drive, USB Hard Drive).  

A master key can be used with the following data sources:  

* {{ en.DOD }} 
* Dropbox 
* Google Drive 
* XML 
{% snippet icon.badgeInfo %} 
Since version 14.0.4.0, the user is automatically prompted to add a master key when connecting to one of the above mentioned data sources for the first time. The master key is completely optional (yet highly recommended). 
{% endsnippet %}
 
![Change Master Key](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10079.png)
{% endtabItem %}

{% tabItem "macOS" %}
You can apply a Master Key to encrypt the data files of the following data source:  

* [XML](DataSource_Xml) 
* [Dropbox](DataSource_Dropbox) 

![Master Key ](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10099.png) 

It is generally recommended to apply a Master Key to your XML or Dropbox Data Sources as it adds another layer of security protecting your Remote Sessions.  

The use of a Master Key function will stop unauthorized users from being able to easily see/access the stored Sessions within your Data Source.  

{% snippet icon.badgeCaution %} 
If you ever lose your master key it will be impossible for us to recover your data. Please ensure that you remember or backup your master key in a safe place. 
{% endsnippet %}
{% endtabItem %}
{% endtabs %}