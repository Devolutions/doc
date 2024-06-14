---
eleventyComputed:
  title: "{{ fr.COFFRE_MAJ }} types de contenu"
  description: "Les types de contenu {{ fr.COFFRE_MAJ }} limitent les types d'entrées qui peuvent être créés dans un {{ fr.COFFRE }} partagé spécifique."
---
Les types de contenu {{ fr.COFFRE_MAJ }} limitent les types d'entrées qui peuvent être **créés** dans un {{ fr.COFFRE }} partagé spécifique. Le type peut être choisi lors de la [création ou de l'édition d'un {{ fr.COFFRE }}](/hub/web-interface/administration/management/vaults/create-manage-vaults/). Les entrées existantes ne sont pas affectées par une modification du type de {{ fr.COFFRE }} ; elles peuvent toujours être utilisées, modifiées, déplacées, importées/exportées, etc.

Il existe quatre types de contenu {{ fr.COFFRE }} :
* ***{{ fr.COFFRE }} par défaut*** : Un {{ fr.COFFRE }} standard où tous les types d'entrées sont disponibles.
* ***{{ fr.COFFRE }} Secrets*** : Entrées de secrets, utilisées dans les processus DevOps et CLI.
* ***{{ fr.COFFRE }} Business*** : Entrées telles que informations, contacts, actifs ou documents. Utile dans l'organisation d'entreprise.
* ***{{ fr.COFFRE }} Credentials*** : Entrées pour tous les types de credentials, pas seulement spécifiques aux secrets.

Voici la liste complète des types d'entrées disponibles pour chaque type de {{ fr.COFFRE }} :

{% snippet, "badgeInfo" %}
Notez que la disponibilité des types d'entrées peut également être restreinte par d'autres facteurs tels que votre [profil d'interface utilisateur](/hub/web-interface/UI-customization/usage-profiles).
{% endsnippet %}

| Types d'entrées       | {{ fr.COFFRE }} par défaut | {{ fr.COFFRE }} Business                  | {{ fr.COFFRE }} Credentials | {{ fr.COFFRE }} Secrets    |
|-----------------------|:--------------------------:|:----------------------------------------:|:--------------------------:|:-------------------------:|
| Session               | {{ icon.badgeNotice }}     | ***Entrée Site Web*** seulement           |                            |                           |
| Gestion à distance    | {{ icon.badgeNotice }}     |                                          |                            |                           |
| Entrée de credential  | {{ icon.badgeNotice }}     | ***Entrée Nom d'utilisateur et mot de passe*** seulement | {{ icon.badgeNotice }}     | ***Entrée Secret*** seulement |
| Information           | {{ icon.badgeNotice }}     | {{ icon.badgeNotice }}                   |                            |                           |
| Dossier               | {{ icon.badgeNotice }}     | {{ icon.badgeNotice }}                   | {{ icon.badgeNotice }}     | {{ icon.badgeNotice }}    |
| Contact               | {{ icon.badgeNotice }}     | {{ icon.badgeNotice }}                   |                            |                           |
| Document              | {{ icon.badgeNotice }}     |                                          |                            |                           |
| Modèle                | {{ icon.badgeNotice }}     | {{ icon.badgeNotice }}                   | {{ icon.badgeNotice }}     | {{ icon.badgeNotice }}    |