---
eleventyComputed:
  title: Unable to use the $PASSWORD$ variable
  description: When used as part of a Typing macro, the $PASSWORD$ variable might not retrieve the password and instead send the variable as is. This is a security feature that is enabled by default, but can be disabled.
---
When used as part of a ***Typing macro***, the $PASSWORD$ variable might not retrieve the password and instead send the variable as is. This is a security feature that is enabled by default, but can be disabled.
## Solution
Follow the steps below to use passwords in variables:
1. In {{ en.RDM }}, right-click on your entry and select ***Properties***.
1. In the left menu, navigate to ***Security – Security Settings***.
1. Under the ***Password*** section, check the ***Allow password in variable*** option box.
   {% snippet icon.badgeInfo %}
   If the option is greyed out, you need to activate ***Allow password variables for all entries*** and ***Allow password variable in macros*** in ***Administration – System Settings – Password Policy***.
   Also, if you are using the ***Linked ({{ en.VLT }})*** credential mode in your entry, you will need to enable the ***Allow password in variable*** option in the linked credential entry as well.
   {% endsnippet %}

   ![Allow password in variable](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2130.png)
4. Click ***OK*** to save your changes.

You can now use the $PASSWORD$ variable in your macros.

{% snippet icon.badgeInfo %}
As far as permissions are concerned, to use the $PASSWORD$ variable, the ***View***, ***Connect (Execute)***, and ***View password*** permissions must be granted. If using a privileged account (PAM in {{ en.DVLS }}), the ***Operator*** permission set (or higher) must also be granted in the PAM {{ en.VLT }}.
{% endsnippet %}
