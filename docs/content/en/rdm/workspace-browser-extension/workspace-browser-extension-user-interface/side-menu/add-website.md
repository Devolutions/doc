---
eleventyComputed:
  title: Add website
  description: The Add Website button is only available while in the Matching tab, which is the tab selected when opening the extension. It opens a new tab in your browser that allows you to add a website entry in {{ en.RDM }} through the {{ en.WBEX }}.
---
The ***Add Website*** button is only available while in the [***Matching***](/rdm/windows/workspace-browser-extension/workspace-browser-extension-user-interface/side-menu/) tab, which is the tab selected when opening the extension. It opens a new tab in your browser that allows you to add a website entry in {{ en.RDM }} through the {{ en.WBEX }}.

When {{ en.RDM }} is used as the data source, the entry configuration is done in the ***General*** tab.
See the table below to learn about each field/setting from this view.
![Add Website](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMWin2130.png)

| FIELD/SETTING | DESCRIPTION |
|---------------|-------------|
| Name | Enter a name for your entry. This field is automatically filled in by the {{ en.WBEX }}, but can still be modified.              |
| URL | Enter the URL of the website’s login page. This field is automatically filled in by the {{ en.WBEX }}, but can still be modified. |
| Username | Enter the username you use to log in to the website.                                                                         |
| Password | Enter the password you use to log in to the website. The password will be hidden. Below the field is a strength indicator for your password. |
| Reveal/Hide password | Reveal or hide the hidden password that was entered.                                                             |
| Password Generator | Open the ***Password Generator*** window, which allows you to create a strong and secure password adapted to your needs and to website requirements. |
| Destination folder | Enter the name of the folder in which your new entry will be stored in {{ en.RDM }}.                               |
| {{ en.VLT_MAJ }} | Choose to store your new website entry in your ***{{ en.UVLT }}*** or in the currently selected ***{{ en.VLT }}*** in {{ en.RDM }}.                    |
| Save | Save the settings of your new website entry and create the entry.                                                                |
| Cancel | Cancel the creation of a new website entry and clears all unsaved changes to settings.                                         |

{% snippet icon.badgeInfo %}
Follow our step-by-step guide on how to [add a website entry with the {{ en.WBEX }}](/rdm/windows/workspace-browser-extension/using-workspace-browser-extension/add-website-entry-workspace-browser-extension/).
{% endsnippet %}
