---
eleventyComputed:
  title: Configuration avancée
---
La configuration ***Avancée*** permet de définir des paramètres de nettoyage individuels pour tous les différents journaux de {{ fr.DVLS }}.
![Administration – Journaux – Nettoyage des journaux](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8161.png)

## Journaux
| Rapports           | Description                                                                                                      |
|-------------------|------------------------------------------------------------------------------------------------------------------|
| Journaux de sauvegarde       | Le Journaux de sauvegarde est lié au [Gestionnaire de sauvegarde](/server/web-interface/administration/backup/backup-manager/). |
| Journaux de connexion   | Les Journaux de connexion se rapportent à toutes les opérations sur les entrées comme visualiser un mot de passe, ouvrir une entrée, etc.            |
| Tentative de connexion     | La Tentative de connexion se rapporte à tous les logins infructueux à la source de données {{ fr.DVLS }}.                           |
| Historique de connexion     | Les journaux d'Historique de connexion se rapportent à chaque utilisateur qui a été connecté au {{ fr.DVLS }}.                        |
| Journaux de messages      | Les Journaux de messages se rapportent aux journaux de la source de données de {{ fr.DVLS }}.                                                   |
| Journaux PAM          | Les Journaux PAM se rapportent à la fonctionnalité PAM de {{ fr.DVLS }}.                                                               |
| Historique des infos utilisateur | Les journaux d'Historique des infos utilisateur se rapportent à l'historique de mise à jour des comptes d'utilisateurs.                                           |

### Général
| Option                   | Description                                                                              |
|--------------------------|------------------------------------------------------------------------------------------|
| Utiliser une configuration personnalisée | Activer pour permettre de définir des paramètres spécifiques d'archivage et de suppression pour le journal sélectionné. |

### Configuration
| Option                                | Description                                                            |
|---------------------------------------|------------------------------------------------------------------------|
| Utiliser l'archivage                         | Utiliser l'opération d'archive pour nettoyer les journaux.                           |
| Archiver les journaux plus anciens que               | Archivera les journaux qui sont plus anciens que la valeur sélectionnée dans la liste déroulante.<ul><li>Personnalisé</li><li>Un mois</li><li>Trois mois</li><li>Six mois</li><li>Un an</li></ul> |
| Supprimer les journaux archivés plus anciens que       | Supprimera tous les journaux archivés qui sont plus anciens que la valeur sélectionnée dans la liste déroulante.<ul><li>Trois mois</li><li>Six mois</li><li>Un an</li><li>Deux ans</li></ul> |
| Ignorer l'archivage et supprimer définitivement | Si activé, n'archivera pas les journaux et les supprimera définitivement. |
| Supprimer les journaux plus anciens que                | Supprimera définitivement tous les journaux plus anciens que la valeur sélectionnée dans la liste déroulante.<ul><li>Personnalisé</li><li>Un mois</li><li>Trois mois</li><li>Six mois</li><li>Un an</li><li>Deux ans</li></ul> |
