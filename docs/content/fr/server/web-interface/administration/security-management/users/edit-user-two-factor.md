---
eleventyComputed:
  title: Authentification multifacteur
  description: Si vous définissez l'authentification à deux facteurs (A2F) comme étant Optionnelle par utilisateur dans les Paramètres du Serveur, vous devez ensuite configurer quelle méthode A2F utiliser.
---
Si vous définissez l'authentification à deux facteurs (A2F) comme [***Optionnelle par utilisateur***](/server/web-interface/administration/configuration/server-settings/security/two-factor/) dans les ***Paramètres du Serveur***, vous devez ensuite configurer quelle méthode A2F utiliser pour chaque utilisateur.

## Paramètres
1. Dans ***Administration – Utilisateurs***, éditer l'utilisateur pour lequel vous souhaitez configurer l'A2F.
1. Dans la section ***Authentification multifacteur***, sélectionner le ***Type*** d'A2F dans la liste.
![Authentification multifacteur – Type](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp7003.png)
1. Vous avez maintenant deux choix. Soit :
    * Cocher ***Configurer plus tard par l'utilisateur*** pour laisser l'utilisateur configurer lui-même son A2F lors de sa prochaine connexion à {{ fr.DVLS }}.
    ![Configurer plus tard par l'utilisateur](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2067.png)

    ou

    * Suivre les étapes pour configurer l'A2F pour l'utilisateur.
    ![Étapes de Configuration](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp7004.png)
1. Cliquer sur ***Mettre à jour*** pour sauvegarder vos changements pour cet utilisateur.
1. Répéter les étapes pour chaque utilisateur.
