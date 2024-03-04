---
eleventyComputed:
  title: Authentication
  description: The Authentication section allows you to configure how your users will log into your hub.
---
The ***Authentication*** section allows you to configure how your users will log into your hub.

{% snippet icon.badgeHelp %}
For complete instructions on how to configure Single Sign-on (SSO) with your Hub, see [Get started with SSO in {{ en.DHUBB }}](/hub/getting-started/get-started-sso-hub-business/).
{% endsnippet %}

## General

In the ***General*** section, you can enable login settings for your users.
![Administration – Authentication – General](https://cdnweb.devolutions.net/docs/en/hub/HUBB2009_2024_1.png)
| Option                                                        | Description                                                                                          |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| Force prompt login                                            | Enforces a login prompt for all users. If users have set up their 2-step verification in their {{ en.DA }}, this will only prompt 2-step verification.                                                                                                                             |
| Enforce 2-step verification on {{ en.DA }}                    | Enforces all users to set a multi-factor verification on their {{ en.DA }}.                          |
| Enforce number matching push notifications via {{ en.WAPPS }} | Enables 2FA number matching for all users of this hub with our {{ en.WAPPS }}.                       |
| Inactivity Logout Time                                        | Disconnects users after a set inactivity time value, ranging from 5 minutes to 4 hours (unless Off). |

{% snippet icon.badgeCaution %}
The ***Enforce 2-step verification on {{ en.DA }}*** and ***Enforce number matching push notifications via {{ en.WAPPS }}*** settings do not apply to users that log in with Single Sign-on (SSO).
{% endsnippet %}

## Domain

{% snippet icon.badgeHelp %}
For the full domain verification and SSO setup instructions, visit [Get started with SSO in {{ en.DHUBB }}](/hub/getting-started/get-started-sso-hub-business/).
{% endsnippet %}

Verify your domain(s) for single sign-on. Multiple domains can be verified in a single SSO configuration. It is mandatory as it allows us to verify the ownership of the domain(s) supplied.

![Administration – Authentication – Domain](https://cdnweb.devolutions.net/docs/en/hub/HUBB2010_2024_1.png)

In a separate window, log in to your domain host and find your DNS records. Create and save a new TXT record using the information provided below.

![Domain information](https://cdnweb.devolutions.net/docs/en/hub/HUBB2011_2024_1.png)

You know that your domain has been successfully verified when its status changes from ***Pending*** to ***Verified***, as indicated with an icon of a  checkmark within a green circle, as seen below.

![Verified domain](https://cdnweb.devolutions.net/docs/en/hub/HUBB2012_2024_1.png)

## Single Sign-On (SSO)

{% snippet icon.badgeHelp %}
For the full SSO setup instructions, visit [Get started with SSO in {{ en.DHUB }}](/hub/getting-started/get-started-sso-hub-business/).
{% endsnippet %}

You have access to the ***Single Sign-On (SSO)*** section to configure SSO for your {{ en.DHUB }} users. Start by selecting the identity manager of your choice between Microsoft and Okta.
![Administration – Authentication – Single Sign-On (SSO)](https://cdnweb.devolutions.net/docs/en/hub/HUBB2013_2024_1.png)

You then have to enter some information as seen below.

![SSO information (example with Microsoft Azure)](https://cdnweb.devolutions.net/docs/en/hub/HUBB2014_2024_1.png)

By default, SSO will be enabled once you complete its configuration. You can also ***Force SSO on all users***.

{% snippet icon.badgeWarning %}
If you enable ***Force SSO on all users***, users will not have access to {{ en.DHUBB }} in case of misconfiguration or downtime of your SSO provider. We strongly recommend that you inform all existing users in your {{ en.DHUBB }} of this new authentication method prior to activating it.
{% endsnippet %}

![Active SSO (example with Microsoft Azure)](https://cdnweb.devolutions.net/docs/en/hub/HUBB2015_2024_1.png)

After SSO is set up, users will then be able to log in to your Hub using their Azure AD or Okta credentials in addition to being able to do so with their {{ en.DA }} credentials.

After having configured and saved your SSO settings, it is still possible to edit them or even delete them.

## Provisioning

{% snippet icon.badgeInfo %}
User and user group provisioning is currently only available with Microsoft Azure AD.
{% endsnippet %}

Synchronize and automate the provisioning and deprovisioning process of your {{ en.DHUB }} users and groups by configuring your Identity Provider with your hub using the SCIM (System for Cross-domain Identity Management) specification under your idP (Identity Provider) configurations.

Your [domain(s)](#domain) must be verified and [Single Sign-on](#single-sign-on-sso) must first be configured and enabled to set up the provisioning. For the full provisioning setup instructions, visit [Get started with SSO in {{ en.DHUBB }}](/hub/getting-started/get-started-sso-hub-business/).

![Administration – Authentication – Provisioning](https://cdnweb.devolutions.net/docs/en/hub/HUBB2016_2024_1.png)

## Encryption Service
{{ en.DHUB }}'s encryption service streamlines access to your Hub by eliminating the requirement to individually invite each user from your SSO provider. You need to enable the feature and enter the ***Encryption service URL***, which is where the encryption service will listen for incoming requests. This URL or IP address only needs to be reachable by clients logging in using the encryption service.

See [Encryption service](/hub/web-interface/administration/configuration-security/authentication/encryption-service/) for a list of requirements and configuration guides.

![Enable the Encryption Service](https://cdnweb.devolutions.net/docs/en/hub/HUBB2366_2024_1.png)