---
_schema: default
eleventyComputed:
  title: Coffres PAM {{ fr.VLT }}s
  description: Les coffres PAM {{ fr.VLT }}s sont l'une des fonctionnalités clés du module de gestion des accès privilégiés de {{ variables.DVLS.fr }}. Ce sont des coffres sécurisés qui permettent aux administrateurs de gérer leurs différents comptes privilégiés.
  status:
  keywords:
---
Les coffres PAM {{ fr.VLT }}s sont l'une des fonctionnalités clés du module de gestion des accès privilégiés de {{ variables.DVLS.fr }}. Ce sont des coffres sécurisés qui permettent aux administrateurs de gérer leurs différents comptes privilégiés.

Les [options de sécurité du dossier](/pam/server/accounts/) ainsi créé peuvent être personnalisées si nécessaire. Les [approbateurs peuvent également être personnalisés directement sur le dossier](/pam/server/accounts/), ce qui donne une liste de ses administrateurs.

Pour plus d'informations liées aux fournisseurs PAM, aux paramètres, aux scans et aux importations, consultez notre [rubrique de démarrage](https://docs.devolutions.net/pam/server/getting-started/ "Démarrage").

## Création de coffre PAM {{ variables.VLT.fr }}

Dans ***Administration*** – ***Accès privilégié*** – ***Coffres PAM {{ fr.VLT }}s***, créez au moins un coffre PAM {{ fr.VLT }} pour contenir les comptes privilégiés.

![Coffre PAM {{ variables.VLT.fr }}](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2112.png)

Alternativement, les coffres PAM {{ fr.VLT }}s peuvent être créés en cliquant sur le bouton ellipsis situé à côté des coffres PAM {{ fr.VLT }}s existants et dans le {{ variables.NPANE.fr }}.

![Ajouter un coffre PAM {{ variables.VLT.fr }}](https://cdnweb.devolutions.net/docs/DVLS4038_2024_2.png "Ajouter des coffres PAM")

![Ajouter un coffre PAM {{ variables.VLT.fr }}](https://cdnweb.devolutions.net/docs/DVLS4040_2024_2.png "Ajouter des coffres PAM")

## Configuration du coffre PAM {{ fr.VLT }}

Une fois cela fait, la fenêtre de configuration pour un nouveau coffre PAM {{ fr.VLT }} devrait apparaître.

![Configuration PAM](https://cdnweb.devolutions.net/docs/DVLS4039_2024_2.png "Configuration PAM")

Commencez par entrer un ***Nom*** pour votre coffre PAM (obligatoire) et une ***Description*** (facultative). Ensuite, définissez sa visibilité :

* ***Privé*** : Un coffre PAM {{ fr.VLT }} privé n'est pas visible pour les utilisateurs qui n'y ont pas accès. Ainsi, les demandes d'accès au coffre ne peuvent pas être effectuées. Vous ne pouvez y accéder que sur invitation.
* ***Public*** : Un coffre {{ fr.VLT }} public est visible pour tous les utilisateurs de la source de données, même pour ceux qui n'y ont pas accès. Un utilisateur peut demander l'accès au coffre {{ fr.VLT }} public.

Lorsque vous cliquez sur ***Ajouter***, le nouveau coffre PAM {{ fr.VLT }} sera créé. Il pourra ensuite être trouvé dans ***Administration*** – ***Accès privilégié*** – ***Coffres PAM {{ fr.VLT_MAJ }}s***.

![Coffre PAM {{ variables.VLT.fr }}](https://cdnweb.devolutions.net/docs/DVLS4041_2024_2.png)