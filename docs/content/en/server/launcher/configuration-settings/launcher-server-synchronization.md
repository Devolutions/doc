---
eleventyComputed:
  title: "{{ en.DLAUNCHER }} and {{ en.DVLS }} synchronization"
  description: 
  order: 20
---
{{ en.DLAUNCHER }} and {{ en.DVLS }} must be configured together to work. Launch connections can be set for all users in ***{{ en.DVLS }} Server Settings*** or individually in ***Account preferences***.

{% snippet icon.badgeInfo %}
You need to at least log in once to {{ en.DLAUNCHER }} for the companion tool to launch your sessions from {{ en.DVLS }}.
{% endsnippet %}

### Server Settings

This method sets how all users launch remote connections.

In ***Administration - Server Settings - Advanced***, select ***{{ en.DLAUNCHER }}*** in the ***Launch connection with*** drop-down menu.
![Launch connection with](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4043.png)

### Account Preferences

This method sets how individual users open remote connections.

1. Click the ***User avatar***.
1. Click ***Preferences***.
![Preferences](https://cdnweb.devolutions.net/docs/DVLS6004_2023_3.png)
1. Choose ***{{ en.DLAUNCHER }}*** from the drop-down menu ***Launch connection with*** and click ***Save***.
![!!ServerOp4045](https://cdnweb.devolutions.net/docs/DVLS6005_2023_3.png)

