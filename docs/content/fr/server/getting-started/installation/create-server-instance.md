---
eleventyComputed:
  title: Créer une instance {{ fr.DVLS }}
  order: 30
  status: Sujet disponible en langue allemande
  description: Plusieurs instances {{ fr.DVLS }} peuvent être hébergées sur le même serveur. Chaque instance réside dans sa propre application web au sein d'IIS.
---
{% snippet, "badgeInfo" %}
Si vous avez récemment reçu vos clés de licence sérielle, veuillez consulter [Commencer](/server/getting-started/).

Pour plus d'informations sur l'une des fonctionnalités dans l'assistant de déploiement, veuillez consulter leur sujet respectif sous [Paramètres du serveur](/server/management/devolutions-server-console/devolutions-server-settings/general/).

{% endsnippet %}

Plusieurs instances {{ fr.DVLS }} peuvent être hébergées sur le même serveur. Chaque instance réside dans sa propre application web au sein d'IIS. Les étapes suivantes sont effectuées en utilisant le {{ fr.DVLSCONSOLE }} et sont également valables pour l'***édition gratuite*** de {{ fr.DVLS }}.

## Premiers pas
1. Installer {{ fr.DVLSCONSOLE }} sur le serveur web. Il est disponible sur la page [Télécharger](https://server.devolutions.net/home/download).
1. Exécuter {{ fr.DVLSCONSOLE }} avec des privilèges élevés (exécuter en tant qu'administrateur). Cela se fait en cliquant droit sur l'application et en sélectionnant ***Exécuter en tant qu'administrateur***.
   {% snippet, "shieldWarning" %}
   Toutes les opérations effectuées via le {{ fr.DVLSCONSOLE }} sont réalisées avec les identifiants utilisés pour lancer {{ fr.DVLSCONSOLE }}. Si vous devez utiliser d'autres identifiants, vous devrez lancer une autre session Windows. La commande ***RunAs*** n'offre pas l'option de démarrer un processus avec des privilèges élevés. L'option Exécuter en tant qu'utilisateur différent peut fonctionner uniquement si le compte est membre du groupe d'administrateurs locaux du serveur.
   {% endsnippet %}

   ![Exécuter en tant qu'administrateur](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8175.png)
3. Dans le {{ fr.DVLSCONSOLE }}, cliquer sur le bouton ***Nouveau*** ou le bouton ***Installer une nouvelle instance*** pour déployer une nouvelle instance de serveur en utilisant l'assistant d'installation [basique](#installation-basique) ou [avancée](#installation-avancée). Il est également possible de [***Migrer une source de données SQL***](/server/kb/how-to-articles/migrate-sql/).
![Déployer une nouvelle {{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0049.png)

### Installation basique
1. Si une instance SQL Server n'est pas disponible sur la machine où {{ fr.DVLS }} est hébergé, une instance de l'édition SQL Server Express sera installée par l'assistant. Une connexion internet est requise pour télécharger l'édition SQL Server Express et les prérequis suivants : [IIS Application Request Routing (ARR)](https://api.devolutions.net/redirection/f19f07f3-5ea4-436d-a3ba-4bb69d373321), [IIS Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0), et [ASP.NET Core Module (ANCM)](https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer). 
![Dialogue d'installation basique](https://cdnweb.devolutions.net/docs/DVLS6011_2024_1.png)
1. Le dialogue suivant fournit les identifiants créés pour le compte SQL sa, le compte administrateur {{ fr.DVLS }} et le mot de passe de la clé de chiffrement. Cliquer sur le bouton ***Enregistrer sous*** pour sauvegarder les informations dans un fichier.
![Dialogue des identifiants importants](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8177.png)
1. Le dialogue suivant affiche les informations sur le serveur SQL, y compris les identifiants du compte ***sa***, qui seront utilisés par {{ fr.DVLS }} pour créer et se connecter à la base de données SQL.
1. Une fois l'installation terminée avec succès, l'assistant affichera le résumé de l'installation et ouvrira automatiquement le navigateur par défaut pour se connecter à l'interface web de {{ fr.DVLS }}.
![Rapport de résumé d'installation](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8181.png)
1. Sur l'interface web de {{ fr.DVLS }}, utiliser les identifiants fournis à l'étape 2 pour se connecter. Ensuite, une invite demandera un changement de mot de passe avant de continuer avec le processus de connexion.  
![Invite de changement de mot de passe](https://cdnweb.devolutions.net/docs/DVLS6013_2024_1.png)  
1. Entrer votre licence. Pour activer l'édition gratuite, cliquer sur le bouton ***Activer la Version Gratuite*** pour accéder immédiatement à Devolutions Server avec une licence gratuite.

### Installation avancée
1. Pour la première étape, l'assistant d'installation effectuera un diagnostic sur le serveur pour vérifier si le serveur IIS a tous les prérequis du serveur web installés et est prêt à exécuter {{ fr.DVLS }}. Les fonctionnalités manquantes sont marquées d'une icône d'erreur. Le bouton Installer les prérequis installera toutes les fonctionnalités manquantes en utilisant un script PowerShell. Cliquer sur Fermer pour continuer. Une connexion internet est requise pour [IIS Application Request Routing (ARR)](https://api.devolutions.net/redirection/f19f07f3-5ea4-436d-a3ba-4bb69d373321), [IIS Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0) et [ASP.NET Core Module (ANCM)](https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer).
![Diagnostic des fonctionnalités IIS](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8049.png)
1. L'accord de licence doit être accepté pour continuer.
![Accord de licence utilisateur final {{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8050.png)
1. Sous ***Base de données***, entrer les informations du serveur et de la base de données. Le compte utilisateur utilisé pour créer la base de données doit avoir des privilèges sysadmin dans l'instance SQL Server. Consulter [Base de données](/server/management/devolutions-server-console/devolutions-server-settings/database/) pour plus d'informations. Pour utiliser ***l'Authentification Windows*** pour se connecter à la base de données, il est important de changer l'identité du pool d'applications dans le gestionnaire IIS et de définir les permissions appropriées du compte de service sur la base de données SQL. Veuillez consulter [Configurer {{ fr.DVLS }} pour utiliser l'authentification unique de domaine (SSO)](/server/kb/how-to-articles/configure-windows-authentication/). L'article suivant sur [Enquête préalable au déploiement des comptes](/server/kb/knowledge-base/pre-deployment-account-survey/) décrit quels comptes peuvent être créés avant de déployer {{ fr.DVLS }}.
![Dialogue de la base de données](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8054.png)
1. Sous ***Général***, entrer un ***Nom*** et une ***Description*** personnalisés. Sous ***Série***, fournir une clé de licence reçue par courriel lors de l'achat du produit. Si vous n'avez pas encore acheté de licence {{ fr.DVLS }}, vous pouvez [Demander un essai de 30 jours](https://server.devolutions.net/trial) ou continuer sans licence pour utiliser {{ fr.DVLS }} Gratuit jusqu'à 10 utilisateurs. Vous serez invité lors du premier lancement de {{ fr.DVLS }} à ***Activer la Version Gratuite***.
![Dialogue général et d'enregistrement](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8051.png)
1. Sous ***Source d'installation***, choisir de Télécharger depuis le web (dernière version) ou Installer à partir d'un fichier zip disponible sur la page [Télécharger](https://server.devolutions.net/home/download).
![Dialogue de source](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8053.png)
1. Sous Général, sélectionner le Site web, le Nom de l'application web et l'[URI d'accès](/server/kb/knowledge-base/access-uri/) requis pour atteindre la page web de {{ fr.DVLS }}. Sous Destination d'installation, définir le Dossier d'installation où les fichiers de l'instance seront situés. Le processus pour exécuter les sites web a été accordé les permissions appropriées sous **C:\inetpub\wwwroot**. Nous recommandons de créer un nouveau dossier en dessous et de créer l'instance {{ fr.DVLS }} dans ce dossier. Sous Pool d'applications, définir le Nom du pool d'applications.
   {% snippet, "badgeCaution" %}
   Nous ne recommandons pas de définir le dossier d'installation à **C:\Program Files** ou **C:\Program Files (x86)**. {{ fr.DVLS }} est une application web et cela pourrait entraîner un comportement indésirable et des problèmes car IIS n'a pas suffisamment de permissions pour exécuter des applications web situées sous ces dossiers. Si vous souhaitez définir le dossier de l'application web dans un emplacement différent du dossier par défaut **C:\Inetpub\wwwroot**, le groupe local de la machine intégré IIS_IUSRS aura besoin des permissions de Lecture et d'Exécution de lecture sur toute la structure de dossiers de l'application web {{ fr.DVLS }}.
   {% endsnippet %}

   ![Dialogue de destination](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8170.png)

7. Sous ***Identifiants d'administration***, remplir les informations pour créer un compte administrateur {{ fr.DVLS }} personnalisé. Tous les champs sont requis.
![Créer un utilisateur administrateur](https://cdnweb.devolutions.net/docs/docs_en_server_clip10323.png)
1. Sous Service de planification, lors de l'activation de l'option Installer le service de planification, veuillez définir le Compte de service approprié. Les fonctionnalités suivantes dépendent du Planificateur : [Gestionnaire de sauvegarde](/server/web-interface/administration/backup/backup-manager/), [Cache des utilisateurs et groupes d'utilisateurs de domaine](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/), [Cache des utilisateurs et groupes d'utilisateurs Office365](/server/web-interface/administration/configuration/server-settings/general/authentication/office-365/), [Notifications par courriel](/server/web-interface/administration/security-management/notifications/), [Nettoyage des journaux](/server/web-interface/administration/logs/cleanup-logs/) et [Gestion des accès privilégiés](/pam/server/).
![Dialogue du planificateur](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8055.png)
1. Choisir de ne pas installer le Planificateur, vous obtiendrez le message d'avertissement suivant.
![Avertissement du planificateur](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8056.png)
1. Sous [Kit de récupération](/server/management/recovery-kit/), sélectionner le dossier de destination et le nom de fichier du fichier de kit de récupération {{ fr.DVLS }}. Définir un mot de passe pour protéger les Clés de chiffrement. Si l'option Inclure les données sensibles est activée, les identifiants d'authentification SQL seront inclus dans le kit de récupération.
   {% snippet, "shieldNotice" %}
   Nous recommandons de protéger le fichier du Kit de récupération dans un endroit sûr pour éviter la perte de données si {{ fr.DVLS }} doit être restauré.
   {% endsnippet %}

   ![Sauvegarder les clés de chiffrement](https://cdnweb.devolutions.net/docs/docs_en_server_clip10324.png)
11. Sous ***Résumé***, valider la configuration et cliquer sur ***Installer***.
![Dialogue de résumé](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8057.png)
12. Une fois l'installation terminée, un résumé indique si {{ fr.DVLS }} a été déployé correctement, cliquer sur ***OK*** pour fermer cette fenêtre.
![Progression de l'installation](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8059.png)

### Tester l'installation
Pour tester l'installation du serveur, naviguer vers celui-ci (ex. : http://<Nom_Machine>/<NomInstance>) avec n'importe quel navigateur web ou cliquer sur le bouton ***Naviguer vers le site web*** dans le {{ fr.DVLSCONSOLE }}.
![{{ fr.DVLSCONSOLE }}](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0043.png)

{% snippet, "badgeNotice" %}
Dans certaines situations, la page web peut ne pas se charger correctement. Assurez-vous que le groupe local intégré IIS IUSRS a un accès complet en lecture sur le fichier **encryption.config** situé dans le sous-dossier App_Data situé dans le dossier de l'application web {{ fr.DVLS }} (i.e., **C:\inetpub\wwwroot\dvls\App_Data**). Si le problème persiste, contactez-nous à [service@devolutions.net](mailto:service@devolutions.net).
{% endsnippet %}

Pour tester la connexion depuis un client en créant une source de données dans {{ fr.RDM }}. Veuillez consulter [Configurer une source de données client](/server/kb/how-to-articles/configure-client-data-source/) pour plus d'informations.
