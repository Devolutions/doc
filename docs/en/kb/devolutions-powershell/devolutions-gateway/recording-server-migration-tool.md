---
eleventyComputed:
  title: Legacy recording server migration tool
  description: This PowerShell script transforms session recording files from the legacy Devolutions recording server to the {{ en.DGW }} session recording format
---
This PowerShell script transforms session recording files from the legacy Devolutions recording server to the {{ en.DGW }} session recording format, allowing you to migrate without losing previous recordings. Once the files are converted to the new format, they will need to be re-indexed from {{ en.DVLS }} such that they can be found in their new location for playback from {{ en.DGW }}.

{% snippet icon.badgeInfo %}
Re-indexing enables the detection of records present on the {{ en.DGW }} side, making it possible to manually transfer the files and then re-index. However, it is not feasible to simply drag & drop the files into the folder; a specific format needs to be adhered to.
{% endsnippet %}  

## Script
From an elevated PowerShell terminal, run `MigrateRecordings.ps1` with the legacy recording output path as parameter:  

```
PS > .\MigrateRecordings.ps1 -LegacyPath "C:\inetpub\recording\output"
Migrating recordings to 'C:\ProgramData\Devolutions\Gateway\recordings'
Migrating 7e05bf2d-c97b-44eb-b256-351b3e2ef1f0 (075503d9-d016-496e-b0aa-cab8b020ce2d)
Migrating 2115ab16-308c-4eb4-a871-73bc8fd69022 (0f366b0e-e09d-4f57-b290-779f46fb68fd)
Migrating 479930c5-705a-4051-9edf-bdc2748452a4 (39a7d0ec-339e-4086-8d73-fbf455e1038a)
Migrating 2e3d219b-48a3-432a-b214-f11b8ddaa32e (b3409164-078b-4013-b4f6-9a4663d3df98)
```
{% snippet icon.badgeInfo %}
If {{ en.DGW }} is configured to use a non-default location, the `-RecordingsPath` can be used to override the default destination path.
{% endsnippet %}  

You can also perform the migration on one machine to manually copy the files over to the {{ en.DGW }} recordings path on a different machine.

{% snippet icon.badgeHelp %}
A sample [legacy.zip](https://github.com/Devolutions/devolutions-gateway/blob/master/tools/legacy-recording/legacy.zip) file containing legacy recordings is available for reference and testing this script.
{% endsnippet %}
