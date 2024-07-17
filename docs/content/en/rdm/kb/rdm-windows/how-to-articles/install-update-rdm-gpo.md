---
eleventyComputed:
  title: Deploy or update {{ en.RDM }} through GPO
  description: This guide will walk you through the process of deploying {{ en.RDM }} using Group Policy Object (GPO).
---
This guide will walk you through the process of deploying and updating {{ en.RDM }} using Group Policy Object (GPO).

## Prerequisites

* Active Directory (AD) environment with ***Group Policy Management***.
* Administrative access to the domain controller.
* [{{ en.RDM }} MSI installer file](https://devolutions.net/remote-desktop-manager/home/download/). Ensure you have the latest version if you're updating.

### Move the installer to a shared folder

1. Create a shared folder on a network location accessible to all target computers.
1. Configure the folder to have read permissions for all users who will be installing {{ en.RDM }}.
1. Copy the [{{ en.RDM }} MSI installer file](https://devolutions.net/remote-desktop-manager/home/download/) to the shared folder.
.
### Create a new group policy object

1. On your Domain Controller, open the ***Group Policy Management Console (GPMC)***.
1. Right-click on the organizational unit (OU) where you want to deploy {{ en.RDM }} and select ***Create a GPO in this domain, and Link it here...***.
1. Give your new GPO a descriptive name, such as ***{{ en.RDM }} Deployment***.

### Configure the GPO for software installation

1. Right-click your newly created GPO and select ***Edit***.
1. In the ***Group Policy Management Editor***, go to ***Computer Configuration – Policies – Software Settings – Software installation***.
1. Right-click on ***Software installation***, select ***New***, and then ***Package***.
1. In the ***Open*** dialog box, browse to the shared folder containing the [{{ en.RDM }} MSI installer file](https://devolutions.net/remote-desktop-manager/home/download/), select it, and click ***Open***.
1. Select ***Advanced***.
1. Click ***OK***.
1. Click the ***Upgrade tab***, and make sure you see {{ en.RDM }} which should be there by default.
1. Select ***OK***.

If you have previously updated {{ en.RDM }}:

1. Verify that all prior packages are included in the list.
1. When adding each package, confirm that the ***Package can upgrade over the existing package*** option is selected.
1. Click ***OK*** to close the ***package’s Properties dialog box***.

### Apply the GPO to target computers
Make sure the GPO is linked to the correct OU containing the computers where {{ en.RDM }} should be installed. {{ en.RDM }} will be installed the next time the computers restart.

### Verify the installation
Once the computers have restarted, check a few machines to confirm that {{ en.RDM }} has been installed successfully. You can also use the ***Event Viewer*** to check for any installation errors.

### Troubleshooting
If you encounter any issues during the deployment, refer to the following troubleshooting steps:

* Check that the shared folder and the [{{ en.RDM }} MSI installer file](https://devolutions.net/remote-desktop-manager/home/download/) have the correct permissions.
* Verify that the GPO is linked to the correct OU.
* Check the Event Viewer logs on the client machines for any errors related to the {{ en.RDM }} installation.