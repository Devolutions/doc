---
eleventyComputed:
  title: Approuver un accès temporaire à une entrée dans {{ fr.DHUBB }}
  order: 20
  description: La fonctionnalité d'Accès Temporaire permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. L'approbateur doit ensuite approuver ou refuser la demande.
---
{% youtube '5XwhadoYKKc' %}

{% snippet, "badgeInfo" %}
La fonctionnalité ***Accès Temporaire*** est également disponible dans {{ fr.RDM }} avec {{ fr.DHUBB }}. Vous pouvez voir et approuver les demandes d'accès temporaire dans {{ fr.RDM }} même si la demande a été faite dans {{ fr.DHUBB }}. Visiter [Approuver un accès temporaire à une entrée dans {{ fr.RDM }}](/rdm/windows/user-interface/content-area/temporary-access/approve-temporary-access/) pour en savoir plus.
{% endsnippet %}

La fonctionnalité ***Accès Temporaire*** permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. L'approbateur doit ensuite approuver ou refuser la demande.

## Voir les demandes d'accès temporaire

Lorsqu'un utilisateur vous envoie une demande d'accès temporaire, vous serez automatiquement notifié par courriel. Vous pouvez cliquer sur ***Aller au tableau de bord de l'entrée*** pour voir directement la demande dans l'entrée dans {{ fr.DHUBB }}.
![Demande d'accès temporaire par courriel](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2035.png)
Une fois sur l'entrée, vous verrez une section ***Demande d'Accès Temporaire*** près du haut. Cliquer sur ***Voir les Détails*** ouvre la fenêtre ***Demande d'Accès Temporaire***, qui est décrite dans la section suivante.
![Demande d'accès temporaire depuis l'entrée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6030.png)
Notez que vous pouvez également voir toutes les demandes d'accès temporaire en attente depuis un {{ fr.VLT }} sélectionné dans la boîte ***Accès Temporaire*** du ***Tableau de bord***. Cliquer sur une demande vous amène à l'entrée.
![Demande d'accès temporaire depuis le tableau de bord](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6031.png)

## Approuver/Refuser les demandes d'accès temporaire

{% snippet, "badgeInfo" %}
La durée de l'***Accès Temporaire*** commence lorsque la demande est approuvée.
{% endsnippet %}

Lorsque l'entrée est sélectionnée, cliquer sur ***Voir les Détails*** dans la section ***Demande d'Accès Temporaire*** vous permet de voir les informations sur la demande ainsi que de l'***Approuver***/***Refuser***.
![Voir les Détails](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2042.png)

Dans la section supérieure, vous pouvez voir les détails de la demande tels que les ***Dépendances de l'Entrée***, ***Utilisateur***, niveau de ***Permissions*** et ***Durée***.

Ci-dessous se trouve la réponse de l'approbateur. Les ***Permissions*** et la ***Durée*** peuvent être modifiées et un message laissé pour l'utilisateur.

Enfin, vous pouvez ***Approuver*** ou ***Refuser*** la demande d'accès temporaire en cliquant sur le bouton correspondant.
![Approuver/Refuser la demande d'accès temporaire](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6023.png)

## Révoquer l'accès temporaire

Après l'approbation, pour une raison quelconque, vous pouvez révoquer l'accès temporaire de l'utilisateur en cliquant à nouveau sur ***Voir les Détails***, puis ***Révoquer***. Assurez-vous de vouloir faire cela d'abord, car pour regagner l'accès à l'entrée, ils devront faire une autre demande. Sinon, leur accès se terminera dans le délai fixé.
![Révoquer l'accès temporaire](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6024.png)

{% snippet, "badgeInfo" %}
Pour en savoir plus sur l'expérience utilisateur final dans {{ fr.DHUBB }}, visiter [Demander un accès temporaire à une entrée dans {{ fr.DHUBB }}](/hub/web-interface/temporary-access/request-temporary-access/).
{% endsnippet %}
