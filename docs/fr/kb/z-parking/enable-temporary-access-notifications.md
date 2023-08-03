---
eleventyComputed:
  title: Activer les notifications d'accès temporaire
  description: Activez les notifications automatiques par courriel des demandes d'accès temporaire avec {{ fr.RDM }}. Lorsqu'elles sont activées, une demande d'accès temporaire enverra une notification par courriel à l'autorisateur. L'utilisateur qui a initié la demande recevra un courriel de confirmation avec la décision de l'autorisateur.
  keywords:
  - temporary access
  - accès temporaire
  - notification
---
Activez les notifications automatiques par courriel des demandes d'accès temporaire avec {{ fr.RDM }}. Lorsqu'elles sont activées, une demande d'accès temporaire enverra une notification par courriel à l'autorisateur. L'utilisateur qui a initié la demande recevra un courriel de confirmation avec la décision de l'autorisateur.

{% snippet icon.badgeCaution %}
Cette fonctionnalité ne fonctionnera qu'en combinaison avec un courriel [{{ fr.DA }}](/fr/cloud/devolutions-account/create-devolutions-account).
{% endsnippet %}

{% snippet icon.badgeCaution %}
Cette notification est uniquement disponible pour les sources de données avancées Microsoft SQL Server et Microsoft Azure SQL.
{% endsnippet %}

## Prérequis

1. Avoir un [{{ fr.DA }}](/fr/cloud/devolutions-account/create-devolutions-account).
1. Dans {{ fr.RDM }} :
    1. Se connecter au {{ fr.DA }} dans ***Fichier – Compte Devolutions***.
    1. Définir les courriels des utilisateurs avec leur courriel {{ fr.DA }} dans ***Administration – Utilisateurs***.
1. Dans le [{{ fr.DA }}](https://portal.devolutions.com/) :
    1. [Créer une organisation](/fr/cloud/organizations/create-organization).
    1. [Inviter des utilisateurs dans l'organisation](/fr/cloud/organizations/invite-users-organization).

## Étapes

1. Dans {{ fr.RDM }}, accéder à ***Administration – Paramètres du système – Coffre***.
1. Cliquer sur ***Activer les notifications d'accès temporaire***.

![Administration – Paramètres du système – Coffre – Activer les notifications d'accès temporaire](https://webdevolutions.azureedge.net/docs/fr/kb/KB2085.png)

3. Cliquer sur ***OK*** pour fermer la fenêtre, puis sauvegarder les changements.
