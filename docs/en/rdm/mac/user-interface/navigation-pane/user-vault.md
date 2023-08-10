---
eleventyComputed:
  title: My {{ en.UVLT }}
keywords:
- Private vault
---
The {{ en.UVLT }} is a user centric vault for entries of any type. It allows each user o create entries that only them can access.  

To create a new entry in your {{ en.UVLT }} , simply click on {{ en.UVLT }} in your ***{{ en.NPANE }}*** and create your new entry directly from there.  

{% snippet icon.badgeInfo %} 
The {{ en.UVLT }} is only available for all [Advanced Data Sources](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/) . 
{% endsnippet %}
 
![{{ en.NPANE }} – User Vault](https://webdevolutions.azureedge.net/docs/en/rdm/mac/clip6003.png) 

## A note on Credentials 

Credentials in the {{ en.UVLT }} can be used in two ways:  

1. From a session in the {{ en.UVLT }}. 
1. When using the [User Specific Settings](/rdm/mac/commands/edit/setting-overrides/user-specific-settings/) feature  

These restrictions can easily be understood when you keep in mind that the {{ en.UVLT }} is in fact contained in the user area of the database. It must be used from within itself, or by using our extension mechanism that is user specific. 

