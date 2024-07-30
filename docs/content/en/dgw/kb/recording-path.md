---
eleventyComputed:
  title: "{{ en.DGW }} recording path"
  description: This topic serves as a reference for general information on {{ en.DGW }} recording.
---
This topic serves as a reference for general information on {{ en.DGW }} recording.

{% snippet, "badgeInfo" %}
The recording format is WebM and the file size is around 15 kb/s, depending on compression.
{% endsnippet %}

The recording path can be set in the {{ en.DVLSCONSOLE }} only.

![Recording path in the {{ en.DVLSCONSOLE }}](https://cdnweb.devolutions.net/docs/DVLSCONSOLE4010_2024_2.png)

Here are some important considerations:
* If the new path is set to a network location, like a shared folder or a UNC path, be aware that this may impact network traffic, both incoming and outgoing.
* Confirm that the account operating the gateway service has the necessary permissions to access both the gateway files and the file share.