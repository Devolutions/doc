---
title: 2FA set on Data Source Lost
---
The user lost their phone that contains the 2FA for their data source.
## Solution  
{% snippet icon.badgeCaution %}
This will not work for a lost Master Password on Local Datasource.
{% endsnippet %}  
{% snippet icon.badgeCaution %}
Please refer to this [topic](/kb/remote-desktop-manager/troubleshooting-articles/2fa-server-lost/) if you are a {{ en.DVLS }} user and you lost your 2FA.
{% endsnippet %}  
{% snippet icon.badgeCaution %}
Please refer to this [topic](/kb/remote-desktop-manager/troubleshooting-articles/2fa-lost-devolutions-account-dod/) if you are a {{ en.DOD }} or {{ en.DA }} user and you lost your 2FA.
{% endsnippet %}  

1. Close {{ en.RDM }}.
1. Find these two files and delete them:
    * RemoteDesktopManager.stv
    * RemoteDesktopManager.enc  
{% snippet icon.badgeInfo %}
If the application was installed by default, you can locate the file:
For the Team Edition: %localappdata%\Devolutions\RemoteDesktopManager
For the Free Edition: %localappdata%\Devolutions\RemoteDesktopManager\Free
{% endsnippet %}
