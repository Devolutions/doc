---
eleventyComputed:
  title: Expérience d'invitation de l'utilisateur final dans {{ fr.HUBB }}
---
{% snippet icon.badgeInfo %} 
L'administrateur peut [inviter des utilisateurs à se connecter avec l'identification unique (SSO)](/fr/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/), qui est un moyen d'identifier un utilisateur en utilisant un seul identifiant, à {{ fr.HUBB }}. L'expérience d'invitation de l'utilisateur final est différente avec le SSO, car le courriel que l'utilisateur reçoit lui demande de se connecter avec Microsoft. Si tel est le cas, veuillez vous référer à notre rubrique [Expérience d'invitation de l'utilisateur final pour SSO](/fr/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/end-user-experience/). 
{% endsnippet %}
 
Les utilisateurs qui sont invités à rejoindre {{ fr.HUBB }} par un administrateur reçoivent un courriel d'invitation. Ce courriel varie selon que l'utilisateur possède ou non un {{ fr.DA }} et selon les paramètres de l'administrateur qui a envoyé l'invitation. Pour savoir comment inviter des utilisateurs, consultez [cette rubrique](/fr/hub/web-interface/hub-overview/administration/management/users/create-invite-users/).  

Pour des informations concernant la première connexion de l'utilisateur à {{ fr.HUBB }}, visitez l'une des sections ci-dessous en fonction de la situation de l'utilisateur.  

* [Invité sans {{ fr.DA }}](#invité-sans--frda)  
* [Invité avec un {{ fr.DA }} existant](#invité-avec-un--frda--existant)  

Pour sauter les instruction de connexion et accéder directement aux fonctionnalités essentielles de {{ fr.HUBB }}, rendez-vous à la section [Premiers pas dans {{ fr.HUBB }}](#premiers-pas-dans--frphub--business). 

## Première connexion 

### Invité sans {{ fr.DA }} 

Si l'utilisateur ne possède pas de {{ fr.DA }}, il aura besoin d'un [mot de passe temporaire](/fr/hub/web-interface/hub-overview/administration/management/users/create-invite-users/temporary-password/) pour accéder à {{ fr.HUBB }}. L'administrateur qui a invité l'utilisateur peut inclure ou non ce mot de passe dans le courriel d'invitation.  

Si le mot de passe temporaire est inclus, l'utilisateur reçoit un courriel d'invitation contenant un lien vers {{ fr.HUBB }} avec son mot de passe temporaire.  
![Courriel d'invitation – Mot de passe temporaire inclus](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2008.png) 

Si le mot de passe temporaire n'est pas inclus, l'utilisateur reçoit un courriel d'invitation avec un lien vers {{ fr.HUBB }} ainsi qu'un avis indiquant que l'administrateur lui transmettra bientôt le mot de passe temporaire.  
![Courriel d'invitation – Mot de passe temporaire non inclus](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2011.png) 

Une fois que les utilisateurs ont reçu leur mot de passe temporaire, ils sont prêts à se connecter à {{ fr.HUBB }}.  

1. Accéder au lien URL de {{ fr.HUBB }}. 
1. Saisir le mot de passe temporaire, puis cliquer sur ***Continuer***.  
![Connexion – Aucun {{ fr.DA }}](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2009.png) 
1. Créer un nouveau mot de passe pour le compte en respectant les restrictions relatives au mot de passe, puis cliquer sur ***Mettre à jour mon mot de passe***.  
![Modification du mot de passe](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2010.png) 

Maintenant que vous avez accès à {{ fr.HUBB }}, vous pouvez passer à la section [Premiers pas dans {{ fr.HUBB }}](#premiers-pas-dans--frphub--business). 

### Invité avec un {{ fr.DA }} existant 

Si l'utilisateur possède déjà un {{ fr.DA }}, il recevra un courriel d'invitation avec un lien vers {{ fr.HUBB }}.  
![Courriel d'invitation – {{ fr.DA }} existant](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2006.png) 
1. Accéder au lien URL de {{ fr.HUBB }}. 
1. Saisir vos identifiants de {{ fr.DA }}, puis cliquer sur ***Continuer***.  
![Connexion – {{ fr.DA }} existant](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2007.png) 

Maintenant que vous avez accès à {{ fr.HUBB }}, vous pouvez continuer à la section suivante. 

## Premiers pas dans {{ fr.HUBB }} 

Après vous être connecté, {{ fr.HUBB }} s'ouvre sur l'onglet ***Coffre***. Cette vue permet d'interagir avec les coffres et les entrées auxquels vous avez accès. Vous pouvez changer de coffre en utilisant le menu de sélection des coffres en haut.  
![Onglet Coffre](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2001.png) 
Vous pouvez aussi accéder à votre ***Coffre d'utilisateur***, qui est centré sur l'utilisateur et est utilisé pour stocker des informations telles que des identifiants de comptes personnels, en cliquant sur l'onglet ***Coffre d'utilisateur*** dans le menu latéral.  
![Onglet Coffre d'utilisateur](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2002.png) 

### Créer des entrées 

{{ fr.DWL }} est notre extension de navigateur Web pour les mots de passe. Il s'agit du client privilégié à utiliser en conjonction avec {{ fr.HUBB }} pour créer et gérer les entrées d'identifiants de sites Web. Consultez cette rubrique (à venir) pour connaître les étapes permettant d'ajouter une entrée de site Web avec {{ fr.DWL }}, ou consultez la rubrique [Créer des entrées manuellement](/fr/hub/web-interface/hub-overview/entries/create-entries-manually/) pour savoir comment les créer directement dans {{ fr.HUBB }}. Vous pouvez également suivre les étapes ci-dessous pour créer manuellement une entrée dans votre ***Coffre d'utilisateur***.  

1. Sélectionner le dossier dans lequel vous voulez créer la nouvelle entrée, le cas échéant. Sinon, passez cette première étape. 
1. Cliquer sur le bouton ***Ajouter*** situé dans le ***{{ fr.NPANE }}***.  
![Bouton Ajouter](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2003.png) 
1. Sélectionner le type d'entrée que vous voulez créer. Vous pouvez effectuer une recherche par catégories avec le menu latéral ou appliquer un filtre avec la barre de recherche. Cliquer sur ***Continuer*** lorsque votre type d'entrée est sélectionné. 
{% snippet icon.badgeInfo %} 
Pour en apprendre davantage sur les types d'entrées, visitez notre rubrique [Type d'entrée](/fr/hub/web-interface/hub-overview/entries/entry-type/). 
{% endsnippet %}
 
![Ajouter une entrée](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2004.png) 

4. Remplir les informations pertinentes pour le type d'entrée que vous avez sélectionné, puis cliquer sur ***Ajouter***.  
![Exemples de champs d'information à remplir](https://webdevolutions.azureedge.net/docs/fr/hub/Hub2005.png) 
