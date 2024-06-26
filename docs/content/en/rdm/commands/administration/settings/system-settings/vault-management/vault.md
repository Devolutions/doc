---
eleventyComputed:
  title: "{{ en.VLT_MAJ }}"
  description: The {{ en.VLT_MAJ }} section allows to manage the availability of different features related to the database.
---
The ***{{ en.VLT_MAJ }}*** section allows to manage the availability of different features related to the database. These settings apply to all users that have access to the data source.

![System settings – {{ en.VLT_MAJ }}](https://cdnweb.devolutions.net/docs/RDMW4027_2024_1.png)

| GENERAL                      | DESCRIPTION                                                            |
|----------------------------- |------------------------------------------------------------------------|
| Allow user Specific Settings | Allow users to save [user specific settings](/rdm/windows/commands/edit/setting-overrides/specific-settings/).    |
| Allow database clean up      | Allows logs and deleted history to be cleaned up. For more information, please consult [Clean up](/rdm/windows/commands/administration/).    |
| Allow shortcuts              | Allow the reiteration of entries through the shortcut feature.                  |
| Allow entry states (Lock, Running, Checkout)   | Allow entries to be locked when used or edited.                                     |
| Allow virtual folders                          | Allow to store entries in virtual folders (not supported with {{ en.DVLS }}).                       |
| Automatic check in after                       | Force checked out entries to check in automatically after a set delay.                                     |
| Allow sub entries                              | Allow the creation of sub entries.            |
| Allow favorites                                | Allow users to favorite connections.                       |
| Allow embedded credential source mode (legacy) | Allow embedded Credential entry in the entry itself. This mode is deprecated and not recommended. Please review other [credentials options](/rdm/windows/commands/edit/entries/entry-credentials-options/) available.                        |
| Add entry mode                                | Select if users are prompted to choose a template when creating a new entry. Select between: <ul><li>Default</li><li>Template list (include default)</li><li>Template list only</li> <li>No template selection</li></ul>      |
| Default vault root label | Choose which label to apply by default to the vault root. Select between: <ul><li>Default</li><li>Data source</li><li>Vault</li></ul>
| Default vault visibility | Choose who can see vault by default. Select between: <ul><li>Private – Invitation Only</li><li>Public – Allow Access Requests</li></ul>

| COMMENTS              | DESCRIPTION                                                     |
|-----------------------|-----------------------------------------------------------------|
| Allow log comments editing | Enable the log comment editing for all users.              |
| Minimum length (char) | Set the minimum length (in characters) allowed for comments.    |


| FILE SIZE              | DESCRIPTION                                                                              |
|------------------------|------------------------------------------------------------------------------------------|
| Maximum file size (MB) | Limit the size of attachments and document entries to avoid overloading the data source. |
