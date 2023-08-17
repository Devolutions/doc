---
eleventyComputed:
  title: Create a {{ en.DVLS }} staging instance
---
In order to perform testing on an instance of {{ en.DVLS }} without altering the data in production, it becomes useful to deploy a test instance based on a copy of the instance in production.

The following steps describe how to create a test instance hosted on the same machine as the production instance.

## Steps

1. Perform a full backup of the production database.
1. Restore the database under a new name.
1. [Export the encryption keys](/kb/devolutions-server/how-to-articles/manage-encryption-keys/) from the production {{ en.DVLS }} instance if this step has not already been performed.
1. [Create a new instance](/server/installation/create-server-instance/) in the {{ en.DVLSCONSOLE }}. We recommend creating the test instance at the same version as the production instance.
1. In the database step, enter the information related to the database copy created in step 2.
1. Provide, once prompted for it, the encryption key file exported in step 3.  
![Encryption keys for existing database.png](https://webdevolutions.azureedge.net/docs/en/kb/KB8113.png)
1. When the creation is complete, make a full backup of the staging database.
1. Finally, install all the additional features to test them like the Scheduler service, the Recording Server and the {{ en.DGW }}.  

From this point on, you can perform the {{ en.DVLSCONSOLE }} upgrade and [update the test instance](/server/installation/upgrade-server/) The console is designed to support older versions of {{ en.DVLS }}.

## Moving {{ en.DVLS }} to another server

{% snippet icon.badgeNotice %}
The above instructions can be used to move the {{ en.DVLS }} instance to a new server.
{% endsnippet %}  
{% snippet icon.badgeInfo %}
It is possible to disconnect the old machine from your domain and rename the new one to have the exact same machine name. In that case, no need to update the Access URI and the {{ en.DVLS }} data source in {{ en.RDM }}
{% endsnippet %}  
{% snippet icon.badgeInfo %}
If you plan to migrate the SQL database on a new server, this could be completed once the {{ en.DVLS }} migration is completed. Once done, update the database configuration from the {{ en.DVLSCONSOLE }}.
{% endsnippet %}