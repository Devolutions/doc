---
eleventyComputed:
  title: Enable the Recording Server log
  keywords:
  - Log
  - Log4Net
  - Logging
  - Logs
---
The following procedure describes how to enable the logging utility for the {{ en.DVLS }} ***Recording Server***.

## Enable logs
1. To edit the **log4net.config** file, click on the ***Explore*** button of the ***Recording Server*** section of the ***Companions*** tab in the {{ en.DVLSCONSOLE }}.
![Explore button](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8120.png)
1. Set the file value parameter with the full log file path. Ensure that the backslashes are doubled.
   {% snippet icon.badgeCaution %}
   Make certain the destination folder for the logs has writing rights.
   {% endsnippet %}
1. Set the level value parameter to ALL.
1. Restart both Collector and Processor services on the server after any modification of these files.
{% snippet icon.badgeInfo %}
Ensure to set the level value back to ERROR and restart the services once the investigation is completed.
{% endsnippet %}

```
<?xml version="1.0" encoding="utf-8" ?>
<log4net>
  <appender name="RollingFile" type="log4net.Appender.RollingFileAppender">
    <file value="c:\\Logs\\collector.log" />
    <appendToFile value="true" />
    <maximumFileSize value="1MB" />
    <maxSizeRollBackups value="5" />
    <layout type="log4net.Layout.PatternLayout">
      <conversionPattern value="%date %5level %logger.%method [%line] - MESSAGE: %message%newline %exception" />
    </layout>
  </appender>
  <root>
    <level value="ALL" />
    <appender-ref ref="RollingFile" />
  </root>
</log4net>
```
