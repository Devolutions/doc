---
eleventyComputed:
  title: "{{ fr.DSEND_STANDALONE }}"
  description: "{{ fr.DSEND_STANDALONE }} propose une méthode sécurisée pour générer un lien afin de partager des secrets au lieu d'utiliser un courriel non sécurisé pour envoyer des données sensibles."
---
{% youtube 'hClqb2jvGj0?si=wZ4vQVa6vte0riOX&amp;start=37' %}

![!!DevolutionsSendLogo](https://cdnweb.devolutions.net/images/projects/devolutions-send/devolutions-send-color-shadow.svg)

[{{ fr.DSEND_STANDALONE }}](https://devolutions.net/devolutions-send/) propose une méthode sécurisée pour générer un lien afin de partager des secrets au lieu d'utiliser un courriel non sécurisé pour envoyer des données sensibles.

## Fonctionnalités
{% snippet, "badgeInfo" %}
La version intégrée de {{ fr.DSEND }} est actuellement en développement et sera déployée progressivement dans {{ fr.RDM }}, {{ fr.DVLS }}, et {{ fr.DHUB }}. Plus d'informations seront fournies ultérieurement.
{% endsnippet %}

Malgré une architecture sous-jacente commune, de légères différences existent entre l'ensemble de fonctionnalités des versions autonome et intégrée de {{ fr.DSEND }}.

* Lien court unique à durée de vie limitée (24 heures) chiffré côté client.
* Protection optionnelle via une phrase secrète fournie par le client.
* Les utilisateurs peuvent ne pas être des utilisateurs de Devolutions (non liés à un {{ fr.DA }}).
* Limite de caractères de 10 ko.
* Un courriel de l'expéditeur est requis et stocké avec le GUID comme partie du « payload » stocké dans la base de données.

## Comment utiliser {{ fr.DSEND_STANDALONE }}
1. Aller sur le site [{{ fr.DSEND_STANDALONE }}](https://send.devolutions.com/).
1. Entrer le ***courriel de l'expéditeur***, qui est requis et stocké avec le GUID comme partie du « payload » stocké dans la base de données.
1. Entrer votre ***message sécurisé*** à chiffrer.
1. Ajouter une ***phrase secrète*** pour une sécurité supplémentaire (obligatoire si le destinataire n'a pas de {{ fr.DA }}, optionnelle autrement).
1. Lire et accepter nos [conditions des services en ligne](https://devolutions.net/legal/online-services-terms/).
1. Cliquer sur ***Créer un lien sécurisé*** pour obtenir votre lien court chiffré dans le navigateur, à durée de vie limitée de 24 heures.
![{{ fr.DSEND_STANDALONE }} interface](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2363.png)

## Comment recevoir un secret {{ fr.DSEND_STANDALONE }}
1. Cliquer sur le lien chiffré reçu.
   {% snippet, "badgeCaution" %}
   Un secret {{ fr.DSEND_STANDALONE }} commencera toujours par `https://send.devolutions.com/receive/`.
   {% endsnippet %}
1. Entrer la ***phrase secrète*** fournie par l'expéditeur (si nécessaire) et cliquer sur ***Déchiffrer***.
![Bouton Déchiffrer](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0187.png)
1. Cliquer sur ***Démasquer le texte***.
   {% snippet, "shieldCaution" %}
   Assurez-vous d'être dans un cadre privé avant de lire ce message s'il contient des informations sensibles.
   {% endsnippet %}

   ![Démasquer le texte](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0188.png)
1. Une fois terminé, cliquer sur ***Supprimer maintenant***.
1. Cliquer ***Oui***.
![Bouton Oui](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0189.png)
![Message sécurisé supprimé](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0190.png)

## Détails techniques
Le principe fondamental de {{ fr.DSEND }} est que Devolutions lui-même ne peut pas déchiffrer le secret de l'utilisateur. Cela est accompli via un chiffrement côté client (navigateur) grâce à un programme Rust compilé en WASM (WebAssembly) dans le navigateur. Par conséquent, Devolutions ne détient pas la clé de chiffrement et ne peut pas déchiffrer les données.
