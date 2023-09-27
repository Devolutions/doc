---
eleventyComputed:
  title: Unable to use the $PASSWORD$ variable
---
When used as part of a ***Typing macro***, the $PASSWORD$ variable might not retrieve the password and instead send the variable as is. This is a security feature that is enabled by default, but it can be disabled.
## Solution
Follow the steps below to be able to use passwords in variables:
1. In {{ en.RDM }}, right-click on your entry and select ***Properties***.
1. In the left menu, navigate to ***Security – Security Settings***.
1. Under the ***Password*** section, check the ***Allow password in variable*** option box.  
{% snippet icon.badgeCaution %}
If the option is greyed out, you need to activate ***Allow password variables for all entries*** and ***Allow password variable in macros*** in ***Administration – System Settings – Password Policy***.
Also, if you are using the ***Linked ({{ en.VLT }})*** credential mode in your entry, you will need to enable the ***Allow password in variable*** option in the linked credential entry as well.
{% endsnippet %}  

![!!KB2130](https://webdevolutions.azureedge.net/docs/en/kb/KB2130.png)
4. Click ***OK*** to save your changes.  

You can now use the $PASSWORD$ variable in your macros.

Permission wise, to be able to use the $PASSWORD$ variable, the "View", "Connect (Execute)", and "View Passwords" permissions must be granted. If using a Privileged account (PAM in Devolutions Server), the Operator permission (or above) must also be granted in the PAM vault.
