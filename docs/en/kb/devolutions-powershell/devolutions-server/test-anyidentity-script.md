---
eleventyComputed:
  title: Test AnyIdentity PowerShell scripts within execution context
  description: This topic will cover how to test various PowerShell scripts calling AnyIdentity providers in {{ en.DVLS }} within a certain context.
---
This feature lets you test AnyIdentity provider custom PowerShell scripts within their context.
{% snippet icon.badgeHelp %}
{{ en.DVLS }} already includes Azure Key Vault and Windows Accounts [custom scipts](/kb/devolutions-server/how-to-articles/create-anyidentity-pam-provider/#import-an-anyidentity-template) templates.
{% endsnippet %}  

## Test the PowerShell script
1. In {{ en.DVLS }}, go to ***Administration*** – ***Privileged Access*** – ***Providers***.
1. Click on ***AnyIdentity Templates***.  
![AnyIdentity Templates](https://webdevolutions.azureedge.net/docs/en/kb/KB0140.png)
1. Click on the ***Edit*** button.  
1. 

### Check for trusted hosts
Here is the command line to fetch trusted hosts: `Get-Item "WSMan:localhost\Client\TrustedHosts"`  

Here is the command line to update the local machine's trusted hosts with a certain value: `Set-Item 'WSMan:localhost\Client\TrustedHosts' -Value '*' -Force`
{% snippet icon.shieldCaution %}
Make certain to replace the `*` in the command above. If left as is the `*` acts as a wildcard, which would make every remote host become trusted.
{% endsnippet %}  

{% snippet icon.badgeHelp %}
Read the topic on [trusted hosts](/kb/devolutions-server/how-to-articles/winrm-trustedhostslist/) for more information.
{% endsnippet %}  
