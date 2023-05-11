---
title: Custom PowerShell Commands
---
Custom Powershell Command will act on currently selected entries in your ***{{ en.NPANE }}*** . Use click and Ctrl-click to build up your list, or an advanced search to select a great number of entries. After your selection is done, the command is available using either:  

* ***Edit – Batch – Edit (Special Actions)*** .  
![Edit Toolbar](/img/en/rdm/windows/clipM0003.png) 
* Right-click the entry or entries, then select Edit – Edit (Special Actions) .  
![Selected entries - Edit (Special Actions)](/img/en/rdm/windows/clip10585.png) 
* Once there, select ***Custom PowerShell Command*** .  
![Edit (Special Actions)](/img/en/rdm/windows/clip10587.png) 
* A window appears in which you can write a snippet of code.  Note that is the last line must always be $RDM.Save();  
![Custom Powershell Command](/img/en/rdm/windows/clip10613.png) 
* Upon pressing ***Ok*** , a summary dialog appears to indicate success or failure.  
![Batch Action Result - Success](/img/en/rdm/windows/clipM0004.png) 
![Batch Action Result - Failure](/img/en/rdm/windows/clipM0005.png) 