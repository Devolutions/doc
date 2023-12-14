---
eleventyComputed:
  title: Password policy
---
Password Policy allows you to manage the different password policy and settings for your data source. For more information regarding the Password Complexity follow this link.  
Some of these settings could be overridden using Group Policies.

## Settings
![Data Source Settings - Password Policy](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10375.png)

| OPTION                                                                                                         | DESCRIPTION |
|----------------------------------------------------------------------------------------------------------------|-------------|
| Disable password saving (shared)                                                                               | Users will not be able to save passwords within session. |
| Disable password saving (user specific settings)                                                               | Users will not be able to save password in the User Specific Settings. |
| Disable password saving for data source access                                                                 | Users will not be able to save a new password to access the data source. |
| Allow reveal password for administrator and authorized users (<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Enter</kbd>) | Controls if reveal password is enabled for authorized users. |
| Allow reveal credentials (if enabled in the entry)                                                             | Allow to show the credentials if the box “Allow show credentials (everybody)“ is check inside the session. |
| Allow password in macro (send keys)                                                                            | Renders $MACRO_PASSWORD$ variable useless for this data source. |
| Password history                                                                                               | Indicates the maximum saved password history count. See Password History for more information. |
