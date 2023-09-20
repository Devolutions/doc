---
eleventyComputed:
  title: System Requirements
  order: 20
---
{{ en.DGW }} requires the following:  

## REQUIREMENTS
### Hardware specifications

<table>
	<tr>
		<th>
Small implementation  
(1-10 concurrent sessions)
		</th>
		<th>
Mid-range implementation  
(15-75 concurrent sessions)
		</th>
		<th>
Large implementation**  
(75+ concurrent sessions)
		</th>
	</tr>
	<tr>
		<td>
8 core processors  
8 GB RAM  
Network Adapter (1 GB)
		</td>
		<td>
16 core processors  
16 GB RAM  
Network Adapter (1 GB)
		</td>
		<td>
** We recommend deploying multiple {{ en.DGW }}.
		</td>
	</tr>
</table>

{% snippet icon.badgeInfo %}
One {{ en.DGW }} can handle up to 75 concurrent sessions with good performance.
{% endsnippet %}

### Software requirements

* Windows 10
* Windows Server 2012, 2012 R2, 2016, 2019 or 2022
* Microsoft .NET Framework 4.8  

### Prerequisites

* {{ en.DVLS }} Team, Enterprise or Platinum Edition.
* A license is required for each deployed {{ en.DGW }}. Contact our [sales department](mailto:sales@devolutions.net) for more information.
  * If {{ en.DGW }} is installed side by side with {{ en.DVLS }} on the same server, it supports up to 5 concurrent sessions without a license.
* For MSPs, one {{ en.DGW }} can be deployed per customer site.  All you need is to keep the {{ en.DGW }} servers reachable by both {{ en.DVLS }} and {{ en.RDM }}. {{ en.DGW }} only needs to accept inbound connections coming from them. No outbound connections to {{ en.DVLS }} and {{ en.RDM }} are required.
