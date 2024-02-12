---
eleventyComputed:
  title: Batch edit
  status: Topic available in German language
---
{% tabs %}
{% tabItem "Windows" %}
{% youtube 'M4eCCgl2Dwc' %}  

The ***Batch Edit*** feature changes the settings of multiple entries in one operation. For example, it can be used to remove or update the credentials of a group of sessions.  
![Edit - Batch Edit](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10236.png) 

## Advanced Search Selection 

Select multiple entries by using the usual <kbd>Ctrl</kbd>/<kbd>Shift</kbd>+left-click, etc. For a method with a little more power, use the [***Advanced Search***](/rdm/windows/commands/view/panels/search/advanced/) feature, which allows to select multiple entries at once, based on the defined criteria. The ***Advanced Search*** is available in ***View – Advanced Search***. If required, you can achieve similar results with the [***Multi {{ en.VLT }} Search***](/rdm/windows/commands/view/panels/search/multi-vault/).  
![Advanced Search](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10379.png) 

Click ***Select in {{ en.NPANE }}*** to select the same entries as in the ***Advanced Search*** dialog. Then use ***Edit – Batch Edit*** to edit all the selected entries. Go to [Batch edit in {{ en.RDM }}](/kb/remote-desktop-manager/how-to-articles/batch-edit-rdm/) for the steps. 

## Batch Edit Options 

### Change Saved Host Name 

You can change the ***Host*** names.  
![Batch Edit – Change Saved Host Name](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10237.png) 

### Change Saved Credentials 

{% youtube 'FtSlp_TVAxE?si=2M7S4CNhU3pv8DQs&amp;start=701' %}  

You can change the ***Credential mode*** and credentials (***Username***, ***Domain***, and ***Password***) or reset them.  
![Batch Edit – Change Saved Credentials](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2102.png) 

### Reset All Saved Credentials 

You can clear all the credentials by selecting ***Yes***.  
![Batch Edit – Reset All Saved Credentials](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2103.png) 

### Reset All Saved Passwords 

You can clear all the passwords by selecting ***Yes***.  
![Batch Edit – Reset All Saved Passwords](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2104.png) 

### Edit Entries (General Settings) 

You can modify the ***General Settings*** of the entries by going through the different settings in the left-side menu sections.  
![Batch Edit – Edit Entries (General Settings)](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2105.png) 

### Edit Entries (Session Type Settings) 

You can modify the ***Session Type Settings*** of the entries, which are settings available only for specific session types, such as Microsoft RDP, by going through the different tabs.  
![Batch Edit – Edit Entries (Session Type Settings)](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2106.png) 

### Edit Entries (Asset) 

You can modify the ***Asset*** settings of the entries by going through the different tabs.  
![Batch Edit – Edit Entries (Asset)](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2108.png) 

### Edit Entries (User Specific Settings) 

If supported by the entry types, you can modify the ***User Specific Settings*** of the entries by going through the different tabs.  
![Batch Edit – Edit Entries (User Specific Settings)](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2109.png) 

### Edit Entries (Local Specific Settings) 

If supported by the entry types, you can modify the ***Local Specific Settings*** of the entries by going through the different tabs.  
![Batch Edit – Edit Entries (Local Specific Settings)](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2110.png)
{% endtabItem %}

{% tabItem "macOS" %}
Use the Edit – Batch Edit or the Batch Edit option in the context menu to change the settings of multiple sessions in one operation. It can be used for example to remove or update all of the credentials of a group of sessions.  
![Batch Edit](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10346.png)

You could also change:
* Host Name
* Credentials
* Passwords
* General Settings
* Session Type Settings
* User Specific Settings
* User Group

## Advanced Search
You can select multiple entries by using Command and mouse click. For a method with a little more power, use our [Advanced Search](/rdm/mac/commands/view/advanced-search/) dialog, accessible from ***View – Advanced Search***. The Advanced Search allows you to select multiple criteria at once.  
![Advanced Search](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10605.png)

After you have tweaked your criteria to get the results you want, press on Select in ***{{ en.NPANE }}*** and then ***Action - Batch Edit***.

## Settings
### Change Saved Host Name
![Change Saved Host Name](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10031.png)

You can change multiple host name at the same time.

### Change Saved Credentials
You can change the configured credentials for multiple sessions in a batch.  
![Change Saved credentials](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10606.png)

| OPTION                      | DESCRIPTION                                                                                          |
|-----------------------------|------------------------------------------------------------------------------------------------------|
| Use specified credentials   | Use a specific username, password and domain.                                                        |
| Use credential repository   | Use a Credential entry linked entry which can be external credentials like KeePass. Useful for sharing or reusing credentials among entries. |
| Use inherited               | Use the credentials of its parent entry or group.                                                    |
| Use my personal credentials | Allows you to use one set of credentials to replace or emulate the ones from your Windows session.   |
| Use {{ en.UVLT }} search    | Use credentials stored in your [{{ en.UVLT }}](/rdm/mac/user-interface/navigation-pane/user-vault/). |
| None                        | Do not use any credentials.                                                                          |

### Reset All Saved Credentials
Clear all existing credentials for the selected sessions.

### Reset All Saved Passwords
Clear all existing passwords for the selected sessions.

### Edit Sessions (General Settings)
![Batch Edit – General Settings](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10348.png)

Edit Sessions (General Settings) allows you to change common sessions settings simultaneously. The session can be of any type, because a common set of options are shared among sessions. The following common general settings can be changed:
* Group/Folder
* Display
* Allow show credentials (everybody)
* Image
* Description
* Keywords/Tags
* VPN
* Events
* Logs
* Advanced Settings tab

### Edit Sessions (Session Type Settings)
{% snippet icon.badgeInfo %}
Edit Sessions Session Type Settings is only available for specific session types like RDP.
{% endsnippet %}

![Batch Edit – Session Type](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10347.png)

### Edit Sessions (User Specific Settings)
User Specific Settings can be modified in a batch if they are supported by the session type.  
![Batch Edit - User Specific settings](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10349.png)
{% endtabItem %}
{% endtabs %}