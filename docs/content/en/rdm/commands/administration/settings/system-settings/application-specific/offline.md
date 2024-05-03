---
eleventyComputed:
  title: Cache/Offline
  description: The offline mode is useful when using a VPN connection that makes using local network impossible.
---
![Administration – System settings – Application specific – Cache/Offline](https://cdnweb.devolutions.net/docs/RDMW2042_2024_1.png)

| OPTION                                      | DESCRIPTION                                              |
|---------------------------------------------|----------------------------------------------------------|
| Offline mode                                | Set the global data source [Offline mode](/rdm/windows/data-sources/offline-mode/) availability. The offline mode is useful when using a VPN connection that makes using local network impossible. |
| Expiration                                  | Number of days before the offline cache expires. You must go online prior to the end of that period to re-validate the data. It is not recommended to set the ***Expiration*** to 0, as this will disable the expiration of the offline cache. |
| Prompt for credentials before going offline | Force the user to provide their credentials before going offline. |
| Prompt for 2FA before going offline         | Force the user to provide their 2FA before going offline. |