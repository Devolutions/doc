---
eleventyComputed:
  title: Use Lansweeper in {{ en.RDM }}
  description: How to use Lansweeper in {{ en.RDM }}.
---

The IT Asset Management feature can be used to link an asset manager (e.g., [BlueTally](/kb/remote-desktop-manager/how-to-articles/it-asset-management/), Lansweeper) through an entry's properties.

{% snippet icon.badgeInfo %}
Only the ***Session***, ***Remote Management***, ***Miscellaneous***, ***VPN***, ***Synchronizer*** and ***Template*** entry types support this feature for now. The ***IT Asset Management*** entries work differently from the feature.
{% endsnippet %}

## Link Lansweeper to an entry's properties
1. Right-click on an entry and select ***Properties***.
1. Go to ***View*** – ***IT Asset Management***.
1. Select ***Lansweeper*** in the drop-down menu.
1. Input the URL to a specific asset. 
1. Type an ***IT asset management title*** in the corresponding field. 
1. Click ***Update*** to save the changes and close the window.
![IT Asset Management](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6165.png)
1. In the ***Dashboard***, select the ***IT Asset Management*** tab.
{% snippet icon.badgeInfo %}
The tab will be named according to what was written in the ***IT asset management title field***. If the field is left empty ***Lansweeper*** will show (if this service was chosen), or show as ***IT Asset Management***.
{% endsnippet %}  

![ IT Asset Management tab](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6176.png)

## Import Lansweeper data to {{ en.RDM }}

To import Lansweeper data, use the ***CSV import*** option.

1. Go to ***File*** – ***Import*** – ***Session*** – ***Lansweeper***.
![File – Import – Session – Lansweeper](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6175.png)  
You can also right click on the ***{{ en.NPANE }}*** – ***Import*** – ***Import Sessions From*** – ***Lansweeper***.  
1. In the ***Import From Lansweeper*** window, enter the ***identity code*** and the ***site***. 
1. Click ***Next***.
1. Select the ***type***.
1. Click ***Import***.  

The importation is completed. 

## Synchronizer

A time-consuming task in {{ en.RDM }} is populating {{ en.VLT }} with access assets. [Synchronizers](/rdm/windows/concepts/advanced-concepts/synchronizers/) address this by allowing direct import of information and sessions from a provider in the right format, ensuring up-to-date data and preserving inheritance between elements.

1. Add a new entry in {{ en.RDM }}.
1. Go to ***Synchronizer***.
1. Choose ***Lansweeper***.
1. Click ***Select***.
![Add a new entry – Synchronizer – Lansweeper](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6167.png)

### General tab
* ***Name***: Entry name in {{ en.RDM }}.
* ***Destination folder***: Click the ellipsis button to set the folder path in the {{ en.RDM }} tree view (which can only be in the same {{ en.VLT }}).
* ***Synchronize automatically***: The entry will synchronize automatically with Lansweeper.
* ***Use My Account Settings***: Use My Account Settings instead of the Identity code.
* ***Identity code***: Token for requesting API information.
* ***Site***: Choose a Lansweeper site. 
* ***Template***: Lansweeper template created within {{ en.RDM }}.
* ***Duplicate check*** will not import entries with the same type and host.
  * ***Root***: Check for duplicates within the whole data source.
  * ***Destination folder***: Check for duplicates only within the {{ en.RDM }} destination folder or subfolder.

![General tab](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6173.png)

### Filter tab
* ***Use custom query***: Select the type of asset you want to import using a custom query.
* ***Type***: Select the type of asset you want to import from the Type list.
* ***Add Condition***: Add a condition to the Filter.
![Filter tab](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6171.png)

### Advanced tab

* ***Session name prefix***: A prefix for the entry.
* ***Session name suffix***: A suffix for the entry.
* ***Action on entry mismatch***
  * ***None***: Do nothing.
  * ***Delete***: Delete that entry.
  * ***Move to***: Move to selected ***Destination folder***.
  * ***Make expired***: Mark that entry as expired.
* ***Silent mode***: This option disables error dialogs (useful when the synchronizer runs automatically at set intervals).

![Advanced tab](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6174.png)