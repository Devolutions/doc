---
eleventyComputed:
  title: Errors list 
  description: Here are all the possible errors in {{ en.DHUBB }} with the corresponding number.
---

Here are all the possible errors in {{ en.DHUBB }} with the corresponding number.

{% snippet icon.badgeInfo %}
Access-denied-errors in {{ en.DHUBB }} are listed [here](/kb/hub-business/troubleshooting-articles/access-denied-errors/).
{% endsnippet %}

## Forbidden - 403

| Code | Error                                       | Description                                                                                |
|------|---------------------------------------------|----------------------------------------------------------------------------------------------------|
| 0    | UserNotFound                                | User not found in {{ en.DHUBB }}.                                                                                  |
| 1    | UserDisabled                                | User is disabled.                                                                                   |
| 2    | TwoFactorRequired                           | Connection attempt to {{ en.DHUBB }} without 2FA.                                                                                       |
| 3    | SetupRequired                               | A new {{ en.DHUBB }} must be created. This can only be done by the owner. A normal user will be blocked.                              |
| 4    | SetupNotRequired                            | Trying to set up a {{ en.DHUBB }} when it is already set up.                                                                                      |
| 5    | EmergencyResetDenied                        | Normal user is denied for emergency reset.                                               |
| 6    | HubDisabled                                 | {{ en.DHUBB }} is disabled.                                                                                   |
| 7    | IPForbidden                                 | The host IP is forbidden/blocked by IP filtering, Tor traffic blocking, or application user restricted IP. |
| 8    | AccessDenied                                |  Access denied. This is the most commonly used default reason for blocking or denying an action when no specific reason is given/requested. |
| 9    | InvalidLicense                              | The {{ en.DHUBB }} license is invalid or has expired.                                                                  |
| 10   | OfflineAccessDisallowed                     | Request only to {{ en.DHUBB }} with offline setting enabled when requesting shared {{ en.VLT }}.        |
| 11   | UserApprovalRequired                        | Happen when a user is not found in {{ en.DHUBB }} and SSO is enabled.                                                  |
| 12   | InvalidLicenseManage                        | The {{ en.DHUBB }} license is invalid or has expired, but the Hub license can be managed.                                 |
| 13   | OrganizationSynchronizedMember              | The synchronized group cannot be edited using SSO.                                                              |
| 14   | FreeGatewayProductLicenseSessionAllRunning | All free license gateway sessions are running.                                                     |
| 15   | CompanionToolDisabled                       | Companion tools are blocked by {{ en.DHUBB }}. The settings is separate for {{ en.WBEX }} and {{ en.WMAPP }}.|
| 16   | OfflineAccessDisallowedForPamVault          | Request only allowed to {{ en.DHUBB }} with offline setting enabled when requesting a PAM {{ en.VLT}}.                   |
| 17   | PamEntryNotCheckedOut                       | The PAM entry is not checked out.                                                                    |
| 18   | HubPersonalMigrationDone                    | {{ en.DHUBP }} has migrated to the {{ en.HUBB }} architecture.                        |
| 19   | HubPersonalNotMigrated                      | {{ en.DHUBP }} verify that migration to the {{ en.HUBB }} architecture is complete.  |
| 20   | HubPersonalOnly                             | A request from {{ en.DHUBB }} attempts to impersonate {{ en.DHUBP }}.                                                                |
| 21   | UserVaultDisabled                           | A user is trying to edit their user {{ en.VLT }}, but {{ en.DHUB }} has disabled user {{ en.VLT }}.         |
| 22   | MaximumBlobSizeExceeded                     | The blob/attachment/file is too large for the {{ en.DHUB }}.                                                      |
| 23   | MaximumBlobContainerTotalSizeExceeded      | Blob storage has reached the limit of the blob container.                                               |
| 24   | CannotCreateTemporaryAccessOnRoot          | Temporary access to a root entry cannot be requested.                                                    |
| 25   | UserExpired                                 | User has expired.                                                                                                                                                 |
| 26   | SupportTicketsOnlyAllowedForAdministrators | This feature is blocked for regular users if the {{ en.DHUB }} has restricted the ability to submit support tickets to administrators only. |
| 27   | InvalidPAMCheckoutApprover                  | Current user is not allowed to approve/reject PAM check out requests.                                               |

## Unauthorized - 401

| Code | Error             | Description                                                                          |
|------|-------------------|--------------------------------------------------------------------------------------|
| 0    | Other             | The default is when no specific reason is given in the context of SSO.                   |
| 1    | OrgIdMismatch     | In SSO context, if the organization ID from the user login request does not match the organization ID from the {{ en.DHUB }}. |
| 2    | InvalidProviderId | In SSO context, when the provider ID from user login request is empty or null.        |
| 3    | InvalidScopes     |A request to {{ en.DHUB }} is made without specifying any scopes.                                                |

## Locked - 423

| Code | Error            | Description                                                                                     |
|------|------------------|-------------------------------------------------------------------------------------------------|
| 0    | Opened           | A user attempts to open an entry that is currently being opened by another user.            |
| 1    | LockedForEdit    | A user attemps to edit an entry that is being edited by another user.             |
| 2    | Checkout         | A user tries to open, edit, and even checkout an item that is currently being checked out by another user. |
| 3    | Forbidden | A user tries to check out an item or change the status of the item. |

## Custom Error 5XY | User Invitation - 544

| Code | Error             | Description                                                        |
|------|-------------------|--------------------------------------------------------------------|
| 2    | AlreadyExist      | The user to invite already exists.                  |
| 3    | UserNotProvisioning | The user invitation process failed.                                |
| 4    | EmailNotSend      | Email failed to be sent after user was invited.               |
| 5    | LimitReached      | Block user invitation process when hub users limit is reached.      |
| 6    | Forbidden         | Attempting to invite a user without having the proper permissions.  |

## Secret ID expiration error | Status 401

![Secret ID expiration error](https://cdnweb.devolutions.net/docs/HUBB6006_2024_1.png)

| Status | Error             | Description                                                        |
|------|---------------------|--------------------------------------------------------------------|
| 401    | Response: Stack: Devolutions.Hub.Clients.HubClient.<PreLoginAsync>d__31.MoveNext()      | The Client ID or secret supplied by your organization is invalid, please contact an admin of your organization.                 |