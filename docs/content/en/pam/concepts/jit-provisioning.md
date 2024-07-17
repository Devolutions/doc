---
eleventyComputed:
  title: Just-in-time provisioning
  description: JIT provisioning in Devolutions PAM offers the lowest exposure risk because high privileged accounts (HPAs) do not exist until needed.
---
***JIT (just-in-time) provisioning*** in Devolutions PAM offers the lowest exposure risk because high privileged accounts (HPAs) do not exist until needed. They are created on-the-fly and given appropriate memberships upon checkout. The accounts are deleted upon check-in.

Accounts can be named anything, such as a variation of the username of the user performing the checkout, the checkout identifier, etc. This approach shifts the burden from monitoring many existing accounts to monitoring just a few permanent ones, but it increases the account creation activity.

### See also
* [Just-in-time (JIT) elevation in {{ en.DVLS }}](/pam/server/just-in-time/)
* [Glossary of Common Privileged Access Management (PAM) Terms](https://blog.devolutions.net/2021/01/glossary-of-common-privileged-access-management-pam-terms/)
* [Need Cybersecurity Insurance? Then You Probably Need PAM, Too](https://blog.devolutions.net/2023/10/need-cybersecurity-insurance-then-you-probably-need-pam-too/)
