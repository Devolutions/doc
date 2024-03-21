---
eleventyComputed:
  title: The redirect URI specified in the request does not match the redirect URI configured for the application
---
{% snippet icon.badgeCaution %}
The following Office365 authentication issue occurs on an updated {{ en.DVLS }} instance from a version older than 2022.1.13.0 to 2022.1.13 or higher.
{% endsnippet %}

When trying to authenticate on the {{ en.DVLS }} web interface using the Office365 authentication method, the following error is displayed.
![!!KB8099](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8099.png)

## Solution

1. Go in the Azure Active Directory portal.
1. Find the {{ en.DVLS }} Web application in App Registration.
![Azure App Registration](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8100.png)
1. In the Redirect URIs properties of the application, update the URI from **https://<access_uri>/login** to this URI **https://<access_uri>/api/external-provider-response**.
![Redirect URI](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8101.png)
1. Save the modification.
1. Reload the {{ en.DVLS }} web page to login properly with your Office365 account.
