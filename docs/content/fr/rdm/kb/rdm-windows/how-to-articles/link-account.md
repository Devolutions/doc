---
eleventyComputed:
  title: Lier des comptes dans {{ fr.RDMWIN }}
  description: La fonctionnalité de compte lié permet aux utilisateurs d'associer un autre compte sous le même utilisateur.
  status: Sujet disponible en langue allemande
  keywords:
  - Lié
---
La fonctionnalité de ***Compte Lié*** permet aux utilisateurs d'associer un autre compte sous le même utilisateur. Cette fonctionnalité est particulièrement bénéfique lorsqu'un utilisateur a besoin de gérer différents comptes simultanément. Par exemple, un utilisateur peut avoir un compte avec l'adresse courriel "bob@windjammer.co" et un autre compte avec l'adresse courriel "_bob@windjammer.co", qui sert de compte élevé ou privilégié.
{% snippet, "badgeInfo" %}
Il est nécessaire de créer les deux utilisateurs avant de les lier ensemble.
{% endsnippet %}

Le but principal du ***Compte Lié*** est d'améliorer la commodité de l'utilisateur et de rationaliser la gestion des comptes.
{% snippet, "badgeInfo" %}
Une seule licence est nécessaire pour chaque paire de ***Compte Lié***.
{% endsnippet %}

## Étapes
1. Dans une source de données ***Petite équipe*** ou ***Entreprise***, se connecter avec un administrateur.
1. Dans le ***Ruban***, aller à ***Administration*** – ***Gestion*** – ***Utilisateurs***.
![Onglet Administration](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0073.png)
1. Sélectionner l'un des utilisateurs que vous souhaitez associer, puis cliquer sur ***Modifier l'utilisateur***.
![Modifier l'utilisateur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0074.png)
1. Aller à l'onglet ***Compte Lié***.
1. Sélectionner l'autre compte dans le menu déroulant.
![Compte Lié](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0075.png)
1. Cliquer sur ***OK*** pour sauvegarder les modifications et fermer la fenêtre, puis cliquer sur ***Fermer***.

Les comptes sont maintenant liés. Il est possible de vérifier quels comptes sont liés en retournant à la fenêtre ***Gestion des utilisateurs et de la sécurité***, qui se trouve sous le bouton ***Utilisateurs***, et en faisant défiler jusqu'à la colonne ***Compte Lié***.
{% snippet, "badgeInfo" %}
Il n'y a pas de fonctionnalité de compte principal ou secondaire avec cette fonctionnalité ; ce qui signifie que l'ordre dans lequel ils sont liés n'a pas d'importance et chacun peut être délié puis relié à un compte différent sans problème.
{% endsnippet %}
{% snippet, "badgeInfo" %}
Pour basculer entre les deux comptes liés, il est recommandé d'avoir une source de données correspondante utilisant chaque identifiant.
{% endsnippet %}
