---
eleventyComputed:
  title: Email
---
Emails are sent by our notification engine and by some of our multi-factor authentication providers for internal secure messaging.

In the ***General*** section, you are able to choose an ***Authentication type*** between ***Basic*** and ***Azure***. You can also provide the ***Administrator Email***, which is the recipient email address that will receive the errors.
![Administration – Server Settings – Email](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8169.png)

After having selected the ***Authentication type***, you will get access to other fields to fill in. The information to provide depends on the authentication type.

## Basic SMTP Configuration
{% snippet, "badgeHelp" %}
See [Configure an SMTP Email](/kb/devolutions-server/how-to-articles/configure-smtp-server/configure-smtp-email), which is specific to the ***Basic Authentication type***, for steps on how to configure an SMTP in {{ en.DVLS }}.
{% endsnippet %}

![Basic Authentication type](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2059.png)

| Field/Setting      | Description                                  |
|--------------------|----------------------------------------------|
| Host               | Name or IP address of the SMTP server.       |
| Port               | SMTP server port.                            |
| Username           | Username used to connect to the SMTP server. |
| Password           | Password used to connect to the SMTP server. |
| Connection security | Specific security for the connection to the mail server.<ul><li>No encryption</li><li>Automatic based on port number (by default)</li><li>Use SSL or TLS immediately (SMTPS)</li><li>Use TLS immediately after initial connect</li><li>Use TLS if server supports it after initial connect</li></ul> |
| Send email as      | Sender's email address.                      |


## Azure SMTP Configuration
![Azure Authentication type](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2060.png)

{% snippet, "badgeHelp" %}
See [Configure an SMTP Email With Azure](/kb/devolutions-server/how-to-articles/configure-smtp-server/configure-smtp-email-azure), which is specific to the ***Azure Authentication type***, for steps on how to configure an SMTP with Azure in {{ en.DVLS }}.
{% endsnippet %}

| Field/Setting | Description                                                       |
|---------------|-------------------------------------------------------------------|
| Client ID     | Azure application ID.                                             |
| Tenant ID     | Azure Tenant ID                                                   |
| User ID       | ID of the user that is listed in the "From" section of the email. |
| Secret value  | Azure client secret.                                              |
