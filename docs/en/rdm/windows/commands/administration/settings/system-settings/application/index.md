---
eleventyComputed:
  title: Application
  description: The Applications section manages the availability of different features related to {{ en.RDM }} application. 
---
The ***Applications*** section manages the availability of different features related to {{ en.RDM }} application.  
![!!clip3561](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3561.png) 

| ALLOW ACCESS       | DESCRIPTION                                                     |
|--------------------|-----------------------------------------------------------------|
| Operating systems  | Enable access to the data source from the selected operating systems. |

| OPTION                             | DESCRIPTION                                              | 
|------------------------------------|----------------------------------------------------------|
| Allow local Specific Settings      | Allow users to save [Local Specific Settings](/rdm/windows/commands/edit/setting-overrides/specific-settings/). |
| Allow templates (local)            | Allows to locally save entry's templates.                |
| Disable entry drag-and-drop        | Disable entries drag and drop from one folder to another. This setting is useful for avoiding accidental drag and drop.   | 
| Disable quick connect              | Disable the Quick Connect feature for all users of the data source.                              |
| Disable {{ en.RDMA }} and Jump     | Disable the option to activate a session as a {{ en.RDMA }} or Jump.                                |
| Disable stack trace                | Disable the stack trace details when an error occurs in {{ en.RDM }}. This is a security feature.                             |

| PASSWORD                           | DESCRIPTION                                                | 
|------------------------------------|------------------------------------------------------------|
| Allow local password templates     | Allows password templates to be saved locally.             |
| Disable password saving for data source access | Prevent users to save or change the passwords stored in the data source configurations. |
| Disable password saving (local)    | Prevent users from saving passwords in the properties of entries.        |

| WELCOME PAGE                  | DESCRIPTION                                                     |
|-------------------------------|-----------------------------------------------------------------|
| Use web or html welcome page  | Enter an URL to use as the application's welcome page.          |

| SECURITY                      | DESCRIPTION          |
|-------------------------------|----------------------|
| Force application security with Windows credentials  | Require the users to authenticate with their Windows credentials at application startup.                                               |
| Force application security with Google Authenticator | Require the users to authenticate with [Google Authenticator](/rdm/windows/data-sources/multi-factor-authentication/authenticator-totp/) at application startup.           |
| Disconnect data source                               | Set the application to lock:<ul><li>***On Minimize***: lock application when minimized in the taskbar for all users of the data source.<br><li>***On Idle***: automatically lock the application when it is not used after a determined amount of time.<li>***On Windows lock***: lock the application on Windows lock.</li><li>***On standby***: lock the application when on standby.</li></ul>    |
| Go into offline mode if available when disconnecting | Will switch {{ en.RDM }} from online to offline mode if available when disconnecting.                                         |
| Automatically reconnect on activity                  | Instead of using the manual refresh button, after an idle time, activate the option to reconnect automatically.                                         |
