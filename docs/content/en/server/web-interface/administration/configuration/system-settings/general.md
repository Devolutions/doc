---
eleventyComputed:
  title: General
---
The ***General*** section of the ***System Settings*** allows the administrators to apply general policies for the whole data source.
![Administration – System Settings – General](https://cdnweb.devolutions.net/docs/en/server/clip10373.png)

## General
| Option                                       | Description                                                        |
|----------------------------------------------|--------------------------------------------------------------------|
| Allow user specific settings                 | Allow users to save User Specific Settings.                        |
| Allow entry states (Lock, Running, Checkout) | Allow entries to be locked when used or edited.                    |
| Automatic check in after                     | Allow to automatically checked in an entry after the defined time. |
| Add entry mode                               | Select if users are prompted to choose a template when creating a new entry. Select between:<ul><li>***Default***</li><li>***Template list (include blank)***</li><li>***Template list only***</li><li>***No template selection***</li></ul> |

## Comments
| Option                     | Description                                   |
|----------------------------|-----------------------------------------------|
| Allow log comments editing | Enable the log comment editing for all users. |
| Minimum length (char)      | Minimum length in character for the comment.  |

## File Size
| Option                 | Description                                                                               |
|------------------------|-------------------------------------------------------------------------------------------|
| Maximum file size (MB) | Limit the size of attachments and document entries to avoid to over load the data source. |

## Favorites
| Option          | Description                          |
|-----------------|--------------------------------------|
| Allow favorites | Allows to flag entries as favorites. |

## {{ en.UVLT_MAJ }}
| Option                                       | Description                                                                |
|----------------------------------------------|----------------------------------------------------------------------------|
| Allow {{ en.UVLT }}                          | Allow users to use the [{{ en.UVLT }}](/server/web-interface/user-vault/). |
| Log {{ en.UVLT }} activities                 | Include the logs of the [{{ en.UVLT }}](/server/web-interface/user-vault/) for all users of the data source. |
| Allow credential repository in {{ en.UVLT }} | Allow credential repository for sessions in the [{{ en.UVLT }}](/server/web-interface/user-vault/). |

## Security
| Option                         | Description                                                |
|--------------------------------|------------------------------------------------------------|
| {{ en.VLT_MAJ }} Locked Status | Creates {{ en.VLT }}s with a restricted access by default. |
| Data Source Security           | Enable the legacy security.                                |
| Events Settings                | Risky events notifications                                 |

### Time-Based Usage
| Option                      | Description                                |
|-----------------------------|--------------------------------------------|
| Time Zone                   | Select the time zone you are currently in. |
| Days                        | Select which days the session is available for. Select between:<ul><li>***Any day***: the session can be used any day of the week or week-end.</li><li>***Week days***: the session can be used only the week days.</li><li>***Week ends***: the session can be used only the week ends.</li><li>***Custom***: manually select each day the session is available for.</li></ul> |
| Time of day                 | Select the hours which the session is limited to. Select between:<ul><li>***Any time***: the session can be used at any hour.</li><li>***Custom***: manually select the time frame the session is available for.</li></ul> |
