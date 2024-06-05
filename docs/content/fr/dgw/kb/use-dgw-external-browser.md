---
eleventyComputed:
  title: Utiliser {{ fr.DGW }} avec un navigateur externe
  description: Il est possible d'utiliser {{ fr.DGW }} avec un navigateur externe mais pour le moment il y a quelques limitations à connaître en raison de la conception du navigateur
  keywords:
  - navigateur externe
  - navigateur web
---
Il est possible d'utiliser {{ fr.DGW }} avec un navigateur externe, mais pour le moment il y a quelques limitations à connaître en raison de la conception du navigateur :
* Cela ne fonctionne qu'avec Google Chrome.
* Google Chrome doit être fermé lors de l'ouverture d'un site web depuis {{ fr.RDM }}. Une solution à cela peut être trouvée dans le [contournement](#workaround-to-set-up-without-having-to-close-chrome).
* Dans le cas où il y a d'autres paramètres de proxy avec Chrome (par GPO, ligne de commande, paramètres, etc.), ils pourraient entrer en conflit les uns avec les autres et {{ fr.DGW }} ne fonctionnera pas.
* Dans le cas où Google Chrome est fermé et n'a pas d'autres paramètres de proxy, configurer l'entrée pour s'ouvrir de manière externe comme toutes les autres entrées dans {{ fr.RDM }}. Aucune installation/addon supplémentaire n'est nécessaire pour que cela fonctionne.

## Contournement pour configurer sans avoir à fermer Chrome
1. Faire un clic droit pour entrer dans les ***Propriétés*** de l'entrée ***Navigateur Web*** qui a {{ fr.DGW }} configuré.
1. Dans la section ***Général***, régler l'***Affichage*** sur ***Externe***.
![Common – General – Display – External](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0019.png)
1. Aller à l'onglet ***Avancé***.
![Advanced Tab](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0020.png)
1. Cocher ***Chemin des données utilisateur***.
![User Data Path Option](https://cdnweb.devolutions.net/docs/docs_en_kb_KB0021.png)
1. Entrer un chemin pour le stockage des nouvelles données utilisateur de Chrome.
1. Cliquer sur ***Ok*** pour sauvegarder les changements.

## PowerShell
Cette section présentera plusieurs solutions en utilisant PowerShell.

### Édition par lot en utilisant PowerShell
Il est possible de [modifier par lot](/rdm/kb/rdm-windows/how-to-articles/batch-edit-rdm) les entrées avec une commande PowerShell personnalisée pour faire en sorte que toutes utilisent un chemin différent (peut être le temp ou tout autre endroit autorisé pour les utilisateurs) :

```powershell
$connection.Web.UseUserDataPath = $true;
$connection.Web.UserDataPath  = "C:\MyPath" + connection.ID;
$RDM.Save();
```

### Édition temporaire avec Avant Ouverture
Il est également possible d'[utiliser temporairement les propriétés](/rdm/kb/rdm-windows/how-to-articles/execute-powershell-connection) 'Web.UseUserDataPath' défini sur vrai et 'Web.UserDataPath' défini le chemin vers le temp ou tout autre endroit autorisé pour les utilisateurs qui peut être dynamique avec un Événement Avant Ouverture (en utilisant Script PowerShell).

```powershell
connection.Web.UseUserDataPath = $true
$connection.Web.UserDataPath  = "C:\MyPath" + $connection.ID;
$RDM.Save();
```

### Suppression du dossier
Ce code est utilisé pour supprimer le dossier lors de l'événement onClose :

```powershell
Remove-Item "C:\MyPath" + connection.ID -Recurse -Force
```

{% snippet, "badgeInfo" %}
Il n'est pas possible d'ouvrir un site web en utilisant {{ fr.DGW }} qui est déjà en cours d'exécution sans les contournements en raison de la manière dont Google Chrome est conçu. Un Chrome déjà ouvert ne peut pas changer les paramètres de proxy de manière dynamique.
{% endsnippet %}
