---
title: Configure Client Data Source
---
1. In {{ en.RDM }} select ***File - Data Sources***.  
![!!KB4365.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4365.png)

1. Add a ***New Data Source***.  
![!!KB4366.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4366.png)

1. Select the ***{{ en.DVLS }}*** data source.  
![!!KB4367.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4367.png)

1. Specify the settings.  
![!!KB4368.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4368.png)

{% snippet icon.badgeInfo %}
If you specify %USERDOMAIN%\%USERNAME% in the user credential text area, the value of the corresponding environment variables will be used.
{% endsnippet %}

## Notes

If the server is configured to only allow SSL, ensure you specify the protocol by using https:// as the protocol. 