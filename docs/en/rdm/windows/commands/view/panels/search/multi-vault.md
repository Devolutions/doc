---
eleventyComputed:
  title: Multi {{ en.VLT }} Search
---
The ***Multi {{ en.VLT }} Search*** feature of {{ en.RDM }} allows you to search for folders and entries in all the {{ en.VLT }}s of the selected data source at once.  
![Multi {{ en.VLT }} Search Window](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2008.png) 

### Criteria types 

The following criteria are available to refine your search: ***Connection type***, ***Creation date***, ***Description***, ***Folder***, ***Last update date*** and ***Name***. 

{% snippet icon.badgeInfo %} 
At least one criterion must be used to filter your results, and a maximum of four criteria can be applied at once. 
{% endsnippet %}
 
![Multi {{ en.VLT }} Search Criteria](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2009.png) 

{% snippet icon.badgeInfo %} 
In ***Hub*** databases, only the ***Name*** criterion is available. 
{% endsnippet %}
 
Drop-down lists will appear when selecting certain criteria to give you more search options.  
![Multi {{ en.VLT }} Search Drop-down](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2010.png) 

Below is a description of what each of these drop-down lists type is used for.  

<table>
	<tr>
		<th>

CRITERIA 
		</th>
		<th>
DROP-DOWN LIST DESCRIPTION 
		</th>
	</tr>
	<tr>
		<td>
Connection type 
		</td>
		<td>
Select from the list the connection type of the entries you are looking for. 
		</td>
	</tr>
	<tr>
		<td>
Creation date 
Last update date 
		</td>
		<td>
Select from the list the period of time, up to 90 days ago, when the entries/folders were created or last updated. There also is a custom option in the list that allows you to specify dates to delimit your time period. This can be useful if you want to search between specific dates or if the entries or folders were created / last updated more than 90 days ago. 
		</td>
	</tr>
	<tr>
		<td>
Description 
Folder 
Name 
		</td>
		<td>
Search by typing part or all of a word in the name of the entries or folders or in their description. From the list, select the option that applies:  

* ***Contains*** - any name that includes the characters you have entered, anywhere in the field name. 
* ***Starts with*** - any name beginning with the characters you have entered. 
* ***Ends with*** - any name ending with the characters you have entered. 
* ***Exact expression*** - will find names that match every character you have entered, exactly as entered. 
		</td>
	</tr>
</table>

### Results Display 

The results are displayed when the ***Search*** button is pressed. Once done, the name of all entries and folders and the {{ en.VLT }} in which they are located are shown in the results field. The paths to entries or folders are also displayed above each result or result group.  
![Search Button](https://webdevolutions.azureedge.net/docs/en/rdm/windows/RDMWin2011.png) 

It is possible to select multiple entries at once by shift-clicking or all of them with the <kbd>Ctrl</kbd>+<kbd>A</kbd> shortcut. Right-clicking one or more entries shows the same menu and options as the ***{{ en.NPANE }}***. 

### Other functions 

The ***Select in {{ en.NPANE }}*** button, when pressed, takes you directly to the selected entry or folder in the corresponding {{ en.VLT }}'s ***{{ en.NPANE }}***.  

The ***Reset*** button clears all your search results and options, giving you a clean slate for a new search. 
