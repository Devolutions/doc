---
eleventyComputed:
  title: Data sources
  description: The data sources are at the heart of {{ en.RDM }}. They are the container that holds entries. 
  order: 40
---
{% tabs %}
{% tabItem "Windows" %}
The data sources are at the heart of {{ en.RDM }}. They are the container that holds entries. 

## Settings 

A data source can be a local file or a database (either local or shared). Multiple data sources can be managed at the same time as seen below.  
![Data Source](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11314.png) 

## Create a data source 

Please consult [Create a new data source](/rdm/windows/data-sources/create-new-data-source/) for more information. 

## Multiple data sources 

Multiple data sources can be configured, but there is only one active at a time.  

Switch from one data source to another by using the data source drop down list.  
![Select a Data Source](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11369.png) 

## Startup data source 

You may assign a data source to open automatically when {{ en.RDM }} starts.  
![Startup Data Source](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10940.png) 

| OPTION                  | DESCRIPTION |
|-------------------------|-------------|
| Use default data source | Select the data source to connect to when the application starts. |
| Last used data source   | Connect to the last used data source. |
| Prompt for data source  | Prompt the user to for a data source to connect to. |

## Data Source Settings (System Settings) 

[Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) can manage a lot more settings related to the database and security. Those settings are saved directly in the database. For more information, please consult [Data Source Settings (System Settings)](/rdm/windows/commands/administration/settings/system-settings/general/).
{% endtabItem %}

{% tabItem "macOS" %}
The data source is at the heart of {{ en.RDMMAC }}, it is the container that holds all of your entries. 

## Settings 

The data source can be a file or a database and you use multiple data sources at the time, as seen below. They need to be configured on all workstations.  
![Data Sources](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip6016.png) 

### Create a new Data Source 

Please consult [Create a new data source](/rdm/mac/data-sources/create-new-data-source/) for more information. 

### Multiple Data Sources 

You can configure multiple data sources within the application. These data sources can be of mixed types but there is only one active at a time. It is possible to switch from one data source to another via the data source combo box.  
![Choose your current data source](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10137.png) 

### Open Data Source at Startup 

You may assign a data source to open automatically when {{ en.RDMMAC }} starts. 

| OPTION                    | DESCRIPTION |
|---------------------------|-------------|
| Use default data source   | Set the data source that you always want to open at start up. |
| Last used data source     | Open with the last used data source. |
| Prompt for data source    | A message box will open on startup for the data source selection. |

### Data Source Settings 

The [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) can contain specific settings or global policies. Those settings are saved directly in the database.
{% endtabItem %}
{% endtabs %}