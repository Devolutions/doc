---
title: Upgrade process issues
---
Following an upgrade of {{ en.DVLS }}, it triggers error messages like SQLException - Invalid column name in the logs or Error: cannot read property 'children' of null error message on the {{ en.DVLS }} web interface.

The reason of these errors are related to an SQL database or web application files that have not been properly updated because the upgrade of the {{ en.DVLS }} web application has been made with an older {{ en.DVLSCONSOLE }}.

## Solution

First, verify that the {{ en.DVLSCONSOLE }} corresponds to the version of the {{ en.DVLS }} web application.  
![{{ en.DVLSCONSOLE }}](https://webdevolutions.azureedge.net/docs/en/kb/KB8004.png) 

If the {{ en.DVLSCONSOLE }} version is older than the web application version, please go on the {{ en.DVLS }} [download page](https://server.devolutions.net/home/download) to download the right {{ en.DVLSCONSOLE }} version and install it.

Then, install again the {{ en.DVLS }} web application over the current installation with the Upgrade Server button in the Actions pane. This will properly install all required files and update the SQL database to the appropriate version.

{% snippet icon.badgeNotice %}
We strongly recommend following the instructions in [Upgrading {{ en.DVLS }}](/server/installation/upgrade-server/) to perform the upgrade.
{% endsnippet %}

{% snippet icon.badgeNotice %}
We offer free remote session to assist you during the upgrade process of your {{ en.DVLS }} instance. If you would like to book a session, please send an email to [service@devolutions.net](mailto:service@devolutions.net) and we will send you a link to our online reservation system.
{% endsnippet %}
