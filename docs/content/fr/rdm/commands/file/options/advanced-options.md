---
eleventyComputed:
  title: Avancé
  description: Utiliser Fichier – Paramètres – Avancé pour contrôler le comportement de l'application par rapport aux paramètres de niveau inférieur.
---
Utiliser ***Fichier – Paramètres – Avancé*** pour contrôler le comportement de l'application par rapport aux paramètres de niveau inférieur.
![Fichier – Paramètres – Avancé](https://cdnweb.devolutions.net/docs/RDMW2019_2024_1.png)

## Paramètres

### Avancé

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Niveau de débogage                                      | Définir le niveau d'informations de débogage que {{ fr.RDM }} capturera. Ceci ne devrait être modifié que sur demande d'un technicien de support Devolutions car cela pourrait ralentir votre système.        |
| Journaux                        | Les journaux peuvent être sauvegardés dans un fichier ou dans un fichier de base de données. Sélectionner entre : <br> <ul><li>Les deux : Les journaux seront sauvegardés dans un fichier texte et dans un fichier de base de données.</li><li>Base de données : Les journaux seront sauvegardés dans un fichier nommé RemoteDesktopManager.log.db. Le fichier se trouve dans le dossier d'installation de l'application.</li><li>Fichier : Les journaux seront sauvegardés dans un fichier nommé RemoteDesktopManager.log. Le fichier se trouve dans le dossier d'installation de l'application.</li></ul> |
| Mode de soumission de ticket          | Choisir le mode de soumission de ticket : <br> </li><li>Par défaut</li><li>Envoyer le ticket au support<li>Ticket de forum</li></ul> |
| Forcer "localhost" lors de l'utilisation du port dynamique VPN    | Forcer l'utilisation de "localhost" lors de l'utilisation du port dynamique VPN. |
| Nombre de derniers commentaires         | Si une entrée est configurée pour demander un commentaire à l'ouverture/fermeture, une liste des derniers commentaires sera affichée pour aider l'utilisateur. Définir le nombre de derniers commentaires qui seront sauvegardés puis affichés dans cette liste. |
| Confirmer l'ouverture de sessions multiples si le nombre d'ouvertures est supérieur à | Sélectionner un nombre cible où l'ouverture massive de sessions demandera confirmation. |

### Autres Options – Général

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Ajouter un dossier dans la hiérarchie lors de l'ajout par lot                        | Lors de l'ajout de dossiers par lots, selon l'option choisie, les dossiers seront tous créés au même niveau ou seront enfants du dossier précédent.                                                                                                                                                                                              |
| Autoriser plusieurs instances                                        | Autoriser plus d'une instance de {{ fr.RDM }} à s'exécuter simultanément. Ceci n'est pas une pratique recommandée.                                                                                                                                                                                                                                                                                                                               |
| Autoriser une source de données non mise à niveau                                  | Autoriser {{ fr.RDM }} à fonctionner sur une source de données plus ancienne qui n'a pas été mise à niveau.                                                                                                                                                                                                                                                                                                                               |
| Vérifier le contenu focalisé lors de l'activation RDP                           | Si une session RDP demande le focus, elle tirera {{ fr.RDM }} au premier plan, en le focalisant.                                                                                                                                                                                                                                                                                                                                     |
| Désactiver la demande de confirmation lors de l'annulation dans les propriétés         | Activer pour supprimer la demande de confirmation lors de l'annulation de l'édition d'une entrée.                                                                                                                                                                                                                                                                                                                                  |
| Désactiver la trace de pile                                             | Désactiver les détails de la trace de pile lorsqu'une erreur se produit dans {{ fr.RDM }}. C'est une fonctionnalité de sécurité.                                                                                                                                                                                                                                                                                                                                |
| Désactiver la télémétrie                                               | Désactiver l'analyse des données ou des statistiques. La télémétrie est l'équivalent de Google Analytics. Noter que les statistiques sont anonymes.                                                                                                                                                                                                                                                                                                                              |
| Focaliser le contenu lors de l'activation de l'application                         | Mettre le focus sur la dernière session intégrée lorsque l'application est activée.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Verrouiller la sécurité intégrée : valider uniquement contre le contexte de domaine  | Le verrou de sécurité intégrée valide par défaut contre la machine locale et le contexte de domaine. Vous avez l'option de valider uniquement contre le domaine. Si activé, {{ fr.RDM }} effectuera le ***LogonUser*** en utilisant le domaine dans le nom d'utilisateur. L'option affectée est [Utiliser les informations d'identification de l'ordinateur comme mot de passe d'application](https://docs.devolutions.net/rdm/windows/commands/file/options/security/#application-security-local) dans ***Sécurité de l'application (Locale)***. Par défaut, sans cette option activée {{ fr.RDM }} utilisera ***Environment.MachineName*** qui est le nom ***NetBIOS*** de l'ordinateur local. <br><br>Par exemple, si l'option est activée et que les informations d'identification sont :<br><br>- Utilisateur : user1\domain1<br>- Mot de passe : password1<br>- Machine : testmachine1<br><br>Les informations d'identification résultantes pour la connexion seraient les suivantes :<br><br>- Utilisateur : user1<br>- Domaine : domain1<br>- Mot de passe : password1<br><br>Dans cet exemple, si l'option est désactivée, les informations d'identification seraient comme suit :<br><br>- Utilisateur : user1<br>- Domaine : testmachine1<br>- Mot de passe : password1 |
| Pas de connexion Internet                                          | Désactiver l'accès à Internet de l'application.   |
| Demander l'intégration au démarrage                                    | Activer pour être invité avec l'intégration de l'application au démarrage.      |
| Utiliser le répertoire de l'application pour la liste de lecture locale                   | Utiliser le dossier d'installation pour sauvegarder la liste de lecture locale qui a été créée.    |
| Utiliser le répertoire de l'application pour le cache hors ligne                     | Utiliser le dossier d'installation pour sauvegarder le fichier de cache hors ligne.       |
| Utiliser {{ fr.DUPDATER }}                                           | Modifier cette option uniquement sur demande de notre équipe de support.      |
| Utiliser Microsoft Office au lieu des éditeurs                         | Lors de l'ajout d'un nouveau document en sélectionnant un fichier pris en charge par une application Microsoft Office (Word, Excel), cela créera un document Word/Excel au lieu d'une entrée Éditeur de texte enrichi/Éditeur de feuille de calcul.     |
| Utiliser la compression ZipCrypto (non recommandé)                     | Activer cette option pour permettre la compression ZipCrypto dans {{ fr.RDM }}. Nous ne recommandons pas d'activer cette option. Voici un blog écrit par notre équipe de sécurité sur le sujet : [Pourquoi vous ne devriez jamais utiliser le .Zip Crypto natif dans Windows](https://blog.devolutions.net/2020/08/why-you-should-never-use-zipcrypto/).    |

### Autres options – Microsoft Edge

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Utiliser Microsoft Edge intégré pour la documentation et le markdown | Activer cette option permettra d'utiliser le navigateur Microsoft Edge au lieu d'Internet Explorer pour la documentation et le markdown. |
| Utiliser Microsoft Edge intégré pour le panneau d'aperçu | Activer cette option permettra d'utiliser le navigateur Microsoft Edge au lieu d'Internet Explorer pour le panneau d'aperçu. |
| Utiliser Microsoft Edge intégré pour les notes de version | Activer cette option permettra d'utiliser le navigateur Microsoft Edge au lieu d'Internet Explorer pour afficher les notes de version. |
| Utiliser Microsoft Edge intégré pour les rapports   | Activer cette option permettra d'utiliser le navigateur Microsoft Edge au lieu d'Internet Explorer pour afficher les rapports. |


### Autres options – Interface Utilisateur

| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Toujours afficher le bouton "Passer hors ligne"                   | Toujours afficher le bouton "Passer hors ligne" dans la barre d'état lorsque le [Mode Hors Ligne](/rdm/windows/data-sources/offline-mode/) est actif.                                             |
| Désactiver le sélecteur de documents (Ctrl+Tab)              | Lorsqu'activé, cela permettra de passer d'une connexion à onglets ouverts à une autre.   |
| Désactiver la restauration de la disposition                        | Désactiver la disposition des onglets configurée manuellement et restaurer les paramètres de disposition lors d'un redémarrage de {{ fr.RDM }}.   |
| Intégrer l'interface web de la source de données (expérimental) | Cette option est utilisée pour effectuer certaines actions, comme l'édition d'utilisateur, directement dans RDM en ouvrant l'interface web en mode intégré, au lieu de l'ouvrir à l'extérieur. Notez que cette option est uniquement prise en charge par Devolutions Server. |
| Activer la zone de texte des étiquettes dans les propriétés                 | Par défaut, le champ ***Étiquettes*** dans les propriétés d'une entrée ne peut être rempli qu'à travers le sélecteur d'étiquettes. Avec cette option, cette restriction est levée et vous pouvez écrire directement dans la zone de texte ***Étiquettes***.                                        |
| Masquer la dernière liste de lecture ouverte dans la gestion des listes de lecture| Masquer la dernière liste de lecture ouverte au démarrage dans la boîte de dialogue de la liste de lecture.     |
| Masquer la barre de progression du chargement des sources de données            | Masquer la barre de progression du chargement des sources de données lors du chargement.     |
| Garder la fenêtre Afficher le mot de passe au-dessus                  | Forcer la fenêtre ***Afficher le mot de passe*** à s'afficher au-dessus de toutes les fenêtres de {{ fr.RDM }}.     |
| Utiliser l'ancien tri des entrées                                | Utiliser l'ancien tri des entrées de la version précédente de {{ fr.RDM }}.      |

### Autres options - Diagnostic 
| OPTION                      | DESCRIPTION                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| Désactiver le chargement multithread    | Ce paramètre permet à {{ fr.RDM }} d'utiliser plusieurs threads pour charger les données. Désactiver cette option diminuera la performance.        |
| Désactiver le fichier hors ligne multithread  | Ce paramètre permet à {{ fr.RDM }} d'utiliser plusieurs threads dans le fichier hors ligne. Désactiver cette option diminuera la performance.      |
| Désactiver la gestion résiliente de la connexion à la base de données            | La gestion résiliente de la connexion à la base de données est un mécanisme que nous avons mis en place pour réessayer certaines connexions à la base de données dans {{ fr.RDM }} afin d'éviter certaines erreurs. Une certaine lenteur peut être attendue lorsqu'elle est activée.        |
| Désactiver les caches temporisés | Désactiver le stockage temporaire des données. |

### Information

| OPTION     | DESCRIPTION                                             |
|------------|---------------------------------------------------------|
| Créé le | Date de création du dossier de configuration de {{ fr.RDM }}. |
| Source     | Source des paramètres de configuration de {{ fr.RDM }}.      |
| Chemin       | Raccourci pour accéder directement au dossier de configuration.   |
