---
eleventyComputed:
  title: Approve checkout
  description: The request checkout feature allows users to request a temporary checkout for a specific entry.
---
{% snippet, "badgeNotice" %}
A license is required to enable the Privileged Access Management (PAM) module. Please contact our [sales department](mailto:sales@devolutions.net) for more information about the license.
{% endsnippet %}

The request checkout feature allows users to request a temporary checkout for a specific entry. The approver must then approve or deny the checkout request.

## View checkout requests

To view all your past and current checkout requests, go to ***Administration – Privileged access –  Checkouts***. You can see all your temporary access requests and sort them by ***Privilege account, Requested By, Approver, Status, Ticket, Reason, Start Time, End time, and Duration***. 

Checkout requests are also displayed in the ***PAM check outs*** box below.

![PAM check outs](https://cdnweb.devolutions.net/docs/DVLS6010_2023_3.png)

## Approve/Checkout requests

The duration of checkout begins when the request is approved.

The view is divided between two section:

* The top section contains information about the user's request. You can also see who is reviewing the request. Because this was done on the user's side, fields in this section cannot be edited. 

* The ***Awaiting approval*** section allows you to change the checkout access duration specified by the user. It is possible to write a message to the user explaining your decision, but it remains optional. 
Click ***Approve*** or ***Deny*** to approve or deny the request.
![Check-out Pending window](https://cdnweb.devolutions.net/docs/DVLS6009_2023_3.png)  
You can also assign the review to another approver by clicking ***Assign Review*** (white arrow next to Approve). A confirmation window appears, prompting you to confirm if you want to assign a new reviewer.  
![Confirmation window](https://cdnweb.devolutions.net/docs/DVLS6007_2023_3.png)
Choose the ***reviewer*** and click ***select***. 
![Select Reviewer](https://cdnweb.devolutions.net/docs/DVLS6008_2023_3.png)

## Cancel Checkout request

After approval, for any reason, you may revoke the user's checkout access by going back to ***Administration – Privileged access –  Checkouts*** and clicking on ***View request detail*** (eye icon) – ***Cancel request***. Be sure you want to do this first, since to regain access to the entry, they will need to make another request. Otherwise, their access will end within the set time frame.

![Cancel request](https://cdnweb.devolutions.net/docs/DVLS6013_2023_3.png)
