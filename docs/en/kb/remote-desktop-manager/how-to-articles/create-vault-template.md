---
title: Create a Vault Template
---
# {{ en.TOPICTITLE }}
Vault templates are available in {{ en.RDM }} 2022.1.11 and higher with advanced data sources. For lower versions of {{ en.RDM }} follow this <a href="#workaround">workaround</a>.  
{% snippet icon.badgeInfo %}
This feature is not available with the {{ en.DPS }} data source.
{% endsnippet %}  

### Vault template for {{ en.RDM }} 2022.1.11 and Higher
1. Go to ***Administration - System Settings - Vault Management - Vault Templates***
1. Click ***Add Template***  
![KB4938.png](/img/en/kb/KB4938.png)
1. Name the ***Vault template*** and set the options for this template.
1. Click ***OK***  
![KB4939.png](/img/en/kb/KB4939.png)
When creating a new vault in ***Administration - Vaults*** , click ***Template*** to select your ***Vault Template*** from the list.  
![KB4940.png](/img/en/kb/KB4940.png)
### Vault template workaround for {{ en.RDM }} version lower than 2022.1.11
<a name="workaround"></a>
{% youtube '0GwzZJ-JS7Q' %}  

1. In an empty vault, create the structure (folders/sessions) you need.
1. Create a new vault in ***Administration - Vaults - Add vault***
1. Select all the folders/sessions you want in the template, right-click ***Add - Save as Template Group***
1. Name the ***Vault template***
1. In the new vault click ***New Entry - Template*** and select the ***Vault template*** you created.
