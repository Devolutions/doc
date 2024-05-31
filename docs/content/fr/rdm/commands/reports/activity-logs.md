---
eleventyComputed:
  title: Journaux d'activité
  description: Les journaux d'activité offrent une solution de journalisation robuste. Avec cette fonctionnalité, il est possible de surveiller une session ouverte pour tous les utilisateurs utilisant des Sources de Données Avancées.
---
***Journaux d'activité*** offrent une solution de journalisation robuste. Avec cette fonctionnalité, il est possible de surveiller une session ouverte pour tous les utilisateurs utilisant [Sources de Données Avancées](/rdm/windows/data-sources/data-sources-types/advanced-data-sources/).
![Journaux d'activité](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2259.png)

{% snippet, "badgeInfo" %}
Selon les permissions de chaque utilisateur, il se peut qu'ils ne puissent accéder qu'aux [***Journaux de Connexion Locaux***](/rdm/windows/commands/view/logs/).
{% endsnippet %}

### Recherche

Toutes les activités dans la source de données sont automatiquement affichées lors de l'ouverture des ***Journaux d'activité*** sans avoir à appliquer de paramètres. Cependant, des champs de recherche sont disponibles et peuvent être utiles lorsqu'il y a de nombreuses entrées d'activité. Les résultats peuvent être affinés en spécifiant la ***Date*** ou une période personnalisée, le ***Nom d'utilisateur***, le ***Message***, le ***Nom de la machine***, le ***Dossier***, le ***Commentaire à l'ouverture***, ***Commentaire à la fermeture*** et le ***Numéro de ticket***. Sélectionner ***Tous les {{ fr.VLT }}s*** pour voir les entrées de tous les autres {{ fr.VLT }}s auxquels vous avez accès. Il est également possible de choisir entre ***Heure Locale*** et ***Heure UTC*** et de rechercher dans tous les {{ fr.VLT }}s ou dans le {{ fr.VLT }} actuel uniquement. Lorsque tous les critères ont été choisis, le bouton ***Recherche*** les appliquera aux résultats.
![Champs de Recherche des Journaux d'activité](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10252.png)

### Journaux

Le journal contient toutes les opérations CRUD (ajout, modification et suppression), les mots de passe consultés, les identifiants utilisés par d'autres sessions, etc. Il est possible de cliquer avec le bouton droit sur une entrée pour accéder à plus d'options.
![Journaux](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2021.png)

Les informations disponibles pour chaque ligne d'activité sont présentées dans le tableau suivant.

| OPTION              | DESCRIPTION |
|---------------------|-------------|
| Dossier             | Indique le dossier où votre entrée est située.       |
| Connexion           | Indique la connexion utilisée pour ouvrir votre entrée. |
| {{ fr.VLT_MAJ }}    | Indique le {{ fr.VLT }} dans lequel l'action a été exécutée. |
| Message             | Indique l'action qui a été exécutée sur votre entrée ou session. |
| Commentaire à l'ouverture | Le ***Commentaire à l'ouverture*** est défini dans l'onglet ***Journal*** de votre session. |
| Commentaire à la fermeture | Le ***Commentaire à la fermeture*** est défini dans l'onglet ***Journal*** de votre session. |
| Date du journal     | Indique la date et l'heure d'ouverture de votre session ou de modification de votre entrée. |
| Date/Heure de fin   | Indique la date et l'heure de fermeture de votre session ou entrée. |
| Temps actif         | Cette information est uniquement disponible pour les sessions en mode intégré. Le temps actif de votre session, c'est-à-dire le temps pendant lequel votre session était ouverte en mode intégré et le temps pendant lequel vous étiez actif sur votre session, sera enregistré. Si votre session est ouverte, mais que vous êtes sur l'onglet ***Tableau de bord***, par exemple, et non sur votre onglet de session, aucun temps actif ne sera enregistré. |
| Durée               | Cette information est uniquement disponible pour les sessions en mode intégré. Lorsque les sessions sont ouvertes en mode intégré, la durée de la session sera enregistrée. Cela signifie que même si vous êtes sur l'onglet ***Tableau de bord***, par exemple, et que vous ne travaillez pas activement dans votre session, mais que votre onglet de session est ouvert, la durée de la session sera enregistrée. |
| Utilisateur machine | Indique le nom de l'utilisateur de la machine. |
| Utilisateur         | Indique le nom de l'utilisateur connecté.    |
| Utilisateur de connexion | Indique l'utilisateur de la connexion.          |
| Numéro de ticket    | Indique le numéro de ticket.            |
| Machine             | Indique le nom de la machine.             |
| Type de connexion   | Indique le type de connexion qui a été utilisé. |
| ID des Journaux de Connexion | Indique l'identifiant unique du journal de connexion. |
