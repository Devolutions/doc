---
eleventyComputed:
  title: Approuver l'accès au coffre dans RDM
  order: 20
  description: Dans RDM, les utilisateurs peuvent demander l'accès à un coffre public. Un administrateur / propriétaire du coffre doit ensuite approuver la demande.
---
Dans RDM, les utilisateurs peuvent demander l'accès à un coffre public. Un administrateur / propriétaire du coffre doit ensuite approuver la demande. Les propriétaires de coffre sont configurés dans la ***Gestion des coffres*** lors de la création ou de l'édition d'un coffre.

## Voir les demandes d'accès au coffre en attente

Pour voir toutes vos demandes passées et actuelles, vous devez utiliser la boîte ***Demandes d'accès au coffre en attente*** pour ouvrir la fenêtre ***Demandes d'accès au coffre***.
![Tableau de bord – Demandes d'accès au coffre en attente](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2157.png)
Dans la fenêtre ***Demandes d'accès au coffre***, vous pouvez voir toutes vos demandes d'accès temporaire et les trier par ***Statut***, ***Coffre***, ***Nom d'utilisateur***, ***Utilisateur de la source de données***, ***Date de la demande***, ***Nom d'utilisateur de l'autorisateur***, ou ***Utilisateur de la source de données de l'autorisateur***.
![Afficher les demandes d'accès au coffre](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2158.png)

Il est également possible d'afficher uniquement certaines demandes avec le menu déroulant ***Statut*** ou avec la barre de filtre en haut.

En utilisant le bouton ***Voir les messages***, vous pouvez voir le ***Message de la demande*** et le ***Message d'autorisation*** d'une demande spécifique.
![Messages de demande](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2076.png)
Enfin, cliquer sur les boutons ***Approuver*** et ***Refuser*** ouvre la fenêtre ***Réponse à la demande d'accès au coffre***, qui est décrite ensuite.

## Approuver/Refuser les demandes d'accès au coffre

{% snippet, "badgeInfo" %}
Selon la source de données, les administrateurs / propriétaires du coffre peuvent recevoir un courriel les informant de la demande d'accès au coffre :
* Avec une source de données Devolutions Hub Business, un courriel de demande d'accès au coffre est envoyé à l'administrateur / propriétaire du coffre à qui la demande a été adressée.
* Avec une source de données Devolutions Server, tous les administrateurs / propriétaires du coffre reçoivent un courriel de demande d'accès au coffre.
* Avec une source de données SQL, aucun courriel n'est envoyé.
{% endsnippet %}

Pour répondre à une demande, vous devez ouvrir la fenêtre ***Réponse à la demande d'accès au coffre***. Il y a deux façons d'y accéder.

La première option consiste à utiliser la boîte ***Demandes d'accès au coffre en attente*** (voir image ci-dessous) dans votre ***Tableau de bord***. Cliquer sur la coche verte (approuver la demande) ou sur le "X" rouge (refuser la demande) à côté d'une demande ouvrira la fenêtre ***Réponse à la demande d'accès au coffre***.

![Demandes d'accès en attente](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2159.png)

La deuxième option nécessite de passer par l'autre boîte ***Demandes d'accès au coffre en attente*** décrite dans la section précédente. Quelle que soit la manière choisie pour accéder à la fenêtre de réponse, le résultat sera le même.

![Réponse à la demande d'accès au coffre](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2160.png)

Cette vue est divisée en deux sections :

* La section ***Infos sur la demande*** contient des informations sur la demande de l'utilisateur. Comme cela a été fait du côté de l'utilisateur, les champs de cette section ne peuvent pas être modifiés.
* La section ***Paramètres de réponse*** vous permet d'écrire un message à l'utilisateur expliquant votre décision, mais cela reste facultatif.

Cliquer sur ***Envoyer la réponse*** approuvera ou refusera la demande, selon ce que vous avez sélectionné plus tôt. Une fenêtre de confirmation apparaîtra que vous pouvez faire disparaître en cliquant sur ***OK***.

{% snippet, "badgeHelp" %}
Pour en savoir plus sur l'expérience utilisateur final dans RDM, visitez [Demander l'accès au coffre dans RDM](/rdm/windows/user-interface/content-area/vault-access-rdm/request-vault-access).
{% endsnippet %}