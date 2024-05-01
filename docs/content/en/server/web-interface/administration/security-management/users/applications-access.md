---
eleventyComputed:
  title: Applications access
  description: Allow or deny the user access to different applications and {{ en.CTOOLS }}.
---
Allow or deny the user access to different applications and {{ en.CTOOLS }}:  
![Edit User – Applications](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6098.png)

## Edit user
| Option                                                         | Description                                                    |
|----------------------------------------------------------------|----------------------------------------------------------------|
| {{ en.RDM }}                                                   | Allow user to access {{ en.DVLS }} through {{ en.RDM }}.       |
| [{{ en.WBEX }}](/server/workspace-browser-extension/overview/) | Allow user to auto fill username and passwords on websites with the {{ en.WBEX }}. |
| {{ en.DLAUNCHER }}                                             | Allow user to open remote connections with {{ en.DLAUNCHER }}. |
| Web                                                            | Allow user to use {{ en.DVLS }} web interface.                 |
| Cli                                                            | Allow user to use the Cli.                                     |
| Scripting                                                      | Allow user to connect through [{{ en.PS }} module](https://www.powershellgallery.com/packages/Devolutions.PowerShell/). |
| {{ en.WS }}                                                    | Allow users to use the {{ en.WMAPP }}.                         |

### Time-based access
| Option | Description                                                                                                                 |
|--------|-----------------------------------------------------------------------------------------------------------------------------|
| Days   | Allow access to the instance according to one of these values:<br><ul><li>***Any day***</li><li>***Week days***</li><li>***Weekends***</li><li>***Custom***</li></ul> |
| Time   | Allow access to the instance according to the given possibilities:<br><ul><li>***Any time***</li><li>***Custom***</li></ul> |
