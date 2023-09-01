---
title: Installation requirements
status: Topic available in German language
---
The following describe what you will need to install before installing {{ en.DVLS }}.

Please contact us at [service@devolutions.net](mailto:service@devolutions.net) to book a session where we will help out to install {{ en.DVLS }}.

## Steps

1. SQL Server already available (Express Edition is supported). For supported SQL Server versions, please see [System Requirements](/server/overview/system-requirements/).
1. If not, install SQL Server and SQL Server Management Studio.
1. IIS Manager already installed on the server where {{ en.DVLS }} will be hosted. For supported IIS Manager versions, please see [System Requirements](/server/overview/system-requirements/).
1. {{ en.DVLSCONSOLE }} that can be downloaded [via our website](https://server.devolutions.net/home/download).
1. [{{ en.DVLS }} Prerequisites](/server/installation/installing-web-server-prerequisites/) already installed.
1. Devolutions could be using several accounts to connect to the database for the different components.These accounts can be Domain service accounts (Integrated Security) or SQL Accounts, read more about accounts in this article about [Pre-Deployment Account Survey](/kb/devolutions-server/knowledge-base/pre-deployment-account-survey/).
1. Follow the steps in [Create {{ en.DVLS }} Instance](/server/installation/create-server-instance/).

{% snippet icon.shieldInfo %}
Ensure that the encryption keys will be exported and saved in a safe place at the end of the installation process.
{% endsnippet %}
