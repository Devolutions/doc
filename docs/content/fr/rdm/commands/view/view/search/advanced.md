---
eleventyComputed:
  title: Recherche avancée
  description: La Recherche Avancée vous permet de rechercher des entrées et des dossiers basés sur plusieurs critères dans un {{ fr.VLT }} à la fois.
---
La Recherche Avancée vous permet de rechercher des entrées et des dossiers basés sur plusieurs conditions dans un {{ fr.VLT }} à la fois. Pour rechercher dans plusieurs {{ fr.VLT }}s simultanément, veuillez vous référer à [***Recherche Multi {{ fr.VLT }}***](/rdm/windows/commands/view/view/search/multi-vault/).

La ***Recherche Avancée*** est disponible dans le ruban de {{ fr.RDM }} ou en appuyant sur <kbd>F11</kbd> sur votre clavier.
![Recherche Avancée](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6219.png)

Il est possible de sélectionner plusieurs entrées à la fois en cliquant avec <kbd>Shift</kbd> ou toutes avec le raccourci <kbd>Ctrl</kbd>+<kbd>A</kbd>. Cliquer avec le bouton droit sur une ou plusieurs entrées affiche le même menu et les mêmes options que dans le ***{{ fr.NPANE }}***.

![Fenêtre de Recherche Avancée](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6221.png)

## Onglet Recherche

| OPTION   | DESCRIPTION                                                   |
|----------|---------------------------------------------------------------|
| Conditions              | Vous pouvez sélectionner plusieurs conditions différentes à la fois pour affiner votre recherche :<ul><li>Type de connexion</li><li>Référence de contact<li>Date de création<li>Champ personnalisé</li><li>Description<li>Domaine</li><li>Dossier</li><li>Hôte</li><li>Est favori</li><li>Tags</li><li>Date de dernière mise à jour</li><li>Nom</li><li>OS</li><li>Force du mot de passe</li><li>Numéro de série</li><li>Rôle du serveur<li>Statut</li><li>Nom d'utilisateur</li><li>URL</li><li>Version</li><li>IP</li><li>MAC</li><li>Logiciel<li>Numéro de comptabilité</li><li>Numéro de commande</li><li>Numéro de facture</li><li>Tag de service</li> |
| Charger                  | Charger des recherches qui ont été précédemment sauvegardées.                                                                                                                                                                                                    |
| Sauvegarder                  | Sauvegarder votre recherche localement pour la réutiliser.                                                                                                                                                                                                       |
| Sauvegarder sous               | Sauvegarder une recherche précédemment sauvegardée mais sous un nom différent.                                                                                                                                                                                                     |
| Exporter                | Exporter les entrées de votre résultat de recherche en tant que fichier CSV, HTML, XLS ou XML. Les informations sensibles seront chiffrées en utilisant AES.     |
| Rechercher                | Une fois que vous avez sélectionné votre condition de recherche, cliquez sur ***Rechercher*** pour afficher les résultats de la recherche.                                                                                                                                                   |
| Réinitialiser                 | Réinitialiser tous vos champs pour procéder à une nouvelle recherche.                                                                                                                                                                                                   |
| Sélectionner dans ***{{ fr.NPANE }}*** | Sélectionner vos résultats de recherche dans votre ***{{ fr.NPANE }}***. Cette option peut être utilisée en combinaison avec une Édition par Lot.       |

Il y aura une liste déroulante à côté de certains champs de condition (ex : Nom) pour vous donner plus d'options de recherche :

* ***Contient*** - tout nom incluant les caractères que vous avez entrés.
* ***Commence par*** - tout nom commençant par les caractères que vous avez entrés.
* ***Se termine par*** - tout nom se terminant par les caractères que vous avez entrés.
* ***Expression exacte*** - tout nom correspondant exactement à chaque caractère que vous avez entré.
* ***Ne contient pas*** - tout nom qui n'inclut pas les caractères que vous avez entrés.
* ***Expression régulière*** (regex) - toute séquence de caractères spécifiant un motif de recherche.

## Paramètres

Utilisez les paramètres pour personnaliser complètement les conditions de recherche.

* ***Numéro de condition*** : Pour référencer une condition spécifique dans votre recherche, sélectionnez une ***condition*** dans le menu déroulant. Par exemple, ici nous voulons utiliser le ***type de connexion RDP*** dans notre condition personnalisée. Pour ce faire, notez le ***numéro de condition***.

![Numéro de condition](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6233.png)

Allez dans ***Paramètres*** et cochez ***Remplacer l'opérateur logique***. Encadrez le ***numéro de condition*** avec des accolades **"{}"**.

![Encadrez le numéro de condition avec des accolades {}](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6234.png)

* ***Opérateur ET :*** Pour utiliser **"ET"**, entrez les caractères **"&&"**.

* ***Opérateur OU*** : Pour utiliser **"OU"**, tapez les caractères **"||"**.

Il y a toujours un opérateur **( && ; || )** entre les ***numéros de condition*** spécifiés entourés d'accolades.

![Exemple avec plusieurs conditions et opérateurs](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6236.png)

***Ordre et Priorité des Parenthèses :*** Vous pouvez spécifier l'ordre et la priorité de la condition en utilisant des parenthèses : **"(" et ")"**. Une parenthèse ne peut pas être à côté d'une accolade, elle est **TOUJOURS** à côté d'un opérateur, à la fois pour les parenthèses ouvrantes et fermantes.

***Notification d'Erreur :*** Si une erreur se produit lors de la recherche, un message sera affiché demandant de vérifier les conditions et d'essayer à nouveau.
