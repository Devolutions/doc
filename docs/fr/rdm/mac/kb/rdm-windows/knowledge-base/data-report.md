---
eleventyComputed:
  title: Rapport de données
---
Le type de session ***Rapport de Données*** peut être utilisé pour permettre à tout utilisateur de générer des rapports, sans avoir à lui accorder l'accès au serveur réel.
## Paramètres
### Général
![!!KB4545](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4545.png)
Créer une entrée de Rapport de Données et définir la chaîne de connexion en :

* Spécifiant la connexion dans l'entrée elle-même.
* Utilisant une entrée d'identifiants.
* Héritant d'un parent.
* Demandant les identifiants.
### Paramètres
![!!KB4546](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4546.png)
Spécifier les paramètres en définissant le nom, le type et la valeur par défaut de tous les paramètres.
### Requête
![!!KB4547](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4547.png)
Entrer la requête dans l'onglet Requête, qui présente une boîte de texte avec syntaxe SQL mise en évidence et numéros de ligne.
{% snippet, "badgeInfo" %}
Assurer que votre DBA configure les bons groupes d'utilisateurs, et que chaque utilisateur spécifique y a accès.
{% endsnippet %}
