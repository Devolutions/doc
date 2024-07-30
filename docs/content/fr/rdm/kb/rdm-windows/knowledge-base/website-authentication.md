---
eleventyComputed:
  title: Authentification sur un site Web avec {{ fr.RDMWIN }}
  status: Sujet disponible en langue allemande
---
L'entrée de site Web est utile pour pointer vers un site Web et avoir les informations de connexion déjà remplies. Certaines étapes sont nécessaires pour envoyer correctement le nom d'utilisateur et le mot de passe et selon le site Web, le processus peut être automatique ou peut nécessiter des étapes supplémentaires.
![Entrée de site Web](https://cdnweb.devolutions.net/docs/RDMW0016_2024_2.png)

## Aperçu des champs d'entrée de site Web
* ***Nom d'utilisateur*** : Saisir le nom d'utilisateur pour ce site Web.
* ***Domaine*** : Saisir le domaine pour ce site Web.
* ***Mot de passe*** : Saisir le mot de passe pour ce site Web.
![Identifiants](https://cdnweb.devolutions.net/docs/RDMW0017_2024_2.png)

* ***Remplissage automatique de la connexion*** : Remplit automatiquement les champs d'identification lors de l'ouverture de la page Web.
* ***Délai de remplissage automatique*** : Définir un délai entre l'ouverture de la page Web et la tentative de fonction de remplissage automatique.
* ***Soumission automatique*** : Soumet automatiquement les identifiants et essaie de se connecter au site Web.
{% snippet, "badgeInfo" %}
Dans l'onglet ***Connexion***, l'***Authentification*** doit être réglée sur ***Formulaire*** et les options ***Remplissage automatique de la connexion*** et ***Soumission automatique*** activées.
{% endsnippet %}

![Paramètres de connexion](https://cdnweb.devolutions.net/docs/RDMW0018_2024_2.png)

La commande ***Découvrir*** recherche les champs dans la page Web qui correspondent à ceux de l'entrée. Cela permet à l'application de trouver les champs appropriés à remplir lors de la connexion au site Web.
![Contrôle HTML](https://cdnweb.devolutions.net/docs/RDMW0019_2024_2.png)

## Dépannage des champs manquants
Pour certains sites Web, la fonction de remplissage automatique ne fonctionne pas automatiquement. Il est important de noter que certains sites Web vous empêcheront de remplir automatiquement vos identifiants. Cette méthode montre comment identifier manuellement les ID correspondant aux champs de connexion sur la page Web.

Pour les champs de nom d'utilisateur et de mot de passe, cliquez avec le bouton droit à l'intérieur de chaque champ et cliquez sur ***Inspecter***.
![Inspecter](https://cdnweb.devolutions.net/docs/RDMW0021_2024_2.png)

Vous verrez les ID correspondants à utiliser dans l'onglet ***Contrôle HTML*** de la session ***Site Web*** dans {{ fr.RDM }}.

Ci-dessous un exemple de l'inspection pour le champ ***Nom d'utilisateur***. Vous pouvez voir que l'ID du nom d'utilisateur est "username".
![ID de nom d'utilisateur](https://cdnweb.devolutions.net/docs/RDMW0020_2024_2.png)
