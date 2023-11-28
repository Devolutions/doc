---
eleventyComputed:
  title: Create an {{ en.ANYID }} PAM provider
  description: To create an {{ en.ANYID }} PAM Provider, you first need to create a provider template or import an existing one.
---
To create an {{ en.ANYID }} PAM Provider, you first need to create a provider template or import an existing one. There already exists [templates](#import-an-anyidentity-template) for a few providers.

{% snippet icon.badgeCaution %}
The [WinRM](/kb/devolutions-server/how-to-articles/winrm-trustedhostslist/) needs to be enabled for this to work.
{% endsnippet %}  

## Create an {{ en.ANYID }} Template
1. In {{ en.DVLS }}, go to ***Administration – Privileged Access – Providers***.
1. Click on the ***{{ en.ANYID }} Templates*** button.  
![Administration – Privileged Access – Providers – {{ en.ANYID }} Templates](https://webdevolutions.azureedge.net/docs/en/kb/KB2173.png)
3. Click ***Add*** to create a new template.  
![Add a new {{ en.ANYID }} template](https://webdevolutions.azureedge.net/docs/en/kb/KB2174.png)
4. In ***General***, provide a ***Name*** (mandatory) and a ***Description*** (optional) for your new template. It is also possible to change the displayed icon.
1. Three actions can be enabled, each with their own script. Check the boxes next to the ones that you want to implement.
    * ***Password rotation***, to reset account passwords.
    * ***Heartbeat***, to synchronize accounts.
    * ***Account discovery***, for scanning.  
![General settings](https://webdevolutions.azureedge.net/docs/en/kb/KB2175.png)
6. In ***Provider Properties*** and ***Account Properties***, set the fields that the providers and accounts will implement. Add properties by clicking on the ***Add property*** button. For each property, provide a ***Name*** and a ***Type***. Below is a list of the different types:
    * ***Boolean***
    * ***Description*** (string)
    * ***Int***
    * ***Password*** (string)
    * ***Sensitive Data*** (SecureString)
    * ***String***
    * ***Unique Identifier*** (string)
    * ***Username*** (string)  
![Provider and Account Properties](https://webdevolutions.azureedge.net/docs/en/kb/KB2176.png)
7. Check the ***Mandatory*** box next to a property if the fields are required for creation/editing.
1. For each action that was enabled in the ***General*** section, go to the corresponding section in the left menu.
1. Map the properties of the provider/account that the script needs to work by providing the following:
    * ***Name***: Name of the variable in the script.
    * ***Source***: If the value is provided by the provider or the account.
    * ***Property***: The source property that will be injected into the script.
If need be, you can add other script parameters.  
![Actions parameters](https://webdevolutions.azureedge.net/docs/en/kb/KB2177.png)
10. Insert the script of the action by either browsing on your computer to find it or manually editing the ***Script*** field. You can also generate a base script to build upon.  
![Action Script](https://webdevolutions.azureedge.net/docs/en/kb/KB2178.png)
11. Test your script once it is complete, then ***Save*** your new template.
Your new {{ en.ANYID }} template has been created and can be found in the templates list. You can skip to <a href="#create-an-anyidentity-pam-provider">Create an {{ en.ANYID }} Provider</a>.

## Import an {{ en.ANYID }} Template
{% snippet icon.badgeHelp %}
You can access our public [GitHub repository](https://github.com/Devolutions/PAM-Providers) to find {{ en.ANYID }} PAM providers made by the Devolutions team and instructions on how to use them.
{% endsnippet %}  

1. In {{ en.DVLS }}, go to ***Administration – Privileged Access – Providers***.
1. Click on the ***{{ en.ANYID }} Templates*** button.  
![Administration – Privileged Access – Providers – {{ en.ANYID }} Templates](https://webdevolutions.azureedge.net/docs/en/kb/KB2173.png)
3. Click on the ***Import*** button.  
![Import an {{ en.ANYID }} Template](https://webdevolutions.azureedge.net/docs/en/kb/KB2179.png)
4. Upload your .json file, then click on ***Import***.
1. Adapt the template settings if need be, then click on ***Save***.

Your template has now been imported and can be found in the ***{{ en.ANYID }} Templates*** list.

## Create an {{ en.ANYID }} PAM provider
Once your template has been created or imported, you are ready to create an {{ en.ANYID }} provider.
1. Go to ***Administration – Privileged Access – Providers***, then click ***Add***.  
![Administration – Privileged Access – Providers – Add](https://webdevolutions.azureedge.net/docs/en/kb/KB2180.png)
2. Go to ***{{ en.ANYID }}*** in the left menu, then select your new template in the list. Click ***Continue***.  
![{{ en.ANYID }} Template selection](https://webdevolutions.azureedge.net/docs/en/kb/KB2181.png)
3. In the ***Provider*** configuration page, provide a ***Name*** and a ***Username***, as this information is mandatory. Then, if necessary, set the other options according to your needs.  
![Provider configuration](https://webdevolutions.azureedge.net/docs/en/kb/KB2182.png)
4. Click ***Save***.

Your new {{ en.ANYID }} provider has been created and can be found in the providers list.
