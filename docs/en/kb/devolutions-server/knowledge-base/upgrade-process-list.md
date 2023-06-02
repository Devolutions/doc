---
title: Upgrade Process Bullet List
---

## Upgrading an instance of {{ en.DVLS }}

Please visit the [Upgrading {{ en.DVLS }}](/server/installation/upgrade-server/) page for informational steps of the upgrade procedure.

{{ en.DVLS }} upgrades are not overly complicated, but certain steps must be planned carefully.

Please contact us at [service@devolutions.net](mailto:service@devolutions.net) to book a session where we'll help out.

{% snippet icon.shieldWarning %}
{{ en.DVLS }} is used by teams, this means that other users must be taken into account before starting with the upgrade.
{% endsnippet %}

## STEPS

{% snippet icon.badgeNotice %}
Confirm that all minimum requirements are installed and dependencies reach the supported versions according to the [System Requirements](/server/overview/system-requirements/) page.
{% endsnippet %}

The following bullet list describe each steps a support technician will follow to assist a customer to upgrade the {{ en.DVLS }} instance.

1. Ensure that the Domain functional level is at least at version Windows Server 2012R2.
1. Confirm for database and web application folder backups. Ensure that the Copy only backup option is enabled in SQL Server Management Studio to get a stand alone backup that is not part from a backup set.
1. Make sure everyone is in offline mode in {{ en.RDM }} if properly configured or disconnected from the {{ en.DVLS }} web interface.
1. Modify the Maximal version in the Administration - System Settings if configured.
1. Confirm to stop the instance with the Go Offline button on the {{ en.DVLSCONSOLE }} If more than one {{ en.DVLS }} instance (High Availability or Load Balancing), switch all instances to Offline mode before the upgrade.
1. For version older than 2020.1.x, check if a Passphrase Security Provider is set on the {{ en.DVLS }} instance. If so, remove the security provider before the upgrade and then set the new Encryption at REST after the upgrade. A database backup following each steps will avoid going back at the beginning of the process if something wrong happens.
1. Confirm for 2FA settings.
1. Confirm for Integrated Security enabled or disabled in Database tab.
   1. If so, confirm that the connected user on the Windows machine has enough permissions to do database upgrades. To be sure, look in the Application pool identity.
   1. After the upgrade, verify that the application pool identity has the proper permissions on the tables. You may have to provide the proper SQL statement.
   {type="a"}
1. Make sure that no antivirus is currently running or scanning the web application and {{ en.DVLSCONSOLE }} installation folders.
1. Open the {{ en.DVLSCONSOLE }} and tell the user to upgrade through the console.
1. [Install Prerequisites](/server/installation/installing-web-server-prerequisites/) for {{ en.DVLS }} if required.
1. Upgrade the {{ en.DVLS }} instance with the Update button on the {{ en.DVLSCONSOLE }}
1. Check if {{ en.DVLS }} is back Online in the console.
1. If the Integrated Security option is enabled, check the new database permissions and update them if required.
1. Test web page login directly on the server with the Navigate to Website button on the {{ en.DVLSCONSOLE }}
1. Reset the [{{ en.DVLS }} cache](/server/web-interface/administration/security-management/reset-server-cache/) and/or IIS reset.
1. If required, install the latest {{ en.RDM }} version that belongs to the {{ en.DVLS }} version.
1. Test connectivity from {{ en.RDM }} to the {{ en.DVLS }} data source.
1. If required, update {{ en.DGW }}.
1. Make sure that the encryption keys will be exported and put in a safe place for security measure. These encryption keys are required for disaster recovery
1. Ensure that the {{ en.RDM }} and the {{ en.DVLS }} licenses match.
