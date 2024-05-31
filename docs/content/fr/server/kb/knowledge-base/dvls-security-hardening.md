---
eleventyComputed:
  title: "{{ fr.DVLS }} durcissement de la sécurité"
  description: Le durcissement de la sécurité consiste à mettre en œuvre diverses mesures de sécurité pour se protéger contre les cybermenaces et garantir la confidentialité, l'intégrité et la disponibilité du système.
  keywords:
  - durcissement de la sécurité
  - déploiement
---
Le durcissement de la sécurité consiste à mettre en œuvre diverses mesures de sécurité pour se protéger contre les cybermenaces et garantir la confidentialité, l'intégrité et la disponibilité du système. Les différents sujets de Documentation et de Base de Connaissances ci-dessous sont organisés dans un ordre logique que vous pouvez suivre avant, pendant et après la configuration et le déploiement de {{ fr.DVLS }}. Ils contiennent des informations utiles, les meilleures pratiques et les étapes à suivre pour garantir que votre {{ fr.DVLS }} soit aussi sécurisé que possible.

Le sujet actuel est principalement basé sur le ***Tableau de bord de sécurité***. Voir [{{ fr.DVLS }} Tableau de bord de sécurité](/server/kb/knowledge-base/server-security-dashboard/) pour une liste des éléments d'action incluant des descriptions courtes et des mesures d'atténuation.

## Exigences Système et Topologies
Les spécifications matérielles et logicielles minimales recommandées pour {{ fr.DVLS }} peuvent varier en fonction de votre utilisation prévue. Visiter [Exigences Système](/server/overview/system-requirements/) pour savoir ce qui est requis pour votre situation.

Les instances {{ fr.DVLS }} peuvent être installées à travers différentes topologies. Déterminer laquelle est la plus adaptée à vos besoins dans [Topologies](/server/overview/topologies/). Assurer que les [ports requis](#ports-et-communication-sécurisée) sont disponibles.

## Paramètres des Comptes d'Administration
Avant le déploiement d'une instance {{ fr.DVLS }}, certains comptes sont nécessaires pour opérer les différents services impliqués dans un déploiement sécurisé de {{ fr.DVLS }}.

Le nombre d'administrateurs ne devrait pas dépasser 5. Limiter le nombre d'administrateurs actifs au sein de la plateforme réduira la surface d'attaque d'un attaquant à seulement ces comptes configurés. Avoir plus de 5 administrateurs peut également être un signe de mauvaise ségrégation des tâches au sein de l'unité commerciale ou de l'organisation.

Les comptes de base de données devraient être différents pour l'application web, le planificateur et les outils de gestion. Les privilèges minimaux devraient être accordés et appliqués pour que les comptes de service et de base de données fonctionnent. Les comptes de service et de base de données partagés et excessivement privilégiés peuvent induire une exposition inutile au risque de sécurité.

Le compte administratif par défaut MSSQL « sa » est un compte à haut privilège qui devrait uniquement être utilisé pour gérer l'instance de base de données. Un utilisateur ou compte de service moins privilégié est préféré pour réduire l'impact d'un compromis.

La première décision est d'utiliser soit des comptes de domaine pour opérer la plateforme, soit d'utiliser des comptes SQL locaux associés à des comptes de service locaux. Puisque cette décision est une question de préférence personnelle, nous soutenons les deux modèles. Voir chacun d'eux et ce qu'ils impliquent dans [Enquête sur les Comptes Pré-Déploiement](/server/kb/knowledge-base/pre-deployment-account-survey/) et apprendre à les configurer dans [Identifiants Avancés](/server/management/devolutions-server-console/devolutions-server-settings/database/advanced-credentials/).

Pour que l'authentification unique de domaine (SSO) soit utilisée pour se connecter à la base de données, vous devez configurer le ***Pool d'Applications*** pour utiliser un compte de domaine pour s'exécuter. Suivre les étapes dans [Configurer {{ fr.DVLS }} pour utiliser l'authentification unique de domaine (SSO)](/server/kb/how-to-articles/configure-server-use-domain-sso/).

## Ports et Communication Sécurisée
Bien que {{ fr.DVLS }} en lui-même ne dicte pas quels ports utiliser pour l'une des ressources auxquelles il accède, nous recommandons toujours la pratique de sécurité de ségrégation réseau. Vous devez consulter votre administrateur système pour déterminer quels ajustements doivent être faits pour que le système interopère avec votre infrastructure. Voir [Ports et Pare-feux](/server/kb/knowledge-base/ports-firewalls/).

Les communications sécurisées garantissent l'intégrité et la confidentialité des données transmises entre le client et le serveur. En tant que tel, il est important de sécuriser les communications LDAP avec la méthode [LDAP Over SSL](/server/getting-started/security-checklist/ldap-over-ssl/) (LADPS). Voir [Domaines](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/) pour apprendre à l'activer.

Après avoir configuré l'instance {{ fr.DVLS }} et vous être connecté via une application cliente, vous pouvez suivre les étapes dans [Configurer SSL](/server/kb/how-to-articles/configure-ssl/) pour importer un certificat ou créer un certificat auto-signé, créer une liaison SSL, activer HTTPS et configurer les paramètres SSL dans les applications clientes. Effectuer ces étapes dès le début peut ajouter une couche de complexité qui peut vous empêcher de réussir dans la configuration initiale.

