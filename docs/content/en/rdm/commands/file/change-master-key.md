---
eleventyComputed:
  title: Change master key
---
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
