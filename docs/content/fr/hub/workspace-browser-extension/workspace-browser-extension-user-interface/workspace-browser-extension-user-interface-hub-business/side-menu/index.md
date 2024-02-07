---
eleventyComputed:
  title: Menu latéral
---
En utilisant les onglets du ***Menu latéral***, vous pouvez accéder à diverses fonctionnalités du {{ fr.WBEX }}. Chaque onglet affiche une vue différente dans la ***Zone de contenu***.  

Lorsque vous utilisez le {{ fr.WBEX }} avec {{ fr.DHUBB }}, les onglets disponibles sont l'onglet ***Correspondant***, l'onglet ***{{ fr.VLT_MAJ }}s***, l'onglet ***{{ fr.UVLT_MAJ }}*** et l'onglet ***Générateur de mots de passe***.  

Dans tous les onglets, à l'exception de l'onglet ***Générateur de mots de passe***, lorsque vous passez le curseur sur une entrée, trois nouvelles options apparaissent : les boutons ***Copier le nom d'utilisateur***, ***Copier le mot de passe***, et ***Affichage***. Consultez la section [Fonctionnalités des entrées](#fonctionnalités-des-entrées) pour plus d'informations. 

## Onglets du Menu latéral

### Onglet Correspondant 

L'extension s'ouvre sur l'onglet ***Correspondant***. C'est là que vous verrez la liste des identifiants disponibles pour le site Web particulier sur lequel vous vous trouvez. 
{% snippet icon.badgeInfo %} 
Pour connaître les méthodes de récupération de vos identifiants, consultez [Récupérer des identifiants de {{ fr.DHUBB }} avec le {{ fr.WBEX }}](/fr/hub/workspace-browser-extension/using-workspace-browser-extension/using-workspace-browser-extension-with-hub-business/retrieve-credentials-hub-business/). 
{% endsnippet %}
 
![Onglet Correspondant](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2074.png)  
En haut, vous pouvez utiliser la barre de ***Recherche*** pour filtrer tous vos identifiants, pas seulement celles applicables au site Web. Vous pouvez également utiliser le bouton ***Actualiser*** situé à côté pour mettre à jour les résultats de la recherche.  

En bas, le bouton ***Ajouter un site Web*** ouvre un nouvel onglet de navigateur qui vous permet d'ajouter manuellement une entrée de site Web dans {{ fr.DHUBB }} par le biais du {{ fr.WBEX }}. 
{% snippet icon.badgeInfo %} 
Pour obtenir une liste complète des champs disponibles dans la fenêtre ***Ajouter un site Web***, consultez [Ajouter un site Web](/fr/hub/workspace-browser-extension/workspace-browser-extension-user-interface/workspace-browser-extension-user-interface-hub-business/side-menu/add-website/). Vous pouvez également consulter notre guide étape par étape pour [ajouter une entrée de site Web](/fr/hub/workspace-browser-extension/using-workspace-browser-extension/using-workspace-browser-extension-with-hub-business/add-entry-hub-business-workspace-browser-extension/). 
{% endsnippet %}
 
### Onglet {{ fr.VLT_MAJ }}s 

{% snippet icon.badgeInfo %} 
Lorsque vous accédez à l'onglet ***{{ fr.VLT_MAJ }}s*** pour la première fois, vous devez sélectionner les {{ fr.VLT }}s de {{ fr.DHUBB }} que vous souhaitez synchroniser avec le {{ fr.WBEX }}. Pour en savoir plus, consultez [Première connexion avec le {{ fr.WBEX }}](/fr/hub/workspace-browser-extension/first-login-workspace-browser-extension/hub-business/). 
{% endsnippet %}
 
L'onglet ***{{ fr.VLT_MAJ }}s*** vous permet de parcourir tous vos {{ fr.VLT }}s synchronisés pour accéder à vos entrées.  
![Onglet {{ fr.VLT_MAJ }}s](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2075.png)  
En haut, vous pouvez utiliser la barre de ***Filtre*** pour rechercher des entrées dans tous vos {{ fr.VLT }}s.  

Pour accéder à un {{ fr.VLT }} dans le {{ fr.WBEX }}, vous pouvez cliquer sur ce {{ fr.VLT }} et naviguer dans les dossiers pour trouver manuellement l'entrée recherchée. La structure des dossiers est identique à celle de votre {{ fr.DHUBB }}.  

Lorsque vous naviguez dans les dossiers, le bouton [***Ajouter un site Web***](/fr/hub/workspace-browser-extension/workspace-browser-extension-user-interface/workspace-browser-extension-user-interface-hub-business/side-menu/add-website/) apparaît au bas de la ***Zone de contenu***.  

