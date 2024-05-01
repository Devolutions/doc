---
eleventyComputed:
  title: Run As {{ en.ANYID }} PowerShell scripts with execution context
  description: This topic will cover how to run various PowerShell scripts calling {{ en.ANYID }} providers in {{ en.DVLS }} within a certain context.
---
The ***Run As*** option lets you run {{ en.ANYID }} provider scripts within different contexts and runs the scheduler to do so. This can be done on a local or a remote machine, making it useful to find out what the script is trying to accomplish, whether it is completing certain actions or accessing certain files.
{% snippet icon.badgeHelp %}
{{ en.DVLS }} already includes Azure Key Vault and Windows Accounts [custom scripts](/kb/devolutions-server/how-to-articles/create-anyidentity-pam-provider/#import-an-anyidentity-template) templates.
{% endsnippet %}

## Run As PowerShell script in various contexts
1. In {{ en.DVLS }}, go to ***Administration*** – ***Privileged Access*** – ***Providers***.
1. Click on ***Add***.
![Add button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0149.png)
1. Click on the ***{{ en.ANYID }}*** tab.
![{{ en.ANYID }} tab](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0150.png)
1. Select a PAM provider and click ***Continue***.
1. Click on the ***Run As*** tab.
![Run As tab](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0151.png)
1. In the ***Credential*** dropdown select either;
  * Default: Runs the script with the current scheduler configuration.
  * Custom: Runs the script within a specified ***Username***, ***Password*** and ***Host Name***.
{% snippet icon.shieldInfo %}
It is advised to pick or create a user with less permissions to test a script.
{% endsnippet %}

7. Click ***Save*** to close this window and save the changes.

### Check for trusted hosts
If ***Run As*** is not pointing to a trusted host, the configuration will not work.

Here is the command line to fetch trusted hosts: `Get-Item "WSMan:localhost\Client\TrustedHosts"`

Here is the command line to update the local machine's trusted hosts with a certain value: `Set-Item 'WSMan:localhost\Client\TrustedHosts' -Value '*' -Force`
{% snippet icon.shieldCaution %}
Make certain to replace the `*` in the command above. If left as is the `*` acts as a wildcard, which would make every remote host become trusted.
{% endsnippet %}

{% snippet icon.badgeHelp %}
Read the topic on [trusted hosts](/kb/devolutions-server/how-to-articles/winrm-trustedhostslist/) for more information.
{% endsnippet %}
