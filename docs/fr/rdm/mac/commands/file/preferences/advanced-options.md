---
eleventyComputed:
  title: Avancé
  description: Utiliser Fichier – Préférences – Avancé pour contrôler le comportement de l'application par rapport aux paramètres de niveau inférieur.
---
Aller à ***Fichier – Préférences – Avancé*** pour contrôler le comportement de l'application par rapport aux paramètres de niveau inférieur.
![Fichier – Préférences – Avancé](https://cdnweb.devolutions.net/docs/RDMM4000_2024_1.png)

## Paramètres
| OPTION     | DESCRIPTION |
|------------|-------------|
| Niveau de débogage | Définir le niveau d'informations de débogage que {{ fr.RDMMAC }} capturera. Ceci ne devrait être modifié que sur demande d'un technicien de support Devolutions car cela pourrait ralentir votre système. |
| Journaux        | Les journaux peuvent être sauvegardés dans un fichier ou dans un fichier de base de données. Sélectionner entre :<ul><li>***Les deux*** : Les journaux seront sauvegardés dans un fichier texte et dans un fichier de base de données.</li><li>***Base de données*** : Les journaux seront sauvegardés dans un fichier nommé RemoteDesktopManager.log.db. Le fichier se trouve dans le dossier d'installation de l'application.</li><li>***Fichier*** : Les journaux seront sauvegardés dans un fichier nommé RemoteDesktopManager.log. Le fichier se trouve dans le dossier d'installation de l'application.</li></ul> |

### Connexion
| OPTION                                | DESCRIPTION                                                                |
|---------------------------------------|----------------------------------------------------------------------------|
| Fermer automatiquement l'onglet intégré à la déconnexion | Lorsqu'une session est déconnectée, l'onglet intégré se fermera automatiquement. |
| Désactiver le message de confirmation de déconnexion  | Lors de l'appui sur le bouton de déconnexion dans une session RDP intégrée, {{ fr.RDM }} déconnectera la session sans le message de confirmation de déconnexion. |

### Général
| OPTION                                           | DESCRIPTION                                                                           |
|--------------------------------------------------|---------------------------------------------------------------------------------------|
| Autoriser plusieurs instances                         | Autoriser plus d'une instance de {{ fr.RDMMAC }} à s'exécuter simultanément. Non recommandé. |
| Ouvrir automatiquement l'emplacement du fichier après l'enregistrement | Après l'enregistrement de la session, ouvre le dossier de destination.                                |
| Désactiver AppleScript                              | AppleScript est activé par défaut ; le désactiver ici si souhaité.                        |
| Désactiver les images Gravatar dans la gestion des utilisateurs       | Désactiver les images Gravatar dans ***Administration – Utilisateurs*** pour améliorer les performances.              |
| Désactiver toutes les images Gravatar                      | Désactiver toutes les images Gravatar pour améliorer les performances.                                         |
| Désactiver la vérification de mot de passe compromis (pwned)       | Désactiver la vérification pwned si elle n'est pas forcée dans ***Administration – Paramètres Système – Validation de Mot de Passe***. |
| Activer l'enregistrement des sessions                           | Enregistrer et suivre les activités et interactions avec {{ fr.RDMMAC }}.                    |
| Inviter à l'Onboarding au démarrage                     | Activer pour être invité avec l'Onboarding au démarrage.                                     |

### Options de l'interface utilisateur
| OPTION                                  | DESCRIPTION |
|-----------------------------------------|-------------|
| Désactiver les images personnalisées                   | Désactiver le chargement de toutes les images personnalisées dans l'arborescence. Trop d'images personnalisées pourraient augmenter considérablement la taille de la source de données et augmenter le temps de chargement en même temps. |
| Obtenir les icônes de fichiers à partir de leur type apparent | L'icône du fichier sera « déduite » de l'extension du fichier plutôt que de demander au système d'exploitation de résoudre l'image pour le fichier directement. Fonctionne uniquement pour les entrées de session ***FTP***, ***SFTP***, ***SCP***, et ***WebDAV***. |

### Agent de clé SSH
| OPTION                           | DESCRIPTION                                     |
|----------------------------------|-------------------------------------------------|
| Démarrer l'agent au démarrage de l'application | L'agent démarre lorsque vous ouvrez {{ fr.RDMMAC }}. |

### Avancé
| OPTION                                                       | DESCRIPTION                                                                  |
|--------------------------------------------------------------|------------------------------------------------------------------------------|
| Moteur hors ligne                                               | Vous pouvez choisir votre moteur hors ligne entre MCDF v2.0 (par défaut) ou SQLite (déprécié). Ne changez cette option que sur demande d'un technicien de support Devolutions. |
| Forcer l'utilisation de « localhost » lors de l'utilisation du port dynamique VPN                | Forcer l'utilisation de « localhost » lors de l'utilisation du port dynamique VPN.                |
| Confirmer l'ouverture de plusieurs sessions si le nombre d'ouvertures dépasse | Sélectionner un nombre cible où l'ouverture massive de sessions demandera confirmation. |
| Passer automatiquement en mode hors ligne lors d'un changement de réseau                   | Lors d'un changement de réseau, {{ fr.RDMMAC }} passe en mode Hors ligne.                 |
| Privilégier le GPU à faible consommation                                          | Privilégier l'utilisation du GPU qui nécessite le moins de puissance, si plusieurs GPUs sont disponibles. |
