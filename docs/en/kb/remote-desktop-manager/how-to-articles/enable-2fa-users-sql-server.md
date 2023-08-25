---
eleventyComputed:
  title: Enable 2FA for users
  description: While it is still not possible to force the configuration of a 2FA at the user level without the {{ en.DVLS }}, a few options have been added in {{ en.RDM }} that could suit your needs.
  status: Topic available in German language
---
While it is still not possible to force the configuration of a 2FA at the user level without the {{ en.DVLS }}, a few options have been added in {{ en.RDM }} that could suit your needs.  

{% snippet icon.badgeCaution %}
These features are only available when using an [Advanced data sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}  

{% snippet icon.badgeCaution %}
You cannot configure 2FA for users. Once activated, each user will need to configure it manually in ***File – Data Sources*** For more information about the configuration, consult [Multi-factor authentication](/rdm/windows/data-sources/multi-factor-authentication/).
{% endsnippet %}

## Force application security with Windows credentials

Under ***Administration – System Settings – Applications – Security – Force application security with Windows credentials***  
![!!KB4906.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4906.png)

## Force application security with TOTP (Authenticator)
Under ***Administration – System Settings – Applications – Security – Force application security with TOTP (Authenticator)***  
![!!KB4907.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4907.png)

## Force data source 2-factor configuration
Under ***Administration – System Settings – Security Settings – Security – Force data source 2-factor configuration***  
![!!KB4908.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4908.png)

## Prompt MFA before going offline/Offline Mode
Under ***Administration – System Settings – Cache/Offline – Prompt for MFA before going offline***  

## Force with Group Policies (GPO)
We also have GPOs that could help you achieve your goal. An example in this case is the ***Force multiple-factor authentication on the application login***.  

%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceApplicationMFA  

For more information about the configuration, consult [Apply policies](/kb/remote-desktop-manager/how-to-articles/group-policies/).
