---
eleventyComputed:
  title: Configure an SMTP email
---
Configure a basic SMTP email in {{ en.DVLS }} by following the steps below.

## Steps

1. In {{ en.DVLS }}, go to ***Administration – Server Settings – Email***.
1. In the ***Authentication type*** drop-down list, select ***Basic***.
![Basic authentication type](https://cdnweb.devolutions.net/docs/en/kb/KB2203.png)
1. In the ***Administrator Email*** field, enter the recipient email address that will receive the errors.
1. Enter/select all necessary information under the ***SMTP Configuration*** section. See the table in the next section for information on each field/setting.
1. Once the information has been provided, test your email settings with the ***Test Email*** button.
1. If successful, ***Save*** your configuration using the icon at the top right.

## SMTP configuration settings

| Field/Setting       | Description                                                |
|----------------------|------------------------------------------------------------|
| Host                 | Enter the name or IP address of the SMTP server.           |
| Port                 | Select the SMTP server port.                                |
| Username             | Enter the username used to connect to your SMTP server.    |
| Password             | Enter the password used to connect to your SMTP server.    |
| Connection security  | Set a specific security for the connection to the mail server. Choose between the following:<ul><li>No encryption</li><li>Automatic based on port number (by default)</li><li>Use SSL or TLS immediately (SMTPS)</li><li>Use TLS immediately after initial connect</li><li>Use TLS if the server supports it after the initial connect</li></ul> |
| Send email as        | Enter the sender's email address.                          |
