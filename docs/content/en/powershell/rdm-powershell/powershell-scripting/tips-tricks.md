---
eleventyComputed:
  title: List of property names for PowerShell script
  status: Topic available in German language
  keywords:
  - PowerShell
  - GUID
  - Permissions
---
We are often asked for a full list of property names and it is hard to provide for multiple reasons. The most effective approach remains examining the XML structure of a relevant entry to ascertain the field names.

## Reverse engineering an entry's structure
1. Create an entry of the needed type, add only mandatory data at this time. Click ***OK*** to save the entry.
1. Right-click the entry, then use ***Clipboard – Copy***.
1. In the dialog that appears, switch to the ***Preview*** tab, copy the XML structure to a text file. This is the BEFORE.
1. Manually perform the modification to the entry that should be automated using PowerShell, save the entry.
1. Using ***Clipboard – Copy***, save the modified XML to another file. This is the AFTER.
1. Compare the two files with a difference tool, the fields that have changed and the values that have been assigned will indicate what the script should do.  
{% snippet, "badgeHelp" %}
Learn more about [{{ en.RDM }} credential properties GUIDs](/powershell/rdm-powershell/xml-information/).
{% endsnippet %}

{% snippet, "badgeHelp" %}
Learn more about [{{ en.DVLS }} credential properties GUIDs](/powershell/dvls-powershell/xml-information/).
{% endsnippet %}

## Tips and tricks

* To find properties and paths, reverse engineer the session XML file format. Create a sample session in {{ en.RDM }} and export it using the right click menu ***Import/Export – Export Session (.rdm)***. Once exported, open the .rdm file with an editor. Browse the XML structure to find the property path and name.
* To list all properties of an entry, pipe the session object to Get-Member cmdlet.

```powershell
$session = Get-RDMSession -Name "MyRDPSession"  
$session | Get-Member
```
