---
eleventyComputed:
  title: SMS
  description: Multi-factor authentication (MFA) via SMS requires the user to enter a code they receive on their mobile phone as its second component to access the data source.
  keywords:
  - SMS
  - MFA
  - multi-factor authentication
---
Multi-factor authentication (MFA) via SMS requires the user to enter a code they receive on their mobile phone as its second component to access the data source.

To enable this MFA method for your users, go to ***Administration – Server Settings – Multi-factor*** and check the ***SMS*** MFA option. A ***Configure*** button will appear next to the option.
![Administration – Server Settings – Multi-factor – Supported MFA – SMS](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2068.png)

{% snippet icon.badgeInfo %}
See [Multi-factor](/server/web-interface/administration/configuration/server-settings/security/two-factor/) for more information on MFA configuration.
{% endsnippet %}

There are two possible configurations available: the [free version](#free-version), using a carrier configured in your server's email settings, and the [version configured with Twilio](#configured-with-twilio).

## Free version
The free version uses a carrier configured in your server's email settings. Do not fill in the Twilio settings fields. Only check the ***SMS*** box as described above, save your changes, and [configure your email settings](/kb/devolutions-server/how-to-articles/configure-smtp-server/configure-smtp-email/).

## Configured with Twilio
To configure the SMS method with Twilio, you must have a Twilio subscription. In ***Configure***, check the ***Use Twilio instead of a carrier to send SMS*** option, then fill in the fields with your Twilio subscription information.
![SMS Setup](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8136.png)

| Option      | Description                                  |
|-------------|----------------------------------------------|
| Account SID | Account SID of your Twilio account           |
| Auth token  | Authorization token from your Twilio account |
| Phone       | Phone number                                 |
