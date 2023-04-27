---
eleventyComputed:
  title: Devolutions Server Security Hardening
  description: Security hardening consists of implementing various security measures to protect against cyber threats and ensure the confidentiality, integrity, and availability of the system.
  keywords:
  - security hardening
  - deployment
---
Security hardening consists of implementing various security measures to protect against cyber threats and ensure the confidentiality, integrity, and availability of the system. The various Online Help and Knowledge Base topics below are organized in a logical order that you can follow before, during, and after configuring and deploying {{ en.DVLS }}. They contain useful information, best practices, and steps to follow to ensure that your {{ en.DVLS }} is as secure as possible.

The current topic is mostly based on the ***Security Dashboard***. See [{{ en.DVLS }} Security Dashboard](/kb/devolutions-server/knowledge-base/server-security-dashboard/) for a list of action items including short descriptions and mitigation measures.

## System Requirements and Topologies

The minimum recommended hardware and software specifications for {{ en.DVLS }} may vary depending on your intended use. Visit [System Requirements](/server/overview/system-requirements/) to learn what is required for your situation.

{{ en.DVLS }} instances can be installed through different topologies. Determine which one is more adapted to your needs in [Topologies](/server/overview/topologies/). Make sure the <a href="#ports-and-secure-communication">required ports</a> are available.

## Administration Accounts Settings

Prior to deployment of a {{ en.DVLS }} instance, some accounts are needed to operate the various services involved in a secure deployment of DVLS.

The administrator count should be no more than 5. Limiting the number of active administrators within the platform will reduce the attack surface of an attacker to only those accounts configured. Having more than 5 administrators can also be a sign of poor segregation of duty within the business unit or organization.

Database accounts should be different for web application, scheduler, and management tools. Minimum privileges should be granted and applied for service and database accounts to operate. Shared and excessively privileged service and database accounts may induce unnecessary security risk exposure.

The default MSSQL “sa” administrative account is a high privilege account that should only be used to manage the database instance. A less privileged user or service account is preferred to reduce impact of compromise.

The first decision is to use either domain accounts for operating the platform or to use local SQL accounts paired with local service accounts. Since this decision is a matter of personal preference, we support both models. See each one of them and what they entail in [Pre-Deployment Account Survey](/kb/devolutions-server/knowledge-base/pre-deployment-account-survey/) and learn how to configure them in [Advanced Credentials](/server/management/devolutions-server-console/devolutions-server-settings/database/advanced-credentials/).

In order for integrated security to be used to connect to the database, you must set the ***Application Pool*** to use a domain account to run under. Follow the steps in [Configure {{ en.DVLS }} to Use Integrated Security](/kb/devolutions-server/how-to-articles/configure-server-use-integrated-security/).

## Ports and Secure Communication

While {{ en.DVLS }} in itself does not dictate which ports to use for any of the resources that it accesses, we still recommend the network segregation security practice. You must consult with your system administrator to ascertain which adjustments need to be made in order for the system to inter-operate with your infrastructure. See [Ports and Firewalls](/kb/devolutions-server/knowledge-base/ports-firewalls/).

Secure communications guarantee the integrity and confidentiality of the data transmitted between the client and the server. As such, it is important to secure LDAP communications with the [LDAP Over SSL](/server/getting-started/security-checklist/ldap-over-ssl/) (LADPS) method. See [Domains](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/) to learn how to enable it.

After you have configured the {{ en.DVLS }} instance and connected through a client application, you can follow the steps in [Configure SSL](/kb/devolutions-server/how-to-articles/configure-ssl/) to import a certificate or create a self-sign certificate, create a SSL binding, enable HTTPS, and configure SSL settings in the client applications. Performing these steps right from the start may add a layer of complexity that may prevent you from succeeding in the initial configuration.

## Access URI

If you are upgrading your {{ en.DVLS }} from a version prior to 2022.1 to 2022.2 or later, follow the steps in [Access URI](/kb/devolutions-server/knowledge-base/access-uri/). During the upgrade process or the installation process of {{ en.DVLS }}, we must provide an Access URI. This URI is a redirect URL that is used by the OAuth system and redirects the authentication traffic to the Access URI.

