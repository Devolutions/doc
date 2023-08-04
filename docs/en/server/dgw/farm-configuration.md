---
eleventyComputed:
  title: Devolutions Gateway farms configuration
  description: A farm is able to regroup multiple gateways and perform load balancing for the connections using the gateway.
---
Initial farm configuration:

To set up a farm, follow these steps:

1. Go to the DV GTW administration page (Administration => DV GTW).

2. Click the '+' button at the top right, similar to adding a GTW, but now there's a 'GTW Farm' button in the dropdown menu.

3. In the 'General' tab, provide a name and description for the farm. You can also choose to set this farm as the default DV GTW.

Note: Only one default setting is allowed at a time, whether it's a DV GTW or a farm. If a farm is created and set as default while another DV GTW is the default, the farm becomes the new default, and the other DV GTW is no longer the default. The same applies if a default DV GTW is moved into a farm – the farm becomes the new default.

4. In the 'Members' tab, click 'Select Farm Members' to open a dialogue for selecting the DV GTWs to include in the farm.

Note: A DV GTW can belong to only one farm at a time. If a DV GTW is included in a new farm, it will be moved from its current farm.

5. In the 'Security' tab, configure who can use the farm and in which vault it can be used. Permissions and rights are the same as those for regular DV GTWs.

Note: If DV GTWs within the farm have specific restrictions or permissions, these will be overridden by the farm's settings. A warning message in the 'Security' tab of a DV GTW within a farm informs the user that modifying restrictions/permissions here won't have an impact as long as it remains in the farm.

Once the farm is created:

To move a DV GTW into a farm, there are two ways. Either use the selection dialogue during initial configuration or directly edit a DV GTW and choose the farm in the 'General' tab.

To remove a farm, you can choose to delete the DV GTWs within it or only delete the farm. If you delete only the farm, the DV GTWs within it become regular DV GTWs.

Configuring DV GTWs within the farm:

In the 'Members' tab of the farm's edit dialogue, selected DV GTWs appear in a table with two editable values. The first value is their relative weight. This weight affects load distribution. Higher weight increases the chances of a DV GTW receiving the next session. If all DV GTWs within the farm have the same weight, they have an equal chance of receiving sessions.

Example weight calculations:

GTW1 => weight 100
GTW2 => weight 200
GTW3 => weight 300

Total weight = 600

GTW1 probability => 100/600 => 1/6 => 16.66%
GTW2 probability => 200/600 => 2/6 => 1/3 => 33.33%
GTW3 probability => 300/600 => 3/6 => 1/2 => 50%

Note that the actual weight values don't matter, only their ratios. So, 1-2-3 is equivalent to 1000-2000-3000.

GTW1 => weight 1
GTW2 => weight 2 (UNAVAILABLE)
GTW3 => weight 3

In this example, since GTW2 is unavailable, it's not considered for session distribution.

Total weight = 4

GTW1 probability => 1/4 => 25%
GTW3 probability => 3/4 => 75%

These are probabilities, not certainties. For example, with 4 sessions, GTW1 might receive 2 or 3 sessions, despite the 25% probability. Over time, probabilities tend to balance out according to the law of large numbers.

The 'Drain' button in the 'Drain' column makes a DV GTW unavailable for new sessions. Active sessions continue until completion. It's useful for planned maintenance or updates.

Once configuration is complete:

Selecting a farm for a session is similar to choosing a regular DV GTW (Edit entry, VPN/Tunnel/GTW tab). Farms are listed along with individual DV GTWs. A DV GTW within a farm can't be selected outside the farm.

The 'Check Health' button remains functional even with a selected farm. A positive response means at least one DV GTW in the farm is available. A negative response means no DV GTWs in the farm are available.

To determine which DV GTW was used for a session, check the logs for the entry. The 'Connection opened' log detail shows the 'GTW' and 'GTW farm', indicating which GTW was ultimately used for the session.