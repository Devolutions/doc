---
eleventyComputed:
  title: Dépannage de la validation de domaine
  description: Lors de la configuration de l'authentification unique (SSO) dans votre {{ fr.DHUBB }}, la première étape consiste à vérifier votre domaine. Si vous rencontrez des problèmes lors de la tentative de validation de votre domaine, vérifier les éléments suivants.
---
Lors de [la configuration de l'authentification unique (SSO)](/hub/getting-started/get-started-sso-hub-business/) dans votre {{ fr.DHUBB }}, la première étape consiste à ***vérifier votre domaine***. Si vous rencontrez des problèmes lors de la tentative de validation de votre domaine, vérifier les éléments suivants.

## Vérifier votre domaine

S'assurer que le domaine que vous saisissez est celui actuellement utilisé pour votre {{ fr.DA }} et les locataires SSO. Il est crucial que le domaine que vous tentez de valider corresponde à celui associé à votre compte.

{% snippet, "badgeInfo" %}
Conseil : Si votre domaine se termine par **.loc**, il est probable qu'il ne soit pas le bon pour cet usage.
{% endsnippet %}

## Vérifier votre enregistrement TXT chez le fournisseur DNS

S'assurer que vous avez saisi le sous-domaine "_devolutions-challenge" comme un enregistrement TXT chez votre fournisseur DNS. Pour confirmer qu'il est correctement configuré, vous pouvez utiliser un outil de requête DNS tel que [MXToolBox](https://mxtoolbox.com/txtlookup.aspx) et saisir le domaine comme "_devolutions-challenge.windjammer.co", par exemple.

![Enregistrement TXT DNS dans MXToolBox](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2316.png)

## Vérifier votre défi

S'assurer que le défi utilisé dans le domaine contient la bonne chaîne et commence par "DEVOLUTIONS-DOMAIN-VERIFICATION=".

![Enregistrement TXT DNS dans MXToolBox](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2317.png)

## Réessayer la validation du domaine

48 heures après la configuration initiale, la recherche s'arrête si elle n'est toujours pas validée. Vous pouvez alors réessayer le processus de validation du domaine dans {{ fr.DHUBB }}. Pour ce faire, aller à ***Administration – Authentification – Domaine*** et cliquer sur ***Réessayer la validation du domaine***.

![Réessayer la validation du domaine](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2318.png)

## Contacter notre équipe de support

Si vous avez parcouru toute la liste et que la vérification de votre domaine est toujours infructueuse, le problème peut être plus profond et nécessiter une enquête plus approfondie. Dans ce cas, il est recommandé de contacter notre équipe de support technique pour obtenir de l'aide à [service@devolutions.net](mailto:service@devolutions.net).

Lorsque vous contactez le support, fournissez-leur toutes les informations pertinentes. Cela inclurait des informations telles que :
* Le fournisseur DNS que vous utilisez pour votre domaine.
* La région physique où votre système est situé.
* La région où votre hub est situé.

La collecte de ces données aidera grandement notre équipe de support à diagnostiquer et à résoudre tout problème sous-jacent de manière efficace.
