---
eleventyComputed:
  title: CyberArk MFA delimiter in {{ en.RDM }}
  description: The MFA delimiter option exists in {{ en.RDM }} to mirror the one that already exists with CyberArk.
  keywords:
  - CyberArk
  - MFA delimiter
---
The ***MFA delimiter*** option exists in {{ en.RDM }} to mirror the one that already exists with CyberArk. The character that is entered in the delimiter field will be used to separate the values of the SecurID code and the password that are then sent to the API.
{% snippet, "badgeInfo" %}

The ***MFA delimiter*** field is only available for the [***CyberArk Dashboard***](#cyberark-dashboard) entry and the [***CyberArk PVWA (Credentials)***](#cyberark-pvwa-credentials) entry.

Learn more about [CyberArk entries configuration](/rdm/kb/rdm-windows/how-to-articles/cyberark-dashboard-configuration/).
{% endsnippet %}

Here is an example of how it works:

| SENT                                                         | RECEIVED BY API     |
|--------------------------------------------------------------|---------------------|
| SecurID code: 123<br>Password: abc                           | Received: 123abc    |
| SecurID code: 123<br>Password: abc<br>***MFA delimiter***: , | Received: 123,abc   |

## CyberArk Dashboard
The entry can be found under ***New Entry – Session – Privileged Access Management***. The option is in the ***Common – General – General*** tab.
{% snippet, "badgeInfo" %}
The ***Append RSA SecurID code to password*** option needs to be enabled to have access to ***MFA delimiter***.
{% endsnippet %}

![CyberArk Dashboard](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0076.png)

## CyberArk PVWA (Credentials)
The entry can be found under ***New Entry – Credential Management – Privileged Access Management***. The option is in the ***Common – General – Advanced*** tab.
![CyberArk PVWA](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0077.png)
