---
eleventyComputed:
  title: Security
  description: All the measures in {{ en.RDM }} to enforce a stronger security, including the Security Dashboard, User Groups, Multi-factor Authentication and many others.
---
{{ en.RDM }} enforces two successive steps of authentication to grant access to the data source. ***Multi-factor Authentication*** is integrated directly in the software and credentials are brokered on behalf of the user when launching a connection, preventing the user from ever knowing the credentials.

All restrictions are predefined and enforced by a role-based access control, providing granular protection access control.

{{ en.RDM }} seamlessly integrates with [{{ en.DVLS }}](https://docs.devolutions.net/server/getting-started/), providing advanced reporting, role-based permissions, and web-based access. {{ en.RDM }} also integrates with [{{ en.DHUB }}](https://docs.devolutions.net/hub/getting-started/create-hub/), which is a secure and cloud-based password manager for teams. 

### Related topics
* [{{ en.RDM }} Security Dashboard](/kb/remote-desktop-manager/knowledge-base/rdm-security-dashboard/)
* [Change Master Key](/rdm/windows/commands/file/change-master-key/)
* [Security Providers](/rdm/windows/commands/administration/settings/security-providers/)
* [User Groups](/rdm/windows/commands/administration/management/user-management/#user-groups)
* [Yubikey](/rdm/windows/data-sources/multi-factor-authentication/yubikey/)

### See also
* [Security](/rdm/windows/commands/file/options/security/)
* [Security Settings](/rdm/windows/commands/administration/settings/system-settings/general/security/)
