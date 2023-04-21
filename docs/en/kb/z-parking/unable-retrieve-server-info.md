---
title: Unable to Retrieve Server Information
description: Following the creation of a Devolutions Server instance, the web interface display the following error message. Unable to retrieve server information.
keywords:
- missing privileges
- server information
---
Following the creation of a {{ en.DPS }} instance, the web interface display the following error message.

![Unable to retrieve server information error message](/img/en/kb/KB8003.png) 

## Solution

The accounts used to interact with the SQL database are missing privileges. You will have to either grant ownership permissions to those accounts or grant least privileges. In the latter, please contact us and we will provide the right SQL statement according to the {{ en.DPS }} version you are using.

{% snippet icon.badgeInfo %}
As every {{ en.DPS }} version has different database schema, we prefer not publishing at wide all different SQL statements to avoid unwanted behaviours and issues.
{% endsnippet %}