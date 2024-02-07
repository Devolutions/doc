---
eleventyComputed:
  title: Applications
  description: The Applications section allows the creation of an application key to communicate with {{ en.DVLS }} through the {{ en.PS }} module.
---
The ***Applications*** section allows the creation of an application key to communicate with {{ en.DVLS }} through the [{{ en.PS }} module](https://www.powershellgallery.com/packages/Devolutions.PowerShell/).

{% snippet icon.badgeHelp %}
For more information on connecting {{ en.DVLS }} with an application user, see [PowerShell connectivity methods to {{ en.DVLS }}](/kb/devolutions-powershell/devolutions-server/powershell-connectivity/).
{% endsnippet %}

![Administration – Applications](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2123.png)  
![Adding a new application](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2124.png)  

| General               | Description                                                                                               |
|-----------------------|-----------------------------------------------------------------------------------------------------------|
| Name                  | Display name of the Application key.                                                                      |
| Application key       | Application key to be use in the application to communicate with {{ en.DVLS }} instance.                  |
| Application Secret    | Secret key to be use in combination with the Application key. Available only on Application key creation. |
| Enabled               | Activate the Application key.                                                                             |
| Can save recordings   | Allow the Application key to save session's recordings.                                                   |
| Enable IP restriction | Subject the application to conditional access policies, if any, concerning IP address restrictions.       |
