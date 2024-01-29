---
eleventyComputed:
  title: Import & export data with {{ en.DHUBP }}
---
You can import new data to your {{ en.DHUBP }} and export your existing data to the Json format. These features are accessible via the ***Tools*** tab, under the ***Import/Export*** section.

![Import/Export](https://webdevolutions.azureedge.net/docs/en/kb/KB2083.png)

## Steps
Go to the section that corresponds to your needs:

* [Import data to {{ en.DHUBP }}](#import)
* [Export data from {{ en.DHUBP }}](#export)

### Import Data
1. In ***Tools – Import***, select the source from which you want to import your data in the drop-down list.
![Import Source](https://webdevolutions.azureedge.net/docs/en/kb/KB2084.png)
1. Upload your .csv or .json file.  
![File Upload](https://webdevolutions.azureedge.net/docs/en/kb/KB2085.png)
1. Select a ***Destination folder***.  
![Destination Folder](https://webdevolutions.azureedge.net/docs/en/kb/KB2086.png)
1. Click ***Next***.
1. Select which entry to import in your {{ en.DHUBP }}.  
![Entry Selection](https://webdevolutions.azureedge.net/docs/en/kb/KB2087.png)  
{% snippet icon.shieldCaution %}
The ***Change ID*** box at the bottom left of the window is checked by default, meaning your entry IDs will be changed upon import. For security purposes, it is recommended to leave it checked.
{% endsnippet %}  

6. Click ***Import***.
Your data has been imported to the destination folder you previously specified.

### Export Data
1. In ***Tools – Export***, select the file ***Export type*** in the drop-down list.  
![!!KB2088](https://webdevolutions.azureedge.net/docs/en/kb/KB2088.png)  
{% snippet icon.shieldCaution %}
The ***Obfuscate sensitive values*** box is checked by default, meaning your sensitive information will be harder to decypher. For security purposes, it is recommended to leave it checked.
{% endsnippet %}  

2. Select which entry to export from your {{ en.DHUBP }}.  
![Entry Selection](https://webdevolutions.azureedge.net/docs/en/kb/KB2089.png)
1. Click ***Export***, then save your file when prompted.  

Your data has been exported to the specified location.
