---
title: 2FA set on Data Source Lost
---
The user lost his phone that contains the 2FA for his data source.
## Solution  
{% snippet icon.badgeCaution %}
This will not work for lost Master Password on Local Datasource.
{% endsnippet %}  
{% snippet icon.badgeCaution %}
Please refer to this [topic](/kb/remote-desktop-manager/troubleshooting-articles/2fa-server-lost/) if you are a {{ en.DPS }} user and you lost your 2FA.
{% endsnippet %}  
{% snippet icon.badgeCaution %}
Please refer to this [topic](/kb/remote-desktop-manager/troubleshooting-articles/2fa-lost-devolutions-account-dod/) if you are an Online Drive or Devolutions Account user and you lost your 2FA.
{% endsnippet %}  

1. Close {{ en.RDM }}
1. Find these two files and delete them:
    * RemoteDesktopManager.stv
    * RemoteDesktopManager.enc  
{% snippet icon.badgeInfo %}
If the application was installed by default, you can locate the file:
For the Enterprise version here: %localappdata%\Devolutions\RemoteDesktopManager
For the Free: %localappdata%\Devolutions\RemoteDesktopManager\Free
{% endsnippet %}
