---
eleventyComputed:
  title: Clear web browser cache
  description: By deleting a file, you are able to clear the web browser cache in the application folder of {{ en.RDM }}.
---
By deleting a folder, you are able to clear the web browser cache in the application folder of {{ en.RDM }}. In ***File – Options – Advanced***, you can click the link at the bottom of the window to access the application folder. If your {{ en.RDM }} is in **Program Files**, you should find the ***EO.WebBrowser.Cache*** and ***WebView2.Cache*** folders in the **localappdata**.

1. Close your {{ en.RDM }} application.
1. In the application folder, locate the ***EO.WebBrowser.Cache*** and ***WebView2.Cache*** folders. Depending on your {{ en.RDM }} version, you may only have one of those folders.
   {% snippet icon.badgeInfo %}
   If you do not find either of those folders, the folder where the configuration files are stored may have been changed using an **override.cfg** file. See [Configuration file location](/rdm/windows/installation/client/configuration-file-location/#override-the-default-path) for more information.
   {% endsnippet %}
1. Rename or delete the folder(s). The best practice is to rename the folders, as in this case you do not lose any data.
1. Restart {{ en.RDM }}.
