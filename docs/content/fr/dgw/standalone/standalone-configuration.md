---
eleventyComputed:
  title: "{{ fr.DGW_STANDALONE }} configuration"
  description: 
---
{{ fr.DGW_STANDALONE }} est un serveur relais open-source gratuit offrant un accès RDP, SSH, Telnet, VNC et ARD via une interface web autonome. Vous pouvez optionnellement le protéger avec une simple combinaison nom d'utilisateur/mot de passe ou rendre la passerelle accessible via une intégration de tunnel ngrok.

## Configuration
1. Télécharger [l'installateur](https://devolutions.net/gateway/).
1. Exécuter l'installateur et cliquer sur ***Suivant***.  
![Suivant](https://cdnweb.devolutions.net/docs/HUBB0010_2024_1.png)
1. Une fois le chemin d'installation souhaité sélectionné, cliquer sur ***Suivant***.  
![Dossier de destination](https://cdnweb.devolutions.net/docs/HUBB0011_2024_1.png)
1. Activer l'***interface web de la passerelle***.  
![Interface web de la passerelle](https://cdnweb.devolutions.net/docs/DGW0007_2024_1.png)
   {% snippet icon.badgeInfo %}
   Lire plus sur l'option [ngrok](#ngrok).
   {% endsnippet %}
1. Cliquer sur ***Suivant***.
1. Changer les ***Ports*** à la valeur souhaitée et cliquer sur ***Suivant***.  
![Écouteurs](https://cdnweb.devolutions.net/docs/HUBB0013_2024_1.png)
   {% snippet icon.badgeInfo %}
   Les ports par défaut HTTP(S) et TCP sont 7171 et 8181, respectivement, mais peuvent être modifiés.
   {% endsnippet %}
1. Entrer l'***URL externe*** et cliquer sur ***Suivant***.  
![URI d'accès](https://cdnweb.devolutions.net/docs/HUBB0014_2024_1.png)
* Si un certificat auto-signé ou l'option ngrok n'ont **pas** été choisis, vous serez présenté avec l'écran pour importer le certificat SSL. La ***Source du certificat*** peut être ***Externe*** (deux fichiers) ou ***Système*** (le [magasin de certificats Windows](/dgw/kb/use-windows-certificate-store/)).
    * ***Externe*** : Les formats requis sont affichés dans la fenêtre de dialogue.
    * ***Système*** : L'emplacement et la méthode (c'est-à-dire ***Recherche par empreinte digitale***) doivent être choisis.
![Certificat externe](https://cdnweb.devolutions.net/docs/HUBB0015_2024_1.png)
![Certificat système](https://cdnweb.devolutions.net/docs/DGW0010_2024_1.png)
   {% snippet icon.shieldCaution %}
   Si un ***Utilisateur par défaut*** n'est pas créé, la page web {{ fr.DGW_STANDALONE }} sera accessible anonymement.
   {% endsnippet %}
8. Entrer les identifiants pour l'***Utilisateur par défaut*** et cliquer sur ***Suivant***.  
![Utilisateur par défaut](https://cdnweb.devolutions.net/docs/DGW0008_2024_1.png)
1. Cet écran montre un résumé des chemins/paramètres actuels. Il est possible de revenir ***En arrière*** et de les modifier. Si les paramètres sont corrects, cliquer sur ***Suivant***.  
![Résumé de la configuration de la passerelle](https://cdnweb.devolutions.net/docs/HUBB0017_2024_1.png)
1. Cliquer sur ***Installer***.  
![Bouton Installer](https://cdnweb.devolutions.net/docs/HUBB0018_2024_1.png)
1. Cliquer sur ***Terminer*** lorsque l'installation est complète.  
![Bouton Terminer](https://cdnweb.devolutions.net/docs/HUBB0019_2024_1.png)
   {% snippet icon.badgeInfo %}
   Une fois installé, la page web {{ fr.DGW_STANDALONE }} s'ouvrira automatiquement (domaine statique ngrok ou FQDN). Lire plus à ce sujet dans la section [page web](#devolutions-gateway-standalone-web-page).
   {% endsnippet %}

### Page web {{ fr.DGW_STANDALONE }}
Ici, vous trouverez une liste de vos sessions sur le côté gauche, et au milieu, une boîte de connexion pour ouvrir une nouvelle connexion.  
![Page web {{ fr.DGW_STANDALONE }}](https://cdnweb.devolutions.net/docs/DGW0009_2024_1.png)
1. Se connecter à la page web (si un ***Utilisateur par défaut*** a été créé à l'étape 8 de [Configuration](#configuration)).
1. Sélectionner le protocole.
1. Entrer le nom d'hôte et les identifiants.
   {% snippet icon.badgeInfo %}
   Pour les connexions RDP, cliquer sur ***Plus de paramètres +*** pour optionnellement définir la ***Taille de l'écran***, l'***URL du serveur KDC***, ou un ***Blob de pré-connexion***.
   {% endsnippet %}
1. Cliquer sur ***Connecter la session***.

### ngrok
{% snippet icon.badgeInfo %}
Activer à la fois ngrok et l'interface web désactivera l'option de générer un certificat HTTPS auto-signé car elle utilisera le certificat SSL fourni par ngrok. De plus, l'installateur n'affichera pas les options pour configurer les ports.
{% endsnippet %}

  * Utiliser ngrok et l'accès client natif nécessite un abonnement ngrok. Utiliser la version gratuite donne toujours accès à l'interface web et aux connexions RDP, SSH ou Telnet vers des points d'extrémité distants.
  * La capacité de tunnel ngrok est incluse dans {{ fr.DGW }}, télécharger et lancer manuellement un tunnel avec *ngrok.exe* n'autorisera pas {{ fr.DGW }} à démarrer.
  * Lire plus sur [ngrok](https://ngrok.com/docs/).
