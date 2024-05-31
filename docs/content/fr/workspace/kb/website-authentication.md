---
eleventyComputed:
  title: Authentification sur les sites Web
  status: Sujet disponible en langue allemande
---
Pour certains sites Web, la fonction de remplissage automatique ne fonctionne pas automatiquement. Il est important de noter que certains sites Web vous empêcheront de remplir automatiquement vos identifiants.

Certaines étapes sont nécessaires pour envoyer correctement le nom d'utilisateur et le mot de passe. Selon le site Web, le processus peut être automatique ou peut nécessiter des étapes supplémentaires.

## Méthode 1

1. Saisir les identifiants dans l'onglet ***Général*** de l'entrée ***Site Web*** :
    * ***Nom d'utilisateur*** : Saisir le nom d'utilisateur pour se connecter sur le site Web.
    * ***Domaine*** : Saisir le domaine pour se connecter sur le site Web.
    * ***Mot de passe*** : Saisir le mot de passe pour se connecter sur le site Web.

   ![Identifiants](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4606.png)

1. Le {{ fr.WBEX }} est activé par défaut. Pour le désactiver, sélectionner ***Désactivé*** dans le menu déroulant ***{{ fr.WBEX }}***. Le [***Type de comparaison***](/workspace/kb/urls-comparing-types/) détermine si le {{ fr.WBEX }} doit proposer l'entrée comme une entrée disponible pour effectuer le remplissage automatique.
1. Dans l'onglet ***Connexion***, régler l'***Authentification*** sur ***Formulaire***.
1. Dans l'onglet ***Paramètres de connexion***, vérifier que les options ***Remplissage automatique de la connexion*** et ***Soumission automatique*** sont activées.
    * ***Remplissage automatique de la connexion*** : Remplit automatiquement les champs d'identification lors de l'ouverture de la page Web.
    * ***Délai de remplissage automatique*** : Définir un délai entre l'ouverture de la page Web et la tentative de fonctionnalité de remplissage automatique.
    * ***Soumission automatique*** : Soumet automatiquement les identifiants et essaie de se connecter au site Web.

   ![Paramètres de connexion](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4607.png)

1. Dans l'onglet ***ID de contrôle HTML de connexion***, cliquer sur le bouton ***Découvrir*** pour définir les champs appropriés.
![ID de contrôle HTML de connexion](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4608.png)

La commande ***Découvrir*** recherche les champs dans la page Web qui correspondent à ceux de l'entrée. Cela permet à l'application de trouver les champs appropriés à remplir lors de la connexion au site Web.

Une fois toutes les étapes nécessaires complétées, lors du lancement de la session, les identifiants seront automatiquement saisis et connectés au site.

## Méthode 2
La seconde méthode nécessite d'identifier manuellement les ID correspondant aux champs de connexion sur la page Web de connexion.

Pour cet exemple, Google Chrome sera utilisé pour inspecter les champs de connexion.

Pour les champs du nom d'utilisateur et du mot de passe, vous devrez faire un clic droit à l'intérieur de chaque champ et cliquer sur ***Inspecter***.
![Inspecter](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4107.png)

Vous verrez les ID correspondants à utiliser dans l'onglet ***ID de contrôle HTML*** de la session ***Site Web*** dans {{ fr.RDM }}.

Ci-dessous un exemple de l'inspection pour le champ ***Nom d'utilisateur***. Vous pouvez voir que l'ID du nom d'utilisateur est "username".

![ID du nom d'utilisateur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4108.png)
