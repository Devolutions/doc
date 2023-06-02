---
title: Installation
order: 20
---
{% snippet icon.badgeInfo %} 
Si vous venez tout juste de recevoir vos clés de licence, veuillez d'abord consulter la section [Introduction](/fr/server/getting-started/) . 
{% endsnippet %}
 
Une instance de {{ fr.DVLS }} est une application Web. Il est donc possible de la publier sur Internet ou dans un intranet.  

La [Topologie](/fr/server/overview/topologies/) recommandée est celle constituée de deux serveurs : un serveur de base de données et un serveur Web. Pour des installations à plus petite échelle, un serveur unique peut être utilisé, mais ses ressources seront partagées entre les deux rôles, ce qui peut affecter la performance.  

{% snippet icon.badgeInfo %} 
La {{ fr.DVLSCONSOLE }} est maintenant offerte en tant qu'application autonome. Elle est téléchargeable sur la [page de téléchargement Devolutions](https://devolutions.net/server/fr/home/download) . 
{% endsnippet %}
 
{% snippet icon.badgeCaution %} 
Avant de commencer l'installation, veuillez vérifier que .NET 4.8 est installé sur votre machine. Vous pouvez le télécharger sur la page Microsoft suivante : [.NET Framework 4.8 Offline Installer](https://dotnet.microsoft.com/download/dotnet-framework-runtime/net472) . 
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
Il est fortement recommandé d'activer l'option Activer SSL afin de protéger les communications avec l'instance du serveur SQL. Veuillez suivre les instructions sur la page Microsoft suivante: [How to enable SSL encryption](http://support.microsoft.com/kb/316898) . Notez que nous recommandons d'activer l'option après l'installation complète de base. 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Pour une intégration d'Active Directory complète, le pool d'application doit utiliser un compte de domaine. Les deux serveurs doivent être connectés au domaine en question. 
{% endsnippet %}
 
## Installer {{ fr.DVLS }} 

### Prérequis du serveur Web 

Veuillez vous reporter à la rubrique appropriée en fonction du système d'exploitation du serveur Web. 

### Installation des rôles Web 

Veuillez consulter la section [Installer les rôles Web prérequis](/fr/server/installation/installing-web-server-prerequisites/) .  

{% snippet icon.badgeCaution %} 
Après avoir installé les prérequis, veuillez tester l'installation d'IIS en accédant à http<area>://localhost . N'allez pas plus loin si vous ne voyez pas la page d'accueil d'IIS. Des problèmes doivent être résolus avant de passer à la prochaine étape. 
{% endsnippet %}
 
### Prérequis du serveur de la base de données 

Veuillez consulter la section [Instance de la base de données](/fr/server/installation/database-instance/) . 

### Créer une instance de {{ fr.DVLS }} 

Veuillez consulter la section [Créer une instance de {{ fr.DVLS }}](/server/installation/create-server-instance/) . 

