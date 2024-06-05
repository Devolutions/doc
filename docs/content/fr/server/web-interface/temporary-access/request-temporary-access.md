---
eleventyComputed:
  title: Demander un accès temporaire à une entrée dans {{ fr.DVLS }}
  order: 10
  description: La fonctionnalité d'Accès Temporaire permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour exécuter une entrée spécifique. L'approbateur doit ensuite approuver ou refuser la demande.
---
{% snippet, "badgeNotice" %}
Pour apprendre à approuver ou refuser une demande, visitez [Approuver un accès temporaire à une entrée dans {{ fr.DVLS }}](/server/user-interface/content-area/temporary-access/approve-temporary-access/).
{% endsnippet %}

La fonctionnalité ***Accès Temporaire*** permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour exécuter une entrée spécifique. L'approbateur doit ensuite approuver ou refuser la demande.

## Demander un accès temporaire

{% snippet, "badgeInfo" %}
La durée de l'***Accès Temporaire*** commence lorsque la demande est approuvée.
{% endsnippet %}

Suivez les étapes ci-dessous pour apprendre à faire une demande d'accès temporaire :

1. Dans le ***{{ fr.NPANE }}*** de {{ fr.DVLS }}, sélectionner l'entrée à laquelle vous souhaitez accéder.
1. Cliquer sur ***Plus*** – ***Demander un Accès Temporaire***.
![Demander une Demande d'Accès Temporaire](https://cdnweb.devolutions.net/docs/DVLS6070_2024_1.png)
1. Dans la fenêtre ***Demande d'Accès Temporaire***, choisir l'approbateur à qui vous souhaitez envoyer la demande.
1. Sélectionner la durée de l'***Accès***. Vous pouvez cliquer sur ***Définir une période personnalisée*** si vous avez besoin d'accès pour une période spécifique.

![Demande d'Accès Temporaire](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6032.png)
5. Écrire un court ***Message*** à l'approbateur expliquant pourquoi vous souhaitez accéder à cette entrée et ses dépendances. Cela est optionnel, mais nous le recommandons fortement car cela permet à l'approbateur de prendre une décision plus éclairée. Lorsque vous avez terminé, cliquer sur ***Envoyer la Demande***.

Vous devez maintenant attendre que l'approbateur réponde à votre demande. Selon leurs paramètres, vous pourriez être notifié par courriel ou message lorsqu'ils répondent, que la réponse soit positive ou négative.

Si vous ne recevez pas de courriel, essayez d'accéder à l'entrée dans {{ fr.DVLS }}. Si vous pouvez y accéder, cela signifie que l'approbateur a accepté votre demande. Sinon, nous vous suggérons de les contacter pour savoir s'ils l'ont refusée ou simplement pas encore répondu.

Une fois que l'approbateur vous a accordé l'accès, vous pouvez aller directement à votre entrée dans {{ fr.DVLS }}. Vous avez maintenant temporairement accès à l'entrée.

## Demander un accès temporaire à une entrée d'identifiants

Les utilisateurs peuvent demander l'accès à une entrée d'identifiants pour voir et copier les mots de passe. Le processus est le même que celui décrit ci-dessus. Une fois que l'approbateur vous a donné l'accès, vous pouvez voir le mot de passe.
![Voir le mot de passe](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6090.png)
Vous pouvez également cliquer avec le bouton droit sur l'entrée pour voir le mot de passe.
![Cliquer avec le bouton droit sur l'entrée pour voir le mot de passe](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6091.png)

## Révoquer votre accès temporaire

Pour une raison quelconque, vous pouvez révoquer votre accès temporaire. Assurez-vous de vouloir faire cela d'abord, car pour regagner l'accès à votre entrée, vous devrez faire une autre demande. Sinon, votre accès se terminera dans le délai fixé par vous et l'approbateur.

1. Aller à ***Rapports***.
![Rapports](https://cdnweb.devolutions.net/docs/DVLS6071_2024_1.png)
1. Sélectionner ***Rapport des Demandes d'Accès Temporaire***.
![Rapport des Demandes d'Accès Temporaire](https://cdnweb.devolutions.net/docs/DVLS6072_2024_1.png)
1. Cliquer sur ***Annuler la demande***.
![Annuler la demande](https://cdnweb.devolutions.net/docs/DVLS6073_2024_1.png)
1. La fenêtre suivante demandera si vous voulez vraiment annuler votre demande. Cliquer sur ***OK*** pour confirmer.
![Confirmation d'annulation de la demande](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp6051.png)

Votre accès temporaire a maintenant été révoqué.
