---
eleventyComputed:
  title: Reset server cache
  keywords:
  - Roles
---
***Reset Server Cache*** for specific elements.
![Administration – Reset Server Cache](https://cdnweb.devolutions.net/docs/en/server/ServerOp8039.png)

## Reset server cache
| Option                                                                                                                        | Description |
|-------------------------------------------------------------------------------------------------------------------------------|-------------|
| <ul><li>***Entries***<br></li><li>***User Groups***<br></li><li>***{{ en.VLT_MAJ }}s***<br></li><li>***Users***<br></li></ul> | When selecting one of those options, when resetting the cache, it will pull back all the information from the database and put the information in the server's memory cache. |
| <ul><li>***Domain***<br></li><li>***Office365***<br></li></ul>                                                                | When resetting the Domain or the Office365 cache, it will wipe out the information saved in the database and will reload all the users and groups memberships pulled from Active Directory or from Azure AD. |
