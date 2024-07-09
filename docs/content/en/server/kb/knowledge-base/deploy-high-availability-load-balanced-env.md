---
eleventyComputed:
  title: Deploy in a high-availability or load-balancing environment
  description: By adhering to these guidelines, you can ensure a robust and secure high-availability or load-balancing deployment.
---
By adhering to these guidelines, you can ensure a robust and secure high-availability or load-balancing deployment.

![Deploy in a high-availability or load-balancing environment](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4773.png)

## Critical considerations
* **Infrastructure discovery**: {{ en.DVLS }} instances cannot automatically detect the public identifier of the entire infrastructure. It must be manually specified using a few defined strategies.
* **Server affinity**: To ensure data is current and enhance user experience, a server affinity strategy is critical due to the reliance on server cache for token storage and user membership data (such as UserGroups/Roles) management. Although any server allocation method (such as round-robin or random) can be used initially, maintaining server affinity is imperative thereafter.
* **Security measures**: Our system prevents token reuse by validating the client IP address, ensuring that the original client information is accurately relayed to the {{ en.DVLS }} instance.
* **IP allowlisting and blocklisting**: These features also require validation of the client IP address to ensure security and compliance.

## Setup instructions
* **Access URI configuration**: Ensure the [access URI](/server/kb/knowledge-base/access-uri/) parameter aligns with the DNS settings for the load balancer.
* **Load balancer requirements**: Utilize any load balancing technology that can add the [X-Forwarded-For](/server/kb/knowledge-base/use-x-forwarded-for/) header via intervening proxies or devices. This header should be stripped if received from a client, and only set by your network equipment.
* **Logging requirements**: Include the X-Forwarded-For header in IIS logs to ensure accurate tracking of client IP addresses. See instructions for [adding X-Fowarded-For](/server/kb/knowledge-base/add-x-forwarded-for-column-iis/).
* **HTTP response headers**: Each server node should add a unique, non-descriptive identifier to the headers of HTTP responses. This identifier, which could be as generic as "node1" or "node2", serves to track the path of requests across different servers without disclosing sensitive server details like the fully qualified domain name (FQDN). This practice is crucial for not only mapping the request journey but also for maintaining operational security, as it limits the exposure of infrastructure details that could be exploited. Organizations focused on heightened security should consider additional precautions such as using randomized or hashed values as identifiers to further obscure server identities. Please follow [Identify the server answering on a high-availability topology](/server/kb/knowledge-base/identify-server-answering/) and add a unique string for each server node.
* **Session persistence**: Your load balancer should support session persistence to maintain user sessions effectively (some technologies may use different terminology).

## Verification process
* **Email validation**: Verify that any system-generated email contains the correct public URI, rather than the server's name. This can be checked using the {{ en.DVLS }} messaging feature.
![Messages](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2377.png)
* **Login history and attempts**: The ***LoginHistory*** table contains the IP address for the client, not any intervening servers. The ***LoginAttempts*** table also lists the IP address, but there are more scenarios:
    * Login failures (e.g., bad credentials)
    * Blocklisted IPs
    * IPs identified as a TOR exit node
