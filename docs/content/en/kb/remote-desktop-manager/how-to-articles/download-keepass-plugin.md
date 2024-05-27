---
eleventyComputed:
  title: Download the KeePass plugin
  description: You need the KeePass Plug-in to send the credential to {{ en.RDM }}.
  keywords:
  - KeePass
  - Plugin
---
{% youtube 'J9BXNjsLYhI' %}

You need the KeePass Plug-in to send the credential to {{ en.RDM }} (RDM).

![KeePass plug-in is not installed](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4021.png)

{% snippet, "badgeCaution" %}
KeePass 1.X is not supported.
{% endsnippet %}

1. Due to the changes made in {{ en.RDM }} with add-on, you will need to download the KeePass plugin manually using this link: [KeePass Plugin](https://cdn.devolutions.net/download/Devolutions.RemoteDesktopManager.KeePassPlugin.2.1.2.0.zip).
1. When the download is finished, copy the .dll files in the KeePass installation folder (you can locate your KeePass installation folder with the help of the KeePass Help Center).
{% snippet, "badgeCaution" %}
The KeePass application must be running and the database must be opened.
{% endsnippet %}

3. In {{ en.RDM }} create a KeePass entry and validate that the KeePass plug-in is now installed.

{% snippet, "badgeInfo" %}
The KeePass entry is only supported with {{ en.RDM }} Team.
{% endsnippet %}

   ![KeePass plug-in is installed](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4022.png)

   {{ en.RDM }} will by default select the database; this option can be overridden by manually entering the path. {{ en.RDM }} also can support linking to multiple KeePass databases simultaneously. For this add all the paths separated by semicolons.

4. In the ***Entry*** tab choose your preferred method. It is where you can enter your Universal Unique Identifier (UUID) and the name of the entry in the database, or to always be prompt with a list.
![KeePass Entry tab](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4023.png)
