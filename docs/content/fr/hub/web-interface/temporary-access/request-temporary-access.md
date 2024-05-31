---
eleventyComputed:
  title: Demander un accès temporaire à une entrée dans {{ fr.DHUBB }}
  order: 10
  description: La fonctionnalité d'Accès Temporaire permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. L'approbateur doit ensuite approuver ou refuser la demande.
---
{% youtube '5XwhadoYKKc' %}

{% snippet, "badgeNotice" %}
Cette vidéo contient des informations concernant à la fois les demandeurs et les approbateurs. Un utilisateur souhaitant demander un accès temporaire à une entrée peut trouver cette aide visuelle utile, mais regarder la vidéo n'est pas essentiel puisque toutes les étapes sont décrites dans ce sujet.

Pour apprendre à approuver ou refuser une demande, visiter [Approuver un accès temporaire à une entrée dans {{ fr.DHUBB }}](/hub/web-interface/temporary-access/approve-temporary-access/).
{% endsnippet %}

La fonctionnalité ***Accès Temporaire*** permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour une entrée spécifique. L'approbateur doit ensuite approuver ou refuser la demande.

## Demander un accès temporaire

{% snippet, "badgeInfo" %}
La durée de l'***Accès Temporaire*** commence lorsque la demande est approuvée.
{% endsnippet %}

Suivre les étapes ci-dessous pour apprendre à faire une demande d'accès temporaire :

1. Dans l'onglet ***{{ fr.VLT_MAJ }}***, sélectionner l'entrée à laquelle accéder dans le {{ fr.VLT }} de votre choix.
1. Cliquer sur ***Plus***, puis sélectionner ***Demander un Accès Temporaire***.
![Demander un Accès Temporaire](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6026.png)
1. Dans la fenêtre ***Demande d'Accès Temporaire***, sélectionner la ***Durée d'accès*** dans le menu déroulant.
![Demande d'Accès Temporaire](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6025.png)
1. Cliquer sur ***Définir une période personnalisée*** si un accès pour une période spécifique est nécessaire.
1. Sélectionner le niveau de ***Permissions*** que vous souhaitez obtenir temporairement entre ***Lecteurs***, ***Opérateurs***, et ***Contributeurs*** en utilisant le menu déroulant.
![Permissions](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2020.png)
Passer la souris sur l'icône œil tout en ayant un niveau de ***Permissions*** sélectionné permet de voir quelles permissions il inclut. Par exemple, l'image suivante montre les permissions pour le rôle ***Opérateurs***.
![Contenu des Permissions](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6008.png)

Pour aider à décider quel rôle sélectionner, vous pouvez visiter [Rôles et permissions](/hub/web-interface/administration/configuration-security/system-permissions/roles-permissions/).

5. Sélectionner l'approbateur à qui envoyer votre demande en utilisant le menu déroulant. Vous pouvez également utiliser la barre de filtre pour affiner votre recherche.
![Envoyer la demande à](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6029.png)
6. Écrire un court ***Message*** à l'approbateur expliquant pourquoi vous souhaitez accéder à cette entrée. Cela est optionnel, mais fortement recommandé car cela permet à l'approbateur de prendre une décision plus éclairée. Lorsque vous avez terminé, cliquer sur ***Envoyer la Demande***.

Il faut maintenant attendre que l'approbateur réponde à votre demande. Vous serez notifié par courriel si la réponse est positive ou négative. La section suivante détaille quoi faire une fois que vous avez reçu une réponse.

## Demander un accès temporaire à une entrée de credentials

Les utilisateurs peuvent demander l'accès à une entrée de credentials pour voir et copier les mots de passe. Le processus est le même que décrit ci-dessus. Une fois que l'approbateur vous a donné accès, vous pouvez voir le mot de passe.
![Voir le mot de passe](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6084.png)

## Réponse à votre demande

Si votre demande est approuvée, votre courriel aura un bouton en bas qui vous amènera directement à votre entrée dans {{ fr.DHUBB }}. Il est également possible d'aller manuellement à votre entrée.
![Courriel de confirmation](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2022.png)
Une fois sur l'entrée dans le {{ fr.VLT }}, vous verrez une section ***Demande d'Accès Temporaire*** près du haut. Une coche valide que votre demande a été approuvée. À côté de la coche se trouve le ***Temps restant*** sur votre demande. Il y a aussi une option ***Voir les Détails*** qui est décrite dans la section suivante.

Vous pouvez maintenant effectuer votre tâche avec cette permission élevée.
![Demande d'accès temporaire approuvée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6005.png)

## Voir les détails et révoquer votre accès temporaire

***Voir les Détails*** vous permet de voir les informations sur votre ***Demande d'Accès Temporaire*** ainsi que de révoquer votre accès.

Dans la section supérieure, vous pouvez voir les détails de votre demande tels que ***Utilisateur***, niveau de ***Permissions*** et ***Durée***. Vous pouvez également lire le message que vous avez envoyé à l'approbateur.

Plus bas se trouve la réponse de l'approbateur. L'approbateur peut modifier votre demande si nécessaire.


Enfin, pour toute raison, vous pouvez révoquer votre accès temporaire en cliquant sur ***Révoquer***. Assurez-vous de vouloir faire cela d'abord, car pour regagner l'accès à votre entrée, vous devrez faire une autre demande. Sinon, votre accès se terminera dans le délai fixé par vous et l'approbateur.
![Détails de l'accès temporaire et révocation](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub6007.png)
