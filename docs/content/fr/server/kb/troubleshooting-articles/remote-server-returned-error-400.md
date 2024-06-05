---
eleventyComputed:
  title: Le serveur distant a retourné une erreur (400) mauvaise requête
---
Vous obtenez le message d'erreur suivant lors de la tentative d'authentification sur l'instance {{ fr.DVLS }} avec {{ fr.RDM }}.
![!!KB4289](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4289.png)

## Solution

Il existe deux solutions différentes pour ce problème.

1. Réduire le nombre de groupes AD dont fait partie le compte utilisateur. Nous sommes conscients que la plupart du temps, en raison de la conception de la structure AD, il n'est pas possible de réduire le nombre de groupes AD.
2. Augmenter les paramètres pour les entrées de registre ***MaxFieldLength*** et ***MaxRequestBytes*** sur le serveur. Veuillez consulter l'article Microsoft suivant pour plus d'informations sur comment augmenter ces valeurs. [https://support.microsoft.com/en-us/help/2020943/http-400-bad-request-request-header-too-long-response-to-http-request](https://support.microsoft.com/en-us/help/2020943/http-400-bad-request-request-header-too-long-response-to-http-request)
