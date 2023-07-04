---
title: Duo
description: Remote Desktop Manager vous permet de configurer une authentification Duo pour fournir une couche de sécurité supplémentaire lors de l'ouverture d'une source de données.
keywords:
- Authentification Duo
---
{{ fr.RDM }} vous permet de configurer une authentification Duo pour fournir une couche de sécurité supplémentaire lors de l'ouverture d'une source de données. 

## Paramètres 

{% snippet icon.badgeInfo %} 
Avant de commencer la configuration, assurez-vous d'avoir créé un compte Duo et d'avoir également installé l'application Duo sur un appareil compatible. 
{% endsnippet %}
 
1. Se connecter au ***Duo Admin Panel***.  
1. Dans ***Applications***, cliquer sur ***Protect an Application***.
![Protect an Application](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/clip6000.png) 
1. Protéger l’application ***Partner Auth API***.  
![Protéger l'application Partner Auth API](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/clip6001.png) 
1. Si ce n'est pas déjà fait, suivre ces [étapes de configuration de l'authentification multifacteur](/fr/rdm/windows/data-sources/multi-factor-authentication/). 
1. Après avoir sélectionné le type d'AMF ***Duo***, cliquer sur ***Duo - Configuration générale***.  
![Duo - Configuration générale](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10017.png)  
1. Toutes les informations nécessaires pour remplir les champs ***Paramètres de Duo*** seront générées par le compte Duo.  
![Compte Duo – Détails de l'application Partner Auth API](https://webdevolutions.blob.core.windows.net/docs/en/rdm/windows/clip6002.png) 
1. Copier et coller toutes les informations dans les champs correspondants de la fenêtre ***Paramètres de Duo***.  
![Paramètres de Duo](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/clip10018.png)  
1. Cliquer sur ***Vérifier*** pour valider les informations, puis cliquer sur ***OK*** lorsque terminé. 
1. Si le compte Duo est connecté à plus d'un appareil, cliquer sur ***Paramètres***. Sinon, passer à l'<a href="#10">étape 10</a>.  
![Configuration de l'authentification à 2 facteurs – Paramètres](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2114.png) 
1. Sélectionner l'appareil à utiliser pour l'authentification à 2 facteurs en cliquant sur ***Use this device***.  
![Installation de Duo - choisissez un périphérique](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2115.png) 
1. Sélectionner la méthode par laquelle recevoir le code d'accès. 
    * ***Duo Push*** : Le code est « poussé » vers votre application Duo. 
    * ***Envoyer un SMS*** : Le code est envoyé par messagerie texte sur le numéro de téléphone enregistré. 
    * ***Téléphone*** : Le code est envoyé par appel téléphonique; une voix générée par ordinateur dictera le code. 
1. <a name="10"></a>Cliquer sur ***Enregistrer*** pour vous authentifier.  
![Enregistrer la configuration](https://webdevolutions.azureedge.net/docs/fr/rdm/windows/RDMWin2116.png) 

Une fois que vous avez terminé toutes les étapes, vous serez invité à vous authentifier avec Duo à chaque fois que vous vous connecterez à votre source de données sécurisée. 

