---
eleventyComputed:
  title: Créer une instance de {{ fr.DPS }}
---
{% snippet icon.badgeInfo %} 
Si vous venez tout juste de recevoir vos clés de licence, veuillez d&apos;abord consulter la section [Introduction](/fr/server/getting-started/) . 
{% endsnippet %}
 
{% snippet icon.badgeInfo %} 
Pour plus d&apos;informations à propos de chaque fonctionnalité dans l&apos;assistant de déploiement, veuillez consulter les sections respectives dans le chapitre [Paramètres du serveur](/fr/server/management/devolutions-server-console/devolutions-server-settings/general/) . 
{% endsnippet %}
 
Plusieurs instances de {{ fr.RDMS }} peuvent être installées sur le même serveur. Chaque instance a sa propre application Web dans IIS. Les étapes suivantes requièrent l&apos;utilisation de la ***Console de {{ fr.RDMS }}***.  

## Procédure 

1. Installer la ***Console de {{ fr.RDMS }}***  sur le serveur Web. Elle est téléchargeable sur la [page de téléchargement](https://server.devolutions.net/fr/home/download) . 
1. Exécuter la ***Console de {{ fr.RDMS }}*** avec des privilèges élevés (Exécuter en tant qu&apos;administrateur). Cliquer avec le bouton droit sur l&apos;icône de l&apos;application, puis sélectionner Exécuter en tant qu&apos;administrateur . 

{% snippet icon.shieldWarning %} 
Toutes les opérations effectuées via la ***Console de {{ fr.RDMS }}***  seront faites avec l&apos;identifiant qui a lancé la ***Console de {{ fr.RDMS }}***  . Si vous devez utiliser un autre identifiant pour lancer la ***Console de {{ fr.RDMS }}***  , vous devez quitter la session Windows et vous reconnecter avec l&apos;identifiant en question. La commande RunAs n&apos;offre pas la possibilité de démarrer une application en tant qu&apos;administrateur. La commande Exécuter en tant qu&apos;autre utilisateur fonctionne seulement si le compte utilisé est membre du groupe d&apos;administrateurs local de la machine. 
{% endsnippet %}
 
![Exécuter en tant qu'administrateur](/img/fr/server/ServerOp8139.png) 
 
3. Dans la ***Console de {{ fr.RDMS }}***  , cliquer sur le bouton ***Nouveau*** ou sur ***Installer une nouvelle instance*** pour déployer une nouvelle instance.  
![Déployer un nouveau Devolutions Server](/img/fr/server/ServerOp8048.png) 
1. La première boîte de dialogue exécutera des diagnostiques sur le serveur pour vérifier si le serveur IIS dispose de toutes les conditions préalables nécessaires pour les rôles Web et est prêt à exécuter {{ fr.RDMS }} . Les éléments manquants sont signalés par un x. Le bouton ***Installer les pré-requis*** installera toutes les fonctionnalités manquantes à l&apos;aide d&apos;un script PowerShell. Une connexion internet est requise pour les prérequis [IIS Application Request Routing (ARR)](https://api.devolutions.net/redirection/f19f07f3-5ea4-436d-a3ba-4bb69d373321) , [IIS Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0) et [IIS ASP.NET Core Module (ANCM)](https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer) .  
![Vérification des conditions préalables à IIS pour l'installation](/img/fr/server/ServerOp8049.png) 
1. Cocher la case ***J&apos;accepte les termes de la convention de licence*** , puis cliquer sur ***Suivant*** .  
![Convention de licence Devolutions Server](/img/fr/server/ServerOp8050.png) 
1. Sous ***Base de données*** , entrer les informations sur le serveur et la base de données.  

Le compte d&apos;utilisateur utilisé pour créer la base de données doit disposer des privilèges sysadmin dans l&apos;instance SQL Server. Consultez la rubrique [Base de données](/fr/server/management/devolutions-server-console/devolutions-server-settings/database/) pour plus d&apos;informations.  

Pour utiliser la Sécurité intégrée pour se connecter à la base de données, il est important de modifier l&apos;identité du regroupement d&apos;applications dans le gestionnaire IIS et de définir les permissions appropriées du compte de service sur la base de données SQL. Veuillez consulter [Comment configurer {{ fr.RDMS }} pour utiliser la sécurité intégrée](/kb/devolutions-server/how-to-articles/configure-server-use-integrated-security/) .  
![Assistant de déploiement Devolutions Password Server](/img/fr/server/ServerOp8054.png) 

7. Dans la section ***Général*** , saisir un ***Nom*** et une ***Description*** . Sous ***Série*** , saisir une clé de licence reçue dans le courriel après l&apos;achat. Si vous n&apos;avez pas acheté de licence de {{ fr.RDMS }} , vous pouvez demander une [période gratuite d&apos;essai de 30 jours](https://server.devolutions.net/fr/trial) .  
![Assistant d'installation de Devolutions Server](/img/fr/server/ServerOp8051.png) 
1. Sous ***Source de l&apos;installation*** , choisir de télécharger la dernière version à partir du Web ou d&apos;installer à partir d&apos;un fichier zip local disponible depuis la [page de téléchargement](https://server.devolutions.net/fr/home/download) .  
![Sélectionner un fichier d'installation](/img/fr/server/ServerOp4017.png) 
1. Sous ***Général*** , sélectionner le ***Site Web*** et le ***Nom de l&apos;application web*** . Sous ***Destination de l&apos;installation*** , choisir le dossier de destination ou l&apos;instance sera situé. Le processus d&apos;exécution des sites Web a reçu les autorisations appropriées sous c:\inetpub\wwwroot . Nous vous recommandons de créer un nouveau dossier en dessous et de créer l&apos;instance {{ fr.RDMS }} dans ce dossier. Sous ***Pool d&apos;applications*** , choisir le ***Nom*** .  

{% snippet icon.badgeCaution %} 
Nous vous déconseillons de définir le dossier d&apos;installation sur C:\Program Files ou C:\Program Files (x86) . {{ fr.RDMS }} est une application Web et cela peut entraîner un comportement indésirable et des problèmes, car IIS ne dispose pas des autorisations suffisantes pour exécuter les applications Web qui se trouvent sous ces dossiers. 
{% endsnippet %} 
 
![Source et Destination de l'installation](/img/fr/server/ServerOp8053.png)  

10. Sous ***Identifiants d&apos;administration*** , remplir les informations pour créer un compte administrateur {{ fr.DPS }} . Tous les champs sont requis.  
![Créer un administrateur](/img/fr/server/ServerOp4018.png) 
1. Sous ***Sauvegarde*** , sélectionner le dossier de destination et le nom de fichier du fichier de clés de chiffrement {{ fr.DPS }} . Et définir un mot de passe pour protéger ce fichier.  
{% snippet icon.shieldNotice %} 
Nous vous recommandons de protéger les clés de chiffrement dans un coffre pour éviter toute perte de données si {{ fr.DPS }} doit être restauré. 
{% endsnippet %}
 
![Copie de sauvegarde des clés de chiffrement](/img/fr/server/ServerOp4019.png)  

12. Dans la ***Configuration du mot de passe de la console*** ***{{ fr.RDMS }}*** , lors de la configuration d&apos;un mot de passe, l&apos;instance {{ fr.RDMS }} sera protégée par un mot de passe qui sera enregistré dans la base de données.  
![Mot de passe de la Console Devolutions Server](/img/fr/server/ServerOp8138.png)  
1. Sous ***Service de planification*** , lorsque vous activez l&apos;option, veuillez définir le compte du service approprié. Les fonctionnalités suivantes dépendent du ***Planificateur*** : [Gestionnaire de sauvegardes](/fr/server/web-interface/administration/backup/backup-manager/) , Cache des utilisateurs et des rôles du domaine, Cache des utilisateurs et des rôles d&apos;Office365, notifications par courriel et la gestion des accès privilégiés.  
![Service de planification](/img/fr/server/ServerOp8055.png) 
1. En choisissant de ne pas installer le planificateur, vous obtiendrez le message d&apos;avertissement suivant.  
![Avertissement du planificateur](/img/fr/server/ServerOp8056.png) 
1. Sous ***Résumé*** , valider la configuration et cliquer sur ***Installer*** .  
![Fenêtre de progression de l'installation](/img/fr/server/ServerOp8057.png)  

Une fois l&apos;installation terminée, un récapitulatif indique si {{ fr.RDMS }} a été déployé correctement.  
![Résumé](/img/fr/server/ServerOp8059.png)  

### Tester L&apos;installation 

Pour tester l&apos;installation du serveur, accédez à l&apos;URL de l&apos;instance (par exemple: http<area>://&lt;Machine_Name&gt;/&lt;InstanceName&gt;) avec n&apos;importe quel navigateur Web ou cliquer sur le bouton ***Accéder au site Web*** dans la Console de {{ fr.RDMS }} .  
![Console de Devolutions Password Server](/img/fr/server/ServerOp8060.png)  

{% snippet icon.badgeNotice %} 
Dans certaines situations, la page web peut ne pas se charger correctement. Assurez-vous que le groupe local IIS IUSRS a tous les droits de lecture nécessaire sur le fichier encryption.config localisé dans le sous-dossier App_Data du dossier de l&apos;application web de {{ fr.DPS }} (i.e. c:\inetpub\wwwroot\dvls\App_Data). Si un problème survient durant ou suivant l&apos;installation, contactez-nous à [service@devolutions.net](mailto:service@devolutions.net) . 
{% endsnippet %}
 
Pour tester la connexion à partir d&apos;un client en créant une source de données dans {{ fr.RDM }} . Veuillez consulter [Comment configurer une source de données](/kb/devolutions-server/how-to-articles/configure-client-data-source/) pour plus d&apos;informations. 

