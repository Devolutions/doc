---
eleventyComputed:
  title: Check-out/Check-in
  description: In the context of privileged accounts (PAs), check-out and check-in refer to reserving a PA for a user's exclusive usage for a finite period.
---
In the context of privileged accounts (PAs), ***check-out*** and ***check-in*** refer to reserving a PA for a user's exclusive usage for a finite period. It is expected that a password rotation occurs upon check-in, releasing the exclusive lock. This process can happen:
* At the end of the checkout duration
* Manually
* When the session is closed in {{ en.RDM }} / {{ en.DGW }}
In the context of Just-In-Time (JIT) access, the permissions and memberships of accounts are modified upon checkout and restored to their initial state upon check-in.

### Aliases
* CyberArk: Account retrieval

### Related topics
* [Checkout process in {{ en.DVLS }}](/pam/server/checkout-process/)
* [Approve access to a privileged account in {{ en.DHUBB }}](/pam/hub/privileged-accounts/approve-access-privileged-account/)
* [Request access to a privileged account in {{ en.DHUBB }}](/pam/hub/privileged-accounts/request-access-privileged-account/)
* [Check-out requests report in {{ en.DHUBB }}](/pam/hub/privileged-access-reports/check-out-requests/)

### See also
* [Privileged accounts ({{ en.DVLS }})](/pam/server/accounts/)
* [Privileged accounts ({{ en.DHUBB }})](/pam/hub/privileged-accounts/)
* [Glossary of Common Privileged Access Management (PAM) Terms](https://blog.devolutions.net/2021/01/glossary-of-common-privileged-access-management-pam-terms/)
* [Need Cybersecurity Insurance? Then You Probably Need PAM, Too](https://blog.devolutions.net/2023/10/need-cybersecurity-insurance-then-you-probably-need-pam-too/)