---
title: Offline Read/Write
---
The ***Read/Write*** offline mode allows the user to add, edit and delete entries while the data source is offline. Those changes are saved locally and synchronized with the data source once it is back online. 

{% snippet icon.badgeInfo %} 
Some functionalities are not available while offline and you may not be able to perform all actions. Note that the [{{ en.UVLT }}](/rdm/windows/data-sources/user-vault/) is still available in offline mode. 
{% endsnippet %}
 
Once offline, the users security settings still applies. Add/Edit/Delete privileges granted by the administrator are still in effect. See [User Management](/rdm/windows/commands/administration/management/user-management/).  

When an entry is edited by an online user while another user is offline, the local version of the entry stored in the offline cache becomes different from the online version. This causes a conflict when the offline user gets back online. 

## Offline Edits Workflow 

* Connect to the data source. 
* Go offline with ***File – Go Offline***. 
* Edit any entry. 
* Go back online with ***File – Go Online***. 

The ***Offline Edits*** window is displayed:  
![Offline Edits](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10394.png) 

Use this dialog to accept/reject your offline changes.  

You can use the ***Compare*** action to have a side by side comparison of your changes with the current live entry.  

Entries will be marked:  

* Accept – when no outside changes have been detected. 
* Conflict – when outside changes have been detected since you were last connected. 

## Multiple Offline Edits 

When multiple users edit the same entry offline simultaneously, a conflict occurs when the second user is back online.  

Here is an example of such a case to help resolving conflicts properly:  

When the first user returns online, the ***Offline Edits*** window is displayed. Changes are accepted by default.  
![Offline Edits For The First User Back Online](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3451.png) 

When a second user returns online, a conflict occurs and the ***Offline Edits*** window is displayed.  
![Offline Edits For The Second User Back Online](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3452.png) 

When the conflict occurs, the user must decide to accept or reject the changes. The different versions of the entry can be compared to view which changes has been made.  

### Compare Versions of an Entry 

Click the ***Compare*** button to compare the versions of a conflicted entry. Analyze the XML structure of the entry to decide to ***Accept*** or ***Reject*** the changes.  

The content on the left represents the entry retrieved online, and the content on the right represents the local version of the entry, edited in Offline mode.  
![Compare Session Modification](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3453.png) 
