---
title: Vaults Overview
---

{{ en.VLT }} s are containers that organize your folders and entries. They help divide your ***Advanced Data Sources*** into multiple compartments. {{ en.VLT }} s improve the security and user experience of {{ en.RDM }} , as well as its performance by limiting the amount of entries that load at once. 

{% snippet icon.badgeInfo %} 
To learn about the different vault types and ways to access them, visit our [Vaults](Vault) topic. 
{% endsnippet %}
 
This topic covers the following:  

* [Creating a {{ en.VLT }}](#create-a--envlt) 
* [Navigating between {{ en.VLT }}s](#navigate-between--envlt-s) 
* [Moving entries to a different {{ en.VLT }}](#move-entries-to-a-different--envlt) 
* [Giving users and user groups access to a {{ en.VLT }}](#give-users-and-user-groups-access-to-a--envlt) 
* [Creating and using {{ en.VLT }} shortcuts](#create-and-use--envlt--shortcuts) 

### Create a {{ en.VLT }} 

Follow the steps below to learn how to create a new {{ en.VLT }} . 

{% snippet icon.shieldNotice %} 
For security and performance reasons, we recommend creating a different vault for each customer and/or department, depending on how you use {{ en.RDM }} . 
{% endsnippet %}
 
1. In the ***Ribbon*** , go to ***Administration – Management –*** ***{{ en.VLT }}s*** .  
![Administration – Management – Vaults](/img/en/rdm/windows/clip11300.png) 
{% snippet icon.badgeInfo %} 
If you are using a {{ en.RDMS }} or {{ en.PHUB }} Business data source, vault management is done in their respective web interfaces. For more information, consult either our [{{ en.RDMS }}](https://helpserver.devolutions.net/webinterface_vaultmgmnt.html) or [{{ en.PHUB }}](https://helphub.devolutions.net/vaults.html) topics about vaults. 
{% endsnippet %}
 
2. In the ***User and Security Management*** window, select the ***{{ en.VLT }}s*** tab, then click on ***Add*** ***{{ en.VLT }}*** .  
![Add Vault](/img/en/rdm/windows/clip10739.png) 
1. In the ***General*** tab, an ***ID*** is generated automatically. Enter a ***Name*** (mandatory) and a ***Description*** (optional) for your new vault. The vault can be created as soon as a ***Name*** has been specified, but other options are available. They are presented in the next step. 

{% snippet icon.badgeInfo %} 
To use an existing {{ en.VLT }} template, select it from the ***Template*** drop-down list. Unlike other settings, this one cannot be configured later since it changes how the vault is created. Learn about ***Templates*** before deciding. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
The ***Allow offline*** option is enabled by default. If it is disabled, the new vault will not be able to be used in [Offline mode](/rdm/windows/data-sources/offline-mode/) . This setting can still be modified after the creation of the vault by going back to ***Administration – Management –*** ***{{ en.VLT }}s*** , selecting the vault to modify and clicking on ***Edit*** ***{{ en.VLT }}*** ***Settings*** . 
{% endsnippet %}
 
![Vault Management – General](/img/en/rdm/windows/clip11301.png) 

4. Optional: ***Users and User Groups*** and ***Security*** options are available in the other tabs in the left menu. Configure them to your needs now, or do it later by going back to ***Administration – Management –*** ***{{ en.VLT }}s*** , selecting the vault to modify and clicking on ***Edit*** ***{{ en.VLT }}*** ***Settings*** . 
    1. ***Users and User Groups*** : Choose which ***Users*** and ***User Groups*** will have access to the vault by checking/unchecking them. 
{% snippet icon.shieldInfo %} 
For security reasons, administrators always have access. 
{% endsnippet %}
 
    ![Vault Management – Users and User Groups](/img/en/rdm/windows/RDMWin2139.png)  

    2. ***Security*** : Specify a ***Master password*** for access to the vault and indicate whether the old password should be asked when overwriting the password.  
    ![Vault Management – Security](/img/en/rdm/windows/RDMWin2140.png) 

5. Click ***OK*** when done. 
1. The new {{ en.VLT }} will appear in the ***User and Security Management*** window. You can ***Close*** this view to access the {{ en.VLT }} from the ***{{ en.NPANE }}*** .  
![New Vault Successfully Created](/img/en/rdm/windows/RDMWin2138.png) 

### Navigate between {{ en.VLT }}s 

In the ***{{ en.NPANE }}*** , you can use the vault selector to move between vaults.  
![Navigation Pane Vault Selector](/img/en/rdm/windows/clip3602.png) 
You can change the location of the vault selector in ***File – Options – User Interface –*** ***{{ en.VLT }}s*** ***–*** ***{{ en.VLT }}*** ***location*** . By default, the selector is at the bottom of the ***{{ en.NPANE }}*** .  
![File – Options – User Interface – Vaults – Vault location](/img/en/rdm/windows/RDMWin2141.png) 

### Move entries to a different {{ en.VLT }} 

1. In the ***{{ en.NPANE }}*** , go to the vault you want to transfer entries out of. 
1. In the ***Ribbon*** , go to ***Edit – Batch – Move to*** ***{{ en.VLT }}*** .  
![Edit – Batch – Move to Vault](/img/en/rdm/windows/clip7030.png) 
1. Select the vault you want to move entries to, then click ***Next*** .  
![Destination Vault Selection](/img/en/rdm/windows/clip7031.png) 
1. Choose the entries you want to transfer to the new vault by checking the boxes next to them, then click ***Transfer*** .  
![Selection of Entries to Transfer](/img/en/rdm/windows/clip7032.png) 
1. A message will let you know that the transfer was successful. Click on ***Finish*** to close this view.  

Your selected entries can now be found in the destination vault. 

### Give Users and User Groups Access to a {{ en.VLT }} 

{{ en.VLT }} s simplify user management because Active Directory (AD) groups define who has access to a vault. These AD groups are known as ***User groups*** in {{ en.RDM }} . In general, most groups have access to a couple of vaults, while some groups will only have access to one vault. Limiting access to vaults minimizes the need to set permissions on lower-level folders.  

Follow the steps below to assign ***Users*** and ***Roles*** to a vault.  

1. In the ***Ribbon*** , go to ***Administration – Management –*** ***{{ en.VLT }}s*** .  
![Administration – Management – Vaults](/img/en/rdm/windows/clip11300.png) 
{% snippet icon.badgeInfo %} 
If you are using a {{ en.RDMS }} or {{ en.PHUB }} Business data source, vault management is done in their respective web interfaces. For more information, consult either our [{{ en.RDMS }}](/server/web-interface/administration/security-management/vaults/) or [{{ en.PHUB }}](/hub/web-interface/hub-overview/administration/management/vaults/) topics about vaults. 
{% endsnippet %}
 
2. In the ***User and Security Management*** window, select the ***{{ en.VLT }}s*** tab, then click on ***Assign Users and Roles*** .  
![User and Security Management – Vaults – Assign Users and Roles](/img/en/rdm/windows/clip7033.png) 
1. In the ***Vault Assignment*** window, choose which ***Users*** and ***User Groups*** will have access to the vault by checking/unchecking the box next to them. 
{% snippet icon.shieldInfo %} 
For security reasons, administrators always have access. 
{% endsnippet %}
 
![Vault Assignment](/img/en/rdm/windows/clip7034.png) 

4. Click ***Save*** when done. 

{% snippet icon.shieldCaution %} 
Keep in mind that even if you assign a role/user to a {{ en.VLT }} , the permissions that are set in the ***{{ en.VLT }} Settings*** can change what users can see or do in the {{ en.VLT }} . 
{% endsnippet %}
 
### Create and use {{ en.VLT }} shortcuts 

To navigate between vaults, you can use the {{ en.VLT }} Selector drop-down menu or vault shortcuts. These shortcuts are a type of session entry called ***Vault (Shortcut)*** .  

If you have access to multiple vaults, you can create vault shortcuts to navigate between vaults. Here are recommendations to make your {{ en.RDM }} experience smoother and more secure if you do decide to use these shortcuts:  

* Centralize all of your vault shortcuts entries into one main (default) vault. 
* In each vault, add a ***Vault (Shortcut)*** entry that returns the user to the main vault. 
* Remove the data source drop-down list when using vault shortcuts. To do so, navigate to ***File – Options – User Interface – Data Sources*** and select ***Not visible*** in the ***Data source location*** drop-down list. Then, the {{ en.VLT }} Selector can be moved above the {{ en.NPANE }} for easier access.  

Follow the steps below to create a ***Vault (Shortcut)*** entry.  

1. In the ***{{ en.NPANE }}*** , go to the data source and vault in which you want to create your shortcut. 
1. In the ***Ribbon*** , go to ***Edit – Add – New Entry*** .  
![Edit – Add – New Entry](/img/en/rdm/windows/RDMWin2142.png) 
1. In the ***Miscellaneous*** tab, select the ***Vault (Shortcut)*** session entry, then click ***OK*** .  
![Miscellaneous – Vault (Shortcut)](/img/en/rdm/windows/clip7037.png) 
1. In the ***Name*** field, enter the name of the vault you are creating a shortcut to, then select the ***Folder*** in which to create your shortcut in the corresponding drop-down list.  
![Name and Folder](/img/en/rdm/windows/RDMWin2143.png) 
1. Use the ellipsis button next to the ***{{ en.VLT }}*** ***ID*** field to find the vault. In the ***Select Vault*** window, you can use the ***Search*** field to help you find it.  
![Select Vault](/img/en/rdm/windows/clip7039.png) 
1. Enter a ***Folder*** path in the corresponding field to create a shortcut to a specific folder or sub-folder. To do so, follow these guidelines: 
    * The ***Folder*** field is case sensitive. This means that, for example, writing the folder name &quot; c lients&quot; (lowercase &quot;c&quot;) will not redirect to the &quot; C lients&quot; (uppercase &quot;C&quot;) folder and vice versa. 
    * To specify a sub-folder, write the entire path that leads to it, separating every folder with a backslash (&quot;\&quot;). Start by writing the name of the first parent folder, then name every subsequent folder in the path, and end with the last folder. For example, in the screenshot below, the parent folder is &quot;Clients&quot; and the destination folder is &quot;Windjammer&quot;. The &quot;Montreal&quot; folder is the only folder between them. 
    ![Folder Path](/img/en/rdm/windows/RDMWin2144.png) 
7. Click ***OK*** . 

Your shortcut has now been created and is ready to be used. 

