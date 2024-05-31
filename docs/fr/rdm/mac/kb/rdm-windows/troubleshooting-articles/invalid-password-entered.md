---
eleventyComputed:
  title: Mot de passe invalide saisi
---
Dans {{ fr.RDM }}, vous obtenez le message d'erreur ***Mot de passe invalide saisi***. Cette erreur se produit lorsque vous avez ces deux options activées : ***Sécurité de l'application (Locale)*** et ***Utiliser les identifiants de cet ordinateur comme mot de passe de l'application***.

![!!KB4627](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4627.png)

## Solution

Dans un environnement RDS (TerminalServices), trouver la politique GPO : ***Stratégies locales - Autoriser l'ouverture de session localement/refusé sauf administrateur***. Puis ajouter le groupe d'utilisateurs de {{ fr.RDM }} dedans.