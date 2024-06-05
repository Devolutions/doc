---
eleventyComputed:
  title: Barre d'accès rapide
---
La ***Barre d'Accès Rapide*** située en haut de l'application est composée de plusieurs parties :

* Icône du menu système.
* Commandes favorites.
* Contrôle de Connexion Rapide.
* Commande de verrouillage.

{% snippet, "badgeInfo" %}
Les boutons de la ***Barre d'Accès Rapide*** sont marqués localement sur la machine actuelle par l'utilisateur actuel. Ces boutons locaux sont sauvegardés dans un fichier nommé **RemoteDesktopManager.qtb**. Par défaut, ce fichier se trouve dans **%localappdata%\Devolutions\RemoteDesktopManager**.
{% endsnippet %}

### Commandes favorites

Les commandes contenues dans le ruban peuvent être ajoutées dans la barre d'accès rapide. Ce sont les commandes favorites. Pour ajouter une commande à la barre d'accès rapide, cliquer avec le bouton droit sur n'importe quelle icône dans le ruban puis sélectionner ***Ajouter***.
![Commandes Favorites](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11178.png)

| COMMANDE | DESCRIPTION |
|---------|-------------|
| ![!!RibbonNewDocumentSmall](https://cdnweb.devolutions.net/docs/docs_common_document-empty.png) | Créer une nouvelle entrée dans votre source de données actuelle.        |
| ![!!RibbonEditSmall](https://cdnweb.devolutions.net/docs/docs_common_edit.png) | Ouvrir la fenêtre des propriétés de votre entrée sélectionnée.                   |
| ![!!RibbonRefreshSmall](https://cdnweb.devolutions.net/docs/docs_common_refresh-large.png) | Rafraîchir votre source de données.                                      |
| ![!!RibbonSearchSmall](https://cdnweb.devolutions.net/docs/docs_common_search.png) | Ouvrir la fenêtre de dialogue de filtre pour vous permettre de faire une recherche rapide. |

Cliquer avec le bouton droit sur n'importe quelle commande pour afficher le menu contextuel. Pour retirer un élément de la barre d'accès rapide, cliquer avec le bouton droit sur l'élément et sélectionner ***Retirer***. Pour ajouter un élément à la barre d'accès rapide, cliquer avec le bouton droit sur un élément dans le ruban et sélectionner ***Ajouter***. Utiliser ceci pour personnaliser votre espace de travail selon vos préférences.

### Contrôle de Connexion Rapide

Se référer à [***Connexion Rapide***](/rdm/windows/commands/view/view/quick-connect/) pour une description détaillée.

### Commande de Verrouillage de l'Application

Cette commande minimisera l'application. Lorsque vous tenterez de la restaurer, il vous sera demandé le mot de passe. S'applique uniquement aux sources de données protégées par un mot de passe.
