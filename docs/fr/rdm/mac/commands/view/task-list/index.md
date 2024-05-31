---
eleventyComputed:
  title: Liste des tâches
  description: Créer une Liste des Tâches pour suivre le travail à réaliser par l'équipe.
---
Créer une ***Liste des Tâches*** pour suivre le travail à réaliser par l'équipe. Activer le volet ***Liste des Tâches*** dans l'onglet ***Affichage***.
![Bouton Liste des Tâches](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0016.png)

Effectuer une recherche pour filtrer la liste des tâches affichées. Il est possible de rechercher par ***Date d'Échéance***, ***Statut***, ou ***Nom d'Utilisateur***.

{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible pour les sources de données suivantes : [{{ fr.DVLS }}](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/server/), [Azure SQL](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/), [SQL Server](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/), et [SQLite](/rdm/mac/data-sources/data-sources-types/sqlite/).
{% endsnippet %}

![Liste des Tâches](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0017.png)

### Créer une tâche

1. Cliquer sur ***Nouveau*** pour ouvrir la fenêtre ***Gestion des Tâches***.
![Bouton Nouveau](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0018.png)
1. Saisir les informations de la tâche, comme le nom de la tâche, la priorité, la date d'échéance, la description, etc.
![Gestion des Tâches](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2146.png)

| OPTION        | DESCRIPTION                                                                                                                     |
|---------------|---------------------------------------------------------------------------------------------------------------------------------|
| Nom           | Saisir un nom personnalisé pour la tâche.                                                                                      |
| Entrée        | Affiche l'entrée actuellement sélectionnée dans le ***{{ fr.NPANE }}***. La tâche est assignée à cette entrée. C'est un champ en lecture seule. |
| Priorité      | Définir la priorité de la tâche (de 0 à 100).                                                                                  |
| Date d'échéance | Définir une date limite pour la tâche.                                                                                         |
| Date de création | La date et l'heure de création de cette tâche.                                                                                 |
| Description   | Saisir une description de la tâche pour l'utilisateur assigné.                                                                |
| Utilisateur   | Assigner un utilisateur à la tâche.                                                                                            |
| Utilisateur actuel | Cliquer sur ce bouton pour s'assigner la tâche.                                                                                |
| Statut        | Définir un statut pour la tâche. Sélectionner parmi les suivants :<ul><li>Assignée</li><li>Annulée</li><li>Fermée</li> <li>Terminée</li><li>En cours</li><li>Ouverte</li><li>Reportée</li></ul> |
| Commentaire   | Saisir un commentaire pour la tâche.                                                                                           |
