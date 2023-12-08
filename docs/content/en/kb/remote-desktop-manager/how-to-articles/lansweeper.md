---
eleventyComputed:
  title: Use Lansweeper in {{ en.RDM }}
  description: How to use Lansweeper in {{ en.RDM }}.
---
For individuals currently using Lansweeper or considering its addition to their IT toolbox, the integration in {{ en.RDM }} offers substantial benefits. It allows users to seamlessly view all Lansweeper assets within {{ en.RDM }}. Furthermore, this integration facilitates the automatic synchronization and generation of entries for Lansweeper assets, significantly improving the efficiency and effectiveness of IT management processes.

## Link Lansweeper to an entry's properties via the IT asset management tab
The IT Asset Management feature can be used to link an asset manager (e.g., [BlueTally](/kb/remote-desktop-manager/how-to-articles/it-asset-management/), Lansweeper) through an entry's properties. An embedded tab will then display the main landing page for Lansweeper. You can also easily switch between your data in {{ en.RDM }} and Lansweeper. 

{% snippet icon.badgeInfo %}
Only the ***Session***, ***Remote Management***, ***Miscellaneous***, ***VPN***, ***Synchronizer*** and ***Template*** entry types support this feature for now. The ***IT Asset Management*** entries work differently from the feature.
{% endsnippet %}

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

## Import assets from Lansweeper

To import Lansweeper assets and create connections in {{ en.RDM }}, use the ***CSV import*** option.

1. Go to ***File*** – ***Import*** – ***Session*** – ***Lansweeper***.
![File – Import – Session – Lansweeper](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6175.png)  
You can also right click on the ***{{ en.NPANE }}*** – ***Import*** – ***Import Sessions From*** – ***Lansweeper***.
1. In the ***Import From Lansweeper*** window, enter the ***identity code*** and the ***site***. 

{% snippet icon.badgeInfo %}
* The identity code comes from authorizing a personal application on your Lansweeper site. Here is a link to their documentation on how to achieve that: [How to Authenticate with our API](https://docs.lansweeper.com/DOCS/API/AUTHENTICATE#personal-application).
* Both the identity code and your direct credentials to Lansweeper can be saved in the ***My Account Settings***. These can be found in ***File*** – ***My Account Settings*** – ***Lansweeper***.
{% endsnippet %}  

3. Click ***Next***.
1. Select the ***type***.
1. Click ***Import***.  

The importation is completed. 

## Synchronizer

Populating {{ en.VLT }}s with assets is a time-consuming task in {{ en.RDM }}. [Synchronizers](/rdm/windows/concepts/advanced-concepts/synchronizers/) address this by allowing direct import of information and sessions from a provider in the right format, ensuring up-to-date data and preserving inheritance between elements.

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
* ***Use custom query***: If our supported parameters don’t satisfy your needs, or if you already have a pre-made query, you can enter it in this section. Following the
Lansweeper documentation [here](https://docs.lansweeper.com/docs/api/getting-data#filtered-query), what you need to enter in {{ en.RDM }} is everything within the “filters:” brackets. As an example, here is a filter that retrieves Alarm Systems and Android devices, with their name containing the value “asset”.

```
conjunction: AND, 
groups: 
[
	{
		conjunction: OR, conditions: 
		[
			{operator: EQUAL path: "assetBasicInfo.type" value: "Alarm system"},
			{operator: EQUAL path: "assetBasicInfo.type" value: "Android"}
		]
	},
	{
		conjunction: OR, conditions: 
		[
			{operator: LIKE path: "assetBasicInfo.name" value: "asset"}
		]
	}
]
``` 
* ***Type***: Select the type of asset you want to import from the Type list.
* ***Add Condition***:  Add a condition to the filter. You must first enter the value of the property, followed by the operator you want to apply to this condition.

![Filter tab](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6171.png)

### Advanced tab

* ***Session name prefix***: A prefix for the entry that will be created through the synchronizer
* ***Session name suffix***: A suffix for the entry that will be created through the synchronizer
* ***Action on entry mismatch***: The action that will be performed when the entries that were previously created by the synchronizer don't match the data found while synchronizing.
  * ***None***: Do nothing.
  * ***Delete***: Delete that entry.
  * ***Move to***: Move to selected ***Destination folder***.
  * ***Make expired***: Mark that entry as expired.
* ***Silent mode***: This option disables error dialogs (useful when the synchronizer runs automatically at set intervals).

![Advanced tab](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6174.png)


