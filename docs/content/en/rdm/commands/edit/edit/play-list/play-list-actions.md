---
eleventyComputed:
  title: Play list actions
  description: You can create Local or Shared play List in {{ en.RDM }}. There are several methods to create or edit a Play List.
---
{% tabs %}
{% tabItem "Windows" %}
{% youtube 'VTGPUMl5zKY' %}  

You can create Local or Shared play List in {{ en.RDM }}. There are several methods to create or edit a Play List:  

* Using the Play List Management.
* Create Play List depending on entries state and selection.
* Edit an existing Play List.

{% snippet icon.badgeInfo %}
You can also use the context menu to create and edit your Play List. When your entries are selected, right-click in the ***{{ en.NPANE }}*** and select ***Play List – Add Selection to Existing Play List***.
{% endsnippet %}

## Settings

### Use the Play list management
From the ribbon, go to ***Edit – Play List – Play List Management***.  
![Local Play List](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10253.png) 

Play lists can be saved three different ways: 

| OPTION            | DESCRIPTION |
|-------------------|-------------|
| Local             | The Play List is saved locally and can only be accessed as such. These can only be launched through the Play List Management. |
| Shared            | The Play List is saved in the database. It can be accessed by anyone on the data source. These can be launched through the Play List Management or by using the entry itself. |
| {{ en.UVLT_MAJ }} | The Play List is saved in your {{ en.UVLT }} and can only be accessed by the user. These can be launched through the Play List Management or by using the entry itself. |


## Actions

### Create Play List depending on entries state and selection
1. If you wish to pre-determine a list of entries, select them for your Play List in the {{ en.UVLT }}.  
![Selected Entries in the {{ en.NPANE }}](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10902.png) 
1. In the ***Edit*** ribbon menu, click ***Play List***, then select whichever setting you prefer.  
![Edit - Play List - New](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10792.png) 

| OPTION                                        | DESCRIPTION |
|-----------------------------------------------|-------------|
| New                                           | Creates a new Play List directly, a window prompt will ask you where you wish to save it and which selection you would like to highlight. |
| Create from Opened Sessions                   | Brings up the window for creating a new Play List with all currently opened session already selected for the Play List. You can select and remove additional entries if desired. |
| Add Selection to Existing Play List (X Entry) | Prompts a window where you can select currently accessible Play Lists and adds the selection in the {{ en.NPANE }} to the Play List. |

3. Choose if you wish to save your Play List locally, in a shared {{ en.VLT }} or in your {{ en.UVLT }}. Saving it locally will prompt a different window. This window will contain everything needed for a local Play List.  
![Save New Play List](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10255.png)
1. The next window lets you choose how you want your current selection or opened sessions to affect your playlist.  
![Selected Entries in {{ en.NPANE }}](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10256.png)

| OPTION                                   | DESCRIPTION |
|------------------------------------------|-------------|
| Selected Entries in ***{{ en.NPANE }}*** | All currently selected entries in the ***{{ en.NPANE }}*** will already be selected for your Play List. You can still add and remove entries to the Play List if you desire. |
| Opened Tabbed Sessions                   | All currently opened sessions (embedded only) will already be selected for your Play List. You can still add and remove entries to the Play List if you desire. |
| No Selection                             | No pre-determined selection will be taken into account, create your Play List from a fresh start. |

5. Follow this sequence: 
	1. Enter a name for your ***Play List***.
	1. You can review, add or remove entries from the play list on the ***Connections*** tab.
	1. In ***Advanced*** you can set how the entries open.  
	![Play List Editor](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10787.png)

And there you have it, your ***Play List*** is ready for use.

### Edit Existing Play List
1. In ***Edit***, click ***Play List Management***.  
![View - Play List Management](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11490.png)
1. Select the ***Play List*** you wish to modify and click ***Edit***.  
![Play List Management](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10259.png)

{% snippet icon.badgeInfo %}
If the ***Play List*** is shared or saved in your {{ en.UVLT }}, you can also right-click the entry and click ***Properties*** to access it.
{% endsnippet %}
{% endtabItem %}

{% tabItem "macOS" %}
You can create Local or Shared play list in {{ en.RDM }}. There are several methods to create or edit a Play list:  

* Create Play list by selecting entries in the ***{{ en.NPANE }}*** 
* Create Play list with Opened Tabbed Sessions 
* Create Play list with No Selection 
* Edit an existing Play list 

## Settings 

### Local Play list 

Local Play list is saved on the local computer and is not available to other users.  
![Play list Management – Local Play list](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10360.png) 

### Shared Play list  

The Shared Play list is saved in the database and can be used by all users. The Shared Play list can be launched from the ***{{ en.NPANE }}*** as well as from the menu ***View - Play list***.  

![Play list Management – Shared Play list](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10361.png) 

### {{ en.UVLT_MAJ }} Play list 

The {{ en.UVLT }} Play list is saved inside your {{ en.UVLT }} which is a user centric repository, it allows each user to create Play list that only them can access.  
![Play list Management – {{ en.UVLT_MAJ }} Play list](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10362.png) 

## Actions 

### Create Play list by selecting entries in the ***{{ en.NPANE }}***.  

1. Select the entries for your Play list in your ***{{ en.NPANE }}*** using <kbd>Cmd</kbd>+click.  
![{{ en.NPANE }}](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10111.png) 
1. Right-click in your ***{{ en.NPANE }}*** and select ***Play list – Create Play list***.  
![Create Play list](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10363.png) 
1. Choose if you wish to save your Play list Locally, Shared or in your {{ en.UVLT }}.  
![Save Play list](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10364.png) 
1. Click on ***Selected Entries*** in the ***{{ en.NPANE }}***.  
![Selected Entries in the ***{{ en.NPANE }}***](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10108.png) 
1. You will notice that all your preselected entries from your ***{{ en.NPANE }}*** are already selected in the Play list Editor. Provide a name and a short description for your Play list and click ***OK***.  
![Play list Editor](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10365.png) 

{% snippet icon.badgeInfo %} 
The wait time is used to set the delay between opening different entries. 
{% endsnippet %}
 
You could also create a new Play list by using the View - Play list and then clicking on the plus to create a New Play list.  
![Create a New Play list](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10366.png) 

### Create Play list with Opened Tabbed Sessions 

1. Open all the sessions you wish to add to your new Play list in Embedded mode. 
1. Right click in your ***{{ en.NPANE }}*** and select Play list – Create from Opened Sessions.  
![Play list – Create from Opened Sessions](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10367.png) 
1. Select if you wish to save your Play list Locally, Shared or in your {{ en.UVLT }}.  
![Save Play list](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10364.png) 
1. You will notice that your opened sessions are already preselected in your Play list Editor. Provide a name and a short description to your Play list and click ***OK***.  
![Play list Editor](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10368.png) 

### Create Play list with No Selection 

1. Right click in your ***{{ en.NPANE }}*** and select ***Play list – Create Play list***.  
![Create Play list](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10363.png) 
1. Choose if you wish to save your Play list Locally, Shared or in your {{ en.UVLT }}.  
![Save Play list](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10364.png) 
1. In ***Entry – Play list – Create Play list***, select the option No Selection.  
![No Selection](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10024.png) 
1. Select the entries you wish too add to your Play list by checking the box beside the entry name. Provide a name and a short description to your Play list and click OK.  
![Play list Editor](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10025.png) 

### Edit an existing Play list 

1. You can edit a Play list in ***View – Play list***.  
![View – Play list](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10369.png) 
1. Select the Play list you wish to modify and then click on the wheel to edit the entry.  
![Play list Management – Edit](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10114.png)
{% endtabItem %}
{% endtabs %}