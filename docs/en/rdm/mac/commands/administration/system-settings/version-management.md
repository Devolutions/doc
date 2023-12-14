---
eleventyComputed:
  title: Version management
---
You can manage your {{ en.RDM }} versions for Windows, Mac, Android or iOS.

### Version Management
![Version Management tab](https://webdevolutions.azureedge.net/docs/en/rdm/mac/2015-09-22_09-38-30.png)

| OPTION                           | DESCRIPTION                                                                                    |
|----------------------------------|------------------------------------------------------------------------------------------------|
| Disable auto update notification | Disable the auto update notification message. Use this when you want to manually update the application and not get notify when new versions are available. |
| Minimal version                  | Force users of the data source to use a minimal version. Enter the entire version number (7.9.10.0) to force a specific version or use partial number to force a subset version (7.9). Use this to disable connecting to the data source with an older version. |
| Maximal version                  | Force users of the data source to use a maximal version. Enter the entire version number (7.9.10.0) to force a specific version or use partial number to force a subset version (7.9). Use this to disable connecting to the data source with a newer version. |
| Download URL                     | Used in conjunction with the minimal or maximal version, once a minimal or maximal version requirement is not met the system will prompt the user that the version is no longer valid and it will open the link (path/URL) to download the newer or older version. |
| Allow access from {{ en.RDM }}   | Disable option to exclude some client on different platform like Windows, Mac, iOS or Android. |
| Allow access from PVM            | Disable option to deny access to your data source from Password Vault Management.              |
