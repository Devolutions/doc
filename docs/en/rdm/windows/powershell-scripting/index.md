---
  title: PowerShell scripting
  order: 80
---
{% snippet icon.badgeHelp %} 
We have moved to a [GitHub repository](https://github.com/Devolutions/RDMSamples-ps) to hold our various samples and recipes. Please consult it to know what is available. Questions and samples should be requested on our [forum](https://forum.devolutions.net/product/powershell-module). Our team will be glad to assist you. 
{% endsnippet %}
 
There are two ways to interact with {{ en.RDM }} using PowerShell:  

<table>
	<tr>
		<td>

[Module](/rdm/windows/powershell-scripting/powershell-module/) 
		</td>
		<td>
{{ en.PS }} Module: It is a module that exposes many cmdlets that are used to "pilot" a local installation of {{ en.RDM }}. As such, it is quite different from most modules available out there since the majority is used to communicate with a remote service. This means that it requires an interactive Windows session in a user context. 
		</td>
	</tr>
	<tr>
		<td>
[Custom Actions](/rdm/windows/powershell-scripting/custom-powershell-commands/) 
		</td>
		<td>
Snippets of PowerShell code that can be executed directly in {{ en.RDM }}. The actions can be initiated using ***Edit – Edit (Special Actions) – Custom PowerShell Command***. The advantages of this approach are the following:  

1. There is no need to handle the loading of the appropriate module for the instance of {{ en.RDM }}. 
1. There is no need to handle the filtering of entries. Most of the time, you would perform manual selection directly in your ***{{ en.NPANE }}*** or, even better, use the ***Advanced Search*** to select entries in one fell swoop. 
		</td>
	</tr>
</table>
