---
eleventyComputed:
  title: Rapport de données
---
La session de type ***Rapport de Données*** peut être utilisée pour permettre à tous les utilisateurs de générer des rapports, sans avoir à leur accorder l'accès au serveur réel.
## Paramètres
### Général
![!!KB4545](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4545.png)
Créer une entrée de Rapport de Données et définir la chaîne de connexion soit par :

* Spécifier la connexion dans l'entrée elle-même.
* Utiliser une entrée d'identifiants.
* Héritée d'un parent.
* Demander les identifiants.
### Paramètres
![!!KB4546](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4546.png)
Spécifier les paramètres en définissant le nom, le type et la valeur par défaut de tous les paramètres.
### Requête
![!!KB4547](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4547.png)
Entrer la requête dans l'onglet Requête, qui présente une boîte de texte avec syntaxe SQL mise en évidence et numéros de ligne.
{% snippet, "badgeInfo" %}
Assurer que votre DBA configure les groupes d'utilisateurs appropriés, et que chaque utilisateur spécifique y a accès.
{% endsnippet %}
