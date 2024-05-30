---
eleventyComputed:
  title: Lost the 2FA set on the data source
---
The user lost their phone that contains the 2FA for their data source.
## Solution  
{% snippet, "badgeCaution" %}
This will not work for a lost Master Password on Local Datasource.
{% endsnippet %}  
{% snippet, "badgeCaution" %}
Please refer to [Lost the 2FA set on {{ en.DVLS }}](/rdm/mac/kb/rdm-windows/troubleshooting-articles/2fa-server-lost/) if you are a {{ en.DVLS }} user who lost their 2FA.
{% endsnippet %}  
{% snippet, "badgeCaution" %}
Please refer to [2FA set and lost on {{ en.DA }} or ({{ en.DOD }})](/rdm/mac/kb/rdm-windows/troubleshooting-articles/2fa-lost-devolutions-account-dod/) if you are a {{ en.DOD }} or {{ en.DA }} user who lost their 2FA.
{% endsnippet %}  

1. Close {{ en.RDM }}.
1. Find these two files and delete them:
    * RemoteDesktopManager.stv
    * RemoteDesktopManager.enc  
{% snippet, "badgeInfo" %}
If the application was installed by default, you can locate the file:

For the Team Edition: **%localappdata%\Devolutions\RemoteDesktopManager**  
For the Free Edition: **%localappdata%\Devolutions\RemoteDesktopManager\Free**  
{% endsnippet %}
