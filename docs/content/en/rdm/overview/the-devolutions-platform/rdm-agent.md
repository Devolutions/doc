---
eleventyComputed:
  title: What is {{ en.RDMA }}?
---
{% snippet icon.badgeCaution %}
Please note that if your Windows profile is corrupted, {{ en.RDMA }} and {{ en.RDMJ }} might not work.
{% endsnippet %}

The {{ en.RDMA }} can run commands on remote hosts, but what is really useful is that it can send commands to multiple hosts at the same time. Since {{ en.RDM }} uses a secure RDP channel to communicate with the {{ en.RDMA }}, it can only operate against Windows-based hosts.

It supports both environment and {{ en.RDM }} variables. {{ en.RDM }} variables (i.e. $HOST$, basically all the ones surrounded by dollar signs) are resolved on the client against the running session, while environment variables (i.e. %windir%, basically all the ones surrounded by percent signs) will be resolved on the remote host at execution time. You can use {{ en.RDM }} variables while running file based scripts (.ps1) within the command. The file based script variables (.ps1) will be resolved prior to sending the script to the destination host.
![{{ en.RDMA }}](https://cdnweb.devolutions.net/docs/en/rdm/windows/clip11234.png)

## Scenarios
The {{ en.RDMA }} can be used to run scripts from another {{ en.RDM }} installation. Since it uses an RDP channel for communication, it saves you from remote management headaches such as opening various ports in your firewall. This requires the lightweight installation model of just the agent package (Methods 2-4 below).

It is also used by [{{ en.RDMJ }}](/rdm/windows/overview/the-devolutions-platform/rdm-jump/) for supporting many technologies. However, it does require a full {{ en.RDM }} installation on the remote host for those features.

## Installation
Installing {{ en.RDMA }} on a remote host can be achieved in 4 different ways:

{% snippet icon.badgeNotice %}
The {{ en.RDMA }} must be configured to automatically start when a Windows session is established. Method 1 below performs that automatically, but in other cases, you must configure this manually using Windows features (startup folder or Run registry key). Please consult the documentation of your operating system for details.
{% endsnippet %}

1. Install {{ en.RDM }} and select ***Tools*** – ***More Tools*** – ***{{ en.RDMA }}***. It will launch and auto-register the Agent to automatically start with Windows.
1. Download {{ en.RDMA }} from [https://devolutions.net/remote-desktop-manager/home/download](https://devolutions.net/remote-desktop-manager/home/download), and install the agent on the remote computer.
1. Copy the files Devolutions.Utils.dll, Devolutions.Windows.Utils.dll and RDMAgent.exe from the installation folder of the {{ en.RDM }} version that is used by your team, or download the zip file containing those files at [https://devolutions.net/remote-desktop-manager/home/download](https://devolutions.net/remote-desktop-manager/home/download) and deploy them on the remote host in the folder of your choice.
1. Via Chocolatey at [https://community.chocolatey.org/packages/rdmagent](https://community.chocolatey.org/packages/rdmagent).
   ```powershell
   choco install rdmagent
   ```

Many new users using this technology wonder why a full installation of {{ en.RDM }} is required. There are three factors that make this a good solution:
* {{ en.RDM }} on the remote host does not require a data source, it’s an empty shell.
* The logging of the activity is brought back to your data source.
* Every technology supported by {{ en.RDM }} can be used remotely.
