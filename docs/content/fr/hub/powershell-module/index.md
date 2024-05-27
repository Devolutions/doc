---
eleventyComputed:
  title: Module PowerShell
  description: Le module {{ fr.PS }} est un moyen d'accéder, de créer, de mettre à jour et de supprimer des éléments dans votre {{ fr.DHUBB }}. Cela vous aidera à automatiser certains processus/scripts.
  keywords:
  - PowerShell
  order: 40
---
Le module {{ fr.PS }} est un moyen d'accéder, de créer, de mettre à jour et de supprimer des éléments dans votre {{ fr.DHUBB }}. Cela vous aidera à automatiser certains processus/scripts. Après avoir installé le module {{ fr.PS }}, vous serez prêt à utiliser le module et à vous connecter à votre {{ fr.DHUBB }}.

### Prérequis

* PowerShell 7.2 ou ultérieur installé:
    * [Windows](https://learn.microsoft.com/fr-fr/powershell/scripting/install/installing-powershell-on-windows)
    * [macOS](https://learn.microsoft.com/fr-fr/powershell/scripting/install/installing-powershell-on-macos)
    * [Linux](https://learn.microsoft.com/fr-fr/powershell/scripting/install/installing-powershell-on-linux)
* Un [Utilisateur d'application](/fr/hub/web-interface/administration/management/application-users/)

## Tutoriels

### Connexion à votre {{ fr.DHUBB }}

{% snippet, "badgeHelp" %}
Pour obtenir la liste complète des commandes disponibles, consultez [Commandes PowerShell](/fr/hub/powershell-module/powershell-commands/).
{% endsnippet %}

1. Une fois PowerShell 7.2 ou ultérieur installé, ouvrir un terminal PowerShell et installer le module {{ fr.PS }} avec la commande suivante :

`Install-Module -Name {{ fr.PS }}`

![Commande Install-Module](https://cdnweb.devolutions.net/docs/fr/hub/Hub2015.png)

{% snippet, "badgeInfo" %}
D'autres options d'installation se trouvent dans la [PowerShell Gallery](https://www.powershellgallery.com/packages/devolutions.powershell/).
{% endsnippet %}

2. Se connecter au {{ fr.DHUBB }} avec la commande suivante. Si vous ne voyez aucune erreur, cela signifie que vous êtes connecté à votre {{ fr.DHUBB }}.

`Connect-HubAccount -Url https<area>://yourhub.devolutions.app/ -ApplicationSecret [YOUR_APPLICATION_SECRET] -ApplicationKey [YOUR_APPLICATION_KEY]`

![Commande Connect-HubAccount](https://cdnweb.devolutions.net/docs/fr/hub/Hub4059.png)

### Exemple de commande et utilisation

1. Avec la commande `Get-HubVault`, vous pouvez obtenir des {{ fr.VLT }}s que l'utilisateur d'application peut afficher et modifier.
{% snippet, "badgeInfo" %}
Si vous avez défini les permissions de l'utilisateur d'application sur plusieurs {{ fr.VLT }}s, vous verrez un groupe de {{ fr.VLT }}s.
{% endsnippet %}

![Commande Get-HubVault](https://cdnweb.devolutions.net/docs/fr/hub/Hub4060.png)

2. Avec ces informations de {{ fr.VLT }}, vous pouvez obtenir toutes les entrées avec la commande `Get-HubEntry` et l'ID du {{ fr.VLT }}.

{% snippet, "badgeInfo" %}
Si vous avez plus d'une entrée, vous verrez un groupe d'entrées.
{% endsnippet %}

![Commande Get-HubEntry](https://cdnweb.devolutions.net/docs/fr/hub/Hub4061.png)

3. Pour afficher des informations spécifiques, vous pouvez passer la commande de retour {{ fr.DHUBB }} dans une variable et récupérer ce dont vous avez besoin, comme l'ID de connexion dans cet exemple :
![Commande de retour {{ fr.DHUBB }} dans une variable](https://cdnweb.devolutions.net/docs/fr/hub/Hub4062.png)
1. Pour modifier cette entrée, vous pouvez modifier l'objet et le mettre à jour avec la commande `Set-HubEntry`.
![Commande Set-HubEntry](https://cdnweb.devolutions.net/docs/fr/hub/Hub4063.png)

À tout moment, vous pouvez valider dans votre version Web de {{ fr.DHUBB }} que les modifications ont été effectuées.
