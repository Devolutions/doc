---
eleventyComputed:
  title: Security
  description: "{{ en.RDM }} enforces two successive authentication steps to grant access to the data source. Multi-factor authentication is integrated directly in the software and credentials are brokered on behalf of the user when launching a connection, preventing the user from ever knowing the credentials."
---
Central to {{ en.RDM }} is security. Sensitive fields, such as passwords, are always encrypted regardless of the [data source](/rdm/windows/concepts/basic-concepts/data-sources/) used. With Microsoft SQL Server (and Azure SQL Server) data sources, add a [Security Providers](/rdm/windows/commands/administration/settings/security-providers/) to ensure configuration data is unreadable even on direct access database access.

Further, protect direct {{ en.RDM }} access through an [application password](/rdm/kb/rdm-windows/knowledge-base/rdm-security-dashboard/#configuration-files-should-be-encrypted-using-an-application-password) (further encrypting configuration files) and add [multi-factor authentication](/rdm/kb/rdm-windows/how-to-articles/enable-2fa-users-sql-server/) (MFA) to protect against unauthorized access. Available for Advanced Data Sources, use roles, groups, and [permissions with role-based access control](/rdm/windows/concepts/advanced-concepts/permissions-rbac-roles/) (RBAC) to properly lock entries, folders, and vaults to only those who need access.

{{ en.RDM }} seamlessly integrates with [{{ en.DVLS }}](/server/getting-started/), providing advanced [reporting & auditing](/rdm/windows/concepts/advanced-concepts/logs-reports-audits/) with intuitive web-based access. Taking the burden off teams is {{ en.RDM }}s [{{ en.DHUB }}](/hub/getting-started/create-hub/) integration, a cloud-based secure password manager for teams.

### Related topics
* [{{ en.RDM }} Security Dashboard](/rdm/kb/rdm-windows/knowledge-base/rdm-security-dashboard/)
* [Change Master Key](/rdm/windows/commands/file/change-master-key/)
* [{{ en.DSEND }}](/rdm/kb/general-knowledge/devolutions-send-standalone/)
* [Security Providers](/rdm/windows/commands/administration/settings/security-providers/)
* [User Groups](/rdm/windows/commands/administration/management/user-management/#user-groups)
* [Yubikey](/rdm/windows/data-sources/multi-factor-authentication/yubikey/)

### See also
* [Security](/rdm/windows/commands/file/options/security/)
* [Security Settings](/rdm/commands/administration/settings/system-settings/vault-management/security/)
