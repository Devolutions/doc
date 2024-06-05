---
eleventyComputed:
  title: Performance
  description: Aller dans Fichier – Paramètres – Performance pour contrôler le comportement de l'application par rapport à la performance.
---
Aller dans ***Fichier – Paramètres – Performance*** pour contrôler le comportement de l'application par rapport à la performance.
![Fichier – Paramètres – Performance](https://cdnweb.devolutions.net/docs/RDMW4004_2024_1.png)

## Paramètres

### Performance - Général

 OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|------------------------------------------------------------------------------------------------|
| Désactiver toutes les images Gravatar                | Désactiver toutes les images Gravatar pour améliorer la performance de l'application.                                |
| Désactiver les images personnalisées                      | Désactiver le chargement de toutes les images personnalisées dans l'arborescence. Trop d'images personnalisées pourraient augmenter considérablement la taille de la source de données et augmenter en même temps le temps de chargement. |  
| Désactiver le cache des favicônes                      | Désactiver le cache des favicônes et forcer {{ fr.RDM }} à toujours récupérer la favicône depuis le web. Il n'est pas recommandé de désactiver cette fonctionnalité pour des raisons de performance.  |
| Désactiver les images Gravatar dans la gestion des utilisateurs | Désactiver la récupération des Gravatar dans Administration – Utilisateurs pour améliorer la performance de l'application. |

### Autres Options

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Moteur hors ligne              | Vous pouvez choisir votre moteur hors ligne entre MCDF v2.0 (par défaut), SQLite (déprécié), ou MCDF (déprécié). Ne changez cette option que sur demande d'un technicien de support Devolutions. |
| Accélération matérielle       | Sélectionner dans la liste déroulante comment {{ fr.RDM }} va gérer l'accélération matérielle :<ul><li>Par défaut (Automatique) : Le rendu graphique est entièrement laissé au système d'exploitation.</li><li>Désactivé (GDI+) : L'accélération matérielle est désactivée de force.</li><li>DirectX : L'accélération matérielle est activée de force. Le rendu graphique est effectué par la carte graphique. La performance est accélérée dans certains cas, ce qui est souvent nécessaire pour les hautes résolutions.<li>Ce paramètre ne doit pas être modifié sauf s'il y a des problèmes de performance de l'UI.</li></ul> |
| Optimiser la performance de l'UI     | Optimiser l'interface utilisateur pour de meilleures performances.                                          |
| Délai de rafraîchissement de l'arbre des connexions ouvertes | Définir le délai de rafraîchissement pour l'arbre des connexions ouvertes.                              |
