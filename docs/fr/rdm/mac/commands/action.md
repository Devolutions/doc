---
eleventyComputed:
  title: Action
---
Le ruban Actions contient des opérations qui ne peuvent être effectuées que sur une session en cours d'exécution. Le menu Actions ne sera pas visible s'il n'y a pas de session active en cours. Pour notre exemple, nous exécutons une session RDP, le ruban affichera l'onglet suivant lorsque la session est en mode intégré.
![Actions Ribbon](https://cdnweb.devolutions.net/docs/docs_en_rdm_mac_clip10331.png)

Alternativement, les Actions sont également disponibles en cliquant avec le bouton droit sur l'onglet d'une session intégrée.

## Paramètres

### Connecter
Les actions Connecter permettent de se reconnecter/déconnecter d'une ou plusieurs session(s) simultanément. Les actions sont différentes selon le type de session sélectionné.

| OPTION               | DESCRIPTION                                                                        |
|----------------------|------------------------------------------------------------------------------------|
| Reconnecter          | Fermer rapidement la session puis la rouvrir automatiquement. Utilisez-le pour mettre à jour la résolution de vos connexions RDP intégrées lorsque vous redimensionnez la fenêtre. |
| Fermer               | Fermer la session active.                                                          |
| Fermer tout          | Fermer toutes les sessions ouvertes.                                               |
| Fermer tous les autres onglets | Fermer toutes les sessions ouvertes sauf la session active.                         |
| Déconnecter          | Déconnecter la session active.                                                     |
| Exécuter             | Exécuter le macro ou script sélectionné dans la fenêtre précédente ou dans l'onglet courant. |


### Commandes
Les Commandes sont des actions envoyées à la session distante, elles sont donc différentes selon votre type de session.

| OPTION               | DESCRIPTION                                                                                                     |
|----------------------|-----------------------------------------------------------------------------------------------------------------|
| Envoyer Ctrl+Alt+Suppr | Envoyer la combinaison de touches <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Suppr</kbd> à l'hôte.                     |
| Charms               | Sur Windows 8 ou serveur Windows 2012, affiche la barre des Charms (Recherche, Partage, Démarrer, Périphériques et barre des Paramètres). |
| Barre d'applications | Sur Windows 8 ou serveur Windows 2012, affiche la barre d'applications pour montrer la navigation, les commandes et les outils. |
| Changement d'application | Sur Windows 8 ou serveur Windows 2012, passe d'une application à une autre.                                     |
| Vue seulement        | Empêche la session de recevoir une entrée du clavier ou de la souris. Cette fonctionnalité a été demandée pour permettre la surveillance tout en prévenant les erreurs de manipulation. Utilisez-la pour avoir un accès en lecture seule au serveur distant. |

### Paramètres
| OPTION                 | DESCRIPTION                                                 |
|------------------------|-------------------------------------------------------------|
| Garder l'onglet à la déconnexion | Votre onglet de session restera ouvert après une déconnexion de session. |
| Enregistrer la session sous        | Enregistrez votre session ouverte en tant que nouvelle entrée.                      |
| Dupliquer              | Ouvrir un onglet en double de votre session ouverte.                   |
