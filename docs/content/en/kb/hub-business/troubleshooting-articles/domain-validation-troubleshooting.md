---
eleventyComputed:
  title: Domain validation troubleshooting
  description: When configuring single sign-on (SSO) in your {{ en.DHUBB }}, the first step is to Verify your domain. If you encounter issues while attempting to validate your domain, check the following elements.
---
When [configuring single sign-on (SSO)](/hub/getting-started/get-started-sso-hub-business/) in your {{ en.DHUBB }}, the first step is to ***Verify your domain***. If you encounter issues while attempting to validate your domain, check the following elements.

## Verify your domain

Make sure that the domain you are entering is the one currently in use for your {{ en.DA }} and SSO tenants. It is crucial that the domain you are attempting to validate matches the one associated with your account.

{% snippet icon.badgeInfo %}
Tip: If your domain ends in **.loc**, it is likely not the correct one for this purpose.
{% endsnippet %}

## Verify your DNS provider TXT Record

Ensure that you have entered the "_devolutions-challenge" subdomain as a TXT Record in your DNS provider. To confirm that it is correctly configured, you can use a DNS querying tool such as [MXToolBox](https://mxtoolbox.com/txtlookup.aspx) and input the domain as "_devolutions-challenge.windjammer.co", for example.

![DNS TXT Record in MXToolBox](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2316.png)

## Verify your challenge

Ensure that the challenge used in the domain contains the right string and starts with "DEVOLUTIONS-DOMAIN-VERIFICATION=".

![DNS TXT Record in MXToolBox](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2317.png)

## Retry domain verification

48 hours after the initial setup, the lookup stops if it is still not validated. You can then retry the domain validation process in {{ en.DHUBB }}. To do so, go to ***Administration – Authentication – Domain*** and click ***Retry domain validation***.

![Retry domain verification](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2318.png)

## Contact our Support team

If you have went through the entire list and your domain verification is still unsuccessful, the issue may be deeper and require further investigation. In this case, it is recommended to contact our technical support team for assistance at [service@devolutions.net](mailto:service@devolutions.net).

When reaching out to support, provide them with all the relevant information. This would include information such as:
* The DNS provider you are using for your domain.
* The physical region where your system is located.
* The region where your hub is located.

Collecting this data will greatly assist our support team in diagnosing and addressing any underlying issues effectively.
