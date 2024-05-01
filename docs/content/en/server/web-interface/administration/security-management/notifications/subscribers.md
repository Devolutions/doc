---
eleventyComputed:
  title: Subscribers
  description: At least one subscriber must exist to receive notifications about {{ en.DVLS }} activities.
---
At least one subscriber must exist to receive notifications about {{ en.DVLS }} activities.
To create a new ***Subscriber***, click on the ***Add*** button.
![Create a subscriber](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8154.png)

Fill in the information in the following fields.
![Email subscriber properties](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8155.png)

![Syslog server subscriber properties](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2122.png)

## Subscriber
| Option | Description                |
|--------|----------------------------|
| Name   | Display of the subscriber. |
| Type   | <ul><li>Email: The notification will be sent to an email address.<ul><li>Email Address: Valid email address.</li><li>Recipient name: Email recipient name.</li></ul></li><li>Syslog: The notification will be sent to a syslog server.<ul><li>Use default: Will use the Syslog server configuration set in [Logging](/server/web-interface/administration/configuration/server-settings/general/logging/).</li><li>Host name: Host name of the Syslog server.</li><li>Port: Port of the syslog server.</li><li>Protocol: Protocol (TCP or UDP) to communicate with the Syslog server.</li></ul></li></ul> |
