---
title: Data sources
order: 40
---
The data source is at the heart of {{ en.RDMMAC }}, it is the container that holds all of your entries. 

## Settings 

The data source can be a file or a database and you use multiple data sources at the time, as seen below. They need to be configured on all workstations.  
![Data Sources](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip6016.png) 

### Create a new Data Source 

Please consult our [Create a new data source](/rdm/mac/data-sources/create-new-data-source/) topic for more information. 

### Multiple Data Sources 

You can configure multiple data sources within the application. These data sources can be of mixed types but there is only one active at a time. It is possible to switch from one data source to another via the data source combo box.  
![Choose your current data source](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10137.png) 

### Open Data Source at Startup 

You may assign a data source to open automatically when {{ en.RDMMAC }} starts. 

<table>
	<tr>
		<th>
OPTION 
		</th>
		<th>
DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Use default data source 
		</td>
		<td>
Set the data source that you always want to open at start up. 
		</td>
	</tr>
	<tr>
		<td>
Last used data source 
		</td>
		<td>
Open with the last used data source. 
		</td>
	</tr>
	<tr>
		<td>
Prompt for data source 
		</td>
		<td>
A message box will open on startup for the data source selection. 
		</td>
	</tr>
</table>

### Data Source Settings 

The [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) can contain specific  settings or global policies. Those settings are saved directly in the database, see Data Source Settings topic for more information. 
