---
eleventyComputed:
  title: "{{ en.VLT_MAJ }}s overview"
  description: "{{ en.VLT_MAJ }}s are containers that organize your folders and entries. They help divide your Advanced Data Sources into multiple compartments."
---
{{ en.VLT_MAJ }}s are containers that organize your folders and entries. They help divide your ***Advanced Data Sources*** into multiple compartments. {{ en.VLT_MAJ }}s improve the security and user experience of {{ en.RDM }}, as well as its performance by limiting the amount of entries that load at once.

{% snippet, "badgeHelp" %}
To learn about the different {{ en.VLT }} types and ways to access them, visit [{{ en.VLT_MAJ }}s](/rdm/windows/commands/view/panels/vault/).
{% endsnippet %}

This topic covers the following:

* [Creating a {{ en.VLT }}](#create-a-vault)
* [Navigating between {{ en.VLT }}s](#navigate-between-vaults)
* [Moving entries to a different {{ en.VLT }}](#move-entries-to-a-different-vault)
* [Giving users and user groups access to a {{ en.VLT }}](#give-users-and-user-groups-access-to-a-vault)
* [Organize {{ en.VLT }}s with Business units](#organize-vaults-with-business-units)
* [Creating and using {{ en.VLT }} shortcuts](#create-and-use-vault-shortcuts)

## Create a {{ en.VLT }}

Follow the steps below to learn how to create a new {{ en.VLT }}.

{% snippet, "shieldNotice" %}
For security and performance reasons, we recommend creating a different {{ en.VLT }} for each customer and/or department, depending on how you use {{ en.RDM }}.
{% endsnippet %}

1. In the ***Ribbon***, go to ***Administration – Management – {{ en.VLT_MAJ }}s***.
![Administration – Management – {{ en.VLT_MAJ }}s](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11300.png)
{% snippet, "badgeHelp" %}
If you are using a {{ en.DVLS }} or {{ en.DHUBB }} data source, {{ en.VLT }} management is done in their respective web interfaces. For more information, consult either [{{ en.DVLS }} {{ en.VLT }}s](/server/web-interface/administration/security-management/vaults/) or [{{ en.DHUB }} {{ en.VLT }}s](/hub/web-interface/administration/management/vaults/).
{% endsnippet %}

2. In the ***User and Security Management*** window, select the ***{{ en.VLT_MAJ }}s*** tab, then click on ***Add {{ en.VLT }}***.
![Add {{ en.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10739.png)
1. In the ***General*** tab, an ***ID*** is generated automatically. Enter a ***Name*** (mandatory) and a ***Description*** (optional) for your new {{ en.VLT }}.
The ***Visibility*** setting determines if this specific {{ en.VLT }} is visible to all users (public) or only to users that have access to the {{ en.VLT }} (private). It is set on the default setting, which can be modified in ***Administration – System Settings – {{ en.VLT_MAJ }} Management – {{ en.VLT_MAJ }}***.
The {{ en.VLT }} can be created as soon as a ***Name*** has been specified, but other options are available. They are presented in the next step.

{% snippet, "badgeInfo" %}
To use an existing {{ en.VLT }} template, select it from the ***Template*** drop-down list. Unlike other settings, this one cannot be configured later since it changes how the {{ en.VLT }} is created. Learn about [***Templates***](/rdm/windows/commands/file/templates/) before deciding.
{% endsnippet %}

{% snippet, "badgeInfo" %}
The ***Allow offline*** option is enabled by default. If it is disabled, the new {{ en.VLT }} will not be able to be used in [Offline mode](/rdm/windows/data-sources/offline-mode/). This setting can still be modified after the creation of the {{ en.VLT }} by going back to ***Administration – Management – {{ en.VLT_MAJ }}s***, selecting the {{ en.VLT }} to modify and clicking on ***Edit {{ en.VLT }} Settings***.
{% endsnippet %}

![{{ en.VLT_MAJ }} Management – General](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2161.png)

4. Optional: ***Users and User Groups***, ***Security***, and ***{{ en.VLT_MAJ }} Owners*** options are available in the other tabs in the left menu. Configure them to your needs now, or do it later by going back to ***Administration – Management – {{ en.VLT_MAJ }}s***, selecting the {{ en.VLT }} to modify and clicking on ***Edit {{ en.VLT }} Settings***.
    * ***Users and User Groups***: Choose which ***Users*** and ***User Groups*** will have access to the {{ en.VLT }} by checking/unchecking them. For security reasons, administrators always have access.
    * ***Security***: Specify a ***Master password*** for access to the {{ en.VLT }} and indicate whether the old password should be asked when overwriting the password.
    * ***{{ en.VLT_MAJ }} Owners***: Select user groups or users to be owners of this {{ en.VLT }}, meaning they can manage this specific {{ en.VLT }} without having access to data source administration.

5. Click ***OK*** when done.
1. The new {{ en.VLT }} will appear in the ***User and Security Management*** window. You can ***Close*** this view to access the {{ en.VLT }} from the ***{{ en.NPANE }}***.
![New {{ en.VLT }} Successfully Created](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2138.png)

### Navigate between {{ en.VLT }}s

In the ***{{ en.NPANE }}***, you can use the {{ en.VLT }} selector to move between {{ en.VLT }}s.
![{{ en.NPANE }} {{ en.VLT }} Selector](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip3602.png)
You can change the location of the {{ en.VLT }} selector in ***File – Settings – User Interface – {{ en.VLT_MAJ }}s – {{ en.VLT_MAJ }} location***. By default, the selector is at the bottom of the ***{{ en.NPANE }}***.
![File – Settings – User Interface – {{ en.VLT_MAJ }}s – {{ en.VLT_MAJ }} location](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2141.png)

### Move entries to a different {{ en.VLT }}

1. In the ***{{ en.NPANE }}***, go to the {{ en.VLT }} you want to transfer entries out of.
1. In the ***Ribbon***, go to ***Edit – Batch – Move to {{ en.VLT }}***.
![Edit – Batch – Move to {{ en.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip7030.png)
1. Select the {{ en.VLT }} you want to move entries to, then click ***Next***.
![Destination {{ en.VLT }} Selection](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip7031.png)
1. Choose the entries you want to transfer to the new {{ en.VLT }} by checking the boxes next to them, then click ***Transfer***.
![Selection of Entries to Transfer](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip7032.png)
1. A message will let you know that the transfer was successful. Click on ***Finish*** to close this view.

Your selected entries can now be found in the destination {{ en.VLT }}.

### Give users and user groups access to a {{ en.VLT }}

{% youtube 'FtSlp_TVAxE?si=Oc1kacUIjt7bJptK&amp;start=1040' %}

{{ en.VLT_MAJ }}s simplify user management because Active Directory (AD) groups define who has access to a {{ en.VLT }}. These AD groups are known as ***User groups*** in {{ en.RDM }}. In general, most groups have access to a couple of {{ en.VLT }}s, while some groups will only have access to one {{ en.VLT }}. Limiting access to {{ en.VLT }}s minimizes the need to set permissions on lower-level folders.

Follow the steps below to assign ***Users*** and ***Roles*** to a {{ en.VLT }}.

1. In the ***Ribbon***, go to ***Administration – Management – {{ en.VLT_MAJ }}s***.
   ![Administration – Management – {{ en.VLT_MAJ }}s](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11300.png)
   {% snippet, "badgeInfo" %}
   If you are using a {{ en.DVLS }} or {{ en.DHUBB }} data source, {{ en.VLT }} management is done in their respective web interfaces. For more information, consult either [{{ en.DVLS }} {{ en.VLT }}s](/server/web-interface/administration/security-management/vaults/) or [{{ en.DHUB }} {{ en.VLT }}s](/hub/web-interface/administration/management/vaults/).
   {% endsnippet %}

1. In the ***User and Security Management*** window, select the ***{{ en.VLT_MAJ }}s*** tab, then click on ***Assign Users and Roles***.
   ![User and Security Management – {{ en.VLT_MAJ }}s – Assign Users and Roles](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip7033.png)
1. In the ***{{ en.VLT_MAJ }} Assignment*** window, choose which ***Users*** and ***User Groups*** will have access to the {{ en.VLT }} by checking/unchecking the box next to them.
   {% snippet, "shieldInfo" %}
   For security reasons, administrators always have access.
   {% endsnippet %}

   ![{{ en.VLT_MAJ }} Assignment](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip7034.png)

4. Click ***Save*** when done.

   {% snippet, "shieldCaution" %}
   Keep in mind that even if you assign a role/user to a {{ en.VLT }}, the permissions that are set in the ***{{ en.VLT_MAJ }} Settings*** can change what users can see or do in the {{ en.VLT }}.
   {% endsnippet %}

### Organize {{ en.VLT }}s with Business units

{{ en.VLT_MAJ }}s can be organized into ***Business units***, improving efficiency and reducing search time. ***Business Units*** are only available for a SQL Server data source.

1. Select ***Business units*** in the ribbon of {{ en.RDM }}.
![Business units](https://cdnweb.devolutions.net/docs/RDMW6002_2024_2.png)
1. Click ***Business units*** in the ***User and security management*** window.
1. Select ***Add Business units*** to open the ***Business unit management*** window.
1. Enter the information in the ***General*** section. 
1. Go to {{ en.VLT }}s, and choose the {{ en.VLT }}s who will have access to the ***Business unit***.
1. Click ***OK*** to save.
1. The ***Business units*** are displayed in the {{ en.VLT }} selector. 
![Business units are displayed in the {{ en.VLT }} selector](https://cdnweb.devolutions.net/docs/RDMW6003_2024_2.png)

***Business units*** are also listed in the [***Activity logs***](/rdm/commands/reports/activity-logs/). 

### Create and use {{ en.VLT }} shortcuts

To navigate between {{ en.VLT }}s, you can use the {{ en.VLT }} selector drop-down menu or {{ en.VLT }} shortcuts. These shortcuts are a type of session entry called ***{{ en.VLT_MAJ }} (Shortcut)***.

If you have access to multiple {{ en.VLT }}s, you can create {{ en.VLT }} shortcuts to navigate between {{ en.VLT }}s. Here are recommendations to make your {{ en.RDM }} experience smoother and more secure if you do decide to use these shortcuts:

* Centralize all of your {{ en.VLT }} shortcuts entries into one main (default) {{ en.VLT }}.
* In each {{ en.VLT }}, add a ***{{ en.VLT_MAJ }} (Shortcut)*** entry that returns the user to the main {{ en.VLT }}.
* Remove the data source drop-down list when using {{ en.VLT }} shortcuts. To do so, navigate to ***File – Settings – User Interface – Data Sources*** and select ***Not visible*** in the ***Data source location*** drop-down list. Then, the {{ en.VLT }} selector can be [moved above the {{ en.NPANE }}](#move-entries-to-a-different-vault) for easier access.

Follow the steps below to create a ***{{ en.VLT_MAJ }} (Shortcut)*** entry.

1. In the ***{{ en.NPANE }}***, go to the data source and {{ en.VLT }} in which you want to create your shortcut.
1. In the ***Ribbon***, go to ***Edit – Add – New Entry***.
![Edit – Add – New Entry](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2142.png)
1. In the ***Miscellaneous*** tab, select the ***{{ en.VLT_MAJ }} (Shortcut)*** session entry, then click ***OK***.
![Miscellaneous – {{ en.VLT_MAJ }} (Shortcut)](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip7037.png)
1. In the ***Name*** field, enter the name of the {{ en.VLT }} you are creating a shortcut to, then select the ***Folder*** in which to create your shortcut in the corresponding drop-down list.
![Name and Folder](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2143.png)
1. Use the ellipsis button next to the ***{{ en.VLT_MAJ }} ID*** field to find the {{ en.VLT }}. In the ***Select {{ en.VLT }}*** window, you can use the ***Search*** field to help you find it.
![Select {{ en.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip7039.png)
1. Enter a ***Folder*** path in the corresponding field to create a shortcut to a specific folder or sub-folder. To do so, follow these guidelines:
    * The ***Folder*** field is case sensitive. This means that, for example, writing the folder name "clients" (lowercase "c") will not redirect to the "Clients" (uppercase "C") folder and vice versa.
    * To specify a sub-folder, write the entire path that leads to it, separating every folder with a backslash ("\"). Start by writing the name of the first parent folder, then name every subsequent folder in the path, and end with the last folder. For example, in the screenshot below, the parent folder is "Clients" and the destination folder is "Windjammer". The "Montreal" folder is the only folder between them.
    ![Folder Path](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2144.png)
7. Click ***OK***.

Your shortcut has now been created and is ready to be used.
