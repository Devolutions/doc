---
eleventyComputed:
  title: Devolutions Gateway farms
  description: A farm is able to regroup multiple gateways and perform load balancing for the connections using the gateway.
---
The purpose of the {{ en.DGW }} farms feature is to group multiple gateways under a single farm in order to balance the load of sessions passing through each gateway. By using this feature, sessions will be distributed among them according to the farm's configuration:

* Load distribution helps to avoid overloading a particular gateway. Previously, for a given entry, a gateway could be configured, but all connections for that session would pass through it, potentially leading to saturation. With farms, it is now possible to distribute this load to prevent service overload and maintain performance.

* High availability, meaning that the farm helps maintain continuous service availability. Previously, if a gateway became unavailable for any reason, it was not possible to establish a session. With a farm, if one gateway is unavailable, the session will automatically be directed to one of the other available gateways in the farm. This can also be useful for maintenance or updates, as a gateway can be temporarily taken offline while an active one continues to provide service.
