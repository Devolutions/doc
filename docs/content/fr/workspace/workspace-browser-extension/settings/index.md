```yaml
eleventyComputed:
  title: Paramètres
  order: 20
  status: Sujet disponible en langue allemande
```
Les paramètres de {{ fr.WBEX }} peuvent être accédés via le bouton ***Paramètres*** dans la fenêtre de l'extension de navigateur, quel que soit l'application Devolutions que vous utilisez avec le {{ fr.WBEX }}.
![{{ fr.WBEX }} Bouton Paramètres](https://cdnweb.devolutions.net/docs/docs_en_dwl_Dwl2000.png)

Les ***Paramètres*** sont séparés en deux catégories : [***Configuration***](#configuration) et [***Sources de données***](#data-sources).
![{{ fr.WBEX }} Paramètres](https://cdnweb.devolutions.net/docs/docs_en_dwl_Dwl4027.png)

### Configuration
Les paramètres ***Généraux*** concernent l'interface utilisateur et l'interaction.
* Onglet ***Général***
    * Afficher l'icône {{ fr.WBEX }} dans les champs d'identification.
    * Afficher l'invite lors de l'enregistrement des identifiants lors d'une nouvelle connexion.
    * Afficher les options du menu contextuel.
    * Colorer les champs qui sont remplis avec le {{ fr.WBEX }}.
    * Définir le thème de couleur ***Thème*** de l'application.

* Onglet ***Avancé***
    * Désactiver la télémétrie analytique.
    * Activer les versions Bêta du {{ fr.WBEX }}.

La ***Liste Jamais*** affiche la liste des sites web ajoutés localement auxquels l'utilisateur ne sera jamais invité à enregistrer ses identifiants.

* Les types sont ***Jamais ajouter le site***, ***Jamais remplir automatiquement***, ***Jamais faire quoi que ce soit***, et ***Jamais afficher les icônes dans les champs***.
* Les options de correspondance sont ***Domaine de base***, ***Hôte***, ***Commence par***, ***RegEx***, et ***Exact***.

Les ***Paramètres d'Import/Export*** permettent de sauvegarder et de transférer vos paramètres préférés actuellement définis.

* Importer les paramètres depuis d'autres navigateurs ou utilisateurs.
* Choisir d'exporter les ***Paramètres*** du {{ fr.WBEX }}, les modèles de ***Générateur de mot de passe***, et la ***Liste Jamais***.

### Sources de données
Les paramètres des ***Sources de données*** sont utilisés pour personnaliser les interactions du {{ fr.WBEX }} avec [{{ fr.RDM }}](#remote-desktop-manager), [{{ fr.DVLS }}](#devolutions-server), et [{{ fr.DHUBB }} ou {{ fr.DHUBP }}](#devolutions-hub-business-ou-devolutions-hub-personal).

### {{ fr.RDM }}
| ONGLET GÉNÉRAL                           | DESCRIPTION                                                             |
|---------------------------------------|-------------------------------------------------------------------------|
| Activer l'application {{ fr.RDM }}               | Récupérer les entrées depuis {{ fr.RDM }} lorsque l'application est ouverte.        |
| Utiliser le port par défaut (19443)              | Communiquer avec le port par défaut 19443 entre l'application.        |
| Ajouter l'entrée dans {{ fr.UVLT }} par défaut | Sauvegarder les nouvelles entrées dans le {{ fr.UVLT }}.                                  |
| Dossier de destination                    | Choisir le dossier où les identifiants sont stockés dans le {{ fr.VLT }}. |

| ONGLET ACTIONS                                     | DESCRIPTION                                                      |
|-------------------------------------------------|------------------------------------------------------------------|
| Récupérer automatiquement les identifiants au chargement de la page | Le {{ fr.WBEX }} recherche automatiquement les identifiants dans la source de données lors de la connexion à un site web. Si désactivé, cliquer sur l'icône {{ fr.WBEX }} pour récupérer manuellement les identifiants. |
| Remplir automatiquement les identifiants au chargement       | Remplir automatiquement les identifiants lors du chargement d'une page web.      |
| Soumettre automatiquement le formulaire après le remplissage     | Soumettre automatiquement les identifiants lorsque les champs sont remplis. |

| ONGLET AVANCÉ            | DESCRIPTION                                                                              |
|-------------------------|------------------------------------------------------------------------------------------|
| Clé d'application         | Sécuriser la communication avec une clé d'application en utilisant le même code dans {{ fr.RDM }} et le {{ fr.WBEX }}.<br>Naviguer vers ***Fichier*** – ***Paramètres*** – ***Extensions de navigateur*** dans {{ fr.RDM }} pour définir la clé d'application. |
| Activer la messagerie native | Échanger des messages avec une application native installée sur l'ordinateur de l'utilisateur.            |
| Utiliser l'API ancienne          | Utiliser l'ancienne API d'extension de navigateur pour la compatibilité avec les anciennes versions de {{ fr.RDM }}. |

### {{ fr.DVLS }}
| ONGLET GÉNÉRAL          | DESCRIPTION                                                             |
|----------------------|-------------------------------------------------------------------------|
| Activer {{ fr.DVLS }} | Récupérer les entrées depuis {{ fr.DVLS }}.                                    |
| Dossier de destination   | Choisir le dossier où les identifiants sont stockés dans le {{ fr.VLT }}. |
| URL du serveur           | Entrer l'URL de l'instance {{ fr.DVLS }} pour se connecter.              |

| ONGLET ACTIONS                                     | DESCRIPTION                                                      |
|-------------------------------------------------|------------------------------------------------------------------|
| Récupérer automatiquement les identifiants au chargement de la page | Le {{ fr.WBEX }} recherche automatiquement les identifiants dans la source de données lors de la connexion à un site web. <br> <br> Si désactivé, cliquer sur l'icône {{ fr.WBEX }} pour récupérer manuellement les identifiants. |
| Remplir automatiquement les identifiants au chargement       | Remplir automatiquement les identifiants lors du chargement d'une page web.      |
| Soumettre automatiquement le formulaire après le remplissage     | Soumettre automatiquement les identifiants lorsque les champs sont remplis. |

| ONGLET AVANCÉ                     | DESCRIPTION                                                               |
|----------------------------------|---------------------------------------------------------------------------|
| Type de comparaison par défaut             | Définir une option de comparaison par défaut entre ***Domaine de base***, ***Hôte***, ***Commence par***, ***RegEx***, ***Exact***, et ***Jamais***. |
| Synchroniser tous les {{ fr.VLT }}s disponibles | Activer pour synchroniser tous les {{ fr.VLT }}s disponibles depuis {{ fr.DVLS }}. |

### {{ fr.DHUBB }} et {{ fr.DHUBP }}
| ONGLET GÉNÉRAL                                     | DESCRIPTION                                                 |
|-------------------------------------------------|-------------------------------------------------------------|
| Activer {{ fr.DHUBB }}/Personnel                  | Récupérer les entrées depuis {{ fr.DHUB }}.                        |
| URL du serveur (disponible avec {{ fr.DHUBB }} seulement) | Entrer l'URL de l'instance {{ fr.DHUBB }} pour se connecter. |
| Nom d'utilisateur                                        | Entrer un nom d'utilisateur pour se connecter à {{ fr.DHUB }} avec.          |

| ONGLET ACTIONS                                 | DESCRIPTION                                                      |
|---------------------------------------------|------------------------------------------------------------------|
| Remplir automatiquement les identifiants au chargement   | Remplir automatiquement les identifiants lors du chargement d'une page web.      |
| Soumettre automatiquement le formulaire après le remplissage | Soumettre automatiquement les identifiants lorsque les champs sont remplis. |

| ONGLET AVANCÉ                                                          | DESCRIPTION                                             |
|-----------------------------------------------------------------------|---------------------------------------------------------|
| Connexion {{ fr.DA }}                                                     | Définir votre URL de connexion {{ fr.DA }}.                         |
| Afficher le Favicon                                                          | Afficher le favicon {{ fr.WBEX }}.                      |
| {{ fr.WBEX }}                                                         | Activer ou désactiver le {{ fr.WBEX }} avec {{ fr.DHUB }}. |
| Type de comparaison par défaut                                                  | Définir une option de comparaison par défaut entre ***Domaine de base***, ***Hôte***, ***Commence par***, ***RegEx***, ***Exact***, et ***Jamais***. |
| Synchroniser tous les {{ fr.VLT }}s disponibles (disponible avec {{ fr.DHUBB }} seulement) | Activer pour synchroniser tous les {{ fr.VLT }}s disponibles depuis {{ fr.DHUBB }}. |
