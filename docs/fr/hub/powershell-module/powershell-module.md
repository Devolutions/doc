---
title: Module Hub PowerShell
---
Le module Hub PowerShell est un moyen d'accéder, de créer, de mettre à jour et de supprimer des éléments dans votre {{ fr.PHUB }} Business. Cela vous aidera à automatiser certaines opérations / scripts. Après avoir installé le module PowerShell, vous serez prêt à utiliser le module et à vous connecter à votre {{ fr.PHUB }} Business.  

### Conditions préalables 

* PowerShell 7 installé:  

    * [Windows](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-7.1)  
    * [Mac](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7.1)  
    * [Linux](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7.1)  
* Un [Utilisateur d'application](/fr/hub/web-interface/hub-overview/administration/management/application-users/)  

### Tutoriels 

* [Connexion à votre {{ fr.PHUB }} Business](#connexion-à-votre--frphub--business)  
* [Exemple de commande et utilisation](#exemple-de-commande-et-utilisation)  

### Connexion à votre {{ fr.phub }} business 

{% snippet icon.badgeInfo %} 
Pour obtenir la liste complète des commandes disponibles, veuillez consulter notre rubrique [Commandes PowerShell](/fr/hub/powershell-module/powershell-commands/) . 
{% endsnippet %}
 
1. Une fois PowerShell 7 installé, ouvrir un terminal PowerShell 7 et installer Devolutions Remote Desktop Manager (RDM) PowerShell Module avec la commande PowerShell suivante :  

```Install-Module -Name RemoteDesktopManager```  

![Hub2015.png](/img/fr/hub/Hub2015.png) 

{% snippet icon.badgeInfo %} 
D'autres options d'installation se trouvent dans la [Galerie PowerShell](https://www.powershellgallery.com/packages/RemoteDesktopManager/) . 
{% endsnippet %}
 
2. Se connecter à votre {{ fr.PHUB }} Business avec la commande suivante. Si vous ne voyez aucune erreur, cela signifie que vous êtes connecté à votre {{ fr.PHUB }} Business. 

```Connect-HubAccount -Url https<area>://yourhub.devolutions.app/ -ApplicationSecret [YOUR_APPLICATION_SECRET] -ApplicationKey [YOUR_APPLICATION_KEY]```  

![Hub4059.png](/img/fr/hub/Hub4059.png) 

### Exemple de commande et utilisation 

1. Avec la commande Get-HubVault, vous pouvez obtenir des coffres que l'utilisateur d'application peut afficher et modifier. 
{% snippet icon.badgeInfo %} 
Si vous avez défini les permissions de l'utilisateur d'application sur plusieurs coffres, vous verrez un groupe de coffres. 
{% endsnippet %}
 
![Hub4060.png](/img/fr/hub/Hub4060.png) 

2. Avec ces informations de coffre, vous pouvez obtenir toutes les entrées avec la commande Get-HubEntry et l'ID du coffre. 
{% snippet icon.badgeInfo %} 
Si vous avez plus d'une entrée, vous verrez un groupe d'entrées. 
{% endsnippet %}
 
![Hub4061.png](/img/fr/hub/Hub4061.png) 

3. Pour afficher des informations spécifiques, vous pouvez passer la commande de retour {{ fr.PHUB }} Business dans une variable et récupérer ce dont vous avez besoin, comme l'ID de connexion dans cet exemple :  
![Hub4062.png](/img/fr/hub/Hub4062.png) 
1. Pour modifier cette entrée, vous pouvez modifier l'objet et le mettre à jour avec la commande Set-HubEntry.  
![Hub4063.png](/img/fr/hub/Hub4063.png) 

À tout moment, vous pouvez valider dans votre version Web de {{ fr.PHUB }} Business que les modifications ont été effectués. 

