---
eleventyComputed:
  title: Integrate Devolutions {{ en.HUBP }} in {{ en.RDM }}
  description: This topic explains how to integrate Devolutions {{ en.HUBP }} in {{ en.RDM }}
---
Devolutions {{ en.HUBP }} is our secure personal password management solution for individual users — and it’s free.  
{% snippet icon.badgeInfo %}
To integrate {{ en.HUBP }} as a data source in {{ en.RDM }} you will be required to create it in your {{ en.DA }}. Follow the steps in this topic to [create your free {{ en.HUBP }}](/hub/getting-started/create-hub/hub-personal/) or visit our website to create your [vault](https://password.devolutions.net/personal) today.
{% endsnippet %}

## Steps
1. Launch {{ en.RDM }}.
1. Go to ***File – Data sources***.
1. Click ***Add a New Data Source***.  
![Add a New Data Source](https://webdevolutions.azureedge.net/docs/en/kb/KB4909.png)
1. Under ***Individual***, select ***Devolutions {{ en.HUBP }}*** and click ***OK***.  
![{{ en.HUBP }}](https://webdevolutions.azureedge.net/docs/en/kb/KB0064.png)
1. Enter a ***Name*** for the data source.
1. Enter the ***Email*** from the {{ en.DA }}, and click ***OK***.  
![Information fields](https://webdevolutions.azureedge.net/docs/en/kb/KB0065.png)  
{% snippet icon.badgeInfo %}
It is possible to configure a backup for this datasource at this point, but it can also be done later.
{% endsnippet %}

7. Click ***OK*** to close the window and save the data source.
