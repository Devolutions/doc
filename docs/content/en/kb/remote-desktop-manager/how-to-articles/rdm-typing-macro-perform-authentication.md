---
eleventyComputed:
  title: "{{ en.RDM }} typing macro to perform authentication"
---
With {{ en.RDM }}, it is possible to send credentials through a typing macro using variables.

1. Open the ***Properties*** of a ***Website*** session entry. In the left menu, make sure you are in ***Common – General***.
1. Click the ***Login*** tab to access the ***Settings*** section.
1. Check the ***Autofill login*** box and uncheck the ***Auto submit*** box.  
![!!KB4835](https://webdevolutions.azureedge.net/docs/en/kb/KB4835.png)
1. In the left menu, navigate to the ***Security – Security Settings*** section.
1. Under ***Password***, check the ***Allow password in variable*** option box. This option needs to be checked so that the typing macro can send the password to the remote session.  
{% snippet icon.badgeCaution %}
If the option is greyed out, you need to activate ***Allow password variables for all entries*** and ***Allow password variable in macros*** in ***Administration – System Settings – Password Policy***.  

Also, if you are using the ***Linked ({{ en.VLT }})*** credential mode in your entry, you will need to enable the ***Allow password in variable*** option in the linked credential entry as well.
{% endsnippet %}  

![!!KB4836](https://webdevolutions.azureedge.net/docs/en/kb/KB4836.png)  

6. In the left menu, navigate to ***Connection – Events***.
1. Click on the ***After Open*** tab. In the ***Typing macro*** section, paste the following: $USERNAME${TAB}$PASSWORD${ENTER}.  
![!!KB4837](https://webdevolutions.azureedge.net/docs/en/kb/KB4837.png)
1. Click ***OK*** to save.
