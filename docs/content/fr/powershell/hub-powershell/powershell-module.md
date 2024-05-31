---
eleventyComputed:
  title: Module PowerShell
  description: Le module {{ fr.PS }} est un moyen d'accéder, de créer, de mettre à jour et de supprimer des éléments dans votre {{ fr.DHUBB }}. Cela vous aidera à automatiser certaines opérations/scripts.
  keywords:
  - PowerShell
  order: 40
---
Le module {{ fr.PS }} est un moyen d'accéder, de créer, de mettre à jour et de supprimer des éléments dans votre {{ fr.DHUBB }}. Cela vous aidera à automatiser certaines opérations/scripts. Après avoir installé le module {{ fr.PS }}, vous serez prêt à utiliser le module et à vous connecter à votre {{ fr.DHUBB }}.

### Prérequis
* PowerShell 7.2 ou ultérieur installé :
   * [Windows](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows)
   * [macOS](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-macos)
   * [Linux](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-linux)
* Un [utilisateur d'application](/hub/web-interface/administration/management/application-users/manage-application-users/)

## Se connecter à votre {{ fr.DHUBB }}
{% snippet icon.badgeHelp %}
Pour la liste complète des commandes disponibles, voir [Commandes PowerShell](/powershell/hub-powershell/powershell-commands/). D'autres options d'installation peuvent être trouvées dans la [Galerie PowerShell](https://www.powershellgallery.com/packages/devolutions.powershell/).
{% endsnippet %}

1. Une fois PowerShell 7.2 ou ultérieur installé, ouvrir un terminal PowerShell et installer le module {{ fr.PS }} avec la commande suivante :

   `Install-Module -Name {{ fr.PS }}`

   ![Commande Install-Module](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub2136.png)

1. Se connecter à votre {{ fr.DHUBB }} en utilisant la commande ci-dessous. Si vous ne voyez pas d'erreur, cela signifie que vous êtes connecté à votre {{ fr.DHUBB }}.

   `Connect-HubAccount -Url https<area>://yourhub.devolutions.app/ -ApplicationSecret [VOTRE_SECRET_APPLICATION] -ApplicationKey [VOTRE_CLE_APPLICATION]`

   ![Commande Connect-HubAccount](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4062.png)

## Exemple de commande et utilisation
1. Avec la commande `Get-HubVault`, vous pouvez obtenir les {{ fr.VLT }}s que votre utilisateur d'application peut voir et modifier. Si vous avez défini les permissions de votre utilisateur d'application pour plusieurs {{ fr.VLT }}s, vous verrez un tableau de {{ fr.VLT }}s.
![Commande Get-HubVault](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4063.png)

1. Avec ces informations de {{ fr.VLT }}, vous pouvez obtenir toutes les entrées avec la commande `Get-HubEntry` et l'ID de {{ fr.VLT }}. Si vous avez plus d'une entrée, vous verrez un tableau d'entrées.
![Commande Get-HubEntry](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4064.png)

1. Pour voir des informations spécifiques, vous pouvez mettre le retour de commande de {{ fr.DHUBB }} dans une variable et récupérer ce dont vous avez besoin, comme l'ID de connexion dans cet exemple :
![Variable de retour de commande {{ fr.DHUBB }}](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4065.png)
1. Pour modifier cette entrée, vous pouvez changer l'objet et le mettre à jour avec la commande `Set-HubEntry`.
![Commande Set-HubEntry](https://cdnweb.devolutions.net/docs/docs_en_hub_Hub4066.png)

À tout moment, vous pouvez valider dans votre version web de {{ fr.DHUBB }} que les modifications ont été effectuées.