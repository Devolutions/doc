---
eleventyComputed:
  title: Mes identifiants personnels
---
La fonction ***Mes identifiants personnels*** est une seule entrée d'identifiants qui est stockée localement sur votre ordinateur dans votre profil Windows.

Il est généralement utilisé pour conserver les informations d'identification Windows pour vos sessions en cours d'exécution, car {{ fr.RDM }} ne peut pas y accéder. Si vous ne pouvez pas utiliser la sécurité intégrée, vous devez stocker vos identifiants dans ***Mes identifiants personnels***.

Cela vous permet de centraliser une information d'identifiant spécial pour remplacer ou émuler celles de votre session Windows. Lorsqu'un changement de mot de passe est nécessaire, il vous suffit de le modifier une fois dans ***Mes identifiants personnels***.

{% snippet, "badgeInfo" %}
Si vous souhaitez modifier le type d'identifiant, accéder à **%LOCALAPPDATA%** (par défaut) ou **%APPDATA%** (services Terminal Server) \ Devolutions \ RemoteDesktopManager et supprimer le fichier **Credentials.rdt** pour le réinitialiser.
{% endsnippet %}

![Mes identifiants personnels](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip10269.png)

***Mes identifiants personnels*** peuvent être sélectionnés dans vos entrées sous ***Identifiants***.
![Identifiants - Mes identifiants personnels](https://cdnweb.devolutions.net/docs/fr/rdm/windows/clip11293.png)
