---
eleventyComputed:
  title: "{{ fr.RDMMAC }} configurer Password Manager Pro"
---
Vous pouvez créer des entrées d'identifiants Password Manager Pro dans {{ fr.RDMMAC }}, cependant Password Manager Pro doit être configuré dans l'application avant son utilisation.

1. Se connecter à votre Password Manager Pro (https<area>://localhost:7272) en utilisant votre compte administrateur.
![!!KB4189](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4189.png)
1. Dans Password Manager Pro, cliquer sur ***Admin*** et sélectionner ***Utilisateurs***.
![!!KB4190](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4190.png)
1. Créer un nouvel utilisateur API.
![!!KB4191](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4191.png)
1. Lors de la création de votre utilisateur API, activer le ***REST API*** pour générer une clé de jeton d'authentification API.
   ![!!KB4192](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4192.png)

   Conserver une copie de la clé du jeton d'authentification, vous en aurez besoin pour configurer Password Manager Pro dans {{ fr.RDMMAC }}.
1. Dans {{ fr.RDMMAC }}, cliquer sur ***{{ fr.RDM }} – Paramètres de mon compte – Password Manager Pro***.
![!!KB4193](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4193.png)
1. Entrer l'utilisateur API que vous avez créé dans Password Manager Pro dans le champ ***Nom d'utilisateur***. Coller la ***clé du jeton d'authentification*** dans le champ ***Jeton*** et cliquer sur ***OK***.
![!!KB4194](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4194.png)

Vous pouvez maintenant créer une entrée d'identifiants Password Manager Pro dans {{ fr.RDMMAC }}.
