---
eleventyComputed:
  title: Upgrade process list
  description: This bullet list describes each steps a support technician will follow to assist a customer to upgrade the {{ en.DVLS }} instance.
---
Please visit the [Upgrading {{ en.DVLS }}](/server/getting-started/installation/upgrade-server/) page for informational steps on the upgrade procedure.

{{ en.DVLS }} upgrades are not overly complicated, but certain steps must be planned carefully. Please [contact our support team](mailto:service@devolutions.net) to book a session where we will help out.

{% snippet, "badgeNotice" %}
{{ en.DVLS }} is used by teams, this means that other users must be taken into account before starting with the upgrade.

Confirm that all minimum requirements are installed and dependencies reach the supported versions according to the [System Requirements](/server/overview/system-requirements/) page.
{% endsnippet %}

This bullet list describes each steps a support technician will follow to assist a customer to upgrade the {{ en.DVLS }} instance.

1. Ensure that the Domain functional level is at least at version Windows Server 2012 R2 if [Domain Authentication](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/) is configured in {{ en.DVLS }}.
1. Confirm for database and web application folder backups. Ensure that the Copy only backup option is enabled in SQL Server Management Studio to get a stand alone backup that is not part from a backup set.
1. Make sure everyone is in offline mode in {{ en.RDM }} if properly configured or disconnected from the {{ en.DVLS }} web interface.
1. Modify the Maximal version in the Administration - System Settings if configured.
1. Confirm to stop the instance with the Go Offline button on the {{ en.DVLSCONSOLE }} If more than one {{ en.DVLS }} instance (High Availability or Load Balancing), switch all instances to Offline mode before the upgrade.
1. For version older than 2020.1.x, check if a Passphrase Security Provider is set on the {{ en.DVLS }} instance. If so, follow the [Remove Security Provider](/server/kb/how-to-articles/remove-security-provider/) steps after the upgrade. This could be completed in another support session or the customer can do it by itself.
1. Confirm for 2FA settings.
1. Confirm for Integrated Security enabled or disabled in Database tab.
    1. If so, confirm that the connected user on the Windows machine has enough permissions to do database upgrades. {type="a"}
1. Make sure that no antivirus is currently running or scanning the web application and {{ en.DVLSCONSOLE }} installation folders.
1. Open the {{ en.DVLSCONSOLE }} and tell the user to upgrade it.
1. Upgrade the {{ en.DVLS }} instance with the Update button on the {{ en.DVLSCONSOLE }}
1. [Install Prerequisites](/server/getting-started/installation/installing-web-server-prerequisites/) for {{ en.DVLS }} if required.
1. Check if {{ en.DVLS }} is back Online in the {{ en.DVLSCONSOLE }}.
1. Test web page login directly on the server or from the customer's computer with the Navigate to Website button on the {{ en.DVLSCONSOLE }}
1. If required, install the latest {{ en.RDM }} version that belongs to the {{ en.DVLS }} version.
1. If required, update the {{ en.PS }} module version that belongs to the {{ en.DVLS }} version.
1. Test connectivity from {{ en.RDM }} to the {{ en.DVLS }} data source.
1. If required, update {{ en.DGW }}.
1. Make sure that the encryption keys will be exported and put in a safe place for security measure. These encryption keys are required for disaster recovery.
    1. [Export the Encryption Keys](/server/kb/how-to-articles/manage-encryption-keys/#export-the-encryption-keys) {type="a"}
1. Ensure that the {{ en.RDM }} and the {{ en.DVLS }} licenses match.
