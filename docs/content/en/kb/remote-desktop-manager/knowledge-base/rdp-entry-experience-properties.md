---
eleventyComputed:
  title: RDP entry experience properties
  description: RDP entry experience properties can be configured when creating or editing the RDP entry.
---
{% snippet icon.badgeInfo %}
The following properties can be configured when creating or editing the RDP entry. Most of the general properties require you to close the RDP entry completely, then reopen it to take effect.
{% endsnippet %}  

![RDP entry experience properties](https://webdevolutions.azureedge.net/docs/RDMW6003.png)

| SETTINGS                                 | DESCRIPTION                                                                                                           |
|------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| ***Default***                                  | Use default settings that are automatically chosen based on the RDP client's assessment of the network conditions.   |
| ***Modern (56 kps)***                          | Optimize for very low bandwidth connections, minimizing data usage to accommodate extremely limited speeds.          |
| ***Low-speed broadband (256 kps - 2Mbps)***    | Tailor the experience for lower broadband speeds, adjusting visual quality and other settings for improved performance. |
| ***Satellite (2 - 16 Mbps with high latency)***| Designed for satellite connections, which typically have higher bandwidth but also suffer from significant latency.   |
| ***High-speed broadband (2-10 Mbps)***         | Enhance the session for users with high-speed broadband, enabling more detailed graphics and smoother interactions.  |
| ***WAN (>10 Mbps with high latency)***         | Optimize for WAN connections that have high bandwidth and high latency, balancing quality and responsiveness.        |
| ***LAN (>10 Mbps with low latency)***          | Provide the highest quality experience for LAN connections, allowing for full feature use with minimal latency.      |
| ***Detect network automatically***             | Automatically detects the network conditions and selects the most suitable settings to optimize performance.          |


| SETTINGS                             | DESCRIPTION                                                                                             |
|--------------------------------------|---------------------------------------------------------------------------------------------------------|
| ***Desktop background***                   | Display the desktop background from the remote computer.                                               |
| ***Font smoothing***                       | Enable font smoothing to improve text readability.                                                     |
| ***Desktop composition***                  | Allow the use of Windows Aero features such as transparency and other visual effects.                  |
| ***Show window contents while dragging***  | Display the contents of windows as they are moved or resized, rather than just an outline.             |
| ***Menu and window animation***            | Enable animations when opening or closing windows and accessing menus.                                 |
| ***Visual styles***                        | Applie the visual style and theme of the remote desktop, such as colors and control button appearances.|
| ***Persistent bitmap caching***            | Store images or parts of the remote desktop to improve performance during the session.                 |
| ***Redirect video playback***              | Optimize the playback of video content from the remote desktop on the local machine.                   |
| ***Reconnect if connection is dropped***   | Automatically attempts to reconnect to the remote session if the connection is temporarily lost.        |
| ***Detect bandwidth automatically***       | Automatically adjusts session settings based on the estimated bandwidth of the connection.              |
| ***Enable data compression***              | Compresse data to improve performance over slower connections.                                         |
| ***Load plug-ins embedded mode***          | (Option description might vary, typically relates to loading specific plug-ins for enhanced functionality within the RDP session.) |
| ***Cache***                                | Utilize caching to improve performance by storing frequently accessed data.  ***Default***: Uses the standard caching strategy determined by the RDP client, balancing performance and resource use. ***Full mode***: Maximizes the use of cache to enhance session responsiveness, ideal for high-bandwidth connections where memory resources are plentiful. ***Thin client***: Minimizes the amount of data cached, tailored for low-resource computing devices or very low bandwidth connections. ***Small cache***: Offers a compromise between no caching and full caching, designed for scenarios with limited memory or when conserving bandwidth is a priority but some caching benefits are desired.                                                                                         |
| ***Keep alive***                           | Send keep-alive packets to maintain the connection active during periods of inactivity.                |
| ***Enable mouse jiggler***                 | Prevent the remote session from going idle by simulating mouse movement.                               |
| ***Mouse jiggler method***                 | Specifie the technique used by the mouse jiggler, e.g., random movement, specific pattern, etc.        |
| ***Mouse jiggler interval***               | Define the time interval between simulated mouse movements.                                            |