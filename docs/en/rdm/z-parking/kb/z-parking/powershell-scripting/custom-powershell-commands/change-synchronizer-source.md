---
eleventyComputed:
  title: Change your synchronizer source
---
If you have been using the {{ en.RDM }} version with the Synchronizer ***Action on Entry Mismatch*** feature, the following steps will allow you to easily change your source with a Powershell Command without having to recreate all your sessions, thus marking all selected entries as created by the synchronizer.

## Settings
1. Select your Synchronizer entry in your Tree view, right click and select ***Properties***.
1. Copy the ***Entry ID*** in the ***Entry Information*** menu (you will then need that ID number to insert in your Powershell Command).
![Advanced - Session ID](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10577.png)
1. Select your entries and reach the Custom PowerShell Command dialog as described in [Custom PowerShell Commands](/powershell/rdm-powershell/powershell-scripting/custom-powershell-commands/)
1. Write the following line for your Powershell Command:

```powershell
$connection.CreationSource = "***** synchronizer ID obtained in step 2 *****"
$RDM.Save();
```
![Custom Powershell Command](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip10613.png)
