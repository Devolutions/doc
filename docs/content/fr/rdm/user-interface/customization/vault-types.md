---
eleventyComputed:
  title: "Types de contenu {{ fr.VLT_MAJ }}"
  description: "Les types de contenu {{ fr.VLT_MAJ }} limitent les types d'entrées qui peuvent être créés dans un {{ fr.VLT }} partagé spécifique."
---
Les types de contenu {{ fr.VLT_MAJ }} limitent les types d'entrées qui peuvent être **créés** dans un {{ fr.VLT }} partagé spécifique. Le type peut être choisi lors de la [création ou l'édition d'un {{ fr.VLT }}](/rdm/commands/administration/management/vaults-overview/). Les entrées existantes ne sont pas affectées par une modification du type de {{ fr.VLT }} ; elles peuvent toujours être utilisées, modifiées, déplacées, importées/exportées, etc.

Il existe quatre types de contenu {{ fr.VLT }} :
* ***{{ fr.VLT }} par défaut*** : Un {{ fr.VLT }} standard où tous les types d'entrées sont disponibles.
* ***{{ fr.VLT }} de secrets*** : Entrées de secrets, utilisées dans les processus DevOps et CLI.
* ***{{ fr.VLT }} d'affaires*** : Entrées telles que les informations, contacts, actifs ou documents. Utile dans l'organisation d'affaires.
* ***{{ fr.VLT }} de credentials*** : Entrées pour tous les types de credentials, pas seulement spécifiques aux secrets.

Voici la liste complète des types d'entrées disponibles pour chaque type de {{ fr.VLT }} :

{% snippet, "badgeInfo" %}
Notez que la disponibilité des types d'entrées peut également être restreinte par d'autres facteurs tels que votre [profil d'interface utilisateur](/rdm/user-interface/customization/usage-profiles).
{% endsnippet %}

| Types d'entrées       | {{ fr.VLT }} par défaut | {{ fr.VLT }} d'affaires                | {{ fr.VLT }} de credentials | {{ fr.VLT }} de secrets |
|-----------------------|:-----------------------:|:--------------------------------------:|:--------------------------:|:-----------------------:|
| Session               | {{ icon.badgeNotice }}  | ***Entrée de site Web*** seulement     |                            |                         |
| Gestion à distance    | {{ icon.badgeNotice }}  |                                        |                            |                         |
| Gestion de credentials| {{ icon.badgeNotice }}  | ***Entrée de nom d'utilisateur et mot de passe*** seulement | {{ icon.badgeNotice }}   | ***Entrée de secret*** seulement |
| Information           | {{ icon.badgeNotice }}  | {{ icon.badgeNotice }}                 |                            |                         |
| Dossier               | {{ icon.badgeNotice }}  | {{ icon.badgeNotice }}                 | {{ icon.badgeNotice }}     | {{ icon.badgeNotice }}  |
| Contact               | {{ icon.badgeNotice }}  | {{ icon.badgeNotice }}                 |                            |                         |
| Document              | {{ icon.badgeNotice }}  | {{ icon.badgeNotice }}                 |                            |                         |
| VPN/tunnel/passerelle | {{ icon.badgeNotice }}  |                                        |                            |                         |
| Gestion d'actifs IT   | {{ icon.badgeNotice }}  |                                        |                            |                         |
| Macro/script/outil    | {{ icon.badgeNotice }}  |                                        |                            |                         |
| Synchroniseur         | {{ icon.badgeNotice }}  |                                        |                            |                         |
| Divers                | {{ icon.badgeNotice }}  |                                        |                            |                         |
| Modèle                | {{ icon.badgeNotice }}  | {{ icon.badgeNotice }}                 | {{ icon.badgeNotice }}     | {{ icon.badgeNotice }}  |