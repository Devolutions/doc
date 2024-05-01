---
eleventyComputed:
  title: Settings
---
Allow the user group to enable [Offline Mode](/rdm/windows/data-sources/offline-mode/) on the data source. The data source also needs to be configured to permit offline mode. There are multiple modes available.
![User Groups - Settings](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8012.png)

## Settings
| Option            | Description                                                        |
|-------------------|--------------------------------------------------------------------|
| ***Disabled***    | No offline cache allowed for the user group.                       |
| ***Read-only***   | A read-only cache. The user group will not be able to edit data in the data source. This mode is allowed for [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) only. |
| ***Read/Write***  | An advanced cache, with change synchronization. This mode is allowed for [Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) only. |
