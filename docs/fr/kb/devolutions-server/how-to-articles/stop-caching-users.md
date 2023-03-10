---
title: Arrêter la mise en cache des utilisateurs et des groupes d'utilisateurs.
keywords:
- Cache
- Authentification Microsoft
---
Lors de la création ou de la mise à jour des informations sur les utilisateurs et les groupes dans Azure AD, la mise à jour du ***Cache des utilisateurs et groupes d'utilisateurs de l'authentification Microsoft*** dans {{ fr.DPS }} peut prendre plus d'une journée si un locataire Azure AD contient un nombre élevé d'utilisateurs et de groupes. 

Lors de la création d'une nouvelle instance {{ fr.DPS }} avec la version 2023.1 ou ultérieure, lors de l'activation de l'authentification Microsoft, l'option est désactivée par défaut afin que les utilisateurs et les groupes puissent être importés sans attendre la mise à jour du cache. Le cache est activé par défaut dans la version 2022.3 ou inférieure, et peut être désactivé à la suite d'une mise à niveau vers la version 2023.1 ou supérieure.

## Étapes

Pour que {{ fr.DPS }} interagisse directement avec Azure AD sans s'appuyer sur son ***Cache des utilisateurs et groupes d'utilisateurs de l'authentification Microsoft***, désactivez l'option ***Activer la fonction du cache*** dans ***Administration – Paramètres Serveur – Authentification – Authentification Microsoft***.
![KB8121.png](/img/fr/kb/KB8121.png)
