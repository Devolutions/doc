---
eleventyComputed:
  title: Version management
  description: The Version management allows the administrators to manage the data source availability in other versions of {{ en.RDM }}.
  status: Topic available in German language
---
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
