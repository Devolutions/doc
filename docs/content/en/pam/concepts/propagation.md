---
_schema: default
eleventyComputed:
  title: Propagation
  description: >-
    Propagation is a feature in a {{ en.DVPAM }} provider that acts as a fourth and final action a provider carries out when rotating passwords.
---

***Propagation*** (***password propagation***) or sometimes referred to as ***propagation scripts*** is a feature in a {{ en.DVPAM }} provider that acts as a fourth and final ***action*** a ***provider*** carries out when rotating passwords.

***Propagation*** is an optional ***action*** implemented as user-customizable PowerShell script that executes last in the ***provider*** ***action*** sequence of ***discovery*** —> ***heartbeat*** —> ***password rotation***. It’s purpose is fluid and is used to perform followup tasks that must take place after a password is changed.

For example, when passwords are stored in software features like [Windows services](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts/windows_service), synced to services like [Azure Key Vault as secrets](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts/azure_key_vault) or Windows scheduled tasks, ***propagation*** can change those passwords. ***Propagation scripts*** can also perform actions such as creating helpdesk tickets or sending notification events to services like [Slack](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts/slack_message) or [Microsoft Teams](https://github.com/Devolutions/PAM-Providers/tree/master/Propagation-Scripts/teams_message).



### Related topics


### See also
