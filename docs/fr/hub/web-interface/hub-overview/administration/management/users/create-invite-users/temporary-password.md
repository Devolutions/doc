---
title: Mot de passe temporaire
---
Un ***Mot de passe temporaire*** est créé automatiquement pour les nouveaux utilisateurs qui sont invités dans {{ fr.PHUB }} Business et qui n'ont pas de {{ fr.DA }} .  

{% snippet icon.badgeNotice %} 
Vous pouvez prédéfinir leur paramètre dans ***Administration - Paramètres du système - Général*** . Pour avoir un aperçu sur le sujet, consulter cette rubrique: [Général](/fr/hub/web-interface/hub-overview/administration/configuration-security/system-settings/general/) . 
{% endsnippet %}
 
* [Invité avec un {{ fr.DA }} existant](#invité-avec-un--frda--existant) 
* [Gérer automatiquement le Mot de passe temporaire pour l'invité sans {{ fr.DA }}](#gérer-automatiquement-le-mot-de-passe-temporaire-pour-linvité-sans--frda) 
* [Gérer manuellement le Mot de passe temporaire pour l'invité sans {{ fr.DA }}](#gérer-manuellement-le-mot-de-passe-temporaire-pour-linvité-sans--frda) 

### Invité avec un {{ fr.DA }} existant 

Dans le processus d'invitation, lorsqu'un {{ fr.DA }} est trouvé pour l'utilisateur, il liera automatiquement le compte à {{ fr.PHUB }} Business. 
{% snippet icon.badgeNotice %} 
Dans ce cas, le ***Mot de passe temporaire*** n'est pas utilisé, car le compte existe déjà. 
{% endsnippet %}
 
![!!Hub4184.png](/img/fr/hub/Hub4184.png) 
L'utilisateur recevra un courriel d'invitation avec un lien vers le {{ fr.PHUB }} . Pour y accéder, l'utilisateur se connecte avec ses identifiants de {{ fr.DA }} actuels.  
![!!Hub4185.png](/img/fr/hub/Hub4185.png) 

### Gérer automatiquement le Mot de passe temporaire pour l'invité sans {{ fr.DA }} 

Lorsque vous invitez un utilisateur qui n'a pas de {{ fr.DA }} , {{ fr.PHUB }} créera le compte et ajoutera l'utilisateur dans le coffre.  

Dans le processus, vous pouvez choisir de laisser {{ fr.PHUB }} gérer automatiquement le ***Mot de passe temporaire*** et l'envoyer via le courriel d'invitation.  
![!!Hub4186.png](/img/fr/hub/Hub4186.png) 

L'utilisateur recevra un courriel d'invitation avec un lien vers le {{ fr.PHUB }} avec son ***Mot de passe temporaire***.  

Il leur sera rappelé de changer leur mot de passe.  
![!!Hub4189.png](/img/fr/hub/Hub4189.png) 

### Gérer manuellement le Mot de passe temporaire pour l'invité sans {{ fr.DA }} 

Lorsque vous invitez un utilisateur qui n'a pas de {{ fr.DA }} , {{ fr.PHUB }} créera le compte et ajoutera l'utilisateur dans le coffre.  

Dans le processus, vous pouvez choisir de gérer manuellement le ***Mot de passe temporaire*** de {{ fr.PHUB }} .  
![!!Hub4187.png](/img/fr/hub/Hub4187.png) 

Dans la fenêtre de ***Rapport des invitations de masse*** , vous devrez copier ou télécharger le PDF du ***Mot de passe temporaire*** pour chacun de vos utilisateurs. Ceci est obligatoire, car ils auront besoin des informations pour accéder à {{ fr.PHUB }} Business.  
![!!Hub4188.png](/img/fr/hub/Hub4188.png) 

L'utilisateur recevra un courriel d'invitation automatique avec un lien vers le {{ fr.PHUB }} et un avertissement indiquant que vous lui transmettrez le ***Mot de passe temporaire*** .  
![!!Hub4190.png](/img/fr/hub/Hub4190.png) 

