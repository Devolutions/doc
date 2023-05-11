---
title: Search/Filter
---
It is possible to apply a filter in the {{ en.NPANE }} tree view by typing some characters in the filter box. The filter is applied using the specified settings in the application ***File – Options – User Interface – Filter*** . 

### Ellipsis Button 

Select the ellipsis button to display the options.  
![Ellipsis button](/img/en/rdm/windows/clip11003.png) 

The filter expression is matched against fields as selected in the filter options such as:  

* Search multiple or all {{ en.VLT }}s at once. 
* Field Options (Include Folder, Host, Username, etc.). 
* General Information (Domain, IP, etc.). 
* Contact Information (Name, Email, Phone number, etc.). 
* Hardware Information (Serial number, Manufacturer, etc.). 

It's possible to exclude results by choosing to display entries that match certain criteria:  

* Session types (credentials, script tools, VPN, etc.) 
* If the session is marked as a ***Favorites*** 

In Navigation options, you can limit the search parameters to specific entry types. Such as Sessions, Data Entries, etc.  
![Search Types](/img/en/rdm/windows/clip11006.png) 

The Search Options offers the chance to customize your search, such as including shortcuts or favorites, making it case sensitive, and more!  
![Search Options](/img/en/rdm/windows/clip11012.png) 

### Keyboard Shortcut 

Use the keyboard shortcut CTRL+F to quickly have access to the Search / Filter control. This can be disabled in ***File - Options - User Interface - Keyboard.***  

You can set the focus back on the {{ en.NPANE }} by using the keyboard shortcut Ctrl+L, this also can be disabled in the options. 

## Boolean Filter 

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
- Will work but filter for the string "Baton Rouge" and not the string Baton Rouge 
* Laptop & (Baton Rouge || Boise) 
- Will work but filter for Laptop and the string (Baton Rouge || Boise) 

