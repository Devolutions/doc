---
title: Caching
---
The caching mode will determine how the client will refresh the content of the data source when changes are detected. On large data sources, caching is essential as it increases performance significantly. 

{% snippet icon.badgeInfo %} 
This feature is only available when using an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
If the cache is outdated, press Ctrl+Refresh or Ctrl+F5 to refresh the local cache. This will force the application to retrieve the entire content of the data source to recreate the cache. 
{% endsnippet %}
 
## Settings 

The ***Caching mode*** option can be accessed via ***File – Data Sources – Edit Data Source – Advanced*** in an advanced data source.  
![Caching mode](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3581.png) 

<table>
	<tr>
		<th>
OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Disabled 
		</td>
		<td>
Prevent an offline cache from being used. 
		</td>
	</tr>
	<tr>
		<td>
In-Memory 
		</td>
		<td>
Use the offline cache only for recent changes, but prevent it from writing on the disk (in-memory only). 
		</td>
	</tr>
	<tr>
		<td>
File 
		</td>
		<td>
Use the offline cache only for recent changes. The cache will write on the disk. 
		</td>
	</tr>
</table>

### Location 

The client cache is persisted to disk in **%LocalAppData%\Devolutions\RemoteDesktopManager\[GUID:DataSourceID]**  

There are three engines for the cache:  

* SQLite (offline.db) 
* MCDF (offline.mcdf) 
* MCDF v2.0 (offline.mcdf2) 

If using a version of {{ en.RDM }} prior to 11.2, the default engine will be the SQLite, in that case the database is encrypted using a non-portable computed key hash.  

If using version 11.2 or newer of {{ en.RDM }} the default cache engine will be the Microsoft Compound Document Format (MCDF) files.  

{% snippet icon.shieldNotice %} 
You can enhance the security of the offline file by setting the Enhanced security in ***File – Options – Security – Offline Security.*** 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Depending on the configuration of the Caching mode & the [Offline mode](/rdm/windows/data-sources/offline-mode/) the offline file may still exist since the file servers as a dual purpose caching & offline line support. 
{% endsnippet %}