## URI d'Accès
Si vous mettez à niveau votre {{ fr.DVLS }} d'une version antérieure à 2022.1 vers 2022.2 ou ultérieure, suivre les étapes dans [URI d'Accès](/server/kb/knowledge-base/access-uri/). Pendant le processus de mise à niveau ou le processus d'installation de {{ fr.DVLS }}, nous devons fournir une URI d'Accès. Cette URI est une URL de redirection qui est utilisée par le système OAuth et redirige le trafic d'authentification vers l'URI d'Accès.

![URI d'Accès](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2211.png)

## Chiffrement
Pour garantir que la communication entre l'instance {{ fr.DVLS }} et la base de données SQL Server soit chiffrée, une procédure extensive doit être suivie sur l'instance SQL Server. Voir [Chiffrer les Connexions à SQL Server](/server/getting-started/security-checklist/encrypting-connections-sql-server/).

![Utiliser la connexion chiffrée SQL Server](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2212.png)

Lors de l'utilisation de comptes de connexion SQL Server, chiffrer les fichiers **web.config** et **appsettings.json** est d'une importance capitale, car des informations sensibles y sont stockées. Visiter [Chiffrer le Fichier web.config](/server/kb/how-to-articles/encrypting-web-config-file/) pour plus d'informations et de recommandations.

La clé de chiffrement est utilisée pour chiffrer les entrées de données (connexions, {{ fr.UVLT }}, documentation et pièces jointes). Les clés de chiffrement sont générées et stockées dans le fichier **encryption.config** sur le serveur uniquement. Apprendre à les exporter, les importer et les régénérer dans [Gérer les Clés de Chiffrement](/server/kb/how-to-articles/manage-encryption-keys/).

![Gestion des Clés de Chiffrement](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2213.png)

Pour les entreprises qui exigent FIPS (Federal Information Processing Standards), se référer à [FIPS (Chiffrement)](/rdm/kb/rdm-windows/troubleshooting-articles/forticlient/fips-encryption/).

## Sauvegarde et Gestion des Journaux
Le [Gestionnaire de Sauvegarde](/server/web-interface/administration/backup/backup-manager/) accessible depuis l'interface web {{ fr.DVLS }} permet aux administrateurs de configurer les paramètres pour sauvegarder la base de données et le dossier de l'application web. Les sauvegardes devraient être activées et configurées vers un support externe ou un stockage cloud pour éviter la perte permanente de données.

![Gestionnaire de Sauvegarde](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2214.png)

Apprendre également sur les exigences et les étapes pour configurer correctement le Planificateur de Sauvegarde {{ fr.DVLS }} et les instructions sur comment restaurer votre instance {{ fr.DVLS }} suite à un désastre dans [Sauvegarde et Restauration {{ fr.DVLS }}](/server/kb/knowledge-base/backup-restore-server/).

Concernant les journaux, il est recommandé de les envoyer à un système externe pour maintenir l'intégrité et la disponibilité des informations d'événement. Configurer la fonctionnalité [Journalisation](/server/web-interface/administration/configuration/server-settings/general/logging/) dans l'interface web {{ fr.DVLS }}.

![Journalisation](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2215.png)

## Durée de Vie du Jeton de Rafraîchissement
Une durée de session excessive peut permettre une exposition au-delà du nécessaire aux utilisateurs non autorisés. La durée de vie du jeton de rafraîchissement devrait donc être configurée dans les 24 heures (1440 min.). Ceci peut être configuré dans les [Paramètres Avancés du Serveur](/server/web-interface/administration/configuration/server-settings/general/advanced/) via l'interface web {{ fr.DVLS }}.

![Durée de Vie du Jeton de Rafraîchissement](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2216.png)

## Notifications par Courriel
Une configuration de serveur de courriel est requise pour transmettre des messages d'application importants tels que les événements de sécurité ou les erreurs. Ils peuvent être configurés dans l'interface web. Voir [Configurer un Courriel SMTP](/server/kb/how-to-articles/configure-smtp-server/configure-smtp-email/) ou [Configurer un Courriel SMTP Avec Azure](/server/kb/how-to-articles/configure-smtp-server/configure-smtp-email-azure/) pour les étapes de configuration et les informations sur chaque paramètre.

![Configuration de Courriel](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2217.png)

## Mot de Passe {{ fr.DVLSCONSOLE }}
Il est recommandé d'ajouter une autre couche de sécurité en activant et en définissant un mot de passe pour la {{ fr.DVLSCONSOLE }}. Apprendre sur ce paramètre de mot de passe et tous les autres paramètres de {{ fr.DVLSCONSOLE }} dans [{{ fr.DVLSCONSOLE }}](/server/management/devolutions-server-console/).

![Définir un mot de passe {{ fr.DVLSCONSOLE }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2218.png)

## Tableau de Bord de Sécurité {{ fr.DVLS }}
Le [Tableau de Bord de Sécurité {{ fr.DVLS }}](/server/kb/knowledge-base/server-security-dashboard/) est un outil offrant des conseils sur comment améliorer la sécurité de la plateforme {{ fr.DVLS }} et également des astuces pour réduire la charge de travail pour les administrateurs. Certains conseils sont des meilleures pratiques communes en infosec, d'autres sont un consensus entre nos propres équipes. Il peut être consulté à tout moment dans l'interface web {{ fr.DVLS }}, dans ***Administration – Gestion de la Sécurité – Tableau de Bord de Sécurité***.

Les scores sont certes discutables et nous ne prétendons pas que chaque sujet a la même valeur relative pour tous les membres de la communauté. Atteindre 100% n'est sûrement pas un objectif en soi, nous visons simplement à sensibiliser et à fournir des idées pour votre propre durcissement de la sécurité.

![Tableau de Bord de Sécurité](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2210.png)
