---
  title: Créer et inviter des utilisateurs
---
Créer et inviter des ***Utilisateurs*** dans votre {{ fr.DHUBB }} avec leur adresse courriel. 
{% snippet icon.badgeCaution %} 
Si votre {{ fr.DHUBB }} est configurée avec les identifiants d'authentification SSO d'Azure AD Office 365, suivre le processus spécifique pour inviter des utilisateurs avec [Inviter des utilisateurs pour SSO](/fr/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/). 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
Nous vous recommandons fortement d'inviter au moins un autre administrateur. Voir le processus avec [Inviter un administrateur](/fr/hub/web-interface/hub-overview/administration/management/users/administrator-invite/). 
{% endsnippet %}
 
### Inviter des utilisateurs 

1. Aller dans ***Administration - Utilisateurs***. 
1. Cliquer ***Ajouter des utilisateurs***.  
![!!Hub4180](https://webdevolutions.azureedge.net/docs/fr/hub/Hub4180.png) 
1. Saisir l'adresse courriel de l'***Utilisateur***. 
{% snippet icon.badgeInfo %} 
Il est possible de coller une liste d'adresses courriel d'***Utilisateurs*** qui feront partie des mêmes [Groupes d'utilisateurs](/fr/hub/web-interface/hub-overview/administration/management/user-groups/). Chaque adresse courriel doit être séparée par un point-virgule (;) ou une virgule (,). 
{% endsnippet %}
 
4. Appuyer sur Entrée. 
{% snippet icon.badgeInfo %} 
Cette étape validera si l'utilisateur a un {{ fr.DA }}.  

* Si oui, il liera le compte au {{ fr.DHUBB }} et l'utilisateur recevra un courriel d'invitation.  
* Sinon, il créera automatiquement un {{ fr.DA }} avec un ***Mot de passe temporaire***, que vous pouvez choisir comment gérer. Vous pouvez gérer la gestion des ***Mots de passe temporaires*** dans ***Administration - Paramètres du système - Général***. 
{% endsnippet %}
 
![!!Hub4181](https://webdevolutions.azureedge.net/docs/fr/hub/Hub4181.png) 

5. Cliquer ***Suivant***. 
1. Sélectionner des ***Options*** supplémentaires.  
![!!Hub4182](https://webdevolutions.azureedge.net/docs/fr/hub/Hub4182.png) 
1. Cliquer ***Suivant***. 
1. Assigner des ***Groupes d'utilisateurs***.  
{% snippet icon.badgeInfo %} 
Les ***Groupes d'utilisateurs*** doivent être définis au préalable en tant que groupe personnalisé dans {{ fr.DHUB }}. Pour plus d'informations, voir [Groupes d'utilisateurs](/fr/hub/web-interface/hub-overview/administration/management/user-groups/). 
{% endsnippet %}
 
![!!Hub4183](https://webdevolutions.azureedge.net/docs/fr/hub/Hub4183.png) 

9. Cliquer ***Envoyer une invitation***.  

{{ fr.DHUB }} enverra un courriel contenant les informations essentielles aux utilisateurs invités; le lien pour accéder à {{ fr.DHUBB }}, l'ID et la clé d'invitation. 
