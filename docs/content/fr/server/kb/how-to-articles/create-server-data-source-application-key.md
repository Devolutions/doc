---
eleventyComputed:
  title: Créer une source de données {{ fr.DVLS }} avec une clé d'application
---
Avec le module {{ fr.PS }}, il est possible de se connecter à une instance {{ fr.DVLS }} en utilisant une [***Clé d'application et Secret d'application***](/server/web-interface/administration/security-management/applications/). Vous pouvez créer une source de données {{ fr.DVLS }} [dans {{ fr.RDM }}](#rdm) ou manuellement [en utilisant PowerShell](#powershell). Suivez la méthode qui convient le mieux à vos besoins.

## Étapes

### Méthode 1 : {{ fr.RDM }}
1. Dans {{ fr.RDM }}, aller à ***Fichier – Sources de données***.
1. Cliquer sur le bouton ***Ajouter une nouvelle source de données***.
![Fichier – Sources de données – Ajouter une nouvelle source de données](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2117.png)
1. Dans la fenêtre suivante, sélectionner la source de données d'équipe ***{{ fr.DVLS }}***, puis cliquer sur ***OK***.
![Source de données {{ fr.DVLS }}](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2118.png)
1. Dans l'onglet ***Général***, entrer un ***Nom***, un ***Hôte***, et un ***Nom d'utilisateur*** pour votre nouvelle source de données. Vous pouvez ensuite cliquer sur le bouton ***Tester la connexion*** pour confirmer que la connexion fonctionne.
![Onglet Général](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2120.png)
1. Cliquer sur l'onglet ***PowerShell***.
![Onglet PowerShell](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2119.png)
1. Entrer votre [***Clé d'application et Secret d'application***](/server/web-interface/administration/security-management/applications/) dans le champ ***ID de locataire*** et le champ ***Mot de passe*** respectivement, puis cliquer sur ***OK***.

Votre nouvelle source de données {{ fr.DVLS }} est maintenant créée. Vous pouvez maintenant vous connecter à votre {{ fr.DVLS }} et exécuter vos scripts.

### Méthode 2 : PowerShell
1. En utilisant les applets de commande PowerShell, coller le script d'exemple suivant :
   ```powershell
   $dsname = "DVLS PowerShell"
   $dsurl = "https<area>://your_dvls_url"
   $appkey = "your_appkey"
   $appsecret = "your_appsecret"

   $ds = New-RDMDataSource -DVLS -Name $dsname -Server $dsurl -ScriptingTenantID $appkey -ScriptingApplicationPassword $appsecret -SetDatasource -WarningAction SilentlyContinue
   Set-RDMDataSource $ds
   Set-RDMCurrentDataSource $ds
   ```
1. Remplacer les valeurs des variables par les vôtres, puis exécuter le script.

Votre nouvelle source de données {{ fr.DVLS }} est maintenant créée. Vous pouvez maintenant vous connecter à votre {{ fr.DVLS }} et exécuter vos scripts.
