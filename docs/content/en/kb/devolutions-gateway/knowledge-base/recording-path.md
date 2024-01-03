---
eleventyComputed:
  title: "{{ en.DGW }} recording path"
  description: This topic serves as a reference for general information on {{ en.DGW }} recording.
---
This topic serves as a reference for general information on {{ en.DGW }} recording.

{% snippet icon.badgeInfo %}
The recording format is WebM and the file size is around 15 kb/s, depending on compression.
{% endsnippet %}

## Recording path
The `RecordingPath` parameter can be added to the .json file and then modified to change where the recordings will be saved.  
The file is located under **C:\ProgramData\Devolutions\Gateway\gateway.json**.

{% snippet icon.badgeInfo %}
A few important notes:
* It should be noted that if the new path is pointing to a network location, such as a shared folder or UNC path, network traffic input and output may be affected.
* Since it's a .json file, the path needs to be written with doubled backslashes (for example: `"RecordingPath": "\\\\vwinsrvdata\\Recording\\"`).
* Make certain the account running the gateway sevice has access to both gateway files and the file share.
{% endsnippet %}  
