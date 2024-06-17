---
eleventyComputed:
  title: Unable to retrieve encryption information
  description: The error messages below appear when {{ en.RDM }}'s configuration files cannot be loaded successfully. This is caused by deleting or replacing `RemoteDesktopManager.cfg` without also modifying the encryption files tied to it.
---
The error message below appears when {{ en.RDM }}'s configuration files cannot be loaded successfully. This is caused by deleting or replacing {{ en.RDM }}'s main configuration file (`RemoteDesktopManager.cfg`) without also deleting or replacing the encryption files tied to it.

![Attempting to recover from backup](https://cdnweb.devolutions.net/docs/RDMW4072_2024_2.png)

Clicking ***Ok*** prompts {{ en.RDM }} to duplicate the backup encoding file (`RemoteDesktopManager.enb`). If the backup cannot be loaded or does not exist, one of following two windows appears to further detail the error:

![Encryption information failed to load](https://cdnweb.devolutions.net/docs/RDMW4071_2024_2.png)

![Sensitive options failed to load](https://cdnweb.devolutions.net/docs/RDMW4070_2024_2.png)

{% snippet, "badgeWarning" %}
Note that choosing ***Yes*** here recreates the encoding file and its encryption keys. This effectively prevents the decryption of previously configured sensitive options like data sources configuration, rendering them unusable.
{% endsnippet %}

## Solution
When deleting `RemoteDesktopManager.cfg`, make sure to also remove to following files (located in C:\Users\unsername\AppData\Local\Devolutions\RemoteDesktopManager):

```
RemoteDesktopManager.stv
RemoteDesktopManager.stb
RemoteDesktopManager.enc
RemoteDesktopManager.enb
RemoteDesktopManager.bak
```
When replacing `RemoteDesktopManager.cfg`, also replace the encryption files. {{ en.RDM }}'s [Export Setting option](https://docs.devolutions.net/rdm/commands/file/options/export/) ensures that all files related to encryption are included in the exported CFG file, eliminating the need move them manually. This option is located in ***File*** – ***Settings*** – ***Export Settings***.

![{{ en.RDM }}'s Export Setting option](https://cdnweb.devolutions.net/docs/RDMW4073_2024_2.png)