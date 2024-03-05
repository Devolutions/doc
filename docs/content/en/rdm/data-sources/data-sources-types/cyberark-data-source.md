---
eleventyComputed:
  title: Cyberark (Preview)
  description: Access your CyberArk server directly, without the need for an SQL or a {{ en.DVLS}} data source to host the CyberArk Dashboard session.
---

{{ en.RDM}} 2024.1 introduces the CyberArk data source (preview) which makes it possible to connect directly to your CyberArk and launch your sessions with ease, without the added complexity of a {{ en.DVLS}} or SQL Server data source.

## Prerequisites

* {{ en.RDM}} version 2024.1 or greater.
* CyberArk Version 14 or greater.

## Initial Configuration

1. Open {{ en.RDM }}.
1. Navigate to ***File – Data Sources – Add a New Data Source***.
1. Select ***CyberArk (Preview)***. 
1. Enter the information.

![CyberArk window configuration](https://cdnweb.devolutions.net/docs/en/kb/KB6224.png)

## First connection

On the first connection to CyberArk, {{ en.RDM }} will:

* Import a Platform called ***Devolutions Remote Desktop Manager*** (PlatformID: ***DevolutionsRDM***)

* Create a Safe (***RDM_Settings***)

* Create an account (***DataSourceSettings***)

{% snippet icon.badgeInfo %}
Note: This assumes you have the rights to perform the steps above.
{% endsnippet %}

You will then be prompted to enter a ***CyberArk Integration Module license***. To request a trial license, [click here](mailto:sales@devolutions.net?subject=Remote%20Desktop%20Manager%20Module%20CyberArk%20-%20CyberArk%20-%20Trial).

In CyberArk, you must manually grant read access to ***safe RDM_Settings*** to everyone in the organization that you want to allow using the {{ en.RDM }} CyberArk data source.

* Read/write access must be granted to those users who will be administrators in {{ en.RDM }}.

## Administrator 

***Administrators*** are defined as users that have ***Add Safe*** privileges. Admin users in {{ en.RDM }} can, respecting CyberArk permissions:

* Edit the System Settings

* Add/Delete licenses

* Launch the CyberArk website

## Troubleshooting 

[Click here](/kb/remote-desktop-manager/troubleshooting-articles/cyberark-data-source-issues/) for troubleshooting steps regarding CyberArk data source issues, or contact our [support team](mailto:service@devolutions.net).


