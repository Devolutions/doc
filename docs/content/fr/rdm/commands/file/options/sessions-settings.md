---
eleventyComputed:
  title: Sessions
  description: Aller dans Fichier – Paramètres – Types – Sessions pour contrôler le comportement de l'application par rapport aux sessions.
---
Aller dans ***Fichier – Paramètres – Types – Sessions*** pour contrôler le comportement de l'application par rapport aux sessions.
![Fichier – Paramètres – Types – Sessions](https://cdnweb.devolutions.net/docs/RDMW4003_2024_1.png)

## Paramètres

### Options de connexion

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Autoriser le mode source de crédential intégré (ancien)            | Autoriser le mode Crédential Intégré dans les entrées. Ce mode est obsolète et non recommandé. Veuillez consulter les [Options de Crédentials](/rdm/windows/commands/edit/entries/entry-credentials-options/) disponibles. |
| Autoriser les sous-entrées                                         | Autoriser la création de sous-entrées.         |
| Ouvrir automatiquement l'emplacement du fichier après l'enregistrement de session  | Après un enregistrement de session, cela ouvrira le dossier de destination où le fichier est enregistré.        |
| Désactiver le message de confirmation de fermeture de tout  | Désactiver le message de confirmation de fermeture lors de la fermeture/déconnexion de plusieurs entrées en même temps.           |
| Désactiver la vérification du mot de passe compromis (pwned)                | Désactiver la fonction de vérification pwned si elle n'est pas forcée par l'administrateur dans ***Administration – Paramètres Système – Validation du Mot de Passe***.    |
| Désactiver le DPAPI sur le cache hors ligne | Désactiver le chiffrement DPAPI sur le cache hors ligne. Ce chiffrement est fourni par Windows et utilisé pour rendre le cache hors ligne plus sécurisé. |
| Désactiver le cache de l'éditeur de formulaire                                 | Désactiver le cache de l'éditeur de formulaire et forcer {{ fr.RDM }} à toujours récupérer les informations. Il n'est pas recommandé de désactiver cette fonction pour des raisons de performance.        |
| Désactiver le message de confirmation de déconnexion                      | Lors de l'appui sur le bouton de déconnexion dans une session RDP intégrée, {{ fr.RDM }}, déconnectera la session sans le message de confirmation de déconnexion.    |
| Désactiver les gestionnaires d'événements système                             | Utilisé uniquement à des fins de diagnostic. Ne pas activer sauf recommandation de notre équipe de support.          |
| Désactiver la vue miniature pour Google Chrome                  | Désactiver la vue miniature pour Google Chrome dans ***Affichage – Miniatures*** pour améliorer la performance de l'application.         |
| Activer la journalisation des événements globaux pour Telnet et SSH (DevolutionsTerminal.log) | Activer la journalisation des événements globaux pour les entrées Telnet et SSH. Cela créera le fichier DevolutionsTerminal.log au même endroit où le fichier de configuration est situé.        |
| Activer les verrous de lecture/écriture hors ligne        | Activer les verrous pour les droits de lecture/écriture hors ligne.    |
 Assurer que KeePass est en cours d'exécution                            | Valider que KeePass est en cours d'exécution sur votre ordinateur avant d'accéder à toute donnée KeePass.         |
| Forcer l'actualisation avant l'édition d'une entrée                           | Effectuer une actualisation de l'entrée avant d'entrer en mode édition. Cela est utile dans un environnement multi-utilisateur avec une source de données partagée. Cela garantit que vous éditez la version la plus récente de l'entrée.                                                      |
| Forcer la restauration de l'application avec le raccourci du bureau           | Lors d'un double-clic sur le raccourci du bureau, cela restaurera l'application déjà ouverte. Si l'option n'est pas cochée, une seconde fenêtre {{ fr.RDM }} s'ouvrira.     |
| Ouvrir la session de raccourci en silence                              | Désactiver le message d'avertissement de ligne de commande lors de l'utilisation d'un raccourci.          |
| Afficher les types de sources de données obsolètes                         | Certaines sources de données ne sont plus prises en charge. Activer cette option les affichera à nouveau.          |
| Utiliser l'optimisation du chargeur de connexion                        | Activer cette option uniquement sur demande de notre équipe de support.           |
| Utiliser les images de dossier héritées                                  | Activer cette option pour utiliser les images de dossier héritées.                  |
