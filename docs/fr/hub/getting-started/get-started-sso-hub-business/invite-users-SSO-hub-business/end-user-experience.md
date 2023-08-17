---
eleventyComputed:
  title: Expérience d'invitation de l'utilisateur final pour SSO dans {{ fr.HUBB }}
  description: Les utilisateurs invités à rejoindre {{ fr.HUBB }} reçoivent un courriel de l'administrateur.
  keywords:
  - Office 365
  - Office365
  - Microsoft
  - authentification
  - clé privée
---
{% youtube 'SlU5CyctxyY' %}  

Les utilisateurs invités à rejoindre {{ fr.HUBB }} reçoivent ce courriel de l'administrateur :  
![Courriel d'invitation](https://webdevolutions.azureedge.net/docs/fr/hub/Hub4170.png)

1. Accéder au lien URL de {{ fr.HUBB }}. 
1. Se connecter avec ***Se connecter avec Microsoft***.  
![Se connecter avec Microsoft](https://webdevolutions.azureedge.net/docs/fr/hub/Hub4090.png)
{% snippet icon.badgeInfo %} 
Les nouveaux utilisateurs qui accèdent via la connexion Azure passeront par cette configuration s'ils n'ont pas de {{ fr.DA }}. Puisque nous ne voulons pas que l'utilisateur définisse un mot de passe pour ce compte, nous devons avoir un moyen de stocker la ***Clé Privée***. Habituellement, elle est conservée avec le compte de mot de passe. Cette clé spéciale et unique pour chaque utilisateur est nécessaire lorsque l'utilisateur change d'appareil ou de navigateur. Au quotidien, l'appareil et le navigateur reconnaissent l'utilisateur.

C'est pourquoi nous souhaitons que l'utilisateur stocke cette ***Clé Privée*** sur l'application mobile ***{{ fr.DWS }}***. Il sera beaucoup plus pratique pour l'utilisateur de faire une notification Push pour accepter le nouvel appareil ou navigateur. 
{% endsnippet %}  
 
![Stockez votre clé privée](https://webdevolutions.azureedge.net/docs/fr/hub/Hub4176.png) 
* Nous vous conseillons vivement la première méthode avec l'application mobile ***{{ fr.DWS }}***. Suivez les étapes [ici](#méthode-avec-application-devolutions-workspace).  
* La deuxième meilleure option consiste à télécharger et à imprimer la ***Clé Privée*** sous forme de ***Code QR***. Pour cette méthode, continuez les étapes [ici](#méthode-avec-code-qr).  
* En dernier recours, et si l'utilisateur ne dispose pas d'un appareil mobile, un ***Mot de passe*** peut être créé pour ajouter la ***Clé Privée*** au {{ fr.DA }}. 

## Méthode avec l'application {{ fr.DWS }} 

1. Télécharger, sur un appareil mobile, l'application ***{{ fr.DWS }}***. 
1. Cliquer ***Continuer***.  
![Téléchargez {{ fr.DWS }}](https://webdevolutions.azureedge.net/docs/fr/hub/Hub4177.png) 
3. Dans l'application ***{{ fr.DWS }}***, accéder à l'espace ***Authenticator***, puis cliquer sur ***Ajouter***. 
1. De retour à la page du navigateur, choisir l'option ***Application mobile***. 
1. Scanner le ***Code QR*** dans ***{{ fr.DWS }}***.  
![Scannez ce code QR dans votre {{ fr.DWS }}](https://webdevolutions.azureedge.net/docs/fr/hub/Hub4178.png) 
6. Attendre que le compte et l'authentificateur soient associés. Une fois cette configuration terminée, elle fournira un accès au {{ fr.HUB }}.  

Vous pouvez maintenant aller à la section [Premier Accès au {{ fr.HUB }}](#premier-accès-au-hub). 

## Méthode avec code QR

1. Sélectionner l'option ***Code QR***. 
1. Cliquer ***Télécharger*** pour enregistrer la ***Clé Privée*** en tant que document de Code QR sur votre ordinateur. Vous pouvez également en ***Imprimer*** une copie.  
![Téléchargez ou imprimez votre clé privée sous la forme d'un code QR](https://webdevolutions.azureedge.net/docs/fr/hub/Hub4179.png) 
3. Cliquer ***Continuer***.  

Le fichier PDF sera nommé *devolutions-qr-code.pdf*. Veuillez vous assurer de le conserver en lieu sûr. 

## Premier accès au Hub 

1. Étant donné que l'utilisateur a été invité avec un ID d'invitation et une clé, cliquer ***Oui***.  
![Approbation requise](https://webdevolutions.azureedge.net/docs/fr/hub/Hub4171.png) 
2. Puisque le {{ fr.HUB }} a été ouvert à partir de votre courriel, l'***ID de l'invitation*** et la ***Clé d'invitation*** devraient être remplis automatiquement. Si ce n'est pas le cas, copier le code et le coller dans les champs appropriés.  
![ID de l'invitation et Clé de l'invitation](https://webdevolutions.azureedge.net/docs/fr/hub/Hub4172.png) 
3. Cliquer ***Déverrouiller***.  

L'utilisateur est maintenant connecté et prêt à utiliser {{ fr.HUB }}. 

