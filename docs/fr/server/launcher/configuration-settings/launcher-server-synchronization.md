---
eleventyComputed:
  title: Synchronisation de {{ fr.DLAUNCHER }} et {{ fr.DVLS }}
  order: 20
---
{{ fr.DLAUNCHER }} et {{ fr.DVLS }} doivent être configurés ensemble. Le lancement de connexions peut être défini pour tous les utilisateurs dans les ***Paramètres de {{ fr.DVLS }}*** ou individuellement dans les ***Paramètres du compte***.  

{% snippet icon.badgeInfo %} 
Vous devez vous connecter au moins une fois à {{ fr.DLAUNCHER }} pour que l'outil lance les sessions à partir de {{ fr.DVLS }}. 
{% endsnippet %}
 
### Paramètres de {{ fr.DVLS }} 

Cette méthode définit comment tous les utilisateurs lanceront les connexions.  

Dans ***Administration - Paramètres Serveur - Avancé***, utiliser le menu déroulant ***Lancer une connexion avec*** pour sélectionner ***{{ fr.DLAUNCHER }}***.  
![!!ServerOp4007.png](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp4007.png)  

### Paramètres du compte 
Cette méthode définit comment chaque utilisateur lancera les connexions distantes.  

1. Cliquer sur l'***avatar*** de utilisateur. 
1. Cliquer sur ***Paramètres***. 
![!!ServerOp4008.png](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp4008.png) 
1. Choisir ***{{ fr.DLAUNCHER }}*** dans le menu déroulant de ***Lancer une connexion avec*** et ***Enregistrer***. 
![!!ServerOp4009.png](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp4009.png) 

