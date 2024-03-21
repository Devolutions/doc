---
eleventyComputed:
  title: Cyberark (Preview)
  description: Access your CyberArk server directly, without the need for an SQL or a {{ en.DVLS}} data source to host the CyberArk Dashboard session.
---

{{ en.RDM}} 2024.1 introduces the CyberArk data source (preview) which makes it possible to connect directly to your CyberArk and launch your sessions with ease, without the added complexity of a {{ en.DVLS}} or SQL Server data source.

## Prerequisites

* {{ en.RDM}} team edition, version 2024.1 or greater.
* CyberArk Version 14 or greater.
* An {{ en.RDM}} CyberArk Integration license.

## Adding a new CyberArk data source

1. Navigate to ***File – Data Sources – Add New Data Source***.
1. Select ***CyberArk (Preview)*** from the Enterprise section.
![Selecting the CyberArk (Preview) data source](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMW6001_2024_1.png)
1. Next, enter your CyberArk connection details.
![CyberArk window configuration](https://cdnweb.devolutions.net/docs/en/kb/KB6224.png)

* ***Name***: A unique name for the data source.

* ***Web services URL***: Your CyberArk PVWA host URL.

* ***Virtual directory***: Blank by default.

* ***Version***: Default (V12).

* ***Authentication Mode***: Choose the method by which to authenticate: ***CyberArk, Windows, LDAP, SAML, or Radius***.

* ***Authentication Credentials***: This may be ***Custom*** (if you choose ***SAML*** as the authentication mode, credentials are not available) where you will enter a ***Username and Password***, or ***My Account Settings PVWA***.

4. Once connected, click on a host or account to see all linked entries and connect as needed.

![Viewing available machines and accounts](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMW6002_2024_1.png)

### First connection

On the first connection to CyberArk, {{ en.RDM }} will:

* Import a Platform called ***Devolutions Remote Desktop Manager*** (PlatformID: ***DevolutionsRDM***)

* Create a Safe (***RDM_Settings***)

* Create an account (***DataSourceSettings***)

{% snippet icon.badgeInfo %}
Note: This assumes you have the rights to perform the steps above.
{% endsnippet %}

You will then be prompted to enter a ***CyberArk Integration Module license***. To request a trial license, [click here](mailto:sales@devolutions.net?subject=Remote%20Desktop%20Manager%20Module%20CyberArk%20-%20CyberArk%20-%20Trial).

### User

In CyberArk, you must manually grant read access to ***RDM_Settings*** safe to everyone in the organization that you want to allow using the {{ en.RDM }} CyberArk data source.

### Administrator 

***Administrators*** are defined as users that have ***Add Safe*** privileges. Admin users in {{ en.RDM }} can, respecting CyberArk permissions:

* Edit the {{ en.RDM}} data source System Settings

* Add/Delete CyberArk integration licenses

* Launch CyberArk PVWA directly

## Using the CyberArk data source

Now that you have your CyberArk data source configured and authenticated, you can now connect to hosts quickly and easily. There are two ways to connect to a host, starting from an account and selecting the host or from a host and selecting the account. With this flexibility, choose the most efficient starting point for you.

### Starting from an account

From an account, you have several options. In addition to the connecting actions, you may choose to edit the ***Properties*** (admin account required) which directly opens the ***Account properties page*** from the CyberArk PVWA. You may also choose to create a ***New Entry*** (admin account required) in the  {{ en.RDM }} CyberArk data source which directly opens the ***New Account*** page from the CyberArk PVWA. Finally, basic account details are shown in the ***Overview*** pane.

![Viewing an account](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMW6003_2024_1.png)

There are three ways to connect to a host from an account view.

1. In the ***Overview – Machines view***, double-click on a ***Machine*** to connect to. This list is populated from the ***Suggested Remote Machines*** listed in the ***CyberArk PVWA Accounts – Accounts View – (account) – Details screen***.

1. Click the ***Connect*** button to display a list of machines to connect to. Depending on your CyberArk account settings you are shown either of the following windows. The first option displays if you do not have the ***Limit access to these machines only*** option enabled within the ***Account – Account Properties*** screen within the CyberArk PVWA. If you have this option enabled, then the second window displays as a drop-down with the list populated from the ***Suggested Remote Machines*** on the ***Account Properties*** page.

You are shown two panes, a ***Host field*** to pick or manually enter the host, or an {{ en.RDM}} {{ en.VLT}} view of all available hosts to choose from.
![Selecting a host](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMW6004_2024_1.png)

With the ***Limit access to these machines only*** option checked in CyberArk PVWA for an account, show only the allowed hosts to connect to.

![Selecting only an allowed host](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMW6005_2024_1.png)

3. Click the Connect to ***Host*** button to display a list of machines to connect to. This option bypasses PSM (not recommended), and is only shown if the ***System Settings – General – Allow to connect to host*** option is checked. The shown windows reflect the same as in the ***Connect action***, only bypassing PSM.

### Starting from a machine

Like an account, you can connect to a host through the connect actions, but here you can only create a ***New Entry*** (admin account required) in the {{ en.RDM}} CyberArk data source which directly opens the New Account page from the CyberArk PVWA

![Viewing a machine](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMW6006_2024_1.png)

Similar to an account, there are three ways to connect to a host from the machine view.

1. In the ***Overview view***, double-click on an ***Account*** to connect to a host with. This list is populated by filtering all accounts shown in the {{ en.RDM}} CyberArk data source by their ***Suggested Remote Machines*** to create the list of available accounts.
1. Click the ***Connect*** button to display a list of accounts to connect as. The ***Account*** drop-down reflects the same list as shown in the ***Overview***, while you may use the  {{ en.RDM}} CyberArk data source {{ en.VLT}} view to connect as a different account.
![Selecting an account](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMW6007_2024_1.png)
1. Click the ***Connect to Host*** button to display a list of accounts to connect as. This option bypasses PSM (not recommended), and is only shown if the ***System Settings – General – Allow to connect to host*** option is checked. The shown windows reflect the same as in the ***Connect*** action, only bypassing PSM.

## Data Source Settings

If you have connected using an Administrator account to your CyberArk data source, on the {{ en.RDM}} Administration tab, you are shown three additional options: ***Licenses, System Settings***, and a direct ***CyberArk PVWA button***.

![Viewing the Administration tab](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMW6008_2024_1.png)

## Licenses

Here, you have the option to add, edit, or remove a CyberArk Integration license which is required for a CyberArk data source in {{ en.RDM}} free or team edition.

{% snippet icon.badgeInfo %}
This license is stored within the ***CyberArk safe (RDM_Settings)*** created from the data source initialization step.
{% endsnippet %}

![Viewing the licenses](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMW6009_2024_1.png)

## System Settings

If you open the ***System Settings***, you are shown three different sections, ***General, PVWA***, and ***System Message***. Since the CyberArk data source is a specialized data source, many traditional RDM data source options are not available.

![Viewing the {{ en.RDM}} System Settings](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMW6010_2024_1.png)

## General Page

| Setting                  | Description |
|--------------------------|-------------|
| Auto refresh             | Periodically refresh the data in the display. |
| Open sessions externally | Launch an external window instead of the default embedded view. |
| Allow connect to host    | Should the Connect to Host button be displayed, which is a direct connection to a host, bypassing CyberArk PSM (not recommended). |
| Ask for reason           | Should a prompt be shown to ask for a reason on each connection. |
| Ask for ticket number    | Should a prompt be shown to ask for a ticket number on each connection. |
| Ticketing system         | The URL link to a ticketing system. |
| Username format          | The username format used to authenticate to hosts. |
| Domain search method     | Specify where to locate a user domain to authenticate to hosts. |
| Domain field             | If field is chosen for the domain search method, what field to look for the users domain information. |

## PVWA Page

| Setting                      | Description |
|------------------------------|-------------|
| Allow direct connection (PVWA) | This option controls whether to show the Connect action. |
| Override RDP Settings       | Force an override of specific RDP settings for hosts across the entire data source. |

## System Message
Here, set a message to be displayed on open of the {{ en.RDM}} CyberArk data source or whenever the message is changed.

![Viewing the System Message](https://cdnweb.devolutions.net/docs/en/rdm/windows/RDMW6011_2024_1.png)

## Troubleshooting 

[Click here](/kb/remote-desktop-manager/troubleshooting-articles/cyberark-data-source-issues/) for troubleshooting steps regarding CyberArk data source issues, or contact our [support team](mailto:service@devolutions.net).


