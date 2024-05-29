---
eleventyComputed:
  title: Install {{ en.RDM }} using Chocolatey
  description: Installing {{ en.RDM }} can be streamlined using Chocolatey, a package manager for Windows.
---
Installing {{ en.RDM }} can be streamlined using Chocolatey, a package manager for Windows. Begin by [installing Chocolatey](#install-chocolatey); if you already have Chocolatey installed, you can proceed directly to the [{{ en.RDM }} installation steps](#install-remote-desktop-manager-with-chocolatey).

## Install Chocolatey

### Prerequisites

To install Chocolatey, ensure your system meets the following requirements: 
* **Operating system**: Windows 7 or later / Windows Server 2003 or later
* **PowerShell**: Version 2 or later
* **.NET Framework**: Version 4 or later

{% snippet icon.badgeInfo %}
The installation process will automatically attempt to install .NET 4.0 if it is not already present on your system.
{% endsnippet %}

### Installation steps
1. Open PowerShell as an administrator. To do so, you can press <kbd>Windows</kbd>+<kbd>X</kbd> and select ***Terminal (Admin)***.
1. Copy and paste the following installation command into the PowerShell window and press <kbd>Enter</kbd>:
   ```powershell
   Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
   ```
1. After the command completes, verify the installation by running the `choco` command. If Chocolatey is installed correctly, you should see the Chocolatey version.

## Install {{ en.RDM }} with Chocolatey
1. Open PowerShell as an administrator. To do so, you can press <kbd>Windows</kbd>+<kbd>X</kbd> and select ***Terminal (Admin)***.
1. Copy and paste the following installation command into the PowerShell window and press <kbd>Enter</kbd>: `choco install rdm -y`. The `-y` flag automatically approves all prompts, facilitating an unattended installation.

Once the installation completes, {{ en.RDM }} will be ready to use on your system.
