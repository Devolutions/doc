---
eleventyComputed:
  title: Installation
  order: 20
  description: Une instance {{ fr.DVLS }} est une application web. Cela permet d'exposer ses services sur Internet ou un Intranet.
---
{% snippet, "badgeInfo" %} 
Si vous venez de recevoir vos clés de licence, veuillez vous référer à [Commencer](/server/getting-started/). 
{% endsnippet %}

## Topologie

Une instance {{ fr.DVLS }} est une application web. Cela permet d'exposer ses services sur Internet ou un Intranet.

La [Topologie](/server/overview/topologies/) recommandée est l'utilisation de deux serveurs : un serveur de base de données et un serveur Web. Pour les installations plus petites, un seul serveur peut être utilisé, mais les ressources seront partagées entre les deux groupes d'utilisateurs, affectant ainsi les performances.

Points clés à considérer :
* Veuillez vous assurer avant de commencer l'installation que vous avez .NET 8.0 installé sur votre machine.
* Il est fortement recommandé d'activer le chiffrement SSL pour protéger la communication avec l'instance du serveur SQL. Veuillez suivre les instructions de Microsoft dans [Configurer le moteur de base de données SQL Server pour chiffrer les connexions](https://learn.microsoft.com/en-US/sql/database-engine/configure-windows/configure-sql-server-encryption). Notez que nous recommandons que cela soit fait après la configuration initiale est complète.
* Pour une intégration complète à Active Directory, le pool d'applications utilise une identité de domaine. Les deux serveurs doivent être joints au domaine.

## Installer {{ fr.DVLS }}

### Prérequis du serveur Web

Veuillez vous référer à [Installer les prérequis du serveur web](/server/getting-started/installation/installing-web-server-prerequisites/). 

{% snippet, "badgeCaution" %} 
Après avoir installé les prérequis, testez l'installation d'IIS en naviguant vers http<area>://localhost. Ne poursuivez pas plus loin si vous ne voyez pas l'écran de bienvenue d'IIS. Il y a des problèmes qui doivent être résolus. 
{% endsnippet %}
 
### Prérequis du serveur de base de données

Veuillez vous référer à [Instance de base de données](/server/getting-started/installation/database-instance/). 

### Créer une instance {{ fr.DVLS }}

Veuillez vous référer à [Créer une instance {{ fr.DVLS }}](/server/getting-started/installation/create-server-instance/).
