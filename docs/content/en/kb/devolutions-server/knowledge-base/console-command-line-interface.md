---
eleventyComputed:
  title: "{{ en.DVLSCONSOLE }} command line interface"
  description: The {{ en.DVLSCONSOLE }} Command Line Interface (CLI) is a {{ en.CTOOL }} which allows administrators to interact with {{ en.DVLS }} instances.
  keywords:
  - CLI
  - Command Line Interface
---
The {{ en.DVLSCONSOLE }} Command Line Interface (CLI) is a {{ en.CTOOL }} which allows administrators to interact with {{ en.DVLS }} instances, the scheduler, the recording rerver or a gateway with create, configure or delete operations. It is automatically available with the installation of the {{ en.DVLSCONSOLE }}. The **DPS.Console.CLI.exe** file is located in the {{ en.DVLSCONSOLE }} application installation folder.

## Using the CLI
The ***/help*** switch will list all available commands and parameters.
![{{ en.DVLSCONSOLE }} CLI commands list](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8032.png)

The ***/help*** switch can be used to list command parameters.
![CLI command parameters](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8033.png)

The following sample command launch the upgrade process from a zip file available in **C:\temp folder**.

**.\DPS.Console.CLI.exe server upgrade --dps "Default Web Site/dps" --zip "C:\temp\DVLS.2020.3.17.0.zip" --accept-eula -quiet -verbose**.

The following command will create a new {{ en.DVLS }} instance from a JSON response file (see below) that contains the required parameters. It can be used with any of the main commands of the CLI.
![CLI with JSON file](https://cdnweb.devolutions.net/docs/docs_en_kb_KB8034.png)

Sample of a JSON response file for creating a new {{ en.DVLS }} instance.
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

### Emergency procedure
This procedure is useful in case of an Azure Directory outage.

{% snippet icon.badgeInfo %}
Please note that you should replace `dvls` (after ...`\wwwroot\`) with your own custom domain.
{% endsnippet %}

#### Enabling custom authentication
In the CLI enter either:
```powershell
server instance --instance=C:\inetpub\wwwroot\dvls --enable-custom-authentication=true
```
or
```powershell
server instance --instance=C:\inetpub\wwwroot\dvls --custom-auth=true
```

#### Disabling custom authentication
When done with the necessary operations:
```powershell
server instance --instance=C:\inetpub\wwwroot\dvls --enable-custom-authentication=false
```
or
```powershell
server instance --instance=C:\inetpub\wwwroot\dvls --custom-auth=false
```
