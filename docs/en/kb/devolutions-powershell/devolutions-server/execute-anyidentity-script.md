---
eleventyComputed:
  title: Execute {{ en.ANYID }} PowerShell scripts
  description: This topic will cover how to execute various PowerShell scripts that call {{ en.ANYID }} providers in {{ en.DVLS }}.
---
{{ en.ANYID }} are providers that are not built-in to {{ en.DVLS }}, however it is possible to create a custom PowerShell script to get information about the users and passwords. {{ en.DVLS }} already includes Azure Key Vault and Windows Accounts [custom scipts](#existing-templates).
{% snippet icon.badgeInfo %}
Every script will be different depending on the provider.
{% endsnippet %}  

## Set up the PowerShell script
{% snippet icon.badgeCaution %}
The [WinRM](/kb/devolutions-server/how-to-articles/winrm-trustedhostslist/) needs to be enabled for the script to work.
{% endsnippet %}  

1. In the web interface for {{ en.DVLS }}, make sure you are connected to the right data source.
1. Go to ***Administration*** – ***Privileged Access*** – ***Providers***.
1. Click on ***{{ en.ANYID }} Templates***.  
![{{ en.ANYID }} Templates](https://webdevolutions.azureedge.net/docs/en/kb/KB0140.png)
1. Click on ***Add***.  
![Add](https://webdevolutions.azureedge.net/docs/en/kb/KB0141.png)
1. Fill the information in the ***General*** tab;  
![General tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0142.png)
  * ***Name***: The name of the template.
  * ***Description***: The description for the template.
  * ***Actions***: These options will add certain functionalities to the script, if one or more are enabled they then need to be modified in the appropriate tab.
    * ***Password rotation***: This option will enable password rotation at certain intervals (a base script is provided).
    * ***Heartbeat***: This option will check if the local and provider password match (a base script is provided).
    * ***Account discovery***: This option will check the provider for all existing accounts, making it possible to import and manage them (a base script is provided).
6. Fill the information in the ***Provider Properties*** tab.
![Provider Properties tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0143.png)
1. Fill the information in the ***Account Properties*** tab.
![Account Properties tab](https://webdevolutions.azureedge.net/docs/en/kb/KB0144.png)
1. Click ***Save***.
1. 

### Existing templates
{% snippet icon.badgeHelp %}
Azure Key Vault and Windows Accounts already have custom PowerShell scripts with instructions on our public [GitHub](https://github.com/Devolutions/PAM-Providers/tree/master/Providers).
{% endsnippet %}  

### Check for trusted hosts
Here is the command line to fetch trusted hosts: `Get-Item "WSMan:localhost\Client\TrustedHosts"`  

Here is the command line to update the local machine's trusted hosts with a certain value: `Set-Item 'WSMan:localhost\Client\TrustedHosts' -Value '*' -Force`
{% snippet icon.shieldCaution %}
Make certain to replace the `*` in the command above. If left as is the `*` acts as a wildcard, which would make every remote host become trusted.
{% endsnippet %}  
