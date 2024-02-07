---
eleventyComputed:
  title: Add website
---
The Add Website button is only available while in the [Matching](/server/workspace-browser-extension/workspace-browser-extension-user-interface/side-menu/#matching-tab) tab., which is the tab selected when opening the extension, or when browsing through the {{ en.VLT }}s of the [All Entries](/server/workspace-browser-extension/workspace-browser-extension-user-interface/side-menu/#all-entries-tab) tab. It opens a new tab in your browser that allows you to add a website entry in {{ en.DVLS }} through the {{ en.WBEX }}.  

When {{ en.DVLS }} is used as the data source, the entry configuration is done in the General tab.  
![Add Website](https://webdevolutions.azureedge.net/docs/en/server/ServerOp2049.png)

See the table below to learn about each field/setting from this view.

| FIELD/SETTING                        | DESCRIPTION                                                                           |
|--------------------------------------|---------------------------------------------------------------------------------------|
| Name                                 | Enter a name for your entry. This field is automatically filled in by the {{ en.WBEX }}, but can still be modified. |
| URL                                  | Enter the URL of the website’s login page. This field is automatically filled in by the {{ en.WBEX }}, but can still be modified. |
| Add Equivalent URL                   | Click on the ***Add Equivalent URL*** button next to the URL field to display an ***Equivalent URLs*** field (see below). You can add more than one ***Equivalent URLs*** field by clicking again on the button. |
| Equivalent URLs                      | Enter a URL that leads to the same page or is equivalent to the one in the ***URL*** field.<br>This field is only available after having clicked on the ***Add Equivalent URL*** button next to the ***URL*** field. |
| Delete                               | Delete the ***Equivalent URLs*** field next to this button.<br><br>This button is only displayed next to the ***Equivalent URLs*** field after having clicked on the ***Add Equivalent URL*** button next to the ***URL*** field. |
| Credentials                          | In the drop-down list, select ***Custom***, ***Linked ({{ en.VLT }})***, ***Inherited***, ***Linked ({{ en.UVLT }})***, ***Find by name ({{ en.UVLT }})***, or ***None*** to specify to the {{ en.WBEX }} how to retrieve your credentials. Some of these options give you access to additional settings. |
| Credential Selection                 | Select the credential entry that will be used to fetch the credentials for your new website entry. The {{ en.WBEX }} will only show entries of the ***Credential Entry*** type to be linked to your entry. The credential entry location must first be selected in the {{ en.VLT }} drop-down list. It is also possible to select ***Prompt on connection*** to be asked each time you connect. |
| {{ en.UVLT_MAJ }} search credentials | Enter the name of the credential in your {{ en.UVLT }} and the {{ en.WBEX }} will search in it for the specified name. If the field is left empty, when launched, a credential list will open with all available credentials entries from your {{ en.UVLT }}. |
| Username                             | Enter the username you use to log in to the website.<br><br>This field is only available if ***Custom*** is selected in the ***Credentials*** drop-down list. |
| Password                             | Enter the password you use to log in to the website. The password will be hidden. Below the field is a strength indicator for your password.<br>This field is only available if ***Custom*** is selected in the ***Credentials*** drop-down list. |
| Reveal/Hide password                 | Reveal or hide the password that was entered. This field is only available next to the ***Password*** field if ***Custom*** is selected in the ***Credentials*** drop-down list. |
| Password Generator                   | Open the ***Password Generator*** window, which allows you to create a strong and secure password adapted to your needs and to website requirements. |
| Description                          | Enter a description for your new entry.                                               |
| {{ en.VLT_MAJ }}                     | Choose to store your new website entry in your {{ en.UVLT }} or in the currently selected {{ en.VLT }} in {{ en.DVLS }}. |
| Destination folder                   | Enter the name of the folder in which your new entry will be stored in {{ en.DVLS }}. |
| Save                                 | Save the settings of your new website entry and create the entry.                     |
| Cancel                               | Cancel the creation of a new website entry and clear all unsaved changes to settings. |

{% snippet icon.badgeInfo %}
Follow our step-by-step guide on how to [add a website entry with the {{ en.WBEX }}](/server/workspace-browser-extension/using-workspace-browser-extension/add-website-entry-workspace-browser-extension/).
{% endsnippet %}
