---
eleventyComputed:
  title: Remote installation with PSExec
---
When you need to perform a remote installation, you have multiple options. Such as a domain policy, a logon script or PSExec.

Depending on the way the security is configured on the remote computer, you may run into issues where even an administrator cannot install an application properly. For these cases, you need to run PSExec in the context of the system account.

First of all, you will need to install the Sysinternals tools from Microsoft, because you will need the help of **PSExec.exe** in the execution of this script. ([https://technet.microsoft.com/en-us/sysinternals/bb842062](https://technet.microsoft.com/en-us/sysinternals/bb842062))

Then, download the *.msi or the *.exe of the application you wish to install and save the file on a shared drive that is accessible from the remote computer.

{% snippet icon.badgeInfo %}
Options exist to copy files remotely, please refer to PSExec documentation for further details.
{% endsnippet %}

## Settings

Create a ***Macros/Scripts/Tools*** entry, use the ***PSExec*** type. In the Command line section, add the following (long) line:

```
C:\Tools\Sysinternals\psexec.exe \\$HOST$ -i -u $TOOL_DOMAIN$\$TOOL_USERNAME$ -p $TOOL_PASSWORD$ cmd /
k "msiexec /i \\SRV-DEPLOY\msi\Setup.RemoteDesktopManager.10.9.0.0.msi /quiet /passive /norestart"
```

{% snippet icon.badgeInfo %}
The full path to the *.msi must be entered. A shared network is recommended in this case.
{% endsnippet %}

A few notes on that command line:

1. Replace the path to launch PSExec.
1. Add the appropriate credentials in the ***Tools*** section of your session, if left blank it will use your current Windows session credentials.
1. Indicate the appropriate server shared to get the *.msi or *.exe.
1. When you are ready to deploy your application on the remote computer, you just need to select the appropriate session in the ***{{ en.NPANE }}*** and launch the ***Macros/Scripts/Tools*** from the Dashboard. The ***Macros/Scripts/Tools*** entry can also be launched via the {{ en.RDMA }}.

## Usage

The ***Macros/Scripts/Tools*** type are always run in the context of a session. In fact, they use the information in the session to identify what host to run the tool against, that is why we used the $HOST$ variable.

For this reason, the first step is to select a session, any type of session will do (RDP, SSH, etc). After selecting the session, the dashboard will display the ***Macros/Scripts/Tools*** Simply clicking on the tool will therefore launch it against the host linked to the currently selected session. You can select hosts and install in sequence.
