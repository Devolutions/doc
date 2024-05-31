---
eleventyComputed:
  title: Arrêter la mise en cache des utilisateurs et des groupes d'utilisateurs.
  keywords:
  - Cache
  - Authentification Microsoft
---
Lors de la création ou de la mise à jour des informations des utilisateurs et des groupes dans Azure AD, la mise à jour du ***cache des utilisateurs et des groupes d'authentification Microsoft*** dans {{ fr.DVLS }} peut prendre plus d'un jour si le locataire Azure AD contient un grand nombre d'utilisateurs et de groupes.

Lors de la création d'une nouvelle instance {{ fr.DVLS }} avec la version 2023.1 ou ultérieure, lors de l'activation de l'authentification Microsoft, l'option est désactivée par défaut afin que les utilisateurs et les groupes puissent être importés sans attendre la mise à jour du cache. Le cache est activé par défaut dans la version 2022.3 ou inférieure, et peut être désactivé suite à une mise à niveau vers la version 2023.1 ou supérieure.

## Étapes

Pour que {{ fr.DVLS }} interagisse directement avec Azure AD sans compter sur son ***cache des utilisateurs et des groupes d'authentification Microsoft***, désactiver l'option ***Activer la fonctionnalité de cache*** dans ***Administration – Paramètres du serveur – Authentification – Authentification Microsoft***.
![!!KB8121](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8121.png)
