---
eleventyComputed:
  title: Désactiver la sécurité héritée dans {{ fr.RDM }}
  status: Sujet disponible en langue allemande
  description: Ce sujet démontre comment désactiver en toute sécurité la sécurité héritée dans {{ fr.RDM }} pour utiliser les permissions à la place.
  keywords:
  - Sécurité Héritée
  - Permissions
---
{% snippet, "badgeWarning" %}
La sécurité héritée et les groupes de sécurité ont été dépréciés et seront complètement supprimés à partir de la version 2023.3 de {{ fr.RDM }}.

Avant de désactiver la sécurité héritée, il est conseillé de configurer les ***Groupes d'Utilisateurs***. Voir [Migrer des groupes de sécurité vers des groupes d'utilisateurs](/rdm/kb/rdm-windows/how-to-articles/migration-security-groups-user-groups/).
{% endsnippet %}

Suivre les étapes ci-dessous pour désactiver la ***Sécurité Héritée*** dans {{ fr.RDM }}.

1. Naviguer vers l'onglet ***Administration*** dans {{ fr.RDM }}.
1. Sous la section ***Paramètres***, sélectionner ***Paramètres Système***.
![Administration – Paramètres Système](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0026.png)
1. Aller à ***{{ fr.VLT_MAJ }} Management – Paramètres de Sécurité – Sécurité*** et désactiver ***Utiliser la sécurité héritée***.
![Utiliser la sécurité héritée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0027.png)
1. Cliquer sur ***Ok*** pour appliquer les changements et fermer la fenêtre.