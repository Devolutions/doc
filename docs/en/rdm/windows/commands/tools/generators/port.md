---
eleventyComputed:
  title: Port generator
  description: The Port Generator allows you to generate ports for your connections.  
---
The ***Port Generator*** allows you to generate ports for your connections.  

## Settings 

![Port Generator](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10393.png) 

| OPTION         | DESCRIPTION                                   |
|----------------|-----------------------------------------------|
| Boundaries                        | Determinate the port range to generate the ports between those 2 numbers.                                                                                                                  |
| Include well known ports          | Include ports from range 0 to 1023. They are the well-known ports or system ports. They are used by system processes that provide widely used types of network services                                   |
| Include registered ports          | Include ports from range 1024 to 49151. They are assigned by IANA for specific service upon application by a requesting entity. On most systems, registered ports can be used by ordinary users. |
| Include ports used by others sessions | Include the ports that are already used by other sessions.                      |

