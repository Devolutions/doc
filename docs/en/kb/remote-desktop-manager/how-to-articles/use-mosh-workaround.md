---
eleventyComputed:
  title: Use Mosh in {{ en.RDM }} through WSL
  description: Mosh is very useful in scenarios of high latencey and bad connectivity, as it will reconnect the session when the connection returns to normal, instead of dropping it
  keywords: 
  - WSL
  - Mosh
---
Mosh is a UDP based remote shell protocol that utilizes SSH infrastructure for authentication, making it safe to use. It is very useful in scenarios of high latencey and bad connectivity, as it will reconnect the session when the connection returns to normal, instead of dropping it.
{% snippet icon.badgeInfo %}
Keep in mind that Mosh will take up about 3GB of disk space and download a few hundreds MBs using the internet connection, as it is essentially a second operating system.
{% endsnippet %}  
{% snippet icon.badgeInfo %}
WSL2 does not support IPv6, but a workaround[add.link.yo] is mentioned in this topic.
{% endsnippet %}  
{% snippet icon.badgeInfo %}
PowerShell should be ran as an administrator for this solution.
{% endsnippet %}  

## Steps

