---
title: Deploy in an High Availability or Load Balanced Environment
---
![!!KB4773.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4773.png)

### Key points
* The {{ en.DVLS }} instances are not able to discover the public name of the whole infrastructure, it must be provided using a few different strategies.  
* We are basically stateless as far as the session state goes, but there are benefits in using the server affinity strategy since the server cache is heavily used to persist tokens and user membership information (for UserGroups/Roles). &Choose whatever strategy for server assignment (round-robin, randomized, etc.), but use server affinity from then on.
* Our security layer prevents token reuse, it therefore validates the client IP address. It's essential that the true origin information be relayed downstream to the {{ en.DVLS }} instance.
* Our IP whitelisting/blacklisting features also validate the client IP address.

### Preparation
* Access URI
    * The [Access URI](/kb/devolutions-server/knowledge-base/access-uri/) parameter must be properly set according to the DNS entry to reach the Load Balancer.
* Load balancing tier
    * Any load balancer technology, the only requirement is that the ***X-Forwarded-For*** header is added by any proxy/device that intervenes in the communication. As a best practice, the ***X-Forwarded-For*** header must be stripped if received by a client device, it MUST be set by your own network equipment.
* {{ en.DVLS }} Instance tiers
    * The presence of the ***X-Forwarded-For*** must be included in the IIS Logs , please follow the topic [Add X-Fowarded-For](/kb/devolutions-server/knowledge-base/add-x-forwarded-for-column-iis/)
* Each node should add its own identity in the HTTP Response headers, this is helpful for seeing the full workflow, but some more security conscious organizations strip that header. Since this is a plain string, simply using a basic string that does not divulge the FQDN of the responding server is acceptable for most. e.g. “node1”, “node2”. Please follow [Identify the Server Answering on a High Availability Topology](/kb/devolutions-server/knowledge-base/identify-server-answering/) and add a unique string for each server node.
### Validation
* Any email sent by the system should contain the public URI, not the name of the server node. You can use the Server Messaging feature and inspect the received email for the proper URI.  
![!!KB4775.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4775.png)
* The LoginHistory table should contain the IP Address for the client, not any intervening servers.
* The LoginAttempts table will list the IP Address as well, but there are more scenarios:
    * Login failures (e.g., bad credentials)
    * IP blacklisted
    * IP identified as a TOR exit node
