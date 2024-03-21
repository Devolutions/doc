---
eleventyComputed:
  title: Performance
  description: Go to File – Settings – Performance to control the behavior of the application with respect to performance.
---
Go to ***File – Settings – Performance*** to control the behavior of the application with respect to performance.
![File – Settings – Performance](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMW4004_2024_1.png)

## Settings

### Performance - General

 OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|------------------------------------------------------------------------------------------------|
| Disable all Gravatar images                | Disable all Gravatar images to improve application performance.                                |
| Disable custom images                      | Disable the loading of any custom images in the tree view. Too many custom images could dramatically increase the size of the data source and increase the load time at the same time. |  
| Disable favicon cache                      | Disable the favicon cache and force {{ en.RDM }} to always fetch the favicon from the web. It is not recommended to disable this feature for performance reasons.  |
| Disable Gravatar images in user management | Disable fetching the Gravatar in Administration – Users to improve application performance. |

### Other Options

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Offline engine              | You can choose your Offline engine between MCDF v2.0 (default), SQLite   (deprecated), or MCDF (deprecated). Only change this option upon request from a Devolutions support technician. |
| Hardware acceleration       | Select in the drop-down list how {{ en.RDM }} will handle hardware acceleration:<ul><li>Default (Automatic): Graphics rendering is completely left to the operating system.</li><li>Disabled (GDI+): Hardware acceleration is forced disabled.</li><li>DirectX: Hardware acceleration is forced enabled. The graphics rendering is performed by the graphics card. Performance is sped up in some cases, which is often required for high resolutions.<li>This setting does not need to be modified unless there are UI performance issues.</li></ul> |
| Optimize UI Performance     | Optimize the user interface for better performances.                                          |
| Opened connections tree resfresh delay | Set the refresh delay for the opened connection tree.                              |