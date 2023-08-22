---
eleventyComputed:
  title: Remote Desktop Manager {{ en.MAC }} configure 1Password
---
You can create 1Password credential entries in {{ en.RDMMAC }}, however, 1Password needs to be configured to allow the sync of the database.  

1. Open 1Password and select the vault that you want to sync with {{ en.RDMMAC }}.  
![!!KB4184.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4184.png)
1. Click on ***1Password 5*** and select ***Preferences***.  
![!!KB4185.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4185.png)
1. Click on ***Sync***.  
![!!KB4186.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4186.png)
1. Select ***Dropbox*** if you want to create your 1Password.agilekeychain file on Dropbox, or ***Folder*** if you want to create the file on your computer.  
![!!KB4187.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4187.png)
You can now create a 1Password credential entry in {{ en.RDMMAC }}.
1. In the database field, select the *.agilekeychain file that you have created in the Sync Preferences.  
![!!KB4188.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4188.png)
