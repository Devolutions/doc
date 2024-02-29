---
eleventyComputed:
  title: Ticketing service
  description: The ticketing service feature helps you distribute information to all users of the ticketing system that is used inside {{ en.RDM }}.
  keywords:
  - ticketing
  - API token
---
{% snippet icon.badgeInfo %}
This feature is only available in {{ en.RDM }} with an advanced data source, for instance {{ en.DVLS }}.
{% endsnippet %}

The ***Ticketing service*** feature helps you distribute information to all users of the ticketing system that is used inside {{ en.RDM }}. The purpose of this integration is to be able to create tickets into your ticketing system directly from {{ en.RDM }}.

{% snippet icon.badgeInfo %}
As of now, the Jira ticketing system is the only one supported.
{% endsnippet %}

You can find this feature in ***Administration – System Settings – Advanced – Ticketing Service*** in {{ en.RDM }}.
![Administration – System Settings – Advanced – Ticketing Service](https://cdnweb.devolutions.net/docs/en/kb/KB2198.png)

If you are using a {{ en.DVLS }} data source, you can also access it via the web interface in ***Administration – System Settings – Ticketing Service***.
![Administration – System Settings – Ticketing Service](https://cdnweb.devolutions.net/docs/en/kb/KB2199.png)

The table below gives you an explanation of each parameter to configure. You will need to [create an API token](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/) to complete the configuration.

| Settings                    | Description                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------------- |
| ***Ticketing type***        | The ticketing system you use integrated with {{ en.RDM }}. As of now, only Jira is supported. |
| ***Ticketing server URI***  | The URL to reach your instance of Jira.                                                       |
| ***Username***              | The username of the account used to create the API token.                                     |
| ***API token***             | The API token created beforehand. If not already done, follow the link above.                 |
| ***Default filter***        | This field is required; you must have at least one favorite filter in Jira.                   |
| ***Ticketing enforcement*** | Your preference between enforcing this ticketing service or not.                              |
