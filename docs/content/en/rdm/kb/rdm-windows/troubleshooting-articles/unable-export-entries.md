---
eleventyComputed:
  title: Unable to export entries
---
Unable to export entries in {{ en.RDM }} with administrator rights or receiving error message stating: ***No entry to export***.

## Solution

Validate all the following settings and policies for the export to work.

1. Validate that these policies are unchecked in ***Help - Diagnostic - Policy*** If they are checked, see [Apply policies](/rdm/kb/rdm-windows/how-to-articles/group-policies/) to manage them.

* ***Disable the reveal password feature***
* ***Remove possibility to see passwords entirely***

![Disable the reveal password feature and remove possibility to see passwords entirely](https://cdnweb.devolutions.net/docs/RDMW6011_2024_2.png)

2. Validate that ***Allow reveal password for administrator and authorized users*** is check in ***Administration - System Settings - Password Policy - Advanced***.
![Allow reveal password for administrator and authorized users](https://cdnweb.devolutions.net/docs/RDMW6008_2024_2.png)

3. In ***File – Data sources*** select the data source and click ***Edit Data Source***.
1. Validate that ***Disable reveal password*** is unchecked in the ***Advanced*** tab (not all data sources have this option).
![Disable reveal password](https://cdnweb.devolutions.net/docs/RDMW6012_2024_2.png)
