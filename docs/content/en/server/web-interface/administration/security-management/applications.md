---
eleventyComputed:
  title: Applications identities
  description: The Applications identities section allows the creation of an application identity to communicate with {{ en.DVLS }} through the {{ en.PS }} module.
---
The ***Applications identities*** section allows the creation of an application identity to communicate with {{ en.DVLS }} through the [{{ en.PS }} module](https://www.powershellgallery.com/packages/Devolutions.PowerShell/).

{% snippet, "badgeHelp" %}
For more information on connecting {{ en.DVLS }} with an application identity, see [PowerShell connectivity methods to {{ en.DVLS }}](/powershell/dvls-powershell/powershell-connectivity/).
{% endsnippet %}

## Creating or editing an Application identity
To create or edit application identities, head over to ***Administration*** – ***Applications identities***. Click on the + sign to create a new application identity or on the pen-shaped button to edit an existing one. 

![Administration – Applications identities](https://cdnweb.devolutions.net/docs/DVLS6023_2024_1.png)

{% snippet, "badgeCaution" %}
When creating an application identity, be sure to note the ***Application Secret***, as it will not be shown afterwards.
{% endsnippet %}


## General
![Adding a new application identity](https://cdnweb.devolutions.net/docs/DVLS6022_2024_1.png)
| General               | Description                                                                                               |
|-----------------------|-----------------------------------------------------------------------------------------------------------|
| Name                  | Display name of the Application identity.                                                                      |
| Application identity  | Application identity to be used in the application to communicate with {{ en.DVLS }} instance.                  |
| Application Secret    | Secret key to be used in combination with the Application identity. Available only on Application identity creation. |
| Enabled               | Activate the Application identity.                                                                             |
| Can save recordings   | Allow the Application identity to save session recordings.                                                   |
| Enable IP restriction | Subject the application to conditional access policies, if any, concerning IP address restrictions.       |

## Roles

The ***Roles*** section contains a list of the [user groups](https://docs.devolutions.net/server/web-interface/administration/security-management/vaults/user-groups/) to which the application identity can be given access. 

![Roles section](https://cdnweb.devolutions.net/docs/DVLS4028_2024_2.png)

## {{ en.VLT_MAJ }}s

In the ***{{ en.VLT_MAJ }}s*** section, application identities can be granted access to specific {{ en.VLT }}s. This can also be done via [***Edit {{ en.VLT }} settings***](https://docs.devolutions.net/server/web-interface/administration/security-management/vaults/applications/) in the {{ en.VLT }}s themselves.

![{{ en.VLT_MAJ }} section](https://cdnweb.devolutions.net/docs/DVLS4027_2024_2.png)


{% snippet, "badgeInfo" %}
Note that [enabling the {{ en.PS }} module]((https://www.powershellgallery.com/packages/Devolutions.PowerShell/)) and granting the application identity access to the desired {{ en.VLT }}s in the ***{{ en.VLT_MAJ }}s*** section is mandatory to launch automated scripts affecting ***{{ en.VLT }}s***, e.g., the script for [exporting all {{ en.RDM }}'s entries](https://github.com/Devolutions/RDMSamples-ps/blob/main/module/export/ExportAllEntriesAllVaults.ps1).
{% endsnippet %}