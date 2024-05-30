---
eleventyComputed:
  title: Consult the failed request tracing log
  description: With failed request tracing enabled, the log files are created and populated in the directory. By default, the path is %SystemDrive%\inetpub\logs\FailedReqLogFiles.
---
With failed request tracing enabled, the log files are created and populated in the directory set up in [Configure failed request tracing](/server/kb/troubleshooting-articles/failed-request-tracing-with-iis/configure-failed-request-tracing/). By default, the path is **%SystemDrive%\inetpub\logs\FailedReqLogFiles**. There, a folder typically named **W3SVC1** is created when the first case happens.

## W3SVC1 folder content
* XML files (**fr######.xml**): Open an XML file to view the log triggered by the tracing rule.
* XSL file (**freb.xsl**): For the display style, in an XML viewer like Internet Explorer.
![W3SVC1 folder content](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4324.png)
Here is an example of a failed request tracing log:
![Example of a failed request tracing log](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4325.png)
