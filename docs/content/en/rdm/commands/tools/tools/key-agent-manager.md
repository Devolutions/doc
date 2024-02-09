---
eleventyComputed:
  title: SSH Key agent manager
  description: The SSH Key Agent Manager is used to hold all your SSH Keys in memory, already decoded and ready for them to be used. 
---
The ***SSH Key Agent Manager*** is used to hold all your SSH Keys in memory, already decoded and ready for them to be used. It has the same use as Pageant (SSH Key Manager) has for Putty except that the ***SSH Key Agent Manager*** is used with {{ en.RDM }}. 

The ***SSH Key Manager (local)*** is located under ***Tools*** in the ribbon of {{ en.RDM }}.

![Tools – SSH Key Manager (local)](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6244.png)

## Settings 

1. When opening the ***SSH Key Agent Manager***, you will notice at the bottom right that the agent is not running. You will need to click on ***Start Agent***. 
![SSH Key Agent tab – Start Agent](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6246.png) 
1. Click on ***Add key*** and select the file to open your SSH key.  
![Key Agent Manager – Add Key](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6247.png) 
1. All your added SSH Key will appear in your ***SSH Key Agent Manager***. 
1. In your SSH Shell Session in the ***General*** tab, enter a ***Username*** and leave the ***Password*** field blank.  
![SSH Shell session – General Tab](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6249.png) 
1. In the ***Private Key*** tab of your SSH Shell session, leave the option for the ***Private Key*** to ***No Private Key***.  
![SSH Shell session – Private Key Tab](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6250.png)  
1. In the ***Advanced*** tab of your SSH Shell session, activate the option ***Use Agent***. The ***Use Agent*** automatically takes the information of the SSH Key kept in your SSH Key Agent Manager.  
![SSH Shell session – Advanced tab](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6251.png) 

### Private Key Credential 

When creating a new ***Private Key credential entry*** in {{ en.RDM }}, you have the option of loading them automatically in your ***SSH Key Agent Manager***.  

1. Select ***Add New Entry – Credential Management – Pirate Key***.   
![New Credential Entry – Private Key](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6252.png) 
1. In the ***Advanced*** tab of your ***Private Key entry***, activate the option ***Automatically load to key agent***.  
![Private Key – Advanced Tab](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/RDMWin6253.png) 

