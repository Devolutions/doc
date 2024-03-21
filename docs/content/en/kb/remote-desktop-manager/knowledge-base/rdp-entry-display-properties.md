---
eleventyComputed:
  title: RDP entry display properties
  description: Customize the size and colors of the remote desktop window in RDP sessions.
---
Customize the default size and colors of the remote desktop window in RDP sessions. In the ***General*** section of your RDP entry properties, go to the ***Display*** settings. You are then presented with settings related to the way the session is displayed by default in the entry window.

{% snippet icon.badgeInfo %}
Most of the display properties require you to close the RDP entry completely, then reopen it to take effect.
{% endsnippet %}

![Display properties](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2373.png)

## Remote desktop size

Three default size parameter values can be customized to best suit your needs:
* [***Screen sizing mode***](#screen-sizing-mode)
* [***Remote desktop size***](#remote-desktop-size)
* [***Zoom***](#zoom)

### Screen sizing mode
![Remote desktop size settings](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2374.png)
The ***Screen sizing mode*** defines how the host resolution adapts to the current screen configuration by default.

| Settings                 | Description                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| ***Default***            | This value defaults to the ***Screen sizing mode*** defined in ***File – Options – Types – Sessions – Remote Desktop (RDP)***.  |
| ***Smart reconnect***    | The resolution of the host adjusts accordingly to mirror the resolution of the window when resizing the window. For RDP hosts prior to version 8.1 or when using the FreeRDP application, a reconnection is initiated to accomplish the resolution synchronization. If you set the screen sizing mode to this option, you also have to specify a ***Delay on login*** (in seconds). |
| ***Smart sizing***       | Window resizing stretches the original resolution to fit the new window size. This disables the ***Zoom*** option further down. |
| ***Scrollbar***          | Scrollbars are added if the resolution exceeds the window dimensions when resizing the window. If the resolution is smaller than the window, gray borders appear around it. The resolution remains unchanged and scrollbars are added as needed. |
| ***Dynamic resolution*** | The dynamic resolution parameter, introduced with RDP 8.1, seamlessly adjusts the host resolution to the window's dimensions when resizing, without reconnection. |

### Remote desktop size
The ***Remote desktop size*** defines the default dimensions of the RDP session window when you open it. You can still change the window size while you are in the session, but it will reset back to the default value you set in the properties the next time you open the entry.

| Settings                     | Description                                                                                                                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| ***Default***                | This value defaults to the ***Remote desktop size*** defined in ***File – Options – Types – Sessions – Remote desktop size***. |
| ***Full screen***            | The RDP session display takes the entire screen.                                                                               |
| ***Custom***                 | The RDP session window follows a ***Custom width*** and ***Custom height*** that you define.                                   |
| ***Current screen size***    | The RDP session window is the same size as your current screen.                                                                |
| ***Current work area size*** | The RDP session window is the same size as your current work area.                                                             |

### Zoom
The content of your RDP session window can be zoomed in or out when opening the entry. The settings range from a 50% zoom to a 300% zoom. The zoom is set to 100% by default (meaning the session keeps its original size). You can still zoom in or out while you are in the session, but it will reset back to the default value you set in the properties the next time you open the entry.

## Colors
Customize the color depth of the RDP session display. The ***Highest Quality (32 bits)*** is set by default. Note that settings on the remote computer might override this one.
![Colors settings](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2375.png)

## Connection bar settings
The two settings at the bottom of the display properties are related to how the connection bar is displayed inside your RDP session window while in full screen mode.

| Settings                                                  | Description                                                                                                    |
| --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ***Display the connection bar when in full screen mode*** | If enabled, the connection bar is displayed at the top of the remote session window when displayed in full screen. |
| ***Connection bar pinned (full screen)***                 | If enabled, the connection bar is pinned at the top of the remote session window when displayed in full screen. If you wish, the bar can still be unpinned while you are in the session by clicking on the pushpin icon in the bar, but the next time you open the session, it will be pinned again.<br><br>Note that the ***Display the connection bar when in full screen mode*** setting overrides this one. In other words, if you disable the connection bar, it will not be pinned since it is not displayed. |
