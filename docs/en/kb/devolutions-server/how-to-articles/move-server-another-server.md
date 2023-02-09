---
eleventyComputed:
  title: How to Move {{ en.DPS }} to Another Server
---
To move the {{ en.DPS }} instance on another server, you will first need to export the Encryption keys as explained in this article: [Manage Encryption Keys](/kb/devolutions-server/how-to-articles/manage-encryption-keys/)  

Then, you need to create a new instance on the new server. Here are the steps for this part:

1. Download the same {{ en.DVLSCONSOLE }} and {{ en.DPS }} offline ZIP package version as the one used on the original server: [{{ en.DPS }} Download](https://server.devolutions.net/home/download)
1. Install the {{ en.DVLSCONSOLE }} on the new server.
1. Create a new {{ en.DPS }} instance and replicate a much as possible the web site configuration as the original server.
1. When prompted, provide the encryption keys file previously created.
1. Once completed, depending on the version you use, you will have to update the Access URI in the IIS tab of the {{ en.DPS }} settings.
1. Try to connect on the new {{ en.DPS }} instance.
1. On success, shutdown the original server.
1. Then, if you use {{ en.RDM }} , you will have to update the host parameter of the {{ en.DPS }} data source in ***File - Data Sources***  
{% snippet icon.badgeInfo %}
It is possible to disconnect the old machine from your domain and rename the new one to have the exact same machine name. In that case, no need to update the Access URI and the {{ en.DPS }} data source in {{ en.RDM }}
{% endsnippet %}  
{% snippet icon.badgeInfo %}
If you plan to migrate the SQL database on a new server, this could be completed once the {{ en.DPS }} migration is completed.
{% endsnippet %}
