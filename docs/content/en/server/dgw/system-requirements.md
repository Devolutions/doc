---
eleventyComputed:
  title: System requirements
  description: To use {{ en.DGW }}, your system must meet these requirements.
  order: 20
---
To use {{ en.DGW }}, your system must meet the following requirements.

## Hardware requirements

| Minimal implementation<br>(1 to 5 concurrent sessions) | Small implementation<br>(5 to 15 concurrent sessions) | Medium implementation<br>(15 to 75 concurrent sessions) | Large implementation<br>(More than 75 concurrent sessions) |
| :---: | :---: | :---: | :---: |
| 2 vCPUs<br>4 GB RAM | 4 vCPUs<br>8 GB RAM | 8 vCPUs<br>16 GB RAM | Deploy multiple {{ en.DGW }} instances. A Gigabit Ethernet controller is recommended for optimal performance. |

{% snippet icon.badgeInfo %}
One {{ en.DGW }} can handle up to 75 concurrent sessions with good performance.
{% endsnippet %}

## Software requirements

* Windows Server 2016, 2019, or 2022 with .NET Framework 4.8
* Ubuntu Linux 20.04, 22.04 with PowerShell 7

## Prerequisites

* {{ en.DVLS }} Free, Team, Enterprise, or Platinum Edition.
* A license is required for each deployed {{ en.DGW }}. Contact our [sales department](mailto:sales@devolutions.net) for more information.
    * If {{ en.DGW }} is installed side by side with {{ en.DVLS }} on the same server, it supports up to 5 concurrent sessions without a license.
* For MSPs, one {{ en.DGW }} can be deployed per customer site.  All you need is to keep the {{ en.DGW }} servers reachable by both {{ en.DVLS }} and {{ en.RDM }}. {{ en.DGW }} only needs to accept inbound connections coming from them. No outbound connections to {{ en.DVLS }} and {{ en.RDM }} are required.