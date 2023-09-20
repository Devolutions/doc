---
  title: URLs comparing types
keywords:
- matching
---
Each URL in a ***Website*** entry has a comparing type associated to it. The comparing type determines if {{ en.DWL }} should offer the entry as an available entry to perform autofill.

{% snippet icon.badgeCaution %}
***Host*** is the default comparing type on all platforms.
{% endsnippet %}

## Base domain

Comparing type set to ***Base domain*** compares the URLs with the second-level domain plus the top-level domain. The URL https<area>://www.devolutions.net would have the base domain value devolutions.net.
Example:
* URL entry value: https<area>://www.devolutions.net
* Comparing: https<area>://devolutions.net, https<area>://forum.devolutions.net, https<area>://exemple.forum.devolutions.net, https<area>://forum.devolutions.net/#HUB
* Not comparing: https<area>://devolutions.com, https<area>://google.com

## Compare Regex with url domain

Comparing type set to ***Compare regex with URL domain*** compares only the current browser URL domain to match with a regular expression.

## Compare Regex with full url

Comparing type set to ***Compare regex with full URL*** compares the current browser URL to match with a regular expression.
Example:

* URL entry value: *?\.?devolutions\.(com|net)
* Comparing: https<area>://devolutions.com, https<area>://forum.devolutions.net, https<area>://login.devolutions.com, https<area>://server.devolutions.net
* Not comparing: http<area>://devolutions.ca, https<area>://sysadminotaur.com/

## Exact

Comparing type set to ***Exact*** requires that the current browser URL exactly match the URL entry value.
Example:

* URL entry value: https<area>://www.domain.com/index.html
* Comparing: https<area>://www.domain.com/index.html
* Not comparing: https<area>://www.domain.com http<area>://www.domain.com/page.html (not https) https<area>://www.domain.com/index.html?query=abc

## Host

Comparing type set to ***Host*** compares the URLs with the hostname plus an optional port. The URL https<area>://sub1.domain.net:5000 would have the host value sub1<area>.domain.net:5000.
Example:

* URL entry value: https<area>://sub1.domain.net:5000
* Comparing: https<area>://sub1.domain.net:5000, https<area>://sub1.domain.net:5000/index.html
* Not comparing: https<area>://domain.net, https<area>://sub2.domain.net, https<area>://domain.net, https<area>://sub1.domain.com:6000

## Never

Comparing type set to ***Never*** will never match the URL entry value.
Example:

* URL entry value: https<area>://www.devolutions.net
* Comparing: none
* Not comparing: https<area>://www.devolutions.net, https<area>://devolutions.net, https<area>://forum.devolutions.net/#HUB

## Starts with

Comparing type set to ***Starts with*** requires that the current browser URL must start with the URL entry value.
Example:

* URI starts with value: https<area>://sub.domain.com/path/
* Comparing: https<area>://sub.domain.com/path/, https<area>://sub.domain.com/path/page.html
* Not comparing: https<area>://sub.domain.com/path (missing trailing slash), https<area>://sub.domain.com, https<area>://sub.domain.com:4000/path/page.html (has a port)
