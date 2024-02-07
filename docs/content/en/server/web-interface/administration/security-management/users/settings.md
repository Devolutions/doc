---
eleventyComputed:
  title: Settings
---
![Edit User – Settings](https://webdevolutions.azureedge.net/docs/en/server/ServerOp7012.png)

Allow the user to enable [Offline Mode](/rdm/windows/data-sources/offline-mode/) on the data source. The data source also needs to be configured to permit offline mode. There are multiple modes available:

## Edit user
| Option     | Description                                                |
|------------|------------------------------------------------------------|
| Disabled   | No offline cache allowed for the user.                     |
| Read-only  | A read-only cache. The user will not be able to edit data in the data source. This mode is allowed for [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) only. |
| Read/Write | An advanced cache, with change synchronization. This mode is allowed for [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) only.                          |
