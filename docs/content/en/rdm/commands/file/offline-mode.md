---
eleventyComputed:
  title: Go offline/online
---
{% tabs %}
{% tabItem "Windows" %}
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
{% endtabItem %}

{% tabItem "macOS" %}
Go offline connects to a local copy of the data source when the data source is not available. It can be used when a user is working from a disconnected network or when there is any kind of connectivity issues with the data source. 

{% snippet icon.shieldinfo %} 
There are settings in both the data source and the user account that may prevent you from using the Offline Mode. Ask you administrator if the menu is not visible. 
{% endsnippet %}
 
{% snippet icon.shieldCaution %} 
There are security considerations to take into account when enabling the Offline Mode. 
{% endsnippet %}
 
{{ en.RDM }} will prompt for offline mode when the application is unable to reach the data source.  

You can manually activate the offline mode by using the menu ***File - Go Offline***. When the connection is back online use the menu ***File - Go Online*** or the Refresh icon to reconnect to the data source.  

Some options will not be available in the Offline mode:  

* Documents. 
* Attachments and logs. 
* [User management](/rdm/mac/commands/administration/user-management/) (Add/Edit/Delete users). 

## Offline Mode 

In the Data Source tab of the My Data Source Information the offline mode displays the size of the offline file along with the effective mode (disabled, read-only or writable). Hover the mouse over the offline mode to get the full offline mode display.  
![My Data Source Information - Offline Mode](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10303.png)
{% endtabItem %}
{% endtabs %}