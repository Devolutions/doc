---
eleventyComputed:
  title: Exemples d'actions par lot
  description: Les actions par lot permettent de modifier rapidement plusieurs sessions à la fois, mais au sein de {{ fr.RDM }} lui-même.
---
Les ***actions par lot*** permettent de modifier rapidement plusieurs sessions à la fois, mais au sein de {{ fr.RDM }} lui-même.

Pour pouvoir créer votre script PowerShell, vous auriez besoin du nom du ou des champs que vous souhaiteriez mettre à jour. Pour récupérer le nom exact du champ, cliquez droit sur votre session et sélectionnez ***Presse-papiers – Copier***. Vous pouvez ensuite coller les informations dans un éditeur de texte pour récupérer le nom du ou des champs que vous souhaiteriez modifier via la Commande PowerShell personnalisée.

Puisqu'elles utilisent la technologie PowerShell, nous fournissons des exemples dans cette section car les champs sont les mêmes lorsqu'ils sont accédés via nos actions par lot ou via PowerShell.

## Exemples

### Désactiver l'option Envoyer le mot de passe uniquement dans le champ de mot de passe HTML dans les sessions de site Web
```powershell
$connection.Web.OnlySendPasswordInPasswordField = $false;
$RDM.Save ();
```

### Activer Afficher l'URL intégrée (Entrées d'informations)
```powershell
$connection.DataEntry.ViewUrlDisplayMode = "Default";
$RDM.Save();
```
```powershell
ViewUrlDisplayMode: "Default" = intégré, "External" = externe.
```

### Ouvrir l'URL (externe) pour la connexion Web (Entrées d'informations)
```powershell
$connection.DataEntry.DefaultAction = "OpenUrlExternal";
$RDM.Save();
```

### Modification par lot de SSH Shell (Paramètres du type de session)
```powershell
$connection.Terminal.MaxScrollbackLines = 2000;

$connection.Terminal.AlwaysAcceptFingerprint = $true;

$connection.Terminal.EnableLogging = $true;
$connection.Terminal.LogPath = '$LOGPATH$\$NAME$_$DATE_TEXT_ISO$_$TIME_TEXT_ISO$.log';
$connection.Terminal.LogMode = 1;
$connection.Terminal.LogOverwriteMode = 0;
$RDM.Save();
```

Voici quelques valeurs que vous pouvez changer pour cette commande;

LogPath: votre chemin entre ' ' (guillemets simples). Vous pouvez également utiliser des variables. i.e. %USERPROFILE%, $NAME$, etc. Dans cet exemple, $LOGPATH$ est une variable personnalisée définie dans les [Paramètres système – Variables personnalisées](/rdm/commands/administration/settings/system-settings/application-specific/application/).

```powershell
LogMode: 1 = Sortie imprimable, 0 = Événement
TerminalLogOverwriteMode: 0 = par défaut, 1 = demande, 2 = ajouter, 3 = écraser
```

Voici également d'autres options que vous pouvez modifier;

```powershell
$connection.Terminal.BellMode = 'Visual'
$connection.Terminal.CloseOnDisconnect = $false
```

### Convertir les sessions de site Web en sessions LogMeIn
```powershell
$connection.ConnectionType = 'LogMeIn';
$connection.ConnectionSubType = ' ';
$connection.LogMeIn.Url = $connection.WebBrowserUrl;
$RDM.Save();
```

#### Activer "Masquer les erreurs de script dans toutes vos sessions LogMeIn."
```powershell
$connection.LogMeIn.ScriptErrorsSuppressed = $true;
$RDM.Save();
```

#### Masquer la barre de navigation.
```powershell
$connection.LogMeIn.ShowUrl = $false;
$RDM.Save();
```

#### Changer l'application de navigateur Web.
```powershell
$connection.LogMeIn.WebBrowserApplication = "GoogleChrome";
$RDM.Save();
```

#### Activer le processus Sandbox.
```powershell
$connection.LogMeIn.SandboxProcess = $true;
$RDM.Save();
```

#### Changer l'URL.
```powershell
$connection.LogMeIn.Url = " ";
$RDM.Save();
```

#### Changer le champ de connexion au portail.
```powershell
$connection.LogMeIn.DashboardHostUrl = " ";
$RDM.Save();
```

#### Changer le nom d'utilisateur et le mot de passe.
Veuillez exécuter ces deux commandes l'une après l'autre

Hôte;

```powershell
$connection.LogMeIn.UserName = " ";
$RDM.Save();
```
```powershell
$connection.LogMeIn.SafePassword = " ";
$RDM.Save();
```

Portail;

```powershell
$connection.LogMeIn. DashboardEmail = " ";
$RDM.Save();
```
```powershell
$connection.LogMeIn. SafePasswordDashboard = " ";
$RDM.Save();
```

### Changer la valeur d'un champ personnalisé sans changer les données
```powershell
$connection.MetaInformation.CustomField3Title = "MyField"
$RDM.Save();
```
Veuillez noter que vous devriez changer "MyField" pour la valeur que vous souhaitez remplacer le champ personnalisé #3 par.

### Mise à jour en masse des informations FQDN pour les sessions.
```powershell
$connection.host = $Connection.name + ".mydomain.com"
$RDM.Save();
```

### Changement en masse du champ d'enregistrement pour les sessions Putty
```powershell
$connection.Putty.RecordingMode = 1;
$connection.Putty.RecordingFileName = "C:\path\to\your\file.log"
$RDM.Save();
```

### Changer le champ ordinateur d'une session RDP
```powershell
$connection.Url = " ";
$RDM.Save();
```

### Encodage
```powershell
$connection.Putty.TelnetEncoding = "UTF-8";
$RDM.Save();
```

### Changer la date d'expiration d'une session RDP
La date doit être spécifiée en utilisant le format ISO8601.

```powershell
$connection.MetaInformation.Expiration = "2018-12-25T00:00:00-05:00";
$RDM.Save();
```

### Changer la date d'expiration d'une session RDP avec une date relative
Utiliser tout opérateur de date et heure pris en charge par PowerShell.

```powershell
$connection.MetaInformation.Expiration = (Get-Date).AddMonths(6);
$RDM.Save();
```

### Modifier le titre de l'onglet de page dans l'interface utilisateur
```powershell
$connection.TabTitle = '$COMPANY_NAME$ - $NAME$';
$RDM.Save();
```

### Effacer les mots-clés dans une session
```powershell
$connection.MetaInformation.Keywords = ";
$RDM.Save();
```

### Changer le nombre maximal de lignes d'historique pour SSH Shell (Rebex)
```powershell
$connection.Putty.HistoryMaxLength = 2000;
$RDM.Save();
```

### Convertir un outil de ligne de commande en une session de ligne de commande
```powershell
$connection.ConnectionType = 3;
$RDM.Save();
```

### Changer le crochet clavier pour une session RDP
```powershell
$connection.KeyboardHook = "OnTheRemoteComputer";
$RDM.Save();
```

### Définir la propriété d'identification pour demander à la connexion et la lier à un dossier.
```powershell
$connection.CredentialConnectionGroup = "YourFolderPath\Credentials"
$connection.CredentialConnectionID = "00000000-0000-0000-0000-000000000000"
$connection.CredentialConnectionSavedPath = "--- Demander à la connexion ---"
$RDM.Save();
```
