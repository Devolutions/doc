---
eleventyComputed:
  title: System requirements
  description: To use {{ en.DGW }}, your system must meet these requirements.
  order: 10
---
To use {{ en.DGW }}, your system must meet the following requirements.

## Hardware requirements
| Minimal implementation<br>(1 to 5 concurrent sessions) | Small implementation<br>(5 to 15 concurrent sessions) | Medium implementation<br>(15 to 75 concurrent sessions) | Large implementation<br>(More than 75 concurrent sessions) |
| :---: | :---: | :---: | :---: |
| 2 vCPUs<br>4 GB RAM | 4 vCPUs<br>8 GB RAM | 8 vCPUs<br>16 GB RAM | Deploy multiple {{ en.DGW }} instances. |

{% snippet, "badgeInfo" %}
A Gigabit Ethernet controller is recommended for optimal performance.
{% endsnippet %}

## Software requirements
* Windows Server 2016, 2019, or 2022 with .NET Framework 4.8
* Ubuntu Linux 20.04, 22.04 with PowerShell 7

## Prerequisites
* Each {{ en.DHUB }} license comes with a {{ en.DGW }} which supports up to 5 concurrent sessions. Contact our [sales department](mailto:sales@devolutions.net) for more concurrent sessions.

## Certificate requirements
{{ en.DGW }} supports TLS 1.2 and TLS 1.3 as well as the following cipher suites:
* AES_256_GCM_SHA384
* AES_128_GCM_SHA256
* CHACHA20_POLY1305_SHA256
* ECDHE_ECDSA_AES_256_GCM_SHA384
* ECDHE_ECDSA_AES_128_GCM_SHA256
* ECDHE_ECDSA_CHACHA20_POLY1305_SHA256
* ECDHE_RSA_AES_256_GCM_SHA384
* ECDHE_RSA_AES_128_GCM_SHA256
* ECDHE_RSA_CHACHA20_POLY1305_SHA256
