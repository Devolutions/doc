---
eleventyComputed:
  title: Mes informations d'identification personnelles
  keywords:
  - Service Terminal
---
{% youtube 'FtSlp_TVAxE?si=O85mqPUZRZGAyTui&amp;start=380' %}

La fonctionnalité ***Mes informations d'identification personnelles*** est une entrée d'identifiants unique qui est stockée localement sur votre ordinateur dans votre profil Windows ou dans la base de données.

Elle est généralement utilisée pour conserver les identifiants Windows pour vos sessions en cours car {{ fr.RDM }} ne peut pas y accéder. Si vous ne pouvez pas utiliser la sécurité intégrée, alors vous devez stocker vos identifiants dans ***Mes informations d'identification personnelles***.

Cela vous permet de centraliser un identifiant spécial pour remplacer ou émuler ceux de votre session Windows. Lorsqu'un changement de mot de passe est nécessaire, vous avez simplement besoin de le changer une fois dans ***Mes informations d'identification personnelles***.

{% snippet, "badgeInfo" %}
Si vous souhaitez changer le type d'identifiant, aller dans **%LOCALAPPDATA%** (Par défaut) ou **%APPDATA%** (Services Bureau à distance)
**\Devolutions\RemoteDesktopManager** et supprimer le fichier **Credentials.rdt** pour le réinitialiser.
{% endsnippet %}

![Mes informations d'identification personnelles](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10269.png)

Mes informations d'identification personnelles peuvent être sélectionnées dans vos entrées sous Identifiants.
![Identifiants - Mes informations d'identification personnelles](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11293.png)
