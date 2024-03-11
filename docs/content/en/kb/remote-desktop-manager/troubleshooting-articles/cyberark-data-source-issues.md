---
eleventyComputed:
  title: Cyberark data source issues
  description: Access your CyberArk server directly, without the need for an SQL or {{ en.DVLS}} data source to host the CyberArk Dashboard session.
---

Here is the list of all known CyberArk data source issues.

## No license found

### Solution

To perform the [initial configuration](/rdm/data-sources/data-sources-types/cyberark-data-source/#initial-configuration) steps, make sure you first connect to a user who has the required CyberArk permissions.

## Unable to edit an account

### Solution 

While in preview, the CyberArk data source will recognize ***Add Safe*** as the Admin. This also controls the add/edit/delete actions in the user interface. Regardless of ***Add Safe***, CyberArk will validate the correct user permissions when an action is requested (add/edit/delete) and will prevent you from performing tasks that the current user is not authorized to perform.
