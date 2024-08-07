---
_schema: default
eleventyComputed:
  title: MSRDC support in {{ en.RDM }}
  description: >-
    {{ en.RDM }} has integrated support for the Microsoft Remote Desktop Client
    (MSRDC), providing enhanced options for RDP connections alongside the
    classic Microsoft Terminal Services Client (MSTSC).
  status:
  keywords:
---
{{ variables.RDM.en }} has integrated support for the Microsoft Remote Desktop Client (MSRDC), providing enhanced options for RDP connections alongside the classic Microsoft Terminal Services Client (MSTSC).

{% snippet, "badgeHelp" %}See the full blog article: [Remote Desktop Manager now supports MSRDC: enhanced RDP client options](https://blog.devolutions.net/2022/03/msrdc-is-now-supported-in-remote-desktop-manager/).{% endsnippet %}

## Key differences between MSTSC and MSRDC

### Definition

* **MSTSC**: Classic RDP client, pre-installed with Windows.
* **MSRDC**: Modern RDP client, primarily for Azure Virtual Desktop, available as a separate download.

### User interface

* **MSTSC**: Includes a GUI for connection configuration.
* **MSRDC**: Lacks a GUI, relying on RDP files for connections, making it more suited for integration with tools like {{ variables.RDM.null }}.

### Distribution and support

* **MSTSC**: Distributed and updated via Windows Update, with longer support cycles.
* **MSRDC**: Faster release cycles, can be downgraded if needed, not officially supported outside Azure Virtual Desktop.

### Benefits of using MSRDC in {{ variables.RDM.en }}

* **Enhanced features**: MSRDC supports features like server-side resolution changes and desktop resizing.
* **Flexibility**: Faster updates and the ability to revert to previous versions if needed.
* **Bug fixes**: Common RDP bugs may be resolved quicker in MSRDC.

## How to use MSRDC in {{ variables.RDM.en }}

### Installation

Ensure [MSRDC is installed](https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/windowsdesktop "Connect to Azure Virtual Desktop with the Remote Desktop client for Windows") on your system since it is not included with {{ variables.RDM.null }}. It is also possible to [deploy MSRDC on several computers with automatic updates](https://docs.microsoft.com/en-us/windows-server/remote/remote-desktop-services/clients/windowsdesktop-admin "Use features of the Remote Desktop client for Windows when connecting to Azure Virtual Desktop") instead of manually.

### Configuration

1. In {{ variables.RDM.null }}, select an RDP entry and click on ***Properties***.<br>![RDP entry properties](https://cdnweb.devolutions.net/docs/RDMW2058_2024_2.png)
2. In the ***General*** section, select the ***Advanced*** tab. From there, set the ***RDP version*** to ***MSRDC***.<br>![General – Advanced – RDP version – MSRDC](https://cdnweb.devolutions.net/docs/RDMW2059_2024_2.png)
3. Click ***Update*** to save your changes.

## Conclusion

While MSTSC remains the default choice for many due to its built-in nature and simplicity, MSRDC offers advanced features and quicker updates, making it a valuable alternative within {{ variables.RDM.null }}. For issues related to MSTSC, MSRDC provides a useful comparison tool and potential solution.