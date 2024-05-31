```yaml
eleventyComputed:
  title: Menu latéral
```
En utilisant les onglets du ***Menu latéral***, vous pouvez accéder à diverses fonctionnalités de {{ fr.WBEX }}. Chaque onglet affichera une vue différente dans la ***Zone de contenu***.

Lors de l'utilisation de {{ fr.WBEX }} avec {{ fr.DHUBP }}, les onglets disponibles sont l'onglet ***Correspondance***, l'onglet ***Toutes les entrées***, l'onglet ***Favoris***, l'onglet ***Récent***, l'onglet ***Corbeille***, et l'onglet ***Générateur de mot de passe***.

Dans tous les onglets à l'exception de l'onglet ***Générateur de mot de passe***, lors du survol d'une entrée, trois nouvelles options apparaissent : les boutons ***Copier le nom d'utilisateur***, ***Copier le mot de passe*** et ***Voir***. Consulter la section [Fonctionnalités des entrées](#entry-functionalities) pour plus d'informations.

## Onglets du menu latéral

### Onglet Correspondance

L'extension s'ouvre sur l'onglet ***Correspondance***. C'est ici que vous verrez la liste des identifiants disponibles pour le site Web particulier sur lequel vous vous trouvez.

{% snippet, "badgeInfo" %}
Pour consulter les méthodes de récupération de vos identifiants, visiter [Récupérer les identifiants de {{ fr.DHUBP }} avec {{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/retrieve-credentials-hub-personal/).
{% endsnippet %}

![Onglet Correspondance](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2121.png)

En haut, vous pouvez utiliser la barre de ***Recherche*** pour filtrer tous vos identifiants, pas seulement ceux applicables au site Web. Vous pouvez également utiliser le bouton ***Actualiser*** à côté pour mettre à jour les résultats de la recherche.

En bas, le bouton ***Nouvelle entrée*** vous donne accès aux types d'entrées qui, une fois sélectionnés, ouvrent un nouvel onglet de navigateur qui vous permet d'ajouter manuellement une entrée dans {{ fr.DHUBP }} via {{ fr.WBEX }}.

{% snippet, "badgeInfo" %}
Pour une liste complète des entrées disponibles et des champs dans la fenêtre ***Nouvelle entrée***, visiter [Nouvelle Entrée](/workspace/workspace-browser-extension/hub-personal/user-interface/side-menu/new-entry/). Vous pouvez également consulter notre guide étape par étape sur [comment ajouter une entrée](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/add-entry-hub-personal-workspace-browser-extension/).
{% endsnippet %}

### Onglet Toutes les entrées

L'onglet ***Toutes les entrées*** vous permet de parcourir tous vos dossiers et entrées.
![Onglet Toutes les Entrées](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2122.png)
En haut, vous pouvez utiliser la barre de ***Filtre*** pour rechercher dans tous vos dossiers et entrées.

Pour accéder à une entrée dans {{ fr.WBEX }}, naviguer à travers les dossiers pour trouver manuellement l'entrée que vous recherchez. La structure des dossiers est identique à celle de votre {{ fr.DHUBP }}.

Lors de la navigation dans les dossiers, le bouton [***Nouvelle Entrée***](/workspace/workspace-browser-extension/hub-personal/user-interface/side-menu/new-entry/) apparaîtra en bas de la ***Zone de contenu***.

### Onglet Favoris

Si vous avez des entrées marquées comme favorites, elles seront affichées ici dans l'onglet ***Favoris***.
![Onglet Favoris](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2123.png)
Vous pouvez rechercher une entrée particulière en utilisant la barre de ***Filtre*** en haut.

### Onglet Récent

Les dernières entrées que vous avez utilisées seront affichées dans l'onglet ***Récent***.
![Onglet Récent](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2124.png)
Vous pouvez rechercher une entrée particulière en utilisant la barre de ***Filtre*** en haut.

En bas, vous pouvez cliquer sur le bouton ***Effacer les entrées récentes*** pour effacer toutes les entrées actuelles de cette vue.

### Onglet Corbeille

Dans l'onglet ***Corbeille***, vous pouvez sélectionner des entrées ou des dossiers entiers à supprimer.

{% snippet, "badgeCaution" %}
Notez que si vous supprimez des entrées ou des dossiers, ils seront supprimés de votre {{ fr.DHUBP }} et pas seulement de la vue {{ fr.WBEX }}.
{% endsnippet %}

![Onglet Corbeille](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2125.png)

Vous pouvez sélectionner toutes vos entrées et dossiers en utilisant le bouton ***Sélectionner tout*** en bas, ou vous pouvez les sélectionner un par un en cochant la case à côté de chacun. Lorsque votre sélection est terminée, cliquez sur le bouton ***Supprimer*** pour supprimer vos entrées et dossiers sélectionnés.

Le bouton ***Ressusciter*** vous permet de ramener les entrées précédemment supprimées. Le processus de sélection est le même.

### Onglet Générateur de mot de passe

L'onglet ***Générateur de mot de passe*** vous aide à créer un mot de passe fort et sécurisé adapté à vos besoins et aux exigences du site Web pour votre nouveau compte.
![Onglet Générateur de Mot de Passe](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2126.png)

Votre mot de passe personnalisé est généré en haut de la ***Zone de contenu*** avec un indicateur de force en dessous. Vous pouvez le copier ou en générer un nouveau en utilisant respectivement les boutons ***Copier dans le presse-papiers*** et ***Générer un mot de passe***. La ***Longueur du mot de passe***, qui est réglée par défaut sur 12, peut également être ajustée.

Dans la section déroulante ***Général***, vous êtes en mesure de sélectionner les types de caractères que votre mot de passe doit contenir ainsi que le nombre minimum de caractères de chaque type qui doit être inclus.
![Section Générale](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2114.png)

Dans la section déroulante ***Avancé***, vous êtes en mesure de personnaliser davantage votre mot de passe en entrant les caractères que vous souhaitez inclure dans votre mot de passe, suivi du nombre minimum de fois qu'ils doivent apparaître. Dans le deuxième champ, vous pouvez également entrer les caractères que vous souhaitez exclure de votre mot de passe.
![Section Avancée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2115.png)

{% snippet, "badgeInfo" %}
Pour apprendre à utiliser le ***Générateur de mot de passe*** lors de la création d'un compte sur un site Web, visiter [Créer un compte pour un site Web dans {{ fr.DHUBP }} avec {{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-personal/using-workspace-browser-extension/create-account-website-hub-personal/).
{% endsnippet %}

### Fonctionnalités des entrées

Peu importe l'onglet dans lequel vous vous trouvez (à l'exception de l'onglet ***Générateur de mot de passe***), lors du survol d'une entrée, trois nouvelles options apparaissent : les boutons ***Copier le nom d'utilisateur***, ***Copier le mot de passe*** et ***Voir***.
![Options Copier le nom d'utilisateur, Copier le mot de passe, et Voir](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2128.png)

Les boutons ***Copier le nom d'utilisateur*** et ***Copier le mot de passe*** copient le nom d'utilisateur/le mot de passe de l'entrée dans votre presse-papiers.

Le bouton ***Voir*** vous donne un aperçu de l'entrée ainsi que des fonctionnalités supplémentaires. La disponibilité des informations et des fonctionnalités dépend du type d'entrée et des informations fournies dans l'entrée, bien que certaines d'entre elles soient toujours disponibles :

* ***Éditer***/***Supprimer*** l'entrée avec le bouton ellipses en haut à droite.
* Marquer votre entrée comme favorite en cliquant sur l'icône ***Ajouter aux Favoris*** à côté du nom de l'entrée. L'entrée apparaîtra alors dans l'[onglet](#favorites-tab) ***Favoris***.
* Voir l'emplacement de votre entrée sous la section ***Dossier*** (si elle est située sous un dossier).
* Voir quand l'entrée a été modifiée pour la dernière fois et créée sous les sections ***Dernière modification le*** et ***Créé le*** respectivement.
* Accéder et voir les fichiers attachés à l'entrée en utilisant le bouton ***Pièces jointes***.

D'autres informations et fonctionnalités dépendront de ce que vous avez fourni lors de la création de l'entrée (nom d'utilisateur, mot de passe, étiquettes, description, etc.).
![Aperçu de l'Entrée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2129.png)
