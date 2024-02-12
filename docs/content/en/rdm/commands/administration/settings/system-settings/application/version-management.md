---
eleventyComputed:
  title: Version management
  description: The Version management allows the administrators to manage the data source availability in other versions of {{ en.RDM }}.
  status: Topic available in German language
---
{% tabs %}
{% tabItem "Windows" %}
The ***Version Management*** allows the administrators to manage the data source availability in other versions of {{ en.RDM }}. 

## Windows, macOS, and Linux 

![Version Management](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2239.png) 

| OPTION                                                    | DESCRIPTION
|-----------------------------------------------------------|----------------------------------------------|
| Minimal version      | Forces users of the data source to use a minimal version of {{ en.RDM }}. Enter the entire version number (e.g. 2023.2.0.0) to force a specific version. A prompt is displayed offering to update {{ en.RDM }} if the version is lower than the minimal version. |
| Minimal version custom message   | Enter a custom message for the minimal version notification. |
| Maximal version       | Forces users of the data source to use a maximal version. Enter the entire version number (e.g. 2023.2.0.0) to force a specific version. A prompt is displayed offering to update {{ en.RDM }} if the version is higher than the maximal version.                 |
| Maximal version custom message    | Enter a custom message for the maximal version notification.                                               |
| Recommended version    | Recommended version will be displayed to the user via the updater as the recommended version to be downloaded and installed. |
| Disable checks for updates        | Disable the auto update notification message. Use this to manually update the application and prevent from getting notified when new versions are available. |
| Show custom minimal/maximal version message for administrators | Show the custom minimal/maximal version message to administrators. |
| Download URL         | Use in conjunction with the minimal or maximal version, once a minimal or maximal version requirement is not met the system will prompt the user that the version is no longer valid and it will open the link (path/URL) to download the newer or older version. |
{% endtabItem %}

{% tabItem "macOS" %}
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
{% endtabItem %}
{% endtabs %}