---
eleventyComputed:
  title: Data sources
  description: The data sources are at the heart of {{ en.RDM }}. They are the container that holds entries.
  order: 60
---
The data sources are at the heart of {{ en.RDM }}, acting as containers for entries. Use <kbd>Ctrl</kbd>+<kbd>Space</kbd> to easily [search](/rdm/commands/view/view/search/) through vaults, entries, tabs, and data sources.

## Settings

A data source can be a local file or a database (either local or shared). Multiple data sources can be managed at the same time as seen below.
![Data Source](https://cdnweb.devolutions.net/docs/RDMW6026_2024_2.png)

## Create a data source

Please consult [Create a new data source](/rdm/windows/data-sources/create-new-data-source/) for more information.

## Multiple data sources

Multiple data sources can be configured, but there is only one active at a time.

Switch from one data source to another by using the data source drop down list.
![Select a Data Source](https://cdnweb.devolutions.net/docs/RDMW6021_2024_2.png)

## Startup data source

You may assign a data source to open automatically when {{ en.RDM }} starts.
![Startup Data Source](https://cdnweb.devolutions.net/docs/RDMW6023_2024_2.png)

| OPTION                  | DESCRIPTION |
|-------------------------|-------------|
| Use default data source | Select the data source to connect to when the application starts. |
| Last used data source   | Connect to the last used data source. |
| Prompt for data source  | Prompt the user to for a data source to connect to. |

## Data Source Settings (System Settings)

[Advanced Data Sources](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) can manage a lot more settings related to the database and security. Those settings are saved directly in the database. For more information, please consult [Data Source Settings (System Settings)](/rdm/commands/administration/settings/system-settings/).