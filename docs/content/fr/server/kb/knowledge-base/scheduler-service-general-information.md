---
eleventyComputed:
  title: Informations générales sur le service planificateur
  description: Le Service Planificateur est un composant de {{ fr.DVLS }} en charge de plusieurs fonctionnalités de {{ fr.DVLS }}.
  keywords:
  - planificateur
---
Le ***Service Planificateur*** est un composant de {{ fr.DVLS }} en charge de plusieurs fonctionnalités de {{ fr.DVLS }} :

* [Cache Active Directory](/server/web-interface/administration/configuration/server-settings/general/authentication/domain/)
    * Activé via l'interface web de {{ fr.DVLS }} dans ***Administration*** – ***Paramètres du Serveur*** – ***Authentification*** – ***Domaine*** – ***Paramètres*** – ***Activer la fonctionnalité de cache***.
![Administration – Paramètres du Serveur – Authentification – Domaine – Paramètres – Activer la fonctionnalité de cache](https://cdnweb.devolutions.net/docs/DVLS0024_2024_1.png)
* Cache Entra ID
    * Le planificateur est utilisé si le cache Entra est actif.
* PAM Heartbeat (traitement de réservation, rotation de mot de passe)
    * Obligatoire lors de l'utilisation des ***fonctionnalités PAM***.
* [Gestionnaire de Sauvegarde](/server/web-interface/administration/backup/backup-manager/)
    * Obligatoire lorsque le ***Gestionnaire de Sauvegarde*** est activé via l'interface web de {{ fr.DVLS }} dans ***Administration – Sauvegarde – Gestionnaire de Sauvegarde***, soit pour :
        * ***Activer la sauvegarde de la base de données***.
        * ***Activer la sauvegarde web***.
![Activer la sauvegarde de la base de données / Activer la sauvegarde web](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4955.png)
* Notifications
    * Obligatoire lorsque toute ***Notification*** est configurée.
* [Rapports Automatisés](/server/web-interface/reports/configuration/scheduled-reports/)
    * Obligatoire lorsqu'activé. Configuré dans l'interface web de {{ fr.DVLS }} dans ***Rapports – Configuration – Rapports Planifiés***. Cliquer sur l'icône "+" pour ajouter un nouveau ***Rapport Planifié***.
![Ajouter un Rapport Planifié](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4956.png)
* [Syslog Heartbeat](/server/web-interface/administration/configuration/server-settings/general/logging/)
    * Obligatoire lorsque la ***journalisation Syslog*** est activée via l'interface web de {{ fr.DVLS }} dans ***Administration – Paramètres du Serveur – Journalisation – Journaliser vers serveur Syslog***.
![Journaliser vers serveur Syslog](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4957.png)
* [Nettoyage Automatique des Journaux](/server/web-interface/administration/logs/cleanup-logs/)
    * Obligatoire lorsque le ***Nettoyage Automatique des Journaux*** est activé via l'interface web de {{ fr.DVLS }} dans ***Administration – Journaux – Nettoyage des Journaux – Activer le nettoyage automatique***.
![Activer le nettoyage automatique](https://cdnweb.devolutions.net/docs/DVLS0025_2024_1.png)

## Configuration et Exigences
Le ***Planificateur*** est un Service Windows. Il est installé depuis la {{ fr.DVLSCONSOLE }} ***Installer le Planificateur***. Le ***Planificateur*** sera installé et disponible depuis la Console des Services Windows, ***DevolutionsSchedulerService***.

Ce service nécessite un accès à la base de données de {{ fr.DVLS }} et à des emplacements spécifiques sur le système de fichiers. Selon que {{ fr.DVLS }} est configuré pour utiliser la Sécurité Intégrée ou des comptes SQL, différents paramètres doivent être appliqués.

{% snippet, "badgeHelp" %}
Se référer au compte ***VaultDBSchedulerService*** dans [Enquête de Compte Pré-Déploiement](/server/kb/knowledge-base/pre-deployment-account-survey/).
{% endsnippet %}

### Lors de l'utilisation de la Sécurité Intégrée
* Le ***Planificateur*** utilisera l'identité définie pour le compte dans les Services Windows (services.msc).
* Le compte de service AD nécessite l'autorisation ***Lire*** sur le fichier de clé de chiffrement (<chemin de l'application web>\App_Data\encryption.config).
* Le compte de service AD nécessite également une autorisation ***Lire*** pour le conteneur ***NetFrameworkConfigurationKey*** du RsaProtectedConfigurationProvider de .NET.

{% snippet, "badgeHelp" %}
Se référer à [Chiffrer le fichier web.config](/server/kb/how-to-articles/encrypting-web-config-file/).
{% endsnippet %}

### Lors de l'utilisation de Comptes SQL
* L'identité utilisée contre la base de données est définie dans la {{ fr.DVLSCONSOLE }} dans ***Serveur – Modifier – Base de données***, ***Service Planificateur***.
* Le service fonctionne par défaut avec le Service Réseau. Ce compte ne peut pas déchiffrer un fichier **web.config** par défaut, et il n'est pas recommandé de le faire sans connaissances appropriées.

{% snippet, "badgeHelp" %}
Se référer à [Chiffrer le fichier web.config](/server/kb/how-to-articles/encrypting-web-config-file/).
{% endsnippet %}

## Activer la Journalisation du Planificateur
1. Dans l'interface web de {{ fr.DVLS }}, aller à ***Administration – Paramètres du Serveur – Journalisation***.
1. Cocher ***Journaliser les informations de débogage***, puis spécifier un ***Chemin de journalisation du planificateur*** pour stocker les fichiers journaux. L'emplacement du dossier est relatif au service planificateur (**C:\** est le lecteur C du serveur).
![Journaliser les informations de débogage et Chemin de journalisation du planificateur](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2237.png)
1. Sauvegarder les modifications avant de quitter la section ***Journalisation***.
1. Si ce n'est pas déjà le cas, configurer l'identité exécutant le planificateur pour qu'elle ait l'autorisation ***Écrire*** puisqu'elle doit écrire dans le dossier.
1. Redémarrer le ***Service Planificateur***.
