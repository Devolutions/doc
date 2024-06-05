---
eleventyComputed:
  title: Lier des comptes dans {{ fr.RDMMAC }}
  description: La fonctionnalité de compte lié permet aux utilisateurs d'associer un autre compte sous le même utilisateur.
---
La fonctionnalité ***Compte Lié*** permet aux utilisateurs d'associer un autre compte sous le même utilisateur. Cette fonctionnalité est particulièrement bénéfique lorsqu'un utilisateur a besoin de gérer différents comptes simultanément. Par exemple, un utilisateur peut avoir un compte avec l'adresse e-mail "bob@windjammer.co" et un autre compte avec l'adresse e-mail "_bob@windjammer.co", qui sert de compte élevé ou privilégié.
{% snippet, "badgeInfo" %}
Les deux utilisateurs doivent être créés avant de les lier ensemble.
{% endsnippet %}

Le but principal du ***Compte Lié*** est d'améliorer la commodité de l'utilisateur et de rationaliser la gestion des comptes.
{% snippet, "badgeInfo" %}
Une seule licence est nécessaire pour chaque paire de ***Compte Lié***.
{% endsnippet %}

## Étapes
1. Dans une source de données ***Petite équipe*** ou ***Entreprise***, se connecter avec un administrateur.
1. Dans le ***Ruban***, aller à ***Administration*** – ***Utilisateurs***.
![Onglet Administration](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0120.png)
1. Sélectionner l'un des utilisateurs que vous souhaitez associer, puis cliquer sur ***Modifier l'utilisateur...***.
![Modifier l'utilisateur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0121.png)
1. Aller à l'onglet ***Compte Lié***.
1. Sélectionner l'autre compte dans le menu déroulant.
![Compte Lié](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0122.png)
1. Cliquer sur ***OK*** pour sauvegarder les modifications et fermer la fenêtre, puis cliquer sur ***Fermer***.

Les comptes sont maintenant liés. Il est possible de vérifier quels comptes sont liés en retournant à la fenêtre ***Gestion des utilisateurs et de la sécurité***, qui se trouve sous le bouton ***Utilisateurs***, et en défilant jusqu'à la colonne ***Compte Lié***.
{% snippet, "badgeInfo" %}
Il n'y a pas de fonctionnalité de compte principal ou secondaire avec cette fonctionnalité ; cela signifie que l'ordre dans lequel ils sont liés n'a pas d'importance et chacun peut être délié puis relié à un compte différent sans problème.
{% endsnippet %}
{% snippet, "badgeInfo" %}
Pour basculer entre les deux comptes liés, il est recommandé d'avoir une source de données correspondante utilisant chaque identifiant.
{% endsnippet %}