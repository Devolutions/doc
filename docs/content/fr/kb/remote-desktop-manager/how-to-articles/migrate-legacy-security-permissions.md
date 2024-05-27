---
eleventyComputed:
  title: Désactiver l'ancienne sécurité dans {{ fr.RDM }}
  status: Topic available in German language
  description: Cette rubrique explique comment désactiver en toute sécurité l'ancienne sécurité dans {{ fr.RDM }} pour utiliser les permissions.
  keywords:
  - Legacy Security
  - Permissions
---
{% snippet, "badgeWarning" %}
La sécurité ancienne et les groupes de sécurité ont été dépréciés et seront complètement supprimés à partir de la version 2023.3 de {{ fr.RDM }}.

Avant de migrer de l'ancienne sécurité, il est conseillé de configurer les ***Groupes d'utilisateurs*** au préalable. Voir [Migration des groupes de sécurité (anciens) vers les groupes d'utilisateurs](/fr/kb/remote-desktop-manager/how-to-articles/migration-security-groups-user-groups/).
{% endsnippet %}

Suivez les étapes ci-dessous pour migrer en toute sécurité de l'***ancienne sécurité*** vers les ***Permissions*** dans {{ fr.RDM }}.

1. Naviguer jusqu'à l'onglet ***Administration*** dans {{ fr.RDM }}.
1. Sous la section ***Paramètres***, sélectionner ***Paramètres système***.
![Administration – Paramètres système](https://cdnweb.devolutions.net/docs/fr/kb/KB2088.png)
1. Se rendre jusqu'à ***Gestion des {{ fr.VLT }}s – Paramètres de sécurité – Sécurité*** et désactiver ***Utiliser l'ancienne sécurité***.
![Utiliser l'ancienne sécurité](https://cdnweb.devolutions.net/docs/fr/kb/KB2089.png)
1. Cliquer sur ***Ok*** pour appliquer le changement et fermer la fenêtre.
