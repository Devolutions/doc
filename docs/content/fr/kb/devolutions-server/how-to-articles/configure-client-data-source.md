---
eleventyComputed:
  title: Configurer une source de données client
---
1. Dans {{ fr.RDM }} sélectionner ***Fichiers - Sources de données***.
![!!KB4011](https://cdnweb.devolutions.net/docs/fr/kb/KB4011.png)
1. ***Ajouter une nouvelle source de données***.
![!!KB4012](https://cdnweb.devolutions.net/docs/fr/kb/KB4012.png)
1. Sélectionner la source de données ***{{ fr.DVLS }}***.
![!!KB4013](https://cdnweb.devolutions.net/docs/fr/kb/KB4013.png)
1. Définir les paramètres.
{% snippet icon.badgeInfo %}
Si vous saisissez %USERDOMAIN%\%USERNAME% dans la zone de texte des identifiants de l'utilisateur, la valeur des variables d’environnement qui y correspondent sera utilisée.
{% endsnippet %}

![!!KB4014](https://cdnweb.devolutions.net/docs/fr/kb/KB4014.png)
### N.B.
Si la configuration du serveur permet seulement l’utilisation du protocole SSL, assurez-vous de spécifier le protocole en saisissant https<area>://.

