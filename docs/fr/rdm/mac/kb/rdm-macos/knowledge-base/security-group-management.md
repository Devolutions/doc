---
eleventyComputed:
  title: Gestion des groupes de sécurité (Hérité)
  description: Les groupes de sécurité sont utilisés pour protéger les sessions d'un sous-ensemble d'utilisateurs du système.
---
{% snippet, "badgeWarning" %}
Les groupes de sécurité hérités ont été dépréciés et seront complètement supprimés à partir de la version 2023.3 de {{ fr.RDM }}. Voir [Migrer des groupes de sécurité vers les groupes d'utilisateurs](/rdm/mac/kb/rdm-windows/how-to-articles/migration-security-groups-user-groups/).
{% endsnippet %}

La gestion des groupes de sécurité est disponible dans ***Administration – Groupes de sécurité***. Elle nécessite une [source de données avancée](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/).

Les groupes de sécurité sont utilisés pour protéger les sessions d'un sous-ensemble d'utilisateurs du système. Assigner des sessions à des groupes de sécurité puis contrôler qui a accès et quel niveau de contrôle ils ont sur chaque groupe de sécurité.

Les groupes de sécurité sont utilisés pour classer les sessions et restreindre l'accès à certains utilisateurs. Il n'y a pas de relation directe entre Active Directory et les groupes de sécurité. Par défaut, chaque session est créée sans groupe de sécurité assigné, et est donc visible par tous les utilisateurs connectés.

Chaque entrée dans le ***{{ fr.NPANE }}*** peut être assignée à un seul groupe de sécurité. Les meilleures pratiques dictent que vous assigniez des groupes de sécurité à des groupes/dossiers de manière à ce que toutes les entrées qu'ils contiennent héritent du même groupe de sécurité.

Les groupes de sécurité sont utilisés pour protéger les sessions d'un sous-ensemble d'utilisateurs du système. Assigner des sessions à des groupes de sécurité puis contrôler qui a accès et quel niveau de contrôle ils ont sur chaque groupe de sécurité.
![Administration – Groupes de Sécurité](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10392.png)

{% snippet, "shieldWarning" %}
Toutes les sessions sans groupes de sécurité sont considérées comme publiques, ce qui signifie que toute personne ayant accès à la Source de Données pourra voir toutes vos entrées.
{% endsnippet %}

## Créer un groupe de sécurité

Les groupes de sécurité sont créés dans ***Administration – Groupes de sécurité***. Ils nécessitent une [source de données avancée](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/).

Les groupes de sécurité de {{ fr.RDM }} sont des conteneurs pour les sessions, pas pour les utilisateurs. Les dossiers sont étroitement liés aux groupes de sécurité, donc il y a un chevauchement dans l'utilisation. Les points clés sont :

* La sécurité est héritée : les éléments et dossiers enfants sont couverts par le groupe de sécurité d'un dossier parent.
* La sécurité est additive : un groupe de sécurité ajouté à un sous-dossier ne remplace pas le parent, il s'ajoute à celui-ci.
* Un dossier a un seul Groupe de Sécurité : utiliser des Raccourcis pour contourner cette limitation.

1. Cliquer sur le plus pour créer un nouveau groupe de sécurité.
![Groupes de sécurité – Ajouter](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10393.png)
1. Une boîte de dialogue de gestion des groupes de sécurité apparaîtra. Entrer un nom et une courte description de votre nouveau groupe de sécurité.
![Dialogue de Gestion de Sécurité](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10394.png)
1. Assigner les [permissions](/rdm/mac/commands/administration/user-management/permissions/) appropriées pour chaque utilisateur pour votre groupe de sécurité nouvellement créé.
![Droits du groupe de sécurité](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10395.png)
1. Les groupes de sécurité peuvent ensuite être assignés aux entrées en utilisant la fenêtre des propriétés. Chaque entrée ne peut avoir qu'un seul groupe de sécurité assigné. Pour une maintenance facile, nous recommandons d'assigner des groupes de sécurité à des groupes/dossiers, ce qui aura pour résultat que les entrées enfants héritent du groupe de sécurité.
![Groupe de sécurité de session](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10445.png)
