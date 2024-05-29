---
eleventyComputed:
  title: PowerShell scripting
  order: 10
---
{% snippet icon.badgeHelp %} 
We have moved to a [GitHub repository](https://github.com/Devolutions/RDMSamples-ps) to hold our various samples and recipes. Please consult it to know what is available. Questions and samples should be requested on our [forum](https://forum.devolutions.net/product/powershell-module). Our team will be glad to assist you. 
{% endsnippet %}
 
There are two ways to interact with {{ en.RDM }} using PowerShell:  

|  |  |
|---|---|
| [Module](/powershell/rdm-powershell/powershell-scripting/powershell-module/) | {{ en.PS }} Module: It is a module that exposes many cmdlets that are used to "pilot" a local installation of {{ en.RDM }}. As such, it is quite different from most modules available out there since the majority is used to communicate with a remote service. This means that it requires an interactive Windows session in a user context.                |
| [Custom Actions](/powershell/rdm-powershell/powershell-scripting/custom-powershell-commands/) | Snippets of PowerShell code that can be executed directly in {{ en.RDM }}. The actions can be initiated using ***Edit – Edit (Special Actions) – Custom PowerShell Command***. The advantages of this approach are the following:<br><br>1. There is no need to handle the loading of the appropriate module for the instance of {{ en.RDM }}.<br>1. There is no need to handle the filtering of entries. Most of the time, you would perform manual selection directly in your ***{{ en.NPANE }}*** or, even better, use the ***Advanced Search*** to select entries in one fell swoop. |
