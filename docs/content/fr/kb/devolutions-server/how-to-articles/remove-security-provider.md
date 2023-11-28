---
eleventyComputed:
  title: Remove the security provider
  description: The following procedure explains how to remove the Security Provider and implement the encryption at rest using the encryption keys.
---
{% snippet icon.badgeNotice %}
For any question or for assistance with this procedure, contact us at [service@devolutions.net](mailto:service@devolutions.net).
{% endsnippet %}

The Security Provider was implemented in earlier {{ en.DVLS }} versions. It was deprecated in {{ en.DVLS }} version 2019.2.9.0. It is no longer considered as secure as mentioned in [Update on {{ en.DVLS }} Security Provider deprecation](https://blog.devolutions.net/2020/02/update-on-devolutions-password-server-security-provider-deprecation).

The following procedure explains how to remove the Security Provider and implement the encryption at rest using the encryption keys.

1. Ensure that no user is connected to the {{ en.DVLS }} data source or to the {{ en.DVLS }} web interface. It is possible to verify and disconnect all users in ***Reports – Connected User List*** in the {{ en.DVLS }} web interface.
1. Switch the {{ en.DVLS }} instance to offline with the ***Go Offline*** button in the ***Server*** tab of the {{ en.DVLSCONSOLE }}.  
![Go Offline](https://webdevolutions.azureedge.net/docs/en/kb/KB8046.png)
1. If the scheduler is installed, uninstall it from the {{ en.DVLSCONSOLE }} in ***Companions – Scheduler Service – Uninstall***. If a service account is configured to run the scheduler service, make sure you have the service account's password to reinstall it at the end of the procedure.  
![Uninstall the scheduler](https://webdevolutions.azureedge.net/docs/en/kb/KB8083.png)
1. Back up the {{ en.DVLS }} web application folder or, if possible, take a screenshot of the virtual machine where {{ en.DVLS }} is hosted.
1. Make a full database backup.
1. In the ***Tools*** menu of the {{ en.DVLSCONSOLE }}, click on ***Remove Security Provider***.  
![Remove Security Provider](https://webdevolutions.azureedge.net/docs/en/kb/KB8047.png)  
1. Click ***Yes*** when prompted to confirm the removal of the Security Provider.
![Confirmation message](https://webdevolutions.azureedge.net/docs/en/kb/KB8048.png)  
1. The security provider was successfully removed. Click ***OK*** to close the window.
![Removed successfully](https://webdevolutions.azureedge.net/docs/en/kb/KB8049.png)
1. Switch the {{ en.DVLS }} instance to online mode using ***Go Online*** in the ***Server*** tab of the {{ en.DVLSCONSOLE }}.  
![Go Online](https://webdevolutions.azureedge.net/docs/en/kb/KB8050.png)
1. Once completed, verify that the data is available (entries' configuration, passwords, etc.). Verify the documents or attachments that exist in the database.  
   {% snippet icon.badgeInfo %}
   If {{ en.DVLS }} is installed in a load balancing / high availability topology, only remove the Security Provider on one node. Then, refresh the other nodes to notice that the Security Provider has been removed.
   {% endsnippet %}  

1. On success, switch the instance to offline mode, make another database backup, and a screenshot of the virtual machine where {{ en.DVLS }} is hosted. If for any reason, any of the next steps fail, a backup will be available to get back to this step instead of starting over.
   {% snippet icon.badgeInfo %}
   If the ***Activate Encryption at Rest*** button is not visible in ***Tools***, it means that it is already enabled. In that case, please jump to step 15.
   {% endsnippet %}  

1. Go in ***Tools*** in the {{ en.DVLSCONSOLE }}, then click on ***Activate Encryption At Rest***. This step is essential to properly encrypt the data in the SQL database.  
![Activate Encryption At Rest](https://webdevolutions.azureedge.net/docs/en/kb/KB8051.png)
1. Once completed, export the Encryption Keys. Make sure to save that file and the password in a secure place to be able to build another {{ en.DVLS }} instance connected to the same SQL database. Without those encryption keys, it is impossible to access the data.
   {% snippet icon.badgeCaution %}
   We recommend not to store the encryption keys file and its password in your {{ en.DVLS }} instance.
   {% endsnippet %}  

   ![Export encryption keys](https://webdevolutions.azureedge.net/docs/en/kb/KB8052.png)  
   ![Filename and File password](https://webdevolutions.azureedge.net/docs/en/kb/KB8053.png)  

1. Once completed, verify again if the entries, documents, and attachments are available.  
1. If the scheduler service has been uninstalled in step 3, install it back from the {{ en.DVLSCONSOLE }} in the ***Companions*** tab.  
![Install the scheduler](https://webdevolutions.azureedge.net/docs/en/kb/KB8084.png)
1. On success, one last database backup and virtual machine screenshot can be done.  
   {% snippet icon.badgeInfo %}
   If {{ en.DVLS }} is installed in a load balancing / high availability topology, refresh the {{ en.DVLSCONSOLE }} and import the encryption keys to ensure using the same on every node.
   {% endsnippet %}
