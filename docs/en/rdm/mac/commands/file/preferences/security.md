---
eleventyComputed:
  title: Security
  description: Security options in {{ en.RDMMAC }}
---
***Use File*** – ***Preferences*** – ***Security*** to configure the security of the application.

## Settings
![Preferences - Security](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6058.png)

### Application Security (Local)
| OPTION                                           | DESCRIPTION                                                                         |
|--------------------------------------------------|-------------------------------------------------------------------------------------|
| No application password                          | No password will be requested to access the application.                            |
| Use application password                         | Define a specific password to access the application.                               |
| Use computer credentials as application password | Requires the same credential as your computer credential to access the application. |

### Multi-factor Authentication
| OPTION                         | DESCRIPTION                                                                                |
|--------------------------------|--------------------------------------------------------------------------------------------|
| Require Yubikey authentication | Use a Yubikey device to get access to the application when it starts or when it is locked. |
| Require a TOTP validation      | Use the {{ en.WMAPP }} or Google Authenticator on your device to get access to the application when it starts or when it is locked. |
| Override account name          | If you wish to use a different {{ en.WS }} or Google Authenticator account than the one previously linked to your {{ en.RDM }} account, you could override the account name but you will have to reconfigure it. |
| Require Duo authentication     | Check this option to authenticate in your {{ en.RDM }} application using ***Duo authentication***. Set it up using the Configure button below this option. Select the ***Duo automatic action*** by choosing None, Push, Phone or SMS.  |

### Lock
| OPTION                          | DESCRIPTION                                                 |
|---------------------------------|-------------------------------------------------------------|
| Lock application when minimized | Check this option to lock {{ en.RDM }} after minimizing it. |
| Lock application when idle      | Check this option to lock {{ en.RDM }} after it has been idle for a certain time (define that period under this option). |

### Offline Security
| OPTION            | DESCRIPTION                                  |
|-------------------|----------------------------------------------|
| Default security  | Select to set the security to ***Default***. |
| Enhanced security | The ***Enhanced security*** allows you to set up an offline password. The offline cache will then be encrypted. The password is required when switching to ***Offline mode*** only if the ***Prompt for offline access*** option is enabled. |

### Other
| OPTION             | DESCRIPTION                                                           |
|--------------------|-----------------------------------------------------------------------|
| Reset Known Events | Select to reset all ***known events*** configured on session entries. |
