---
eleventyComputed:
  title: List of Internet endpoints accessed by {{ en.RDM }}
  description: This is the list of addresses that are accessed by {{ en.RDM }} during normal operation, as well as the setting(s) to disable/prevent this access.
  keywords: 
  - endpoints
---
This is the list of addresses that are accessed by {{ en.RDM }} during normal operation, as well as the setting(s) to disable/prevent this access.  

{% snippet icon.badgeWarning %}
{{ en.RDM }} is a tool that integrates more than 150 technologies. This list ONLY contains endpoints accessed by the core product itself. We use a "best effort" approach to maintain this list, but it does **NOT** replace proper IT security practices. If security is paramount, it would be better to first block all internet access, then allowlist desired addresses as needed.
{% endsnippet %}  

{% snippet icon.shieldNotice %}
As part of a standard visit to a website using the HTTPS protocol, the certificate used by the remote site is validated using industry best practices. A certificate contains multiple URLs which are accessed to perform validation. The URLs vary not only for each site, but also in time whenever they are renewed. Read [Certificate validation](/kb/remote-desktop-manager/knowledge-base/certificate-validation) for further information.
{% endsnippet %}

## Endpoints list

| Description                                  | URL                                                | Related setting(s) / action |
| -------------------------------------------- | -------------------------------------------------- | ------------------------- |
| RDM update check                             | https<area>://devolutions.net                      | File – Options – Application Startup – Enable check for updates |
| License validation                           | https<area>://api.devolutions.com/license/generate | Administration – Licenses |
| RDM update - package download                | https<area>://cdn.devolutions.net                  | User action in the upgrade available dialog |
| {{ en.DC }} - our online services            | https<area>://cloud.devolutions.net                | File – {{ en.DA }} |
| {{ en.DA }} Login                            | https<area>://login.devolutions.com                | File – {{ en.DA }} |
| Devolutions Store - Upgrade/Buy {{ en.RDM }} | https<area>://store.devolutions.net                | User action in the License expiry dialog |
| Telemetry                                    | https<area>://telemetry2.devolutions.net           | File – Options – Advanced – Disable telemetry |
| Have I Been Pwned                            | https<area>://api.pwnedpasswords.com               | File – Options – Advanced – Disable compromised password (pwned) check |
| Yubikey                                      | https<area>://api.yubico.com<br>https<area>://api2.yubico.com<br>https<area>://api3.yubico.com<br>https<area>://api4.yubico.com<br>https<area>://api5.yubico.com<br> | File – Options – Security – Require Yubikey authentication |
| Gravatar                                     | https<area>://secure.gravatar.com                  | File – Options – Advanced – Disable all Gravatar images |
| Gravatar fallback                            | https<area>://i2.wp.com                            | File – Options – Advanced – Disable all Gravatar images |
| User images                                  | https<area>://ui-avatars.com                       | Used when Gravatars are disabled |
