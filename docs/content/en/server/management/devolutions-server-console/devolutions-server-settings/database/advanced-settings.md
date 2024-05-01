---
eleventyComputed:
  title: Advanced settings
  description: The Advanced settings contain advanced parameters that are used for the SQL database connection string.
---
The ***Advanced settings*** contain advanced parameters that are used for the SQL database connection string.

![Advanced Settings Dialog](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8003.png)

## Settings

| Option                              | Description                                                                                                                               |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Use SQL Server encrypted connection | Use SSL to encrypt communication with the database.                                                                                       |
| Trust server certificate            | Always trust the server certificate.                                                                                                      |
| Failover partner                    | The name of the failover partner server if database mirroring is configured. This is used only for the initial connection as the principal server will return a name which will replace the configured value when different.                                                                                                 |
| Connection minimum pool size        | The minimum number of connections that are allowed in the pool.                                                                           |
| Connection maximum pool size        | The maximum number of connections that are allowed in the pool.                                                                           |
| Connection retry count              | Controls the number of reconnection attempts after the client identifies an idle connection failure. Valid values are 0 to 255. The default is 1 and 0 means do not attempt to reconnect.                                                                                                                             |
| Connection retry interval           | Specifies the time between each connection retry attempt (ConnectRetryCount). Valid values are 1 to 60 seconds (the default is 10), applied after the first reconnection attempt. When a broken connection is detected, the client immediately attempts to reconnect; this is the first reconnection attempt and only occurs if ConnectRetryCount is greater than 0. If the first reconnection attempt fails and ConnectRetryCount is greater than 1, the client waits ConnectRetryInterval to try the second and subsequent reconnection attempts.                                                                                                                                      |
| Connection timeout                  | The length of time (in seconds) to wait for a connection to the server before terminating the attempt and generating an error.                                                                                                                                                                            |

## More settings

The ***More settings*** button, in the ***Advanced settings*** section, contains more advanced parameters that can be edited to replace a missing parameter. Double click a ***Setting name*** to enter edit mode.

![More settings](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4089.png)
