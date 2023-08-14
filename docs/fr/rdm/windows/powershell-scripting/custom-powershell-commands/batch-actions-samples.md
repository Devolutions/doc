---
title: Exemples d'actions par lot
---
Les modifications par lots permettent de modifier rapidement plusieurs sessions à la fois, dans {{ fr.RDM }} lui-même.  

Pour pouvoir créer votre script PowerShell, vous aurez besoin du nom du ou des champs que vous souhaitez mettre à jour. Pour récupérer le nom exact du champ, cliquer avec le bouton droit sur votre session et sélectionnez ***Presse - papiers - Copier***. Vous pouvez ensuite coller les informations dans un éditeur de texte pour récupérer le nom du ou des champs que vous souhaitez modifier via la commande PowerShell personnalisée.  

Puisqu'ils utilisent la technologie Powershell, nous fournissons des exemples dans cette section, car les champs sont les mêmes lorsqu'ils sont accessibles via nos modifications par lots ou via Powershell. 

## Échantillons 

### Désactiver l'option "only send password in html password field" dans les sessions de site web 

```powershell
$connection.Web.OnlySendPasswordInPasswordField = $false;
$RDM.Save ( ) ;
```

### Activer "view url embedded" (entrées d'informations) 

```powershell
$connection.DataEntry.ViewUrlDisplayMode = "Default";
$RDM.Save();
```
 
```powershell
ViewUrlDisplayMode: "Default" = Intégré, "External" = Externe. 
```

### "Open url (external)" pour la connexion web (entrées d'informations) 

```powershell
$connection.DataEntry.DefaultAction = "OpenUrlExternal";
$RDM.Save();
```

### Modifier par lots du SSH Shell (Paramètres de Type de session) 

```powershell
$connection.Terminal.MaxScrollbackLines = 2000;
 
$connection.Terminal.AlwaysAcceptFingerprint = $true;
 
$connection.Terminal.EnableLogging = $true;
$connection.Terminal.LogPath = '$LOGPATH$\$NAME$_$DATE_TEXT_ISO$_$TIME_TEXT_ISO$.log';
$connection.Terminal.LogMode = 1;
$connection.Terminal.LogOverwriteMode = 0;
$RDM.Save();
```

Voici quelques valeurs que vous pouvez modifier pour cette commande;  

LogPath: votre chemin entre ' ' (guillemets simples). Vous pouvez également utiliser des variables. c'est-à-dire %USERPROFILE%, $NAME$, etc. Dans cet exemple, $LOGPATH$ est une variable personnalisée définie dans les paramètres de la source de données (Paramètres du système).  

```powershell
LogMode: 1 = Sortie imprimable, 0 = Événement  
TerminalLogOverwriteMode: 0 = Par défaul, 1 = Invite, 2 = Ajouter, 3 = Remplacer  
```

Voici également d'autres options que vous pouvez modifier;  

```powershell
$connection.Terminal.BellMode = 'Visual';
$connection.Terminal.CloseOnDisconnect = $false; 
```

### Convertir des sessions de site web en sessions LogMeIn 

```powershell
$connection.ConnectionType = 'LogMeIn';
$connection.ConnectionSubType = '';
$connection.LogMeIn.Url = $connection.WebBrowserUrl;
$RDM.Save();
```

Activer "Hide script errors in all your LogMeIn sessions" 

```powershell
$connection.LogMeIn.ScriptErrorsSuppressed = $true;
$RDM.Save();
```

Masquer la barre de navigation 

```powershell
$connection.LogMeIn.ShowUrl = $false;
$RDM.Save();
```

Modifier l'application du navigateur Web 

```powershell
$connection.LogMeIn.WebBrowserApplication = "GoogleChrome";
$RDM.Save();
```

Activer le processus Sandbox 

```powershell
$connection.LogMeIn.SandboxProcess = $true;
$RDM.Save();
```

Changer l'URL 

```powershell
$connection.LogMeIn.Url = " ";
$RDM.Save();
```

Modifier le champ de connexion au portail 

```powershell
$connection.LogMeIn.DashboardHostUrl = " ";
$RDM.Save();
```

Changer le nom d'utilisateur et le mot de passe  

Veuillez exécuter ces deux scripts, un à la fois.  

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

### Modifier une valeur de champ personnalisé sans modifier les données 

```powershell
$connection.MetaInformation.CustomField3Title = "MyField"
$RDM.Save();
```

Veuillez noter que vous devrez modifier "MyField" pour la valeur que vous souhaitez remplacer.  Le champ personnalisé #3 par exemple. 

### Mettre à jour en lot les informations de nom de domaine complet sur les sessions 

```powershell
$connection.host = $Connection.name + ".mydomain.com"
$RDM.Save();
```

### Mettre à jour en lot le champ d'enregistrement pour les sessions putty 

```powershell
$connection.Putty.RecordingMode = 1;
$connection.Putty.RecordingFileName = "C:\path\to\your\file.log"
$RDM.Save();
```

### Modifier le champ ordinateur d'une session rdp 

```powershell
$connection.Url = " ";
$RDM.Save();
```

### Coder 

```powershell
$connection.Putty.TelnetEncoding = "UTF-8";
$RDM.Save();
```

### Modifier la date d'expiration d'une session rdp 

La date doit être spécifiée au format ISO8601. 

```powershell
$connection.MetaInformation.Expiration = "2018-12-25T00:00:00-05:00";
$RDM.Save();
```

### Modifier la date d'expiration d'une session rdp avec une date relative 

Utilisez n'importe quel opérateur date/heure pris en charge par PowerShell. 

```powershell
$connection.MetaInformation.Expiration = (Get-Date).AddMonths(6);
$RDM.Save();
```

### Modifier le titre de l'onglet dans l'interface utilisateur 

```powershell
$connection.TabTitle = '$COMPANY_NAME$ - $NAME$';
$RDM.Save();
```

### Effacer les mots clés dans la session 

```powershell
$connection.MetaInformation.Keywords = "";
$RDM.Save();
```

### Changer le nombre max de lignes de l'historique des modifications pour ssh shell (rebex) 

```powershell
$connection.Putty.HistoryMaxLength = 2000;
$RDM.Save();
```

### Convertir l'outil de ligne de commande en session de ligne de commande 

```powershell
$connection.ConnectionType = 3;
$RDM.Save();
```

### Modifier le crochet du clavier pour une session rdp 

```powershell
$connection.KeyboardHook = "OnTheRemoteComputer";
$RDM.Save();
```

