---
eleventyComputed:
  title: Menu latéral
---
En utilisant les onglets du ***Menu latéral***, vous pouvez accéder à diverses fonctionnalités du {{ fr.WBEX }}. Chaque onglet affiche une vue différente dans la ***Zone de contenu***.

Lorsque vous utilisez le {{ fr.WBEX }} avec {{ fr.DHUBP }}, les onglets disponibles sont l'onglet ***Correspondant***, l'onglet ***Toutes les entrées***, l'onglet ***Favoris***, l'onglet ***Récent***, l'onglet ***Corbeille*** et l'onglet ***Générateur de mots de passe***.

Dans tous les onglets, à l'exception de l'onglet ***Générateur de mots de passe***, lorsque vous passez le curseur sur une entrée, trois nouvelles options apparaissent : les boutons ***Copier le nom d'utilisateur***, ***Copier le mot de passe***, et ***Affichage***. Consultez la section [Fonctionnalités des entrées](#fonctionnalités-des-entrées) pour plus d'informations.

## Onglets du Menu latéral

### Onglet Correspondant

L'extension s'ouvre sur l'onglet ***Correspondant***. C'est là que vous verrez la liste des identifiants disponibles pour le site Web particulier sur lequel vous vous trouvez.

{% snippet, "badgeInfo" %}
Pour connaître les méthodes de récupération de vos identifiants, consultez [Récupérer des identifiants de {{ fr.DHUBP }} avec le {{ fr.WBEX }}](/fr/hub/workspace-browser-extension/using-workspace-browser-extension/using-workspace-browser-extension-with-hub-personal/retrieve-credentials-hub-personal/).
{% endsnippet %}

