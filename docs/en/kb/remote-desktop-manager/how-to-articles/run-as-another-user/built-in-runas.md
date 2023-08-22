---
title: Built-in RunAs
---
{% snippet icon.badgeInfo %}
This article describes the built in method of using ***Run As*** For sessions types that do not yet support the built in method you can follow the manual steps outlined [here](/kb/remote-desktop-manager/how-to-articles/run-as-another-user/)
{% endsnippet %}

## Settings

### Supported Types

The following types currently support ***Run As***:

| Option               | Description |
| -------------------- | ----------- |
| Session              | <ul><li>Command Line</li><li>PowerShell</li></ul> |
| Macros/Scripts/Tools | <ul><li>Command Line</li><li>PowerShell Local</li><li>PowerShell Remote</li><li>PSExec</li></ul> |
| Session Add-on       | <ul><li>SQL Server Management Studio</li></ul> |

## Session

![!!KB4566.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4566.png)  
Sessions that support Run As will have a Run As tab where you specify which credentials to use when starting with Run As.

| Option                      | Description |
| --------------------------- | ----------- |
| None                        | No Run As is performed. |
| Current session             | Use the same credentials as defined in the session. |
| Custom credentials          | Use specified custom credentials. |
| Credential repository       | Use a link credential entry. |
| Use my personal credentials | Use a link personal credential entry. |

## Macros/Scripts/Tools

With tools session types you only need to specify ***Run as different user*** in ***Advanced*** tab. At execution time the credentials will be resolved and used to start the Windows Credentials unless you select ***Use session credentials***, in which case it will use those active for the session.  
![!!KB4567.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4567.png)  

With tools session types you only need to specify ***Run as different user*** At execution time the credentials will be resolved and used to start the Run As process.

## Session Add-on

SQL Server Management Studio supports Run As. Configure it like you would configure a normal session.  
![!!KB4568.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4568.png)  

Click on ***Run as different user*** to modify the ***Run As*** settings.  
![!!KB4569.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4569.png)

## Notes

Run as Different User and Run As Administrator are mutually exclusive.

Run as Different User does not allow for Shell Execute

### Example: Command line session with Run as different user on the same workgroup/domain

1. Create a new Command Line session.
1. Set the command to ***CMD***.  
![!!KB4570.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4570.png)
1. Specify the ***Run As*** credentials.  
![!!KB4571.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4571.png)
1. Save your session.
1. Run your Command Line session.  
![!!KB4572.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4572.png)
