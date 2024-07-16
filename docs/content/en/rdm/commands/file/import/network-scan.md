---
eleventyComputed:
  title: Import with Network scan
  description: Import with Network Scan allows you to perform a network scan based on a predefined range of IP addresses to find sessions to import.
---
{% youtube 'FtSlp_TVAxE?si=O85mqPUZRZGAyTui&amp;start=247' %}

***Import with Network Scan*** allows you to perform a network scan based on a predefined range of IP addresses to find sessions to import. It can be accessed via the ***File – Import*** menu or by right-clicking in the {{ en.NPANE }} and selecting ***Import***.

Specify a scan range, then, once the scan is completed, select the sessions you wish to import (by default, all sessions are selected) and click ***OK*** to import the sessions in your data source.

{% snippet, "badgeCaution" %}
If you wish to review every session one by one as they are imported, you can check the ***Edit imported entry*** option. However, this is not recommended for a large number of sessions.
{% endsnippet %}

![Import with Network Scan](https://cdnweb.devolutions.net/docs/RDMW4085_2024_2.png)

## Scanning options

| OPTION | DESCRIPTION | 
|--------|-------------|
| Resolve IP address | Attempts to resolve IP addresses from hostname or domain name. | 
| Scan using ZeroConf | Sends a ping to every IP address before scanning, showing only those that respond. This should increase scanning speed. |
| Ignore existing sessions | Hides the sessions already present on the data source. |
| Scan {{ en.DGW }} | Scans for {{ en.DGW }}s. |
| Edit imported entry | Opens the ***Edit*** window for each selected entry before importation. | 