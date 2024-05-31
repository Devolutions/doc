---
eleventyComputed:
  title: Demander un accès temporaire à une entrée dans {{ fr.RDM }}
  order: 10
  description: La fonctionnalité Accès Temporaire permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour exécuter une entrée spécifique. L'approbateur doit ensuite approuver ou refuser la demande.
---
{% youtube 'En3pmonz1f8' %}

{% snippet, "badgeNotice" %}
Cette vidéo contient des informations destinées à la fois aux demandeurs et aux approbateurs. Un utilisateur souhaitant demander un accès temporaire à une entrée peut trouver cette aide visuelle utile, mais regarder la vidéo n'est pas essentiel puisque toutes les étapes sont décrites dans ce sujet.

Pour apprendre à approuver ou refuser une demande, visiter [Approuver un accès temporaire à une entrée dans {{ fr.RDM }}](/rdm/windows/user-interface/content-area/temporary-access/approve-temporary-access/).
{% endsnippet %}

La fonctionnalité ***Accès Temporaire*** permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour exécuter une entrée spécifique. L'approbateur doit ensuite approuver ou refuser la demande.

## Demander un accès temporaire

{% snippet, "badgeInfo" %}
La durée de l'***Accès Temporaire*** commence lorsque la demande est approuvée.
{% endsnippet %}

Suivre les étapes ci-dessous pour apprendre à faire une demande d'accès temporaire :

1. Dans le ***{{ fr.NPANE }}*** de {{ fr.RDM }}, ouvrir l'entrée à laquelle vous souhaitez accéder en double-cliquant dessus.
1. Un message apparaîtra demandant si vous souhaitez envoyer une demande pour obtenir un accès temporaire. Cliquer sur ***Oui***.
![Envoyer une demande d'accès temporaire](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2059.png)
1. Dans la fenêtre ***Demande d'Accès Temporaire***, sélectionner ***Durée de l'accès***. Vous pouvez cliquer sur ***Définir une période personnalisée*** si vous avez besoin d'un accès pour une période spécifique.
1. Choisir l'approbateur à qui vous souhaitez envoyer la demande.
![Demande d'Accès Temporaire](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6011.png)
1. Écrire un court ***Message*** à l'approbateur expliquant pourquoi vous souhaitez accéder à cette entrée et à ses dépendances. Cela est facultatif, mais nous le recommandons fortement car cela permet à l'approbateur de prendre une décision plus éclairée. Lorsque vous avez terminé, cliquer sur ***Envoyer la Demande***.
1. Un message apparaîtra indiquant que la demande a été envoyée à l'approbateur. Cliquer sur ***OK*** pour le faire disparaître.

Vous devez maintenant attendre que l'approbateur réponde à votre demande. Selon leurs paramètres, vous pourriez être notifié par courriel lorsqu'ils répondront, que la réponse soit positive ou négative.

Si vous ne recevez pas de courriel, essayez d'accéder à l'entrée dans {{ fr.RDM }}. Si vous pouvez y accéder, cela signifie que l'approbateur a accepté votre demande. Sinon, nous vous suggérons de les contacter pour savoir s'ils l'ont refusée ou simplement pas encore répondu.

Une fois que l'approbateur vous a accordé l'accès, vous pouvez aller directement à votre entrée dans {{ fr.RDM }}. Vous avez maintenant temporairement accès à l'entrée. L'approbateur évaluera ensuite si l'accès est approprié avant de l'accorder.

## Demander un accès temporaire à une entrée d'identifiants

Les utilisateurs peuvent demander l'accès à une entrée d'identifiants pour voir et copier les mots de passe. Le processus est le même que celui décrit ci-dessus. Une fois que l'approbateur vous a donné l'accès, vous pouvez utiliser les boutons ***Voir le Mot de Passe***, ***Copier le Nom d'Utilisateur***, ***Copier le Nom d'Utilisateur et le Mot de Passe*** et ***Copier le Mot de Passe***.
![Voir le Mot de Passe, Copier le Nom d'Utilisateur, Copier le Nom d'Utilisateur et le Mot de Passe et Copier le Mot de Passe](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6026.png)
Vous pouvez également voir ces boutons en cliquant avec le bouton droit sur l'entrée.
![Clic droit sur l'entrée](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6216.png)

## Révoquer votre accès temporaire

Pour une raison quelconque, vous pouvez révoquer votre accès temporaire. Assurez-vous de vouloir faire cela d'abord, car pour regagner l'accès à votre entrée, vous devrez faire une autre demande. Sinon, votre accès prendra fin dans le délai fixé par vous et l'approbateur.

1. Sélectionner votre entrée dans le ***{{ fr.NPANE }}***. Ensuite, depuis le menu ***Actions*** de votre ***Tableau de Bord***, cliquer sur ***Révoquer l'Accès Temporaire***.
![Révoquer l'Accès Temporaire](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2065.png)
1. Cliquer sur ***Oui*** lorsqu'on vous demande si vous êtes sûr de vouloir révoquer votre accès temporaire.
![Confirmer la révocation de l'accès temporaire](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin2066.png)
1. La fenêtre suivante indiquera que la révocation a été exécutée. Cliquer sur OK pour faire disparaître cette fenêtre.

Votre accès temporaire a maintenant été révoqué.
