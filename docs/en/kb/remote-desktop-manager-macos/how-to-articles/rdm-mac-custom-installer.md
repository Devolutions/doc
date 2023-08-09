---
eleventyComputed:
  title: Remote Desktop Manager {{ en.MAC }} {{ en.CI }}
---
Unfortunately, there is no {{ en.CI }} in the {{ en.RDMMAC }} version as we do have for the [Windows Remote Desktop Manager application](/rdm/windows/installation/client/custom-installer-service/).

The solution would be to copy the .cfg file and manually distribute it to the right folder.

{% snippet icon.badgeCaution %}
This data source configuration includes the username and password of the desktop you are copying from.
{% endsnippet %}

## The .cfg file location in macOs

1. Open ***Finder***.
1. Click ***Go*** in the menu.
1. Select ***Go to folder***.
1. Paste this path: ~/Library/Application Support
1. Open the folder: com.devolutions.remotedesktopmanager
1. Locate the RemoteDesktopManager.cfg or RemoteDesktopManagerFree.cfg file.
