---
eleventyComputed:
  title: Slowdowns when connecting to a {{ en.DVLS }} data source with {{ en.RDM }}
  description: Connecting to a {{ en.DVLS }} data source with {{ en.RDM }} can sometimes be slow. There are multiple ways to resolve this issue quickly.
---
Connecting to a {{ en.DVLS }} data source with {{ en.RDM }} can sometimes be slow. There are multiple ways to resolve this issue quickly.

## Solution

### Disabling Internet connection
When in an environment where Internet access is not allowed, try enabling ***No Internet connection*** in ***File*** – ***Settings*** – ***Advanced***. Doing so prevents {{ en.RDM }} from making calls to the Internet that could cause timeouts and slowdowns.

![No Internet connection – advanced setting](https://cdnweb.devolutions.net/docs/RDMW4074_2024_2.png)

### Disabling certificate revocation checks
The ***Enforce certificate revocation check*** option can be temporarily left unchecked in ***File*** – ***Settings*** – ***Security***. This prevents Windows from trying to reach the revocation servers configured in the certificate. In most cases, revocation servers should be allowed through the firewall unless they are also managed locally.

![Enforce certificate revocation check – security setting](https://cdnweb.devolutions.net/docs/RDMW4075_2024_2.png)

{% snippet, "shieldInfo" %}
The Windows online certificate revocation check will not use configured proxies on the host for security reasons. 
{% endsnippet %}

Alternatively, enabling ***Enhanced certificate validation*** can prevent disconnects in some cases. Activating this feature causes {{ en.RDM }} to validate certificates using a different method, potentially circumventing the source of the slowdowns.
![Enhanced certificate validation – security setting](https://cdnweb.devolutions.net/docs/RDMW4075_2024_2.png)

### Using the built-in Remote Desktop Profiler to troubleshoot connections

To diagnose certificate validation length using {{ en.RDM }}'s built-in profiler, click on the top pane's ***Help*** button and select the ***Profiler***.

![{{ en.RDM }}'s built-in profiler](https://cdnweb.devolutions.net/docs/RDMW4078_2024_2.png)

Next, go the ***Debug only*** tab, click on the ellipsis button, and check the ***Stop Watch*** option. Lauch a connection and look for the `Certificate Validation – Chain.Build` line.

![Certificate Validation – Chain.Build](https://cdnweb.devolutions.net/docs/RDMW4077_2024_2.png)






