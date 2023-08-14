---
title: Yubikey
---
{{ fr.RDMMAC }} vous permet de configurer un Yubikey pour fournir une couche de sécurité supplémentaire lors de l'ouverture d'une source de données.  

{% snippet icon.badgeCaution %} 
Pour l'instant, {{ fr.RDMMAC }} ne prend en charge que Yubico OTP. 
{% endsnippet %}
 
## Paramètres 

{% snippet icon.badgeInfo %} 
Avant de commencer la configuration, assurez-vous d'avoir un ***Yubikey*** en votre possession. 
{% endsnippet %}
 
1. Si ce n'est pas déjà fait, suivre c es [étapes de configuration de l'authentification multifacteur](/fr/rdm/mac/data-sources/multi-factor-authentication/). 
1. Après avoir sélectionné le type d'AMF ***Yubikey***, cliquer sur ***Appliquer***.  
![Configuration l'authentification multifacteur](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip0191.png) 
1. Insérer le ***Yubikey*** dans un port USB de votre ordinateur. 
1. Maintenir le bouton doré sur le ***Yubikey*** pour que le code s'insère dans le champ.  
![Programme d'installation Yubikey](https://webdevolutions.azureedge.net/docs/fr/rdm/mac/clip0192.png) 
1. Cliquer sur ***Enregistrer***. 
1. Relancer {{ fr.RDMMAC }} pour être invité à entrer le code ***Yubikey***. 

