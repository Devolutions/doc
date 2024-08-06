---
_schema: default
eleventyComputed:
  title: Messages sécurisés
  description: >-
    Envoyer et recevoir des messages sécurisés avec les utilisateurs de votre hub. Cliquez sur l'icône
    Messages à côté de votre avatar pour commencer.
---
Envoyer et recevoir des ***messages sécurisés*** avec les utilisateurs de votre hub. Cliquez sur l'icône ***Messages*** à côté de votre avatar pour commencer. ![Messages](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0005.png)

## Envoyer un message sécurisé

{% snippet, "badgeInfo" %}Pour activer cette fonctionnalité, [l'envoi de messages doit être activé](/hub/web-interface/administration/management/users/#edit-a-user) sous ***Administration – Utilisateurs***.{% endsnippet %}

1. Cliquer sur l'icône ***Messages*** à côté de votre avatar.<br> ![Messages](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0015.png)
2. Cliquer sur ***Nouveau message***.<br> ![Nouveau message](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0014.png)
3. Sélectionner ***Envoyer en application***.<br> ![Envoyer en application](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub0007.png) <br>{% snippet, "badgeHelp" %}Pour en savoir plus sur les options ***Envoyer par courriel*** et ***Créer un lien partageable***, visitez [{{ fr.DSEND }}](/hub/send/).{% endsnippet %}
4. Sélectionner au moins un destinataire dans le menu déroulant.

   ![Destinataire(s)](https://cdnweb.devolutions.net/docs/HUBB2369_2024_2.png)

5. Remplir le ***Sujet*** et écrire le corps de votre ***message sécurisé***.![Sujet et texte du corps](https://cdnweb.devolutions.net/docs/HUBB2370_2024_2.png)
6. Optionnel :
   * ***Expire après*** : Définir une date et une heure pour que le message se supprime automatiquement après l'envoi.
   * ***Haute priorité*** : Forcer le message à apparaître directement dans l'interface web lors du prochain démarrage de session de l'utilisateur ou immédiatement s'ils sont déjà connectés. Cette fonctionnalité est particulièrement utile lors de l'intégration de nouveaux utilisateurs à votre hub.<br>![Expiration et priorité](https://cdnweb.devolutions.net/docs/HUBB2371_2024_2.png)
7. Cliquer sur ***Envoyer*** pour transmettre le message.

## Envoyer une copie d'un dossier/entrée avec des messages sécurisés

Vous pouvez envoyer une copie de l'un de vos dossiers ou entrées à d'autres utilisateurs avec des messages sécurisés. Envoyer une copie d'un dossier envoie également une copie des entrées qu'il contient. Cela s'applique également aux entrées contenant des sous-entrées. Des copies de toutes les pièces jointes seront envoyées sans historique ni journaux.

{% snippet, "badgeInfo" %}Pour activer cette fonctionnalité, assurez-vous que [les pièces jointes sont autorisées lors de l'envoi de messages](/hub/web-interface/administration/management/users/#edit-a-user) sous ***Administration – Utilisateurs***.{% endsnippet %}

1. Sélectionner le dossier/entrée dans votre ***{{ fr.NPANE }}***.
2. Cliquer sur ***Plus***, puis sélectionner ***Envoyer une copie***.<br> ![Plus – Envoyer une copie](https://cdnweb.devolutions.net/docs/HUBB2372_2024_2.png)
3. Sélectionner au moins un destinataire dans le menu déroulant.<br>![Destinataire(s)](https://cdnweb.devolutions.net/docs/HUBB2373_2024_2.png)
4. Remplir le ***Sujet*** et écrire le corps de votre ***message sécurisé***.![Sujet et texte du corps](https://cdnweb.devolutions.net/docs/HUBB2374_2024_2.png)
5. Optionnel :
   * ***Expire après*** : Définir une date et une heure pour que le message se supprime automatiquement après l'envoi.
   * ***Haute priorité*** : Forcer le message à apparaître directement dans l'interface web lors du prochain démarrage de session de l'utilisateur ou immédiatement s'ils sont déjà connectés. Cette fonctionnalité est particulièrement utile lors de l'intégration de nouveaux utilisateurs à votre hub.<br>![Expiration et priorité](https://cdnweb.devolutions.net/docs/HUBB2375_2024_2.png)
6. Cliquer sur ***Envoyer*** pour transmettre le message. Une copie des pièces jointes sera envoyée sans historique ni journaux.

## Recevoir un message sécurisé

Si le message sécurisé a été marqué comme ***Haute priorité***, il apparaîtra directement dans l'interface web lors du prochain démarrage de session de l'utilisateur ou immédiatement s'ils sont déjà connectés. Sinon, un point bleu apparaîtra sur l'icône du message pour signifier que l'utilisateur a des messages non lus.

1. Cliquer sur le bouton ***Messages***.<br> ![Messages](https://cdnweb.devolutions.net/docs/HUBB2376_2024_2.png)
2. Cliquer sur le nouveau message dans la boîte de réception. Les messages non lus ont une teinte bleue.<br> ![Nouveaux messages](https://cdnweb.devolutions.net/docs/HUBB2377_2024_2.png)

Voici à quoi ressemble l'interface des messages :

![Interface des messages](https://cdnweb.devolutions.net/docs/HUBB2378_2024_2.png)

Lors de la visualisation d'un message, le destinataire voit les informations suivantes :

* Le nom de l'expéditeur.
* Le sujet et le texte du corps du message.
* L'heure d'envoi du message et, le cas échéant, son heure d'expiration.
* Le nom de toutes les pièces jointes.

L'utilisateur a accès aux actions suivantes :

* ***Répondre*** : Ouvre une fenêtre pour répondre au message actuellement visualisé.
* ***Fermer*** : Ferme la fenêtre de message actuellement ouverte sans la supprimer. Le message sera marqué comme lu.
* ***Enregistrer dans {{ variables.UVLT.fr }}*** : Enregistre automatiquement toutes les pièces jointes dans le coffre de l'utilisateur. Cette action est disponible uniquement si le message comprend des pièces jointes.
* ***Enregistrer sous*** : Ouvre une fenêtre permettant au destinataire de spécifier l'emplacement pour enregistrer les pièces jointes dans le {{ variables.DHUB.null }}. Cette action est disponible uniquement si le message comprend des pièces jointes.