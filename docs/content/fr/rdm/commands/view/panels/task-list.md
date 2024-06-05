---
eleventyComputed:
  title: Liste des tâches
  description: Créer une Liste des Tâches pour suivre le travail à réaliser par l'équipe. Basculer le volet Liste des Tâches dans Affichage – Panneaux – Liste des Tâches.
---
Créer une ***Liste des Tâches*** pour suivre le travail à réaliser par l'équipe. Basculer le volet ***Liste des Tâches*** dans ***Affichage – Panneaux – Liste des Tâches***.
![Bouton Liste des Tâches](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2058.png)

Effectuer une recherche pour filtrer la liste des tâches affichées. Rechercher par ***Date d'Échéance***, ***Statut***, ou ***Nom d'Utilisateur***.

{% snippet, "badgeInfo" %}
Cette fonctionnalité est uniquement disponible pour les sources de données suivantes : [{{ fr.DVLS }}](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/server/), [Azure SQL](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-azure-sql/), [SQL Server](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/), et [SQLite](/rdm/windows/data-sources/data-sources-types/sqlite/).
{% endsnippet %}

![Liste des Tâches](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11269.png)

### Créer une tâche

1. Cliquer sur ***Ajouter*** pour ouvrir la fenêtre ***Gestion des Tâches***.
![Bouton Ajouter](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10247.png)
1. Saisir les informations de votre tâche, comme le nom de la tâche, la priorité, la date d'échéance, la description, etc.
![Gestion des Tâches](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10248.png)

| OPTION   | DESCRIPTION                                                   |
|----------|---------------------------------------------------------------|
| Nom                    | Saisir un nom personnalisé pour la tâche.                                                                                                                                                                                                       |
| Entrée                   | Affiche l'entrée actuellement sélectionnée dans le ***{{ fr.NPANE }}***. La tâche est assignée à cette entrée. C'est un champ en lecture seule.   |
| Priorité                | Définir la priorité de la tâche (de 0 à 100).                                                                                                                                                                                                       |
| Date d'échéance                | Définir une échéance pour la tâche.                                                                                                                                                                                                       |
| Description             | Saisir une description de la tâche pour l'utilisateur assigné.                                                                                                                                                                                                       |
| Utilisateur                    | Assigner un utilisateur à la tâche.                                                                                                                                                                                                       |
| M'assigner cette tâche  | Cliquer sur ce bouton pour s'assigner la tâche.                                                                                                                                                                                                   |
| Supprimer                  | Effacer l'utilisateur assigné.                                                                                                                                                                                                       |
| Statut                  | Définir un statut pour la tâche. Sélectionner parmi les suivants : <ul><li>Ouverte<li>Assignée</li><li>En cours</li><li>Fermée</li><li>Terminée</li><li>Annulée</li><li>Reportée</li></ul>|
| Commentaire                 | Saisir un commentaire pour la tâche.                                                                                                                                                                                                       |
