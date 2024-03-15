---
eleventyComputed:
  title: Applications identities
  description: The Applications identities section allows the creation of an application identity to communicate with {{ en.DVLS }} through the {{ en.PS }} module.
---
The ***Applications identities*** section allows the creation of an application identity to communicate with {{ en.DVLS }} through the [{{ en.PS }} module](https://www.powershellgallery.com/packages/Devolutions.PowerShell/).

{% snippet icon.badgeHelp %}
For more information on connecting {{ en.DVLS }} with an application user, see [PowerShell connectivity methods to {{ en.DVLS }}](/kb/devolutions-powershell/devolutions-server/powershell-connectivity/).
{% endsnippet %}

![Administration – Applications identities](https://cdnweb.devolutions.net/docs/en/server/DVLS6023_2024_1.png)

![Adding a new application identity](https://cdnweb.devolutions.net/docs/en/server/DVLS6022_2024_1.png)

| General               | Description                                                                                               |
|-----------------------|-----------------------------------------------------------------------------------------------------------|
| Name                  | Display name of the Application identity.                                                                      |
| Application identity       | Application identity to be use in the application to communicate with {{ en.DVLS }} instance.                  |
| Application Secret    | Secret key to be use in combination with the Application identity. Available only on Application identity creation. |
| Enabled               | Activate the Application identity.                                                                             |
| Can save recordings   | Allow the Application identity to save session's recordings.                                                   |
| Enable IP restriction | Subject the application to conditional access policies, if any, concerning IP address restrictions.       |
