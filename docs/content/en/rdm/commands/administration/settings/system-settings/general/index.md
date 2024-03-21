---
eleventyComputed:
  title: General
  description:
---
The ***General*** section allows to manage the availability of different features related to the database.

{% snippet icon.shieldCaution %}
These settings applies to all users that have access to the data source.
{% endsnippet %}

![System Settings - General](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10720.png)

| GENERAL                      | DESCRIPTION                                                            |
|----------------------------- |------------------------------------------------------------------------|
| Allow user Specific Settings | Allow users to save [User Specific Settings](/rdm/windows/commands/edit/setting-overrides/specific-settings/).    |
| Allow database clean up      | Allows logs and deleted history to be cleaned up. For more information, please consult [Clean up](/rdm/windows/commands/administration/).    |
| Allow shortcuts              | Allow the reiteration of entries through the shortcut feature.                  |
| Allow entry states (Lock, Running, Checkout)   | Allow entries to be locked when used or edited.                                     |
| Allow virtual folders                          | Allow to store entries in virtual folders (not supported with {{ en.DVLS }}).                       |
| Automatic check in after                       | Force checked out entries to check in automatically after a set delay.                                     |
| Allow sub entries                              | Allow the creation of sub entries.            |
| Allow favorites                                | Allow users to favorite connections.                       |
| Allow embedded credential source mode (legacy) | Allow embedded Credential entry in the entry itself. This mode is deprecated and not recommended. Please review other [Credentials options](/rdm/windows/commands/edit/entries/entry-credentials-options/) available.                        |
| Add entry mode                                | Select if users are prompted to choose a template when creating a new entry. Select between: <ul><li>Default</li><li>Template list (include default)</li><li>Template list only</li> <li>No template selection</li></ul>      |

| COMMENTS              | DESCRIPTION                                                     |
|-----------------------|-----------------------------------------------------------------|
| Allow log comments editing | Enable the log comment editing for all users.              |
| Minimum length (char) | Set the minimum length (in characters) allowed for comments.    |


| FILE SIZE              | DESCRIPTION                                                                              |
|------------------------|------------------------------------------------------------------------------------------|
| Maximum file size (MB) | Limit the size of attachments and document entries to avoid overloading the data source. |
