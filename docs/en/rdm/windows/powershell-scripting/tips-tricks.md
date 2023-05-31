---
title: PowerShell scripting tips and tricks
keywords:
- PowerShell
- GUID
- Permissions
- Inherited
---
We are often asked for a full list of property names and it is hard to provide for multiple reasons. The most effective approach remains examining the XML structure of a relevant entry to ascertain the field names.

## Reverse engineering an entry's structure

1. Create an entry of the needed type, add only mandatory data at this time. Click ***OK*** to save the entry.
1. Right-click on the entry, then use ***Clipboard – Copy***.
1. In the dialog that appears, switch to the ***Preview*** tab, copy the XML structure to a text file. This is the BEFORE.
1. Manually perform the modification to the entry that you would like to automate using PowerShell, save the entry.
1. Using ***Clipboard – Copy***, save the modified XML to another file. This is the AFTER.
1. Compare the two files with your favorite difference tool, you will see the fields that have changed, and the values that have been assigned. This indicates what your script should do.

{% snippet icon.badgeInfo %}
Learn more on [{{ en.RDM }}'s XML format](/kb/devolutions-powershell/remote-desktop-manager/xml-information/).
{% endsnippet %}

{% snippet icon.badgeInfo %}
Learn more on [{{ en.DVLS }}'s XML format](/kb/devolutions-powershell/devolutions-server/xml-information/).
{% endsnippet %}

## Tips and tricks

* To find properties and paths, reverse engineer the session XML file format. Create a sample session in {{ en.RDM }} and export it using the right click menu ***Import/Export – Export Session (.rdm)***. Once exported, open the .rdm file with your favorite editor. Browse the XML structure to find the property path and name.
* To list all properties of an entry, pipe the session object to Get-Member cmdlet.

```powershell
$session = Get-RDMSession -Name "MyRDPSession"  
$session | Get-Member
```

* Use the AddDataEntryKind method to set the data entry type to Web (11 in this case).
