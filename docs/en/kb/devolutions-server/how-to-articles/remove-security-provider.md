---
title: Remove Security Provider
---
{% snippet icon.badgeNotice %}
For any question or for assistance with this procedure, contact us at [service@devolutions.net](mailto:service@devolutions.net).
{% endsnippet %}

The Security Provider was implemented in older {{ en.DVLS }} versions and is no longer considered as secure per the explanation at the beginning of this blog article [Update on {{ en.DVLS }} Security Provider Deprecation](https://blog.devolutions.net/2020/02/update-on-devolutions-password-server-security-provider-deprecation).

The following procedure explains how to remove the Security Provider and implement the Encryption at REST using the encryption keys.

## Steps

1. Ensure no users are connected to the {{ en.DVLS }} data source or the {{ en.DVLS }} web interface. It is possible to verify and disconnect all users in Reports - Connected User List on the {{ en.DVLS }} web interface.
1. Switch the {{ en.DVLS }} instance to offline with the ***Go Offline*** button on the {{ en.DVLSCONSOLE }}  
![Go Offline.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8046.png)
1. If the Scheduler is installed, please uninstall it from the {{ en.DVLSCONSOLE }} in the Companions tab. Please note that if a service account is configured to run the Scheduler service, ensure to have the service account's password to reinstall it at the end of the procedure.  
![Uninstall the Scheduler](https://webdevolutions.azureedge.net/docs/en/kb/KB8083.png)
1. Backup the {{ en.DVLS }} web application folder. Or if possible, take a snapshot of the virtual machine were {{ en.DVLS }} is hosted.
1. Make a full database backup.
1. Go in ***Tools*** menu of the {{ en.DVLSCONSOLE }} and click on ***Remove Security Provider*** button.  
![Remove Security Provider.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8047.png)  
![!!KB8048.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8048.png)  
![!!KB8049.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8049.png)
1. Switch the {{ en.DVLS }} instance to online mode using the Go Online button.  
![Go Online.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8050.png)
1. Once completed, verify that the data is available like the entries' configuration, passwords, etc. Verify the documents or attachments that exist in the database.  
{% snippet icon.badgeInfo %}
If {{ en.DVLS }} is installed in a Load Balancing/High Availability topology, only remove the Security Provider on one node. Then refresh the other nodes to notice that the Security Provider has been removed.
{% endsnippet %}  

9. On success, switch the instance to offline mode, make another database backup and a snapshot of the virtual machine were {{ en.DVLS }} is hosted. If for any reason, any of the next steps fails, a backup will be available to get back at this step instead of starting back to the beginning.
{% snippet icon.badgeInfo %}
If the Activate Encryption at Rest button is not visible in the Tools menu, please jump to step 13.
{% endsnippet %}  

10. Again, go in the Tools menu of the {{ en.DVLSCONSOLE }} and click on the Activate Encryption At Rest button. This step is to properly encrypt the data in the SQL database.  
![Activate Encryption At Rest.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8051.png)
11. Once completed, export the Encryption Keys. Ensure to save that file and the password in a secure place for being able to build another {{ en.DVLS }} instance connected to the same SQL database. Without those encryption keys, it is impossible to access to the data.
{% snippet icon.badgeCaution %}
We recommend to not store the encryption keys file and its password in your {{ en.DVLS }} instance
{% endsnippet %}  

![Export Encryption Keys.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8052.png)  
![!!KB8053.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8053.png)
1. Once completed, verify again if the entries, the documents and the attachments are available.  
1. If the Scheduler service has been uninstalled on step 3, install it back from the {{ en.DVLSCONSOLE }} in the Companions tab.  
![Install the Scheduler.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8084.png)
1. On success, one last database backup and virtual machine snapshot can be done.
{start="12"}
{% snippet icon.badgeInfo %}
If {{ en.DVLS }} is installed in a Load Balancing/High Availability topology, refresh the {{ en.DVLSCONSOLE }} and import the Encryption Keys to ensure to use the same on every node.
{% endsnippet %}
