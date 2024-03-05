---
eleventyComputed:
  title: Manage application identities
  description: Create, manage, and delete application identities in Administration – Application identities.
---
Create, manage, and delete application identities in ***Administration – Application identities***.

## Create an application identity
Follow the steps below to create a new application identity. Once your application identity has been created, [assign them the right permissions](#assign-permissions).
1. In ***Administration – Application identity***, click ***Add Application Identity*** at the top right.
![Add Application Identity](https://cdnweb.devolutions.net/docs/en/hub/HUBB2357_2024_1.png)
1. Name the application identity then click ***Add***. In the example below, we have named it "PowerShell 1".
![Name the application identity](https://cdnweb.devolutions.net/docs/en/hub/HUBB2358_2024_1.png)
1. Copy the ***Application Secret*** and ***Application key***, or download the PDF file provided. Save the information or file in a secure place.
![Application secret and application key](https://cdnweb.devolutions.net/docs/en/hub/HUBB2359_2024_1.png)
1. Close the window.

By default, a newly created application identity has no permissions. See the next section to assign permissions.

## Assign permissions
Depending on the actions that this application identity needs to perform, you need to assign it the proper rights:
* [Assign system permissions to the application identity](/hub/web-interface/administration/configuration-security/system-permissions/)
* [Assign {{ en.VLT }} permissions to the application identity](/hub/web-interface/administration/management/vaults/create-manage-vaults/)

When permissions have been assigned, you are ready to access {{ en.DHUB }} with the [{{ en.PS }} module](/hub/powershell-module/) and your application identity.
