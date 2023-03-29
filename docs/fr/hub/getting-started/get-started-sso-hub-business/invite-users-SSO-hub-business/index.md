---
title: Inviter des utilisateurs pour SSO dans Hub Business
---
Une fois l'authentification unique (SSO) [configurée](HUB_Connect_AzureAD_Office365_Authentification) , vous pouvez désormais utiliser cette invitation spécifique pour tous vos utilisateurs.  

Cette méthode enverra un courriel préformaté à tous les destinataires. Il fournira votre URL de {{ fr.PHUB }} Business avec un ID d'invitation et une clé à utiliser.  
{% snippet icon.badgeCaution %} 
L'ID d'invitation et la clé servent à préapprouver l'accès à {{ fr.PHUB }} Business. Ils expirent 7 jours après la date d'envoi. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Dans le cadre du processus de création, un {{ fr.DA }} sera créé. Il est obligatoire pour accéder à {{ fr.PHUB }} , mais il ne sera pas nécessaire de définir un mot de passe puisque vos utilisateurs s'authentifieront via Azure AD. 
{% endsnippet %}
 
### Inviter des utilisateurs de l'organisation 

Si vous avez de nouveaux utilisateurs synchronisés depuis votre fournisseur, ils seront prêts à être invités. Vous pouvez voir leur nombre dans la section ***Invitations nécessaires*** .  

1. Dans ***Administration – Utilisateurs*** , cliquer sur ***Inviter des utilisateurs*** .  
![Inviter des utilisateurs](/img/fr/hub/Hub4164.png) 
1. Sélectionner parmi les utilisateurs suggérés, le cas échéant, puis cliquer sur ***Suivant*** .  
![À partir de l'organisation](/img/fr/hub/Hub2058.png) 
1. Il est possible d'inviter d'autres utilisateurs qui ne sont pas synchronisés. Saisir une adresse électronique individuelle ou de groupe, puis cliquer sur ***Suivant*** .  

{% snippet icon.badgeInfo %} 
Il faut s'assurer de ne pas définir une connexion forcée avec SSO, car ces utilisateurs ne font pas partie de la synchronisation de votre fournisseur d'authentification. 
{% endsnippet %}
 
![Par courriels](/img/fr/hub/Hub2059.png) 

4. Sélectionner des ***Options*** pour les utilisateurs, puis cliquer sur ***Suivant*** .  
![Options](/img/fr/hub/Hub2060.png) 
1. Les utilisateurs synchronisés n'ont pas besoin d'être assignés aux ***Groupes d'utilisateurs*** synchronisés : ils seront ajoutés automatiquement lors de leur connexion. Si vous avez des ***Groupes d'utilisateurs*** personnalisés, vous pouvez leur assigner des utilisateurs. Lorsqu'ils se joindront, ils seront déjà assignés à ces groupes. 
{% snippet icon.badgeInfo %} 
Les ***Groupes d'utilisateurs*** personnalisés doivent être définis au préalable dans {{ fr.PHUB }} Business. Pour plus d'informations, voir [Groupes d'utilisateurs](/fr/hub/web-interface/hub-overview/administration/management/user-groups/) . 
{% endsnippet %}
 
![Groupes d'utilisateurs](/img/fr/hub/Hub2061.png) 

6. Cliquer sur ***Envoyer une invitation*** .  

{{ fr.PHUB }} Business enverra un courriel contenant les informations essentielles aux destinataires : le lien pour accéder au {{ fr.PHUB }} Business, l'ID d'invitation et la clé.  
{% snippet icon.badgeCaution %} 
Les utilisateurs devront remplir une [configuration de {{ fr.DA }}](/fr/hub/getting-started/get-started-sso-hub-business/invite-users-SSO-hub-business/end-user-experience/) . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Le destinataire fera seulement partie de votre {{ fr.PHUB }} lorsqu'il s'y connectera pour la première fois. Ce n'est qu'alors que vous pourrez les voir dans ***Administration – Utilisateurs*** . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Tout utilisateur qui essaie d'accéder à votre {{ fr.PHUB }} Business avec son URL pour la première fois, sans recevoir d'invitation, déclenchera une demande d'approbation.  

Un courriel sera envoyé à tous les administrateurs. Il peut être approuvé ou refusé dans la section ***Administration – Utilisateurs*** . 
{% endsnippet %}
 


