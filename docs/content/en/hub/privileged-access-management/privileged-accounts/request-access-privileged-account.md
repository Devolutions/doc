---
eleventyComputed:
  title: Request access to a privileged account
  order: 10
  description: The Check-out feature allows users to request temporary access to a privileged account entry in a PAM {{ en.VLT }}. The approver must then approve or deny the request.
---
{% snippet icon.badgeInfo %}
The following topic focuses on making a check-out request from the {{ en.DHUBB }} web interface. Note that this functionality is also available in {{ en.RDM }} with {{ en.DHUBB }}, either by accessing the privileged account entry in the PAM {{ en.VLT }}, or by connecting to a linked remote session.  

You can also access the privileged account in the {{ en.DHUBB }} web interface even if you make the request in {{ en.RDM }}.
{% endsnippet %}  

{% snippet icon.badgeHelp %}
To learn how to approve or deny a request, visit [Approve access to a privileged account](/hub/privileged-access-management/privileged-accounts/approve-access-privileged-account/).
{% endsnippet %}  

The PAM ***Check-out*** feature allows users to request temporary access to a privileged account entry in a PAM {{ en.VLT }}. The approver must then approve or deny the request.

## Privileged account check-out request

{% snippet icon.badgeInfo %}
The duration of the access begins when the request is approved.
{% endsnippet %}  

Follow the steps below to learn how to make a check-out request:

1. In the ***{{ en.VLT_MAJ }}*** tab, select the PAM {{ en.VLT }} using the selector.
1. Select the privileged account entry you want to access, then click on ***Check Out***.

   {% snippet icon.badgeInfo %}
   Using the buttons to copy and view the password also opens the same ***Check-out request*** window.
   {% endsnippet %}  

   ![Privileged account check-out](https://webdevolutions.azureedge.net/docs/en/hub/Hub2319.png)
1. In the ***Check-out request*** window, select the approver you want to send your request to using the drop-down list. You can also use the filter bar to refine your research.
![Send request to](https://webdevolutions.azureedge.net/docs/en/hub/Hub2304.png)
1. Select the ***Access duration*** in the drop-down menu.
![Access duration](https://webdevolutions.azureedge.net/docs/en/hub/Hub2305.png)
1. Write a short ***Comment*** to the approver explaining why you want access to this entry.
![Comment](https://webdevolutions.azureedge.net/docs/en/hub/Hub2310.png)
1. When you are done, click on ***Request check-out***.  

You now have to wait for the approver to respond to your request. You will be notified by email whether the answer is positive or negative. The next section details what to do once you have received a response.

## Response to your request

If your request is approved, your email will have a button at the bottom that will bring you directly to your entry in {{ en.DHUBB }}. It is also possible to manually go to your entry.
![Confirmation email](https://webdevolutions.azureedge.net/docs/en/hub/Hub2306.png)
Once you are on the entry in the PAM {{ en.VLT }}, you will see at the top that your check-out request has been approved and that the entry is already checked out by you. A check mark validates that your request was approved. Next to the check mark is the ***Time remaining*** on your request. There is also a ***View Details*** option which is described in the next section.  

Now that you can copy and view the password of this privileged account using the corresponding icons, you can perform your tasks.
![Approved check-out request](https://webdevolutions.azureedge.net/docs/en/hub/Hub2318.png)

## View details and check in the privileged account entry

***View Details*** allows you to see information about your check-out request as well as check in the entry.

In the top section, you can view the ***Requested duration*** and the ***Time remaining*** on your access. The approver can modify your access duration if necessary when approving the request.

Further down is your message and the approver's message.

Finally, you can check in your privileged account entry by clicking on ***Check In*** or by using the same button you used to check it out. When you check in the entry, the privileged account password automatically resets and the old password is rendered useless. Be sure you want to do this first, since in order to regain access to your entry, you will need to make another request. Otherwise, your access will end within the time frame set by you and the approver.

![Check-out request details and check-in](https://webdevolutions.azureedge.net/docs/en/hub/Hub2309.png)
