---
eleventyComputed:
  title: Identifiants avancés
  description: Les identifiants avancés sont utilisés pour permettre à {{ fr.DVLS }} de communiquer avec la base de données SQL.
  keywords:
  - Rôles
---
Les ***Identifiants Avancés*** sont utilisés pour permettre à {{ fr.DVLS }} de communiquer avec la base de données SQL.

{% snippet, "badgeCaution" %}
Seuls les comptes de connexion SQL peuvent être configurés manuellement. Avec le ***Type d'authentification*** défini sur ***Authentification Windows***, les comptes sont automatiquement récupérés depuis le ***Service Planificateur*** et l'identité du pool d'applications IIS.
{% endsnippet %}

Pour plus d'informations sur ces comptes, veuillez consulter [Enquête sur les comptes avant déploiement](/server/kb/knowledge-base/pre-deployment-account-survey/).

![Dialogue des identifiants avancés](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8168.png)

## Paramètres

| Option                  | Description                                                                                                                                           |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Outils de gestion       | Identifiants permettant à la {{ fr.DVLSCONSOLE }} de communiquer avec la base de données SQL. Doit être un compte SQL.                                         |
| Service Planificateur   | Identifiants utilisés pour les fonctionnalités du Service Planificateur (Gestionnaire de sauvegarde, Notifications par courriel, Messagerie sécurisée, Cache des utilisateurs et groupes de domaine, Cache Azure AD). Doit être un compte SQL. Si l'option Sécurité intégrée est activée, les champs Nom d'utilisateur et Mot de passe sont grisés.                                                 |
| Application Web         | Identifiants utilisés pour que l'Application Web communique avec la base de données SQL. Doit être un compte SQL. Si l'option Sécurité intégrée est activée, les champs Nom d'utilisateur et Mot de passe sont grisés.                                                                                                                                  |
| Tester la connexion     | Teste contre le serveur SQL les identifiants définis dans les champs Nom d'utilisateur/Mot de passe. Si l'option Sécurité intégrée est activée, le bouton est grisé.                                                                                                                                                                              |
| Appliquer les moindres permissions | Exécutera une instruction SQL pour accorder les moindres permissions sur la base de données pour les comptes du Service Planificateur ou de l'Application Web.                   |
| Générer le script       | Générera un script SQL qui peut être exécuté sur la base de données SQL pour les comptes du Service Planificateur ou de l'Application Web. Disponible uniquement avec l'Authentification Windows.                                                                                                                                                                   |
