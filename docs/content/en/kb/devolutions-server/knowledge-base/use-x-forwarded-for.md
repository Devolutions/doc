---
eleventyComputed:
  title: Use X-Forwarded-For
  description: The Use X-Forwarded-For option, found in the {{ en.DVLS }} web interface under Administration – Server Settings – Security, was introduced to solve a security issue with {{ en.DVLS }} under a load balancer.
---
The ***Use X-Forwarded-For*** option, found in the {{ en.DVLS }} web interface under ***Administration – Server Settings – Security***, was introduced to solve a security issue with {{ en.DVLS }} under a load balancer: the server would only see the caller directly before it.

When first implemented, the option was enabled by default to allow backwards compatibility with users already using load balancers. However, since {{ en.DVLS }} 2023.3, it is disabled by default for new {{ en.DVLS }} installations. Therefore, for new installations using a load balancer, you must manually enable the option in ***Administration – Server Settings – Security***. No action is required for existing installations.

When the option is enabled, the [X-Forwarded-For header](https://en.wikipedia.org/wiki/X-Forwarded-For) header is added to the request by IIS (this does not work with Kestrel). Each intermediate node adds the identity of the original caller to the request header and keeps adding its caller to the next. Consequently, the last node sees not only the original caller, but also which nodes intervened before it.
