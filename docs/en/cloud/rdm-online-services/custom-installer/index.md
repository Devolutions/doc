---
title: Custom Installer
order: 10
---
The ***Custom Installer Manager*** will allow you to generate and download custom installation packages for {{ en.RDM }} Windows. 

{% snippet icon.shieldWarning %} 
The ***Custom Installer Manager*** uploads a configuration file to our online services. You should not use the service to redistribute passwords for data sources. 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
For stability reasons, in large installation bases, the latest official release is not available to the {{ en.CI }} until an undetermined period while we ensure that no major issues are present. We recommend using this time with your organization to perform integration tests on a few workstations before upgrading your entire team. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
You can store and create up to six ***Custom Installer*** configuration file packages in your {{ en.DA }} . 
{% endsnippet %}
 
### Settings 

The ***Custom Installer*** replicates the settings from the {{ en.RDM }} instance used to create the package and stores them in the package for distribution. You have control over which categories of settings you are redistributing, but not discrete settings. It may be desirable to have a {{ en.RDM }} installation that is used specifically to create the Installation Package.  

You can go to File – {{ en.DA }} – Tools to access the ***Custom Installer Manager*** .  
![File - Devolutions Account - Custom Installer Manager.png](/img/en/cloud/clip0009.png)  

Please consult our [Custom Installer package creation guide](https://helprdm.devolutions.net/installation_custominstallerservice.html) .  

If the package has already been generated, you can download it directly from the portal as described in [Download Custom Installer Package](/cloud/rdm-online-services/custom-installer/download-custom-installer/) . 

