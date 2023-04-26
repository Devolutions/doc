---
eleventyComputed:
  title: Devolutions Server Security Hardening
  description: Security hardening consists of implementing various security measures to protect against cyber threats and ensure the confidentiality, integrity, and availability of the system.
  keywords:
  - security hardening
  - deployment
---
Security hardening consists of implementing various security measures to protect against cyber threats and ensure the confidentiality, integrity, and availability of the system. The various Online Help and Knowledge Base topics below are organized in a logical order that you can follow before, during, and after configuring and deploying Devolutions Server. They contain useful information, best practices, and steps to follow to ensure that your Devolutions Server is as secure as possible.

The current topic is mostly based on the ***Security Dashboard***. See [{{ en.DVLS }} Security Dashboard](/kb/devolutions-server/knowledge-base/server-security-dashboard/) for a list of action items including short descriptions and mitigation measures.

## System Requirements and Topologies

The minimum recommended hardware and software specifications for Devolutions Server may vary depending on your intended use. Visit [System Requirements](/server/overview/system-requirements/) to learn what is required for your situation.

Devolutions Server instances can be installed through different topologies. Determine which one is more adapted to your needs in [Topologies](/server/overview/topologies/). Make sure the <a href="#ports-and-secure-communication">required ports</a> are available.

## Administration Accounts Settings

Prior to deployment of a DVLS instance, some accounts are needed to operate the various services involved in a secure deployment of DVLS.

The administrator count should be no more than 5. Limiting the number of active administrators within the platform will reduce the attack surface of an attacker to only those accounts configured. Having more than 5 administrators can also be a sign of poor segregation of duty within the business unit or organization.

Database accounts should be different for web application, scheduler, and management tools. Minimum privileges should be granted and applied for service and database accounts to operate. Shared and excessively privileged service and database accounts may induce unnecessary security risk exposure.

The default MSSQL “sa” administrative account is a high privilege account that should only be used to manage the database instance. A less privileged user or service account is preferred to reduce impact of compromise.

The first decision is to use either domain accounts for operating the platform or to use local SQL accounts paired with local service accounts. Since this decision is a matter of personal preference, we support both models. See each one of them and what they entail in [Pre-Deployment Account Survey](/kb/devolutions-server/knowledge-base/pre-deployment-account-survey/) and learn how to configure them in [Advanced Credentials](/server/management/devolutions-server-console/devolutions-server-settings/database/advanced-credentials/).

In order for integrated security to be used to connect to the database, you must set the ***Application Pool*** to use a domain account to run under. Follow the steps in [Configure {{ en.DVLS }} to Use Integrated Security](/kb/devolutions-server/how-to-articles/configure-server-use-integrated-security/).

## Ports and Secure Communication

While Devolutions Server in itself does not dictate which ports to use for any of the resources that it accesses, we still recommend the network segregation security practice. You must consult with your system administrator to ascertain which adjustments need to be made in order for the system to inter-operate with your infrastructure. See [Ports and Firewalls](/kb/devolutions-server/knowledge-base/ports-firewalls/).

Secure communications guarantee the integrity and confidentiality of the data transmitted between the client and the server. As such, it is important to secure LDAP communications with the [LDAP Over SSL](/server/getting-started/security-checklist/ldap-over-ssl/) (LADPS) method. See [Domains](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/) to learn how to enable it.

After you have configured the Devolutions Server instance and connected through a client application, you can follow the steps in [Configure SSL](/kb/devolutions-server/how-to-articles/configure-ssl/) to import a certificate or create a self-sign certificate, create a SSL binding, enable HTTPS, and configure SSL settings in the client applications. Performing these steps right from the start may add a layer of complexity that may prevent you from succeeding in the initial configuration.

## Access URI

If you are upgrading your Devolutions Server from a version prior to 2022.1 to 2022.2 or later, follow the steps in [Access URI](/kb/devolutions-server/knowledge-base/access-uri/). During the upgrade process or the installation process of Devolutions Server, we must provide an Access URI. This URI is a redirect URL that is used by the OAuth system and redirects the authentication traffic to the Access URI.

## Encryption



## Backup and Log Management



## Refresh Token Lifetime



## Email Notifications



## {{ en.RDMSCONSOLE }} Password



## {{ en.DVLS }} Security Dashboard


