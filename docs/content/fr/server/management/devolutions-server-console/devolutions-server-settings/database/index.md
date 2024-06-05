---
eleventyComputed:
  title: Base de données
  description: La section de l'onglet Base de données contient les informations du serveur SQL, les informations des identifiants SQL, et le nom de la base de données utilisée par {{ fr.DVLS }}.
  order: 20
---
La section de l'onglet ***Base de données*** contient les informations du serveur SQL, les informations des identifiants SQL, et le nom de la base de données utilisée par {{ fr.DVLS }}.

![Paramètres du serveur – Base de données](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8002.png)

## Paramètres

### Base de données

| Option                | Description                                                                                                                            |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Hôte                  | Nom de l'hôte où la base de données sera stockée.                                                                                     |
| Base de données       | Nom de la base de données sur le serveur.                                                                                             |
| Paramètres avancés    | Accéder aux [Paramètres avancés](/server/management/devolutions-server-console/devolutions-server-settings/database/advanced-settings/).|
| Tester le serveur     | Tester la connexion avec le serveur pour valider si les informations appropriées ont été fournies.                                     |
| Tester la base de données | Tester la connexion avec la base de données pour valider si les informations appropriées ont été fournies.                           |
| Mettre à jour la base de données | Mettre à jour la base de données sur le serveur.                                                                                      |
| Sauvegarder le schéma | Sauvegarder le schéma de la base de données dans un fichier pour permettre de l'envoyer à notre [équipe de support](mailto:service@devolutions.net).|
| Voir la version de la base de données | Voir quelle est la version actuelle de la base de données.                                                                            |

### Identifiants

{% snippet, "badgeInfo" %}
Notez que les paramètres de Sécurité intégrée ou d'Identifiants affectent la manière dont le {{ fr.DVLS }} communique avec la base de données SQL. Ces options n'ont aucun impact sur la manière dont les utilisateurs s'authentifieront sur l'instance {{ fr.DVLS }}.
{% endsnippet %}

| Option               | Description                                                                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type d'authentification  | Sélectionner entre ***Authentification Windows*** ou ***Authentification Serveur SQL*** pour s'authentifier à la base de données. Pour que [l'Authentification Windows](/server/kb/how-to-articles/configure-server-use-domain-sso/) soit utilisée pour se connecter à la base de données, vous devez définir un compte de domaine comme identité du Pool d'applications dans le gestionnaire IIS.                                                                                                                                                    |
| Nom d'utilisateur             | Nom d'utilisateur du compte de connexion SQL si l'Authentification SQL est sélectionnée comme type d'authentification.                                   |
| Mot de passe             | Mot de passe du compte de connexion SQL si l'Authentification SQL est sélectionnée comme type d'authentification.                                        |
| Identifiants avancés | Accéder aux [Identifiants avancés](/server/management/devolutions-server-console/devolutions-server-settings/database/advanced-credentials/) qui permettent au {{ fr.DVLSCONSOLE }} de communiquer avec la base de données SQL.                                                                                                                    |
