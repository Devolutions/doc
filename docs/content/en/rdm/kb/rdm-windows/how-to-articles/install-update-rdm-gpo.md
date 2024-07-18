---
eleventyComputed:
  title: Deploy or update {{ en.RDM }} through GPO
  description: This guide will walk you through the process of deploying {{ en.RDM }} using Group Policy Object (GPO).
---
This guide will walk you through the process of deploying and updating {{ en.RDM }} with Active Directory (AD) using Group Policy Object (GPO). To learn how to manage GPO in the Local Group Policy Editor, click [here](/rdm/kb/rdm-windows/how-to-articles/group-policies/#list-remote-desktop-manager-gpos-in-the-local-group-policy-editor).

## Prerequisites

* Active Directory (AD) environment with ***Group Policy Management***.
* Administrative access to the domain controller.
* [{{ en.RDM }} MSI installer file](https://devolutions.net/remote-desktop-manager/home/download/). Ensure you have the latest version if you're updating.

## Deploying Remote Desktop Manager

### Move the installer to a shared folder

1. Create a shared folder on a network location accessible to all target computers.
1. Configure the folder to have read permissions for all users who will be installing {{ en.RDM }}.
1. Copy the [{{ en.RDM }} MSI installer file](https://devolutions.net/remote-desktop-manager/home/download/) to the shared folder.

### Create a new group policy object

1. On your Domain Controller, open the ***Group Policy Management Console (GPMC)***.
1. Right-click on the organizational unit (OU) where you want to deploy {{ en.RDM }} and select ***Create a GPO in this domain, and Link it here...***.
1. Give your new GPO a descriptive name, such as ***{{ en.RDM }} Deployment***.

### Configure the GPO for software installation

1. Right-click your newly created GPO and select ***Edit***.
1. In the ***Group Policy Management Editor***, go to ***Computer Configuration – Policies – Software Settings – Software installation***.
1. Right-click on ***Software installation***, select ***New***, and then ***Package***.
1. In the ***Open*** dialog box, browse to the shared folder containing the [{{ en.RDM }} MSI installer file](https://devolutions.net/remote-desktop-manager/home/download/), select it, and click ***Open***.
1. Choose the ***Assigned*** deployment method and click ***OK***.

The configuration of the GPO is complete. Once the deployment of the GPO in the domain is done, {{ en.RDM }} will be automatically installed after each computer is restarted.

## Updating {{ en.RDM }}

Updating an existing installation of {{ en.RDM }} follows a similar process with a few additional considerations:

1. Verify that all previously deployed versions of {{ en.RDM }} are listed in the GPO.
1. As with the initial deployment, add the new MSI package to the shared network folder. 
1. Under ***Software installation***, right-click on the previous version of {{ en.RDM }}, and select ***All Tasks***, 
1. Click ***Upgrade***.
1. Choose the new MSI package and configure it to upgrade the existing installation.
1. Make sure the ***Package can upgrade over the existing package*** option is selected. This will allow for an easy transition from the old version to the new.

{% snippet, "badgeInfo" %}
If you have previously updated {{ en.RDM }}:
1. Verify that all prior packages are included in the list.
1. When adding each package, confirm that the ***Package can upgrade over the existing package*** option is selected.
1. Click ***OK*** to close the ***package’s Properties dialog box***.
{% endsnippet %}

### Troubleshooting
If you encounter any issues during the deployment, refer to the following troubleshooting steps:

* Check that the shared folder and the [{{ en.RDM }} MSI installer file](https://devolutions.net/remote-desktop-manager/home/download/) have the correct permissions.
* Verify that the GPO is linked to the correct OU.
* Check the ***Event Viewer logs*** on the client machines for any errors related to the {{ en.RDM }} installation and update.