---
eleventyComputed:
  title: "{{ en.RDMMAC }} configure 1Password"
  description: 
---
{% snippet icon.badgeInfo %}
The integration of credentials from password managers is only available in the Team version of {{ en.RDM }}.
{% endsnippet %}  

You can create 1Password credential entries in {{ en.RDMMAC }}. However, 1Password needs to be configured to allow the synchronization of the database.  

1. Open 1Password and select the {{ en.VLT }} that you want to sync with {{ en.RDMMAC }}.  
![!!KB4184](https://webdevolutions.azureedge.net/docs/en/kb/KB4184.png)
1. Click on ***1Password 5*** and select ***Preferences***.  
![!!KB4185](https://webdevolutions.azureedge.net/docs/en/kb/KB4185.png)
1. Click on ***Sync***.  
![!!KB4186](https://webdevolutions.azureedge.net/docs/en/kb/KB4186.png)
1. Select ***Dropbox*** if you want to create your 1Password.agilekeychain file on Dropbox, or ***Folder*** if you want to create the file on your computer.  
![!!KB4187](https://webdevolutions.azureedge.net/docs/en/kb/KB4187.png)
You can now create a 1Password credential entry in {{ en.RDMMAC }}.
1. In the database field, select the *.agilekeychain file that you have created in the Sync Preferences.  
![!!KB4188](https://webdevolutions.azureedge.net/docs/en/kb/KB4188.png)
