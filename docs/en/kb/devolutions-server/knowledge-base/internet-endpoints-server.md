---
eleventyComputed:
  title: List of Internet endpoints accessed by {{ en.DVLS }}
  description: This is the list of addresses that are accessed by {{ en.DVLS }} and the {{ en.DVLSCONSOLE }} during normal operation, as well as the setting(s) to disable/prevent this access.
  keywords: 
  - endpoints
---
These are the lists of addresses that are accessed by {{ en.DVLS }} and the {{ en.DVLSCONSOLE }} during normal operation, as well as the setting(s) to disable/prevent this access.

{% snippet icon.badgeWarning %}
We use a "best effort" approach to maintain this list, but it does **NOT** replace proper IT security practices. If security is paramount, it would be better to first block all internet access, then allowlist desired addresses as needed.
{% endsnippet %}

## {{ en.DVLS }} endpoints list

| Description                    | URL                                                                            | Related setting(s) / action |
| ------------------------------ | ------------------------------------------------------------------------------ | ------------------------- |
| {{ en.DVLS }} update check              | https<area>://devolutions.net                                         | {{ en.DVLSCONSOLE }} – Support – Check for Updates |
| {{ en.DVLS }} update - package download | https<area>://cdn.devolutions.net                                     | User action in the upgrade available dialog |
| Block Tor clients              | https<area>://cloud.devolutions.net                                            | Administration – Server Settings – Features |
| Azure Authentication           | https<area>://login.microsoftonline.com<br>https<area>://graph.microsoft.com   | Administration – Server Settings – Authentication – Microsoft Authentication |
| Okta Authentication            | https<area>://< domain >.okta.com                                              | Administration – Server Settings – Authentication |
| PAM - Provider Azure           | https<area>://graph.microsoft.com                                              | Azure type PAM Provider |
| Telemetry                      | https<area>://telemetry.devolutions.net                                        | Administration – Server Settings – Features – Share anonymous usage data with Devolutions |
| Have I Been Pwned              | https<area>://api.pwnedpasswords.com                                           | Administration – Server Settings – Features – Enable compromised (pwned) check |
| Push Notification              | https<area>://login.devolutions.com<br>https<area>://api.devolutions.com       | Administration – Server Settings – Features – Enable {{ en.DWS }} Push Notification |
| Licenses                       | https<area>://api.devolutions.com                                              | Administration – Server Settings – Features – Enable Internet Access |
| Slack Integration              | https<area>://slack.com                                                        | Administration – Server Settings – Logging – Slack Integration |
| SMTP, Authentication Azure     | https<area>://graph.microsoft.com                                              | Administration – Server Settings – Email – Authentication type |
| Geo IP                         | https<area>://geoip.maxmind.com                                                | Administration – Server Settings – GeoIP Security |
| Gravatar                       | https<area>://secure.gravatar.com                                              | Administration – Server Settings – Features – Enable Gravatar |
| Yubikey                        | https<area>://api.yubico.com<br>https<area>://api2.yubico.com<br>https<area>://api3.yubico.com<br>https<area>://api4.yubico.com<br>https<area>://api5.yubico.com<br> | Administration – Server Settings – Multi-factor |
| Twilio                         | https<area>://api.twilio.com                                                   | Administration – Server Settings – Multi-factor – SMS |
| Duo                            | https<area>://api.<>.duosecurity.com                                           | Administration – Server Settings – Multi-factor |

## {{ en.DVLSCONSOLE }} endpoints list

| Description                    | URL                                                                            | Related setting(s) / action |
| ------------------------------ | ------------------------------------------------------------------------------ | ------------------------- |
| [{{ en.DVLS }} script installation](/server/installation/installing-web-server-prerequisites/) | https<area>://api.devolutions.net<br>https<area>://iis.net<br>https<area>://dotnet.microsoft.com | {{ en.DVLS }} service installation |
