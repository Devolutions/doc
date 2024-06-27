---
eleventyComputed:
  title: Créer des rapports planifiés
  description: Créer des rapports planifiés pour s'exécuter automatiquement et gérer qui reçoit les données de votre {{ fr.DVLS }} et quand.
---
Créer des ***rapports planifiés*** pour s'exécuter automatiquement et gérer qui reçoit les données de votre {{ fr.DVLS }} et quand.
{% snippet, "badgeCaution" %}
Pour que cette fonctionnalité fonctionne, il est obligatoire d'activer le [***Service de planification***](/server/kb/knowledge-base/scheduler-service-general-information/) dans l'onglet ***Companions*** de la {{ fr.DVLSCONSOLE }}.
{% endsnippet %}

### Créer un rapport planifié
1. Aller à ***Rapports – Rapports planifiés***.
1. Cliquer sur le bouton ***Ajouter***.
![Ajouter un rapport planifié](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp4077.png)
1. Sélectionner un type de rapport dans le menu déroulant ***Général***.
{% snippet, "badgeInfo" %}
Les options disponibles après la sélection du rapport varieront d'un rapport à l'autre.
{% endsnippet %}

![Paramètres du rapport](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8134.png)

| Options de rapport                    | Description                                                                                  |
|---------------------------------------|----------------------------------------------------------------------------------------------|
| Général                               | Sélectionner le type de [rapports](server/web-interface/reports/) qui sera généré.<ul><li>Journal d'administration</li><li>Journal d'activité</li><li>Journal de base de données</li><li>Liste des entrées expirées</li><li>Tentatives de connexion</li><li>Historique de connexion</li><li>Dernière connexion</li><li>Accès privilégié – Rotation de mot de passe</li></ul> |
| Exécuter le rapport en tant qu'administrateur | Exécutera le rapport avec des privilèges d'administrateur.                                     |
| Destinataires                         | Sélectionner tous les comptes d'utilisateur du {{ fr.DVLS }} qui recevront le rapport.       |
| Adresse courriel                      | Si ***Exécuter le rapport en tant qu'administrateur*** est activé, une adresse courriel personnalisée doit être fournie. |
| Titre                                 | Définir le titre du rapport.                                                                   |
| Date/heure de début                   | Définir la date et l'heure de création du rapport.                                             |
| Ne pas envoyer lorsque le rapport est vide | Le rapport ne sera pas envoyé aux destinataires si le rapport ne contient aucune donnée.      |

4. Ajouter des filtres et définir la récurrence du rapport.
{% snippet, "badgeInfo" %}
Les options de filtre disponibles après la sélection du rapport varieront d'un rapport à l'autre.
{% endsnippet %}

![Paramètres d'événement et de récurrence](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8058.png)

| Options de filtre    | Description                                                             |
|----------------------|-------------------------------------------------------------------------|
| Date                 | Sélectionner une plage de dates pour les données.                       |
| Message              | Choisir des messages spécifiques ou un type d'échec pour affiner le rapport. |
| {{ fr.VLT_MAJ }}     | Sélectionner tous les {{ fr.VLT }}s ou des {{ fr.VLT }}s spécifiques.   |
| Filtre               | Entrer une expression pour correspondre aux champs du rapport sélectionné. Il s'agit d'un filtre de texte (pas un filtre personnalisé) qui recherche le texte spécifié dans certains champs de rapport tels que le nom de l'entrée, le nom du {{ fr.VLT }} de l'entrée, le nom du dossier de l'entrée, les messages du journal, et le nom/nom d'utilisateur de l'utilisateur qui a créé le journal. |


| Options de récurrence | Description                          |
|-----------------------|--------------------------------------|
| Récurrence            | Aucune, Quotidienne, Hebdomadaire, Mensuelle, Annuelle |
| Chaque                | Définir le nombre de récurrences.    |
| Fin                   | Définir quand le rapport planifié se terminera.<br><ul><li>Fin par : Définir cette option et la date pour arrêter le rapport à un moment spécifique.</li><li>Fin après : Définir cette option pour exécuter ce rapport un nombre spécifique de fois.</li><li>Pas de date de fin : Définir cette option pour exécuter le rapport indéfiniment.</li></ul> |

5. Cliquer sur ***Enregistrer***.