---
eleventyComputed:
  title: VMware
---
VMware tools make assumptions that their scripts are run in an interactive session and also present warnings the first time that they are run. As it stands today, you have to run commands interactively after you have installed or upgraded their tools.

The PowerCLI configuration has multiple scopes: ***Session***, ***User***, and ***AllUsers*** Please refer to their documentation for details and on how to properly configure as per your requirements.

## Connection to the server failed!
This error message is displayed for various reasons. For a quick diagnostic, launch the VMware vSphere PowerCLI shortcut of the same bitness (64 bit) as your {{ en.RDM }} Some commands will be listed in the table below to diagnose issues in sequence.
![!!KB4121](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4121.png)

## In the PowerShell window: error message appear but it is impossible to read them before the window closes
{{ en.RDM }} ultimately sends a few commands in an encoded script, you can open a PowerShell window and type the following commands sequentially. This way you will have time to see the error messages.

The first command connects with the server, a password prompt will appear:

`Connect-VIServer {server ip or name};`

The second command lists the virtual machines present on the server. It displays the Name and the ID.

`Get-View -ViewType VirtualMachine | select -Property Name, {$_.Moref.Value};`

## In the PowerShell window: there were one or many problem with the server certificates
You also see a message related to ***Set-PowerCLIConfiguration*** Please consult [https://www.vmware.com/support/developer/PowerCLI/PowerCLI51/html/Set-PowerCLIConfiguration.html](https://www.vmware.com/support/developer/PowerCLI/PowerCLI51/html/Set-PowerCLIConfiguration.html) and make an informed decision as what is the best course of action when you take your security concerns into account. For users that are comfortable in leaving the default certificate on the VMware server, you can launch a PowerShell command window and run the following:

`set-PowerCLIConfiguration -invalidCertificateAction "ignore" -confirm:$false`

## In the PowerShell window: there is a question about multiple server support
As described in their message, it will be the default value in a coming release. Please consult their documentation and make an informed decision, but most users should accept the Multiple option.

## Issues with vmware powercli
The term 'connect-viserver' is not recognized as the name of a cmdlet, function, script file, or operable program. check the spelling of the name, or if a path was included, verify that the path is correct and try again.

### Cause
This error occurs because the PowerCLI modules are not linked with PowerShell or the PowerCLI Module for the Connect-ViServer command is missing.

### Solution
Check is VMware PowerCLI is installed.

Running Get-Module VM* -ListAvailable in PowerShell shows the list of VMware modules installed.
![!!KB4122](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4122.png)
You should see 4 VMware modules listed in PowerShell as shown in the image above.

You can test to see if PowerShell recognizes the Connect-ViServer command.
![!!KB4123](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4123.png)
By typing the command, we see that PowerShell does not have the proper module installed.

In the PowerShell Window, install the PowerCLI modules by using the Install-Module command. Many step by step instructions can be found on Google.

Then type the Get-Module VM* -ListAvailable command again, we can see that the PowerCLI modules are now listed.
![!!KB4124](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4124.png)
A final test with the Connect-ViServer command, by typing it in PowerShell, the connection is established and the issue should be resolved.
![!!KB4125](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4125.png)

## Additional troubleshooting
If try on a new computer and have an issue with VimAutomation.Core, you can install it with the command:

`Install-Module -Name VMware.VimAutomation.Core -AllowClobber -Scope CurrentUser`

After the installation, if you run the command:

`Get-Module VM* -ListAvailable`

You should get the output below:
![!!KB4126](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4126.png)
If you restart {{ en.RDM }} with the current user (not running as admin) and open the VMware Dashboard entry, after 30 seconds, you should see all your servers.

If this does not work, create a PowerShell entry, the blue one, select ***Embedded Script*** and type the script below:

```powershell
Import-Module VMware.PowerCLI;
Connect-ViServer "SERVER_IP";
Get-View -ViewType VirtualMachine | select -Property Name, {$_.Moref.Value};
```

Click ***OK*** twice and try to start the Powershell entry.

If you get an error about execution policies, please refer to [https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-5.1](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-5.1)

But you can resolve the issue with the following command;

`Set-ExecutionPolicy Unrestricted -Scope CurrentUser`

Please refer to your administrator to ensure this command is allowed to be used within your infrastructure.
