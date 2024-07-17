---
eleventyComputed:
  title: Just-in-time elevation
  description: JIT elevation in Devolutions PAM has two variations, namely elevating a normal account or a zero standing privileges (ZSP) account.
---
***JIT (just-in-time) elevation*** in Devolutions PAM has two variations: elevating a normal account or a zero standing privileges (ZSP) account.

* **Normal account**: This account has memberships, and additional groups/roles are added JIT upon checkout. Only what is added at checkout will be removed upon check-in.
* **ZSP account**: This account should not have any permissions or memberships at rest. Memberships are added at checkout and removed upon check-in, similar to normal accounts. The operational security team can monitor these accounts to ensure they remain clean at rest.

### Aliases
* CyberArk: On-demand

### Related topics
* [Just-in-time (JIT) elevation in {{ en.DVLS }}](/pam/server/just-in-time/)

### See also
* [Glossary of Common Privileged Access Management (PAM) Terms](https://blog.devolutions.net/2021/01/glossary-of-common-privileged-access-management-pam-terms/)
* [Need Cybersecurity Insurance? Then You Probably Need PAM, Too](https://blog.devolutions.net/2023/10/need-cybersecurity-insurance-then-you-probably-need-pam-too/)