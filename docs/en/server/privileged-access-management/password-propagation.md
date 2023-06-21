---
title: Password Propagation
keyword: 
- propagation
---
***Password Propagation*** allows privileged accounts passwords reset to be propagated to remote servers services. This topic covers <a href="#propagation-by-script">Propagation by script</a> and <a href="#azure-directory-specific-propagation">Azure Directory specific propagation</a>.

## Propagation by script
The following sections describe the properties of the ***Propagation*** by script feature within the Privileged Access Management solution. The <a href="#steps-with-template">Steps</a> section explains how to set up this feature by using a Devolutions template, but it is also possible to <a href="#create-a-powershell-template">Create a template</a>.

{% snippet icon.badgeInfo %}
This method covers all PAM account providers.
{% endsnippet %}  

### Steps (with template)
1. Download our [template .json file](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts/templates) from GitHub.
1. Log in to {{ en.DVLS }} with an administrator account.
1. Click on the ***Adminitration*** tab.  

1. Go to ***Modules*** – ***Privileged Access*** – ***Propagation (Preview)***.  

1. Click on ***Script Templates***.  

1. Click on ***Import***.  

1. Select the previously downloaded template .json file and click ***Import***.  

1. Click ***Save***.

1. Go back to the ***Propagation (Preview)*** page.
1. Click on ***Add***.  

1. Select the desired template and click on ***Select***.  

1. In the ***General*** tab, name this configuration.
1. In the ***Propagation Properties*** tab, enter the information for the remote machine.
1. In the ***Property Mapping*** tab, click on ***Configure a PAM entry*** to select a privileged account type.  

1. Click on ***Continue***.
1. Select the fields of the account (or provider) to associate with the variables and click ***Save***.
1. Click ***Save*** to save this new configuration and close the window.  

1. Go to the ***Privileged Access*** tab and select an account type previously configured with ***Propagation***.
1. Click on ***Edit***.
1. Go to the Propagation tab and click on the "***+***" button.  

1. Select the configuration to link to that account.  

{% snippet icon.badgeInfo %}
It is possible to select multiple configurations.
{% endsnippet %}

22. Click ***OK*** to save the changes and close the window.

To test if the link is successful, click on ***More*** and then ***Reset Password***. If working correctly, the newly created file will appear on the remote machine. If not, it is recommended to check the logs of the account.

### Create a PowerShell template
1. Log in to {{ en.DVLS }} with an administrator account.
1. Click on the ***Adminitration*** tab.  

1. Go to ***Modules*** – ***Privileged Access*** – ***Propagation (Preview)***.  

1. Click on ***Script Templates***.  

1. Click on ***Add***.  

1. In the General tab, add a ***Name*** for this template.
{% snippet icon.badgeInfo %}
It is possible to add a ***Description***. The icon can also be changed by clicking on it.
{% endsnippet %}

7. In the ***Propagation Properties*** tab, add the variables for the script by clicking on ***+ Add property***. The variables added in this tab should represent the URL to the remote machine (i.e., ComputerIP, Username, Password and RootFolder).  

1. In the ***Property Mapping*** tab, add the variables for the script by clicking on ***+ Add property***. The variables added in this tab should represent the ***Field Mapping*** of the remote machine (i.e., FileName and FilePath).  

1. In the ***Script*** tab, the previous variables appear as well as the ***NewPassword*** variable. This new variable will contain the new password for the account on script execution.

1. Click on ***Generate base script*** and click on ***Edit*** to modify or add to it.  

1. Click ***Save*** to save this configuration and close the window.


## Azure Directory specific propagation
{% snippet icon.badgeNotice %}
The WinRM must be properly configured as described in [WinRM and Trusted Hosts List](/kb/devolutions-server/how-to-articles/winrm-trustedhostslist/) article.
{% endsnippet %}
{% snippet icon.badgeCaution %}
This ***Password Propagation*** feature is only available for Domain accounts.
{% endsnippet %}

The following section describes the properties of the Azure Directory ***Password Propagation*** feature within the Privileged Access Management solution.

![Password Propagation](https://webdevolutions.azureedge.net/docs/en/server/ServerOp8174.png) 

### Properties

Option  | Description  
:-----  | :----------  
***Computers***|***Inherited***:  Inherits the computer's list from the parent's folder.<p>***Custom***: Set a custom list of computers.<p>***Custom + Inherited***: Inherits the computer's list from the parent's folder and set a custom list of computers.
***Computer name***|Name of each computer on which the password propagation will take place. 
***Browse domain containers***|Browse the domain to select the computers.  
