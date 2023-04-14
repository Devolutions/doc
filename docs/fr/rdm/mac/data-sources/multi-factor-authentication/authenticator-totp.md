---
title: Authenticator (TOTP)
---
{{ fr.RDM }} pour Mac vous permet d'utiliser un Authenticator (TOTP)   tel que [Devolutions Workspace](https://devolutions.net/fr/workspace/) ou Google Authenticator pour fournir une couche de sécurité supplémentaire lors de l'ouverture d'une source de données. 

## Paramètres 

{% snippet icon.badgeInfo %} 
Avant de commencer la configuration, assurez-vous d'avoir installé l'application [Devolutions Workspace](https://devolutions.net/fr/workspace/) ou Google Authenticator sur votre appareil mobile. 
{% endsnippet %}
 
1. Si ce n'est pas déjà fait, suivre c es [étapes de configuration de l'authentification multifacteur](/fr/rdm/mac/data-sources/multi-factor-authentication/) . 
1. Après avoir sélectionné le type d'AMF ***Authenticator (TOTP)*** , cliquer sur ***Appliquer*** .  
![Configuration de l'authentification multifacteur](/img/fr/rdm/mac/clip4270.png) 
1. Scanner le code QR qui apparaît dans la fenêtre de ***Configuration de compte Authenticator*** avec l'application de votre appareil. 
1. Saisir le ***Code de validation*** fourni par l' ***Authenticator (TOTP)*** .  
![Configuration de compte Authenticator](/img/fr/rdm/mac/clip0190.png) 
1. Cliquer sur ***Valider*** . 
1. Relancer {{ fr.RDM }}   pour être invité à entrer le code d' Authenticator (TOTP) . 

