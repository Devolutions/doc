---
eleventyComputed:
  title: Menu latéral
---
En utilisant les onglets du ***Menu latéral***, vous pouvez accéder à diverses fonctionnalités de {{ fr.WBEX }}. Chaque onglet affichera une vue différente dans la ***Zone de contenu***.

Lors de l'utilisation de {{ fr.WBEX }} avec {{ fr.DHUBB }}, les onglets disponibles sont l'onglet ***Correspondance***, l'onglet ***{{ fr.VLT_MAJ }}s***, l'onglet ***{{ fr.UVLT_MAJ }}*** et l'onglet ***Générateur de mot de passe***.

Dans tous les onglets, à l'exception de l'onglet ***Générateur de mot de passe***, lors du survol d'une entrée, trois nouvelles options apparaissent : les boutons ***Copier le nom d'utilisateur***, ***Copier le mot de passe*** et ***Voir***. Rendez-vous dans la section [Fonctionnalités des entrées](#entry-functionalities) pour plus d'informations.

## Onglets du menu latéral

### Onglet Correspondance
L'extension s'ouvre sur l'onglet ***Correspondance***. C'est ici que vous verrez la liste des identifiants disponibles pour le site Web particulier sur lequel vous vous trouvez.

{% snippet, "badgeInfo" %}
Pour consulter les méthodes de récupération de vos identifiants, visitez [Récupérer des identifiants de {{ fr.DHUBB}} avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/retrieve-credentials-hub-business/).
{% endsnippet %}

![Onglet Correspondance](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2110.png)

En haut, vous pouvez utiliser la barre de ***Recherche*** pour filtrer tous vos identifiants, pas seulement ceux applicables au site Web. Vous pouvez également utiliser le bouton ***Actualiser*** à côté pour mettre à jour les résultats de la recherche.

En bas, le bouton ***Ajouter un site Web*** ouvre un nouvel onglet de navigateur qui vous permet d'ajouter manuellement une entrée de site Web dans {{ fr.DHUBB }} via le {{ fr.WBEX }}.

{% snippet, "badgeInfo" %}
Pour une liste complète des champs disponibles dans la fenêtre ***Ajouter un site Web***, visitez [Ajouter un site Web](/workspace/workspace-browser-extension/hub-business/user-interface/side-menu/add-website/). Vous pouvez également consulter notre guide étape par étape sur [comment ajouter une entrée de site Web](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/add-entry-hub-business-workspace-browser-extension/).
{% endsnippet %}

### Onglet {{ fr.VLT_MAJ }}s

{% snippet, "badgeHelp" %}
Lors de l'accès à l'onglet ***{{ fr.VLT_MAJ }}s*** pour la première fois, vous devez sélectionner les {{ fr.DHUBB }} {{ fr.VLT }}s que vous souhaitez synchroniser avec le {{ fr.WBEX }}. En savoir plus à ce sujet dans [Première connexion avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-business/first-login/).
{% endsnippet %}

L'onglet ***{{ fr.VLT_MAJ }}s*** vous permet de parcourir tous vos {{ fr.VLT }}s synchronisés pour vos entrées.
![Onglet {{ fr.VLT_MAJ }}s](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2119.png)

En haut, vous pouvez utiliser la barre de ***Filtre*** pour rechercher dans tous vos {{ fr.VLT }}s des entrées.

Pour accéder à un {{ fr.VLT }} dans le {{ fr.WBEX }}, cliquez dessus et naviguez à travers les dossiers pour trouver manuellement l'entrée que vous recherchez. La structure des dossiers est identique à celle de votre {{ fr.DHUBB }}.

Lors de la navigation dans les dossiers, le bouton [***Ajouter un site Web***](/workspace/workspace-browser-extension/hub-business/user-interface/side-menu/add-website/) apparaîtra en bas de la ***Zone de contenu***.

### Onglet {{ fr.UVLT_MAJ }}

L'onglet ***{{ fr.UVLT }}*** fonctionne de la même manière que l'onglet ***{{ fr.VLT_MAJ }}s***, sauf que vous naviguez à travers votre ***{{ fr.UVLT }}*** au lieu de vos autres {{ fr.VLT }}s. Vous n'avez également pas besoin de sélectionner des {{ fr.VLT }}s à synchroniser car le seul {{ fr.VLT }} disponible dans cet onglet est votre propre ***{{ fr.UVLT }}***.
![Onglet {{ fr.UVLT_MAJ }}](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2120.png)

En haut, vous pouvez utiliser la barre de ***Filtre*** pour rechercher dans tous vos dossiers et entrées.

Pour accéder à une entrée dans le {{ fr.WBEX }}, naviguez à travers les dossiers pour trouver manuellement l'entrée que vous recherchez. La structure des dossiers est identique à celle de votre {{ fr.DHUBB }}.

Lors de la navigation dans les dossiers, le bouton [***Ajouter un site Web***](/workspace/workspace-browser-extension/hub-business/user-interface/side-menu/add-website/) apparaîtra en bas de la ***Zone de contenu***.

### Onglet Générateur de mot de passe

L'onglet ***Générateur de mot de passe*** vous aide à créer un mot de passe fort et sécurisé adapté à vos besoins et aux exigences du site Web pour votre nouveau compte.
![Onglet Générateur de mot de passe](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2111.png)

Votre mot de passe personnalisé est généré en haut de la ***Zone de contenu*** avec un indicateur de force en dessous. Vous pouvez le copier ou en générer un nouveau à l'aide des boutons ***Copier dans le presse-papiers*** et ***Générer un mot de passe*** respectivement. La ***Longueur du mot de passe***, qui est réglée par défaut sur 12, peut également être ajustée.

Dans la section déroulante ***Général***, vous pouvez sélectionner les types de caractères que votre mot de passe doit contenir ainsi que le nombre minimum de caractères de chaque type qui doit être inclus.
![Section Général](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2114.png)

Dans la section déroulante ***Avancé***, vous pouvez personnaliser davantage votre mot de passe en entrant les caractères que vous souhaitez inclure dans votre mot de passe, suivis du nombre minimum de fois qu'ils doivent apparaître. Dans le deuxième champ, vous pouvez également entrer les caractères que vous souhaitez exclure de votre mot de passe.
![Section Avancé](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2115.png)

{% snippet, "badgeInfo" %}
Pour apprendre à utiliser le ***Générateur de mot de passe*** lors de la création d'un compte sur un site Web, visitez [Créer un compte pour un site Web dans {{ fr.DHUBB }} avec le {{ fr.WBEX }}](/workspace/workspace-browser-extension/hub-business/using-workspace-browser-extension/create-account-website-hub-business/).
{% endsnippet %}

### Fonctionnalités des entrées

Peu importe l'onglet dans lequel vous vous trouvez (à l'exception de l'onglet ***Générateur de mot de passe***), lors du survol d'une entrée, trois nouvelles options apparaissent : les boutons ***Copier le nom d'utilisateur***, ***Copier le mot de passe*** et ***Voir***.
![Options Copier le nom d'utilisateur, Copier le mot de passe, et Voir](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2116.png)

Les boutons ***Copier le nom d'utilisateur*** et ***Copier le mot de passe*** copient le nom d'utilisateur/le mot de passe de l'entrée dans votre presse-papiers.

Le bouton ***Voir*** vous donne un aperçu de l'entrée ainsi que des fonctionnalités supplémentaires. La disponibilité des informations et des fonctionnalités dépend du type d'entrée et des informations fournies dans l'entrée, bien que certaines d'entre elles soient toujours disponibles :

* ***Modifier***/***Supprimer*** l'entrée avec le bouton des points de suspension en haut à droite.
* Voir l'emplacement de votre entrée sous les sections ***{{ fr.VLT }}*** et ***dossier*** (si elle est située sous un dossier).
* Voir quand l'entrée a été modifiée pour la dernière fois et créée sous les sections ***Dernière modification le*** et ***Créé le*** respectivement.

D'autres informations et fonctionnalités dépendront de ce que vous avez fourni lors de la création de l'entrée (nom d'utilisateur, mot de passe, étiquettes, description, etc.).
![Aperçu de l'entrée](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2118.png)
