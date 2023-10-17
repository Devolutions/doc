---
eleventyComputed:
  title: Scripts PowerShell
  order: 80
---
{% snippet icon.badgeHelp %} 
Nous sommes passés à un [dépôt GitHub](https://github.com/Devolutions/RDMSamples-ps) pour contenir nos différents échantillons et recettes. Veuillez le consulter pour savoir ce qui est disponible. Les questions et les échantillons doivent être demandés sur notre [forum](https://forum.devolutions.net/product/powershell-module). Notre équipe se fera un plaisir de vous aider. 
{% endsnippet %}
 
Il existe deux façons d'interagir avec {{ fr.RDM }} à l'aide de PowerShell :  

<table>
	<tr>
		<td>

[Module](/fr/rdm/windows/powershell-scripting/powershell-module/) 
		</td>
		<td>
Module {{ fr.PS }} : Il s'agit d'un module qui expose de nombreuses cmdlets utilisées pour « piloter » une installation locale de {{ fr.RDM }}. En tant que tel, il est assez différent de la plupart des modules disponibles sur le marché puisque la majorité est utilisée pour communiquer avec un service distant. Cela signifie qu'il nécessite une session Windows interactive dans un contexte utilisateur. 
		</td>
	</tr>
	<tr>
		<td>
[Actions personnalisées](/fr/rdm/windows/powershell-scripting/custom-powershell-commands/) 
		</td>
		<td>
Il s'agit d'extraits de code PowerShell pouvant être exécutés directement dans {{ fr.RDM }}. Les actions peuvent être lancées à l'aide de la commande ***Modifier – Modifier – (Actions spéciales) – Commande PowerShell personnalisée***. Les avantages de cette approche sont les suivants :  

1. Il n'est pas nécessaire de gérer le chargement du module approprié pour l'instance de {{ fr.RDM }}. 
1. Il n'est pas nécessaire de gérer le filtrage des entrées. La plupart du temps, vous effectuerez une sélection manuelle directement dans votre ***{{ fr.NPANE }}*** ou, mieux encore, vous utiliserez la recherche avancée pour sélectionner les entrées en une seule fois. 
		</td>
	</tr>
</table>
