---
eleventyComputed:
  title: Actions
  description: L'onglet Actions n'est disponible que lorsqu'une session est ouverte. Les actions disponibles diffèrent selon l'action.
---
L'onglet ***Actions*** n'est disponible que lorsqu'une session est ouverte. Les actions disponibles diffèrent selon l'action.

Pour notre exemple, nous exécutons une session RDP. Le ruban affichera l'onglet suivant lorsque la session fonctionne avec le mode d'affichage ***intégré (à onglets)***.
![Ribbon - Actions](https://cdnweb.devolutions.net/docs/RDMW6001_2023_3.png)

### Connexion

| Option    | Description                                                                                                      |
|-----------|------------------------------------------------------------------------------------------------------------------|
| Reconnecter | Fermer rapidement la session puis la rouvrir automatiquement en utilisant les identifiants résolus. Notez que les mots de passe peuvent changer périodiquement (par exemple, en raison de la rotation des mots de passe du Secret Server). Pour résoudre complètement les identifiants lors de la reconnexion, appuyer sur <kbd>Ctrl</kbd>+ ***Reconnecter Tout***. Alternativement, vous pouvez cliquer droit sur l'entrée et sélectionner <kbd>Ctrl</kbd>+ ***Reconnecter*** pour obtenir le même résultat. Utiliser ***Reconnecter*** pour mettre à jour la résolution de vos connexions RDP intégrées lorsque vous redimensionnez la fenêtre.    |
| Fermer     | Fermer la session active.                                                                                        |
| Déconnecter    | Se déconnecter de la session RDP.                                                                                 |
| Déconnexion Forcée    |Forcer la déconnexion de la session RDP.                                                                                 |
| Reconnecter Tout   | Reconnecter toutes les sessions en utilisant les identifiants résolus. Notez que les mots de passe peuvent changer périodiquement (par exemple, en raison de la rotation des mots de passe du Secret Server). Pour résoudre complètement les identifiants lors de la reconnexion, appuyer sur <kbd>Ctrl</kbd>+ ***Reconnecter Tout***. Alternativement, vous pouvez cliquer droit sur l'entrée et sélectionner <kbd>Ctrl</kbd>+ ***Reconnecter*** pour obtenir le même résultat.                                                                              |
| Fermer Tout   |  Fermer tous les onglets ouverts.                                                                                      |
| Fermer Tous les Autres Onglets  | Fermer tous les autres onglets ouverts.                                                                                       |
| Cacher   | Cacher l'onglet sélectionné.                                                                                       |

### Actions

| Option        | Description                                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------------------------- |
| Exécuter Macro/Script       | Afficher une fenêtre où vous pouvez sélectionner une macro ou un script, ainsi que les options d'exécution. |
| Taper Presse-papiers| Envoyer le contenu du presse-papiers vers la session ouverte.                                                   |


### Affichage

| Option           | Description                                                                                 |
| -----------------|-------------------------------------------------------------------------------------------- |
| Détacher           | Détacher votre session intégrée et la déplacer n'importe où en dehors de {{ fr.RDM }} ou même sur un autre moniteur. |
| Plein Écran      | Afficher votre session en plein écran en dehors de {{ fr.RDM }}.                                   |
| Écran Zone de Travail | Ouvrir la connexion en plein écran et avoir accès à votre barre des tâches locale.                   |


### Paramètres

| Option                 | Description                                                                            |
| ---------------------- | ---------------------------------------------------------------------------------------|
| Garder l'onglet à la déconnexion           | Votre onglet de session restera après une déconnexion de session. Pour plus d'informations, voir [Garder les onglets ouverts](/rdm/kb/rdm-windows/how-to-articles/keep-tabs-opened/).                |
| Ajustement Intelligent                     | Activer ou désactiver l'ajustement intelligent RDP. Ce paramètre déterminera si l'ordinateur client peut ou non mettre à l'échelle le contenu de l'ordinateur distant pour l'adapter à la taille de la fenêtre de l'ordinateur client.                                                           |
| Reconnexion Intelligente                  | Reconnecter automatiquement votre session avec la bande la plus appropriée.         |
| Touche Windows sur l'Ordinateur Distant | Lors de l'activation de la touche Windows, elle enverra la fonction à votre hôte au lieu de l'exécuter sur votre ordinateur. |

### Commandes

Cet onglet contient plusieurs types de commandes et de combinaisons de touches pour affecter la session actuelle dans diverses instances. Ainsi, ces commandes dépendent de l'entrée actuellement sélectionnée (et ouverte). Pour quelques scénarios d'exemple, référez-vous aux sujets suivants :

* [RDP](/rdm/windows/commands/actions/commands/rdp/)
* [VNC](/rdm/windows/commands/actions/commands/vnc/)
* [Telnet](/rdm/windows/commands/actions/commands/telnet/)

{% snippet, "badgeInfo" %}
Les compléments de session peuvent ajouter des commandes personnalisées dans cette section, elles ne seront pas documentées dans ces sujets mais plutôt dans la documentation du complément.
{% endsnippet %}

### Capture d'Écran

| Option                 | Description                                                                                     |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| Envoyer au Presse-papiers      | Effectuer une capture typique vers le presse-papiers.                                                    |
| Enregistrer dans un Fichier           | Demander un nom de fichier et enregistrer la capture dans ce fichier.                                     |
| Enregistrer dans un Fichier et Ouvrir  | Demander un nom de fichier et enregistrer la capture dans ce fichier, puis ouvrir automatiquement le fichier avec votre éditeur par défaut. |

### Vidéo

| OPTION | DESCRIPTION                                                                      |
|--------|----------------------------------------------------------------------------------|
| Enregistrer | Enregistrer votre écran au format MP4. Nous recommandons l'utilisation d'un lecteur VLC pour visionner la vidéo enregistrée. |

Ces actions sont également disponibles en cliquant droit sur l'onglet d'une session intégrée.
![Menu Contextuel des Actions d'une Session Intégrée](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10184.png)