---
eleventyComputed:
  title: Advanced search
  description: The Advanced Search allows you to search for entries and folders based on multiple criteria in one {{ en.VLT }} at a time.
---
The Advanced Search allows you to search for entries and folders based on multiple conditions in one {{ en.VLT }} at a time. To search multiple {{ en.VLT }}s simultaneously, please refer to [***Multi {{ en.VLT }} Search***](/rdm/windows/commands/view/view/search/multi-vault/).  

The ***Advanced Search*** is available in the ribbon of {{ en.RDM }} or by pressing  <kbd>F11</kbd> on your keyboard.
![Advanced Search](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6219.png)

It is possible to select multiple entries at once by <kbd>Shift</kbd>-clicking or all of them with the <kbd>Ctrl</kbd>+<kbd>A</kbd> shortcut. Right-clicking one or more entries shows the same menu and options as in the ***{{ en.NPANE }}***. 

![Advanced Search Window](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6221.png) 

### Search tab 

| OPTION   | DESCRIPTION                                                   |
|----------|---------------------------------------------------------------|
| Conditions              | You can select multiple different conditions at once to tweak your search:<ul><li>Connection type</li><li>Contact reference<li>Creation date<li>Custom field</li><li>Description<li> Domain</li> <li>Folder</li><li> Host</li> <li>Is favorite</li><li>Tags </li><li>Last update date</li> <li>Name</li><li> OS</li><li>Password strength</li><li> Serial Number</li><li> Server role<li>Status</li><li> Username </li><li>URL</li><li>Version</li><li>IP</li><li>MAC</li><li>Software<li>Accounting number</li><li>Po number</li><li>Invoice number</li><li>Service tag</li> |
| Load                  | Load searches that have been previously saved.                                                                                                                                                                                                    |
| Save                  | Save your search locally to reuse it.                                                                                                                                                                                                       |
| Save As               | Save a previously saved search but under a different name.                                                                                                                                                                                                     |
| Export                | Export the entries of your search result as a CSV, HTML, XLS or XML file. Sensitive information will be encrypted using AES.     |
| Search                | Once you have selected your search condition, click on ***Search*** to display the search results.                                                                                                                                                   |
| Reset                 | Reset all your fields to proceed with a new search.                                                                                                                                                                                                   |
| Select in ***{{ en.NPANE }}*** | Select your search results in your ***{{ en.NPANE }}***. This option can be used in combination with a Batch Edit.       |

There will be a drop-down list next to certain condition fields (ex: Name) to give you more search options:  

* ***Contains*** - any name including the characters you have entered. 
* ***Starts with*** - any name beginning with the characters you have entered. 
* ***Ends with*** - any name ending with the characters you have entered. 
* ***Exact expression*** - any name exactly matching every character you have entered. 
* ***Does not contain*** - any name that does not include the characters you have entered. 
* ***Regular expression*** (regex) - any sequence of characters specifying a search pattern. 

## Settings

Use the settings to completely customize search conditions. 

* ***Condition number***: To reference a specific condition within your search, select a ***condition*** in the drop-down menu. For example, here we want to use the ***RDP Connection type*** in our customized condition. To do so, note the ***condition number***.

![Condition number](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6233.png)

Go to ***Settings*** and check ***Override logical operator***. Enclose the ***condition number*** within **"{}"** brackets.

![Enclose the condition number within {} brackets](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6234.png)

* ***AND Operator:*** To use **"AND"**, enter the characters **"&&"**.

* ***OR Operator***: To use **"OR"**, type the characters **"||"**.

There is always an operator **( && ; || )** between specified ***condition numbers*** surrounded by brackets.

![Example with multiple conditions and operators](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6236.png)

***Parenthetical Order and Priority:*** You can specify the order and priority of the condition using parentheses: **"(" and ")"**. A parenthesis cannot be next to a bracket, it is **ALWAYS** next to an operator, both for opening and closing parentheses.

***Error Notification:*** If an error occurs while searching, a message will be displayed asking to check the conditions and try again.