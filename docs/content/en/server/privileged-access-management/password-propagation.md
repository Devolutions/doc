---
eleventyComputed:
  title: Password propagation
  description: Password propagation allows privileged accounts passwords reset to be propagated to remote servers services.
  keywords:
  - propagation
---
***Password propagation*** allows privileged accounts passwords reset to be propagated to remote servers services either [by script](#propagation-by-script) or with [Active Directory](#active-directory-specific-propagation).

{% youtube 'drRLA7U8YsQ?si=ihVhTcJOKxAh5kKS&amp;start=225' %}

## Propagation by script
The following sections describe the properties of the propagation by script feature within the Privileged Access Management (PAM) solution. This method covers all PAM account providers.

### Seting up propagation by script
1. Download our [.json template file](https://github.com/Devolutions/PAM-Providers/blob/master/Propagation-Scripts/windows_service/template.json) from GitHub or [create a your own template](#create-a-powershell-template).
1. Log in to {{ en.DVLS }} with an administrator account.
1. Go to ***Administration – Privileged access – Propagation (preview)***.
![Propagation (preview)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0096.png)
1. Click on ***Script templates***.
![Script templates](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0097.png)
1. Click on ***Import***.
![Import](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0098.png)
1. Select the previously downloaded template .json file and click ***Import***.
![Import the template](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0099.png)
1. Click ***Save***.
![Save the template](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0100.png)
1. Go back to the ***Propagation (preview)*** page.
1. Click on ***Add***.
![Add](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0101.png)
1. Select the desired template and click on ***Select***.
![Select the template](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0102.png)
1. In ***General***, name this configuration.
1. In ***Propagation properties***, enter the information for the remote machine.
1. In the ***Property mapping, click on ***Configure a PAM entry***.
![Configure a PAM entry](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0103.png)
1. Select a privileged account type, then click on ***Continue***.
1. Select the fields of the account (or provider) to associate with the variables and click ***Save***.
1. Click ***Save*** and close the ***Propagation configuration*** window.
![Save](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0104.png)
1. Go to ***Privileged access*** and select an account type previously configured with ***Propagation***.
1. Click on ***Edit***.
1. Go to ***Propagation*** tab and click on ***Add***.
![Add](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0105.png)
1. Select the configuration to link to that account, and click ***Confirm***. It is possible to select multiple configurations.
![Confirm](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0106.png)
1. Click ***OK*** to save the changes and close the window.
![OK](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0107.png)
   {% snippet icon.badgeInfo %}
   To test if the link is successful, click on ***More*** and then ***Reset Password***. If working correctly, the newly created file will appear on the remote machine. If not, it is recommended to check the logs of the account.
   {% endsnippet %}

### Create a PowerShell template
1. Log in to {{ en.DVLS }} with an administrator account.
1. Go to ***Administration – Privileged access – Propagation (preview)***.
![Propagation (preview)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0096.png)
1. Click on ***Script templates***.
![Script templates](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0097.png)
1. Click on ***Add***.
![Add](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0112.png)
1. In the General tab, add a ***Name*** for this template. It is also possible to add a ***Description***. The icon can also be changed by clicking on it.
1. In ***Propagation properties***, add the variables for the script by clicking on ***+ Add property***. The variables added in this tab should represent the URL to the remote machine (i.e., ComputerIP, Username, Password, and RootFolder).
![Propagation properties](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0113.png)
1. In ***Property mapping***, add the variables for the script by clicking on ***+ Add property***. The variables added in this tab should represent the ***Field mapping*** of the remote machine (i.e., FileName and FilePath).
![Property mapping](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0114.png)
1. In ***Script***, the previous variables appear as well as the ***NewPassword*** variable. This new variable will contain the new password for the account on script execution.
1. Click on ***Generate base script***.
![Generate base script](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0115.png)
1. Click ***Save*** and close the window.
   {% snippet icon.badgeInfo %}
   Learn more about custom scripts for this feature by visiting our [public GitHub](https://github.com/Devolutions/PAM-Providers/blob/master/Propagation-Scripts/Create-A-Template.md).
   {% endsnippet %}

## Active Directory specific propagation
The following section describes the properties of the Active Directory ***Password Propagation*** feature within the PAM solution. This ***Password propagation*** feature is only available for Domain accounts.
![Password propagation](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8174.png)

{% snippet icon.badgeNotice %}
The WinRM must be properly configured as described in [WinRM and trusted hosts list](/kb/devolutions-server/how-to-articles/winrm-trustedhostslist/) article.
{% endsnippet %}

### Properties
| Option                         | Description                                                              |
|--------------------------------|--------------------------------------------------------------------------|
| ***Computers***                | <ul><li>***Inherited***: Inherits the computer's list from the parent's folder.</li><li>***Custom***: Set a custom list of computers.</li><li>***Custom + Inherited***: Inherits the computer's list from the parent's folder and set a custom list of computers.</li></ul> |
| ***Computer name***            | Name of each computer on which the password propagation will take place. |
| ***Browse domain containers*** | Browse the domain to select the computers.                               |
