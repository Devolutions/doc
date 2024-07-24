---
eleventyComputed:
  title: Lier les comptes dans {{ fr.DHUBB }}
  description: La fonctionnalité de compte lié permet aux utilisateurs d'associer un autre compte sous le même utilisateur.
---
La fonctionnalité ***Compte lié*** permet aux utilisateurs d'associer un autre compte sous le même utilisateur. Cette fonctionnalité est particulièrement bénéfique lorsqu'un utilisateur a besoin de gérer différents comptes simultanément. Par exemple, un utilisateur peut avoir un compte avec l'adresse courriel "bob@windjammer.co" et un autre compte avec l'adresse courriel "_bob@windjammer.co", qui sert de compte élevé ou privilégié.
{% snippet, "badgeInfo" %}
Les deux utilisateurs doivent être créés avant de les lier ensemble.
{% endsnippet %}

Le but principal de ***Compte lié*** est d'améliorer la commodité de l'utilisateur et de rationaliser la gestion des comptes.
{% snippet, "badgeInfo" %}
Une seule licence est nécessaire pour chaque paire de ***Compte lié***.
{% endsnippet %}

## Lier les comptes
1. Se connecter à {{ fr.HUBB }} avec un compte administrateur.
1. Aller à ***Administration*** – ***Utilisateurs***.
![Utilisateurs](https://cdnweb.devolutions.net/docs/HUB0004_2024_2.png)
1. Cliquer sur ***Modifier*** pour l'utilisateur désiré.
![Modifier](https://cdnweb.devolutions.net/docs/HUB0005_2024_2.png)
1. Sélectionner l'autre compte dans le menu déroulant ***Compte lié***.
![Compte lié](https://cdnweb.devolutions.net/docs/HUB0006_2024_2.png)
1. Cliquer sur ***Mettre à jour*** pour sauvegarder les modifications et fermer la fenêtre.

Les comptes sont maintenant liés. La colonne ***Compte lié*** montre quel compte est associé à l'autre.

{% snippet, "badgeInfo" %}
Il n'y a pas de fonctionnalité de compte principal ou secondaire avec cette fonctionnalité ; cela signifie que l'ordre dans lequel ils sont liés n'a pas d'importance et chacun peut être dissocié puis lié à un compte différent sans problème.
{% endsnippet %}

{% snippet, "badgeInfo" %}
Pour basculer entre les deux comptes, il est nécessaire de se déconnecter et de se connecter avec le second compte.
{% endsnippet %}
