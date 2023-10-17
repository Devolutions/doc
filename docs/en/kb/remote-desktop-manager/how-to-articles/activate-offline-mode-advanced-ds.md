---
eleventyComputed:
  title: Enable Offline mode for an advanced data source
---
{% youtube 'W7jK8g4WbNQ' %}

{% snippet icon.badgeCaution %}
You must enable to offline mode on multiple levels; the Data Source, the Users, the User groups (only for {{ en.DVLS }}), the System Settings and each {{ en.VLT }}.
{% endsnippet %}

1. For the ***Data Source***, go to ***File - Data Sources - Advanced - Caching Mode - Intelligent***. We would also recommend checking the ***Auto go offline*** option.  
![!!KB4799](https://webdevolutions.azureedge.net/docs/en/kb/KB4799.png)
1. For the ***Users***, go in ***Administration - Users - Edit - Settings - Offline mode***.  
![!!KB4800](https://webdevolutions.azureedge.net/docs/en/kb/KB4800.png)
1. If you have a {{ en.DVLS }}, for the ***User Groups*** in ***Administration - User groups - Edit - Settings - Offline mode***.  
![!!KB4801](https://webdevolutions.azureedge.net/docs/en/kb/KB4801.png)
1. In the ***System Settings*** in ***Administration - System Settings - Offline - Offline mode and Expiration***.  
![!!KB4802](https://webdevolutions.azureedge.net/docs/en/kb/KB4802.png)
1. For each ***{{ en.VLT }}*** in ***Administration - {{ en.VLT }} Settings - Security Settings - Allow offline***.  
![!!KB4803](https://webdevolutions.azureedge.net/docs/en/kb/KB4803.png)
