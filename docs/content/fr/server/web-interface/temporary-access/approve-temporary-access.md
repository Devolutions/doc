```yaml
---
eleventyComputed:
  title: Approuver un accès temporaire à une entrée dans {{ fr.DVLS }}
  order: 20
  description: La fonctionnalité d'accès temporaire permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. L'approbateur doit ensuite approuver ou refuser la demande.
---
```

![Allowed temporay access](https://cdnweb.devolutions.net/docs/RDMW6020_2024_1.png)

La fonctionnalité ***Accès Temporaire*** permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. L'approbateur doit ensuite approuver ou refuser la demande.

{% snippet, "badgeInfo" %}
Lors de l'utilisation de {{ fr.DVLS }}, Microsoft SQL Server ou des sources de données Microsoft Azure SQL, vous devez d'abord [Activer l'accès temporaire](/rdm/kb/rdm-windows/how-to-articles/enable-temporary-access/) dans {{ fr.RDM }}.
{% endsnippet %}

Pour apprendre à consulter vos demandes passées et actuelles, aller à [Consulter les demandes d'accès temporaire](#view-temporary-access-requests).

Pour apprendre à répondre à une demande, aller à [Approuver/Refuser les demandes d'accès temporaire](#approvedeny-temporary-access-requests).

## Consulter les demandes d'accès temporaire

Pour voir toutes vos demandes passées et actuelles, vous devez utiliser la boîte ***Demandes d'accès en attente*** pour ouvrir la fenêtre ***Demandes d'accès temporaire***.
![Pending access requests](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6052.png)

Dans la fenêtre ***Demandes d'accès temporaire***, vous pouvez voir toutes vos demandes d'accès temporaire et les trier par ***Statut***, ***Demandé par***, ***Nom de la connexion***, ***Demandé le***, ***Heure de début demandée***, ***Heure de fin demandée***, ***Durée demandée***, ***Durée autorisée*** et ***Approbateur***.
![Temporary Access Requests Report](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6049.png)

Il est également possible d'afficher uniquement certaines demandes avec le menu déroulant ***Statut*** ou avec la barre de filtre en haut.

En utilisant ***Voir*** (icône œil), vous pouvez voir le ***Message de la demande*** et le ***Message d'autorisation*** d'une demande spécifique.
![Temporary Access Request](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6050.png)

Enfin, cliquer sur ***Approuver la demande*** ou ***Refuser la demande*** ouvre la fenêtre ***Réponse à l'accès temporaire***, qui est décrite dans la section suivante.

## Approuver/Refuser les demandes d'accès temporaire

{% snippet, "badgeInfo" %}
La durée de l'***Accès Temporaire*** commence lorsque la demande est approuvée.
{% endsnippet %}

Pour répondre à une demande, vous devez ouvrir la fenêtre ***Réponse à l'accès temporaire***. Il y a deux façons d'y accéder.

La première option est d'utiliser la boîte ***Demandes d'accès en attente*** (voir image ci-dessous) dans l'onglet ***Vue d'ensemble*** de votre ***Tableau de bord***. Cliquer sur la coche verte (approuver la demande) ou sur le "X" rouge (refuser la demande) à côté d'une demande ouvrira la fenêtre ***Réponse à l'accès temporaire***.
![Pending Access Requests](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6048.png)

La deuxième option nécessite que vous passiez par l'autre boîte ***Demandes d'accès en attente*** décrite dans la [section précédente](#view-temporary-access-requests). Quelle que soit la manière choisie pour accéder à la fenêtre de réponse, le résultat sera le même.
![Temporary Access Response](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6037.png)

Cette vue est divisée en deux sections :

* La section ***Informations sur la demande*** contient des informations sur la demande de l'utilisateur. Comme cela a été fait du côté de l'utilisateur, les champs de cette section ne peuvent pas être modifiés. Vous pouvez voir les ***Dépendances de l'entrée*** telles que les informations d'identification liées et les VPN. Notez que les entrées liées doivent être dans le même {{ fr.VLT }}. Les informations d'identification avec PAM liées aux {{ fr.VLT }}s réguliers ne sont pas incluses.

* La section ***Paramètres de réponse*** vous permet de modifier la durée d'accès temporaire spécifiée par l'utilisateur. Il est également possible d'écrire un message à l'utilisateur expliquant votre décision, mais cela reste facultatif.

Cliquer sur ***Approuver la demande*** ou ***Refuser la demande*** approuvera ou refusera la demande, selon ce que vous avez sélectionné plus tôt.

## Révoquer l'accès temporaire

Après l'approbation, pour une raison quelconque, vous pouvez révoquer l'accès temporaire de l'utilisateur en cliquant à nouveau sur ***Voir les détails***, puis ***Révoquer***. Assurez-vous de vouloir faire cela d'abord, car pour retrouver l'accès à l'entrée, ils devront faire une autre demande. Sinon, leur accès prendra fin dans le délai prévu.

![Temporary Access Response](https://cdnweb.devolutions.net/docs/DVLS6066_2024_1.png)

{% snippet, "badgeInfo" %}
Pour en savoir plus sur l'expérience de l'utilisateur final dans {{ fr.DVLS }}, visitez [Demander un accès temporaire à une entrée dans {{ fr.DVLS }}](/server/web-interface/temporary-access/request-temporary-access/).
{% endsnippet %}
