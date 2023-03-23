---
title: Upgrade Process Issue
---
Following an upgrade of {{ en.DPS }}, it triggers error messages like SQLException - Invalid column name in the logs or Error: cannot read property 'children' of null error message on the {{ en.DPS }} web interface.

The reason of these errors are related to an SQL database or web application files that have not been properly updated because the upgrade of the {{ en.DPS }} web application has been made with an older {{ en.DPS }} Console.

## Solution

First, verify that the {{ en.DPS }} Console corresponds to the version of the {{ en.DPS }} web application.  
![Devolutions Server Console](/img/en/kb/KB8004.png) 

If the console version is older than the web application version, please go on the {{ en.DPS }} [download page](https://server.devolutions.net/home/download) to download the right console version and install it.

Then, install again the {{ en.DPS }} web application over the current installation with the Upgrade Server button in the Actions pane. This will properly install all required files and update the SQL database to the appropriate version.

{% snippet icon.badgeNotice %}
We strongly recommend following the instructions on this online help page to perform the upgrade [Upgrading {{ en.DPS }}](/server/installation/upgrade-server/)
{% endsnippet %}

{% snippet icon.badgeNotice %}
We offer free remote session to assist you during the upgrade process of your {{ en.DPS }} instance. If you would like to book a session, please send an email to [service@devolutions.net](mailto:service@devolutions.net) and we will send you a link to our online reservation system.
{% endsnippet %}
