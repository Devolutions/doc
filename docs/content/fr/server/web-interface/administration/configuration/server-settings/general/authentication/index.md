---
eleventyComputed:
  title: Authentification
  description: La section Authentification permet à l'administrateur de sélectionner les types d'authentification qui seront utilisés pour se connecter sur {{ fr.DVLS }}.
  order: 10
---
{% snippet, "badgeCaution" %}
L'authentification SQL sera activée après la migration. Il ne sera cependant pas possible de créer des utilisateurs avec ce type d'authentification. L'objectif est uniquement de soutenir la migration et il est conseillé de désactiver l'authentification SQL une fois tous les utilisateurs migrés.
{% endsnippet %}

La section Authentification permet à l'administrateur de sélectionner les types d'authentification qui seront utilisés pour se connecter sur {{ fr.DVLS }}.
![Administration – Paramètres du serveur – Authentification](https://cdnweb.devolutions.net/docs/DVLS6006_2024_1.png)

## Paramètres

### Modes d'Authentification
{% snippet, "badgeCaution" %}
La machine hébergeant {{ fr.DVLS }} doit être jointe au domaine configuré pour que l'authentification Windows fonctionne.
{% endsnippet %}

| Option                               | Description                                  |
|--------------------------------------|----------------------------------------------|
| S'authentifier avec un utilisateur de domaine | Le domaine est utilisé pour authentifier l'utilisateur. |
| S'authentifier avec un utilisateur Microsoft  | AzureAD est utilisé pour authentifier l'utilisateur.    |
| S'authentifier avec un utilisateur Okta       | Okta est utilisé pour authentifier l'utilisateur.       |
| S'authentifier avec un utilisateur PingOne    | PingOne est utilisé pour authentifier l'utilisateur.    |
| S'authentifier avec un utilisateur {{ fr.DVLS }} | Le {{ fr.DVLS }} est utilisé pour authentifier l'utilisateur. Vous devez créer l'utilisateur initial via la {{ fr.DVLSCONSOLE }}. |
| Méthode d'authentification principale         | En sélectionnant une méthode d'authentification principale, les utilisateurs qui n'ont pas déjà un choix personnalisé de type d'authentification pour la page de connexion seront automatiquement dirigés vers la méthode choisie. |
| Authentification unique de domaine (SSO)  | [L'authentification unique de domaine (SSO)](/server/kb/how-to-articles/configure-windows-authentication/) nécessite une configuration supplémentaire sur votre serveur IIS. |
| Activer l'authentification par code d'urgence | L'application enverra un courriel contenant un code d'urgence pour authentifier si aucune des méthodes d'authentification ci-dessus ne fonctionne. Le paramètre [Courriel](/server/web-interface/administration/configuration/server-settings/general/email/) est requis pour que cette option fonctionne. |

### Configuration
| Option                   | Description              |
|--------------------------|--------------------------|
| Domaine                  | Configurer le type [Domaine](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/). |
| Authentification Microsoft                | Configurer le type [Office365](/server/web-interface/administration/configuration/server-settings/general/authentication/office-365/). |
| Authentification Okta                     | Configurer le type Okta. |
| Authentification PingOne                  | Configurer le type [PingOne](/server/web-interface/administration/configuration/server-settings/general/authentication/pingone/). |
| Migration d'authentification | Migrer la méthode d'authentification du compte utilisateur existant vers une autre méthode d'authentification ou un autre domaine dans Active Directory ou Azure Active Directory. |

