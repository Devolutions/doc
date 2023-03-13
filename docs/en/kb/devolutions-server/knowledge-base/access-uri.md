---
title: Access URI
---
{% snippet icon.badgeCaution %}
This issue is related to upgrading from a version prior to 2022.1 to 2022.2.
{% endsnippet %}

During the upgrade process or the installation process of {{ en.DPS }} , we must provide an Access URI. This URI is a redirect URL that is used by the OAuth system and redirects the authentication traffic to the Access URI.

## settings

1. In the {{ en.DPS }} console go to ***Server - Edit - IIS***.
1. Enter the ***Access URI*** in the text field following the format provided in the Scenarios.  

{% snippet icon.badgeNotice %}
The Access URI is case sensitive and must respect the certificate host name. Ensure that there is no '/' at the end of the URL.
{% endsnippet %}

{% snippet icon.badgeInfo %}
There can be more than one Access URI. Click the ellipsis button to add or manage additional ***Access URI***
{% endsnippet %}  

![Server - Edit - ISS.png](/img/en/kb/KB5020.png)
1. Click ***OK***.
{start="3"}

## Scenarios

Multiple format can be set and you must choose the right one.

1. The {{ en.DPS }} instance is available only internally and is hosted on one server. Then the Access URI should be set with the FQDN of the machine and ends with the {{ en.DPS }} IIS Application if it is not installed on the root of the web site.  
https<area>://myservername.mydomain.loc/dvls
1. The {{ en.DPS }} instance is available externally on the web or behind a Load Balanced environment. Then the Access URI should be set with the URL you use to reach the instance from internet.  
https<area>://myorganisation.com/dvls
1. If {{ en.DPS }} is installed at the root of the IIS web site, then the Access URI should only be the FQDN of the machine.  
https<area>://myorganization.com
