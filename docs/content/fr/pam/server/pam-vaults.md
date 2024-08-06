---
_schema: default
eleventyComputed:
  title: PAM {{ fr.VLT }}
  description: Les PAM {{ fr.VLT }}s sont l'une des caractéristiques clés du module de gestion des accès privilégiés de {{ variables.DVLS.fr }}. Ce sont des coffres sécurisés qui permettent aux administrateurs de gérer leurs différents comptes privilégiés.
  status:
  keywords:
---
Les PAM {{ fr.VLT }}s sont l'une des caractéristiques clés du module de gestion des accès privilégiés de {{ variables.DVLS.fr }}. Ce sont des coffres sécurisés qui permettent aux administrateurs de gérer leurs différents comptes privilégiés.

Les [options de sécurité du dossier](/pam/server/accounts/) ainsi créé peuvent être personnalisées si nécessaire. Les [approbateurs peuvent également être personnalisés directement sur le dossier](/pam/server/accounts/), ce qui donne une liste de ses administrateurs.

Pour plus d'informations liées aux fournisseurs PAM, aux paramètres, aux scans et aux importations, consulter notre [rubrique de démarrage](https://docs.devolutions.net/pam/server/getting-started/ "Démarrage").

## Création de PAM {{ variables.VLT.fr }}

Dans ***Administration*** – ***Accès privilégié*** – ***PAM {{ fr.VLT }}s***, créer au moins un PAM {{ fr.VLT }} pour contenir les comptes privilégiés.

![PAM s](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2112.png)

Alternativement, les PAM {{ fr.VLT }}s peuvent être créés en cliquant sur le bouton des points de suspension situé à côté des PAM {{ fr.VLT }}s existants et dans le {{ variables.NPANE.fr }}.

![Ajouter des coffres PAM](https://cdnweb.devolutions.net/docs/DVLS4038_2024_2.png "Ajouter des coffres PAM")

![Ajouter des coffres PAM](https://cdnweb.devolutions.net/docs/DVLS4040_2024_2.png "Ajouter des coffres PAM")

## Configuration de PAM {{ fr.VLT }}

Une fois cela fait, la fenêtre de configuration d'un nouveau PAM {{ fr.VLT }} devrait apparaître.

![Configuration PAM](https://cdnweb.devolutions.net/docs/DVLS4039_2024_2.png "Configuration PAM")

Commencer par entrer un ***Nom*** pour votre coffre PAM (obligatoire) et une ***Description*** (facultative). Ensuite, définir sa visibilité :

* ***Privé*** : Un PAM {{ fr.VLT }} privé n'est pas visible pour les utilisateurs qui n'ont pas accès à celui-ci. Ainsi, les demandes d'accès au coffre ne peuvent pas être effectuées. Vous pouvez y accéder uniquement sur invitation.
* ***Public*** : Un {{ fr.VLT }} public est visible pour tous les utilisateurs de la source de données, même pour ceux qui n'y ont pas accès. Un utilisateur peut demander l'accès au {{ fr.VLT }} public.

En cliquant sur ***Ajouter***, le nouveau PAM {{ fr.VLT }} sera créé. Il pourra ensuite être trouvé dans ***Administration*** – ***Accès privilégié*** – ***PAM {{ fr.VLT_MAJ }}s***.

![](https://cdnweb.devolutions.net/docs/DVLS4041_2024_2.png)