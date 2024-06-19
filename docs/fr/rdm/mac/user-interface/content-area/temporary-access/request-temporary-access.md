---
eleventyComputed:
  title: Demander un accès temporaire à une entrée dans {{ fr.RDMMAC }}
  order: 10
  description: La fonctionnalité d'Accès Temporaire permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour exécuter une entrée spécifique. L'approbateur doit ensuite approuver ou refuser la demande.
---
{% snippet, "badgeNotice" %}
Pour apprendre à approuver ou refuser une demande, visiter [Approuver un accès temporaire à une entrée dans {{ fr.RDM }}](/rdm/mac/user-interface/content-area/temporary-access/approve-temporary-access/).
{% endsnippet %}

La fonctionnalité ***Accès Temporaire*** permet aux utilisateurs de demander une élévation temporaire de leurs permissions pour exécuter une entrée spécifique. L'approbateur doit ensuite approuver ou refuser la demande.

## Demander un accès temporaire

{% snippet, "badgeInfo" %}
La durée de l'***Accès Temporaire*** commence lorsque la demande est approuvée.
{% endsnippet %}

Suivre les étapes ci-dessous pour apprendre à faire une demande d'accès temporaire :

1. Dans le ***{{ fr.NPANE }}*** de {{ fr.RDM }}, ouvrir l'entrée à laquelle vous voulez accéder en double-cliquant dessus.
1. Un message apparaîtra demandant si vous voulez envoyer une demande pour obtenir un accès temporaire. Cliquer sur ***Oui***.
![Envoyer une demande d'accès temporaire](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6000.png)
1. Dans la fenêtre ***Demande d'Accès Temporaire***, sélectionner ***Durée d'accès***. Vous pouvez cliquer sur ***Définir une période personnalisée*** si vous avez besoin d'accès pour une période de temps spécifique.
1. Choisir l'approbateur à qui vous voulez envoyer la demande.
![Demande d'Accès Temporaire](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6001.png)
1. Écrire un court ***Message*** à l'approbateur expliquant pourquoi vous voulez accéder à cette entrée et ses dépendances. Ceci est optionnel, mais nous le recommandons fortement car cela permet à l'approbateur de prendre une décision plus éclairée. Lorsque vous avez terminé, cliquer sur ***Envoyer la Demande***.
1. Un message apparaîtra indiquant que la demande a été envoyée à l'approbateur. Cliquer sur ***OK*** pour le faire disparaître.

Vous devez maintenant attendre que l'approbateur réponde à votre demande. Selon leurs paramètres, vous pourriez être notifié par courriel lorsqu'ils répondent, que la réponse soit positive ou négative.

Si vous ne recevez pas de courriel, essayez d'accéder à l'entrée dans {{ fr.RDM }}. Si vous pouvez y accéder, cela signifie que l'approbateur a accepté votre demande. Sinon, nous vous suggérons de les contacter pour savoir s'ils l'ont refusée ou simplement pas encore répondu.

Une fois que l'approbateur vous a accordé l'accès, vous pouvez aller directement à votre entrée dans {{ fr.RDM }}. Vous avez maintenant temporairement accès à l'entrée.

## Demander un accès temporaire à une entrée d'identifiants

Les utilisateurs peuvent demander l'accès à une entrée d'identifiants pour voir et copier les mots de passe. Le processus est le même que décrit ci-dessus. Une fois que l'approbateur vous a donné l'accès, vous pouvez utiliser les boutons ***Voir le Mot de Passe***, ***Copier le Nom d'Utilisateur***, ***Copier le Nom d'Utilisateur et le Mot de Passe*** et ***Copier le Mot de Passe***. Vous pouvez également voir ces boutons en cliquant avec le bouton droit sur l'entrée.

{% snippet, "badgeInfo" %}
Si ***Permettre de révéler le mot de passe pour l'administrateur et les utilisateurs autorisés (<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Entrée</kbd>)*** n'est pas coché, les utilisateurs ne pourront pas accéder au mot de passe. Par conséquent, l'option ***Copier le Mot de Passe*** ne sera pas affichée. Aller dans le ruban de {{ fr.RDM }} et activer le paramètre sous ***Administration – Paramètres système – Politique de mot de passe***.
{% endsnippet %}

![Administration – Paramètres système – Politique de mot de passe](https://cdnweb.devolutions.net/docs/RDMM6000.png)

## Révoquer votre accès temporaire

Pour une raison quelconque, vous pouvez révoquer votre accès temporaire. Assurez-vous de vouloir faire cela d'abord, car pour regagner l'accès à votre entrée, vous devrez faire une autre demande. Sinon, votre accès se terminera dans le délai fixé par vous et l'approbateur.

1. Sélectionner votre entrée dans le ***{{ fr.NPANE }}***. Ensuite, depuis le menu ***Actions*** de votre ***Tableau de bord***, cliquer sur ***Révoquer l'Accès Temporaire***.
![Révoquer l'accès temporaire](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6003.png)
1. Cliquer sur ***Oui*** lorsqu'on vous demande si vous êtes sûr de vouloir révoquer votre accès temporaire.
![Confirmer la révocation de l'accès temporaire](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_RDMMac6004.png)
1. La fenêtre suivante indiquera que la révocation a été exécutée. Cliquer sur OK pour faire disparaître cette fenêtre.

Votre accès temporaire a maintenant été révoqué.