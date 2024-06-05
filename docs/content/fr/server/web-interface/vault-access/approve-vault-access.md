---
eleventyComputed:
  title: Approuver l'accès à {{ fr.VLT }} dans {{ fr.DVLS }}
  order: 20
  description: Dans {{ fr.DVLS }}, les utilisateurs peuvent demander l'accès à un {{ fr.VLT }} public. Un administrateur / propriétaire de {{ fr.VLT }} doit ensuite approuver la demande.
---
Dans {{ fr.DVLS }}, les utilisateurs peuvent demander l'accès à un {{ fr.VLT }} public. Un administrateur / propriétaire de {{ fr.VLT }} doit ensuite approuver la demande. Les propriétaires de {{ fr.VLT_MAJ }} sont configurés dans ***Administration – Gestion de la Sécurité – {{ fr.VLT_MAJ }}s*** lors de la création ou de l'édition d'un {{ fr.VLT }}, sous la section ***Propriétaires de {{ fr.VLT }}***.

## Voir les demandes d'accès à {{ fr.VLT }} en attente

Pour voir le nombre de demandes en attente, vous pouvez regarder la boîte suivante ***Demandes d'Accès à {{ fr.VLT }} en Attente*** en haut du ***Tableau de Bord***.
![Tableau de Bord – Demandes d'Accès à {{ fr.VLT }} en Attente](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0028.png)
Pour accepter les demandes en attente, descendez jusqu'à la section ***Demandes d'Accès à {{ fr.VLT }} en Attente***.
En utilisant le bouton ***Messages***, vous pouvez voir le message de ***Demande d'Accès à {{ fr.VLT_MAJ }}*** d'une demande spécifique.

{% snippet, "badgeInfo" %}
Si un propriétaire de {{ fr.VLT }} est configuré pour le {{ fr.VLT }} demandé, l'administrateur ne recevra pas de ***Message***.
{% endsnippet %}

Enfin, cliquer sur les boutons ***Approuver*** et ***Refuser*** ouvre la fenêtre ***Réponse à la Demande d'Accès à {{ fr.VLT_MAJ }}***, qui est décrite ensuite.

## Approuver/Refuser les demandes d'accès à {{ fr.VLT }}

{% snippet, "badgeInfo" %}
Selon la source de données, les administrateurs / propriétaires de {{ fr.VLT }} peuvent recevoir un courriel les informant de la demande d'accès à {{ fr.VLT }} :
* Avec une source de données {{ fr.DHUBB }}, un courriel de demande d'accès à {{ fr.VLT }} est envoyé à l'administrateur / propriétaire de {{ fr.VLT }} à qui la demande a été adressée.
* Avec une source de données {{ fr.DVLS }}, tous les administrateurs / propriétaires de {{ fr.VLT }} reçoivent un courriel de demande d'accès à {{ fr.VLT }}.
* Avec une source de données SQL, aucun courriel n'est envoyé.
{% endsnippet %}

Pour répondre à une demande, vous pouvez utiliser la boîte ***Demandes d'Accès à {{ fr.VLT }} en Attente*** ou ouvrir la fenêtre ***Réponse à la Demande d'Accès à {{ fr.VLT_MAJ }}***.

La première option consiste à utiliser la section ***Demandes d'Accès à {{ fr.VLT }} en Attente*** (voir l'image ci-dessous) dans votre ***Tableau de Bord***, elle peut être trouvée en descendant. Cliquer soit sur la marque verte (approuver la demande) soit sur le "X" rouge (refuser la demande) à côté d'une demande ouvrira la fenêtre ***Réponse à la Demande d'Accès à {{ fr.VLT_MAJ }}***.
![Demandes d'Accès à {{ fr.VLT }} en Attente](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0029.png)

La deuxième option nécessite de passer par les autres ***Messages***. Quelle que soit la manière choisie pour accéder à la fenêtre de réponse, le résultat sera le même.
![Message](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0030.png)

Cette vue est divisée en deux sections :

* La section ***Infos sur la Demande*** contient des informations sur la demande de l'utilisateur. Comme cela a été fait du côté de l'utilisateur, les champs de cette section ne peuvent pas être modifiés.
* La section ***Paramètres de Réponse*** vous permet d'écrire un message à l'utilisateur expliquant votre décision, mais cela reste facultatif.

![Approuver ou Refuser la demande](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0031.png)

Le bouton pour envoyer la réponse (***Approuver la demande*** ou ***Refuser la demande***) changera, selon ce que vous avez sélectionné précédemment.

{% snippet, "badgeHelp" %}
Pour en savoir plus sur l'expérience utilisateur final dans {{ fr.DVLS }}, visitez [Demander l'accès à {{ fr.VLT }} dans {{ fr.DVLS }}](/server/web-interface/vault-access/request-vault-access).
{% endsnippet %}
