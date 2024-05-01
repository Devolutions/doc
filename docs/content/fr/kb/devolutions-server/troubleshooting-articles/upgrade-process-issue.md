---
eleventyComputed:
  title: Upgrade process issues
  description: List of upgrade process issues in {{ en.DVLS }}
---
Following an upgrade of {{ en.DVLS }}, it triggers error messages like SQLException - Invalid column name in the logs or Error: cannot read property 'children' of null error message on the {{ en.DVLS }} web interface.

The reason of these errors are related to an SQL database or web application files that have not been properly updated because the upgrade of the {{ en.DVLS }} web application has been made with an older {{ en.DVLSCONSOLE }}.

## Solution

First, verify that the {{ en.DVLSCONSOLE }} corresponds to the version of the {{ en.DVLS }} web application.
![{{ en.DVLSCONSOLE }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8004.png)

If the {{ en.DVLSCONSOLE }} version is older than the web application version, please go on the {{ en.DVLS }} [download page](https://server.devolutions.net/home/download) to download the right {{ en.DVLSCONSOLE }} version and install it.

Then, install again the {{ en.DVLS }} web application over the current installation with the Upgrade Server button in the Actions pane. This will properly install all required files and update the SQL database to the appropriate version.

{% snippet icon.badgeNotice %}
We strongly recommend following the instructions in [Upgrading {{ en.DVLS }}](/server/installation/upgrade-server/) to perform the upgrade.
{% endsnippet %}

{% snippet icon.badgeNotice %}
We offer free remote session to assist you during the upgrade process of your {{ en.DVLS }} instance. For more help, please send an email to [service@devolutions.net](mailto:service@devolutions.net) to book a session with our support team. Premium Support owners can schedule off-hours session to limit the impact of the upgrade.
{% endsnippet %}

## The specified 'client_id' is invalid

The following error is displayed when you try to login on the {{ en.DVLS }} web page.

**error:invalid_request**
**error_description:The specified 'client_id' is invalid.**
**error_uri:https<area>://documentation.openiddict.com/errors/ID2052**

## Solution

The reason of this issue is the upgrade that has been made with an older {{ en.DVLSCONSOLE }} version. To solve this problem, please go on the {{ en.DVLS }} [download page](https://server.devolutions.net/home/download) to download the {{ en.DVLSCONSOLE }} version that correspond to the {{ en.DVLS }} web application version and install it. Then, install again the {{ en.DVLS }} web application over the current installation with the ***Update*** button in the ***Server*** tab.

![{{ en.DVLSCONSOLE }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8062.png)
