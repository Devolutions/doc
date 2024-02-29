---
eleventyComputed:
  title: Execute a PowerShell prior to opening a connection
---
It is possible to execute a PowerShell script before establishing a connection, cancel the launching or even import external PowerShell scripts. To accomplish this you would need to go into the ***Properties*** of the entry under ***Events – Before Open – PowerShell***.

Using the $RDM.connection property, the script temporarily changes any of the session properties in the context of the session launch only. When the session is closed, the properties revert back to their original values.

Here are some example of scripts that can be executed.

## Change the title of the tab by Adding the date
In the ***PowerShell script*** window, copy the script provided below and click ***OK***.

```powershell
$date = Get-Date -DisplayHint Date
$RDM.Connection.TabTitle = $RDM.Connection.Name + "(" + $date + ")"
```
![!!KB4701](https://cdnweb.devolutions.net/docs/en/kb/KB4701.png)

## Execute a script and cancel the launching of the session
To cancel the launch of a session, in the ***PowerShell script*** window of the entry, copy the script below and click ***OK*** to save.

`$RDM.Cancel = $true`

## Import an external PowerShell script
The Import-Module cmdlet can be used to call an external PowerShell script.

In the following sample, it loads the RSAToken.ps1 script and call its function New_RSAToken that returns a value. Then it appends the content of the $RSAToken variable to the session's password before opening the RDP session.
![!!KB8114](https://cdnweb.devolutions.net/docs/en/kb/KB8114.png)
