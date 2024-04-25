---
eleventyComputed:
  title: "{{ en.DLAUNCHER }} and {{ en.DVLS }} synchronization"
  description: 
  order: 20
---
{{ en.DLAUNCHER }} and {{ en.DVLS }} must be configured together to work. Launch connections can be set for all users in ***{{ en.DVLS }} Server Settings*** or individually in ***Account Settings***.

{% snippet icon.badgeInfo %}
You need to at least log in once to {{ en.DLAUNCHER }} for the companion tool to launch your sessions from {{ en.DVLS }}.
{% endsnippet %}

### Server Settings

This method sets how all users launch remote connections.

In ***Administration - Server Settings - Advanced***, select ***{{ en.DLAUNCHER }}*** in the ***Launch connection with*** drop-down menu.
![!!ServerOp4043](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4043.png)

### Account Settings

This method sets how individual users open remote connections.

1. Click the ***User avatar***.
1. Click ***Settings***.
![!!ServerOp4044](hhttps://cdnweb.devolutions.net/docs/DVLS6003_2023_3.png)
1. Choose ***{{ en.DLAUNCHER }}*** from the drop-down menu ***Launch connection with*** and ***Save***.
![!!ServerOp4045](https://cdnweb.devolutions.net/docs/DVLS6004_2023_3.png)

