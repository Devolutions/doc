---
eleventyComputed:
  title: Search & filter
---
{% tabs %}
{% tabItem "Windows" %}
It is possible to apply a filter in the ***{{ en.NPANE }}*** tree view by typing some characters in the filter box. The filter is applied using the specified settings in the application ***File – Options – User Interface – Filter***. 

## Ellipsis button 

Select the ellipsis button to display the options.  
![Ellipsis button](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11003.png) 

The filter expression is matched against fields as selected in the filter options such as:  

* Search multiple or all {{ en.VLT }}s at once. 
* Field Options (Include Folder, Host, Username, etc.). 
* General Information (Domain, IP, etc.). 
* Contact Information (Name, Email, Phone number, etc.). 
* Hardware Information (Serial number, Manufacturer, etc.). 

It is possible to exclude results by choosing to display entries that match certain criteria:  

* Session types (credentials, script tools, VPN, etc.) 
* If the session is marked as a ***Favorites*** 

In Navigation options, you can limit the search parameters to specific entry types. Such as Sessions, Data Entries, etc.  
![Search Types](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11006.png) 

The Search Options offers the chance to customize your search, such as including shortcuts or favorites, making it case sensitive, and more!  
![Search Options](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11012.png) 

## Keyboard shortcut 

Use the keyboard shortcut <kbd>Ctrl</kbd>+<kbd>F</kbd> to quickly have access to the Search/Filter control. This can be disabled in ***File - Options - User Interface - Keyboard.***.  

You can set the focus back on the ***{{ en.NPANE }}*** by using the keyboard shortcut <kbd>Ctrl</kbd>+<kbd>L</kbd>, this also can be disabled in the options. 

## Boolean filter 

Here a few implementation notes for the Boolean filter:  

* We use the C# nomenclature (& for AND, || for OR) 
* Evaluated left-to-right 
* No parentheses matching 
* Double-quotes (") are not required or removed, they are part of the text filter, do not use them unless you are looking for a double-quote. 
* Leading/trailing white-spaces are trimmed 

### Examples (this will work) 

* Boise & Laptop 
* Boise&Laptop 
* Boise & Laptop 
* Baton Rouge || Boise & Laptop 
* Laptop & Baton Rouge 

### Examples (this will not work as expected) 

* Laptop & "Baton Rouge" 
* Will work but filter for the string "Baton Rouge" and not the string Baton Rouge 
* Laptop & (Baton Rouge || Boise) 
* Will work but filter for Laptop and the string (Baton Rouge || Boise)
{% endtabItem %}

{% tabItem "macOS" %}
It is possible to apply a filter in the [***{{ en.NPANE }}***](/rdm/mac/user-interface/navigation-pane/) tree view by typing some characters in the filter box. The filter is applied using the specified settings in the application Filter options. 

## Settings 

The Search filter is accessible from the {{ en.RDMMAC }} Quick Access [Toolbar](/rdm/mac/user-interface/quick-access/).  
![Quick Access - Search](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10561.png) 

Click on the arrow in the Search box to display your search options.  
![Search box - Dropdown options](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10562.png) 

The filter expression is matched against fields as selected in the filter options such as:  

* Group 
* Type 
* Host 
* Username 
* Domain 
* Description 
* Keywords/Tags 
* Contact Information 

It is possible to exclude results by choosing to display entries that match certain criteria:  

* Session types (credentials, script tools, VPN, etc.) 
* If the session is marked as a Favorites 

A search by types can be executed to include Sessions, Data Entries, Contacts, Documents, Credentials Entries, VPNs, Macros/Scripts/Tools, Show Sync.  
![Search - Type](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10563.png) 

The Search Options will offer you the possibility to include the shortcuts, the sub entries, show only the favorites and/or make the search case sensitive.  
![Search - Search Options](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10564.png)
{% endtabItem %}
{% endtabs %}