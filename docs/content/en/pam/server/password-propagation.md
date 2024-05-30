---
eleventyComputed:
  title: Password propagation
---
***Password Propagation*** allows privileged accounts passwords reset to be propagated to remote servers services. This topic covers [Propagation by script](#propagation-by-script) and [Active Directory specific propagation](#active-directory-specific-propagation).

{% youtube 'drRLA7U8YsQ?si=ihVhTcJOKxAh5kKS&amp;start=225' %}

## Propagation by script
The following sections describe the properties of the ***Propagation*** by script feature within the Privileged Access Management solution. The [Steps](#steps-with-template) section explains how to set up this feature by using a Devolutions template, but it is also possible to [Create a template](#create-a-powershell-template).

{% snippet, "badgeInfo" %}
This method covers all PAM account providers.
{% endsnippet %}

### Steps (with template)
1. Download our [template .json file](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts/templates) from GitHub.
1. Log in to {{ en.DVLS }} with an administrator account.
1. Go to ***Administration*** – ***Modules*** – ***Privileged Access*** – ***Propagation (Preview)***.
![Propagation (Preview)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0096.png)
1. Click on ***Script Templates***.
![Script Templates](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0097.png)
1. Click on ***Import***.
![Import](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0098.png)
1. Select the previously downloaded template .json file and click ***Import***.
![Import button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0099.png)
1. Click ***Save***.
![Save button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0100.png)
1. Go back to the ***Propagation (Preview)*** page.
1. Click on ***Add***.
![Add](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0101.png)
1. Select the desired template and click on ***Select***.
![Select button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0102.png)
1. In the ***General*** tab, name this configuration.
1. In the ***Propagation Properties*** tab, enter the information for the remote machine.
1. In the ***Property Mapping*** tab, click on ***Configure a PAM entry*** to select a privileged account type.
![Configure a PAM entry](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0103.png)
1. Click on ***Continue***.
1. Select the fields of the account (or provider) to associate with the variables and click ***Save***.
1. Click ***Save*** to save this new configuration and close the window.
![Save button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0104.png)
1. Go to the ***Privileged Access*** tab and select an account type previously configured with ***Propagation***.
1. Click on ***Edit***.
1. Go to the Propagation tab and click on the "***+***" button.
![+ button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0105.png)
1. Select the configuration to link to that account, and click ***Confirm***.
![Confirm button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0106.png)
   {% snippet, "badgeInfo" %}
   It is possible to select multiple configurations.
   {% endsnippet %}

1. Click ***OK*** to save the changes and close the window.
![OK button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0107.png)
   {% snippet, "badgeInfo" %}
   To test if the link is successful, click on ***More*** and then ***Reset Password***. If working correctly, the newly created file will appear on the remote machine. If not, it is recommended to check the logs of the account.
   {% endsnippet %}

### Create a PowerShell template
1. Log in to {{ en.DVLS }} with an administrator account.
1. Go to ***Administration*** – ***Modules*** – ***Privileged Access*** – ***Propagation (Preview)***.
![Propagation (Preview)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0096.png)
1. Click on ***Script Templates***.
![Script Templates](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0097.png)
1. Click on ***Add***.
![Add](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0112.png)
1. In the General tab, add a ***Name*** for this template.
   {% snippet, "badgeInfo" %}
   It is possible to add a ***Description***. The icon can also be changed by clicking on it.
   {% endsnippet %}

1. In the ***Propagation Properties*** tab, add the variables for the script by clicking on ***+ Add property***. The variables added in this tab should represent the URL to the remote machine (i.e., ComputerIP, Username, Password and RootFolder).
![Propagation Properties](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0113.png)
1. In the ***Property Mapping*** tab, add the variables for the script by clicking on ***+ Add property***. The variables added in this tab should represent the ***Field Mapping*** of the remote machine (i.e., FileName and FilePath).
![Property Mapping](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0114.png)
1. In the ***Script*** tab, the previous variables appear as well as the ***NewPassword*** variable. This new variable will contain the new password for the account on script execution.
1. Click on ***Generate base script***.
![Generate base script](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0115.png)
   {% snippet, "badgeInfo" %}
   Click on ***Edit*** to modify or add to the script.
   {% endsnippet %}

1. Click ***Save*** to save this configuration and close the window.
   {% snippet, "badgeInfo" %}
   Learn more about custom scripts for this feature by visiting our [public GitHub](https://github.com/Devolutions/PAM-Providers/blob/master/Propagation-Scripts/Create-A-Template.md).
   {% endsnippet %}

## Active Directory specific propagation
{% snippet, "badgeNotice" %}
The WinRM must be properly configured as described in [WinRM and Trusted Hosts List](/server/kb/how-to-articles/winrm-trustedhostslist/) article.
{% endsnippet %}
{% snippet, "badgeCaution" %}
This ***Password Propagation*** feature is only available for Domain accounts.
{% endsnippet %}

The following section describes the properties of the Active Directory ***Password Propagation*** feature within the Privileged Access Management solution.
![Password Propagation](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8174.png)

### Properties
| Option                         | Description                                                              |
|--------------------------------|--------------------------------------------------------------------------|
| ***Computers***                | ***Inherited***: Inherits the computer's list from the parent's folder.<br>***Custom***: Set a custom list of computers.<br>***Custom + Inherited***: Inherits the computer's list from the parent's folder and set a custom list of computers. |
| ***Computer name***            | Name of each computer on which the password propagation will take place. |
| ***Browse domain containers*** | Browse the domain to select the computers.                               |
