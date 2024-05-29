---
eleventyComputed:
  title: Integrate {{ en.DHUBP }} in {{ en.RDM }}
  description: This topic explains how to integrate {{ en.DHUBP }} in {{ en.RDM }}
---
{{ en.DHUBP }} is our secure personal password management solution for individual users — and it’s free.
{% snippet, "badgeInfo" %}
To integrate {{ en.DHUBP }} as a data source in {{ en.RDM }} you will be required to create it in your {{ en.DA }}. Follow the steps below to [create your free {{ en.DHUBP }}](/hub/getting-started/create-hub/hub-personal/) or visit our website to create your [{{ en.VLT }}](https://password.devolutions.net/personal) today.
{% endsnippet %}

## Steps
1. Launch {{ en.RDM }}.
1. Go to ***File – Data sources***.
1. Click ***Add a New Data Source***.
![Add a New Data Source](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4909.png)
1. Under ***Individual***, select ***{{ en.DHUBP }}*** and click ***OK***.
![{{ en.DHUBP }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0064.png)
1. Enter a ***Name*** for the data source.
1. Enter the ***Email*** from the {{ en.DA }}, and click ***OK***.
![Information fields](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0065.png)
{% snippet, "badgeInfo" %}
It is possible to configure a backup for this datasource at this point, but it can also be done later.
{% endsnippet %}

7. Click ***OK*** to close the window and save the data source.