![Onglet Correspondant](https://cdnweb.devolutions.net/docs/fr/hub/Hub2082.png)

En haut, vous pouvez utiliser la barre de ***Recherche*** pour filtrer tous vos identifiants, pas seulement celles applicables au site Web. Vous pouvez également utiliser le bouton ***Actualiser*** situé à côté pour mettre à jour les résultats de la recherche.

En bas, le bouton ***Nouvelle entrée*** vous donne accès à des types d'entrées qui, lorsque sélectionnées, ouvrent un nouvel onglet de navigateur qui vous permet d'ajouter manuellement une entrée dans {{ fr.DHUBP }} par le biais de le {{ fr.WBEX }}.

{% snippet, "badgeInfo" %}
Pour obtenir une liste complète des champs et entrées disponibles dans la fenêtre ***Nouvelle entrée***, consultez [Nouvelle entrée](/fr/hub/workspace-browser-extension/workspace-browser-extension-user-interface/workspace-browser-extension-user-interface-hub-personal/side-menu/new-entry/). Vous pouvez également consulter notre guide étape par étape pour [ajouter une entrée](/fr/hub/workspace-browser-extension/using-workspace-browser-extension/using-workspace-browser-extension-with-hub-personal/add-entry-hub-personal-workspace-browser-extension/).
{% endsnippet %}

### Onglet Toutes les entrées

L'onglet ***{{ fr.VLT_MAJ }}s*** vous permet de parcourir tous vos {{ fr.VLT }}s pour accéder à vos entrées.
![!!Hub2083](https://cdnweb.devolutions.net/docs/fr/hub/Hub2083.png)
En haut, vous pouvez utiliser la barre de ***Filtre*** pour rechercher dans vos entrées et vos {{ fr.VLT }}s.

Pour accéder à une entrée dans le {{ fr.WBEX }}, naviguez dans les dossiers pour trouver manuellement l'entrée recherchée. La structure des dossiers est identique à celle de votre {{ fr.DHUBP }}.

Lorsque vous naviguez dans les dossiers, le bouton [***Nouvelle entrée***](/fr/hub/workspace-browser-extension/workspace-browser-extension-user-interface/workspace-browser-extension-user-interface-hub-personal/side-menu/new-entry/) apparaît au bas de la ***Zone de contenu***.

### Onglet Favoris
Si vous avez des entrées marquées comme favorites, elles seront affichées ici dans l'onglet ***Favoris***.
![Onglet Favoris](https://cdnweb.devolutions.net/docs/fr/hub/Hub2084.png)
Vous pouvez rechercher une entrée particulière à l'aide de la barre de ***Filtre*** située en haut.

### Onglet Récent

Les dernières entrées que vous avez utilisées s'affichent dans l'onglet ***Récent***.
![Onglet Récent](https://cdnweb.devolutions.net/docs/fr/hub/Hub2085.png)
Vous pouvez rechercher une entrée particulière à l'aide de la barre de ***Filtre*** située en haut.

En bas, vous pouvez cliquer sur le bouton ***Effacer les entrées récentes*** pour effacer toutes les entrées actuelles de cette vue.

### Onglet Corbeille

Dans l'onglet Corbeille, vous pouvez sélectionner vos entrées ou des dossiers entiers à supprimer.
{% snippet, "badgeCaution" %}
Notez que si vous supprimez des entrées ou des dossiers, ils seront supprimés de votre {{ fr.DHUBP }} et pas seulement de la vue du {{ fr.WBEX }}.
{% endsnippet %}

![Onglet Corbeille](https://cdnweb.devolutions.net/docs/fr/hub/Hub2086.png)
Vous pouvez sélectionner toutes vos entrées et tous vos dossiers en cliquant sur ***Sélectionner tout*** dans le bas, ou vous pouvez les sélectionner un par un en cochant les cases à côté de chacun. Lorsque votre sélection est complète, cliquez le bouton ***Supprimer*** pour supprimer vos entrées et dossiers sélectionnés.

Le bouton ***Restaurer*** permet de ramener des entrées précédemment supprimées. Le processus de sélection est le même.

### Onglet Générateur de mots de passe

L'onglet ***Générateur de mots de passe*** vous aide à créer un mot de passe fort et sécurisé adapté à vos besoins et aux exigences du site Web pour votre nouveau compte.
![Onglet Générateur de mots de passe](https://cdnweb.devolutions.net/docs/fr/hub/Hub2087.png)
Votre mot de passe personnalisé est généré en haut de la ***Zone de contenu*** avec un indicateur de force en dessous. Vous pouvez le copier ou en générer un nouveau en utilisant respectivement les boutons ***Copier dans le presse-papiers*** et ***Générer un mot de passe***. La ***Longueur du mot de passe***, qui est fixée à 12 par défaut, peut également être ajustée.

Dans la section déroulante ***Général***, vous pouvez sélectionner les types de caractères que votre mot de passe doit contenir ainsi que le nombre minimum de caractères de chaque type qui doit être inclus.
![Section Général](https://cdnweb.devolutions.net/docs/fr/hub/Hub2078.png)
Dans la section déroulante ***Avancé***, vous êtes en mesure de personnaliser davantage votre mot de passe en saisissant les caractères que vous souhaitez inclure dans votre mot de passe, suivis du nombre minimum de fois où ils doivent apparaître. Dans le second champ, vous pouvez également saisir les caractères que vous voulez exclure de votre mot de passe.
![Section Avancé](https://cdnweb.devolutions.net/docs/fr/hub/Hub2079.png)
{% snippet, "badgeInfo" %}
Pour apprendre à utiliser le ***Générateur de mots de passe*** lors de la création d'un compte sur un site Web, consultez [Créer un compte de site Web dans {{ fr.DHUBP }} avec le {{ fr.WBEX }}](/fr/hub/workspace-browser-extension/using-workspace-browser-extension/using-workspace-browser-extension-with-hub-personal/create-account-website-hub-personal/).
{% endsnippet %}

### Fonctionnalités des entrées

Quel que soit l'onglet dans lequel vous vous trouvez (à l'exception de l'onglet ***Générateur de mots de passe***), lorsque vous passez la souris sur une entrée, trois nouvelles options apparaissent : les boutons ***Copier le nom d'utilisateur***, ***Copier le mot de passe*** et ***Affichage***.
![Copier le nom d'utilisateur, Copier le mot de passe et Affichage](https://cdnweb.devolutions.net/docs/fr/hub/Hub2088.png)
Les boutons ***Copier le nom d'utilisateur*** et ***Copier le mot de passe*** copient le nom d'utilisateur/mot de passe de l'entrée dans votre presse-papiers.

Le bouton ***Affichage*** vous donne un aperçu de l'entrée ainsi que des fonctionnalités supplémentaires. La disponibilité des informations et des fonctionnalités dépend du type d'entrée et des informations fournies dans l'entrée, bien que certaines d'entre elles soient toujours disponibles :

* ***Modifier***/***Supprimer*** l'entrée en passant par le bouton des points de suspension verticaux en haut à droite.
* Marquer votre entrée comme favorite en cliquant sur l'icône ***Ajouter aux favoris*** à côté du nom de l'entrée. L'entrée s'affichera alors dans l'onglet [***Favoris***](#onglet-favoris).
* Visualiser l'emplacement de votre entrée dans la section ***Dossier*** (si elle est située dans un dossier).
* Voir quand l'entrée a été modifiée pour la dernière fois et quand elle a été créée dans les sections ***Dernière modification le*** et ***Créé le*** respectivement.
* Accéder et afficher les fichiers joints à l'entrée en utilisant le bouton ***Pièces jointes***.

Les autres informations et fonctionnalités dépendront de ce que vous avez fourni lors de la création de l'entrée (nom d'utilisateur, mot de passe, étiquettes, description, etc.).
![Aperçu de l'entrée](https://cdnweb.devolutions.net/docs/fr/hub/Hub2089.png)
