---
eleventyComputed:
  title: Access URI
  description: During the upgrade process or the installation process of {{ en.DVLS }}, an access URI must be provided.
---
{% snippet, "badgeCaution" %}
This issue is related to upgrading from a version prior to 2022.1 to 2022.2.
{% endsnippet %}

During the upgrade process or the installation process of {{ en.DVLS }}, an access URI must be provided. This URI is a redirect URL that is used by the open authorization (OAuth) system and redirects the authentication traffic to the access URI.

## Settings

1. In the {{ en.DVLSCONSOLE }}, go to ***Server – Edit – IIS***.
1. Enter the ***Access URI*** in the text field following the format provided in [Scenarios](/server/kb/knowledge-base/access-uri/#scenarios). Click the ellipsis button to add or manage additional access URIs if need be.

   {% snippet, "badgeNotice" %}
   The access URI is case sensitive and must respect the certificate host name. Ensure that there is no '/' at the end of the URL.
   {% endsnippet %}

   ![Server – Edit – ISS – Access URI](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2008_2024_2.png)

1. Click ***OK***.
1. If the existing access URI was modified or if a new access URI was created, restart the {{ en.DVLS }} instance via the {{ en.DVLSCONSOLE }} by clicking on ***Stop server***, then ***Start server***.
![Restart the {{ en.DVLS }} instance](https://cdnweb.devolutions.net/docs/DVLSCONSOLE2009_2024_2.png)

## Scenarios

Multiple formats can be set. Select the correct one for the situation.

* The {{ en.DVLS }} instance is **available internally** only and is **hosted on one server**: The access URI should be set with the FQDN of the machine and end with the {{ en.DVLS }} IIS Application if it is not installed on the root of the website.

    Format example: **https<area>://myservername.mydomain.loc/dvls**
* The {{ en.DVLS }} instance is **available externally** on the web or behind a load balanced environment: The access URI should be set with the URL you use to reach the instance from the web.

    Format example: **https<area>://myorganisation.com/dvls**
* The {{ en.DVLS }} instance is ***installed at the root*** of the IIS website: The access URI should only be the FQDN of the machine.

    Format example: **https<area>://myorganization.com**
* The {{ en.DVLS }} instance is **using a non-standard port** (80 for http, 443 for https): The access URI needs to contain the port number after a colon.

    Format example: **https<area>://myorganization.com:4443/dvls**