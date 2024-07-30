---
eleventyComputed:
  title: "{{ en.DGW }} recording path"
  description: This topic serves as a reference for general information on {{ en.DGW }} recording.
---
This topic serves as a reference for general information on {{ en.DGW }} recording.

{% snippet, "badgeInfo" %}
The recording format is WebM and the file size is around 15 kb/s, depending on compression.
{% endsnippet %}

The `RecordingPath` parameter can be added to the **.json** file and then modified via the {{ en.DVLSCONSOLE }} to change where the recordings are saved. The file is located under **C:\ProgramData\Devolutions\Gateway\gateway.json**.

![Recording path in the {{ en.DVLSCONSOLE }}](https://cdnweb.devolutions.net/docs/DVLSCONSOLE4010_2024_2.png)

Here are some important considerations:
* If the new path is set to a network location, like a shared folder or a UNC path, be aware that this may impact network traffic, both incoming and outgoing.
* Given that it is a **.json** file, ensure the path is correctly formatted with doubled backslashes, for example: `"RecordingPath": "\\\\vwinsrvdata\\Recording\\"`.
* Confirm that the account operating the gateway service has the necessary permissions to access both the gateway files and the file share.