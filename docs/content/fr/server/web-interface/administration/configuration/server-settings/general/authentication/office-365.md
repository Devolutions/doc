---
eleventyComputed:
  title: Authentification Microsoft avec {{ fr.DVLS }}
  keywords:
  - Rôles
---
{% snippet, "badgeInfo" %}
Un abonnement à Microsoft Azure Active Directory est requis pour configurer l'authentification Office365 dans {{ fr.DVLS }}. Une nouvelle inscription d'application est nécessaire dans Microsoft Azure Active Directory avant de compléter les paramètres d'authentification. Pour plus d'informations sur les inscriptions d'applications, voir [guide de configuration du portail Azure pour l'authentification Microsoft](/server/kb/how-to-articles/azure-portal-configuration-guide-microsoft-authentication/).
{% endsnippet %}

L'onglet ***Authentification Microsoft*** permet à {{ fr.DVLS }} d'authentifier les utilisateurs en utilisant l'authentification Office365. Les champs ***Nom d'affichage***, ***ID de locataire***, ***ID client*** et ***Valeur secrète*** sont obligatoires.
![Authentification - Configurer l'authentification Microsoft](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0022.png)

## Paramètres

### Paramètres
| Option          | Description                                                                                        |
|-----------------|----------------------------------------------------------------------------------------------------|
| Nom d'affichage    | Le nom affiché pour cette configuration                                                          |
| ID de locataire       | L'ID de locataire est l'ID de répertoire de l'Active Directory Azure                                     |
| ID client       | ID d'application de l'application Azure AD                                                         |
| Utiliser un ID client spécifique pour les caches des utilisateurs et des groupes d'utilisateurs | Utiliser uniquement si le secret est dans une autre application Azure |
| Valeur secrète    | Secret généré dans Azure                                                                          |
| Type d'interaction utilisateur lors de la connexion | ***Automatique*** : Choisir la méthode la plus appropriée pour le contexte<br>***Sélectionner un compte*** : Toujours afficher la sélection de compte<br>***Aucun*** : Connexion silencieuse uniquement, l'utilisateur doit être connecté via une autre application du fournisseur<br>***Connexion*** : Force l'utilisateur à se connecter au fournisseur à chaque fois |
| Tester la connexion | Tester la connexion avec les paramètres actuels                                                   |

### Création automatique d'utilisateur
| Option                     | Description                         |
|----------------------------|-------------------------------------|
| Créer automatiquement lors du premier login | Crée un utilisateur lors du premier login |
| Type d'utilisateur                  | Choisir entre ***Utilisateur*** et ***Utilisateur en lecture seule*** (disponible uniquement lorsque ***Créer automatiquement lors du premier login*** est activé) |
| Uniquement de ce groupe       | Seuls les utilisateurs de ce groupe seront créés lors du premier login (disponible uniquement lorsque ***Créer automatiquement lors du premier login*** est activé) |


### Cache des utilisateurs et des groupes d'utilisateurs pour l'authentification Microsoft
{% snippet, "badgeInfo" %}
Il est recommandé de désactiver la fonctionnalité de cache, car le mode hybride est plus efficace. Par défaut, l'option est déjà désactivée.
{% endsnippet %}

| Option            | Description                                                                                              |
|-------------------|----------------------------------------------------------------------------------------------------------|
| Activer la fonctionnalité de cache | Si activé : Met les utilisateurs, les groupes et les liens entre eux dans la base de données<br>Si désactivé : Mode hybride |
| Récurrence        | ***Intervalle*** : Met à jour les données des utilisateurs et des groupes d'utilisateurs à des intervalles de temps (heures et minutes)<br>***Quotidien*** : Met à jour les données des utilisateurs et des groupes d'utilisateurs tous les jours à l'heure définie |

