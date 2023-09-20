---
eleventyComputed:
  title: Go Offline/Online
---
Toggle the data source [Offline Mode](/rdm/windows/data-sources/offline-mode/).  

Use the offline mode to connect to a local copy of the data source when the remote database is unavailable. This is useful when working from a remote location and the network is unreachable or if there is any kind of connectivity issue. 

{% snippet icon.shieldCaution %} 
There are security considerations to take into account when enabling the offline mode. 
{% endsnippet %}
 

The offline mode availability relies on several settings, refer to [Offline Mode](/rdm/windows/data-sources/offline-mode/).  

The lowest setting (in terms of security) prevails over the others, which may prevent you from using the offline mode. If the ***Go Offline*** button is not available, please consult your administrator.  

The ***Data Source Information*** displays the size of the offline cache file along with the effective modes (disabled, read-only or read/write).  
![Data Source Information - Offline mode](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11278.png) 

Several features are not available in offline mode, such as:  

* Attachments and logs. 
* [User management](/rdm/windows/commands/administration/management/user-management/) (Add/Edit/Delete users). 

