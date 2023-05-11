---
title: Key Agent Manager
---
The ***Key Agent Manager*** is used to hold all your SSH Keys in memory, already decoded and ready for them to be used. It has the same use as Pageant (SSH Key Manager) has for Putty except that the Key Agent Manager is used with {{ en.RDM }} . 

## Settings 

1. When opening the Key Agent Manager, you will notice at the bottom right that the agent is not running . You will need to click on ***Start Agent*** . If you wish to always have your Key Agent running you can activate the option in File – Option – Key Agent – Start agent on application start .  
![Key Agent Manager - Start Agent](/img/en/rdm/windows/clip10089.png) 
1. Click on ***Add key*** and select the file to open your SSH key.  
![Key Agent Manager - Add Key](/img/en/rdm/windows/clip10090.png) 
1. All your added SSH Key will appear in your Key Agent Manager. 
1. In your SSH Shell Session in the ***General*** tab enter a Username and leave the Password field blank.  
![SSH Shell session - Private Key Tab](/img/en/rdm/windows/clip11346.png) 
1. In the ***Private Key*** tab of your SSH Shell session leave the option for the Private Key to ***No Private Key*** .  
![SSH Shell session - General Tab](/img/en/rdm/windows/clip11344.png) 
1. In the ***Advanced*** tab of your SSH Shell session, activate the option ***Use Agent*** . The ***Use Agent*** automatically takes the information of the SSH Key kept in your Key Agent Manager.  
![SSH Shell session - Advanced](/img/en/rdm/windows/clip11612.png) 

### Private Key Credential 

When creating new Private Key credential entry in {{ en.RDM }} you have the option of loading them automatically in your Key Agent Manager.  

1. Create your new Private Key credential.  
![New Credential Entry - Private Key](/img/en/rdm/windows/clip10811.png) 
1. In the ***Advanced*** tab of your Private Key entry activate the option ***Automatically load to key agent*** .  
![Private Key - Advanced Tab](/img/en/rdm/windows/clip10101.png) 

