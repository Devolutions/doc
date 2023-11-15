---
eleventyComputed:
  title: System requirements
  description: System requirements for Devolutions Gateway 
  order: 20
---
To use {{ en.DGW }}, your system must meet the following requirements.

## Requirements 

### Hardware specifications 

| Small implementation <br> (1-10 concurrent sessions) {width=225px} | Mid-range implementation <br> (15-75 concurrent sessions) {width=270px} | Large implementation <br> (75+ concurrent sessions) |
| --- | --- | --- |
| 8 core processors <br> 8 GB RAM <br> Network Adapter (1 GB) | 16 core processors <br> 16 GB RAM <br> Network Adapter (1 GB) | We recommend deploying multiple {{ en.DGW }}. |

{% snippet icon.badgeInfo %} 
One {{ en.DGW }} can handle up to 75 concurrent sessions with good performance. 
{% endsnippet %}
 
### Software requirements 

* Windows 10 
* Windows Server 2016, 2019 or 2022 
* Microsoft .NET Framework 4.8 

### Prerequisites 

* Each {{ en.DHUB }} license comes with a {{ en.DGW }} which supports up to 5 concurrent sessions. Contact our [sales department](mailto:sales@devolutions.net) for more concurrent sessions. 
