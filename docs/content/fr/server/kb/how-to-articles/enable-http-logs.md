---
eleventyComputed:
  title: Activer les journaux HTTP de {{ fr.DVLS }}
  description: Les journaux HTTP dans {{ fr.DVLS }} aident à suivre les requêtes et les réponses HTTP, ainsi que d'autres propriétés communes.
---
Les journaux HTTP dans {{ fr.DVLS }} aident à suivre les requêtes et les réponses HTTP, ainsi que d'autres propriétés communes.

Pour activer les journaux HTTP, [les fichiers journaux de {{ fr.DVLS }} doivent d'abord être activés dans la {{ fr.DVLSCONSOLE }}](https://docs.devolutions.net/server/kb/how-to-articles/enable-server-log4net-log/). Une fois cela fait, aller dans **C:\inetpub\wwwroot\dvls**, ouvrir **appsettings.json**, et changer la ligne ***"Devolutions": "Information"*** en ***"Devolutions": "Debug"***.

![fichier appsettings.json](https://cdnweb.devolutions.net/docs/INTERFACE4040.png)

Les requêtes HTTP devraient ensuite être enregistrées dans le fichier **DPS_Main.log** situé dans **C:\inetpub\wwwroot\dvls\App_Data**.

![fichier DPS_Main.log](https://cdnweb.devolutions.net/docs/INTERFACE4039.png)

{% snippet, "badgeCaution" %}
Notez que l'activation des journaux HTTP peut réduire les performances. À utiliser avec précaution.
{% endsnippet %}