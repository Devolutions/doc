---
eleventyComputed:
  title: Side menu
---
Using the ***Side menu*** tabs, you can access various {{ en.WBEX }} features. Each tab will display a different view in the ***Content Area***.  

When using the {{ en.WBEX }} with {{ en.DHUBB }}, the available tabs are the ***Matching*** tab, the ***{{ en.VLT }}s*** tab, the ***{{ en.UVLT }}*** tab, and the ***Password Generator*** tab.  

In all tabs except the ***Password Generator*** tab, when hovering over an entry, three new options appear: the ***Copy Username***, ***Copy Password***, and ***View*** buttons. Go to the [Entries functionalities](#entry-functionalities) section for more information.  

## Side menu Tabs 

### Matching tab 
The extension opens on the ***Matching*** tab. This is where you will see the list of credentials available for the particular website you are on.  

{% snippet icon.badgeInfo %} 
For methods of retrieving your credentials, visit [Retrieve credentials from {{ en.DHUBB}} with the {{ en.WBEX }}](/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-business/retrieve-credentials-hub-business/). 
{% endsnippet %}
 
![Matching tab](https://webdevolutions.azureedge.net/docs/en/hub/Hub2110.png) 

At the top, you can use the ***Search*** bar to filter through all your credentials, not just those applicable to the website. You can also use the ***Refresh*** button next to it to update the search results.  

At the bottom, the ***Add Website*** button opens a new browser tab that allows you to manually add a website entry in {{ en.DHUBB }} through the {{ en.WBEX }}.  

{% snippet icon.badgeInfo %} 
For a complete list of the available fields in the ***Add Website*** window, visit [Add Website](/hub/dwl/devolutions-web-login-user-interface/dwl-user-interface-hub-business/side-menu/add-website/). You can also consult our step-by-step guide on [how to add a website entry](/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-business/add-entry-hub-business-dwl/). 
{% endsnippet %}
 
### {{ en.VLT }}s tab 

{% snippet icon.badgeHelp %} 
When accessing the ***{{ en.VLT }}s*** tab for the first time, you need to select the {{ en.DHUBB }} {{ en.VLT }}s you want to synchronize with the {{ en.WBEX }}. Learn more about it in [First login with the {{ en.WBEX }}](/hub/dwl/first-login-devolutions-web-login/hub-business/). 
{% endsnippet %}
 
The ***{{ en.VLT }}s*** tab allows you to browse through all your synchronized {{ en.VLT }}s for your entries.  
![{{ en.VLT }}s tab](https://webdevolutions.azureedge.net/docs/en/hub/Hub2119.png) 

At the top, you can use the ***Filter*** bar to search through all your {{ en.VLT }}s for entries.  

To access a {{ en.VLT }} in the {{ en.WBEX }}, click on it and navigate through the folders to manually find the entry you are looking for. The folder structure is identical to that of your {{ en.DHUBB }}.  

When navigating in the folders, the [***Add Website***](/hub/dwl/devolutions-web-login-user-interface/dwl-user-interface-hub-business/side-menu/add-website/)button will appear at the bottom of the ***Content Area***.  

### {{ en.UVLT }} tab 

The ***{{ en.UVLT }}*** tab works the same way as the ***{{ en.VLT }}s*** tab, except that you navigate through your ***{{ en.UVLT }}*** instead of your other {{ en.VLT }}s. You also do not have to select {{ en.VLT }}s to synchronize as the only {{ en.VLT }} available in this tab is your own ***{{ en.UVLT }}***.  
![{{ en.UVLT }} Tab](https://webdevolutions.azureedge.net/docs/en/hub/Hub2120.png) 

At the top, you can use the ***Filter*** bar to search through all your folders and entries.  

To access an entry in the {{ en.WBEX }}, navigate through the folders to manually find the entry you are looking for. The folder structure is identical to that of your {{ en.DHUBB }}.  

When navigating in the folders, the [***Add Website***](/hub/dwl/devolutions-web-login-user-interface/dwl-user-interface-hub-business/side-menu/add-website/) button will appear at the bottom of the ***Content Area***.  

### Password Generator tab 

The ***Password Generator*** tab assists you in creating a strong and secure password adapted to your needs and to website requirements for your new account.  
![Password Generator Tab](https://webdevolutions.azureedge.net/docs/en/hub/Hub2111.png) 

Your custom password is generated at the top of the ***Content Area*** with a strenght indicator below it. You can copy it or generate a new one using the ***Copy to Clipboard*** and ***Generate Password*** buttons respectively. The ***Password lenght***, which is set to 12 by default, can also be adjusted.  

In the ***General*** drop-down section, you are able to select the types of characters that your password must contain as well as the minimum number of characters of each type that must be included.  
![General Section](https://webdevolutions.azureedge.net/docs/en/hub/Hub2114.png) 

In the ***Advanced*** drop-down section, you are able to further customize your password by entering characters you want included in your password, followed by the minimum number of times they must appear. In the second field, you can also enter characters you want excluded from your password.  
![Advanced Section](https://webdevolutions.azureedge.net/docs/en/hub/Hub2115.png) 

{% snippet icon.badgeInfo %} 
To learn how to use the ***Password Generator*** when creating an account on a website, visit [Create an account for a website in {{ en.DHUBB }} with the {{ en.WBEX }}](/hub/dwl/using-devolutions-web-login/using-dwl-with-hub-business/create-account-website-hub-business/). 
{% endsnippet %}
 
### Entry functionalities 

No matter what tab you are in (except the ***Password Generator*** tab), when hovering over an entry, three new options appear: the ***Copy Username***, ***Copy Password***, and ***View*** buttons.  
![Copy Username, Copy Password, and View options](https://webdevolutions.azureedge.net/docs/en/hub/Hub2116.png) 

The ***Copy Username*** and ***Copy Password*** buttons copy the username/password of the entry to your clipboard.  

The ***View*** button gives you an overview of the entry as well as additional functionalities. The availability of information and functionalities depends on the type of entry and the information provided in the entry, although some of them are always available:  

* ***Edit***/***Delete*** the entry with the ellipses button at the top right. 
* View the location of your entry under the ***{{ en.VLT }}*** and ***Folder*** (if it is located under a folder) sections. 
* See when the entry was last modified and created under the ***Last Modified On*** and ***Created on*** sections respectively.  

Other information and functionalities will depend on what you provided when creating the entry (username, password, tags, description, etc.).  
![Entry Overview](https://webdevolutions.azureedge.net/docs/en/hub/Hub2118.png) 
