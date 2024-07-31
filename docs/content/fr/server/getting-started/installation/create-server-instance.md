---
_schema: default
eleventyComputed:
  title: Créer une instance {{ fr.DVLS }}
  description: >-
    Plusieurs instances {{ fr.DVLS }} peuvent être hébergées sur le même serveur. Chaque
    instance réside dans sa propre application web au sein d'IIS.
  status: Sujet disponible en langue allemande
---
{% snippet, "badgeInfo" %}
Si vous avez récemment reçu vos clés de licence série, veuillez consulter [Commencer](/server/getting-started/).

Pour plus d'informations sur l'une des fonctionnalités dans l'assistant de déploiement, veuillez consulter leur sujet respectif sous [Paramètres du serveur](/server/management/devolutions-server-console/devolutions-server-settings/general/).

{% endsnippet %}

Plusieurs instances {{ fr.DVLS }} peuvent être hébergées sur le même serveur. Chaque instance réside dans sa propre application web au sein d'IIS. Les étapes suivantes sont effectuées en utilisant le {{ fr.DVLSCONSOLE }} et sont également valables pour l'édition ***gratuite*** de {{ fr.DVLS }}.

## Installation du serveur web IIS

1. Installer {{ fr.DVLSCONSOLE }} sur le serveur web. Il est disponible sur la page [Télécharger](https://server.devolutions.net/home/download).
2. Exécuter {{ fr.DVLSCONSOLE }} avec des privilèges élevés (exécuter en tant qu'administrateur). Cela se fait en cliquant avec le bouton droit sur l'application et en sélectionnant ***Exécuter en tant qu'administrateur***.
{% snippet, "shieldWarning" %} Toutes les opérations effectuées via le {{ fr.DVLSCONSOLE }} sont réalisées avec les identifiants utilisés pour lancer {{ fr.DVLSCONSOLE }}. Si vous devez utiliser d'autres identifiants, vous devrez lancer une autre session Windows. La commande ***RunAs*** n'offre pas l'option de démarrer un processus avec des privilèges élevés. L'option Exécuter en tant qu'utilisateur différent peut fonctionner uniquement si le compte est membre du groupe d'administrateurs locaux du serveur. {% endsnippet %}

   ![Exécuter en tant qu'administrateur](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8175.png)

3. Cette étape nécessite de s'être connecté au moins une fois au serveur Windows avec un compte VaultDBOwner (avec des droits d'admin local sur le serveur) connecté via l'authentification Windows. Une fois cela fait, ouvrir le{{ fr.DVLSCONSOLE }}, et cliquer sur le bouton ***Nouveau*** ou le bouton ***Installer une nouvelle instance*** pour déployer une nouvelle instance de serveur en utilisant l'assistant d'[installation basique](#installation-basique) ou l'[installation avancée](#installation-avancée). Il est également possible de [***Migrer une source de données SQL***](/server/kb/how-to-articles/migrate-sql/). ![Déployer une nouvelle](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0049.png)

### Installation basique

1. Si une instance SQL Server n'est pas disponible sur la machine où {{ fr.DVLS }} est hébergé, une instance SQL Server Express sera installée par l'assistant. Une connexion Internet est requise pour télécharger l'édition SQL Server Express et les prérequis suivants : [IIS Application Request Routing (ARR)](https://api.devolutions.net/redirection/f19f07f3-5ea4-436d-a3ba-4bb69d373321), [IIS Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0), et [ASP.NET Core Module (ANCM)](https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer). ![Dialogue d'installation basique](https://cdnweb.devolutions.net/docs/DVLS6011_2024_1.png)
2. Le dialogue suivant fournit les identifiants créés pour le compte SQL sa, le compte administrateur {{ fr.DVLS }} et le mot de passe de la clé de chiffrement. Cliquer sur le bouton ***Enregistrer sous*** pour sauvegarder les informations dans un fichier. ![Dialogue des identifiants importants](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8177.png)
3. Le dialogue suivant affiche les informations du serveur SQL, y compris les identifiants du compte ***sa***, qui seront utilisés par {{ fr.DVLS }} pour créer et se connecter à la base de données SQL.
4. Une fois l'installation terminée avec succès, l'assistant affichera le résumé de l'installation et ouvrira automatiquement le navigateur par défaut pour se connecter à l'interface web de {{ fr.DVLS }}. ![Rapport de résumé d'installation](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8181.png)
5. Sur l'interface web de {{ fr.DVLS }}, utiliser les identifiants fournis à l'étape 2 pour se connecter. Ensuite, une invite demandera un changement de mot de passe avant de continuer le processus de connexion.<br> ![Invite de changement de mot de passe](https://cdnweb.devolutions.net/docs/DVLS6013_2024_1.png)
6. Entrer votre licence. Pour activer l'édition gratuite, cliquer sur le bouton ***Activer la Version Gratuite*** pour accéder immédiatement à Devolutions Server avec une licence gratuite.

### Installation avancée

1. Pour la première étape, l'assistant d'installation effectuera un diagnostic sur le serveur pour vérifier si le serveur IIS a tous les prérequis du serveur web nécessaires installés et est prêt à exécuter {{ fr.DVLS }}. Les fonctionnalités manquantes sont marquées d'une icône d'erreur. Le bouton Installer les prérequis installera toutes les fonctionnalités manquantes en utilisant un script PowerShell. Cliquer sur Fermer pour continuer. Une connexion Internet est requise pour [IIS Application Request Routing (ARR)](https://api.devolutions.net/redirection/f19f07f3-5ea4-436d-a3ba-4bb69d373321), [IIS Rewrite Module](https://api.devolutions.net/redirection/3cb42413-5dfd-4b1b-bd20-4e5968274ed0) et [ASP.NET Core Module (ANCM)](https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer). ![Diagnostic des fonctionnalités IIS](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8049.png)
2. L'accord de licence doit être accepté pour continuer. ![Accord de licence utilisateur final](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8050.png)
3. Sous ***Base de données***, entrer les informations du serveur et de la base de données. Le compte utilisateur utilisé pour créer la base de données doit avoir des privilèges sysadmin dans l'instance SQL Server. Consulter [Base de données](/server/management/devolutions-server-console/devolutions-server-settings/database/) pour plus d'informations. Pour utiliser ***l'authentification Windows*** pour se connecter à la base de données, il est important de changer l'identité du pool d'applications dans le gestionnaire IIS et de définir les permissions appropriées du compte de service sur la base de données SQL. Veuillez consulter [Configurer {{ fr.DVLS }} pour utiliser l'authentification unique de domaine (SSO)](/server/kb/how-to-articles/configure-windows-authentication/). L'article suivant sur [Enquête préalable au déploiement des comptes](/server/kb/knowledge-base/pre-deployment-account-survey/) décrit quels comptes peuvent être créés avant de déployer {{ fr.DVLS }}. ![Dialogue de base de données](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8054.png)
4. Sous ***Général***, entrer un ***Nom*** et une ***Description*** personnalisés. Si vous n'avez pas encore acheté de licence {{ fr.DVLS }}, vous pouvez [Demander un essai de 30 jours](https://server.devolutions.net/trial) ou continuer sans licence pour utiliser {{ fr.DVLS }} Gratuit jusqu'à 10 utilisateurs. Vous serez invité lors du premier lancement de {{ fr.DVLS }} à ***Activer la Version Gratuite***. ![Dialogue général et d'enregistrement](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8051.png)
5. Sous ***Source d'installation***, choisir de Télécharger depuis le web (dernière version) ou Installer à partir d'un fichier zip disponible sur la page [Télécharger](https://server.devolutions.net/home/download). ![Dialogue de source](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8053.png)
6. Sous Général, sélectionner le Site Web, le Nom de l'Application Web et [URI d'accès](/server/kb/knowledge-base/access-uri/) requis pour atteindre la page web de {{ fr.DVLS }}, qui devrait être le FQDN complet du serveur (ex. https://monnomdeserveur.mondomaine.loc/dvls). Sous Destination d'installation, définir le Dossier d'installation où les fichiers de l'instance seront situés. Le processus d'exécution des sites Web a reçu les permissions appropriées sous **C:\\inetpub\\wwwroot**. Nous recommandons de créer un nouveau dossier sous celui-ci et de créer l'instance {{ fr.DVLS }} dans ce dossier. Sous Pool d'applications, définir le Nom du pool d'applications.

{% snippet, "badgeCaution" %} Nous ne recommandons pas de définir le dossier d'installation à **C:\Program Files**, **C:\Program Files (x86)**, ou **C:\inetpub**. {{ fr.DVLS }} est une application web et cela pourrait entraîner un comportement indésirable et des problèmes car IIS n'a pas suffisamment de permissions pour exécuter des applications web situées sous ces dossiers. Si vous souhaitez définir le dossier de l'application web dans un emplacement différent du dossier par défaut **C:\Inetpub\wwwroot**, le groupe local de la machine intégré IIS_IUSRS aura besoin des permissions de Lecture et Lecture & Exécution sur toute la structure du dossier de l'application web {{ fr.DVLS }}. {% endsnippet %}

   ![Dialogue de destination](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8170.png)

7. Sous ***Identifiants d'administration***, remplir les informations pour créer un compte administrateur {{ fr.DVLS }} personnalisé. Tous les champs sont requis. ![Créer un utilisateur administrateur](https://cdnweb.devolutions.net/docs/docs_en_server_clip10323.png)

   {% snippet, "badgeCaution" %}Assurez-vous de conserver une copie de ces identifiants dans un endroit sûr en dehors de {{ fr.DVLS }}, car ils pourraient s'avérer utiles en cas de problème avec les autres méthodes d'authentification. De plus, il est une bonne pratique de garder l'option de connexion personnalisée Devolutions cochée (située sous **Administration** – **Paramètres du serveur** – **Authentification**).{% endsnippet %}

8. Sous Service de planification, lors de l'activation de l'option Installer le service de planification, assurez-vous d'utiliser le compte VaultDBScheduler approprié. Les fonctionnalités suivantes dépendent du planificateur : [Gestionnaire de sauvegarde](/server/web-interface/administration/backup/backup-manager/), [Cache des utilisateurs et groupes d'utilisateurs de domaine](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/), [Cache des utilisateurs et groupes d'utilisateurs Office365](/server/web-interface/administration/configuration/server-settings/general/authentication/office-365/), [Notifications par courriel](/server/web-interface/administration/security-management/notifications/), [Nettoyage des journaux](/server/web-interface/administration/logs/cleanup-logs/) et [Gestion des accès privilégiés](/pam/server/). ![Dialogue du planificateur](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8055.png)

   {% snippet, "badgeHelp" %}Si l'installation échoue à démarrer, rechercher le service DevolutionsSchedulerService, aller dans **Propriétés** et ressaisir le nom d'utilisateur et le mot de passe. Généralement, changer le compte pendant le processus d'installation ne fonctionne pas, dans ce cas {{ fr.DVLS }} sera toujours installé avec le compte NetworkService mais ne pourra pas démarrer. De plus, le compte VaultDBScheduler devrait avoir des droits de lecture sur le fichier `encryption.config` sous `C:\inetpub\wwwroot\dvls\App_Data\`.{% endsnippet %}

9. Choisir de ne pas installer le Planificateur, vous obtiendrez le message d'avertissement suivant. ![Avertissement du planificateur](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8056.png)
10. Sous [Kit de récupération](/server/management/recovery-kit/), sélectionner le dossier de destination et le nom de fichier du fichier de kit de récupération {{ fr.DVLS }}. Définir un mot de passe pour protéger les clés de chiffrement. Si l'option Inclure les données sensibles est activée, les identifiants d'authentification SQL seront inclus dans le kit de récupération. <br>

{% snippet, "shieldNotice" %}
Nous recommandons de conserver le fichier du kit de récupération et le mot de passe dans un endroit sûr en dehors de {{ fr.DVLS }}, car ils pourront être utilisés plus tard pour déplacer ou restaurer la base de données.
{% endsnippet %}


    ![Sauvegarder les clés de chiffrement](https://cdnweb.devolutions.net/docs/docs_en_server_clip10324.png)

11. Une invite devrait alors apparaître demandant d'installer {{ variables.DGW.fr }}, ce qui peut être ignoré. Voir notre [documentation](https://docs.devolutions.net/dgw/server/server-configuration/) pour apprendre à configurer {{ variables.DGW.fr }} avec {{ fr.DVLS }}.
12. Sous ***Résumé***, valider la configuration et cliquer sur ***Installer***. ![Dialogue de résumé](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8057.png)
13. Une fois l'installation terminée, un résumé indique si {{ fr.DVLS }} a été déployé correctement, cliquer sur ***OK*** pour fermer cette fenêtre. ![Progression de l'installation](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp8059.png)

### Changer l'identité du pool d'applications de {{ variables.DVLS.fr }} en VaultDBRunner

1. Ouvrir le gestionnaire IIS, cliquer avec le bouton droit sur l'application dvls, et cliquer sur ***Paramètres avancés...***.
2. Sous ***Modèle de processus***, cliquer sur le bouton d'ellipse à côté de ***Identité***, choisir ***Compte personnalisé***, définir vos informations VaultDBRunner, et cliquer sur ***OK***.![Paramètre d'identité du pool d'applications](https://cdnweb.devolutions.net/docs/INTERFACE4041.png "Paramètre d'identité du pool d'applications")
3. Aller au {{ variables.DVLSCONSOLE.fr }}, puis **Modifier** – **Base de données** – **Identifiants avancés**, cliquer sur **Appliquer les permissions minimales**, et cliquer sur **OK**.

### Importer un certificat ou créer un certificat auto-signé

1. Ouvrir le gestionnaire IIS, sélectionner le nœud du serveur dans l'Arborescence et double-cliquer sur la fonctionnalité ***Certificats de serveur*** dans la ***Vue Liste***.

   ![Certificats de serveur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4391.png)

2. Cliquer sur ***Importer...*** dans le volet ***Actions***, et remplir les informations requises pour importer un certificat déjà existant. Pour créer un certificat auto-signé, cliquer sur ***Créer un certificat auto-signé...***, lui donner un nom et laisser le magasin de certificats à ***Personnel***.

   ![Importer... dans le volet Actions.](	https://cdnweb.devolutions.net/docs/docs_en_kb_KB4392.png "Importer... dans le volet Actions.")

### Créer une liaison SSL

1. Sélectionner le site web dans l'Arborescence. Cliquer sur ***Liens...*** dans le volet ***Actions***. Cela ouvre l'éditeur de liaison qui permet de créer, éditer et supprimer des liaisons pour votre site Web. ![Modifier le site – Liens...](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4393.png "Modifier le site – Liens...")
2. Cliquer sur ***Ajouter...*** pour ajouter votre nouvelle liaison SSL au site. ![Ajouter une nouvelle liaison SSL](	https://cdnweb.devolutions.net/docs/docs_en_kb_KB4394.png "Ajouter une nouvelle liaison SSL")
3. Sélectionner ***https*** dans la liste déroulante ***Type***. Sélectionner le certificat que vous avez importé ou créé dans la liste dérou