---
eleventyComputed:
  title: Microsoft RDP is unable to store passwords on the local computer
---
In a Microsoft RDP session, you want to store the password on the local computer. However the "save password" button is grayed out.

{% snippet icon.badgeInfo %}
Note: This setting may have been set by a group policy. If you find the value but do not know the reason why it is set, a Domain Administrator may have set it. We do not condone bypassing corporate policies.
{% endsnippet %}

## Solution

1. Click on Windows ***Start***, type ***R*** un and open the app.
1. Type ***regedit*** to open the registry editor and ***allow*** the app to make changes.
1. Navigate to **HKEY_LOCAL_MACHINE\Software\Policies\Microsoft\Windows NT\Terminal Services\DisablePasswordSaving** key and change the value to 0.
1. In {{ en.RDM }}, ***Open*** the ***Properties*** of the RDP session and validate that the ***Store password locally*** is activated and that you have text in the ***Host*** field.
![!!KB4048](https://cdnweb.devolutions.net/docs/en/kb/KB4048.png)
