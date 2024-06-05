---
eleventyComputed:
  title: "{{ fr.DSEND }}"
  description: "{{ fr.DSEND }} propose une méthode sécurisée pour générer un lien afin de partager des secrets au lieu d'utiliser un courriel non sécurisé pour envoyer des données sensibles."
  order: 120
---
{% youtube 'hClqb2jvGj0?si=SIrvPeMd-F6NF-RL&amp;start=141' %}

{{ fr.DSEND }} propose une méthode sécurisée pour générer un lien afin de partager des secrets au lieu d'utiliser un courriel non sécurisé pour envoyer des données sensibles. Envoyer un mot de passe via la messagerie sécurisée de l'application ou créer un lien partageable pour envoyer des secrets en dehors de votre organisation de manière sécurisée.

## Fonctionnalités
{% snippet, "badgeInfo" %}
[{{ fr.DSEND_STANDALONE }}](https://devolutions.net/devolutions-send/) est également disponible si vous n'avez pas de licence pour l'un de nos produits compatibles.
{% endsnippet %}

Malgré le partage de la même architecture sous-jacente, de légères différences existent entre l'ensemble des fonctionnalités des versions autonome et intégrée de {{ fr.DSEND }}.

* Lien éphémère unique (24 heures) chiffré côté client.
* Protection optionnelle via une phrase secrète fournie par le client.
* Les utilisateurs peuvent être non-utilisateurs de Devolutions (non liés à un {{ fr.DA }}).
* Limite de caractères de 10 kb.
* Un courriel d'expéditeur est requis et stocké avec le GUID comme partie du « payload » stocké dans la base de données.

## Utiliser {{ fr.DSEND }} avec {{ fr.RDM }}
{% snippet, "badgeInfo" %}
Ces étapes sont valides pour les sources de données {{ fr.DVLS }} et {{ fr.DHUBB }}. Seule l'[Envoyer un mot de passe depuis une entrée d'identifiants](#envoyer-un-mot-de-passe-depuis-une-entrée-d'identifiants) est disponible pour les sources de données SQL.
{% endsnippet %}

1. Dans le ruban, naviguer vers l'onglet ***Window***.
1. Cliquer sur ***Message***.  
![Message button](https://cdnweb.devolutions.net/docs/RDMW0016_2024_1.png)
1. Cliquer sur ***Send Message***.  
![Send Message](https://cdnweb.devolutions.net/docs/RDMW0017_2024_1.png)
1. Sélectionner l'une des deux options disponibles :
    * [Envoyer en application](#envoyer-en-application)
    * [Créer un lien partageable](#créer-un-lien-partageable)

### Envoyer en application
![Envoyer en application](https://cdnweb.devolutions.net/docs/RDMW0018_2024_1.png)
Cette fonctionnalité est couverte dans [***Messages sécurisés***](/rdm/commands/window/panels/secure-messages/).

### Créer un lien partageable
![Créer un lien partageable](https://cdnweb.devolutions.net/docs/RDMW0025_2024_1.png)
1. Entrer les informations dans le champ ***Message***.
   {% snippet, "badgeInfo" %}
   Une ***Phrase secrète*** peut être ajoutée pour une sécurité supplémentaire.
   {% endsnippet %}
1. Cliquer sur ***Créer un lien***.
![Créer un lien](https://cdnweb.devolutions.net/docs/RDMW0026_2024_1.png)
1. Copier le lien et l'envoyer à la ou les personnes concernées.
![Copier dans le presse-papiers](https://cdnweb.devolutions.net/docs/RDMW0028_2024_1.png)

### Envoyer un mot de passe depuis une entrée d'identifiants
1. Sélectionner une entrée d'identifiants.
1. Cliquer sur ***Envoyer un message***.  
![Envoyer un message](https://cdnweb.devolutions.net/docs/RDMW0031_2024_1.png)
   {% snippet, "badgeInfo" %}
   Une ***Phrase secrète*** peut être ajoutée pour une sécurité supplémentaire. Pour modifier le message, cliquer sur ***Révéler*** (bouton œil).
   {% endsnippet %}
1. Cliquer sur ***Créer un lien***.  
![Créer un lien](https://cdnweb.devolutions.net/docs/RDMW0032_2024_1.png)
1. Cliquer sur ***Copier***.  
![Copier](https://cdnweb.devolutions.net/docs/RDMW0033_2024_1.png)
1. Envoyer le lien à l'utilisateur ou aux utilisateurs concernés.

### Désactiver {{ fr.DSEND }} dans {{ fr.RDM }}
1. Dans une source de données SQL, aller à l'onglet ***Administration***.
1. Cliquer sur ***Paramètres système***.  
![Paramètres système](https://cdnweb.devolutions.net/docs/RDMW0029_2024_1.png)
1. Sous ***Spécifique à l'application*** – ***Applications*** – ***Général***, activer ***Désactiver l'envoi de messages dans le tableau de bord***.  
![Désactiver l'envoi de messages dans le tableau de bord](https://cdnweb.devolutions.net/docs/RDMW0030_2024_1.png)
1. Cliquer sur ***Enregistrer***.