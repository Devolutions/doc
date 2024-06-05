---
eleventyComputed:
  title: Nettoyer les journaux
---
La fonctionnalité ***Nettoyer les journaux*** permettra d'archiver les journaux disponibles dans la base de données qui sont plus anciens que la période sélectionnée. Elle peut également supprimer ces journaux archivés en fonction de la limite de temps sélectionnée dans les paramètres.
![Nettoyer les journaux](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8160.png)

## Nettoyer les journaux
| Option                                | Description                                                                         |
|---------------------------------------|-------------------------------------------------------------------------------------|
| Activer le nettoyage automatique              | Activer la fonction de nettoyage automatique des journaux pour archiver et supprimer automatiquement les journaux. |
| Exécuter tous les jours à                      | Définir l'heure à laquelle la fonction sera exécutée. |
| Utiliser l'archivage                         | Si activé, la tâche archivera et supprimera les journaux en fonction de la période sélectionnée dans les deux listes déroulantes. |
| Archiver les journaux plus anciens que               | Archivera les journaux qui sont plus anciens que la valeur sélectionnée dans la liste déroulante.<ul><li>Personnalisé</li><li>Un mois</li><li>Trois mois</li><li>Six mois</li><li>Un an</li></ul> |
| Supprimer les journaux archivés plus anciens que       | Supprimera tous les journaux archivés qui sont plus anciens que la valeur sélectionnée dans la liste déroulante.<ul><li>Trois mois</li><li>Six mois</li><li>Un an</li><li>Deux ans</li></ul> |
| Ignorer l'archivage et supprimer définitivement | Si activé, n'archivera pas les journaux et les supprimera définitivement.              |
| Supprimer les journaux plus anciens que                | Supprimera définitivement tous les journaux plus anciens que la valeur sélectionnée dans la liste déroulante.<ul><li>Personnalisé</li><li>Un mois</li><li>Trois mois</li><li>Six mois</li><li>Un an</li><li>Deux ans</li></ul> |
| Avancé                              | La configuration [Avancée](/server/web-interface/administration/logs/cleanup-logs/advanced-cleanup-logs-configuration/) est destinée à configurer l'archivage et la suppression des opérations sur chaque type de journaux. |
