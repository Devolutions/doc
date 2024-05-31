---
eleventyComputed:
  title: Lier des comptes dans {{ fr.DVLS }}
  description: La fonctionnalité de compte lié permet aux utilisateurs d'associer un autre compte sous le même utilisateur.
---
La fonctionnalité ***Compte Lié*** permet aux utilisateurs d'associer un autre compte sous le même utilisateur. Cette fonctionnalité est particulièrement bénéfique lorsqu'un utilisateur a besoin de gérer différents comptes simultanément. Par exemple, un utilisateur peut avoir un compte avec l'adresse courriel "bob@windjammer.co" et un autre compte avec l'adresse courriel "_bob@windjammer.co", qui sert de compte élevé ou privilégié.
{% snippet, "badgeInfo" %}
Les deux utilisateurs doivent être créés avant de les lier ensemble.
{% endsnippet %}

Le but principal du ***Compte Lié*** est d'améliorer la commodité de l'utilisateur et de rationaliser la gestion des comptes.
{% snippet, "badgeInfo" %}
Une seule licence est nécessaire pour chaque paire de ***Compte Lié***.
{% endsnippet %}

## Étapes
1. Se connecter à {{ fr.DVLS }} avec un compte administrateur.
1. Aller à ***Administration*** – ***Gestion de la Sécurité*** – ***Utilisateurs***.
![Utilisateurs](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0117.png)
1. Sélectionner l'un des utilisateurs que vous souhaitez associer, puis cliquer sur ***Modifier***.
![Modifier](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0118.png)
1. Aller à l'onglet ***Compte Lié***.
1. Sélectionner l'autre compte dans la liste déroulante.
![Compte Lié](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0119.png)
1. Cliquer sur ***Mettre à jour*** pour sauvegarder les modifications et fermer la fenêtre.

Les comptes sont maintenant liés. La colonne ***Compte Lié*** montre quel compte est associé à l'autre.
{% snippet, "badgeInfo" %}
Il n'y a pas de fonctionnalité de compte principal ou secondaire avec cette fonctionnalité ; cela signifie que l'ordre dans lequel ils sont liés n'a pas d'importance et chacun peut être dissocié puis lié à un compte différent sans problème.
{% endsnippet %}
{% snippet, "badgeInfo" %}
Pour basculer entre les deux comptes liés, il est nécessaire de se déconnecter et de se connecter avec le second compte.
{% endsnippet %}
