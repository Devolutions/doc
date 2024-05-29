---
eleventyComputed:
  title: PowerShell samples - creating folder structure from CSV file
---
{% snippet icon.badgeInfo %}
Please note that the CSV file must be encoded in UTF-8 to support special characters.
{% endsnippet %}

This sample creates a Group Folder structure from a CSV file.

## Sample
```powershell
$csv = Import-Csv "c:\YourFolder\GroupFolder.csv"

foreach ($csvEntry in $csv) {
        $groupName = $csvEntry.Name

    # Extract the group folder name
    if ($groupName.Contains("\")) {
         $groupName = $groupName.Substring($groupName.LastIndexOf("\"), $groupName.Length - $groupName.LastIndexOf("\"))
         $groupName = $groupName.TrimStart("\")
        }

    # Create the group folder if it is not null, empty or fill in with space characters
    if (![string]::IsNullOrWhiteSpace($groupName)) {
        $session = New-RDMSession -Type "Group" -Name $groupName
        $session.Group = $csvEntry.Name
        Set-RDMSession $session
        Write-Host "Group Folder $groupName created" -f Yellow
        }
}

Update-RDMUI
```

## Notes
The CSV file must have only one column with the title set as Name.

The full path must be specified for each sub folder.

Here is an example of this CSV file:
![CSV File example](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_clip11585.png)
