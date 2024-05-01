---
eleventyComputed:
  title: Permissions
  description: The Permissions panel can be found in every entry properties in the Security – Permissions section.
---
The ***Permissions*** panel can be found in every entry properties by clicking ***Security – Permissions – Advanced***.

Allow administrators to grant administrative permissions to standard users without making them administrators with [system permissions](/server/web-interface/administration/configuration/system-permissions/).

The user groups based permissions system can give a very accurate control of the security. Here is an overview of the permissions window:

![Permissions](https://cdnweb.devolutions.net/docs/DVLS6053_2024_1.png)

| Option                       | Description                                                                                                       |
|------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Permission                   | Set the permission mode. This must be set to ***Custom*** to change the discrete permissions below. Select between:<br><ul><li>***Inherited*** (default):Inherit the permissions from the parent groups.</li><li>***Custom***: Specify a custom value for each permission.</li><li>***Allowed***: Everyone is granted all the permissions below.</li><li>***Disallowed***: No one but the administrators is granted the permissions.</li></ul> |
| Discrete permissions         | Choose who you want to grant permissions to. These combo boxes are available only if the above ***Permission*** combo box is set to ***Custom***. Select between:<br><ul><li>***Inherited*** (default):Inherit the permissions from the parent groups.</li><li>***Custom***: Specify a custom value for each permission.</li><li>***Allowed***: Everyone is granted all the permissions below.</li><li>***Disallowed***: No one but the administrators is granted the permissions.</li></ul> |
| Users / User groups selector | Select users / user groups to be granted the permission. Available only if the permission is set to ***Custom***. |
| Current permission           | Displays the granted permission for the current entry.                                                            |

## General

![Permissions – General](https://cdnweb.devolutions.net/docs/DVLS6058_2024_1.png)

| Option            | Description                                                                                       |
|-------------------|---------------------------------------------------------------------------------------------------|
| Permission        | Set the permission mode. It must be set to ***Custom*** to change the permissions individually.   |
| View              | Allow users / user groups to view entries.                                                                                            |
| Edit              | Allow users / user groups to edit entries.                                                        |
| Delete            | Allow users / user groups to delete entries.
| Move            | Allow users / user groups to move entries.                                                        |
| View password     | Allow users / user groups to view entry password. 
| View sensitive information     | Allow users / user groups to view sensitive information.                                                 |
| Connect (Execute) | Allow users / user groups to open entries.                                                        |

## Security

![Permissions – Security](https://cdnweb.devolutions.net/docs/DVLS6054_2024_1.png)

| Option           | Description                                              |
|------------------|----------------------------------------------------------|
| Edit permissions | Allow users / user groups to edit permissions.           |
| Entry history    | Allow users / user groups to view and use entry history. |
| Password History | Allow users / user groups to view the password history.  |

## More

![Permissions – More](https://cdnweb.devolutions.net/docs/DVLS6057_2024_1.png)

| Option       | Description                                                 |
|--------------|-------------------------------------------------------------|
| Edit asset | Allow users / user groups to edit asset.                       |
| Remote tools | Allow users / user groups to use remote tools.              |
| IT Asset Management    | Allow users / user groups to use the IT Asset Management tool. |

## Attachments

![Permissions – Attachments](https://cdnweb.devolutions.net/docs/DVLS6055_2024_1.png)


| Option                      | Description                                               |
|-----------------------------|-----------------------------------------------------------|
| View attachments            | Allow users / user groups to view attachments.            |
| Add/edit/delete attachments | Allow users / user groups to add/edit/delete attachments. |

## Documentation

![Permissions – Documentation](https://cdnweb.devolutions.net/docs/DVLS6056_2024_1.png)

| Option             | Description                                      |
|--------------------|--------------------------------------------------|
| View documentation | Allow users / user groups to view documentation. |
| Delete documentation | Allow users / user groups to delete documentation. |
| Edit documentation | Allow users / user groups to edit documentation. |
