---
title: Vaults overview
description: Vaults are containers that organize your folders and entries. They help divide your Advanced Data Sources into multiple compartments.
---

{{ en.VLT }}s are containers that organize your folders and entries. They help divide your ***Advanced Data Sources*** into multiple compartments. {{ en.VLT }}s improve the security and user experience of {{ en.RDM }}, as well as its performance by limiting the amount of entries that load at once.

{% snippet icon.badgeHelp %}
To learn about the different vault types and ways to access them, visit [Vaults](/rdm/mac/commands/view/vault/).
{% endsnippet %}
 
This topic covers the following:

* [Creating a vault](#create-a-vault)
* [Navigating between vaults](#navigate-between-vaults)
* [Moving entries to a different vault](#move-entries-to-a-different-vault)
* [Giving users and user groups access to a vault](#give-users-and-user-groups-access-to-a-vault)
* [Creating and using vault shortcuts](#create-and-use-vault-shortcuts)

## Create a vault

Follow the steps below to learn how to create a new vault.

{% snippet icon.shieldNotice %} 
For security and performance reasons, we recommend creating a different vault for each customer and/or department, depending on how you use {{ en.RDM }}. 
{% endsnippet %}
 
1. In the ***Ribbon***, go to ***Administration – {{ en.VLT }}s***.  

{% snippet icon.badgeHelp %} 
If you are using a {{ en.DVLS }} or {{ en.HUBB }} data source, vault management is done in their respective web interfaces. For more information, consult either [{{ en.DVLS }} Vaults](/server/web-interface/administration/security-management/vaults/) or [{{ en.HUB }} Vaults](/hub/web-interface/hub-overview/administration/management/vaults/). 
{% endsnippet %}
 
2. In the ***User and Security Management*** window, select the ***{{ en.VLT }}s*** tab, then click on ***Add {{ en.VLT }}***.  

1. In the ***General*** tab, an ***ID*** is generated automatically. Enter a ***Name*** (mandatory) and a ***Description*** (optional) for your new vault.  
The ***Visibility*** setting determines if this specific vault is visible to all users (public) or only to users that have access to the vault (private). It is set on the default setting, which can be modified in ***Administration – System Settings – Vault Management – Vault***.  
The vault can be created as soon as a ***Name*** has been specified, but other options are available. They are presented in the next step. 

{% snippet icon.badgeInfo %} 
To use an existing vault template, select it from the ***Template*** drop-down list. Unlike other settings, this one cannot be configured later since it changes how the vault is created. Learn about [***Templates***](/rdm/mac/commands/file/templates/) before deciding. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
The ***Allow offline*** option is enabled by default. If it is disabled, the new vault will not be able to be used in offline mode. This setting can still be modified after the creation of the vault by going back to ***Administration – {{ en.VLT }}s***, selecting the vault to modify and clicking on ***Edit***. 
{% endsnippet %}

4. Optional: ***Users***, ***Security***, and ***Vault Owners*** options are available in the other tabs in the left menu. Configure them to your needs now, or do it later by going back to ***Administration – {{ en.VLT }}s***, selecting the vault to modify and clicking on ***Edit***.
    * ***Users***: Choose which ***Users*** will have access to the vault by checking/unchecking them. For security reasons, administrators always have access.
    * ***Security***: Specify a ***Master password*** for access to the vault and indicate whether the old password should be asked when overwriting the password.
    * ***Vault Owners***: Select user groups or users to be owners of this vault, meaning they can manage this specific vault without having access to data source administration.

5. Click ***OK*** when done. 
1. The new {{ en.VLT }} will appear in the ***User and Security Management*** window. You can ***Close*** this view to access the vault from the ***{{ en.NPANE }}***.  

### Navigate between vaults

In the ***{{ en.NPANE }}***, you can use the vault selector to move between vaults.  

You can change the location of the vault selector in ***File – Preferences – User Interface – General – {{ en.VLT }} location***. By default, the selector is at the bottom of the ***{{ en.NPANE }}***.  

### Move entries to a different vault

1. In the ***{{ en.NPANE }}***, go to the vault you want to transfer entries out of.
1. In the ***Ribbon***, go to ***Edit – Move to {{ en.VLT }}***.  
1. Select the vault you want to move entries to, then click ***Next***.  
1. Choose the entries you want to transfer to the new vault by checking the boxes next to them, then click ***Transfer***.  
1. A message will let you know that the transfer was successful. Click on ***Finish*** to close this view.  

Your selected entries can now be found in the destination vault.

### Give users and user groups access to a vault

{{ en.VLT }}s simplify user management because Active Directory (AD) groups define who has access to a vault. These AD groups are known as ***User groups*** in {{ en.RDM }}. In general, most groups have access to a couple of vaults, while some groups will only have access to one vault. Limiting access to vaults minimizes the need to set permissions on lower-level folders.  

Follow the steps below to assign ***Users*** and ***Roles*** to a vault.  

1. In the ***Ribbon***, go to ***Administration – {{ en.VLT }}s***.  

{% snippet icon.badgeInfo %} 
If you are using a {{ en.DVLS }} or {{ en.HUBB }} data source, vault management is done in their respective web interfaces. For more information, consult either [{{ en.DVLS }} Vaults](/server/web-interface/administration/security-management/vaults/) or [{{ en.HUB }} Vaults](/hub/web-interface/hub-overview/administration/management/vaults/). 
{% endsnippet %}

2. In the ***User and Security Management*** window, select the ***{{ en.VLT }}s*** tab, then click on ***Assign Users*** or ***Assign User Groups***.  
1. In the ***Vault Assignment*** window, choose which ***Users*** or ***User Groups*** will have access to the vault by checking/unchecking the box next to them. 
{% snippet icon.shieldInfo %} 
For security reasons, administrators always have access. 
{% endsnippet %}

4. Click ***OK*** when done.

{% snippet icon.shieldCaution %} 
Keep in mind that even if you assign a role/user to a vault, the permissions that are set in the ***{{ en.VLT }} Settings*** can change what users can see or do in the vault. 
{% endsnippet %}
 
### Create and use vault shortcuts

To navigate between vaults, you can use the vault selector drop-down menu or vault shortcuts. These shortcuts are a type of session entry called ***Vault (Shortcut)***.  

If you have access to multiple vaults, you can create vault shortcuts to navigate between vaults. Here are recommendations to make your {{ en.RDM }} experience smoother and more secure if you do decide to use these shortcuts:  

* Centralize all of your vault shortcuts entries into one main (default) vault. 
* In each vault, add a ***Vault (Shortcut)*** entry that returns the user to the main vault. 

Follow the steps below to create a ***Vault (Shortcut)*** entry.

1. In the ***{{ en.NPANE }}***, go to the data source and vault in which you want to create your shortcut. 
1. In the ***Ribbon***, go to ***Edit – New Entry***.  
1. In the ***Miscellaneous*** tab, select the ***Vault (Shortcut)*** session entry, then click ***OK***.  
1. In ***General***, enter the ***Name*** of the vault you are creating a shortcut to, then select the ***Folder*** in which to create your shortcut in the corresponding drop-down list.  
1. In ***Vault (Shortcut)***, use the ellipsis button next to the ***{{ en.VLT }} ID*** field to find the vault. In the ***Select Vault*** window, you can use the ***Search*** field to help you find it.  
1. Enter a ***Folder*** path in the corresponding field to create a shortcut to a specific folder or sub-folder. To do so, follow these guidelines: 
    * The ***Folder*** field is case sensitive. This means that, for example, writing the folder name "clients" (lowercase "c") will not redirect to the "Clients" (uppercase "C") folder and vice versa. 
    * To specify a sub-folder, write the entire path that leads to it, separating every folder with a backslash ("\"). Start by writing the name of the first parent folder, then name every subsequent folder in the path, and end with the last folder. For example, in the screenshot below, the parent folder is "Clients" and the destination folder is "Windjammer". The "Montreal" folder is the only folder between them. 
7. Click ***Create***.

Your shortcut has now been created and is ready to be used.
