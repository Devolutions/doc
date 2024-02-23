---
eleventyComputed:
  title: Deploy in a high-availability or load-balancing environment
---
![Deploy in a high-availability or load-balancing environment](https://webdevolutions.azureedge.net/docs/en/kb/KB4773.png)

## Key points
* {{ en.DVLS }} instances are not able to discover the public name of the whole infrastructure. It must be provided using a few different strategies.
* To prevent the use of out-of-date data and thus improve the user experience, it is essential to employ a server affinity strategy due to the heavy reliance on server cache for storing tokens and managing user membership data (such as UserGroups/Roles). While you may select any method for server allocation (such as round-robin or random assignment), maintaining server affinity thereafter is crucial.
* Our security layer prevents token reuse. Therefore, it validates the client IP address. It is essential that the true origin information be relayed downstream to the {{ en.DVLS }} instance.
* Our IP allowlisting/blocklisting features also validate the client IP address.

## Preparation
* The [access URI](/kb/devolutions-server/knowledge-base/access-uri/) parameter must be properly set according to the DNS entry to reach the load balancer.
* Any load balancer technology can be used. The only requirement is that the [X-Forwarded-For header](/kb/devolutions-server/knowledge-base/use-x-forwarded-for/) is added by any proxy/device that intervenes in the communication. As a best practice, the ***X-Forwarded-For*** header must be stripped if received by a client device. It **must** be set by your own network equipment.
* The presence of the ***X-Forwarded-For*** header must be included in the IIS Logs. Please follow [Add X-Fowarded-For](/kb/devolutions-server/knowledge-base/add-x-forwarded-for-column-iis/).
* Each node should add its own identity in the HTTP Response headers. This helps see the full workflow, but some more security-conscious organizations strip that header. Since this is a plain string, simply using a basic string that does not divulge the FQDN of the responding server is acceptable for most (e.g., “node1”, “node2”). Please follow [Identify the server answering on a high-availability topology](/kb/devolutions-server/knowledge-base/identify-server-answering/) and add a unique string for each server node.

## Validation
* Any email sent by the system contains the public URI (not the name as the server node). You can use the server messaging feature and inspect the received email for the proper URI.
![Messages](https://webdevolutions.azureedge.net/docs/en/kb/KB2377.png)
* The ***LoginHistory*** table contains the IP Address for the client, not any intervening servers.
* The ***LoginAttempts*** table lists the IP Address as well, but there are more scenarios:
    * Login failures (e.g., bad credentials)
    * Blocklisted IPs
    * IPs identified as a TOR exit node
