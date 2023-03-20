---
title: Menu latéral
---
En utilisant les onglets du ***Menu latéral*** , vous pouvez accéder à diverses fonctionnalités de {{ fr.DWL }} . Chaque onglet affiche une vue différente dans la ***Zone de contenu*** .  

Lorsque vous utilisez {{ fr.DWL }} avec {{ fr.DPS }} , les onglets disponibles sont l&apos;onglet ***Correspondant*** , l&apos;onglet ***Toutes les entrées*** , l&apos;onglet ***Favoris*** , l&apos;onglet ***Récent*** et l&apos;onglet ***Générateur de mots de passe*** .  

Dans tous les onglets, à l&apos;exception de l&apos;onglet ***Générateur de mots de passe*** , lorsque vous passez le curseur sur une entrée, trois nouvelles options apparaissent : les boutons ***Copier le nom d&apos;utilisateur***, ***Copier le mot de passe***, et ***Affichage***. Consultez la section [Fonctionnalités des entrées](#fonctionnalités-des-entrées) pour plus d&apos;informations.  

## Onglets Devolutions Web Login

### Onglet Correspondant 

L&apos;extension s&apos;ouvre sur l&apos;onglet ***Correspondant*** . C&apos;est là que vous verrez la liste des identifiants disponibles pour le site Web particulier sur lequel vous vous trouvez.  

{% snippet icon.badgeInfo %} 
Pour connaître les méthodes de récupération de vos identifiants, consultez [cette rubrique](/fr/server/dwl/using-devolutions-web-login/retrieve-credentials-dwl/) . 
{% endsnippet %}
 
![Onglet Correspondant](/img/fr/server/ServerOp2011.png) 

En haut, vous pouvez utiliser la barre de ***Recherche*** pour filtrer tous vos identifiants, pas seulement celles applicables au site Web. Vous pouvez également utiliser le bouton ***Actualiser*** situé à côté pour mettre à jour les résultats de la recherche.  

En bas, le bouton ***Ajouter un site Web*** ouvre un nouvel onglet de navigateur qui vous permet d&apos;ajouter manuellement une entrée de site Web dans {{ fr.DPS }} par le biais de l&apos;extension {{ fr.DWL }} .  

{% snippet icon.badgeInfo %} 
Pour obtenir une liste complète des champs disponibles dans la fenêtre ***Ajouter un site Web*** , consultez [cette rubrique](/fr/server/dwl/devolutions-web-login-user-interface/side-menu/add-website/) . Vous pouvez également consulter notre guide étape par étape pour [ajouter une entrée de site Web](/fr/server/dwl/using-devolutions-web-login/add-website-entry-dwl/) . 
{% endsnippet %}
 
### Onglet Toutes les entrées 

{% snippet icon.badgeInfo %} 
Lorsque vous accédez à l&apos;onglet ***Toutes les entrées*** pour la première fois, vous devez sélectionner les coffres {{ fr.DPS }} que vous souhaitez synchroniser avec {{ fr.DWL }} . Pour en savoir plus, consultez notre rubrique [Première connexion avec {{ fr.DWL }}](/fr/server/dwl/first-login-dwl/) . 
{% endsnippet %}
 
L&apos;onglet ***Toutes les entrées*** vous permet de parcourir tous vos coffres synchronisés pour les entrées de sites Web uniquement. Vous rencontrerez d&apos;abord la liste de vos coffres synchronisés.  
![Onglet Toutes les entrées](/img/fr/server/ServerOp2012.png)  

En haut, vous pouvez utiliser la barre de ***Filtre*** pour rechercher des entrées de site Web dans tous vos coffres.  

Vous pouvez accéder à vos coffres de deux manières :  

* Pour accéder à un coffre dans {{ fr.DPS }} , cliquer sur le bouton ***Ouvrir*** à côté d&apos;un coffre pour l&apos;ouvrir dans {{ fr.DPS }} dans un nouvel onglet de navigateur.  

* Pour accéder à un coffre dans {{ fr.DWL }} , cliquer sur ce coffre et naviguer dans les dossiers pour trouver manuellement l&apos;entrée recherchée. La structure des dossiers est identique à celle de votre {{ fr.DPS }} , sauf que seuls les chemins menant aux entrées de site Web seront affichés. Lorsque vous naviguez dans les dossiers, le bouton ***Ajouter un site Web*** apparaît au bas de la ***Zone de contenu*** . Vous pouvez également utiliser la barre du haut pour faire une recherche dans un emplacement spécifique.  
![Navigation dans un coffre via Devolutions Web Login](/img/fr/server/ServerOp2013.png)  

De retour sur la vue principale de l&apos;onglet ***Toutes les entrées*** , le bouton ***Sélectionner les coffres à synchroniser*** en bas de la ***Zone de contenu*** vous permet de sélectionner individuellement les coffres de {{ fr.DPS }} à synchroniser avec {{ fr.DWL }} .  

### Onglet Favoris 

Si vous avez des entrées marquées comme favorites, elles seront affichées ici dans l&apos;onglet ***Favoris*** .  
![Onglet Favoris](/img/fr/server/ServerOp2014.png)  

Vous pouvez rechercher une entrée particulière à l&apos;aide de la barre ***Rechercher dans Favoris*** située en haut. 

### Onglet Récent 

Les dernières entrées que vous avez utilisées s&apos;affichent dans l&apos;onglet ***Récent*** .  
![Onglet Récent](/img/fr/server/ServerOp2015.png)  

Vous pouvez rechercher une entrée particulière à l&apos;aide de la barre de ***Filtre*** située en haut.  

En bas, vous pouvez cliquer sur le bouton ***Effacer les entrées récentes*** pour effacer toutes les entrées actuelles de cette vue.  

### Onglet Générateur de mots de passe 

L&apos;onglet ***Générateur de mots de passe*** vous aide à créer un mot de passe fort et sécurisé adapté à vos besoins et aux exigences du site Web pour votre nouveau compte.  
![Onglet Générateur de mots de passe](/img/fr/server/ServerOp2016.png)  

Votre mot de passe personnalisé est généré en haut de la ***Zone de contenu*** avec un indicateur de force en dessous. Vous pouvez le copier ou en générer un nouveau en utilisant respectivement les boutons ***Copier dans le presse-papiers*** et ***Générer un mot de passe***. La ***Longueur du mot de passe*** , qui est fixée à 12 par défaut, peut également être ajustée.  

Dans la section déroulante ***Général*** , vous pouvez sélectionner les types de caractères que votre mot de passe doit contenir ainsi que le nombre minimum de caractères de chaque type qui doit être inclus.  
![Section Général](/img/fr/server/ServerOp2017.png)  

Dans la section déroulante ***Avancé*** , vous êtes en mesure de personnaliser davantage votre mot de passe en saisissant les caractères que vous souhaitez inclure dans votre mot de passe, suivis du nombre minimum de fois où ils doivent apparaître. Dans le second champ, vous pouvez également saisir les caractères que vous voulez exclure de votre mot de passe.  
![Section Avancé](/img/fr/server/ServerOp2018.png)  

{% snippet icon.badgeInfo %} 
Pour apprendre à utiliser le ***Générateur de mots de passe*** lors de la création d&apos;un compte sur un site Web, consultez [cette rubrique](/fr/server/dwl/using-devolutions-web-login/create-account-website-dwl/) . 
{% endsnippet %}
 
### Fonctionnalités des entrées 

Quel que soit l&apos;onglet dans lequel vous vous trouvez (à l&apos;exception de l&apos;onglet ***Générateur de mots de passe*** ), lorsque vous passez la souris sur une entrée, trois nouvelles options apparaissent : les boutons ***Copier le nom d&apos;utilisateur***, ***Copier le mot de passe*** et ***Affichage***.  
![Options Copier le nom d'utilisateur, Copier le mot de passe et Affichage](/img/fr/server/ServerOp2019.png)  

Les boutons ***Copier le nom d&apos;utilisateur*** et ***Copier le mot de passe*** copient le nom d&apos;utilisateur/mot de passe de l&apos;entrée dans votre presse-papiers.  

Le bouton ***Affichage*** vous donne un aperçu de l&apos;entrée ainsi que des fonctionnalités supplémentaires. La disponibilité des informations et des fonctionnalités dépend du type d&apos;entrée et des informations fournies dans l&apos;entrée, bien que certaines d&apos;entre elles soient toujours disponibles :  

* ***Modifier/Supprimer*** l&apos;entrée ou afficher son mot de passe en passant par le bouton des points de suspension verticaux en haut à droite.  
* Marquer votre entrée comme favorite en cliquant sur l&apos;icône ***Ajouter aux favoris*** à côté du nom de l&apos;entrée. L&apos;entrée s&apos;affichera alors dans l&apos;onglet ***Favoris*** .  
* Visualiser l&apos;emplacement de votre entrée dans les sections ***Coffre*** et ***Dossier*** (si elle est située dans un dossier).  
* Visualiser et accéder à l&apos; ***URL*** associée à l&apos;entrée.  

Les autres informations et fonctionnalités dépendront de ce que vous avez fourni lors de la création de l&apos;entrée (nom d&apos;utilisateur, mot de passe, étiquettes, description, etc.).  
![Aperçu de l'entrée](/img/fr/server/ServerOp2020.png)  


