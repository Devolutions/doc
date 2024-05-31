---
eleventyComputed:
  title: "{{ fr.DVLSCONSOLE }} interface de ligne de commande"
  description: L'interface de ligne de commande (CLI) {{ fr.DVLSCONSOLE }} est un {{ fr.CTOOL }} qui permet aux administrateurs d'interagir avec les instances {{ fr.DVLS }}.
  keywords:
  - CLI
  - Interface de ligne de commande
---
L'interface de ligne de commande (CLI) {{ fr.DVLSCONSOLE }} est un {{ fr.CTOOL }} qui permet aux administrateurs d'interagir avec les instances {{ fr.DVLS }}, le planificateur, le serveur d'enregistrement ou un portail avec des opérations de création, de configuration ou de suppression. Elle est automatiquement disponible avec l'installation de {{ fr.DVLSCONSOLE }}. Le fichier **DPS.Console.CLI.exe** se trouve dans le dossier d'installation de l'application {{ fr.DVLSCONSOLE }}.

## Utiliser la CLI
L'option ***/help*** affichera la liste de toutes les commandes et paramètres disponibles.
![Liste des commandes CLI {{ fr.DVLSCONSOLE }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8032.png)

L'option ***/help*** peut être utilisée pour lister les paramètres de commande.
![Paramètres de commande CLI](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8033.png)

La commande d'exemple suivante lance le processus de mise à niveau à partir d'un fichier zip disponible dans le dossier **C:\temp**.

**.\DPS.Console.CLI.exe server upgrade --dps "Default Web Site/dps" --zip "C:\temp\DVLS.2020.3.17.0.zip" --accept-eula -quiet -verbose**.

La commande suivante créera une nouvelle instance {{ fr.DVLS }} à partir d'un fichier de réponse JSON (voir ci-dessous) qui contient les paramètres requis. Elle peut être utilisée avec n'importe laquelle des principales commandes de la CLI.
![CLI avec fichier JSON](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8034.png)

Exemple d'un fichier de réponse JSON pour créer une nouvelle instance {{ fr.DVLS }}.
```json
{
  "acceptEula": true,
  "adminEmail": "admin@mydomain.org",
  "adminPassword": "AdminPassword",
  "adminUsername": "admin",
  "appPoolIdentityType": "Network Service",
  "appPoolIdentityPassword": null,
  "appPoolIdentityUsername": null,
  "command": "server install",
  "consolepwd": "MyConsolePassword",
  "databaseHost": "SQLServer\SQL2017",
  "databaseIntegratedSecurity": false,
  "databaseName": "DVLS",
  "databaseConsolePassword": "MyPassword",
  "databaseConsoleUsername": "VaultDBOwner",
  "databaseSchedulerPassword": "MyPassword",
  "databaseSchedulerUsername": "VaultDBScheduler",
  "databaseVaultPassword": "MyPassword",
  "databaseVaultUsername": "VaultDBRunner",
  "debug": false,
  "disableEncryptConfig": false,
  "disableHttps": false,
  "disablePassword": false,
  "dpsPath": "C:\\inetpub\\wwwroot\\dvls",
  "dpsWebsiteName": "Default Web Site",
  "installZip": null,
  "keysPath": "C:\\temp\\DVLS_EncryptionKeys.bin",
  "keysPassword": "MyKeysPassword",
  "quiet": false,
  "scheduler": true,
  "serial": "XXXXX-XXXXX-XXXXX-XXXXX-XXXXX",
  "serverName": "Devolutions Server",
  "serviceAccount": "LocalSystem",
  "servicePassword": null,
  "serviceUser": null,
  "webApplicationName": "/dvls",
  "verbose": false
}
```

### Procédure d'urgence
Cette procédure est utile en cas de panne d'Azure Directory.

{% snippet, "badgeInfo" %}
Veuillez noter que vous devriez remplacer `dvls` (après ...`\wwwroot\`) par votre propre domaine personnalisé.
{% endsnippet %}

#### Activer l'authentification personnalisée
Dans la CLI, entrer soit :
```powershell
server instance --instance=C:\inetpub\wwwroot\dvls --enable-custom-authentication=true
```
ou
```powershell
server instance --instance=C:\inetpub\wwwroot\dvls --custom-auth=true
```

#### Désactiver l'authentification personnalisée
Lorsque les opérations nécessaires sont terminées :
```powershell
server instance --instance=C:\inetpub\wwwroot\dvls --enable-custom-authentication=false
```
ou
```powershell
server instance --instance=C:\inetpub\wwwroot\dvls --custom-auth=false
```
