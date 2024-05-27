---
eleventyComputed:
  title: Copy entries from your {{ en.UVLT }} to a {{ en.VLT }}
  description: To be able to copy some entries stored in your {{ en.UVLT }} to another {{ en.VLT }} without doing an export/import in {{ en.RDM }}, some steps are required.
---
To be able to copy some entries stored in your {{ en.UVLT }} to another {{ en.VLT }} without doing an export/import in {{ en.RDM }}, follow the steps below.

{% snippet, "badgeCaution" %}
For this to work, some permissions in ***Administration – System Permissions*** need to be allowed for standard users.  
* Copy feature: Enable the ***Export*** and ***Copy Password*** permissions on the source folder.  
* Paste feature: Enable ***Import*** and ***Add*** permissions on the destination folder.  
{% endsnippet %}  

1. Select the entries from your {{ en.UVLT }} that you wish to add to your main {{ en.VLT }}.
1. Right-click on your selection.
1. Select ***Clipboard – Copy***.
1. Make sure that the ***Change ID*** option is checked in the ***Copy Options*** window.
1. Move to your main {{ en.VLT }}, select the folder in which you wish to add your entries, then right-click on it.
1. Select ***Clipboard – Paste***.

Your entries should now be copied to the destination {{ en.VLT }}.
