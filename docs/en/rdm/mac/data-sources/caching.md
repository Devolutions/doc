---
title: Caching
---
The caching mode will determine how the client will re-load entries when changes are detected. On large data sources caching is a must and will increase performance significantly. 

{% snippet icon.badgeInfo %} 
This feature is only available when using an [Advanced Data Source](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
If the cache is outdated, press <kbd>Ctrl</kbd>+<kbd>F5</kbd> to refresh the local cache. This will force reading from the database to recreate the cache. 
{% endsnippet %}
 
## Settings 

The Caching ***mode*** option can be accessed via ***File – Data Sources – Edit Data Source – Advanced*** in an advanced data source.  
![Caching mode](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10591.png)

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

### Storage 

You can find the configuration file by doing a right click on your Finder - Go to Folder and in the Folder dialog type  ~/Library.  

You can then follow the path Application Support/com.devolutions.remotedesktopmanager select the pertaining database where you will find the offline.db file.  

The file is a SQLite database encrypted using a non-portable computed key hash.  

{% snippet icon.shieldNotice %} 
You can enhance the security of the offline file by setting the Enhanced security in the Data Sources Preferences – [Offline Security](/rdm/mac/commands/file/preferences/security/). 
{% endsnippet %}
 
{% snippet icon.badgeHelp %} 
Depending on the configuration of the Caching Mode and of the Offline Mode the Offline.db file may still exist since the file has as a dual purpose caching and offline line support. 
{% endsnippet %}
 

