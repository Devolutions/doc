---
eleventyComputed:
  title: Security
  description: Use File – Options – Security to configure security settings related to local application security, multi-factor authentication, locking, offline security, certificate security, and more.
---
Use ***File – Options – Security*** to configure security settings related to local application security, multi-factor authentication, locking, offline security, certificate security, and more.
![File – Options – Security](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2152.png)

## Settings
### Application Security (Local)
| OPTION                                       | DESCRIPTION |
|----------------------------------------------|-------------|
| Application Security (Local)                 | Secure your local {{ en.RDM }} with a custom application password, using the computer's credentials as the application password. This setting uses the credentials of any users that already connected to the computer (local accounts or domain accounts). The option ***Force currently logged on username and domain*** does not allow the username box to be updated and it is fixed to the currently logged on domain user account on this computer. This feature forces the user to re-enter the password to open {{ en.RDM }}. Windows Hello can be enabled but it must first be configured on your local computer. You will be prompted for this password when you open your application. You can also choose not to set an application password. |
| New password / Confirm password              | If ***Use application password*** was selected in the ***Application Security*** drop-down list, enter an application password in the ***New password*** field, then enter it again in the ***Confirm password*** field. |
| Encrypt local files using the application password | If ***Use application password*** was selected in the ***Application Security*** drop-down list, check this option to use the previously created application password to encrypt your local {{ en.RDM }} files. |
| Advanced Options                             | This option is only available if ***Encrypt local files using the application password*** was enabled. Clicking it opens a new window. In this window, define the ***Number of key derivation iterations***, which is the number of derivations used for the key derivation function during encryption. A larger number is safer, but may affect performance. The default value is 1000. |
| Force currently logged on username and domain| If enabled, forces the use of the username and domain used to log in the current Windows session. |


### Multi-factor Authentication
| OPTION                         | DESCRIPTION                                                                                     |
|--------------------------------|-------------------------------------------------------------------------------------------------|
| Authentication mode            | Select ***Default – Prompt for selection on use*** to be asked which MFA to configure on use, or select ***Check against all configured methods*** to be prompted with the configured methods only. Note that the MFA is set locally. To enforce this setting, enable ***Force multi-factor authentication on the application login*** and ***Disable the menu File – Options*** [policies](/kb/remote-desktop-manager/how-to-articles/group-policies/) to prevent a user to deactivate these settings. The MFA can also be enabled at the data source level in ***Administration – System Settings – Application Specific – Applications*** instead of using the policies to block the ***Options***. |
| Require Yubikey authentication | Check this option to authenticate in your {{ en.RDM }} application using Yubikey authentication. Enter your Yubikey in the field below this option.                                                                                                                            |
| Require a TOTP validation ({{ en.WS }} or Google Authenticator) | Check this option to validate your authentication to your {{ en.RDM }} application with a Time-based one-time password (TOTP) sent through {{ en.WS }} or Google Authenticator. Set it up using the ***Configure*** button below this option.    |
| Override account name | Enter a new name for your TOTP account that will override the current one.                               |
| Require Duo authentication                         | Check this option to authenticate in your {{ en.RDM }} application using Duo authentication. Set it up using the ***Configure*** button below this option.             |
| Duo automatic action | Select the action that Duo must use to validate the authentication.         |

### Lock
| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| On minimize                 | Check this option to lock {{ en.RDM }} after minimizing it. Unlock the application using the configured security method(s).|
| On idle                     | Check this option to lock {{ en.RDM }} after it has been idle for a certain time (define that period under this option). Unlock the application using the configured security method(s). |
| On Windows lock             | Check this option to lock {{ en.RDM }} after your computer goes into sleep mode / hibernation. Unlock the application using the configured security method(s). |
| On standby                  | Check this option to lock {{ en.RDM }} after locking your Windows session. Unlock the application using the configured security method(s). |

### Offline Security
| OPTION                          | DESCRIPTION |
|---------------------------------|-------------|
| Offline Security                | In the drop-down list, select between **Default security** and **Enhanced security**. The enhanced security allows you to set up an offline password. The offline cache will then be encrypted. The password is required when switching to Offline mode only if the **Prompt for offline access** option is enabled. |
| New password / Confirm password | This is only available with enhanced offline security. Enter an offline password in the **New password** field, then enter it again in the **Confirm password** field. |
| Prompt for offline access       | This is only available with enhanced offline security. If enabled, {{ en.RDM }} will ask if you want to access the application offline on startup. |

### Certificate Security

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Ignore application certificate errors | Check this option to disable the application certificate validation. This is not recommended, as it would compromise confidentiality and integrity of communications between the client and the server and could expose the application to potential threats.        |
| Enforce certificate revocation check | Check this option to enable the validation that the certificate has not been revoked. This is necessary if any of the URLs for certificate validation are unavailable for any reason.                                                                          |

### Other

| OPTION                                   | DESCRIPTION                                                            |
|------------------------------------------|------------------------------------------------------------------------|
| Enable secure desktop                    | If enabled, secure desktop opens password dialogs on another desktop to add an extra level of security and prevent keyloggers from logging what you write. |
| Disable all events on sessions           | Check this option to disable all events configured on session entries. |
| Enable DPAPI cryptography on local files | Encrypts {{ en.RDM }} configuration files on the workstation using Windows' native encryption capabilities (DPAPI - Data Protection API). This provides additional security for the sensitive information contained in these files (such as datasource connection information). DPAPI is a robust additional encryption tool managed by the operating system that ensures that the configuration files containing sensitive information and the offline cache files can only be decrypted on your own machine. Enabling DPAPI and Offline Security will encrypt the files twice since DPAPI is a separated encryption step. In addition to the offline files, this option encrypts the following {{ en.RDM }} configuration files:<ul><li>RemoteDesktopManager.enb</li><li>RemoteDesktopManager.enc</li><li>RemoteDesktopManager.stb</li><li>RemoteDesktopManager.stv</li></ul><br>The feature is disabled by default, because under certain rare conditions (beyond {{ en.RDM }}'s control), data decrypted by DPAPI may be unrecoverable, preventing {{ en.RDM }} from starting up. |
| Enable anti-malware scanning             | Check this option to enable {{ en.RDM }} to scan for malware. This feature might not be compatible with your anti-malware provider. It supports Microsoft Defender, Avast, AVG, and ESET. |
