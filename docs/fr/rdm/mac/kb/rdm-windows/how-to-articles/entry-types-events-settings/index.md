---
eleventyComputed:
  title: Paramètres des événements de types d'entrées
  description: "{{ fr.RDM }} vous offre la flexibilité d'exécuter automatiquement des opérations avant ou après l'établissement d'une connexion."
---
{{ fr.RDM }} vous offre la flexibilité d'exécuter automatiquement des opérations avant ou après l'établissement d'une connexion.

Ces opérations sont définies via la section ***Événements*** des propriétés d'une session. Définir un script ou une ligne de commande qui s'exécute au moment approprié avec les paramètres fournis, tels que l'ID de session ou le nom d'utilisateur. Par exemple, les événements peuvent être utilisés pour exécuter un fichier batch externe ou une application qui demande plus d'informations à l'utilisateur, ou pour mettre à jour un journal sur un serveur distant.
![Événements](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4618.png)
## Paramètres
La section ***Événements*** est composée de quatre onglets. Tous peuvent exécuter les mêmes événements. Mais à des moments spécifiques, comme avant l'établissement de la connexion ou après son interruption.

| OPTION               | DESCRIPTION                                                                              |
|----------------------|------------------------------------------------------------------------------------------|
| Aucun                | Aucun script, ligne de commande ou message d'invite n'est exécuté.                       |
| Script               | Sélectionner un fichier de script à exécuter. Le fichier VBScript (*.vbs) est le seul format pris en charge. |
| Ligne de Commande    | Entrer une ligne de commande à exécuter.                                                 |
| Message d'Invite     | Entrer un message à afficher.                                                            |
| Macros/Scripts/Outils| Sélectionner une entrée Macros/Scripts/Outils de la source de données.                   |
| PowerShell           | Sélectionner un script PowerShell depuis un disque local.                                |
| Copier dans le presse-papiers | Fournir du texte à copier dans le presse-papiers.                                     |

### Avant la Connexion – Divers
La section ***Divers*** de l'onglet ***Avant la Connexion*** permet d'allumer le dispositif distant avant d'essayer d'établir la connexion.

Veuillez noter que pour que la fonction Wake-on-LAN fonctionne :

* Le dispositif distant doit prendre en charge la fonction Wake-on-LAN.
* L'adresse MAC doit être renseignée dans la section ***Informations*** des propriétés de la session.

![Avant la Connexion](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4619.png)

| OPTION        | DESCRIPTION                                                 |
|---------------|-------------------------------------------------------------|
| Mode d'Allumage | Activer le Wake-on-LAN.                                     |
| Délai d'attente  | Entrer le délai avant de réessayer de réveiller le dispositif distant.  |
| Nombre de tentatives   | Entrer le nombre de fois pour essayer de réveiller le dispositif distant. |

### Après la Connexion – Macro
![Après la Connexion](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4620.png)
{% snippet, "shieldWarning" %}
Cette fonctionnalité utilise simplement un mécanisme de base d'envoi de frappes fourni par le .NET Framework, simulant quelqu'un utilisant le clavier. Elle envoie les frappes au système d'exploitation lui-même, et elles sont gérées par QUELQUE application qui a le focus à ce moment-là. Si le focus est changé pour une autre fenêtre, les identifiants seront très probablement révélés en étant tapés dans une zone de texte.

Il est vivement déconseillé d'utiliser cette fonctionnalité dans un environnement où les mots de passe doivent être cachés à l'utilisateur.
{% endsnippet %}

| OPTION                | DESCRIPTION                                                |
|-----------------------|------------------------------------------------------------|
| Exécuter automatiquement | Exécuter la macro automatiquement lorsque la session est ouverte.  |
| Attente initiale          | Entrer le délai avant que la macro soit exécutée.              |
| Type                  | Sélectionner comment la macro est exécutée. Choisir entre : <ul><li>***Défaut*** : Entrer manuellement une macro de frappe.</li><li>***Lien*** : Sélectionner une macro/script/outil existant de la source de données.</li></ul> |
| Macro de frappe          | Entrer la macro de frappe à exécuter.                         |
| Mot de passe de la macro        | Entrer un mot de passe à demander avant d'exécuter la macro. |
| Délai de temps            | Entrer le temps de délai pour l'instruction {DELAY}.          |
| Commande               | Entrer le temps de délai entre chaque commande.                 |