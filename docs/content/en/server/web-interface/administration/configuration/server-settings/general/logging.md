---
eleventyComputed:
  title: Logging
  description: The Logging section allows the administrator to configure the logging features.
  keywords:
  - logging
---
The ***Logging*** section allows the administrator to configure the logging features.
![Administration – Server Settings – Logging](https://cdnweb.devolutions.net/docs/en/server/ServerOp8040.png)

## Settings

### General
| Option                | Description                                                                                                         |
|-----------------------|---------------------------------------------------------------------------------------------------------------------|
| Log debug information | Enable the {{ en.DVLS }} instance logs. When enabled, this will raise the debug level and provide more log entries. |
| Language              | Choose the language of the logs.                                                                                    |
| Scheduler log path    | Set the destination path of the log file. We recommend to set this path outside of the {{ en.DVLS }} web application folder. |

### Syslog Server
| Option               | Description                                                                    |
|----------------------|--------------------------------------------------------------------------------|
| Log to Syslog server | Send the logs to a Syslog Server.                                              |
| Host                 | Enter your Syslog Server host to connect.                                      |
| Port                 | Enter your Syslog Server port to connect.                                      |
| Protocol             | Select your preferred Protocol mode between: <ul><li>TCP</li><li>UDP</li></ul> |


### Windows Event Log
| Option    | Description                         |
|-----------|-------------------------------------|
| Event Log | Send the logs to Windows Event Log. |

### Slack Integration
| Option                      | Description                                              |
|-----------------------------|----------------------------------------------------------|
| Post activity logs to Slack | Post the logs in a Slack channel.                        |
| Bot OAuth access token      | Slack authentication access token.                       |
| Slack channel name          | Name of the Slack channel where the logs will be posted. |
