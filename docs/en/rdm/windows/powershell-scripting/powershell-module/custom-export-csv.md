---
title: Custom Export to CSV
---
Many customers ask for a special export that would contain specific fields. 

## Settings 

Here is a small script that can be used to generate URLs for our new web protocol handler. We generate a csv file that contains the name and the URL. 

```powershell
## get the data source ID, note that the "Create Web Url" button generates a different ID, but both are accepted 
$dsid = Get-RDM-DataSource | where {$_.IsCurrent -eq "X"} | select -expand "ID" 
## get the RDP sessions, create a new object with the desired fields. 
## Simply append "add-member" commands to include a new field 
$s = Get-RDM-Session | 
    where {$_.Session.Kind -eq "RDPConfigured"} | 
    foreach { 
        new-Object Object | 
            Add-Member NoteProperty Name $_.Name –PassThru | 
          Add-Member NoteProperty URL "rdm://open?DataSource=$dsid&Session=$($_.ID)" –PassThru 
}; 
## save to csv, the field names are used as column headers. 
$s | export-csv c:\temp\sessions.csv -notypeinformation; 
```
