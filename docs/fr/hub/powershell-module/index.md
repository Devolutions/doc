---
eleventyComputed:
  title: Module PowerShell
  description: Le module {{ fr.PS }} est un moyen d'accéder, de créer, de mettre à jour et de supprimer des éléments dans votre {{ fr.PHUB }} Business. Cela vous aidera à automatiser certains processus/scripts.
  keywords:
  - PowerShell
  order: 30
---
Le module {{ fr.PS }} est un moyen d'accéder, de créer, de mettre à jour et de supprimer des éléments dans votre {{ fr.PHUB }} Business. Cela vous aidera à automatiser certains processus/scripts. Après avoir installé le module {{ fr.PS }}, vous serez prêt à utiliser le module et à vous connecter à votre {{ fr.PHUB }} Business.  

### Prérequis 

* PowerShell 7.2 ou ultérieur installé:  
    * [Windows](https://learn.microsoft.com/fr-fr/powershell/scripting/install/installing-powershell-on-windows)  
    * [macOS](https://learn.microsoft.com/fr-fr/powershell/scripting/install/installing-powershell-on-macos)  
    * [Linux](https://learn.microsoft.com/fr-fr/powershell/scripting/install/installing-powershell-on-linux)  
* Un [Utilisateur d'application](/fr/hub/web-interface/hub-overview/administration/management/application-users/)  

## Tutoriels 

### Connexion à votre {{ fr.PHUB }} Business 

{% snippet icon.badgeHelp %} 
Pour obtenir la liste complète des commandes disponibles, consultez [Commandes PowerShell](/fr/hub/powershell-module/powershell-commands/). 
{% endsnippet %}
 
1. Une fois PowerShell 7.2 ou ultérieur installé, ouvrir un terminal PowerShell et installer le module {{ fr.PS }} avec la commande suivante :  

`Install-Module -Name {{ fr.PS }}`  

![Commande Install-Module](/img/fr/hub/Hub2015.png) 
*Commande Install-Module*{.caption}

{% snippet icon.badgeInfo %} 
D'autres options d'installation se trouvent dans la [PowerShell Gallery](https://www.powershellgallery.com/packages/devolutions.powershell/). 
{% endsnippet %}
 
2. Se connecter au {{ fr.PHUB }} Business avec la commande suivante. Si vous ne voyez aucune erreur, cela signifie que vous êtes connecté à votre {{ fr.PHUB }} Business. 

`Connect-HubAccount -Url https<area>://yourhub.devolutions.app/ -ApplicationSecret [YOUR_APPLICATION_SECRET] -ApplicationKey [YOUR_APPLICATION_KEY]`  

![Commande Connect-HubAccount](/img/fr/hub/Hub4059.png) 
*Commande Connect-HubAccount*{.caption}

### Exemple de commande et utilisation 

1. Avec la commande `Get-HubVault`, vous pouvez obtenir des coffres que l'utilisateur d'application peut afficher et modifier. 
{% snippet icon.badgeInfo %} 
Si vous avez défini les permissions de l'utilisateur d'application sur plusieurs coffres, vous verrez un groupe de coffres. 
{% endsnippet %}
 
![Commande Get-HubVault](/img/fr/hub/Hub4060.png) 
*Commande Get-HubVault*{.caption}

2. Avec ces informations de coffre, vous pouvez obtenir toutes les entrées avec la commande `Get-HubEntry` et l'ID du coffre. 

{% snippet icon.badgeInfo %} 
Si vous avez plus d'une entrée, vous verrez un groupe d'entrées. 
{% endsnippet %}
 
![Commande Get-HubEntry](/img/fr/hub/Hub4061.png) 
*Commande Get-HubEntry*{.caption}

3. Pour afficher des informations spécifiques, vous pouvez passer la commande de retour {{ fr.PHUB }} Business dans une variable et récupérer ce dont vous avez besoin, comme l'ID de connexion dans cet exemple :  
![Commande de retour {{ fr.PHUB }} Business dans une variable](/img/fr/hub/Hub4062.png)
*Commande de retour {{ fr.PHUB }} Business dans une variable*{.caption}
1. Pour modifier cette entrée, vous pouvez modifier l'objet et le mettre à jour avec la commande `Set-HubEntry`.  
![Commande Set-HubEntry](/img/fr/hub/Hub4063.png)
*Commande Set-HubEntry*{.caption} 

À tout moment, vous pouvez valider dans votre version Web de {{ fr.PHUB }} Business que les modifications ont été effectuées. 
