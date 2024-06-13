---
eleventyComputed:
  title: "Types de {{ fr.COFFRE_MAJ }}"
  description: "Les types de {{ fr.COFFRE_MAJ }} limitent les types d'entrées qui peuvent être créés dans un {{ fr.COFFRE }} partagé spécifique."
---
Les types de {{ fr.COFFRE_MAJ }} limitent les types d'entrées qui peuvent être **créés** dans un {{ fr.COFFRE }} partagé spécifique. Le type peut être choisi lors de la [création ou de l'édition d'un {{ fr.COFFRE }}](/rdm/mac/commands/administration/vaults-overview/). Les entrées existantes ne sont pas affectées par une modification du type de {{ fr.COFFRE }} ; elles peuvent toujours être utilisées, modifiées, déplacées, importées/exportées, etc.

Il existe quatre types de {{ fr.COFFRE }} :
* ***{{ fr.COFFRE }} par défaut*** : Un {{ fr.COFFRE }} standard où tous les types d'entrées sont disponibles.
* ***{{ fr.COFFRE }} de secrets*** : Entrées de secrets, utilisées dans les processus DevOps et CLI.
* ***{{ fr.COFFRE }} d'entreprise*** : Entrées telles que les informations, contacts, actifs ou documents. Utile dans l'organisation d'entreprise.
* ***{{ fr.COFFRE }} de credentials*** : Entrées pour tous les types de credentials, pas seulement spécifiques aux secrets.

Voici la liste complète des types d'entrées disponibles pour chaque type de {{ fr.COFFRE }} :

{% snippet, "badgeInfo" %}
Notez que la disponibilité des types d'entrées peut également être restreinte par d'autres facteurs tels que votre [profil d'interface utilisateur](/rdm/mac/user-interface/customization/usage-profiles).
{% endsnippet %}

| Types d'entrées       | {{ fr.COFFRE }} par défaut | {{ fr.COFFRE }} d'entreprise            | {{ fr.COFFRE }} de credentials | {{ fr.COFFRE }} de secrets |
|-----------------------|:--------------------------:|:--------------------------------------:|:------------------------------:|:-------------------------:|
| Session               | {{ icon.badgeNotice }}     | ***Entrée de site Web*** seulement      |                                |                           |
| Gestion à distance    | {{ icon.badgeNotice }}     |                                        |                                |                           |
| Gestion des credentials | {{ icon.badgeNotice }}   | ***Entrée de nom d'utilisateur et mot de passe*** seulement | {{ icon.badgeNotice }}     | ***Entrée de secret*** seulement |
| Information           | {{ icon.badgeNotice }}     | {{ icon.badgeNotice }}                 |                                |                           |
| Dossier               | {{ icon.badgeNotice }}     | {{ icon.badgeNotice }}                 | {{ icon.badgeNotice }}       | {{ icon.badgeNotice }}    |
| Contact               | {{ icon.badgeNotice }}     | {{ icon.badgeNotice }}                 |                                |                           |
| Document              | {{ icon.badgeNotice }}     |                                        |                                |                           |
| VPN/tunnel/passerelle | {{ icon.badgeNotice }}     |                                        |                                |                           |
| Gestion des actifs IT | {{ icon.badgeNotice }}     |                                        |                                |                           |
| Macro/script/outil    | {{ icon.badgeNotice }}     |                                        |                                |                           |
| Synchroniseur         | {{ icon.badgeNotice }}     |                                        |                                |                           |
| Divers                | {{ icon.badgeNotice }}     |                                        |                                |                           |
| Modèle                | {{ icon.badgeNotice }}     | {{ icon.badgeNotice }}                 | {{ icon.badgeNotice }}       | {{ icon.badgeNotice }}    |