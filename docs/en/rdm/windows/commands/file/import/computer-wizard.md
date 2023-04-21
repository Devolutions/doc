---
title: Import Computer Wizard
---
{% snippet icon.badgeInfo %} 
This feature is only available when using an [Advanced Data Source](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/) . 
{% endsnippet %}
 
The ***Import Computer Wizard*** allows you to create sessions for computers using one of the following sources:  

* [Network neighborhood](#network-neighborhood) 
* [Active directory](#active-directory) (your current domain or another domain on your network) 
* [Host list](#host-list) (list of computers from a file) 

## Overview 

The wizard has a few major steps:  

1. Select computers by using one of the three sources. 
1. Optionally apply a template from which to base new sessions on. 
1. Optionally edit each newly created session prior to them being saved. 

The template selection should not be overlooked. In fact, it is probably the most important step to ensure your newly created sessions are usable right after being created. You should divide the sessions in batches based on which template you need to apply and import one batch at a time. 

## Workflow 

Upon launching the wizard, you are prompted for the source to use.  

The ***Resolve IP address*** option must be checked if you want to use the IP address in the host field of your sessions instead of the host name.  
![Import Session Wizard](/img/en/rdm/windows/clip10736.png) 

Refer to the sections below depending on the chosen source. 

### Network Neighborhood 

The next screen will immediately be populated with the result of the network discovery.  
![!!clip10737.png](/img/en/rdm/windows/clip10737.png) 

If you prefer your sessions to use the IP address instead of the Host name to connect to the devices, check the ***Select by IP address*** option. This requires that the ***Resolve by IP address*** was selected in the first screen of the wizard. Select the computers for which you want to create session and proceed to [Template Selection](#template-selection) below. Multi-select is allowed by using Ctrl-Click and Shift-Click . 

### Active directory 

The following screen allows you to select the domain to interrogate after which you must press refresh to load the list of computers that are available.  
![!!clip10093.png](/img/en/rdm/windows/clip10093.png) 

After the query is executed, the results are displayed in the grid.  
![!!clip10094.png](/img/en/rdm/windows/clip10094.png) 

If you prefer your sessions to use the IP address instead of the Host name to connect to the devices, check the ***Select by IP address*** option. This requires that the ***Resolve by IP address*** was selected in the first screen of the wizard. Select the computers for which you want to create session and proceed to [Template Selection](#template-selection) below. Multi-select is allowed by using CTRL-click and SHIFT-click . 

### Host list 

The following screen allows you to enter a list of hosts in an Edit control. If you prefer that your sessions use the IP address to connect to the hosts, you must enter the host name, a pipe, then the IP address.  
![!!clip10095.png](/img/en/rdm/windows/clip10095.png) 

Proceed to [Template Selection](#template-selection) below. 

### Template selection 

The template selection is an optional step, but it&apos;s the only way that you have to choose a protocol type other than RDP. It also allows you to set your preferences and have them used by all the created sessions. In fact, we recommend you to import in batches for each of the session type that you need to import.  

If you intend to modify each of your imported sessions as they are created, check the ***Edit*** imported entry option. Note that each session will be displayed sequentially so you can perform your modification and save. A [Batch Edit](Commands_BatchEdit) is probably preferable if you have more then a few sessions to import. 

