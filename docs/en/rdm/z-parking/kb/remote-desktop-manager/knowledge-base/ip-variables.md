---
eleventyComputed:
  title: IP variables
  description: $IP$ variables have to contact the DNS server to obtain the required IP. Otherwise, the variables will remain unresolved and performances can be altered
---
$IP$ variables have to contact the DNS server to return an IP. This can cause performance issues or fail to return the IP altogether. 
To prevent this, use $INFORMATION_IP$ – or one of its many variants – to resolve and return the IP address configured in the entry. 

To configure an IP address this way, right-click on an entry, then go to ***Properties*** – ***Asset*** – ***Network***.

![IP address configuration in an entry](https://cdnweb.devolutions.net/docs/RDMW4011_2024_1.png)