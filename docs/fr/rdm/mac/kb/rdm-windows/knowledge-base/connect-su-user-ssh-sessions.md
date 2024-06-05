---
eleventyComputed:
  title: Se connecter avec l'utilisateur su dans les sessions SSH
  description: Apprendre à se connecter avec l'utilisateur su dans les sessions SSH.
---
La commande Unix ***su***, dérivée de ***substitute user***, permet à un utilisateur d'exécuter des commandes avec les privilèges d'un autre compte utilisateur.

## Se connecter avec l'utilisateur su dans les sessions SSH

1. Aller dans les ***propriétés de l'entrée SSH*** dans {{ fr.RDM }}.

1. Aller dans ***Général – Post connexion*** et cliquer sur le ***bouton Plus (Nouveau)***.

![Général – Post connexion – bouton Plus (Nouveau)](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6030.png)

3. Entrer ***sudo su*** dans la fenêtre ***Édition de Macro***.

![Fenêtre Édition de Macro](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6031.png)

Un ***prompt attendu*** n'est pas nécessaire car nous voulons l'exécuter dès que possible.

4. Revenir dans ***Général – Post connexion*** et cliquer sur le ***bouton Plus (Nouveau)***.

1. Entrer la variable ***$PASSWORD$*** et ***[sudo] mot de passe pour username:*** dans le ***prompt attendu*** (***username*** est utilisé comme exemple).

1. Sélectionner le ***délai d'attente***.

1. Cliquer sur ***OK*** pour fermer la fenêtre.

![Fenêtre Édition de Macro](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6034.png)

L'objectif est de s'assurer que le mot de passe est envoyé uniquement lorsque le moment est opportun avec la séquence d'actions prévue. Le terminal attend le prompt ***[sudo] mot de passe pour username:*** avant d'envoyer la seconde commande.

![Commandes](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6033.png)
