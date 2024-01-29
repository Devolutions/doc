---
eleventyComputed:
  title: Export and import user specific settings
  description: If you or your Users are overriding entry properties with User Specific Settings in {{ en.RDM }}, everyone will be required to export and import the User Specific Settings List when migrating data.
---
{% snippet icon.badgeCaution %}
The ***Export*** and ***Import*** features for the ***User Specific Settings*** are {{ en.VLT }} specific, which means that you must select the {{ en.VLT }} from or into which you want to export or import your settings.
{% endsnippet %}

If you or your ***Users*** are overriding entry properties with ***User Specific Settings*** in {{ en.RDM }}, everyone will be required to export and import the ***User Specific Settings List*** when migrating data.

* [Export](#export)
* [Import](#import)

## Export
1. In the {{ en.RDM }} ***{{ en.NPANE }}***, select your data source and {{ en.VLT }}.
![Data Source and {{ en.VLT }} Selection](https://webdevolutions.azureedge.net/docs/en/kb/KB6092.png)
1. Go to ***File – My Account Settings***.
1. Click ***User Specific Settings List*** under ***Settings***.  
![File - My Account Settings - Settings – User Specific Settings List](https://webdevolutions.azureedge.net/docs/en/kb/KB6093.png)
1. Click ***Export***.  
![User Specific Settings List Export](https://webdevolutions.azureedge.net/docs/en/kb/KB6094.png)
1. Save the .rds file on your computer.
1. Encrypt the file with a ***Password*** and click ***OK***.  
![Specific Settings Encryption](https://webdevolutions.azureedge.net/docs/en/kb/KB6095.png)
1. Click ***OK*** to close the confirmation window that appears.  

Your ***User Specific Settings*** have now been exported in a .rds file in the specified location on your computer.

## Import
1. In the {{ en.RDM }} ***{{ en.NPANE }}***, select your new data source and {{ en.VLT }}.
![Data Source and {{ en.VLT }} Selection](https://webdevolutions.azureedge.net/docs/en/kb/KB6092.png)
1. Go to ***File – My Account Settings***.
1. Click ***User Specific Settings List*** under ***Settings***.  
![File - My Account Settings - Settings – User Specific List](https://webdevolutions.azureedge.net/docs/en/kb/KB6093.png)
1. Click ***Import***.  
![User Specific Settings List Import](https://webdevolutions.azureedge.net/docs/en/kb/KB6096.png)
1. Locate the .rds file on your computer and click ***Open***.
1. Enter the ***Password***, then click ***OK***.
1. Click ***OK*** to close the confirmation window that appears.

Your ***User Specific Settings*** have now been imported to the specified data source and {{ en.VLT }}.
