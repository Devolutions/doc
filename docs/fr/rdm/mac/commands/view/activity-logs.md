---
eleventyComputed:
  title: Journaux d'activité
---
***Journaux d'activité*** offrent une solution de journalisation robuste. Avec cette fonctionnalité, il est possible de surveiller une session ouverte pour tous les utilisateurs utilisant les [Sources de Données Avancées](/rdm/mac/data-sources/data-sources-types/advanced-data-sources/). Le journal est disponible dans l'onglet ***Affichage***.
![Bouton Journaux d'Activité](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0040.png)

{% snippet, "badgeInfo" %}
Selon les permissions de chaque utilisateur, il se peut qu'ils n'aient accès qu'aux ***Journaux de Connexion Locaux***.
{% endsnippet %}

### Recherche
Toutes les activités dans la source de données sont automatiquement affichées lors de l'ouverture des ***Journaux d'activité*** sans avoir à appliquer de paramètres. Cependant, des champs de recherche sont disponibles et peuvent être utiles lorsqu'il y a de nombreuses entrées d'activité. Les résultats peuvent être affinés en spécifiant la ***Date*** ou une période personnalisée, le ***Nom d'utilisateur***, le ***Message***, l'***Hôte***, le ***Dossier***, le ***Commentaire à l'ouverture*** et le ***Commentaire à la fermeture***. Il est également possible de choisir entre ***Heure Locale***, ***Heure Originale*** et ***Heure UTC*** et de rechercher dans tous les {{ fr.VLT }}s ou dans le {{ fr.VLT }} actuel uniquement. Lorsque tous les critères ont été choisis, le bouton ***Recherche*** les appliquera aux résultats.
![Champs de Recherche des Journaux d'Activité](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0041.png)

### Journaux

Le journal contient toutes les opérations CRUD (ajouter, éditer et supprimer), les mots de passe consultés, les identifiants utilisés par d'autres sessions, etc. Il est possible de cliquer avec le bouton droit sur une entrée pour accéder à plus d'options.
![Journaux](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac0042.png)

Les informations disponibles pour chaque ligne d'activité sont présentées dans le tableau suivant.

| OPTION           | DESCRIPTION |
|------------------|-------------|
| Dossier          | Indique le dossier où votre entrée est située. |
| Connexion        | Indique la connexion utilisée pour ouvrir votre entrée. |
| Message          | Indique l'action qui a été exécutée sur votre entrée ou session. |
| Commentaire à l'Ouverture | Le ***Commentaire à l'Ouverture*** est défini dans l'onglet ***Journal*** de votre session. |
| Date du Journal  | Indique la date et l'heure d'ouverture de votre session ou de l'édition de votre entrée. |
| Date/Heure de Fin| Indique la date et l'heure de fermeture de votre session ou entrée. |
| Temps Actif      | Cette information est uniquement disponible pour les sessions en mode intégré. Le temps actif de votre session, c'est-à-dire le temps pendant lequel votre session était ouverte en mode intégré et le temps pendant lequel vous étiez actif sur votre session, sera enregistré. Si votre session est ouverte, mais que vous êtes sur l'onglet ***Tableau de Bord***, par exemple, et non sur votre onglet de session, aucun temps actif ne sera enregistré. |
| Durée            | Cette information est uniquement disponible pour les sessions en mode intégré. Lorsque les sessions sont ouvertes en mode intégré, la durée de la session sera enregistrée. Cela signifie que même si vous êtes sur l'onglet ***Tableau de Bord***, par exemple, et que vous ne travaillez pas activement dans votre session, mais que votre onglet de session est ouvert, la durée de la session sera enregistrée. |
| Commentaire à la Fermeture | Le ***Commentaire à la Fermeture*** est défini dans l'onglet ***Journal*** de votre session. |
| Utilisateur      | Indique le nom de l'utilisateur connecté. |
| Utilisateur de la Machine | Indique l'utilisateur de la machine. |
| Hôte             | Indique le nom de l'ordinateur hôte ou l'IP. |
| Type de Connexion| Indique le type de connexion qui a été utilisé. |
