---
eleventyComputed:
  title: Scripting PowerShell
  order: 10
---
{% snippet icon.badgeHelp %} 
Nous avons déménagé vers un [dépôt GitHub](https://github.com/Devolutions/RDMSamples-ps) pour regrouper nos différents exemples et recettes. Veuillez le consulter pour savoir ce qui est disponible. Les questions et exemples doivent être demandés sur notre [forum](https://forum.devolutions.net/product/powershell-module). Notre équipe sera heureuse de vous assister.
{% endsnippet %}

Il y a deux manières d'interagir avec {{ fr.RDM }} en utilisant PowerShell :

|  |  |
|---|---|
| [Module](/powershell/rdm-powershell/powershell-scripting/powershell-module/) | {{ fr.PS }} Module : C'est un module qui expose de nombreux applets de commande utilisés pour "piloter" une installation locale de {{ fr.RDM }}. En tant que tel, il est assez différent de la plupart des modules disponibles car la majorité est utilisée pour communiquer avec un service distant. Cela signifie qu'il nécessite une session Windows interactive dans un contexte utilisateur. |
| [Actions Personnalisées](/powershell/rdm-powershell/powershell-scripting/custom-powershell-commands/) | Des extraits de code PowerShell qui peuvent être exécutés directement dans {{ fr.RDM }}. Les actions peuvent être initiées en utilisant ***Modifier – Modifier (Actions Spéciales) – Commande PowerShell Personnalisée***. Les avantages de cette approche sont les suivants :<br><br>1. Il n'est pas nécessaire de gérer le chargement du module approprié pour l'instance de {{ fr.RDM }}.<br>1. Il n'est pas nécessaire de gérer le filtrage des entrées. La plupart du temps, vous effectueriez une sélection manuelle directement dans votre ***{{ fr.NPANE }}*** ou, encore mieux, utiliseriez la ***Recherche Avancée*** pour sélectionner des entrées en un seul coup. |
