---
eleventyComputed:
  title: Display RDP on multiple monitors
---
## Multiple monitor Span display feature

In {{ en.RDM }} it is possible to display multiple remote screens from an RDP session.
You will need to have as many monitors locally. For example, if you only have one local monitor, and the remote has two, you will only be able to see the primary screen of the remote.

{% snippet icon.badgeInfo %}
To view an application that does not present itself on the displayed monitor, we found this [forum thread](https://superuser.com/questions/53585/how-to-move-windows-that-open-up-offscreen) that uses the key combination <kbd>Windows</kbd>+<kbd>Shift</kbd>+<kbd>Left</kbd>/<kbd>Right</kbd>. Also, many applications let you right-click on the icon in the task bar and use the ***Move to the current display*** option.
{% endsnippet %}

1. In the ***Properties*** of an RDP entry, change the local ***Display*** for ***External***.
{% snippet icon.badgeCaution %}
The multiple monitor display is only available in ***External*** display mode.
{% endsnippet %}

2. In the remote ***Display*** section enable the option ***Span on multiple screens if possible***.
![!!KB4711](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4711.png)

## Use multiple monitors for the remote session

The Windows screen display ID are not necessarily the same as the RDP. The RDP monitors ID will also start with 0, not 1.

To discover your own RDP screen settings, please use the command mstsc /l.
![!!KB4757](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4757.png)

When enabling the ***Use multiple monitors for the remote session*** option in the remote ***Display*** section. You can choose between ***All*** or ***Selected***.

If you choose ***Selected***, in the drop down menu, you can use a space or a comma between the monitors to identify them. It will display your remote host on the monitor specified in the field.

{% snippet icon.badgeCaution %}
Remote host will only display and span from the first local monitor selected.
{% endsnippet %}

![!!KB4712](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4712.png)

## Local monitor and desktop selection

In ***External*** display mode, you can select, with the first drop down menu, on which local monitor you want the session to display.
![!!KB4740](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4740.png)

The second drop down menu should always be left to ***Current Desktop***, unless you wish to display on a local virtual desktop.
![!!KB4741](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4741.png)
