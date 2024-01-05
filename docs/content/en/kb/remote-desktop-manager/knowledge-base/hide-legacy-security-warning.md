---
eleventyComputed:
  title: Hide the legacy security removal warning box in {{ en.RDM }}
---
{% snippet icon.badgeWarning %}
Legacy security has been deprecated and will be completely removed starting with version 2023.3 of {{ en.RDM }}. See [Disable legacy security in {{ en.RDM }}](/kb/remote-desktop-manager/how-to-articles/migrate-legacy-security-permissions/).
{% endsnippet %}  

![Legacy security removal warning box](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6055.png)

The warning box cannot be permanently hidden from the interface, but a manual solution is available.  
1. Close {{ en.RDM }}.
1. Go to your Windows search bar and type **%localappdata%**. Press Enter or click on it.  
![Windows search bar](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6058.png)
1. Go to **Devolutions\RemoteDesktopManager\RemoteDesktopManager.cfg**.  
![AppData\Local\Devolutions\RemoteDesktopManager\RemoteDesktopManager.cfg](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6056.png)
1. Edit **RemoteDesktopManager.cfg** by using your preferred text editor.
1. Add the following lines to the file:
   ```
   <HideLegacySecurityWarning>true</HideLegacySecurityWarning>
   <HideMySQLWarning>true</HideMySQLWarning>
   ```
   ![HideLegacySecurityWarning and HideMySQLWarning](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6057.png)
1. Save your file.
1. Open {{ en.RDM }}.

The legacy security removal warning box should now be hidden.
