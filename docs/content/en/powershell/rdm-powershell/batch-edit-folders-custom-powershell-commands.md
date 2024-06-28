---
eleventyComputed:
  title: Batch edit folders with custom PowerShell commands
  description: To edit several or all folders in a specific {{ en.VLT }}, you have to use the Advanced search feature.
---
In {{ en.RDM }}, to edit several or all folders in a specific {{ en.VLT }}, you have to use the [Advanced search](/rdm/commands/view/view/search/advanced/) feature.

1. Go to ***View – Search – Advanced search*** (or access it using the <kbd>F11</kbd> keyboard shortcut).
![View – Search – Advanced search](https://cdnweb.devolutions.net/docs/RDMW2054_2024_2.png)
1. Set the first search condition to ***Connection type***, then further specify the ***Folder*** type in the second drop-down menu.
![Search by folders](https://cdnweb.devolutions.net/docs/RDMW2055_2024_2.png)
1. Click ***Search***.
1. Select the folders you want to edit in the results.
    * Use <kbd>Shift</kbd>+click to select several folders one at a time.
    * Use <kbd>Ctrl</kbd>+<kbd>A</kbd> to select all the folders at once.
1. Right-click on your selection and select ***Edit – Edit (special actions)***.
![Edit – Edit (special actions)](https://cdnweb.devolutions.net/docs/RDMW2056_2024_2.png)
1. Select the ***Custom PowerShell command*** special action, then click ***Execute***.
![Custom PowerShell command](https://cdnweb.devolutions.net/docs/RDMW2057_2024_2.png)
1. Enter your PowerShell command then click ***Ok***.

The command will run on all folders and edit them accordingly.