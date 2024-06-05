---
eleventyComputed:
  title: Authentification
  description: La section Authentification vous permet de configurer comment vos utilisateurs se connecteront à votre hub.
---
La section ***Authentification*** permet de configurer comment vos utilisateurs se connecteront à votre hub.

{% snippet, "badgeHelp" %}
Pour des instructions complètes sur comment configurer l'Authentification Unique (SSO) avec votre Hub, voir [Commencer avec le SSO dans {{ fr.DHUBB }}](/hub/getting-started/get-started-sso-hub-business/).
{% endsnippet %}

## Général

Dans la section ***Général***, vous pouvez activer les paramètres de connexion pour vos utilisateurs.
![Administration – Authentification – Général](https://cdnweb.devolutions.net/docs/HUBB2009_2024_1.png)
| Option                                                        | Description                                                                                          |
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| Forcer l'invite de connexion                                   | Enforce une invite de connexion pour tous les utilisateurs. Si les utilisateurs ont configuré leur vérification en deux étapes dans leur {{ fr.DA }}, cela ne demandera que la vérification en deux étapes.                                                                                                                             |
| Imposer la vérification en deux étapes sur {{ fr.DA }}        | Oblige tous les utilisateurs à configurer une vérification multi-facteurs sur leur {{ fr.DA }}.      |
| Imposer l'appariement de numéros via les notifications push {{ fr.WAPPS }} | Active l'A2F avec appariement de numéros pour tous les utilisateurs de ce hub avec notre {{ fr.WAPPS }}.                       |
| Temps de déconnexion pour inactivité                           | Déconnecte les utilisateurs après une durée d'inactivité définie, allant de 5 minutes à 4 heures (sauf si désactivé). |

{% snippet, "badgeCaution" %}
Les paramètres ***Imposer la vérification en deux étapes sur {{ fr.DA }}*** et ***Imposer l'appariement de numéros via les notifications push {{ fr.WAPPS }}*** ne s'appliquent pas aux utilisateurs qui se connectent avec l'Authentification Unique (SSO).
{% endsnippet %}

## Domaine

{% snippet, "badgeHelp" %}
Pour les instructions complètes de vérification de domaine et de configuration SSO, visitez [Commencer avec le SSO dans {{ fr.DHUBB }}](/hub/getting-started/get-started-sso-hub-business/).
{% endsnippet %}

Vérifiez vos domaines pour l'authentification unique. Plusieurs domaines peuvent être vérifiés dans une seule configuration SSO. C'est obligatoire car cela nous permet de vérifier la propriété des domaines fournis.

![Administration – Authentification – Domaine](https://cdnweb.devolutions.net/docs/HUBB2010_2024_1.png)

Dans une fenêtre séparée, connectez-vous à votre hébergeur de domaine et trouvez vos enregistrements DNS. Créez et enregistrez un nouvel enregistrement TXT en utilisant les informations fournies ci-dessous.

![Information sur le domaine](https://cdnweb.devolutions.net/docs/HUBB2011_2024_1.png)

Vous saurez que votre domaine a été vérifié avec succès lorsque son statut passe de ***En attente*** à ***Vérifié***, comme indiqué par une icône de coche dans un cercle vert, comme vu ci-dessous.

![Domaine vérifié](https://cdnweb.devolutions.net/docs/HUBB2012_2024_1.png)

## Authentification Unique (SSO)

{% snippet, "badgeHelp" %}
Pour les instructions complètes de configuration SSO, visitez [Commencer avec le SSO dans {{ fr.DHUB }}](/hub/getting-started/get-started-sso-hub-business/).
{% endsnippet %}

Vous avez accès à la section ***Authentification Unique (SSO)*** pour configurer le SSO pour vos utilisateurs {{ fr.DHUB }}. Commencez par sélectionner le gestionnaire d'identité de votre choix entre Microsoft et Okta.
![Administration – Authentification – Authentification Unique (SSO)](https://cdnweb.devolutions.net/docs/HUBB2013_2024_1.png)

Vous devez ensuite entrer certaines informations comme vu ci-dessous.

![Information SSO (exemple avec Microsoft Azure)](https://cdnweb.devolutions.net/docs/HUBB2014_2024_1.png)

Par défaut, le SSO sera activé une fois que vous aurez terminé sa configuration. Vous pouvez également ***Forcer le SSO sur tous les utilisateurs***.

{% snippet, "badgeWarning" %}
Si vous activez ***Forcer le SSO sur tous les utilisateurs***, les utilisateurs n'auront pas accès à {{ fr.DHUBB }} en cas de mauvaise configuration ou de panne de votre fournisseur SSO. Nous recommandons fortement d'informer tous les utilisateurs existants dans votre {{ fr.DHUBB }} de cette nouvelle méthode d'authentification avant de l'activer.
{% endsnippet %}

![SSO actif (exemple avec Microsoft Azure)](https://cdnweb.devolutions.net/docs/HUBB2015_2024_1.png)

Après la configuration du SSO, les utilisateurs pourront alors se connecter à votre Hub en utilisant leurs identifiants Azure AD ou Okta en plus de pouvoir le faire avec leurs identifiants {{ fr.DA }}.

Après avoir configuré et enregistré vos paramètres SSO, il est toujours possible de les modifier ou même de les supprimer.

## Provisionnement

{% snippet, "badgeInfo" %}
Le provisionnement des utilisateurs et des groupes d'utilisateurs est actuellement disponible uniquement avec Microsoft Azure AD.
{% endsnippet %}

Synchronisez et automatisez le processus de provisionnement et de déprovisionnement de vos utilisateurs et groupes {{ fr.DHUB }} en configurant votre fournisseur d'identité avec votre hub en utilisant la spécification SCIM (System for Cross-domain Identity Management) sous vos configurations d'IdP (Identity Provider).

Vos [domaines](#domaine) doivent être vérifiés et [l'Authentification Unique](#authentification-unique-sso) doit d'abord être configurée et activée pour configurer le provisionnement. Pour les instructions complètes de configuration du provisionnement, visitez [Commencer avec le SSO dans {{ fr.DHUBB }}](/hub/getting-started/get-started-sso-hub-business/).

![Administration – Authentification – Provisionnement](https://cdnweb.devolutions.net/docs/HUBB2016_2024_1.png)

## Service de Chiffrement
Le service de chiffrement de {{ fr.DHUB }} simplifie l'accès à votre Hub en éliminant la nécessité d'inviter individuellement chaque utilisateur de votre fournisseur SSO. Vous devez activer la fonctionnalité et entrer l'***URL du service de chiffrement***, qui est l'endroit où le service de chiffrement écoutera les demandes entrantes. Cette URL ou adresse IP doit uniquement être accessible par les clients se connectant en utilisant le service de chiffrement.

Voir [Service de chiffrement](/hub/web-interface/administration/configuration-security/authentication/encryption-service/) pour une liste des exigences et des guides de configuration.

![Activer le Service de Chiffrement](https://cdnweb.devolutions.net/docs/HUBB2366_2024_1.png)
