---
eleventyComputed:
  title: "{{ en.DGW }} ID (Default) not found error"
  description: In {{ en.RDM }}, if session recording is configured for a gateway but a default gateway has not been set, then the session cannot go through.
---
In {{ en.RDM }}, if session recording is configured for a gateway but a default gateway has not been set, then the session cannot go through. {{ en.RDM }} then returns the following error:

![Gateway default ID not found](https://cdnweb.devolutions.net/docs/RDMW4020_2024_1.png)

To remedy this, open your {{ en.DVLS }} or {{ en.DHUB }} datasource, go to ***Administration***, and click on the Devolutions Gateway icon.

![{{ en.DGW }} in {{ en.DVLS }}](https://cdnweb.devolutions.net/docs/RDMW4022_2024_1.png)

 Then set the desired default gateway in the ***General*** section of the Devolutions Gateway menu.

![Set desired gateway as default](https://cdnweb.devolutions.net/docs/RDMW4021_2024_1.png)