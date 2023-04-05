---
eleventyComputed:
  title: My {{ en.PVLT }}
keywords:
- Private vault
---
The {{ en.PVLT }} is a user centric vault for entries of any type. It allows each user o create entries that only them can access.  

To create a new entry in your {{ en.PVLT }} , simply click on {{ en.PVLT }} in your Navigation Pane and create your new entry directly from there.  

{% snippet icon.badgeInfo %} 
The {{ en.PVLT }} is only available for all [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) . 
{% endsnippet %}
 
![Navigation pane - User Vault](/img/en/rdm/mac/clip6003.png) 

## A note on Credentials 

Credentials in the {{ en.PVLT }} can be used in two ways:  

1. From a session in the {{ en.PVLT }} . 
1. When using the [User Specific Settings](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/) feature  

These restrictions can easily be understood when you keep in mind that the {{ en.PVLT }} is in fact contained in the user area of the database. It must be used from within itself, or by using our extension mechanism that is user specific. 

