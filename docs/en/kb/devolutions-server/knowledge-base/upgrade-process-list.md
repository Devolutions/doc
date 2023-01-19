---
title: Upgrade Process Bullet List
---
# {{ en.TOPICTITLE }}
## Upgrading an instance of {{ en.DPS }}
Please visit the [Upgrading {{ en.DPS }}](https://helpserver.devolutions.net/upgrade_rdms.htm) page for informational steps of the upgrade procedure.

{{ en.DPS }} upgrades are not overly complicated, but certain steps must be planned carefully.
Please contact us at [service@devolutions.net](mailto:service@devolutions.net) to book a session where we&apos;ll help out.  
{% snippet icon.shieldWarning %}
{{ en.DPS }} is used by teams, this means that other users must be taken into account before starting with the upgrade.
{% endsnippet %}  

## STEPS  
{% snippet icon.badgeNotice %}
Confirm that all minimum requirements are installed and dependencies reach the supported versions according to the [System Requirements](https://helpserver.devolutions.net/system_requirements.html) page.
{% endsnippet %}  

The following bullet list describe each steps a support technician will follow to assist a customer to upgrade the {{ en.DPS }} instance.
1. Ensure that the Domain functional level is at least at version Windows Server 2012R2.
1. Confirm for database and web application folder backups. Ensure that the Copy only backup option is enabled in SQL Server Management Studio to get a stand alone backup that is not part from a backup set.
1. Make sure everyone is in offline mode in {{ en.RDM }} if properly configured or disconnected from the {{ en.DPS }} web interface.
1. Modify the Maximal version in the Administration - System Settings if configured.
1. Confirm to stop the instance with the Go Offline button on the {{ en.DVLSCONSOLE }} If more than one {{ en.DPS }} instance (High Availability or Load Balancing), switch all instances to Offline mode before the upgrade.
1. For version older than 2020.1.x, check if a Passphrase Security Provider is set on the {{ en.DPS }} instance. If so, remove the security provider before the upgrade and then set the new Encryption at REST after the upgrade. A database backup following each steps will avoid going back at the beginning of the process if something wrong happens.
1. Confirm for 2FA settings.
1. Confirm for Integrated Security enabled or disabled in Database tab.
    * If so, confirm that the connected user on the Windows machine has enough permissions to do database upgrades. To be sure, look in the Application pool identity.
    * After the upgrade, verify that the application pool identity has the proper permissions on the tables. You may have to provide the proper SQL statement.
1. Make sure that no antivirus is currently running or scanning the web application and {{ en.DVLSCONSOLE }} installation folders.
1. Open the {{ en.DVLSCONSOLE }} and tell the user to upgrade through the console.
1. [Install Prerequisites](https://helpserver.devolutions.net/install_webroles.html) for {{ en.DPS }} if required.
1. Upgrade the {{ en.DPS }} instance with the Update button on the {{ en.DVLSCONSOLE }}
1. Check if {{ en.DPS }} is back Online in the console.
1. If the Integrated Security option is enabled, check the new database permissions and update them if required.
1. Test web page login directly on the server with the Navigate to Website button on the {{ en.DVLSCONSOLE }}
1. Reset the [{{ en.DPS }} cache](https://helpserver.devolutions.net/webinterface_resetcache.html) and/or IIS reset.
1. If required, install the latest {{ en.RDM }} version that belongs to the {{ en.DPS }} version.
1. Test connectivity from {{ en.RDM }} to the {{ en.DPS }} data source.
1. Make sure that the encryption keys will be exported and put in a safe place for security measure. These encryption keys are required for disaster recovery
