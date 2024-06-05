---
eleventyComputed:
  title: Configurer une entrée de redirection des identifiants dans {{ fr.RDM }}
  description: Apprendre à configurer une entrée de redirection des identifiants dans {{ fr.RDM }}
---
L'***entrée de redirection des identifiants*** permet le remplissage automatique à partir de n'importe quel gestionnaire de mots de passe et avec un navigateur Web favori.

## Créer une entrée de redirection des identifiants
1. Aller à ***Nouvelle Entrée*** – ***Gestion des Identifiants*** – ***Gestion des Mots de Passe*** – ***Redirection des Identifiants*** pour créer une nouvelle ***entrée de redirection des identifiants***.
![Créer une nouvelle entrée de redirection des identifiants](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6040.png)
1. Entrer un ***Nom*** et choisir un ***Dossier***.
1. Entrer un ***Nom ID*** (sensible à la casse). Celui-ci doit être unique dans votre dépôt. Il sera utilisé pour identifier les identifiants et sera exposé comme un sous-répertoire de l'URL utilisée pour intercepter les identifiants.
1. Sélectionner un navigateur spécifique, ou utiliser le navigateur par défaut.
![Sélectionner un navigateur spécifique, ou utiliser le navigateur par défaut](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6072.png)
1. Cliquer sur ***OK*** pour sauvegarder.
1. Ouvrir votre nouvelle ***entrée de redirection des identifiants***. {{ fr.RDM }} affiche le dialogue informatif suivant.
   Le navigateur sélectionné est lancé pour une URL qui ressemble à ceci : `http://127.0.0.1:9999/LastPass%20redirection/login.aspx`.

   Remarquez que la partie centrale est le ***Nom ID*** entré précédemment. Selon votre configuration, les identifiants sont entrés automatiquement, ou vous devez appuyer sur une combinaison de touches pour initier votre outil. Veuillez vous référer à la documentation de votre outil pour plus d'informations.
![Dialogue informatif](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6073.png)
1. Entrer vos identifiants pour les sauvegarder dans le navigateur.
![Entrer vos identifiants](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6075.png)
{{ fr.RDM }} traitera maintenant vos identifiants.
![{{ fr.RDM }} traitera maintenant vos identifiants](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6074.png)

## Ouvrir une session en utilisant l'entrée de redirection des identifiants
1. Créer une nouvelle entrée, nous utiliserons une entrée RDP pour cet exemple.
![Créer une nouvelle entrée](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6078.png)
1. Entrer un ***Nom*** et choisir un ***Dossier***.
1. Pour ***Identifiants***, sélectionner ***Lié ({{ fr.VLT }})*** puis votre ***entrée de redirection des identifiants*** nouvellement créée.
![Section des identifiants](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6077.png)
1. Sélectionner votre session puis la lancer. {{ fr.RDM }} affichera ce dialogue informatif.
![Dialogue informatif](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6079.png)
1. Dans le navigateur Web, entrer vos identifiants et appuyer sur ***Soumettre***. La page sera fermée après un délai.
![Entrer vos identifiants dans le navigateur Web](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6080.png)

La session RDP est lancée et l'authentification est réussie.
