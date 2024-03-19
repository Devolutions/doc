---
eleventyComputed:
  title: Permissions
  description: The Permissions panel can be found in every entry properties in the Security – Permissions section.
---
The ***Permissions*** panel can be found in every entry properties by clicking ***Security – Permissions – Advanced***.

Allow administrators to grant administrative permissions to standard users without making them administrators with [system permissions](/server/web-interface/administration/configuration/system-permissions/).

The user groups based permissions system can give a very accurate control of the security. Here is an overview of the permissions window:

![Permissions](https://cdnweb.devolutions.net/docs/en/server/clip8046.png)

| Option                       | Description                                                                                                       |
|------------------------------|-------------------------------------------------------------------------------------------------------------------|
| Permission                   | Set the permission mode. This must be set to ***Custom*** to change the discrete permissions below. Select between:<br><ul><li>***Inherited*** (default):Inherit the permissions from the parent groups.</li><li>***Custom***: Specify a custom value for each permission.</li><li>***Everyone***: Everyone is granted all the permissions below.</li><li>***Never***: No one but the administrators is granted the permissions.</li></ul> |
| Discrete permissions         | Choose who you want to grant permissions to. These combo boxes are available only if the above ***Permission*** combo box is set to ***Custom***. Select between:<br><ul><li>***Inherited*** (default):Inherit the permissions from the parent groups.</li><li>***Custom***: Specify a custom value for each permission.</li><li>***Everyone***: Everyone is granted all the permissions below.</li><li>***Never***: No one but the administrators is granted the permissions.</li></ul> |
| Users / User groups selector | Select users / user groups to be granted the permission. Available only if the permission is set to ***Custom***. |
| Current permission           | Displays the granted permission for the current entry.                                                            |

## General

![Permissions – General](https://cdnweb.devolutions.net/docs/en/server/clip8047.png)

| Option            | Description                                                                                       |
|-------------------|---------------------------------------------------------------------------------------------------|
| Permission        | Set the permission mode. It must be set to ***Custom*** to change the permissions individually.   |
| View              | Allow users / user groups to view entries.                                                        |
| Add               | Allow users / user groups to add entries                                                          |
| Edit              | Allow users / user groups to edit entries.                                                        |
| Delete            | Allow users / user groups to delete entries.                                                      |
| View password     | Allow users / user groups to view entry password.                                                 |
| Connect (Execute) | Allow users / user groups to open entries.                                                        |

## Security

![Permissions – Security](https://cdnweb.devolutions.net/docs/en/server/clip8048.png)

| Option           | Description                                              |
|------------------|----------------------------------------------------------|
| Edit permissions | Allow users / user groups to edit permissions.           |
| Entry history    | Allow users / user groups to view and use entry history. |
| Password History | Allow users / user groups to view the password history.  |

## More

![Permissions – More](https://cdnweb.devolutions.net/docs/en/server/clip8049.png)

| Option       | Description                                                 |
|--------------|-------------------------------------------------------------|
| Remote tools | Allow users / user groups to use remote tools.              |
| Inventory    | Allow users / user groups to use the inventory report tool. |

## Attachments

![Permissions – Attachments](https://cdnweb.devolutions.net/docs/en/server/clip8050.png)

| Option                      | Description                                               |
|-----------------------------|-----------------------------------------------------------|
| View attachments            | Allow users / user groups to view attachments.            |
| Add/edit/delete attachments | Allow users / user groups to add/edit/delete attachments. |

## Documentation

![Permissions – Documentation](https://cdnweb.devolutions.net/docs/en/server/clip8051.png)

| Option             | Description                                      |
|--------------------|--------------------------------------------------|
| View documentation | Allow users / user groups to view documentation. |
| Edit documentation | Allow users / user groups to edit documentation. |