![Access URI](/img/en/kb/KB2211.png)

## Encryption

To ensure that the communication between the {{ en.DVLS }} instance and the SQL Server database is encrypted, an extensive procedure must be followed on the SQL Server instance. See [Encrypting Connections to SQL Server](/server/getting-started/security-checklist/encrypting-connections-sql-server/).

![Use SQL Server encrypted connection](/img/en/kb/KB2212.png)

When using SQL Server Login accounts, encrypting the web.config and appsettings.json files is of the utmost importance, as sensitive information is stored in them. Visit [Encrypting the web.config File](/kb/devolutions-server/how-to-articles/encrypting-web-config-file/) for more information and recommendations.

The encryption key is used to encrypt data entries (connections, private vaults, documentation, and attachments). The encryption keys are generated and stored in the encryption.config file on the server only. Learn how to export, import, and regenerate them in [Manage Encryption Keys](/kb/devolutions-server/how-to-articles/manage-encryption-keys/).

![Encryption Keys Management](/img/en/kb/KB2213.png)

For businesses that require FIPS (Federal Information Processing Standards), refer to [FIPS (Encryption)](/kb/remote-desktop-manager/troubleshooting-articles/forticlient/fips-encryption/).

## Backup and Log Management

The [Backup Manager](/server/web-interface/administration/backup/backup-manager/) accessible from the {{ en.DVLS }} web interface allows administrators to configure the parameters to back up the database and the web application folder. Backups should be enabled and configured to an external media or cloud storage to avoid permanent loss of data.

![Backup Manager](/img/en/kb/KB2214.png)

Also learn about the requirements and the steps to properly configure the {{ en.DVLS }} Backup Scheduler and instructions on how to restore your {{ en.DVLS }} instance succeeding a disaster in [Backup and Restore {{ en.DVLS }}](/kb/devolutions-server/knowledge-base/backup-restore-server/).

Concerning logs, it is recommended to send them to an external system to maintain integrity and availability of event information. Configure the [Logging](/server/web-interface/administration/configuration/server-settings/general/logging/) feature in the {{ en.DVLS }} web interface.

![Logging](/img/en/kb/KB2215.png)

## Refresh Token Lifetime

Excessive session duration may allow exposure beyond necessary to unauthorized users. The Refresh token lifetime should therefore be configured within 24 hours (1440 min.). This can be configured in the [Advanced Server Settings](/server/web-interface/administration/configuration/server-settings/general/advanced/) via the {{ en.DVLS }} web interface.

![Refresh Token Lifetime](/img/en/kb/KB2216.png)

## Email Notifications

An email server configuration is required to transmit important application messages such as security events or errors. They can be configured in the web interface. See [Configure an SMTP Email](/kb/devolutions-server/how-to-articles/configure-smtp-server/configure-smtp-email/) or [Configure an SMTP Email With Azure](/kb/devolutions-server/how-to-articles/configure-smtp-server/configure-smtp-email-azure/) for configuration steps and information on each setting.

![Email Configuration](/img/en/kb/KB2217.png)

## {{ en.RDMSCONSOLE }} Password

It is recommended to add another layer of security by enabling and setting a password for the {{ en.RDMSCONSOLE }}. Learn about this password setting and all other console settings in [{{ en.RDMSCONSOLE }}](/server/management/devolutions-server-console/).

![Set Console Password](/img/en/kb/KB2218.png)

## {{ en.DVLS }} Security Dashboard

The [{{ en.DVLS }} Security Dashboard](/kb/devolutions-server/knowledge-base/server-security-dashboard/) is a tool to offer guidance on how to improve the security of the Devolutions Server platform and also tips on reducing the workload for administrators. Some tips are common infosec best practices, others are a consensus between our own teams. It can be accessed at any time in the Devolutions Server web interface, in ***Administration – Security Management – Security Dashboard***.

The scores are admittedly open to question and we do not pretend each topic has the same relative value for all community members. Achieving 100% is surely not an end goal in itself, we simply aim to raise awareness and provide ideas for your own security hardening.

![Security Dashboard](/img/en/kb/KB2210.png)
