```yaml
eleventyComputed:
  title: Menu latéral
```
En utilisant les onglets du ***Menu latéral***, vous pouvez accéder à diverses fonctionnalités de {{ fr.WBEX }}. Chaque onglet affichera une vue différente dans la ***Zone de contenu***.

Lors de l'utilisation de {{ fr.WBEX }} avec {{ fr.DVLS }}, les onglets disponibles sont l'onglet ***Correspondant***, l'onglet ***Toutes les entrées***, l'onglet ***Favoris***, l'onglet ***Récent*** et l'onglet ***Générateur de mot de passe***.

Dans tous les onglets à l'exception de l'onglet ***Générateur de mot de passe***, lors du survol d'une entrée, trois nouvelles options apparaissent : les boutons ***Copier le nom d'utilisateur***, ***Copier le mot de passe*** et ***Voir***. Consulter la section Fonctionnalités des entrées pour plus d'informations.

## Onglets de {{ fr.WBEX }}

### Onglet Correspondant

L'extension s'ouvre sur l'onglet ***Correspondant***. C'est ici que vous verrez la liste des identifiants disponibles pour le site Web particulier sur lequel vous vous trouvez.

{% snippet, "badgeInfo" %}
Pour les méthodes de récupération de vos identifiants, visiter [Récupérer les identifiants avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/devolutions-server/using-workspace-browser-extension/retrieve-credentials-workspace-browser-extension/).
{% endsnippet %}

![Onglet Correspondant](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2033.png)

En haut, vous pouvez utiliser la barre de ***Recherche*** pour filtrer tous vos identifiants, pas seulement ceux applicables au site Web. Vous pouvez également utiliser le bouton ***Actualiser*** à côté pour mettre à jour les résultats de la recherche.

En bas, le bouton ***Ajouter un site Web*** ouvre un nouvel onglet de navigateur qui vous permet d'ajouter manuellement une entrée de site Web dans {{ fr.DVLS }} via le {{ fr.WBEX }}.

{% snippet, "badgeInfo" %}
Pour une liste complète des champs disponibles dans la fenêtre ***Ajouter un site Web***, visiter [Ajouter un site Web](/workspace/workspace-browser-extension/devolutions-server/user-interface/side-menu/add-website/). Vous pouvez également consulter notre guide étape par étape sur [comment ajouter une entrée de site Web](/workspace/workspace-browser-extension/devolutions-server/using-workspace-browser-extension/add-website-entry-workspace-browser-extension/).
{% endsnippet %}

### Onglet Toutes les entrées
{% snippet, "badgeHelp" %}
Lors de l'accès à l'onglet ***Toutes les entrées*** pour la première fois, vous devez sélectionner les {{ fr.DVLS }} {{ fr.VLT }}s que vous souhaitez synchroniser avec le {{ fr.WBEX }}. En savoir plus à ce sujet dans [Première connexion avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/devolutions-server/first-login/).
{% endsnippet %}

L'onglet ***Toutes les entrées*** vous permet de parcourir tous vos {{ fr.VLT }}s synchronisés pour les entrées de sites Web uniquement. Vous rencontrerez d'abord la liste de vos {{ fr.VLT }}s synchronisés.

![Onglet Toutes les entrées](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2043.png)

En haut, vous pouvez utiliser la barre de ***Filtre*** pour rechercher dans tous vos {{ fr.VLT }}s pour les entrées de sites Web.

Vous pouvez accéder à vos {{ fr.VLT }}s de deux manières :

* Pour accéder à un {{ fr.VLT }} dans {{ fr.DVLS }}, cliquer sur le bouton ***Ouvrir*** à côté d'un {{ fr.VLT }} pour l'ouvrir dans {{ fr.DVLS }} dans un nouvel onglet de navigateur.
* Pour accéder à un {{ fr.VLT }} dans le {{ fr.WBEX }}, cliquer dessus et naviguer à travers les dossiers pour trouver manuellement l'entrée que vous recherchez. La structure des dossiers est identique à celle de votre {{ fr.DVLS }}, sauf que seuls les chemins menant aux entrées de sites Web seront affichés.

Lors de la navigation dans les dossiers, le bouton [***Ajouter un site Web***](/workspace/workspace-browser-extension/devolutions-server/user-interface/side-menu/add-website/) apparaîtra en bas de la ***Zone de contenu***. Vous pouvez également utiliser la barre de recherche en haut pour rechercher dans l'emplacement spécifique.