### Onglet {{ fr.UVLT_MAJ }}

L'onglet ***{{ fr.UVLT_MAJ }}*** fonctionne de la même manière que l'onglet ***{{ fr.VLT_MAJ }}s***, à l'exception que vous naviguez à l'intérieur de votre ***{{ fr.UVLT }}*** au lieu de vos autres {{ fr.VLT }}s. Vous n'avez également pas à sélectionner des {{ fr.VLT }}s à synchroniser puisque le seul {{ fr.VLT }} disponible dans cet onglet est votre propre ***{{ fr.UVLT }}***.  
![Onglet {{ fr.UVLT_MAJ }}](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2076.png)  
En haut, vous pouvez utiliser la barre de ***Filtre*** pour rechercher dans vos dossiers et vos entrées.  

Pour accéder à un {{ fr.VLT }} dans le {{ fr.WBEX }}, naviguez dans les dossiers pour trouver manuellement l'entrée recherchée. La structure des dossiers est identique à celle de votre {{ fr.DHUBB }}.  

Lorsque vous naviguez dans les dossiers, le bouton [***Ajouter un site Web***](/fr/hub/workspace-browser-extension/workspace-browser-extension-user-interface/workspace-browser-extension-user-interface-hub-business/side-menu/add-website/) apparaît au bas de la ***Zone de contenu***.  

### Onglet Générateur de mots de passe 

L'onglet ***Générateur de mots de passe*** vous aide à créer un mot de passe fort et sécurisé adapté à vos besoins et aux exigences du site Web pour votre nouveau compte.  
![Onglet Générateur de mots de passe](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2077.png)  
Votre mot de passe personnalisé est généré en haut de la ***Zone de contenu*** avec un indicateur de force en dessous. Vous pouvez le copier ou en générer un nouveau en utilisant respectivement les boutons ***Copier dans le presse-papiers*** et ***Générer un mot de passe***. La ***Longueur du mot de passe***, qui est fixée à 12 par défaut, peut également être ajustée.  

Dans la section déroulante ***Général***, vous pouvez sélectionner les types de caractères que votre mot de passe doit contenir ainsi que le nombre minimum de caractères de chaque type qui doit être inclus.  
![Section Général](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2078.png)  
Dans la section déroulante ***Avancé***, vous êtes en mesure de personnaliser davantage votre mot de passe en saisissant les caractères que vous souhaitez inclure dans votre mot de passe, suivis du nombre minimum de fois où ils doivent apparaître. Dans le second champ, vous pouvez également saisir les caractères que vous voulez exclure de votre mot de passe.  
![Section Avancé](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2079.png)  
{% snippet icon.badgeInfo %} 
Pour apprendre à utiliser le ***Générateur de mots de passe*** lors de la création d'un compte sur un site Web, consultez [Créer un compte de site Web dans {{ fr.DHUBB }} avec le {{ fr.WBEX }}](/fr/hub/workspace-browser-extension/using-workspace-browser-extension/using-workspace-browser-extension-with-hub-business/create-account-website-hub-business/). 
{% endsnippet %}
 
### Fonctionnalités des entrées 

Quel que soit l'onglet dans lequel vous vous trouvez (à l'exception de l'onglet ***Générateur de mots de passe***), lorsque vous passez la souris sur une entrée, trois nouvelles options apparaissent : les boutons ***Copier le nom d'utilisateur***, ***Copier le mot de passe*** et ***Affichage***.  
![Copier le nom d'utilisateur, Copier le mot de passe et Affichage](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2080.png) 
Les boutons ***Copier le nom d'utilisateur*** et ***Copier le mot de passe*** copient le nom d'utilisateur/mot de passe de l'entrée dans votre presse-papiers.  

Le bouton ***Affichage*** vous donne un aperçu de l'entrée ainsi que des fonctionnalités supplémentaires. La disponibilité des informations et des fonctionnalités dépend du type d'entrée et des informations fournies dans l'entrée, bien que certaines d'entre elles soient toujours disponibles :  

* ***Modifier***/***Supprimer*** l'entrée en passant par le bouton des points de suspension verticaux en haut à droite. 
* Visualiser l'emplacement de votre entrée dans les sections ***{{ fr.VLT_MAJ }}*** et ***Dossier*** (si elle est située dans un dossier). 
* Voir quand l'entrée a été modifiée pour la dernière fois et quand elle a été créée dans les sections ***Dernière modification le*** et ***Créé le*** respectivement.  

Les autres informations et fonctionnalités dépendront de ce que vous avez fourni lors de la création de l'entrée (nom d'utilisateur, mot de passe, étiquettes, description, etc.).  
![Aperçu de l'entrée](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2081.png)  
