---
title: Trucs et astuces
---
On nous demande souvent une liste complète des noms de propriété et, malheureusement, il est extrêmement difficile de la fournir pour plusieurs raisons. La meilleure façon est de regarder la structure xml d'une entrée du type approprié pour identifier les noms de champs. 

### Rétro-ingénierie d'une structure d'entrée 

1. Créer une entrée du type requis, ajouter uniquement les données nécessaires pour le moment. Enregistrer l'entrée. 
1. Cliquer avec le bouton droit sur l'entrée, puis utiliser ***Presse-papiers - Copier*** . 
1. Dans la boîte de dialogue qui apparaît, passez à l'onglet ***Aperçu*** , copier la structure XML dans un fichier texte. Ceci est le AVANT . 
1. Effectuer manuellement la modification de l'entrée que vous souhaitez automatiser à l'aide de PowerShell, enregistrer l'entrée. 
1. À l'aide du ***Presse-papiers - Copier*** , enregistrer le fichier XML modifié dans un autre fichier. Ceci est l' APRÈS. 
1. Comparer les deux fichiers avec votre outil de différence préféré, vous verrez les champs qui ont changé et les valeurs qui ont été attribuées. Cela indique ce que votre script doit faire. 

### Informations essentielles sur le format xml de {{ fr.RDM }} 

* Pour économiser de l'espace, la plupart des champs ont une valeur par défaut et lorsque le champ contient cette valeur par défaut, elle n'apparaît tout simplement PAS dans le contenu. C'est pourquoi vous devez faire attention aux nouveaux champs qui apparaissent dans le contenu APRÈS. 
* Les identifiants sont traités de manière spéciale. Ils contiennent un GUID lorsqu'ils font référence à d'autres entrées, mais ils contiennent des GUID statiques bien connus lorsqu'ils utilisent d'autres mécanismes. 

<table>
	<tr>
		<th>
		
Paramètres 
		</th>
		<th>
GUID bien connu 
		</th>
	</tr>
	<tr>
		<td>
Par défaut 
		</td>
		<td>
"" 
		</td>
	</tr>
	<tr>
		<td>
Dépôt d'identifiant --- ***Invite de connexion*** --- 
		</td>
		<td>
"45479560-173E-435D-8848-C22F863FDC96" 
		</td>
	</tr>
	<tr>
		<td>
Intégré 
		</td>
		<td>
Dois être utilisé à des fins de rétrocompatibilité, nous préférons ne pas le répertorier ici. 
		</td>
	</tr>
	<tr>
		<td>
Parent (uniquement pour les sous-connexions) 
		</td>
		<td>
"E2CC9029-CA3A-4308-BA54-16D5029BC8ED" 
		</td>
	</tr>
	<tr>
		<td>
Hérité 
		</td>
		<td>
"1310CF82-6FAB-4B7A-9EEA-3E2E451CA2CF" 
		</td>
	</tr>
	<tr>
		<td>
Mes identifiants personnels 
		</td>
		<td>
"9F3C3BCF-068A-4927-B996-CA52154CAE3B" 
		</td>
	</tr>
	<tr>
		<td>
Aucun 
		</td>
		<td>
"B87B29D9-9239-4D7B-86D8-9B53DCD3BA9F" 
		</td>
	</tr>
	<tr>
		<td>
Mon {{ fr.PVLT }}, associé à PersonalConnectionID &#32; 
		</td>
		<td>
"245A4245-48E7-4DF5-9C4C-11861D8E1F81" 
		</td>
	</tr>
	<tr>
		<td>
Recherche de {{ fr.PVLT }}, associée à CredentialPrivateVaultsearchString 
		</td>
		<td>
"88E4BE76-4C5B-4694-AA9C-D53B7E0FE0DC" 
		</td>
	</tr>
</table>

### Trucs et astuces 

* Pour rechercher des propriétés et des chemins, rétro-ingénierirer le format de fichier XML de la session. Créer un exemple de session dans RDM et exporter-le à l'aide du menu contextuel ***Importer/Exporter - Exporter la session (.rdm)*** . Une fois exporté, ouvrez le fichier .rdm avec votre éditeur préféré. Parcourir la structure XML pour trouver le chemin d'accès et le nom de la propriété. 
* Pour énumérer toutes les propriétés d'une entrée, soumettez l'objet de la session vers la cmdlet Get-Member avec le pipeline. 

```powershell
$session = Get-RDMSession -Name "MaSessionRDP" 
$session | Get-Member 
```

* Utiliser la méthode AddDataEntryKind pour définir le type d'entrée de données sur Web (11 dans ce cas). Ce n'est pas réellement documenté - c'est juste une astuce bonus que nous utilisons ici chez Devolutions tout le temps! 

