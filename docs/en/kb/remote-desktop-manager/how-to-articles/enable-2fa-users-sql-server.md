---
title: Enable 2FA for Users
---
While it&apos;s still not possible to force the configuration of a 2FA at the user level without the {{ en.DPS }} , a few options have been added in {{ en.RDM }} that could suit your needs.  

{% snippet icon.badgeCaution %}
These features are only available when using an [Advanced Data Source](https://help.remotedesktopmanager.com/datasources_advanced.html)
{% endsnippet %}  

{% snippet icon.badgeCaution %}
You cannot configure 2FA for users. Once activated, each user will need to configure it manually in ***File - DataSources*** For more information about configuration consult this topic: [2-Factor Authentication](https://help.remotedesktopmanager.com/datasources_2factorauthentication.html?)
{% endsnippet %}

### Force application security with Windows credentials

Under ***Administration - System Settings - Applications - Security - Force application security with Windows credentials***  
![KB4906.png](/img/en/kb/KB4906.png)

### Force application security with TOTP (Authenticator)
Under ***Administration - System Settings - Applications - Security - Force application security with TOTP (Authenticator)***  
![KB4907.png](/img/en/kb/KB4907.png)

### Force data source 2-factor configuration
Under ***Administration - System Settings - Security Settings - Security - Force data source 2-factor configuration***  
![KB4908.png](/img/en/kb/KB4908.png)

### Force with Group Policies (GPO)
We also have GPOs that could help you achieve your goal. An example in this case is the ***Force multiple-factor authentication on the application login***  

%Root%\SOFTWARE\Policies\Devolutions\RemoteDesktopManager\ForceApplicationMFA  

For more information about configuration, consult this topic [How to Apply Policies](/kb/remote-desktop-manager/how-to-articles/group-policies/)
