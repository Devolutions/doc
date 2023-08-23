---
title: Authentification à deux facteurs
keywords:
- 2 facteur
- 2FA
- authentification
- MFA
---
Ajouter un niveau de sécurité à votre {{ fr.DA }} en configurant un mode d'authentification à deux facteurs (2FA). 

### Configuration de la récupération de compte 

1. Ouvrir votre {{ fr.DA }} et cliquer sur ***Authentification à deux facteurs***.  
![!!Cloud4026.png](https://webdevolutions.azureedge.net/docs/fr/cloud/Cloud4026.png) 
1. Cliquer sur ***Configurer***. 
1. Choisir votre méthode de récupération de compte entre ***SMS*** ou ***Courriel***.  
![Récupération de compte](https://webdevolutions.azureedge.net/docs/fr/cloud/Cloud4027.png)
1. Entrer votre numéro de téléphone (étape 2 indiquée ci-dessous) ou votre adresse courriel, puis cliquer sur ***Envoyer***.  
![Méthode de récupération de SMS](https://webdevolutions.azureedge.net/docs/fr/cloud/Cloud4028.png)
1. Saisir le code à 6 chiffres reçu par la méthode choisie (étape 3) et cliquer sur ***Suivant***. 

### Codes de récupération 

Les codes de récupération sont utilisés pour accéder à votre compte en dernier recours. Vous pourrez les régénérer une fois le processus de configuration terminé. Cette étape est obligatoire pour des raisons de sécurité.  

***Télécharger*** ou ***Imprimer*** les codes de récupération dans un endroit sûr et accessible. Cliquer sur ***Suivant***.  
![Codes de récupération](https://webdevolutions.azureedge.net/docs/fr/cloud/Cloud4029.png)

### Configuration de l'authentification à deux facteurs 

Lors de la connexion, votre application d'authentification demandera de valider par le biais d'une notification push.  

Choisir <a href="#push">Notification Push</a>, <a href="#app">Application d'authentification</a> ou <a href="#key">Clé de sécurité</a> pour configurer la vérification de votre compte.  

### Notification Push <a name="push"></a>

1. Cliquer sur ***Notification Push***.  
![Notification push](https://webdevolutions.azureedge.net/docs/fr/cloud/Cloud4030.png)
1. Télécharger et installer {{ fr.DWSMOBILE }}.  
![{{ fr.DWS }}](https://webdevolutions.azureedge.net/docs/fr/cloud/Cloud4031.png)
1. Utiliser {{ fr.DWS }} pour scanner le code ou entrer la clé manuellement.  
![{{ fr.DWS }} scanner le code](https://webdevolutions.azureedge.net/docs/fr/cloud/Cloud4032.png)
1. Attendre la synchronisation de l'application et la demande d'association sur l'appareil mobile. Accepter la demande d'association, puis cliquer sur ***Compléter***.  
![Synchronisation de l'application](https://webdevolutions.azureedge.net/docs/fr/cloud/Cloud4033.png)

### Application d'authentification <a name="app"></a>

1. Cliquer sur ***Application d'authentification***.  
![Application d'authentification](https://webdevolutions.azureedge.net/docs/fr/cloud/Cloud4034.png)
1. Télécharger et installer une application d'authentification sur votre appareil mobile.  
![Télécharger une application d'authentification](https://webdevolutions.azureedge.net/docs/fr/cloud/Cloud4035.png)
1. Utiliser votre application d'authentification pour scanner le code ou entrer la clé manuellement.  
![Scanner le code d'authentification](https://webdevolutions.azureedge.net/docs/fr/cloud/Cloud4036.png)
1. Entrer le code à 6 chiffres généré par votre application d'authentification, puis cliquer sur ***Compléter***.  
![Code de l'application d'authentification](https://webdevolutions.azureedge.net/docs/fr/cloud/Cloud4038.png)
1. Cliquer sur ***Compléter*** pour terminer la configuration. 

### Clé de sécurité <a name="key"></a>

1. Cliquer ***Clé de sécurité***.  
![!!Cloud4077.png](https://webdevolutions.azureedge.net/docs/fr/cloud/Cloud4077.png) 
1. Vous serez redirigé vers la section [Clé de sécurité](GettingStarted_SecurityKey) du {{ fr.DA }}. 
