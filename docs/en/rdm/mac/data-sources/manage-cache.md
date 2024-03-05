---
eleventyComputed:
  title: Manage cache
  description: This option allows you to manage your cache which decides how the client will re-load entries when changes are detected.
---
This option allows you to manage your cache which decides how the client will re-load entries when changes are detected. On large data sources caching is a must and will increase performance significantly.

{% snippet icon.badgeNotice %}
This feature is only available when the offline engine is set to use SQLite. We are phasing out this engine because of multiple issues reported by customers.
{% endsnippet %}

{% snippet icon.badgeInfo %}
The Manage Cache options should only be used upon request from our Support Team when experiencing cache issue.
{% endsnippet %}

## Settings

{% snippet icon.badgeInfo %}
The Manage Cache option will only be available when using an SQLite cache.
{% endsnippet %}

![Manage Cache](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10504.png)

| OPTION     | DESCRIPTION |
|------------|-------------|
| Clear output | Clear the output window. |
| Analyse    | Analyze will generate a report of everything that is contained in the cache. It will read the offline data and perform a read/write test to verify if the offline file is valid. |
| Vacuum     | This will run an SQLite command to reduce your cache size. The Vacuum should only be used after trying to execute a Repair of your cache. If the repair has not solved your issue running a Vacuum will usually solve issues when dealing with a corrupted cache. |
| Repair     | The repair will run four different SQLite commands to repair a corrupted cache:<ul><li>PRAGMA integrigy_check</li><li> REINDEX DatabaseInfo</li><li> REINDEX Connections</li><li> REINDEX Properties</li></ul> |
| Delete     | This option will delete the physical file (offline.db). Please note that this will empty your Offline mode cache, always verify that your database is available before running a ***Delete***. |

