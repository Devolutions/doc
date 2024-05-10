---
eleventyComputed:
  title: Batch actions samples
  description: The Batch Actions allow for a quick way to modify multiple sessions at once, but within {{ en.RDM }} itself.  
---
The ***Batch Actions*** allow for a quick way to modify multiple sessions at once, but within {{ en.RDM }} itself.  

To be able to create your PowerShell script, you would need the name of the field(s) that you would like to update. To retrieve the exact name of the field, right-click on your session and select ***Clipboard – Copy***. You can then paste the information in a text editor to retrieve the name of the field(s) that you would like to modify via the Custom PowerShell Command.  

Since they use the Powershell technology, we provides samples in this section because the fields are the same when accessed through our Batch Actions or through Powershell.

## Samples

### Disable Only send password in HTML Password Field option in Website sessions
```powershell
$connection.Web.OnlySendPasswordInPasswordField = $false;
$RDM.Save ();
```

### Enable View Url Embedded (Information Entries)
```powershell
$connection.DataEntry.ViewUrlDisplayMode = "Default";
$RDM.Save();
```
```powershell
ViewUrlDisplayMode: "Default" = embedded, "External" = external.
```

### Open URL (external) for web login (Information Entries)
```powershell
$connection.DataEntry.DefaultAction = "OpenUrlExternal";
$RDM.Save();
```

### SSH Shell Batch Edit (Session Type Settings)
```powershell
$connection.Terminal.MaxScrollbackLines = 2000;

$connection.Terminal.AlwaysAcceptFingerprint = $true;

$connection.Terminal.EnableLogging = $true;
$connection.Terminal.LogPath = '$LOGPATH$\$NAME$_$DATE_TEXT_ISO$_$TIME_TEXT_ISO$.log';
$connection.Terminal.LogMode = 1;
$connection.Terminal.LogOverwriteMode = 0;
$RDM.Save();
```

Here are some values that you can change for this command;  

LogPath: your path between ' ' (single quotes). You can also use variables. i.e. %USERPROFILE%, $NAME$, etc. In this example $LOGPATH$ is a custom variable defined in the [System settings – Custom Variables](/rdm/commands/administration/settings/system-settings/application-specific/application/).

```powershell
LogMode: 1 = Printable Output, 0 = Event
TerminalLogOverwriteMode: 0 = default, 1 = prompt, 2 = append, 3 = overwrite
```

Here are also other options that you can modify;

```powershell
$connection.Terminal.BellMode = 'Visual'
$connection.Terminal.CloseOnDisconnect = $false
```

### Convert WebSite sessions into LogMeIn sessions
```powershell
$connection.ConnectionType = 'LogMeIn';
$connection.ConnectionSubType = ' ';
$connection.LogMeIn.Url = $connection.WebBrowserUrl;
$RDM.Save();
```

#### Enable the "Hide script errors in all your LogMeIn sessions."
```powershell
$connection.LogMeIn.ScriptErrorsSuppressed = $true;
$RDM.Save();
```

#### Hide navigation bar.
```powershell
$connection.LogMeIn.ShowUrl = $false;
$RDM.Save();
```

#### Change the Web Browser Application.
```powershell
$connection.LogMeIn.WebBrowserApplication = "GoogleChrome";
$RDM.Save();
```

#### Enable the Sandbox Process.
```powershell
$connection.LogMeIn.SandboxProcess = $true;
$RDM.Save();
```

#### Change the URL.
```powershell
$connection.LogMeIn.Url = " ";
$RDM.Save();
```

#### Change the Portal Login field.
```powershell
$connection.LogMeIn.DashboardHostUrl = " ";
$RDM.Save();
```

#### Change Username & Password.
Please run these two one at a time

Host;

```powershell
$connection.LogMeIn.UserName = " ";
$RDM.Save();
```
```powershell
$connection.LogMeIn.SafePassword = " ";
$RDM.Save();
```

Portal;

```powershell
$connection.LogMeIn. DashboardEmail = " ";
$RDM.Save();
```
```powershell
$connection.LogMeIn. SafePasswordDashboard = " ";
$RDM.Save();
```

### Change a custom field value without changing the data
```powershell
$connection.MetaInformation.CustomField3Title = "MyField"
$RDM.Save();
```
Please note that you would need to change "MyField" for the value that you want to replace Custom field #3 with.

### Bulk update FQDN info to sessions.
```powershell
$connection.host = $Connection.name + ".mydomain.com"
$RDM.Save();
```

### Bulk Change Recording Field for Putty sessions
```powershell
$connection.Putty.RecordingMode = 1;
$connection.Putty.RecordingFileName = "C:\path\to\your\file.log"
$RDM.Save();
```

### Change the computer field of an RDP session
```powershell
$connection.Url = " ";
$RDM.Save();
```

### Encoding
```powershell
$connection.Putty.TelnetEncoding = "UTF-8";
$RDM.Save();
```

### Change the expiration date of an RDP session
The date must be specified using the ISO8601 format.  

```powershell
$connection.MetaInformation.Expiration = "2018-12-25T00:00:00-05:00";
$RDM.Save();
```

### Change the expiration date of an RDP session with a relative date
Use any date time operator supported by PowerShell.  

```powershell
$connection.MetaInformation.Expiration = (Get-Date).AddMonths(6);
$RDM.Save();
```

### Modify Page Tab Title in UI
```powershell
$connection.TabTitle = '$COMPANY_NAME$ - $NAME$';
$RDM.Save();
```

### Clear Keywords in Session
```powershell
$connection.MetaInformation.Keywords = ";
$RDM.Save();
```

### Change History Max lines for SSH Shell (Rebex)
```powershell
$connection.Putty.HistoryMaxLength = 2000;
$RDM.Save();
```

### Convert Command Line tool to a Command Line session
```powershell
$connection.ConnectionType = 3;
$RDM.Save();
```

### Change Keyboard Hook for an RDP session
```powershell
$connection.KeyboardHook = "OnTheRemoteComputer";
$RDM.Save();
```

### Set credential property to Prompt on connection and bind it to a folder.
```powershell
$connection.CredentialConnectionGroup = "YourFolderPath\Credentials"
$connection.CredentialConnectionID = "00000000-0000-0000-0000-000000000000"
$connection.CredentialConnectionSavedPath = "--- Prompt on connection ---"
$RDM.Save();
```