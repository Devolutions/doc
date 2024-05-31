---
eleventyComputed:
  title: Voir les données sensibles vs. injection des identifiants
---
Il est important d'apprendre les différences entre les 2 ensembles de permissions connus sous le nom de ***Voir les données sensibles lors de la réservation*** et ***Injection des identifiants***. Dans ce sujet, vous trouverez une explication de la manière dont ils sont utilisés.

Donner l'accès à ***Voir les Données Sensibles lors de la Réservation*** à un utilisateur permettra à cet utilisateur de voir le mot de passe lorsque l'entrée est réservée.
![Avec Accès](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2119.png)
![Sans accès](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2120.png)
***Injection des Identifiants*** permet à un utilisateur de réserver des identifiants pour une session depuis {{ fr.RDM }} directement sur l'entrée elle-même. Lors de l'ouverture de la session qui nécessite un compte privilégié, une pop-up peut apparaître avec la fenêtre de ***demande de réservation*** si l'entrée nécessite une approbation. Suite à l'approbation, l'utilisateur sera en mesure de lancer la session avec succès. Sinon, l'entrée sera utilisée de manière transparente pour ouvrir la session.
![Demande de Réservation d'Injection des Identifiants](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2121.png)