![Navigation {{ fr.VLT_MAJ }} via le {{ fr.WBEX }}](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2045.png)

De retour sur la vue principale de l'onglet ***Toutes les entrées***, le ***Sélectionner les {{ fr.VLT }}s à synchroniser*** en bas de la ***Zone de contenu*** vous permet de sélectionner individuellement les {{ fr.DVLS }} {{ fr.VLT }}s à synchroniser avec le {{ fr.WBEX }}.

### Onglet Favoris
Si vous avez des entrées marquées comme favorites, elles seront affichées ici dans l'onglet ***Favoris***.

![Onglet Favoris](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2046.png)

Vous pouvez rechercher une entrée particulière en utilisant la barre de ***Recherche dans les favoris*** en haut.
### Onglet Récent
Les dernières entrées que vous avez utilisées seront affichées dans l'onglet ***Récent***.

![Onglet Récent](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2047.png)

Vous pouvez rechercher une entrée particulière en utilisant la barre de ***Filtre*** en haut.

En bas, vous pouvez cliquer sur le bouton ***Effacer les entrées récentes*** pour effacer toutes les entrées actuelles de cette vue.

### Onglet Générateur de mot de passe
L'onglet ***Générateur de mot de passe*** vous aide à créer un mot de passe fort et sécurisé adapté à vos besoins et aux exigences du site Web pour votre nouveau compte.

![Onglet Générateur de mot de passe](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2042.png)

Votre mot de passe personnalisé est généré en haut de la ***Zone de contenu*** avec un indicateur de force en dessous. Vous pouvez le copier ou en générer un nouveau en utilisant respectivement les boutons ***Copier dans le presse-papiers*** et ***Générer un mot de passe***. La ***Longueur du mot de passe***, qui est réglée par défaut sur 12, peut également être ajustée.

Dans la section déroulante ***Général***, vous êtes en mesure de sélectionner les types de caractères que votre mot de passe doit contenir ainsi que le nombre minimum de caractères de chaque type qui doit être inclus.

![Section Général](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2040.png)

Dans la section déroulante ***Avancé***, vous êtes en mesure de personnaliser davantage votre mot de passe en entrant les caractères que vous souhaitez inclure dans votre mot de passe, suivi du nombre minimum de fois qu'ils doivent apparaître. Dans le deuxième champ, vous pouvez également entrer les caractères que vous souhaitez exclure de votre mot de passe.

![Section Avancé](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2041.png)

{% snippet, "badgeInfo" %}
Pour apprendre à utiliser le ***Générateur de mot de passe*** lors de la création d'un compte sur un site Web, visiter [Créer un compte pour un site Web avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/devolutions-server/using-workspace-browser-extension/create-account-website-workspace-browser-extension/).
{% endsnippet %}

### Fonctionnalités des entrées
Peu importe l'onglet dans lequel vous vous trouvez (à l'exception de l'onglet ***Générateur de mot de passe***), lors du survol d'une entrée, trois nouvelles options apparaissent : les boutons ***Copier le nom d'utilisateur***, ***Copier le mot de passe*** et ***Voir***.

![Options Copier le nom d'utilisateur, Copier le mot de passe et Voir](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2048.png)

Les boutons ***Copier le nom d'utilisateur*** et ***Copier le mot de passe*** copient le nom d'utilisateur/le mot de passe de l'entrée dans votre presse-papiers.

Le bouton ***Voir*** vous donne un aperçu de l'entrée ainsi que des fonctionnalités supplémentaires. La disponibilité des informations et des fonctionnalités dépend du type d'entrée et des informations fournies dans l'entrée, bien que certaines d'entre elles soient toujours disponibles :

* ***Modifier***/***Supprimer*** l'entrée ou voir son mot de passe avec le bouton des points de suspension verticaux en haut à droite.
* Marquer votre entrée comme favorite en cliquant sur l'icône ***Ajouter aux favoris*** à côté du nom de l'entrée. L'entrée apparaîtra alors dans l'onglet ***Favoris***.
* Voir l'emplacement de votre entrée sous les sections ***{{ fr.VLT }}*** et ***Dossier*** (si elle est située sous un dossier).
* Voir et accéder à l'***URL*** associée à l'entrée.

D'autres informations et fonctionnalités dépendront de ce que vous avez fourni lors de la création de l'entrée (nom d'utilisateur, mot de passe, étiquettes, description, etc.).

![Aperçu de l'entrée](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2037.png)
