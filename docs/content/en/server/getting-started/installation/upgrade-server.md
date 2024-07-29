---
eleventyComputed:
  title: Upgrading {{ en.DVLS }}
  description: Install the proper version of {{ en.DVLSCONSOLE }} before upgrading the {{ en.DVLS }} web application.
  order: 50
---
Install the proper version of {{ en.DVLSCONSOLE }} before upgrading the {{ en.DVLS }} web application. It is available on our [download page](https://devolutions.net/server/home/download/).

The following steps are intended to be achieved on a single server or a basic [topology](/server/overview/topologies/). If your environment differs from these topologies, please [contact us](mailto:service@devolutions.net) and we will guide you with your {{ en.DVLS }} upgrade.

## Workflow
The following is a list of recommendations and steps to follow before proceeding with the upgrade:
* We highly recommend to test the upgrade process in a [staging/test environment](/server/kb/how-to-articles/create-server-staging-instance/) before upgrading your production instance. If you do not have a staging instance, we recommend a limited roll-out to ensure the workflow is supported to your satisfaction prior to impacting your whole team.
* The upgrade steps will be performed with the {{ en.DVLSCONSOLE }}. You will need to upgrade your copy to the latest version that is matched with the target version of {{ en.DVLS }} that you are preparing to install. Please follow the steps carefully.
* If you have elected to use Integrated Security for connecting to the database, you must perform the upgrade using a Windows user account that has full rights on the database. Ensure that the IIS Application Pool Identity and Scheduler accounts have enough privileges on the database. After an upgrading to a new version, new permissions are possibly required. Please contact us about the new permissions list.
* If you have set the [security provider](/server/kb/how-to-articles/remove-security-provider/) on your current {{ en.DVLS }} (2019.2.9.0 or earlier), specific operations will need to be done before the upgrade. Please [contact us](mailto:service@devolutions.net) for further details.
* We recommend doing a backup of the Encryption Keys before any operation that could modify the information of the database or before the upgrade of {{ en.DVLS }}. Protect the Encryption Key file in a safe to avoid data loss if {{ en.DVLS }} has to be restored.

### Preparation phase

* Ensure that the instance users have the offline mode enabled and that they all perform a full refresh of the cache (<kbd>Ctrl</kbd>+<kbd>F5</kbd>).
* Have your team switch to the offline mode in {{ en.RDM }}, allowing them to work while the system is down.
* Update the maximal version of {{ en.RDM }} in ***Administration – System settings – Version management – Maximal version***, if this option was set before the upgrade.
* If an antivirus is deployed on the server, include an exception in its configuration for:
    * The {{ en.DVLSCONSOLE }} installation folder: **C:\Program Files (x86)\Devolutions\Devolutions Server Console**.
    * The {{ en.DVLS }} web application folder.

### Phase 1

* Perform a full backup of the database, take precautions against that backup file being deleted by a maintenance plan.
* Archive the content of the web application folder containing the {{ en.DVLS }} instance, move to a safe place.
* Install the proper version of {{ en.DVLSCONSOLE }}. In each of the sub-topics related to a specific version of {{ en.DVLS }}, you will find the version of the client that you need.
* Run the {{ en.DVLSCONSOLE }} with elevated privileges.

### Phase 2

1. Open the [{{ en.DVLSCONSOLE }}](/server/management/devolutions-server-console/).
1. Select the instance that you wish to upgrade.
1. Set the instance in ***Offline mode*** with the ***Go offline*** button. On a High Availability/Load Balancing topology, all instances must be set to ***Offline mode*** before starting the upgrade process.
![Server – Go offline](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2004_2024_1.png)
1. Click ***Update***.
![{{ en.DVLSCONSOLE }}](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2000_2024_1.png)
1. Select the upgrade source. You can either use the latest latest or stable release that is available online or specify the path to a ZIP file that you have downloaded yourself. Use this for beta releases or for earlier versions.
![Update source file](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2001_2024_1.png)
1. Click ***Next***.
   {% snippet, "badgeWarning" %}
   If you upgrade from version 2021.2.14 or older to version 2022.1 or higher, you will have to provide the [access URI](/server/kb/knowledge-base/access-uri/) to reach the {{ en.DVLS }} web page.
   {% endsnippet %}
1. Review the summary and click ***Update*** if you are satisfied.
![Summary](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2002_2024_1.png)

The process will now begin. After completion, a message will appear to inform you that the operation was successful.
![Operation successful](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2003_2024_1.png)

### Final phase

{% snippet, "shieldNotice" %}
* The ***Backup folder*** contains information about the configuration of the {{ en.DVLS }} instance prior to the upgrade. After a successful upgrade, you must ensure the content is either moved to a safe place or deleted.
* Our support department gets more and more urgent requests for assistance because of rogue administrators upgrading their own copy of {{ en.RDM }} and introducing a schema update for new feature. This may prevent other users from using the system. We strongly recommend setting both the maximal and minimal versions allowed to connect to your instance.
* If you have elected to use the Integrated Security for connecting to the database in the [database](/server/management/devolutions-server-console/devolutions-server-settings/database/) tab, ensure that the IIS Application Pool Identity and Scheduler accounts have enough privileges on the database.
{% endsnippet %}

* Have a user upgrade his workstation with the version of {{ en.RDM }} supported by the {{ en.DVLS }} version and test connectivity with the server instance.
* Have computers running PowerShell scripts to update the {{ en.PS }} module version supported by the {{ en.DVLS }} version and test the script results.
* When you are satisfied with your tests, have the rest of the staff upgrade to the same version of {{ en.RDM }}.
* Update the maximal/minimal version of {{ en.RDM }} in ***Administration – System settings – Version management***.
