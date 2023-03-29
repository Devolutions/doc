---
eleventyComputed:
  title: Expérience d'invitation de l'utilisateur final pour SSO dans {{ fr.PHUB }} Business
---
{% youtube 'SlU5CyctxyY' %}  

Les utilisateurs invités à rejoindre {{ fr.PHUB }} Business reçoivent ce courriel de l'administrateur :  
![Hub4170.png](/img/fr/hub/Hub4170.png) 

1. Accéder au lien URL de {{ fr.PHUB }} Business. 
1. Se connecter avec le bouton ***Se connecter avec Microsoft*** .  
![Hub4090.png](/img/fr/hub/Hub4090.png) 
{% snippet icon.badgeInfo %} 
Les nouveaux utilisateurs sans {{ fr.DA }} devront compléter leur compte. Si les utilisateurs ont déjà un {{ fr.DA }} , ils ne passeront pas par ces étapes de configuration.  

Les nouveaux utilisateurs qui accèdent via la connexion Azure passeront par cette configuration s'ils n'ont pas de {{ fr.DA }} . Puisque nous ne voulons pas que l'utilisateur définisse un mot de passe pour ce compte, nous devons avoir un moyen de stocker la ***Clé Privée*** . Habituellement, elle est conservée avec le compte de mot de passe. Cette clé spéciale et unique pour chaque utilisateur est nécessaire lorsque l'utilisateur change d'appareil ou de navigateur. Au jour le jour, l'appareil et le navigateur reconnaissent l'utilisateur, mais pas un nouveau.  

C'est pourquoi nous souhaitons que l'utilisateur stocke cette ***Clé Privée*** sur l'application mobile ***Devolutions Workspace*** . Il sera beaucoup plus pratique pour l'utilisateur de faire une notification Push pour accepter le nouvel appareil ou navigateur. 
{% endsnippet %}
 
![Hub4176.png](/img/fr/hub/Hub4176.png) 

* Nous vous conseillons vivement la première méthode avec l'application mobile ***Devolutions Workspace*** . Suivre les étapes [ici](#méthode-avec-application-devolutions-workspace) .  
* La deuxième meilleure option consiste à télécharger et à imprimer la ***Clé Privée*** sous forme de ***Code QR*** . Pour cette méthode, continuez les étapes [ici](#méthode-avec-code-qr) .  
* En dernier recours, et si l'utilisateur ne dispose pas d'un appareil mobile, un ***Mot de passe*** peut être créé pour ajouter la ***Clé Privée*** au {{ fr.DA }} . 

### Méthode avec application devolutions workspace 

1. Télécharger, sur un appareil mobile, l'application ***Devolutions Workspace*** . 
1. Cliquer ***Continuer*** .  
![Hub4177.png](/img/fr/hub/Hub4177.png) 
1. Dans l'application ***Devolutions Workspace*** , cliquer sur le bouton ***Ajouter*** . 
1. De retour à la page du navigateur, choisir l'option ***Application mobile*** . 
1. Scanner le ***Code QR*** dans ***Devolutions Workspace*** .  
![Hub4178.png](/img/fr/hub/Hub4178.png) 
1. Attendre que le compte et l'authentificateur soient associés. Une fois cette configuration terminée, elle fournira un accès au {{ fr.PHUB }} .  

Vous pouvez maintenant aller à la section [Premier Accès au {{ fr.PHUB }}](#premier-accès-au--frphub) . 

### Méthode avec code qr 

1. Sélectionner l'option ***Code QR*** . 
1. Cliquer ***Télécharger*** pour enregistrer la ***Clé Privée*** en tant que document de Code QC sur votre ordinateur. Vous pouvez également ***Imprimer*** une copie.  
![Hub4179.png](/img/fr/hub/Hub4179.png) 
1. Cliquer ***Continuer*** .  

Le fichier PDF sera nommé devolutions-qr-code.pdf . Veuillez vous assurer de le conserver en lieu sûr. 

## Premier accès au {{ fr.phub }} 

1. Étant donné que l'utilisateur a été invité avec un ID d'invitation et une clé, cliquer ***Oui*** .  
![Hub4171.png](/img/fr/hub/Hub4171.png) 
1. Entrer l' ***ID*** et la ***Clé d'invitation*** fournis dans le courriel dans les champs appropriés.  
![Hub4172.png](/img/fr/hub/Hub4172.png) 
1. Cliquer ***Déverrouiller*** .  

L'utilisateur est maintenant connecté et prêt à utiliser {{ fr.PHUB }} . 

