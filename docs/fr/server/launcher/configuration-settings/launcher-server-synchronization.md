---
eleventyComputed:
  title: Synchronisation de Launcher et {{ fr.RDMS }}
---
{{ fr.LAUNCHER }} et {{ fr.RDMS }} doivent être configurés ensemble. Le lancement de connexions peut être défini pour tous les utilisateurs dans les ***Paramètres de {{ fr.RDMS }}*** ou individuellement dans les ***Paramètres du compte*** .  

{% snippet icon.badgeInfo %} 
Vous devez vous connecter au moins une fois à {{ fr.LAUNCHER }} pour que l'outil lance les sessions à partir de {{ fr.RDMS }} . 
{% endsnippet %}
 
### Paramètres de {{ fr.RDMS }} 

Cette méthode définit comment tous les utilisateurs lanceront les connexions.  

Dans ***Administration - Paramètres Serveur - Avancé*** , utiliser le menu déroulant ***Lancer une connexion avec*** pour sélectionner ***{{ fr.LAUNCHER }}*** .  
![!!ServerOp4007.png](/img/fr/server/ServerOp4007.png)  

### Paramètres du compte 
Cette méthode définit comment chaque utilisateur lancera les connexions distantes.  

1. Cliquer sur l' ***avatar*** de utilisateur. 
1. Cliquer sur ***Paramètres*** . 
![!!ServerOp4008.png](/img/fr/server/ServerOp4008.png) 
1. Choisir ***{{ fr.LAUNCHER }}*** dans le menu déroulant de ***Lancer une connexion avec*** et ***Enregistrer*** . 
![!!ServerOp4009.png](/img/fr/server/ServerOp4009.png) 

