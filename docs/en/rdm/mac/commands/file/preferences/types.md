---
eleventyComputed:
  title: Types
  description: Use File - Preferences - Types to control settings applied to Session entries.
---
Use File - Preferences - Types to control settings applied to Session entries.

## Settings

![Preferences - Types](https://cdnweb.devolutions.net/docs/en/rdm/mac/clip10319.png)

### Session Type

| OPTION                   | DESCRIPTION |
|--------------------------|-------------|
| Default close all action | Select the Default action for the Close all button when multiple tabs are open at the same time in the dashboard:<ul><li>Disconnect (disconnect all opened tab connected session)</li><li> Log off (Log off all opened tab session)</li><li> Default (Close all opened tab sessions)</li></ul> |

### Credentials

| OPTION             | DESCRIPTION |
|--------------------|-------------|
| Global Availability | Define the default setting of the Global Availability for the [{{ en.UVLT }}](/rdm/mac/user-interface/navigation-pane/user-vault)<br><br>Search between:<ul><li>Available</li><li> Unavailable</li></ul> |

### RDP

| OPTION              | DESCRIPTION |
|---------------------|-------------|
| Screen sizing mode  | You can choose a preferred screen sizing mode for your RDP session between:<ul><li>Scrollbar</li><li> Smart reconnect</li><li> Smart sizing</li><li> Server resolution</li><li> None</li></ul> |
| Display             | Determinate the preferred display for the session. </ul>Select between:<ul><li>Default</li><li> External</li><li> Embedded (tabbed)</li><li> Undocked</li></ul><br>You can then choose the preferred monitor to display on:<ul><li> Primary monitor: This is the monitor that is marked as main display in Windows</li><li>Secondary monitor: The other non-primary monitor, osbolete, use Monitor 1, 2, 3 or 4 instead</li><li> Current monitor: The monitor that {{ en.RDM }} is running in</li><li>Configured: See Systems Options</li><li> Default: Will not move the application, it will be Windows default mode</li><li> Monitor 1: Monitor 1 is primary</li><li> Monitor 2: Monitor 2 is primary</li><li> Monitor 3: Monitor 3 is primary</li><li> Monitor 4: Monitor 4 is primary</li><li> Monitor 5: Monitor 5 is primary</li><li>Monitor 6: Monitor 6 is primary</li></ul> |
| Activate sandboxing | The sandboxing isolate the RDP connection in another process. This is more stable and more reliable since it is an independent application embedded in RDP. This means that RDP can more easily recover from a a disconnection or a fatal error. |
| Use OpenGL          | If using OpenGL on your Mac activate this option to enhance your screen performance. |
| RDP Engine          | Select between:<ul><li>Default<li>V2</li><li> V3</li><li> V4</li></ul> |
| Gateway Transport   | Select between:<br><li> Auto</li><li> Http<li> RPC</li></ul> |

### Others
| OPTION        | DESCRIPTION |
|---------------|-------------|
| Screen display| When using ARD session you will be prompt to know which screen display to use. By default it will take the primary screen. |

