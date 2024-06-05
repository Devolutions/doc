---
eleventyComputed:
  title: "{{ fr.DSEND }}"
  description: "{{ fr.DSEND }} propose une méthode sécurisée pour générer un lien afin de partager des secrets au lieu d'utiliser un courriel non sécurisé pour envoyer des données sensibles."
  order: 100
---
{% youtube 'hClqb2jvGj0?si=fy1j76dooxGFho4g&amp;start=189' %}

Envoyer un mot de passe via la messagerie sécurisée intégrée ou par courriel à des contacts externes directement depuis une entrée. Créer un lien partageable pour envoyer des secrets en dehors de votre organisation de manière sécurisée.

Cette fonctionnalité nécessite que {{ fr.DVLS }} ait ***SMTP*** configuré. Cette option peut être trouvée sous ***Administration*** – ***Paramètres du serveur*** – ***Courriel***.
{% snippet, "badgeInfo" %}
De plus, ***Permettre aux utilisateurs d'envoyer le mot de passe avec {{ fr.DSEND }}*** doit être activé. Cette option peut être trouvée sous ***Administration*** – ***Paramètres du serveur*** – ***Fonctionnalités***. Elle est activée par défaut.
{% endsnippet %}

![Permettre aux utilisateurs d'envoyer le mot de passe avec {{ fr.DSEND }}](https://cdnweb.devolutions.net/docs/DVLS0000_2024_1.png)

## Fonctionnalités
{% snippet, "badgeInfo" %}
[{{ fr.DSEND_STANDALONE }}](https://devolutions.net/devolutions-send/) est également disponible si vous n'avez pas de licence pour l'un de nos produits compatibles.
{% endsnippet %}

Malgré le partage de la même architecture sous-jacente, de légères différences existent entre l'ensemble de fonctionnalités des versions autonome et intégrée de {{ fr.DSEND }}.

* Lien éphémère unique (24 heures) chiffré côté client.
* Protection optionnelle via une phrase secrète fournie par le client.
* Les utilisateurs peuvent être non-utilisateurs de Devolutions (non liés à un {{ fr.DA }}).
* Limite de caractères de 10 kb.
* Un courriel d'expéditeur est requis et stocké avec le GUID comme partie du « payload » stocké dans la base de données.

## Comment utiliser {{ fr.DSEND }} avec {{ fr.DVLS }}
1. Ouvrir la page web de {{ fr.DVLS }}.
1. Cliquer sur ***Messages*** à côté de l'avatar de l'utilisateur.
![Messages](https://cdnweb.devolutions.net/docs/DVLS0011_2024_1.png)
1. Cliquer ***Nouveau message***.
![Nouveau message](https://cdnweb.devolutions.net/docs/DVLS0002_2024_1.png)
1. Sélectionner l'une des trois options disponibles :
    * [Envoyer en interne](#envoyer-en-interne)
    * [Envoyer par courriel](#envoyer-par-courriel)
    * [Créer un lien partageable](#créer-un-lien-partageable)

### Envoyer en interne
![Envoyer en interne](https://cdnweb.devolutions.net/docs/DVLS0009_2024_1.png)
Cette fonctionnalité est couverte dans [***Messages sécurisés***](/server/web-interface/messages/).

### Envoyer par courriel
![Envoyer par courriel](https://cdnweb.devolutions.net/docs/DVLS0003_2024_1.png)
1. Entrer le(s) courriel(s) du destinataire dans le champ ***À***.
1. Entrer les informations dans le champ ***Message sécurisé***.
   {% snippet, "badgeInfo" %}
   Une ***Phrase secrète*** peut être ajoutée pour une sécurité supplémentaire.
   {% endsnippet %}
1. Cliquer ***Envoyer par courriel***.
![Envoyer par courriel](https://cdnweb.devolutions.net/docs/DVLS0005_2024_1.png)

### Créer un lien partageable
![Créer un lien partageable](https://cdnweb.devolutions.net/docs/DVLS0004_2024_1.png)
1. Entrer les informations dans le champ ***Message sécurisé***.
   {% snippet, "badgeInfo" %}
   Une ***Phrase secrète*** peut être ajoutée pour une sécurité supplémentaire.
   {% endsnippet %}
1. Cliquer sur ***Créer le lien***.
![Créer le lien](https://cdnweb.devolutions.net/docs/DVLS0006_2024_1.png)
1. Copier le lien et l'envoyer aux personnes concernées.
![Copier dans le presse-papiers](https://cdnweb.devolutions.net/docs/DVLS0007_2024_1.png)

## Envoyer une copie d'un mot de passe
Il est également possible d'envoyer un mot de passe directement à un autre utilisateur en interne ou en dehors de {{ fr.DVLS }} en utilisant {{ fr.DSEND }}. L'utilisateur doit avoir [l'autorisation de vue](/server/web-interface/user-groups-based-security/permissions/) sur cette entrée pour l'envoyer.
![Envoyer une copie](https://cdnweb.devolutions.net/docs/DVLS0008_2024_1.png)

La principale différence avec cette option est que le mot de passe est automatiquement ajouté et caché comme le message. Le mot de passe ne peut être modifié que si le texte est révélé (en cliquant sur l'icône de l'œil).
![Modifiable uniquement lorsqu'il est révélé](https://cdnweb.devolutions.net/docs/DVLS0010_2024_1.png)

Pour en savoir plus sur les fonctionnalités de ***Message sécurisé***, veuillez vous référer à la section ci-dessus sur [Comment utiliser {{ fr.DSEND }} avec {{ fr.DVLS }}](#comment-utiliser-devolutions-send-avec-devolutions-server).
