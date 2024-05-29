---
eleventyComputed:
  title: Limitations on account brokering for specific tools
  description: In {{ en.DVLS }}, on permission allows viewing the password, and the other permits the use of the password through {{ en.RDM }}.
  keywords:
  - Privileged Access Management
  - PAM
  - Brokering
---
Privileged Access Management (PAM) systems often restrict the visibility of passwords for security reasons. In {{ en.DVLS }}, and similar to some of our partners, we implement a dual permission approach: one allows viewing the password, and the other permits the use of the password through {{ en.RDM }} acting on your behalf. We refer to this functionality as account brokering, commonly known as "acting by proxy." Essentially, {{ en.RDM }} acts like a concierge who, instead of giving you a key, directly opens the door for you.

However, this functionality presents a challenge with {{ en.RDM }}, which was initially designed to prioritize ease-of-use, flexibility, and integration with nearly 160 different technologies. For some of these technologies, restricting password usage proved to be highly complex. The only viable solution to mitigate risk was to disable access to certain technologies entirely. Examples of these include command lines, PowerShell, and various management tools.

While it remains a possibility to enable these technologies in the future, currently, the risk of potential security breaches — especially considering that a malicious user could substitute a secure tool with a self-created, insecure one — is too great to address effectively at this time.

In {{ en.DVLS }}, granting permission to view the password can circumvent some issues, but if your security protocols prohibit this or if you utilize an integration that lacks this option, unfortunately, there is no current workaround available.
