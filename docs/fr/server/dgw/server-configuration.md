---
eleventyComputed:
  title: Configuration pour le {{ fr.DPS }}
  descrpition: 
  keywords:
  - VPN
  - Listener
---

Ce sujet décrit comment configurer {{ fr.DPS }} pour se connecter avec {{ fr.DGW }}.

## Étapes pour l'installation côte à côte
// re-traduire 1er paragraphe
1. Depuis la {{ fr.RDMSCONSOLE }}, cliquer sur l'onglet ***Compagnons***.  

1. Dans la section {{ en.DGW }}, cliquer sur ***Installer***.
1. Choisir ***Installation côte à côte***.  
{% snippet icon.badgeHelp %}
Il est possible de télécharger un fichier [.msi](https://devolutions.net/fr/gateway/download) pour installer le {{ fr.DGW }} sur un {{ fr.DPS }} hors ligne.
{% endsnippet %}

4. Si les valeurs par défaut ne fonctionnent pas pour votre environnement, saisir les paramètres souhaités.
    1. ***HTTP Listener*** : Port HTTP(s) pour accéder à la passerelle. (7171 par défaut)
    1. ***TCP Listener*** : Port utilisé pour les sessions RDP. (8181 par défaut)
1. Cliquer sur ***Ok***.
1. Accéder à l'interface Web {{ en.DPS }}, se connecter avec un compte administrateur.
1. Aller dans ***Administration*** – ***{{ en.DGW }}***.  

1. Cliquer sur le bouton ***Ping*** pour tester la passerelle souhaitée dans la liste et voir si une connexion peut être établie avec succès. Si la page était déjà ouverte, il faut d'abord la rafraîchir.  


## Étapes pour l'installation autonome