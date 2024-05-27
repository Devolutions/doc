---
eleventyComputed:
  title: List of Internet endpoints accessed by {{ en.DHUB }}
  description: This is the list of addresses that are accessed by {{ en.DHUB }} during normal operation.
  keywords:
  - endpoints
---
This is the list of addresses that are accessed by {{ en.DHUB }} during normal operation.

{% snippet, "badgeWarning" %}
We use a "best effort" approach to maintain this list, but it **does not replace proper IT security practices**. If security is paramount, it would be better to first block all internet access, then allowlist desired addresses as needed.
{% endsnippet %}

## Endpoints list

| Description               | URL                                                                                          | Related action                                  |
| ------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Certain charts            | https<area>://chart.googleapis.com                                                           | Chart service for displaying in dashboards      |
| Certain icons             | https<area>://use.fontawesome.com/                                                           | Icons provider                                  |
| Certain images            | https<area>://cdnweb.devolutions.net                                           | Image service                                   |
| {{ en.DSEND }}            | https<area>://send.devolutions.com                                                           | Send passwords externally via email/link        |
| Fonts for the application | https<area>://fonts.googleapis.com<br>https<area>://fonts.gstatic.com                        | Fonts provider to display the application       |
| Login                     | https<area>://login.devolutions.com                                                          | Login provider                                  |
| User avatars              | https<area>://secure.gravatar.com<br>https<area>://ui-avatars.com<br>https<area>://i2.wp.com | Avatar service                                  |
| Website icons (favicon)   | https<area>://iconcache.devolutions.com                                                      | Devolutions favicon service for website entries |
