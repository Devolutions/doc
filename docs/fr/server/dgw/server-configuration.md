---
eleventyComputed:
  title: Configuration pour le {{ fr.DPS }}
  descrpition: Ce sujet décrit comment configurer {{ fr.DPS }}, gratuit ou non, pour se connecter avec {{ fr.DGW }}.
  keywords:
  - VPN
  - Listener
---

Ce sujet décrit comment configurer {{ fr.DPS }} pour se connecter avec {{ fr.DGW }}. Pour en savoir plus sur le {{ en.DGW }} gratuit, allez à la <a href="#Étapes pour l'installation côte à côte">section suivante</a>.

## <a name="Étapes pour l'installation côte à côte">Étapes pour l'installation côte à côte</a>
{% snippet icon.badgeInfo %}
Pour mettre en place un {{ en.DGW }} gratuit, il faut le configurer en utilisant l'installation côte à côte.
{% endsnippet %}  

L'installation par la méthode ***côte à côte*** crée un {{ fr.DGW }} gratuit capable de gérer jusqu'à 5 sessions simultanées. Cette méthode permet également de gérer davantage de sessions si une ou plusieurs licences {{ fr.DGW }} sont disponibles. Cette procédure d'installation est la plus simple des deux. Cependant, cette méthode est recommandée pour les mises en page de réseau plus simples, et une seule installation ***côte à côte*** peut être effectuée par machine.
1. Depuis la {{ fr.RDMSCONSOLE }}, cliquer sur l'onglet ***Compagnons***.  
![Onglet Compagnons](/img/fr/server/ServerOp0003.png)
*Onglet Compagnons*{.caption} 
1. Dans la section {{ fr.DGW }}, cliquer sur ***Installer***.
1. Choisir ***Installation côte à côte***.  
![Installation côte à côte](/img/fr/server/ServerOp0004.png)
*Instalattion côte à côte*{.caption}
{% snippet icon.badgeHelp %}
Il est possible de télécharger un fichier [.msi](https://devolutions.net/fr/gateway/download) pour installer le {{ fr.DGW }} sur un {{ fr.DPS }} hors ligne.
{% endsnippet %}

4. Si les valeurs par défaut ne fonctionnent pas pour votre environnement, saisir les paramètres souhaités.
    1. ***Port d'écoute HTTP*** : Port HTTP(s) pour accéder à la passerelle. (7171 par défaut)
    1. ***Port d'écoute TCP*** : Port utilisé pour les sessions RDP. (8181 par défaut)
1. Cliquer sur ***Ok***.  
![Bouton Ok](/img/fr/server/ServerOp0005.png)
*Bouton Ok*{.caption}
1. Accéder à l'interface Web {{ fr.DPS }}, se connecter avec un compte administrateur.
1. Aller dans ***Administration*** – ***{{ fr.DGW }}***.  
![{{ fr.DGW }}](/img/fr/server/ServerOp0006.png)
*{{ fr.DGW }}*{.caption}
1. Cliquer sur le bouton ***Ping*** pour tester la passerelle souhaitée dans la liste et voir si une connexion peut être établie avec succès. Si la page était déjà ouverte, il faut d'abord la rafraîchir.  
![Ping](/img/fr/server/ServerOp0007.png)
*Ping*{.caption}

## Étapes pour l'installation autonome
L'installation en utilisant la méthode ***autonome*** permettra d'installer {{ fr.DGW }} sur un serveur distinct de {{ fr.DPS }}. Cela peut être pour des raisons de performance ou pour accéder à des réseaux auxquels {{ fr.DPS }} ne peut pas accéder. Plusieurs {{ fr.DGW }} peuvent être utilisés par {{ fr.DPS }}, mais un seul {{ fr.DGW }} peut être installé sur une machine.
1. Dans la {{ fr.RDMSCONSOLE }}, cliquer sur l'onglet ***Compagnons***.  

1. Dans la section {{ fr.DGW }}, cliquer sur ***Installer***.
1. Choisisser ***Installation autonome***.  

1. Choisir entre ***Télécharger la version*** et ***Installation à partir d'un fichier msi***.
{% snippet icon.badgeHelp %}
Il est possible de télécharger un fichier [.msi](https://devolutions.net/fr/gateway/download) pour installer le {{ fr.DGW }} sur un {{ fr.DPS }} hors ligne.
{% endsnippet %}  

5. Cliquer sur ***Suivant***.  

1. Saisissez le champs d'information ***URI d'accès***, par exemple https://gateway.exemple.com.
1. Choisir les ports ***Écouteurs*** pour {{ fr.DGW }} (par défaut ils sont 7171 et 8181).
    1. Si HTTPS est choisi au lieu de HTTP dans l'étape ci-dessus, la ***Configuration du certificat*** sera nécessaire.
    1. ***Fichier du certificat***: Il doit s'agir d'un certificat de chaîne complète (.pfx, .p12, .pem, .crt).
    1. ***Mot de passe du certificat***: Nécessaire uniquement si un certificat .pfx ou .p12 a été utilisé.
    1. ***Fichier de la clé privée***: Nécessaire uniquement si un certificat .pem ou .crt a été utilisé.
{% snippet icon.shieldWarning %}
Ne partager pas la clé privée avec d'autres utilisateurs, car elle peut être utilisée pour décrypter la communication entre un utilisateur et un {{ fr.DGW }}. Seule la clé publique doit être partagée.
{% endsnippet %}  

8. Cliquer sur ***Suivant***.  

1. Choisir entre :
    * ***Utiliser la clé publique de l'instance DVLS 'Devolutions Server'*** : cette option est utilisée si le {{ fr.DGW }} installé est sur le même serveur que le {{ fr.DPS }} ;  
    * ***À partir du fichier*** : Si l'installation de {{ fr.DGW }} se fait sur un autre ordinateur, télécharger la clé publique du {{ fr.DPS }} que qui doit être couplé avec ce {{ fr.DGW }}.  

1. Cliquer sur ***Suivant***.  

1. Cliquer sur ***Installer***.  

1. Cliquer sur ***Fermer***.  

1. Sur l'interface Web {{ fr.DPS }}, connectez-vous avec un compte administrateur.
1. Accéder à ***Administration - {{ fr.DGW }}***.  

1. Cliquer sur le bouton ***Ajouter*** dans le coin supérieur droit.  

1. Saisir les informations suivantes.
    1. ***Nom***: Nom du {{ fr.DGW }} qui sera affiché dans {{ fr.RDM }}.
    1. ***Description***: Description de la passerelle.
    1. ***Définir par défaut***: Si l'option est cochée, cette passerelle sera sélectionnée par défaut lors de la configuration de {{ fr.RDM }}.
    1. ***URL de {{ fr.DGW }}***: L'URL {{ fr.DPS }} à laquelle la passerelle se connectera.
    1. ***Port d'écoute TCP***: Définir le port avec la même valeur de port TCP que celui configuré dans la console.
1. Cliquer sur ***Enregistrer***.  

Le {{ fr.DGW }} devrait maintenant être visible dans la liste. Il est possible de vérifier l'état de la passerelle à l'aide du bouton ***Ping***.