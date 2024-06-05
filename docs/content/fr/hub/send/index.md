---
eleventyComputed:
  title: "{{ fr.DSEND }}"
  description: "{{ fr.DSEND }} propose une méthode sécurisée pour générer un lien afin de partager des secrets au lieu d'utiliser un courriel non sécurisé pour envoyer des données sensibles."
  order: 90
---
{% youtube 'hClqb2jvGj0?si=QhUVzmld4aADfx9q&amp;start=224' %}

Envoyer un mot de passe via la messagerie sécurisée intégrée ou par courriel à des contacts externes directement depuis une entrée. Créer un lien partageable pour envoyer des secrets en dehors de votre organisation de manière sécurisée.

Cette fonctionnalité nécessite que l'utilisateur ait ***Envoyer des messages avec pièces jointes*** activé. Cette option peut être trouvée sous ***Administration*** – ***Utilisateurs***.
![Envoyer des messages avec pièces jointes](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0013.png)

{% snippet, "badgeInfo" %}
L'option ***Partage de mot de passe externe*** doit également être activée pour que cette fonctionnalité fonctionne. L'option peut être trouvée sous ***Administration*** – ***Paramètres système*** – ***Avancé***. Elle est activée par défaut.
{% endsnippet %}

## Fonctionnalités
{% snippet, "badgeInfo" %}
[{{ fr.DSEND_STANDALONE }}](https://devolutions.net/devolutions-send/) est également disponible si vous n'avez pas de licence pour l'un de nos produits compatibles.
{% endsnippet %}

Malgré le partage de la même architecture sous-jacente, de légères différences existent entre l'ensemble de fonctionnalités des versions autonome et intégrée de {{ fr.DSEND }}.

* Lien unique de courte durée (24 heures) chiffré côté client.
* Protection optionnelle via une phrase secrète fournie par le client.
* Les utilisateurs peuvent ne pas être des utilisateurs de Devolutions (non liés à un {{ fr.DA }}).
* Limite de caractères de 10 kb.
* Un courriel expéditeur est requis et stocké avec le GUID comme partie du « payload » stocké dans la base de données.

## Comment utiliser {{ fr.DSEND }} avec {{ fr.DHUBB }}
1. Ouvrir la page web {{ fr.DHUBB }}.
1. Cliquer sur ***Messages*** à côté de l'avatar de l'utilisateur.
![Messages](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0015.png)
1. Cliquer sur ***Nouveau message***.
![Nouveau message](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0014.png)
1. Sélectionner l'une des trois options disponibles :
    * [Envoyer en interne](#envoyer-en-interne)
    * [Envoyer par courriel](#envoyer-par-courriel)
    * [Créer un lien partageable](#créer-un-lien-partageable)

### Envoyer en interne
![Envoyer en interne](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0007.png)
Cette fonctionnalité est couverte dans [***Messages sécurisés***](/hub/web-interface/secure-messages/).

### Envoyer par courriel
![Envoyer par courriel](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0008.png)
1. Entrer le(s) ***Courriel(s) du destinataire***.
1. Entrer les informations dans le champ ***Message sécurisé***.
   {% snippet, "badgeInfo" %}
   Une ***Phrase secrète*** peut être ajoutée pour une sécurité supplémentaire.
   {% endsnippet %}
1. Cliquer sur ***Soumettre***.
![Soumettre](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0019.png)

### Créer un lien partageable
![Créer un lien partageable](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0010.png)
1. Entrer les informations dans le champ ***Message sécurisé***.
   {% snippet, "badgeInfo" %}
   Une ***Phrase secrète*** peut être ajoutée pour une sécurité supplémentaire.
   {% endsnippet %}
1. Cliquer sur ***Créer le lien***.
![Créer le lien](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0020.png)
1. Copier le lien et l'envoyer aux personnes concernées.
![Copier dans le presse-papiers](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0012.png)

## Envoyer une copie d'un mot de passe
Il est également possible d'envoyer un mot de passe directement à un autre utilisateur en interne ou en dehors de {{ fr.DHUBB }} en utilisant {{ fr.DSEND }}. L'utilisateur doit avoir [***Permission de voir***](/hub/web-interface/administration/configuration-security/system-permissions/roles-permissions/) sur cette entrée pour l'envoyer.
![Envoyer une copie](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0021.png)

La principale différence avec cette option est que le mot de passe est automatiquement ajouté et caché comme le message. Le mot de passe ne peut être modifié que si le texte est révélé (en cliquant sur l'icône de l'œil).
![Modifiable uniquement lorsqu'il est révélé](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0022.png)

Pour en savoir plus sur les fonctionnalités de ***Message sécurisé***, veuillez vous référer à la section ci-dessus sur [Comment utiliser {{ fr.DSEND }} avec {{ fr.DHUBB }}](#comment-utiliser-devolutions-send-avec-devolutions-hub-business).
