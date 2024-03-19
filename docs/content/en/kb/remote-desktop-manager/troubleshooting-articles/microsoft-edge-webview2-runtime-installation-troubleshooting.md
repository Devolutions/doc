---
eleventyComputed:
  title: Microsoft Edge WebView2 Runtime installation troubleshooting
  description: If the Microsoft Edge WebView2 Runtime is already installed for the system, force the reinstallation of the program by deleting a registry key.
---
When installing the Microsoft Edge WebView2 Runtime for {{ en.RDM }}, you may get the following error message:

**Installation failed. The Microsoft Edge WebView2 Runtime is already installed for the system.**

### Solution
Force the reinstallation of the program by deleting a registry key:
1. Open the Windows Registry Editor. To do so, press the <kbd>Windows</kbd>+<kbd>R</kbd> keys to open the Windows ***Run*** dialog.
1. In the dialog box, enter "regedit" in the field then click ***OK*** (or press <kbd>Enter</kbd>).
![Open the Windows Registry Editor](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMW2008_2024_1.png)
1. Copy the following path: **HKLM\SOFTWARE\WOW6432Node\Microsoft\EdgeUpdate\Clients{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}**
1. In the Registry Editor, press the <kbd>Alt</kbd>+<kbd>D</kbd> keys and paste the previously copied path. Press <kbd>Enter</kbd>.
1. Right-click the ***{F3017226-FE2A-4295-8BDF-00C3A9A7E4C5}*** key and select ***Export***.
![Export the registry key](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMW2009_2024_1.png)
1. Save the registry key file in a location you will remember, for example in **C:\Program Files (x86)\Microsoft\EdgeWebView2**.
1. Right-click the key in the Registry Editor and select ***Delete***.
1. Install the latest bootstrapper version. Consult [Download Microsoft Edge Chromium](/kb/remote-desktop-manager/knowledge-base/download-microsoft-edge-chromium/) to make sure you are downloading the version compatible with {{ en.RDM }}.
1. Once downloaded and installed, restart {{ en.RDM }} for the installation to take effect.

{% snippet icon.badgeHelp %}
If you still encounter issues with the Microsoft Edge WebView2 Runtime installation with {{ en.RDM }}, contact our support team at [service@devolutions.net](mailto:service@devolutions.net).
{% endsnippet %}
