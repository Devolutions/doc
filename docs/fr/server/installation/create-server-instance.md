---
eleventyComputed:
  title: Créer une instance de {{ fr.DVLS }}
  order: 30
  status: Topic available in German language
---
{% snippet icon.badgeInfo %} 
Si vous venez tout juste de recevoir vos clés de licence, veuillez d'abord consulter la section [Introduction](/fr/server/getting-started/). 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Pour plus d'informations à propos de chaque fonctionnalité dans l'assistant de déploiement, veuillez consulter les sections respectives dans le chapitre [Paramètres du serveur](/fr/server/management/devolutions-server-console/devolutions-server-settings/general/). 
{% endsnippet %}
 
Plusieurs instances de {{ fr.DVLS }} peuvent être installées sur le même serveur. Chaque instance a sa propre application Web dans IIS. Les étapes suivantes requièrent l'utilisation de la ***{{ fr.DVLSCONSOLE }}***.  

## Procédure 

1. Installer la ***{{ fr.DVLSCONSOLE }}*** sur le serveur Web. Elle est téléchargeable sur la [page de téléchargement](https://server.devolutions.net/fr/home/download). 
1. Exécuter la ***{{ fr.DVLSCONSOLE }}*** avec des privilèges élevés (Exécuter en tant qu'administrateur). Cliquer avec le bouton droit sur l'icône de l'application, puis sélectionner Exécuter en tant qu'administrateur. 

{% snippet icon.shieldWarning %} 
Toutes les opérations effectuées via la ***{{ fr.DVLSCONSOLE }}*** seront faites avec l'identifiant qui a lancé la ***{{ fr.DVLSCONSOLE }}***. Si vous devez utiliser un autre identifiant pour lancer la ***{{ fr.DVLSCONSOLE }}***, vous devez quitter la session Windows et vous reconnecter avec l'identifiant en question. La commande RunAs n'offre pas la possibilité de démarrer une application en tant qu'administrateur. La commande Exécuter en tant qu'autre utilisateur fonctionne seulement si le compte utilisé est membre du groupe d'administrateurs local de la machine. 
{% endsnippet %}
 
![Exécuter en tant qu'administrateur](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8139.png) 
 
3. Dans la ***{{ fr.DVLSCONSOLE }}***, cliquer sur le bouton ***Nouveau*** ou sur ***Installer une nouvelle instance*** pour déployer une nouvelle instance.  
![Déployer un nouveau {{ fr.DVLS }}](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8048.png) 
1. La première boîte de dialogue exécutera des diagnostiques sur le serveur pour vérifier si le serveur IIS dispose de toutes les conditions préalables nécessaires pour les rôles Web et est prêt à exécuter {{ fr.DVLS }}. Les éléments manquants sont signalés par un x. Le bouton ***Installer les pré-requis*** installera toutes les fonctionnalités manquantes à l'aide d'un script PowerShell. Une connexion internet est requise pour les prérequis [IIS Application Request Routing (ARR)](https://api.devolutions.net/redirection/f19f07f3-5ea4-436d-a3ba-4bb69d373321), [IIS Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0) et [IIS ASP.NET Core Module (ANCM)](https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer).  
![Vérification des conditions préalables à IIS pour l'installation](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8049.png) 
1. Cocher la case ***J'accepte les termes de la convention de licence***, puis cliquer sur ***Suivant***.  
![Convention de licence {{ fr.DVLS }}](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8050.png) 
1. Sous ***Base de données***, entrer les informations sur le serveur et la base de données.  

Le compte d'utilisateur utilisé pour créer la base de données doit disposer des privilèges sysadmin dans l'instance SQL Server. Consultez la rubrique [Base de données](/fr/server/management/devolutions-server-console/devolutions-server-settings/database/) pour plus d'informations.  

Pour utiliser la Sécurité intégrée pour se connecter à la base de données, il est important de modifier l'identité du regroupement d'applications dans le gestionnaire IIS et de définir les permissions appropriées du compte de service sur la base de données SQL. Veuillez consulter [Comment configurer {{ fr.DVLS }} pour utiliser la sécurité intégrée](/kb/devolutions-server/how-to-articles/configure-server-use-integrated-security/).  
![Assistant de déploiement {{ fr.DVLS }}](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8054.png) 

7. Dans la section ***Général***, saisir un ***Nom*** et une ***Description***. Sous ***Série***, saisir une clé de licence reçue dans le courriel après l'achat. Si vous n'avez pas acheté de licence de {{ fr.DVLS }}, vous pouvez demander une [période gratuite d'essai de 30 jours](https://server.devolutions.net/fr/trial).  
![Assistant d'installation de {{ fr.DVLS }}](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8051.png) 
1. Sous ***Source de l'installation***, choisir de télécharger la dernière version à partir du Web ou d'installer à partir d'un fichier zip local disponible depuis la [page de téléchargement](https://server.devolutions.net/fr/home/download).  
![Sélectionner un fichier d'installation](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp4017.png) 
1. Sous ***Général***, sélectionner le ***Site Web*** et le ***Nom de l'application web***. Sous ***Destination de l'installation***, choisir le dossier de destination ou l'instance sera situé. Le processus d'exécution des sites Web a reçu les autorisations appropriées sous **C:\inetpub\wwwroot**. Nous vous recommandons de créer un nouveau dossier en dessous et de créer l'instance {{ fr.DVLS }} dans ce dossier. Sous ***Pool d'applications***, choisir le ***Nom***.  

{% snippet icon.badgeCaution %} 
Nous vous déconseillons de définir le dossier d'installation sur **C:\Program Files** ou **C:\Program Files (x86)**. {{ fr.DVLS }} est une application Web et cela peut entraîner un comportement indésirable et des problèmes, car IIS ne dispose pas des autorisations suffisantes pour exécuter les applications Web qui se trouvent sous ces dossiers. 
{% endsnippet %} 
 
![Source et Destination de l'installation](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8053.png)  

10. Sous ***Identifiants d'administration***, remplir les informations pour créer un compte administrateur {{ fr.DVLS }}. Tous les champs sont requis.  
![Créer un administrateur](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp4018.png) 
1. Sous ***Sauvegarde***, sélectionner le dossier de destination et le nom de fichier du fichier de clés de chiffrement {{ fr.DVLS }}. Et définir un mot de passe pour protéger ce fichier.  
{% snippet icon.shieldNotice %} 
Nous vous recommandons de protéger les clés de chiffrement dans un coffre pour éviter toute perte de données si {{ fr.DVLS }} doit être restauré. 
{% endsnippet %}
 
![Copie de sauvegarde des clés de chiffrement](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp4019.png)  

12. Dans la ***Configuration du mot de passe de la {{ fr.DVLSCONSOLE }}***, lors de la configuration d'un mot de passe, l'instance {{ fr.DVLS }} sera protégée par un mot de passe qui sera enregistré dans la base de données.  
![Mot de passe de la {{ fr.DVLSCONSOLE }}](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8138.png)  
1. Sous ***Service de planification***, lorsque vous activez l'option, veuillez définir le compte du service approprié. Les fonctionnalités suivantes dépendent du ***Planificateur*** : [Gestionnaire de sauvegardes](/fr/server/web-interface/administration/backup/backup-manager/), Cache des utilisateurs et des rôles du domaine, Cache des utilisateurs et des rôles d'Office365, notifications par courriel et la gestion des accès privilégiés.  
![Service de planification](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8055.png) 
1. En choisissant de ne pas installer le planificateur, vous obtiendrez le message d'avertissement suivant.  
![Avertissement du planificateur](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8056.png) 
1. Sous ***Résumé***, valider la configuration et cliquer sur ***Installer***.  
![Fenêtre de progression de l'installation](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8057.png)  

Une fois l'installation terminée, un récapitulatif indique si {{ fr.DVLS }} a été déployé correctement.  
![Résumé](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8059.png)  

### Tester L'installation 

Pour tester l'installation du serveur, accédez à l'URL de l'instance (par exemple : http<area>://<Machine_Name>/<InstanceName>) avec n'importe quel navigateur Web ou cliquer sur le bouton ***Accéder au site Web*** dans la {{ fr.DVLSCONSOLE }}.  
![{{ fr.DVLSCONSOLE }}](https://webdevolutions.azureedge.net/docs/fr/server/ServerOp8060.png)  

{% snippet icon.badgeNotice %} 
Dans certaines situations, la page web peut ne pas se charger correctement. Assurez-vous que le groupe local IIS IUSRS a tous les droits de lecture nécessaire sur le fichier **encryption.config** localisé dans le sous-dossier App_Data du dossier de l'application web de {{ fr.DVLS }} (i.e., **C:\inetpub\wwwroot\dvls\App_Data**). Si un problème survient durant ou suivant l'installation, contactez-nous à [service@devolutions.net](mailto:service@devolutions.net). 
{% endsnippet %}
 
Pour tester la connexion à partir d'un client en créant une source de données dans {{ fr.RDM }}. Veuillez consulter [Comment configurer une source de données](/kb/devolutions-server/how-to-articles/configure-client-data-source/) pour plus d'informations. 
