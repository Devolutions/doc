---
title: Side Menu
---
Using the ***Side Menu*** tabs, you can access various {{ en.DWL }} features. Each tab will display a different view in the ***Content Area*** .  

When using {{ en.DWL }} with {{ en.DPS }} , the available tabs are the ***Matching*** tab, the ***All Entries*** tab, the ***Favorites*** tab, the ***Recent*** tab, and the ***Password Generator*** tab.  

In all tabs except the ***Password Generator*** tab, when hovering over an entry, three new options appear: the ***Copy Username*** , ***Copy Password*** , and ***View*** buttons. Go to the [Entries functionalities]( section for more information.  

## {{ en.DWL }} Tabs

### Matching tab 

The extension opens on the ***Matching*** tab. This is where you will see the list of credentials available for the particular website you are on.  

{% snippet icon.badgeInfo %} 
For methods of retrieving your credentials, visit [this topic](/server/dwl/using-devolutions-web-login/retrieve-credentials-dwl/) . 
{% endsnippet %}

![Matching Tab](/img/en/server/serverop2033.png)
 
At the top, you can use the ***Search*** bar to filter through all your credentials, not just those applicable to the website. You can also use the ***Refresh*** button next to it to update the search results.  

At the bottom, the ***Add Website*** button opens a new browser tab that allows you to manually add a website entry in {{ en.DPS }} through the {{ en.DWL }} extension.  

{% snippet icon.badgeInfo %} 
For a complete list of the available fields in the ***Add Website*** window, visit [this topic](/server/dwl/devolutions-web-login-user-interface/side-menu/add-website/) . You can also consult our step-by-step guide on [how to add a website entry](/server/dwl/using-devolutions-web-login/add-website-entry-dwl/) . 
{% endsnippet %}
 
### All Entries tab 
{% snippet icon.badgeHelp %} 
When accessing the ***All Entries*** tab for the first time, you need to select the {{ en.DPS }} vaults you want to synchronize with {{ en.DWL }} . Learn more about it in our [First Login with {{ en.DWL }}](/server/dwl/first-login-dwl/) topic. 
{% endsnippet %}
 
The ***All Entries*** tab allows you to browse through all your synchronized vaults for website entries only. You will first encounter the list of your synchronized vaults.  

![All Entries Tab](/img/en/server/serverop2043.png)

At the top, you can use the ***Filter*** bar to search through all your vaults for website entries.  

You can access your vaults in two ways:  

* To access a vault in {{ en.DPS }} , click on the ***Open*** button next to a vault to open it in {{ en.DPS }} in a new browser tab. 
* To access a vault in {{ en.DWL }} , click on it and navigate through the folders to manually find the entry you are looking for. The folder structure is identical to that of your {{ en.DPS }} , except that only the paths leading to website entries will be displayed. 

When navigating in the folders, the [***Add Website***](/server/dwl/devolutions-web-login-user-interface/side-menu/add-website/) button will appear at the bottom of the ***Content Area*** . You can also use the search bar at the top to search in the specific location.  

![Vault Navigation via Devolutions Web Login](/img/en/server/serverop2045.png)

Back on the main view of the ***All Entries*** tab, the ***Select Vaults to Sync*** at the bottom of the ***Content Area*** allows you to individually select the {{ en.DPS }} vaults to synchronize with {{ en.DWL }} . 

### Favorites tab 
If you have entries marked as favorites, they will be displayed here in the ***Favorites*** tab.  

![Favorites Tab](/img/en/server/serverop2046.png)

You can search a particular entry using the ***Search In Favorites*** bar at the top. 
### Recent tab 
The last entries you used will be displayed in the ***Recent*** tab.  

![Recent Tab](/img/en/server/serverop2047.png)

You can search a particular entry using the ***Filter*** bar at the top.  

At the bottom, you can click on the ***Clear Recent Entries*** button to erase all current entries from this view.  

### Password Generator tab 
The ***Password Generator*** tab assists you in creating a strong and secure password adapted to your needs and to website requirements for your new account.  

![Password Generator Tab](/img/en/server/serverop2042.png)

Your custom password is generated at the top of the ***Content Area*** with a strenght indicator below it. You can copy it or generate a new one using the ***Copy to Clipboard*** and ***Generate Password*** buttons respectively. The ***Password lenght*** , which is set to 12 by default, can also be adjusted.  

In the ***General*** drop-down section, you are able to select the types of characters that your password must contain as well as the minimum number of characters of each type that must be included.  

![General Section](/img/en/server/serverop2040.png)

In the ***Advanced*** drop-down section, you are able to further customize your password by entering characters you want included in your password, followed by the minimum number of times they must appear. In the second field, you can also enter characters you want excluded from your password.  

![Advanced Section](/img/en/server/serverop2041.png)

{% snippet icon.badgeInfo %} 
To learn how to use the ***Password Generator*** when creating an account on a website, visit [this topic](/server/dwl/using-devolutions-web-login/create-account-website-dwl/) . 
{% endsnippet %}
 
### Entry functionalities 
No matter what tab you are in (except the ***Password Generator*** tab), when hovering over an entry, three new options appear: the ***Copy Username***, ***Copy Password***, and ***View*** buttons. 

![Copy Username, Copy Password, and View options](/img/en/server/serverop2048.png)

The ***Copy Username*** and ***Copy Password*** buttons copy the username/password of the entry to your clipboard.  

The ***View*** button gives you an overview of the entry as well as additional functionalities. The availability of information and functionalities depends on the type of entry and the information provided in the entry, although some of them are always available:  

* ***Edit*** / ***Delete*** the entry or view its password with the vertical ellipsis button at the top right.  
* Mark your entry as favorite by clicking on the ***Add to Favorites*** icon next to the entry name. The entry will then show in the ***Favorites*** tab.  
* View the location of your entry under the ***Vault*** and ***Folder*** (if it is located under a folder) sections.  
* View and access the ***URL*** associated to the entry.  

Other information and functionalities will depend on what you provided when creating the entry (username, password, tags, description, etc.). 

![Entry Overview](/img/en/server/serverop2037.png)



