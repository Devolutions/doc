---
eleventyComputed:
  title: '{{ en.CI }}'
  order: 10
---
The ***{{ en.CIM }}*** will allow you to generate and download custom installation packages for {{ en.RDMWIN }}. 

{% snippet icon.shieldWarning %} 
The ***{{ en.CIM }}*** uploads a configuration file to our online services. You should not use the service to redistribute passwords for data sources. 
{% endsnippet %}
 
{% snippet icon.badgeNotice %} 
For stability reasons, in large installation bases, the latest official release is not available to the {{ en.CIS }} until an undetermined period while we ensure that no major issues are present. We recommend using this time with your organization to perform integration tests on a few workstations before upgrading your entire team. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
You can store and create up to six ***{{ en.CI }}*** configuration file packages in your {{ en.DA }}. 
{% endsnippet %}
 
## Settings 

The ***{{ en.CI }}*** replicates the settings from the {{ en.RDM }} instance used to create the package and stores them in the package for distribution. You have control over which categories of settings you are redistributing, but not discrete settings. It may be desirable to have a {{ en.RDM }} installation that is used specifically to create the Installation Package.  

You can go to File – {{ en.DA }} – Tools to access the ***{{ en.CIM }}***.  
![File – {{ en.DA }} – {{ en.CIM }}](https://webdevolutions.azureedge.net/docs/en/cloud/clip0009.png)  

Please consult our [{{ en.CI }} package creation guide](/rdm/windows/installation/client/custom-installer-service/).  

If the package has already been generated, you can download it directly from the portal as described in [Download {{ en.CI }} Package](/cloud/rdm-online-services/custom-installer/download-custom-installer/). 
