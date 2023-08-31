---
eleventyComputed:
  title: Create a {{ en.VLT }} Template
---
***{{ en.VLT }} Templates*** are available in {{ en.RDM }} 2022.1.11 and higher with advanced data sources. For lower versions of {{ en.RDM }} follow this [workaround](#workaround).

{% snippet icon.badgeInfo %}
This feature is not available with the {{ en.DVLS }} data source.
{% endsnippet %}

## {{ en.VLT }} template for {{ en.RDM }} 2022.1.11 and higher

1. Go to ***Administration - System Settings - {{ en.VLT }} Management - {{ en.VLT }} Templates***.
1. Click ***Add Template***.  
![!!KB4938](https://webdevolutions.azureedge.net/docs/en/kb/KB4938.png)
1. Name the ***{{ en.VLT }} template*** and set the options for this template.
1. Click ***OK***.  
![!!KB4939](https://webdevolutions.azureedge.net/docs/en/kb/KB4939.png)
When creating a new {{ en.VLT }} in ***Administration - {{ en.VLT }}s***, click ***Template*** to select your ***{{ en.VLT }} Template*** from the list.  
![!!KB4940](https://webdevolutions.azureedge.net/docs/en/kb/KB4940.png)

## {{ en.VLT }} template workaround for {{ en.RDM }} version lower than 2022.1.11
<a name="workaround"></a>

{% youtube '0GwzZJ-JS7Q' %}

1. In an empty {{ en.VLT }}, create the structure (folders/sessions) you need.
1. Create a new {{ en.VLT }} in ***Administration - {{ en.VLT }}s - Add {{ en.VLT }}***.
1. Select all the folders/sessions you want in the template, right-click ***Add - Save as Template Group***.
1. Name the ***{{ en.VLT }} template***.
1. In the new {{ en.VLT }} click ***New Entry - Template*** and select the ***{{ en.VLT }} template*** you created.
