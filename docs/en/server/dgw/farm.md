---
eleventyComputed:
  title: Devolutions Gateway farms
  description: A farm is able to regroup multiple gateways and perform load balancing for the connections using the gateway.
---
The purpose of the GTW Farms feature is to group multiple GTWs (Global Traffic Managers) under a single farm in order to balance the load of sessions passing through a DV GTW.

By doing this, sessions will be distributed among the DV GTWs within the farm, with the distribution depending on the farm's configuration.

Advantages of using the feature:

There are two main advantages to using this feature:

1. Load distribution: The primary advantage is load distribution to avoid overloading a single DV GTW. Previously, for a given entry, a DV GTW could be configured, but all connections for that session would pass through the same DV GTW, potentially leading to saturation. With farms, it's now possible to distribute this load to prevent service overload and maintain performance.

2. High availability: This means that the farm helps maintain continuous service availability. Previously, if a DV GTW became unavailable for any reason, it wasn't possible to establish a session. With a farm, if one DV GTW is unavailable, the session will automatically be directed to one of the other available DV GTWs in the farm. This can also be useful for maintenance or updates, as a DV GTW can be temporarily taken offline while another active DV GTW in the farm continues to provide service.
