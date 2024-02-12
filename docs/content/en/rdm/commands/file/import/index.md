---
eleventyComputed:
  title: Import
  status: Topic available in German language
---
{% tabs %}
{% tabItem "Windows" %}
{% youtube 'ditrtJE1KlU' %}  

Go to ***File – Import*** to import entries in {{ en.RDM }}. You can import entry types from multiple sources.  

We support native import formats from many popular tools on the market. In case we do not support the native format or the third party, we have wizards to import from a CSV file. 

{% snippet icon.badgeInfo %} 
The import feature is only active if the import ***Privileges*** have been enabled inside the user account. See [System Permissions](/rdm/windows/commands/administration/settings/system-permissions/).
{% endsnippet %}
 
![File – Import](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11281.png) 

See the following topics to get more information about each option:  

* [Import (.rdm)](/rdm/windows/commands/file/import/rdm/) 
* [Import (.json)](/rdm/windows/commands/file/import/json/) 
* [Import Computer Wizard](/rdm/windows/commands/file/import/computer-wizard/) 
* [Import with Network Scan](/rdm/windows/commands/file/import/network-scan/) 
* [Import Generic Csv Wizard](/rdm/windows/commands/file/import/generic-csv-wizard/) 
* [Import Sessions](/rdm/windows/commands/file/import/sessions/) 
* [Import Logins](/rdm/windows/commands/file/import/logins/) 
* [Import Contacts](/rdm/windows/commands/file/import/contacts/)
{% endtabItem %}

{% tabItem "macOS" %}
Use the ***File – Import*** option to import entries in {{ en.RDMMAC }}. You can import multiple entry types from a multitude of sources. We support native import formats from many popular tools on the market and in case we do not support the native format or the third party, we have wizards available to import from a CSV file. 

{% snippet icon.badgeNotice %} 
The import feature is only active if the import [Permission](/rdm/mac/commands/administration/user-management/permissions/) has been enabled inside the user account. 
{% endsnippet %}
 
## Settings 

![File – Import](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip10313.png) 

### Import Entries 

Import Entries is use to import sessions store in files such as:  

* .rdm ({{ en.RDM }}'s native export format)  
* .xml (it must be a specific format compatible with the application)  

### Import Computer Assistant 

You can import computers from different sources. These sources includes:  

* Network neighborhood  
* Host list  

### Import Sessions from 

Please consult [Import sessions](/rdm/mac/commands/file/import/sessions/) for more information.
{% endtabItem %}
{% endtabs %}