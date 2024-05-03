---
eleventyComputed:
  title: Cache/Offline
  description: The offline mode is useful when using a VPN connection that makes using local network impossible.
---
![!!clip3562](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3562.png)

| OPTION                                      | DESCRIPTION                                              |
|---------------------------------------------|----------------------------------------------------------|
| Offline mode                                | Set the global data source [Offline Mode](/rdm/windows/data-sources/offline-mode/) availability. The offline mode is useful when using a VPN connection that makes using local network impossible. |
| Expiration                                  | Number of days before the offline cache expires. You must go online prior to the end of that period to re-validate the data.  |
| Prompt for credentials before going offline | Force the user to provide their credentials before going offline. |
| Prompt for 2FA before going offline         | Force the user to provide their 2FA before going offline. |

{% snippet icon.badgeCaution %}
It is not recommended to set the ***Expiration*** to 0, as this will disable the expiration of the offline cache.
{% endsnippet %}
