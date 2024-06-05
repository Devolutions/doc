---
eleventyComputed:
  title: "{{ fr.DVLSCONSOLE }}"
  description: "Parce que {{ fr.DVLS }} est en fait une application web, l'interface de gestion est fournie par la {{ fr.DVLSCONSOLE }}."
---
Parce que {{ fr.DVLS }} est en fait une application web, l'interface de gestion est fournie par la {{ fr.DVLSCONSOLE }}, que vous pouvez télécharger depuis notre [page de téléchargement](https://devolutions.net/server/home/download).

{% snippet, "badgeHelp" %}
Consulter la liste des [prérequis du serveur web](/server/getting-started/installation/installing-web-server-prerequisites/) pour la {{ fr.DVLSCONSOLE }}.
{% endsnippet %}

![{{ fr.DVLSCONSOLE }}](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0043.png)

La {{ fr.DVLSCONSOLE }} gère la metabase IIS. Elle doit être démarrée avec des privilèges élevés lorsqu'elle doit être utilisée. Des privilèges élevés sont accordés lorsque vous utilisez ***Exécuter en tant qu'administrateur*** pour lancer l'application. Vous pouvez modifier le raccourci pour toujours le démarrer de cette manière.

## Paramètres

{% snippet, "badgeHelp" %}
Certaines fonctionnalités ne peuvent être gérées que depuis l'interface web. Veuillez voir [Paramètres du serveur](/server/web-interface/administration/configuration/server-settings/) pour plus d'informations.
{% endsnippet %}

### Serveur

![Serveur](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0044.png)

| Option                     | Description                                                                                                        |
|----------------------------|--------------------------------------------------------------------------------------------------------------------|
| Actualiser                 | Actualiser la liste des instances {{ fr.DVLS }} dans la {{ fr.DVLSCONSOLE }}.                                      |
| Nouveau                    | [Créer une nouvelle instance {{ fr.DVLS }}](/server/getting-started/installation/create-server-instance/) ou migrer une source de données SQL. |
| Modifier                   | Modifier les propriétés de l'instance {{ fr.DVLS }} sélectionnée.                                                  |
| Mettre à jour              | Mettre à jour l'instance {{ fr.DVLS }} sélectionnée.                                                               |
| Désinstaller               | Désinstaller l'instance {{ fr.DVLS }} sélectionnée.                                                                |
| Mot de passe               | Définir, changer ou désactiver le mot de passe de l'instance {{ fr.DVLS }}.                                        |
| Passer hors ligne          | Basculer l'instance {{ fr.DVLS }} sélectionnée en mode hors ligne/en ligne.                                        |
| Arrêter le serveur / Démarrer le serveur | Arrêter/Démarrer le Pool d'applications IIS de {{ fr.DVLS }}.                                                    |
| Journaux                   | Voir les journaux de la source de données de l'instance {{ fr.DVLS }} sélectionnée.                                |
| Naviguer vers le site Web  | Ouvrir l'interface web dans le navigateur par défaut.                                                              |
| Explorer                   | Ouvrir l'explorateur de fichiers et le pointer vers le dossier d'installation de l'instance {{ fr.DVLS }}.         |
| Ouvrir le fichier de réponse | Ouvrir un fichier de réponse pour exécuter des commandes sur l'instance {{ fr.DVLS }}.                             |

### Companions

![Companions](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0045.png)

#### Service de planification

| Option     | Description                          |
|------------|--------------------------------------|
| Installer  | Installer le service de planification.|
| Désinstaller| Désinstaller le service de planification.|
| Démarrer/Arrêter | Démarrer ou arrêter le service de planification.|

#### Serveur d'enregistrement

| Option    | Description                                             |
|-----------|---------------------------------------------------------|
| Installer | Installer le service d'enregistrement.                  |
| Mettre à jour | Mettre à jour le service d'enregistrement.             |
| Désinstaller | Désinstaller le service d'enregistrement.              |
| Explorer  | Parcourir le dossier où les fichiers d'enregistrement sont stockés.|

#### {{ fr.DGW }}

| Option    | Description                                                    |
|-----------|----------------------------------------------------------------|
| Installer | [Installer le {{ fr.DGW }}](/dgw/server/server-configuration/).|
| Modifier  | Modifier la configuration du {{ fr.DGW }}.                     |
| Mettre à jour | Mettre à jour le {{ fr.DGW }}.                                 |
| Désinstaller | Désinstaller le {{ fr.DGW }}.                                  |

### Outils

![Outils](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0046.png)

#### Gestion des clés

| Option     | Description                     |
|------------|---------------------------------|
| Importer   | Importer les clés de chiffrement.|
| Exporter   | Exporter les clés de chiffrement.|
| Régénérer  | Régénérer les clés de chiffrement.|

#### Base de données

| Option          | Description                                 |
|-----------------|---------------------------------------------|
| Reconstruire les index | Reconstruire les index des tables de la base de données SQL.|

#### Kit de récupération

| Option   | Description                                                                                       |
|----------|---------------------------------------------------------------------------------------------------|
| Générer  | Générer un [kit de récupération](/server/management/recovery-kit/) local ou Azure Key Vault.      |
| Télécharger | Télécharger un [kit de récupération](/server/management/recovery-kit/) Azure Key Vault précédemment généré.|

### Administration

![Administration](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0047.png)

| Option             | Description                                                                                                                                        |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Utilisateurs       | Ouvre la page de [gestion des utilisateurs](/server/web-interface/administration/security-management/users/) sur l'interface web de {{ fr.DVLS }}. |
| Groupes d'utilisateurs | Ouvre la page de [gestion des groupes d'utilisateurs](/server/web-interface/administration/security-management/user-groups/) sur l'interface web de {{ fr.DVLS }}.|
| {{ fr.VLT_MAJ }}s      | Ouvre la page de [gestion des {{ fr.VLT }}s](/server/web-interface/administration/security-management/vaults/) sur l'interface web de {{ fr.DVLS }}.|
| Paramètres système | Ouvre la page des [paramètres système](/server/web-interface/administration/configuration/system-settings/) sur l'interface web de {{ fr.DVLS }}.    |
| Permissions système| Ouvre la page des [permissions système](/server/web-interface/administration/configuration/system-permissions/) sur l'interface web de {{ fr.DVLS }}.|
| Gestionnaire de sauvegarde | Ouvre la page du [gestionnaire de sauvegarde](/server/web-interface/administration/backup/backup-manager/) sur l'interface web de {{ fr.DVLS }}.    |

### Support

![Support](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp0048.png)

| Option                          | Description                                                       |
|---------------------------------|-------------------------------------------------------------------|
| Journaux d'application          | Ouvrir la boîte de dialogue des journaux d'application de la {{ fr.DVLSCONSOLE }}.|
| Ouvrir le dossier de sauvegarde d'installation | Ouvrir le dossier de sauvegarde d'installation dans l'explorateur de fichiers Windows.|
| Sauvegarder les informations de diagnostic | Sauvegarder le rapport de diagnostic dans un fichier texte.       |
| Diagnostic IIS                  | Exécuter le diagnostic IIS.                                        |
| Vérifier les mises à jour       | Vérifier les mises à jour disponibles pour la {{ fr.DVLSCONSOLE }}.|
| Options                         | Paramètres de langue, thème et type de mise à jour.               |