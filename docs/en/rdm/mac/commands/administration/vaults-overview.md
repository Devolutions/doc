---
eleventyComputed:
  title: "{{ en.VLT_MAJ }}s overview"
  description: "{{ en.VLT_MAJ }}s are containers that organize your folders and entries. They help divide your Advanced Data Sources into multiple compartments."
---
{{ en.VLT_MAJ }}s are containers that organize your folders and entries. They help divide your ***Advanced Data Sources*** into multiple compartments. {{ en.VLT_MAJ }}s improve the security and user experience of {{ en.RDM }}, as well as its performance by limiting the amount of entries that load at once.

{% snippet, "badgeHelp" %}
To learn about the different {{ en.VLT }} types and ways to access them, visit [{{ en.VLT_MAJ }}s](/rdm/mac/commands/view/vault/).
{% endsnippet %}
 
Here is what is covered below:

* [Creating a {{ en.VLT }}](#create-a-vault)
* [Navigating between {{ en.VLT }}s](#navigate-between-vaults)
* [Moving entries to a different {{ en.VLT }}](#move-entries-to-a-different-vault)
* [Giving users and user groups access to a {{ en.VLT }}](#give-users-and-user-groups-access-to-a-vault)
* [Creating and using {{ en.VLT }} shortcuts](#create-and-use-vault-shortcuts)

## Create a {{ en.VLT }}

Follow the steps below to learn how to create a new {{ en.VLT }}.

{% snippet, "shieldNotice" %} 
For security and performance reasons, we recommend creating a different {{ en.VLT }} for each customer and/or department, depending on how you use {{ en.RDM }}. 
{% endsnippet %}
 
1. In the ***Ribbon***, go to ***Administration – {{ en.VLT_MAJ }}s***.  

{% snippet, "badgeHelp" %} 
If you are using a {{ en.DVLS }} or {{ en.DHUBB }} data source, {{ en.VLT }} management is done in their respective web interfaces. For more information, consult either [{{ en.DVLS }} {{ en.VLT }}s](/server/web-interface/administration/security-management/vaults/) or [{{ en.DHUB }} {{ en.VLT }}s](/hub/web-interface/administration/management/vaults/). 
{% endsnippet %}
 
2. In the ***User and Security Management*** window, select the ***{{ en.VLT_MAJ }}s*** tab, then click on ***Add {{ en.VLT }}***.
1. Choose a [{{ en.VLT }} type](/rdm/mac/user-interface/customization/vault-types) (default, business, secrets, or credentials). {{ en.VLT_MAJ }} types limit the entry types that can be created in this specific {{ en.VLT }}.
1. In the ***General*** tab, an ***ID*** is generated automatically. Enter a ***Name*** (mandatory) and a ***Description*** (optional) for your new {{ en.VLT }}.  
The ***Visibility*** setting determines if this specific {{ en.VLT }} is visible to all users (public) or only to users that have access to the {{ en.VLT }} (private). It is set on the default setting, which can be modified in ***Administration – System Settings – {{ en.VLT_MAJ }} Management – {{ en.VLT_MAJ }}***.  
The {{ en.VLT }} can be created as soon as a ***Name*** has been specified, but other options are available. They are presented in the next step. 

{% snippet, "badgeInfo" %} 
To use an existing {{ en.VLT }} template, select it from the ***Template*** drop-down list. Unlike other settings, this one cannot be configured later since it changes how the {{ en.VLT }} is created. Learn about [***Templates***](/rdm/mac/commands/file/templates/) before deciding. 
{% endsnippet %}
 
{% snippet, "badgeInfo" %} 
The ***Allow offline*** option is enabled by default. If it is disabled, the new {{ en.VLT }} will not be able to be used in offline mode. This setting can still be modified after the creation of the {{ en.VLT }} by going back to ***Administration – {{ en.VLT_MAJ }}s***, selecting the {{ en.VLT }} to modify and clicking on ***Edit***. 
{% endsnippet %}

4. Optional: ***Users***, ***Security***, and ***{{ en.VLT_MAJ }} Owners*** options are available in the other tabs in the left menu. Configure them to your needs now, or do it later by going back to ***Administration – {{ en.VLT_MAJ }}s***, selecting the {{ en.VLT }} to modify and clicking on ***Edit***.
    * ***Users***: Choose which ***Users*** will have access to the {{ en.VLT }} by checking/unchecking them. For security reasons, administrators always have access.
    * ***Security***: Specify a ***Master password*** for access to the {{ en.VLT }} and indicate whether the old password should be asked when overwriting the password.
    * ***{{ en.VLT_MAJ }} Owners***: Select user groups or users to be owners of this {{ en.VLT }}, meaning they can manage this specific {{ en.VLT }} without having access to data source administration.

5. Click ***OK*** when done. 
1. The new {{ en.VLT }} will appear in the ***User and Security Management*** window. You can ***Close*** this view to access the {{ en.VLT }} from the ***{{ en.NPANE }}***.  

### Navigate between {{ en.VLT }}s

In the ***{{ en.NPANE }}***, you can use the {{ en.VLT }} selector to move between {{ en.VLT }}s.  

You can change the location of the {{ en.VLT }} selector in ***File – Preferences – User Interface – General – {{ en.VLT_MAJ }} location***. By default, the selector is at the bottom of the ***{{ en.NPANE }}***.  

### Move entries to a different {{ en.VLT }}

1. In the ***{{ en.NPANE }}***, go to the {{ en.VLT }} you want to transfer entries out of.
1. In the ***Ribbon***, go to ***Edit – Move to {{ en.VLT }}***.  
1. Select the {{ en.VLT }} you want to move entries to, then click ***Next***.  
1. Choose the entries you want to transfer to the new {{ en.VLT }} by checking the boxes next to them, then click ***Transfer***.  
1. A message will let you know that the transfer was successful. Click on ***Finish*** to close this view.  

Your selected entries can now be found in the destination {{ en.VLT }}.

### Give users and user groups access to a {{ en.VLT }}

{{ en.VLT_MAJ }}s simplify user management because Active Directory (AD) groups define who has access to a {{ en.VLT }}. These AD groups are known as ***User groups*** in {{ en.RDM }}. In general, most groups have access to a couple of {{ en.VLT }}s, while some groups will only have access to one {{ en.VLT }}. Limiting access to {{ en.VLT }}s minimizes the need to set permissions on lower-level folders.  

Follow the steps below to assign ***Users*** and ***Roles*** to a {{ en.VLT }}.  

1. In the ***Ribbon***, go to ***Administration – {{ en.VLT_MAJ }}s***.  

{% snippet, "badgeInfo" %} 
If you are using a {{ en.DVLS }} or {{ en.DHUBB }} data source, {{ en.VLT }} management is done in their respective web interfaces. For more information, consult either [{{ en.DVLS }} {{ en.VLT }}s](/server/web-interface/administration/security-management/vaults/) or [{{ en.DHUB }} {{ en.VLT }}s](/hub/web-interface/administration/management/vaults/). 
{% endsnippet %}

2. In the ***User and Security Management*** window, select the ***{{ en.VLT_MAJ }}s*** tab, then click on ***Assign Users*** or ***Assign User Groups***.  
1. In the ***{{ en.VLT_MAJ }} Assignment*** window, choose which ***Users*** or ***User Groups*** will have access to the {{ en.VLT }} by checking/unchecking the box next to them. 
{% snippet, "shieldInfo" %} 
For security reasons, administrators always have access. 
{% endsnippet %}

4. Click ***OK*** when done.

{% snippet, "shieldCaution" %} 
Keep in mind that even if you assign a role/user to a {{ en.VLT }}, the permissions that are set in the ***{{ en.VLT_MAJ }} settings*** can change what users can see or do in the {{ en.VLT }}. 
{% endsnippet %}
 
### Create and use {{ en.VLT }} shortcuts

To navigate between {{ en.VLT }}s, you can use the {{ en.VLT }} selector drop-down menu or {{ en.VLT }} shortcuts. These shortcuts are a type of session entry called ***{{ en.VLT }} (Shortcut)***.  

If you have access to multiple {{ en.VLT }}s, you can create {{ en.VLT }} shortcuts to navigate between {{ en.VLT }}s. Here are recommendations to make your {{ en.RDM }} experience smoother and more secure if you do decide to use these shortcuts:  

* Centralize all of your {{ en.VLT }} shortcuts entries into one main (default) {{ en.VLT }}. 
* In each {{ en.VLT }}, add a ***{{ en.VLT_MAJ }} (Shortcut)*** entry that returns the user to the main {{ en.VLT }}. 

Follow the steps below to create a ***{{ en.VLT_MAJ }} (Shortcut)*** entry.

1. In the ***{{ en.NPANE }}***, go to the data source and {{ en.VLT }} in which you want to create your shortcut. 
1. In the ***Ribbon***, go to ***Edit – New Entry***.  
1. In the ***Miscellaneous*** tab, select the ***{{ en.VLT_MAJ }} (Shortcut)*** session entry, then click ***OK***.  
1. In ***General***, enter the ***Name*** of the {{ en.VLT }} you are creating a shortcut to, then select the ***Folder*** in which to create your shortcut in the corresponding drop-down list.  
1. In ***{{ en.VLT_MAJ }} (Shortcut)***, use the ellipsis button next to the ***{{ en.VLT }} ID*** field to find the {{ en.VLT }}. In the ***Select {{ en.VLT }}*** window, you can use the ***Search*** field to help you find it.  
1. Enter a ***Folder*** path in the corresponding field to create a shortcut to a specific folder or sub-folder. To do so, follow these guidelines: 
    * The ***Folder*** field is case sensitive. This means that, for example, writing the folder name "clients" (lowercase "c") will not redirect to the "Clients" (uppercase "C") folder and vice versa. 
    * To specify a sub-folder, write the entire path that leads to it, separating every folder with a backslash ("\"). Start by writing the name of the first parent folder, then name every subsequent folder in the path, and end with the last folder. For example, in the screenshot below, the parent folder is "Clients" and the destination folder is "Windjammer". The "Montreal" folder is the only folder between them. 
7. Click ***Create***.

Your shortcut has now been created and is ready to be used.
