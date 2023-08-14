---
title: Templates
status: Topic available in German language
---
Templates are useful to have predefined values when creating an entry. Use templates to:  

* [Add preconfigured entries](#create-a-new-entry). 
* [Use with the Quick connect feature](#run-a-quick-connect-session). 
* Open entries as a template. 
* Create password templates. 

To access and manage templates, navigate to File – Templates .  

It is possible to create local and database templates.  

* Local templates are saved in the {{ en.RDM }} configuration file. They are available only to the current user of the machine. 
* Database templates are saved in the database. They are available to all users of the data source. 

{% snippet icon.badgeInfo %} 
By default, standard users cannot create or manage templates. To allow users to create or manage templates, the permission must be granted to users using the ***Administration*** – ***Templates*** section of the [System Permissions](/rdm/windows/commands/administration/settings/system-permissions/). 
{% endsnippet %}
 
![File – Templates](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10235.png) 

## Availability 

When creating a template, its availability can be specified in the ***Template Settings***.  
![!!clip3585.png](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3585.png) 

## Usage 

Templates can be used in the following cases: 

### Create a new entry 

By default, when creating an entry of a type that has templates configured for, the user is prompted for a template to use. This behavior can be modified in the [System Settings](/rdm/windows/commands/administration/settings/system-settings/general/).  
![!!clip3584.png](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip3584.png) 

The template can be selected before creating the entry as well. Use the ***Template*** section of the ***Add New Entry*** window.  
![!!clip10266.png](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10266.png) 

### Run a Quick Connect session 

Templates can be used with the ***Quick Connect*** feature. For example, the same template can be used to connect to different hosts.  
![!!clip10164.png](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10164.png) 


