---
  title: Consult the failed request tracing log
---
With **Failed Request Tracing enabled**, the logs files are created and populated in the directory set up on step [Configure Failed Request Tracing](/kb/devolutions-server/troubleshooting-articles/failed-request-tracing-with-iis/configure-failed-request-tracing/). By default, the path is ***%SystemDrive%\inetpub\logs\FailedReqLogFiles*** In this place, a folder typically named ***W3SVC1*** will be created when the first case happen.

There will be an XSL file (freb.xsl) for the display style in an XML viewer like Internet Explorer. Also, the most important, the XML files (fr######.xml). Open an XML file to view the log triggered by the tracing rule.  
![!!KB4324](https://webdevolutions.azureedge.net/docs/en/kb/KB4324.png)  
Here is an example of a **Failed Request Tracing log**:  
![!!KB4325](https://webdevolutions.azureedge.net/docs/en/kb/KB4325.png)
