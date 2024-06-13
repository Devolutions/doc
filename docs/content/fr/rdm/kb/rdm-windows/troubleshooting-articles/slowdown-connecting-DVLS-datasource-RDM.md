---
eleventyComputed:
  title: Ralentissements lors de la connexion à une source de données {{ fr.DVLS }} avec {{ fr.RDM }}
  description: Se connecter à une source de données {{ fr.DVLS }} avec {{ fr.RDM }} peut parfois être lent. Il existe plusieurs moyens de résoudre rapidement ce problème.
---
Se connecter à une source de données {{ fr.DVLS }} avec {{ fr.RDM }} peut parfois être lent. Il existe plusieurs moyens de résoudre rapidement ce problème.

## Solution

### Désactiver la connexion Internet
Lorsque dans un environnement où l'accès Internet n'est pas autorisé, essayer d'activer ***Pas de connexion Internet*** dans ***Fichier*** – ***Paramètres*** – ***Avancé***. Ce faisant, cela empêche {{ fr.RDM }} de faire des appels à Internet qui pourraient causer des temps morts et des ralentissements.

![Pas de connexion Internet – paramètre avancé](https://cdnweb.devolutions.net/docs/RDMW4074_2024_2.png)

### Désactiver les vérifications de révocation des certificats
L'option ***Appliquer la vérification de révocation du certificat*** peut être temporairement laissée décochée dans ***Fichier*** – ***Paramètres*** – ***Sécurité***. Cela empêche Windows d'essayer d'atteindre les serveurs de révocation configurés dans le certificat. Dans la plupart des cas, les serveurs de révocation devraient être autorisés à travers le pare-feu à moins qu'ils ne soient également gérés localement.

![Appliquer la vérification de révocation du certificat – paramètre de sécurité](https://cdnweb.devolutions.net/docs/RDMW4075_2024_2.png)

{% snippet, "shieldInfo" %}
La vérification de révocation de certificat en ligne de Windows n'utilisera pas les proxies configurés sur l'hôte pour des raisons de sécurité.
{% endsnippet %}

Alternativement, activer ***Validation améliorée du certificat*** peut prévenir les déconnexions dans certains cas. Activer cette fonctionnalité amène {{ fr.RDM }} à valider les certificats en utilisant une méthode différente, contournant potentiellement la source des ralentissements.
![Validation améliorée du certificat – paramètre de sécurité](https://cdnweb.devolutions.net/docs/RDMW4075_2024_2.png)

### Utiliser le profileur de Bureau à distance intégré pour diagnostiquer les connexions

Pour diagnostiquer la durée de validation des certificats en utilisant le profileur intégré de {{ fr.RDM }}, cliquer sur le bouton ***Aide*** dans le volet supérieur et sélectionner le ***Profileur***.

![Profileur intégré de {{ fr.RDM }}](https://cdnweb.devolutions.net/docs/RDMW4078_2024_2.png)

Ensuite, aller à l'onglet ***Debug only***, cliquer sur le bouton des points de suspension, et cocher l'option ***Chronomètre***. Lancer une connexion et rechercher la ligne `Certificate Validation – Chain.Build`.

![Certificate Validation – Chain.Build](https://cdnweb.devolutions.net/docs/RDMW4077_2024_2.png)
