---
eleventyComputed:
  title: Rapports
  description: La section Rapports génère automatiquement des rapports détaillant l'utilisation de {{ fr.RDM }} liée aux entrées, actifs expirés, mots de passe, sécurité et utilisateurs.
---
La section ***Rapports*** génère automatiquement des rapports détaillant l'utilisation de {{ fr.RDM }} liée aux ***entrées***, ***actifs expirés***, ***mots de passe***, ***sécurité***, et ***utilisateurs***. Vous avez l'option d'exporter votre rapport généré, ainsi que d'exécuter et d'exporter des rapports via une ligne de commande.

{% snippet, "badgeInfo" %}
La fonctionnalité de journaux nécessite une [Source de Données Avancée](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
{% endsnippet %}

{% snippet, "badgeInfo" %}
Les rapports basés sur le Web de [{{ fr.DVLS }}](/server/overview/what-is-server/) et [{{ fr.DHUB }}](/hub/overview/what-is-hub/) sont disponibles dans {{ fr.RDM }}.
{% endsnippet %}

![Rapports](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6205.png)

| OPTION               | DESCRIPTION |
|----------------------|-------------|
| Journaux d'Activité        | Ouvre les [***Journaux d'Activité***](/rdm/windows/commands/reports/activity-logs/), une solution de journalisation robuste. Avec cette fonctionnalité, il est possible de surveiller une session ouverte pour tous les utilisateurs utilisant des [Sources de Données Avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/). |
| Journaux d'Administration  | Ouvre les ***Journaux d'Administration***. |
| Journaux de Source de Données     | Ouvre les ***Journaux de Source de Données***. |
| Analyseur de Sécurité d'Entrée | Ouvre l'[***Analyseur de Sécurité d'Entrée***](/rdm/windows/commands/reports/entry-security-analyzer/), qui évalue la force des entrées stockées dans la source de données. |
| Analyseur de Mot de Passe    | Ouvre l'***Analyseur de Mot de Passe***, évaluant la force des mots de passe stockés dans la source de données. |
| Tableau de Bord de Sécurité   | Ouvre le [***Tableau de Bord de Sécurité***](/rdm/kb/rdm-windows/knowledge-base/rdm-security-dashboard/), un outil offrant des conseils sur comment améliorer la sécurité de la plateforme {{ fr.RDM }} et également des astuces pour réduire la charge de travail des administrateurs. |
| Plus de Rapports         | Ouvre la fenêtre ***Rapports***. |


![Fenêtre Rapports](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6197.png)

Depuis cette fenêtre, vous pouvez parcourir et sélectionner une grande variété de Types de Rapports. Explorez selon vos envies.

Une fois généré, un rapport vous fournira toutes les informations que vous avez sélectionnées durant cette étape. Ces résultats finaux peuvent prendre différentes formes et avoir différentes fonctionnalités (telles que l'édition d'une entrée spécifique ou l'impression du résultat) selon ce que le rapport est réellement.

Ces journaux sont encore restreints par les droits des utilisateurs. Un utilisateur avec un accès restreint ne serait pas capable de sélectionner Mot de Passe et Sécurité par exemple.

