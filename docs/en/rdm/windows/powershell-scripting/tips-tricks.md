---
title: PowerShell Scripting - Tips and tricks
---
We are always asked for a full list of property names and sadly it is extremely hard to provide for multiple reasons. The best way is still to look at the xml structure of an entry of the proper type to identify the field names.  

## Reverse Engineering an entry's structure 

1. Create an entry of the needed type, add only mandatory data at this time. Save the entry. 
1. Right-click on the entry, then use ***Clipboard – Copy*** . 
1. In the dialog that appears, switch to the ***Preview*** tab, copy the xml structure to a text file. This is the BEFORE . 
1. Manually perform the modification to the entry that you would like to automate using PowerShell, save the entry. 
1. Using ***Clipboard – Copy*** , save the modified xml to another file. This is the AFTER . 
1. Compare the two files with your favorite difference tool, you will see the fields that have changed, and the values that have been assigned. This indicates what your script should do. 

## Essential information about {{ en.RDM }}'s Xml format 

* To save space, most fields have a default value and when the field contains that default value, it simply does NOT appear in the content. That is why you must watch out for new fields that appear in the AFTER content. 
* Credentials are handled in a special way. They contain a GUID when they refer to other entries, but they hold Well-Known static GUIDs when they use other mechanisms. 

<table>
	<tr>
		<th>

SETTING 
		</th>
		<th>
WELL KNOWN GUID 
		</th>
	</tr>
	<tr>
		<td>
Default 
		</td>
		<td>
" "
		</td>
	</tr>
	<tr>
		<td>
Credential repository --- Prompt on connection --- 
		</td>
		<td>
"45479560-173E-435D-8848-C22F863FDC96" 
		</td>
	</tr>
	<tr>
		<td>
Embedded 
		</td>
		<td>
should be used for backwards compatibility only, we prefer not to list it here. 
		</td>
	</tr>
	<tr>
		<td>
Parent (only for sub-connections) 
		</td>
		<td>
"E2CC9029-CA3A-4308-BA54-16D5029BC8ED" 
		</td>
	</tr>
	<tr>
		<td>
Inherited 
		</td>
		<td>
"1310CF82-6FAB-4B7A-9EEA-3E2E451CA2CF" 
		</td>
	</tr>
	<tr>
		<td>
My personal credentials 
		</td>
		<td>
"9F3C3BCF-068A-4927-B996-CA52154CAE3B" 
		</td>
	</tr>
	<tr>
		<td>
None 
		</td>
		<td>
"B87B29D9-9239-4D7B-86D8-9B53DCD3BA9F" 
		</td>
	</tr>
	<tr>
		<td>
{{ en.PVLT }} , paired with PersonalConnectionID   
		</td>
		<td>
"245A4245-48E7-4DF5-9C4C-11861D8E1F81" 
		</td>
	</tr>
	<tr>
		<td>
{{ en.PVLT }} Search, paired with CredentialPrivateVaultsearchString 
		</td>
		<td>
"88E4BE76-4C5B-4694-AA9C-D53B7E0FE0DC" 
		</td>
	</tr>
</table>

## Tips and tricks 

* To find properties and paths, reverse engineer the session XML file format. Create a sample session in {{ en.RDM }} and export it using the right click menu ***Import/Export - Export Session (.rdm)*** . Once exported, open the .rdm file with your favorite editor. Browse the XML structure to find the property path and name. 
* To list all properties of an entry, pipe the session object to Get-Member cmdlet. 

```powershell
$session = Get-RDMSession -Name "MyRDPSession"  
$session | Get-Member
``` 

* Use the AddDataEntryKind method to set the data entry kind to Web (11 in this case). This is not actually documented – it’s just a bonus tip that we use here at Devolutions all the time! 

