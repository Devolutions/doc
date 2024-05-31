---
eleventyComputed:
  title: PingOne
  description: En intégrant PingOne avec {{ fr.RDM }}, les organisations peuvent tirer parti de ces fonctionnalités de sécurité robustes directement au sein de leur environnement de gestion de bureau à distance.
---
PingOne, une solution renommée de gestion des identités et des accès (IAM) basée sur le nuage fournie par Ping Identity, offre des capacités de connexion unique sécurisée (SSO), d'authentification multifacteur (AMF) et de provisionnement d'utilisateurs. En intégrant PingOne avec {{ fr.RDM }}, les organisations peuvent tirer parti de ces fonctionnalités de sécurité robustes directement au sein de leur environnement de gestion de bureau à distance.

## Applications requises

Dans PingOne, les permissions sont attribuées en fonction du type d'application. Pour un ***travailleur***, les permissions proviennent de rôles prédéfinis, tandis que les permissions pour tous les autres types d'applications proviennent directement de l'utilisateur. Pour PingOne, nous avons besoin de ***deux applications*** contrairement à Azure ou Okta.

## Application travailleur

Cette application est utilisée pour trouver des utilisateurs et des groupes à partir de l'annuaire.

![Application travailleur](https://cdnweb.devolutions.net/docs/DVLS6062_2024_1.png)

### Rôles requis

Les rôles ***Administrateur d'environnement*** et ***Administrateur d'identité*** sont requis.

![Rôles requis](https://cdnweb.devolutions.net/docs/DVLS6059_2024_1.png)

### Paramètres de configuration requis

Voici les paramètres de configuration requis dans PingOne.

![{{ fr.DVLS }} Travailleur – Modifier la configuration](https://cdnweb.devolutions.net/docs/DVLS6061_2024_1.png)

### Application d'authentification

Voici les paramètres de configuration requis pour l'application utilisée pour authentifier un utilisateur dans notre système en utilisant leur identité PingOne. Les paramètres de configuration requis se trouvent dans l'onglet ***Vue d'ensemble***.

{% snippet, "badgeInfo" %}
L'URL de base pour l'application travailleur est ***api.pingone.[com, ca, eu, asia]/v1***. Notez que l'URL dépend de l'endroit où PingOne est déployé.
{% endsnippet %}

![{{ fr.DVLS }} Authentification – Modifier la configuration](https://cdnweb.devolutions.net/docs/DVLS6063_2024_1.png)

![{{ fr.DVLS }} Authentification – Modifier la configuration](https://cdnweb.devolutions.net/docs/DVLS6064_2024_1.png)

## Paramètres d'authentification PingOne dans {{ fr.DVLS }}

Dans l'interface web de {{ fr.DVLS }}, aller à ***Administration – Paramètres du serveur – Authentification***. Cocher ***Authentifier avec l'utilisateur PingOne*** et cliquer sur ***Authentification PingOne***.

![Authentification – Authentifier avec l'utilisateur PingOne – Authentification PingOne](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6118.png)

Voici une description des paramètres d'authentification pour PingOne dans {{ fr.DVLS }}.

![Paramètres d'authentification PingOne](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6119.png)

### Général

| PARAMÈTRES          | DESCRIPTION                                                                                        |
|-----------------|----------------------------------------------------------------------------------------------------|
| ***Nom affiché***            | Le nom affiché dans le tableau de bord PingOne pour identifier une application ou une ressource.                     |
| ***ID d'environnement***          | Un identifiant unique attribué par PingOne pour différencier les environnements opérationnels spécifiques (par exemple, développement, test, production).     |

### Configuration de l'authentification
| PARAMÈTRES          | DESCRIPTION                                                                                        |
|-----------------|----------------------------------------------------------------------------------------------------|
| **Domaine** | Le domaine utilisé dans les processus d'authentification, reflétant souvent le domaine internet principal de l'organisation, pour identifier l'organisation dans PingOne. |
| ***ID Client*** | Un identifiant unique fourni par PingOne pour une application, facilitant l'authentification OAuth 2.0 en la distinguant des autres.             |
| ***Secret Client*** | Une clé secrète donnée par PingOne, utilisée avec l'ID Client pour l'authentification OAuth 2.0, assurant un accès sécurisé à l'application.                |

### Synchroniser les utilisateurs et les groupes
| PARAMÈTRES          | DESCRIPTION                                                                                        |
|-----------------|----------------------------------------------------------------------------------------------------|
| ***Domaine*** | Le domaine internet associé à l'organisation pour les besoins de synchronisation des utilisateurs et des groupes, typiquement le domaine de courriel de l'organisation. L'URL est ***api.pingone.[com, ca, eu, asia]/v1***. Notez que l'URL dépend de l'endroit où PingOne est déployé.   |
| ***ID Client*** | Un identifiant pour l'application ou le service utilisé par PingOne pour gérer les processus de synchronisation des utilisateurs et des groupes.                            |
|***Secret Client*** | Une clé secrète utilisée avec l'ID Client pour synchroniser de manière sécurisée les utilisateurs et les groupes entre les services d'annuaire de l'organisation et PingOne.         |
| ***Tester la connexion*** | Tester et vérifier que les paramètres de synchronisation des utilisateurs et des groupes sont correctement configurés et opérationnels avec PingOne.       |

### Création automatique d'utilisateur
| PARAMÈTRES          | DESCRIPTION                                                                                        |
|-----------------|----------------------------------------------------------------------------------------------------|
| ***Créer automatiquement lors du premier login*** | Active la création automatique de comptes d'utilisateurs dans PingOne lorsqu'ils se connectent pour la première fois.   |
|***Type d'utilisateur*** | Spécifie le rôle ou les permissions pour les utilisateurs créés automatiquement lors de leur premier login, affectant leur accès au sein de l'écosystème PingOne.  |
|***Uniquement de ce groupe*** |  Limite la création automatique de comptes d'utilisateurs aux individus qui sont membres d'un groupe particulier.   |
