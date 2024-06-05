---
eleventyComputed:
  title: Approuver l'accès au {{ fr.VLT }} dans {{ fr.RDMMAC }}
  order: 20
  description: Dans {{ fr.RDMMAC }}, les utilisateurs peuvent demander l'accès à un {{ fr.VLT }} public. Un administrateur / propriétaire du {{ fr.VLT }} doit ensuite approuver la demande.
---
Dans {{ fr.RDMMAC }}, les utilisateurs peuvent demander l'accès à un {{ fr.VLT }} public. Un administrateur / propriétaire du {{ fr.VLT }} doit ensuite approuver la demande. Les propriétaires de {{ fr.VLT_MAJ }} sont configurés dans la ***gestion du {{ fr.VLT_MAJ }}*** lors de la création ou de l'édition d'un {{ fr.VLT }}.

## Voir les demandes d'accès au {{ fr.VLT }} en attente

Pour voir toutes vos demandes passées et actuelles, vous devez utiliser la boîte ***Demandes d'accès au {{ fr.VLT }} en attente*** pour ouvrir la fenêtre ***Demandes d'accès au {{ fr.VLT_MAJ }}***.
![Tableau de bord – Demandes d'accès au {{ fr.VLT }} en attente](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2065.png)
Dans la fenêtre ***Demandes d'accès au {{ fr.VLT_MAJ }}***, vous pouvez voir toutes vos demandes d'accès temporaire et les trier par ***Statut***, ***{{ fr.VLT_MAJ }}***, ***Nom d'utilisateur***, ***Utilisateur de la source de données***, ***Date***, ***Nom d'utilisateur de l'autorisateur***, ou ***Utilisateur de la source de données de l'autorisateur***.
![Afficher les demandes d'accès au {{ fr.VLT }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2066.png)

Il est également possible d'afficher uniquement certaines demandes avec le menu déroulant ***Statut*** ou avec la barre de recherche en haut.

En utilisant le bouton ***Voir les messages***, vous pouvez voir le ***Message de la demande*** et le ***Message d'autorisation*** d'une demande spécifique.
![Messages de demande](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2067.png)
Enfin, cliquer sur les boutons ***Approuver*** et ***Refuser*** ouvre la fenêtre de réponse à la demande d'accès au {{ fr.VLT }}, qui est décrite ensuite.

## Approuver/Refuser les demandes d'accès au {{ fr.VLT }}

{% snippet, "badgeInfo" %}
Selon la source de données, les administrateurs / propriétaires du {{ fr.VLT }} peuvent recevoir un courriel les informant de la demande d'accès au {{ fr.VLT }} :
* Avec une source de données {{ fr.DHUBB }}, un courriel de demande d'accès au {{ fr.VLT }} est envoyé à l'administrateur / propriétaire du {{ fr.VLT }} à qui la demande a été adressée.
* Avec une source de données {{ fr.DVLS }}, tous les administrateurs / propriétaires du {{ fr.VLT }} reçoivent un courriel de demande d'accès au {{ fr.VLT }}.
* Avec une source de données SQL, aucun courriel n'est envoyé.
{% endsnippet %}

Pour répondre à une demande, vous devez ouvrir la fenêtre de réponse à la demande d'accès au {{ fr.VLT }}. Il y a deux façons d'y accéder.

La première option consiste à utiliser la boîte ***Demandes d'accès au {{ fr.VLT }} en attente*** (voir l'image ci-dessous) dans votre ***Tableau de bord***. Cliquer sur la coche verte (approuver la demande) ou sur le "X" rouge (refuser la demande) à côté d'une demande ouvrira la fenêtre de réponse à la demande d'accès au {{ fr.VLT }}.

![Demandes d'accès en attente](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2068.png)

La deuxième option nécessite de passer par l'autre boîte ***Demandes d'accès au {{ fr.VLT }} en attente*** décrite dans la section précédente. Quelle que soit la manière choisie pour accéder à la fenêtre de réponse, le résultat sera le même.

![Réponse à la demande d'accès au {{ fr.VLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac2069.png)
Cette vue est divisée en deux sections :

* La section ***Infos sur la demande*** contient des informations sur la demande de l'utilisateur. Comme cela a été fait du côté de l'utilisateur, les champs de cette section ne peuvent pas être modifiés.
* La section ***Paramètres de réponse*** vous permet d'écrire un message à l'utilisateur expliquant votre décision, mais cela reste facultatif.

Cliquer sur ***Envoyer la réponse*** approuvera ou refusera la demande, selon ce que vous avez sélectionné plus tôt. Une fenêtre de confirmation apparaîtra que vous pouvez faire disparaître en cliquant sur ***OK***.

{% snippet, "badgeHelp" %}
Pour en savoir plus sur l'expérience utilisateur final dans {{ fr.RDM }}, visitez [Demander l'accès au {{ fr.VLT }} dans {{ fr.RDMMAC }}](/rdm/mac/user-interface/content-area/vault-access/request-vault-access).
{% endsnippet %}
