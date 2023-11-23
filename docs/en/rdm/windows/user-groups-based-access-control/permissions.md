---
eleventyComputed:
  title: Permissions
  status: Topic translated into German
---
{% youtube 'FQACxCIj_GU' %}  

The ***Permissions*** window, which is only available in an [advanced data source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/), can be found in every entry properties in ***Security*** – ***Permission*** section (or ***Security*** – ***Inherited permissions*** for the {{ en.VLT }} root).

The user group based permission system can give a very accurate control of the security. Here is an overview of the permission window:  
![Permission panel](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6083.png)  

| OPTION             | DESCRIPTION                                                                                                               |
|---------------------|---------------------------------------------------------------------------------------------------------------------------|
| Permission          | Sets the permission mode. Select between: <br> <ul><li>***Inherited (Default)***: Inherits the permissions from the parent groups.</li><li>***Custom***: Lets you specify a custom value for each of the permission.</li><li>***Everyone***: Grants all the permissions below to everyone.</li><li>***Never***: Grants the permission to no one but the administrators.</li></ul>                                                                                  |
| Grant Access        | Allows [batch grant access](/rdm/windows/commands/administration/settings/system-settings/vault-management/batch-grant-access) to a specific entry or entries. |
| Inherited values    | Indicates what is inherited from parent groups.                                                                            |
| Select user groups  | Lets you select users / user groups to be granted the permission. Available only if the permission is set to ***Custom***. |

![Batch Grant Access](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6082.png) 
