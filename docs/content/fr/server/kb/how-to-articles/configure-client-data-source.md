---
eleventyComputed:
  title: Configurer une source de données client
---
1. Dans {{ fr.RDM }} sélectionner ***Fichier – Sources de données***.
![!!KB4365](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4365.png)

1. Ajouter une ***Nouvelle Source de Données***.
![!!KB4366](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4366.png)

1. Sélectionner la source de données ***{{ fr.DVLS }}***.
![!!KB4367](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4367.png)

1. Spécifier les paramètres.
![!!KB4368](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4368.png)

{% snippet, "badgeInfo" %}
Si vous spécifiez %USERDOMAIN%\%USERNAME% dans la zone de texte des informations d'identification utilisateur, la valeur des variables d'environnement correspondantes sera utilisée.
{% endsnippet %}

## Notes

Si le serveur est configuré pour autoriser uniquement SSL, assurez-vous de spécifier le protocole en utilisant https:// comme protocole.
