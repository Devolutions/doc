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
| Code | Error                                       | Description/Solution                                                                 |
|------|---------------------------------------------|--------------------------------------------------------------------------------------|
| 0    | UserNotFound                                | User not found in {{ en.DHUBB }}. If the user is not found or has been deleted, go to ***Administration – Users*** and [create the user](/hub/web-interface/administration/management/users/create-invite-users/). |
| 1    | UserDisabled                                | User is disabled. Go to ***Administration – Users*** and select the user. Click ***Edit*** and click ***Is enabled*** to enable the user. |
| 2    | TwoFactorRequired                           | Connection attempt to {{ en.DHUBB }} without 2FA.                                    |
| 3    | SetupRequired                               | A new {{ en.DHUBB }} must be [created](/hub/getting-started/create-hub/hub-business/). This can only be done by the owner. A normal user will be blocked. |
| 4    | SetupNotRequired                            | Trying to set up a {{ en.DHUBB }} when it is already set up.                         |
| 5    | EmergencyResetDenied                        | Normal user is denied for [emergency reset](/kb/general-knowledge-base/emergency-kit/). The emergency reset of the {{ en.DHUB }} can only be performed by its owner. |
| 6    | HubDisabled                                 | {{ en.DHUBB }} is disabled.                                                          |
| 7    | IPForbidden                                 | The host IP is forbidden/blocked by IP filtering, Tor traffic blocking, or application user restricted IP. Administrators can enable or disable Tor traffic by clicking on ***System Settings*** –  ***Block Tor traffic***. |
| 8    | AccessDenied                                | Access denied. This is the most commonly used default reason for blocking or denying an action when no specific reason is given/requested. |
| 9    | InvalidLicense                              | The {{ en.DHUBB }} [license](/hub/web-interface/administration/management/licenses/register-hub-business-license/) is invalid or has [expired](/hub/web-interface/administration/management/licenses/register-hub-business-license/#my-current-license-is-expired). |
| 10   | OfflineAccessDisallowed                     | Request only to {{ en.DHUBB }} with offline setting enabled when requesting shared {{ en.VLT }}. |
| 11   | UserApprovalRequired                        | Happen when a [user is not found in {{ en.DHUBB }}](/hub/web-interface/administration/management/users/create-invite-users/) and [SSO](/hub/web-interface/administration/configuration-security/authentication/#single-sign-on-sso) is enabled. |
| 12   | InvalidLicenseManage                        | The [{{ en.DHUBB }} license](/hub/web-interface/administration/management/licenses/register-hub-business-license/) is invalid or has expired, but the license can be managed. |
| 13   | OrganizationSynchronizedMember              | The synchronized group cannot be edited using SSO.                                   |
| 14   | FreeGatewayProductLicenseSessionAllRunning  | All free license gateway sessions are running. Up to ***five free license gateway sessions*** can run simultaneously. |
| 15   | CompanionToolDisabled                       | [Companion tools are blocked](/hub/web-interface/administration/management/users/companion-tools-access/) by {{ en.DHUBB }}. The setting is separate for [{{ en.WBEX }}](/kb/workspace-browser-extension/) and [{{ en.WMAPP }}](/hub/workspace/installation-setup/workspace-mobile-app/setup-mobile-hub-business/). Administrators can enable these settings by editing the user in ***Administration – Users***. |
| 16   | OfflineAccessDisallowedForPamVault          | Request only allowed to {{ en.DHUBB }} with offline setting enabled when requesting a PAM {{ en.VLT}}. |
| 17   | PamEntryNotCheckedOut                       | The PAM entry is not [checked out](/hub/web-interface/entries/checkout-system/#check-out-an-entry). |
| 18   | HubPersonalMigrationDone                    | {{ en.DHUBP }} has migrated to the {{ en.DHUBB }} architecture.                      |
| 19   | HubPersonalNotMigrated                      | {{ en.DHUBP }} verify that migration to the {{ en.DHUBB }} architecture is complete. |
| 20   | HubPersonalOnly                             | A request from {{ en.DHUBB }} attempts to impersonate {{ en.DHUBP }}.                |
| 21   | UserVaultDisabled                           | A user is trying to edit their user {{ en.VLT }}, but {{ en.DHUB }} has disabled user {{ en.VLT }}. |
| 22   | MaximumBlobSizeExceeded                     | The blob/attachment/file is too large for the {{ en.DHUB }}.                         |
| 23   | MaximumBlobContainerTotalSizeExceeded       | Blob storage has reached the limit of the blob container.                            |
| 24   | CannotCreateTemporaryAccessOnRoot           | [Temporary access](/hub/web-interface/temporary-access/request-temporary-access/) to a root entry cannot be ***requested***. |
| 25   | UserExpired                                 | User has [expired](/hub/web-interface/administration/management/users/#re-invite-a-user). |
| 26   | SupportTicketsOnlyAllowedForAdministrators  | This feature is blocked for regular users if the {{ en.DHUB }} has restricted the ability to submit [support tickets](/hub/web-interface/administration/configuration-security/system-settings/) to administrators only. |
| 27   | InvalidPAMCheckoutApprover                  | Current user is not allowed to [approve/reject PAM check out requests](/pam/hub/privileged-accounts/approve-access-privileged-account/). |

## Unauthorized - 401
| Code | Error             | Description/Solution                                                           |
|------|-------------------|--------------------------------------------------------------------------------|
| 0    | Other             | The default is when no specific reason is given in the context of SSO.         |
| 1    | OrgIdMismatch     | In SSO context, if the organization ID from the user login request does not match the organization ID from the {{ en.DHUB }}. |
| 2    | InvalidProviderId | In SSO context, when the provider ID from user login request is empty or null. |
| 3    | InvalidScopes     | A request to {{ en.DHUB }} is made without specifying any scopes.              |

## Locked - 423
| Code | Error         | Description                                                                                                |
|------|---------------|------------------------------------------------------------------------------------------------------------|
| 0    | Opened        | A user attempts to open an entry that is currently being opened by another user.                           |
| 1    | LockedForEdit | A user attemps to edit an entry that is being edited by another user.                                      |
| 2    | Checkout      | A user tries to open, edit, and even checkout an item that is currently being checked out by another user. |
| 3    | Forbidden     | A user tries to check out an item or change the status of the item.                                        |

## Custom Error 5XY | User Invitation - 544
| Code | Error               | Description/Solution                                               |
|------|---------------------|--------------------------------------------------------------------|
| 2    | AlreadyExist        | The user to invite already exists.                                 |
| 3    | UserNotProvisioning | The user invitation process failed.                                |
| 4    | EmailNotSend        | Email failed to be sent after user was invited.                    |
| 5    | LimitReached        | Block user invitation process when {{ en.DHUB }} users limit is reached. This limit varies depending on the license. |
| 6    | Forbidden           | Attempting to invite a user without having the proper permissions. |

## Secret ID expiration error | Status 401
![Secret ID expiration error](https://cdnweb.devolutions.net/docs/HUBB6006_2024_1.png)

| Status | Error                                                                              | Description/Solution |
|--------|------------------------------------------------------------------------------------|----------------------|
| 401    | Response: Stack: Devolutions.Hub.Clients.HubClient.<PreLoginAsync>d__31.MoveNext() | The Client ID or secret supplied by your organization is invalid, please contact an admin of your organization. |
