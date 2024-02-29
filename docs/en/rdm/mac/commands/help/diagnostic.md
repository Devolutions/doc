---
eleventyComputed:
  title: Diagnostic
  description: If you encounter a problem with {{ en.RDM }}, you can run a system diagnostic, which is available in ***Help – Diagnostic***. This could help diagnose or give a pointer to what kind of issues you might be experiencing.
---
If you encounter a problem with {{ en.RDM }}, you can run a system diagnostic, which is available in ***Help – Diagnostic***. This could help diagnose or give a pointer to what kind of issues you might be experiencing.
![Help – Diagnostic](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10466.png)

## Settings

### System

The administrator item could be the possible source for security problem. This happens often when a user has the SYSDBA or is DB_OWNER of the SQL Server database.

Some other issues could be related to the fact that the application is running in Terminal Services. However {{ en.RDM }} is fully compatible with Terminal Services.

FIPS related issues and solutions can be found in the specific FIPS (Encryption) troubleshooting section.
![System Diagnostic – System](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10467.png)

### Sessions

The Sessions tab contains information regarding your RDP, ARD and VNC sessions held in your Data Source.
![System Diagnositc – Sessions](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10468.png)

### Data Source
The Data Source tab contains information regarding your Data Source, including the number of entries it contains, the size of your data source, the number of custom images and the offline state.
{% snippet icon.badgeInfo %}
Too many custom images could dramatically increase the size of the data source and cause load time issue.
{% endsnippet %}

![System Diagnostic – Data Source](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10469.png)
