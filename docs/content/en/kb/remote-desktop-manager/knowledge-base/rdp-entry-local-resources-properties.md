---
eleventyComputed:
  title: Local resources properties 
  description: The following properties can be configured when creating or editing the RDP entry.
---
{% snippet icon.badgeInfo %}
The following properties can be configured when creating or editing the RDP entry. Most of the general properties require you to close the RDP entry completely, then reopen it to take effect.
{% endsnippet %}  

![Local resources properties](https://webdevolutions.azureedge.net/docs/RDMW6008.png)

## Remote Computer Sound

Configure how sound from the remote system is played back. This can be either on the remote system itself, on the local system.

### Sound hook

| SETTINGS      | Description   |                                             
|-------------------------------|---------------|
| ***Bring to this computer***        | Redirect all audio from the remote computer to play on the local computer.         |
| ***Do not play***                   | Disable audio playback entirely during the RDP session. No sound will be played on either the local or remote system.    |
| ***Leave at remote computer***      | Keep all audio playback on the remote computer, without redirecting it to the local system.                               |
| ***Default (Bring to this computer)*** | The default setting, which redirects all audio from the remote computer to the local computer.                       |

### Audio quality mode

| SETTINGS | DESCRIPTION                                                                                          |
|--------------------|------------------------------------------------------------------------------------------------------|
| ***Dynamic***            | Automatically adjusts the audio quality based on the current network conditions to optimize performance.          |
| ***High***               | Provide the highest audio quality, using more bandwidth. Suitable for high-speed network connections.          |
| ***Medium***             | Offer a balance between audio quality and bandwidth usage, designed for average network conditions.           |
| ***Default (Dynamic)***  | The default setting, which dynamically adjusts audio quality based on network conditions to ensure the best possible performance. |

### Remote audio recording

Allow or restrict the redirection of audio input from the local computer microphone to the remote desktop session.

| SETTINGS | DESCRIPTION    |
|---------------------------|--------------------------|
| Do not record             | Disable audio recording from the local computer's microphone during the RDP session. No audio input from the local machine will be captured or transmitted to the remote system. |
| Record from this computer | Enable audio recording from the local computer's microphone, allowing the audio input to be redirected and used in the remote session. This is useful for applications or services on the remote desktop that require audio input from the user.  |

## Keyboard 

This setting determines how Windows key combinations (e.g., <kbd>ALT</kbd>+<kbd>TAB</kbd>) are handled during a remote desktop session.

| SETTINGS                        | DESCRIPTION |
|-------------------------------|-------------|
| ***On the local computer*** | Windows key combinations are applied on the local computer. For instance, pressing <kbd>ALT</kbd>+<kbd>TAB</kbd> will switch between applications on the local machine, not the remote desktop. |
| ***On the Remote Computer*** | This option redirects Windows key combinations to the remote computer, so pressing <kbd>ALT</kbd>+<kbd>TAB</kbd> will switch between applications on the remote desktop. |
| ***In Full Screen Mode Only*** |With this setting, Windows key combinations are applied to the remote computer only when the RDP session is in full-screen mode. If the session is windowed, the key combinations affect the local computer. |
| ***Default (On the Local Computer)*** | The default behavior is to apply Windows key combinations on the local computer. |

### Keyboard layout

***Keyboard layout*** is the arrangement and function of keys on the keyboard used during a remote desktop session.

| SETTINGS                      | DESCRIPTION |
|-------------------------------|-------------|
| ***Keyboard layout***               | Select the keyboard layout that matches your country or language preference. This ensures that the keys pressed on the local keyboard correspond correctly to the characters and actions on the remote desktop.  |

## Local Devices and Resources

Choose which peripherals and data sources on your local computer can be redirected and accessed during a remote desktop session.

| SETTINGS                      | DESCRIPTION |
|-------------------------------|-------------|
| ***Select the devices and the resources you want to use in your remote session*** | Choose from a variety of local devices and resources to be redirected and used within the remote session such as ***printers***, ***ports***, ***clipboard***, etc. |

### Other supported RemoteFX USB devices

Use RemoteFX USB redirection to redirect specific USB devices from the local computer to the remote session.

| SETTINGS                        | DESCRIPTION |
|---------------------------------|-------------|
| ***Goodix USB2.0***                  | A device supported for redirection in RemoteFX, typically used for fingerprint sensors and other biometric devices.   |
| ***MISC USB DFU***                   | Stand for Miscellaneous USB Device Firmware Upgrade, supported for redirection in RemoteFX for devices that require firmware updates or use DFU protocol for operations. |