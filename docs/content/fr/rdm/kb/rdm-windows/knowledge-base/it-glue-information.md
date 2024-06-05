---
eleventyComputed:
  title: Informations sur IT Glue
---
Il existe certaines limitations à l'API fournie par IT Glue en raison de la nécessité d'une clé API privée. Cette clé API agit comme une authentification et donne accès aux organisations IT Glue.

Pour plus d'informations, veuillez consulter cet article dans la section [Générer une clé API](https://support.itglue.com/hc/en-us/articles/360004938078-Getting-started-with-the-IT-Glue-API)

L'important à retenir est le suivant : Tous les points de terminaison de l'API nécessitent une authentification à l'aide d'une clé API privée.

{% snippet, "shieldWarning" %}
Lorsque vous envoyez une requête à l'API, vous envoyez votre clé avec elle afin que nous sachions que c'est vous. Cela signifie que quiconque a votre clé peut accéder à vos données, il est donc important de la garder privée. Vous pouvez révoquer une ancienne clé API et en générer une nouvelle à tout moment depuis votre compte IT Glue. Toute requête effectuée avec votre ancienne clé ne fonctionnera plus.
{% endsnippet %}

Par conséquent, il y a 2 choix lors de l'utilisation d'IT Glue dans {{ fr.RDM }}

1. Tout le monde est administrateur. Puisque vous ne souhaitez pas partager la clé API avec tout le monde, vous pouvez créer une session en mode ***Toujours demander avec liste***. Cependant, de cette manière, tout le monde peut accéder à toutes les informations d'identification stockées dans l'organisation IT Glue sélectionnée. Ce n'est pas la meilleure solution en ce qui concerne la sécurité.
1. Avoir l'administrateur ou quelqu'un de digne de confiance créer des entrées spécifiques ciblant des informations d'identification IT Glue spécifiques dans {{ fr.RDM }} Ensuite, vous pouvez utiliser les permissions de {{ fr.RDM }} pour décider qui peut ***Voir*** l'entrée et qui peut ***Voir le mot de passe*** Si vous choisissez cette option, vous devrez vous assurer de bloquer les permissions ***Modifier*** sur toutes les entrées IT Glue afin de garantir que personne ne puisse modifier l'entrée et choisir un mot de passe qui n'est pas destiné pour eux.
