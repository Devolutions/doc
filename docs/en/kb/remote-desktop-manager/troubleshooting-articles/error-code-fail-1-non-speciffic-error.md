---
eleventyComputed:
  title: Error code FAIL (-1) non specific error
  keywords:
  - (-1)
  - FAIL
---
In version 2020.3.12.0 and higher of {{ en.RDM }} an error message when opening a ssh connection can appear: "An unexpected error has occurred: Error code FAIL (-1) non specific error".
## Solution  
{% snippet icon.badgeCaution %}
{{ en.RDM }} has now a selection of algorithms for the SSH session type. Please note that the unsecured ones are not enabled by default. We therefore recommend that you check the algorithms directly on your server for security purpose. Otherwise, you can follow the steps below to resolve this issue.
{% endsnippet %}  

In the ***Advanced*** tab of your session, set the ***Algorithm support*** option to ***Custom*** and check the missing one(s) in the list.  
![!!KB4653](https://webdevolutions.azureedge.net/docs/en/kb/KB4653.png)  
{% snippet icon.badgeCaution %}
{{ en.RDM }} might need to be restarted for the solutions to take effect.
{% endsnippet %}  

It is also possible to globally reactivate all the algorithms in {{ en.RDM }} via the ***File - Options - Types - Terminal - Algorithm support*** menu.  
![!!KB4654](https://webdevolutions.azureedge.net/docs/en/kb/KB4654.png)
If you are still unable to connect after enabling the algorithm, go into the entry ***Properties - Advanced*** tab and check the ***Skip environment variable setup***.  
![!!KB4702](https://webdevolutions.azureedge.net/docs/en/kb/KB4702.png)
