---
eleventyComputed:
  title: Devolutions Gateway farms configuration
  description: A farm is able to regroup multiple gateways and perform load balancing for the connections using the gateway.
---
This topic will cover how to configure a {{ en.DGW }} farm through the web interface for {{ en.DVLS }}.

## Configuration

1. In the web interface for {{ en.DVLS }}, make sure you are connected to the right data source.
1. Go to ***Administration*** – ***Modules*** – ***{{ en.DVLS }}***.
1. Click ***Add*** and click ***Gateway Farm***.  

1. In the ***General*** tab, provide a name and description for the farm. You can also choose to set this farm as the default.

{% snippet icon.badgeInfo %}
Only one default setting is allowed at a time, whether it is a gateway or a farm. If a farm is created and set as default while another gateway is the default, the farm becomes the new default. The same applies if a default gateway is moved into a farm, the farm becomes the new default.
{% endsnippet %}  

5. In the ***Members*** tab, click ***Select Farm Members*** to open a dialogue for selecting the gateways to include in the farm.

{% snippet icon.badgeInfo %}
A gateway can belong to only one farm at a time. If it is included in a new farm, it will be moved from the current farm.
{% endsnippet %}  

6. In the ***Security*** tab, configure who can use the farm and in which vault it can be used. Permissions and rights are the same as those for regular a regular gateway.

{% snippet icon.badgeInfo %}
If gateways within the farm have specific restrictions or permissions, they will be overridden by the farm's settings. A warning message in the ***Security*** tab of a gateway within a farm informs the user that modifying restrictions/permissions here will not have an impact as long as it remains in the farm.
{% endsnippet %}  

### Moving a gateway into a farm

To move a gateway into a farm, there are two ways: 
* Use the selection dialogue during initial configuration; or 
* Directly ***Edit*** a gateway and choose the farm in the ***General*** tab.

### Removing a farm/gateway

To remove a farm, you can choose to delete the gateways within it or only delete the farm. If you delete only the farm, the gateways within it become regular DV GTWs.

## Load balancing

### Weight

In the ***Members*** tab of the farm's ***Edit*** dialogue, gateways appear in a table with two editable values. The first value is their relative weight. This weight affects load distribution, higher weight increases the chances of a gateway receiving the next session. If all DV GTWs within the farm have the same weight, they have an equal chance of receiving sessions.

Example weight calculations:

GTW1 => weight 100
GTW2 => weight 200
GTW3 => weight 300

Total weight = 600

GTW1 probability => 100/600 => 1/6 => 16.66%
GTW2 probability => 200/600 => 2/6 => 1/3 => 33.33%
GTW3 probability => 300/600 => 3/6 => 1/2 => 50%

Note that the actual weight values do not matter, only their ratios. So, 1-2-3 is equivalent to 1000-2000-3000.

GTW1 => weight 1
GTW2 => weight 2 (UNAVAILABLE)
GTW3 => weight 3

In this example, since GTW2 is unavailable, it is not considered for session distribution.

Total weight = 4

GTW1 probability => 1/4 => 25%
GTW3 probability => 3/4 => 75%

These are probabilities, not certainties. For example, with 4 sessions, GTW1 might receive 2 or 3 sessions, despite the 25% probability. Over time, probabilities tend to balance out according to the law of large numbers.

### Drain

The 'Drain' button in the 'Drain' column makes a DV GTW unavailable for new sessions. Active sessions continue until completion. It is useful for planned maintenance or updates.

Once configuration is complete:

Selecting a farm for a session is similar to choosing a regular DV GTW (Edit entry, VPN/Tunnel/GTW tab). Farms are listed along with individual DV GTWs. A DV GTW within a farm can't be selected outside the farm.

The 'Check Health' button remains functional even with a selected farm. A positive response means at least one DV GTW in the farm is available. A negative response means no DV GTWs in the farm are available.

To determine which DV GTW was used for a session, check the logs for the entry. The 'Connection opened' log detail shows the 'GTW' and 'GTW farm', indicating which GTW was ultimately used for the session.