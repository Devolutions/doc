---
eleventyComputed:
  title: Batch edit in {{ en.RDM }}
  status: Topic available in German language
---
In {{ en.RDM }}, you can edit the properties of multiple entries or folders at once using the [***Batch Edit***](/rdm/windows/commands/edit/batch/batch-edit/) or [***Edit (Special Actions)***](rdm/windows/commands/edit/edit-special-actions/) features.
![Edit (Special Actions) and Batch Edit](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2104.png)

## Entry/Folder selection
Entries and folders to be edited can be selected using the methods below. Choose the one that best suits your needs.

{% snippet icon.badgeNotice %}
Best practice suggests using the ***[Advanced Search](#advanced)*** or ***[Multi {{ en.VLT }} Search](#multi)*** methods, as selecting them manually in the ***{{ en.NPANE }}*** is more time consuming and carries the risk of forgetting some entries/folders. This last method can only be recommended if you have only a few selected entries to edit.

Regardless of the method used, it is recommended that only one entry type be selected for each batch edit action.
{% endsnippet %}

{% snippet icon.badgeCaution %}
To edit the information of folders, you MUST go through the ***[Advanced Search](#advanced)*** or ***[Multi {{ en.VLT }} Search](#multi)*** methods to select the folders. If you select the folders manually in the ***{{ en.NPANE }}***, you will be editing the information in the child entries of the folders, NOT the information in the folders themselves.
{% endsnippet %}

* [Manual selection](#manual)
* [Advanced Search](#advanced)
* [Multi {{ en.VLT }} Search](#multi)

### Manual selection
In {{ en.RDM }}, select all entries/folders manually in the ***{{ en.NPANE }}***. Use <kbd>Ctrl</kbd>+left-click to select them one by one or <kbd>Shift</kbd>+left-click to select a bunch of them at the same time. Note that by selecting a folder, you are editing the information of its child entries and not the information of the folder.

Proceed to the [Batch Edit Actions](#edit) section for the next steps or continue to read about the other selection methods.

### Advanced Search
The ***[Advanced Search](/rdm/windows/commands/view/panels/search/advanced/)*** feature allows you to search the currently selected {{ en.VLT }}.
![Advanced Search](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2108.png)
1. In {{ en.RDM }}, go to ***View – Search – Advanced Search*** or press the F11 key shortcut.
1. In the ***Search*** tab of the ***Advanced Search*** window, select and specify criteria to filter your search. Other search parameters are also available in the ***Settings*** tab. When done, click ***Search***.
{% snippet icon.badgeInfo %}
To filter your search by folder type, you must use the ***Advanced Search*** feature as it is not available in ***Multi {{ en.VLT }} Search***. Search by ***Connection type*** and select the folder type in the drop-down list next to it.
{% endsnippet %}

3. Select the entries/folders you want to edit. To select all of them, click anywhere in the results field and use the <kbd>Ctrl</kbd>+<kbd>A</kbd> keyboard shortcut.
1. When your selection is complete, click the ***Select in {{ en.NPANE }}*** button in the bottom right corner of the window.

Proceed to the [Batch Edit Actions](#edit) section for the next steps or continue to read about the other selection methods.

### Multi {{ en.VLT }} Search
![Multi {{ en.VLT }} Search](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2109.png)
The [***Multi {{ en.VLT }} Search***](/rdm/windows/commands/view/panels/search/multi-vault/) feature allows you to search in all the {{ en.VLT }}s of the selected database at once.

1. In {{ en.RDM }}, go to ***View – Search – Multi {{ en.VLT }} Search*** or press the F12 key shortcut.
1. Select and specify criteria to filter your search, then click ***Search***.
{% snippet icon.badgeInfo %}
To filter your search by folder type, you must use the ***[Advanced Search](#advanced)*** feature.
{% endsnippet %}

3. Select the entries/folders you want to edit. To select all of them, click anywhere in the results field and use the <kbd>Ctrl</kbd>+<kbd>A</kbd> keyboard shortcut.
1. When your selection is complete, click the ***Select in {{ en.NPANE }}*** button in the bottom right corner of the window.

Proceed to the [Batch Edit Actions](#edit) section for the next steps.

## Batch Edit actions
The ***Batch Edit*** feature allows you to perform the following actions:

* Change Saved Host Name/Credentials
* Reset All Saved Credentials/Passwords
* Edit Entries (General Settings / Session Type Settings / Security Group Legacy / Asset / User Specific Settings / Local Specific Settings)

{% snippet icon.badgeWarning %}
Legacy security and security groups have been deprecated and will be completely removed starting with version 2023.3 of {{ en.RDM }}. See [Migrate from security groups to user groups](/kb/remote-desktop-manager/how-to-articles/migration-security-groups-user-groups/).
{% endsnippet %}

Continue to the following section if the ***Batch Edit*** options cover your needs. If not, you can go to [Edit (Special Actions)](#editspecialactions) to use a custom PowerShell command in ***Edit (Special Actions)***.

### Batch Edit
1. With your entries selected, go to ***Edit – Batch – Batch Edit*** in the ribbon. Alternatively, you can right-click your entry selection and go to ***Edit – Batch Edit***.
1. Select one of the editing options from the list for a window to pop up. Note that only options that are relevant to your entry types will be available.
![Batch Edit Options](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2103.png)
1. In the window, edit the information and parameters of your choice, than save.
{% snippet icon.badgeInfo %}
Each editing option displays different information and parameters that can be edited. For a preview of each of them, see [Batch Edit](/rdm/windows/commands/edit/batch/batch-edit/).
{% endsnippet %}

Your entries/folders have now been modified.

### Edit (Special Actions)
1. With your entries selected, go to ***Home – Clipboard – Copy*** in the ribbon. Alternatively, you can right-click your entry selection and select ***Clipboard – Copy***.
![Home – Clipboard – Copy](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2105.png)
1. In the ***Copy Options*** window, go to the ***Preview*** tab.
1. Select all the content of the box, then copy and paste it in a text editor to retrieve the name of the field(s) that you would like to edit in a subsequent step.
1. In {{ en.RDM }}, close the ***Copy Options*** window, but make sure that you keep your entries selected in the ***{{ en.NPANE }}***.
1. With your entries still selected, go to ***Edit – Batch – Edit (Special Actions)*** in the ribbon. Alternatively, you can right-click your entry selection and select ***Edit – Edit (Special Actions)***.
1. In the ***General*** section, select ***Custom PowerShell Command***, then click ***OK***.
![Special Action Selection](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2106.png)
1. In the box, using the information that you copied in step 3, write your custom PowerShell script. You can use one of these [samples](/rdm/windows/powershell-scripting/custom-powershell-commands/batch-actions-samples/).
1. Click ***OK***.

Your entries/folders have now been modified.
