---
eleventyComputed:
  title: Import/Export
  description: Import entries directly into your Hub or export data in JSON format or using a PowerShell script.
---
Import entries directly into your Hub or export data in JSON format or using a PowerShell script ({{ en.DHUBB }} only). For more flexibility, try our [{{ en.DHUBI }}](/hub/web-interface/tools/hub-importer/).

## Import
Import JSON and CSV entry files in {{ en.DHUB }}.

1. In ***Help & Tools***, click on ***Import***.
![Help & Tools – Import](https://cdnweb.devolutions.net/docs/docs_en_hub_HUBB2018_2024_1.png)
1. Select the format of the imported file (JSON or CSV) between the following options: 
    * RDM (.json)
    * Bitwarden (.json)
    * Bitwarden (.csv)
    * Google Chrome (.csv)
    * KeePass (.csv)
    * LastPass (.csv)
    * 1Password (.csv)

   ![Import format](https://cdnweb.devolutions.net/docs/docs_en_hub_HUBB2019_2024_1.png)
1. Upload the file (one at a time) to your Hub by either dragging and dropping it directly or by selecting a file through your device's file browser.
1. Select a ***Destination {{ en.VLT }}*** ({{ en.DHUBB }} only) and a ***Destination folder***, or create a new folder. This is where the entries are imported.
![Destination {{ en.VLT }} and folder](https://cdnweb.devolutions.net/docs/docs_en_hub_HUBB2020_2024_1.png)
1. Click ***Import***.
1. A summary of all the entries to import will appear. Click ***Complete import***.
![Complete import](https://cdnweb.devolutions.net/docs/docs_en_hub_HUBB2021_2024_1.png)  
The import process takes some time depending on the size of your file. Once the file is imported, you will be brought to where the entries are located.

## Export
Export data in one of two ways:
* [in JSON or CSV using a PowerShell script](#powershell-script-export-type) (only for {{ en.DHUBB }}).
* [in the JSON format](#json-export-type).

### PowerShell Script export type
This method is only available with {{ en.DHUBB }} and requires PowerShell 7 or later.

1. In ***Help & Tools***, click on ***Export***.
![Help & Tools – Export](https://cdnweb.devolutions.net/docs/docs_en_hub_HUBB2022_2024_1.png)
1. Select the ***PowerShell Script*** export type.
![PowerShell Script export type](https://cdnweb.devolutions.net/docs/docs_en_hub_HUBB2025_2024_1.png)
1. [Create an application identity](/hub/web-interface/administration/management/application-users/) and assign it the ***Manager*** role to the {{ en.VLT }} wanted. Once done, you have the choice to [automatically](#automatically-fill-in-the-information) or [manually](#manually-fill-in-the-information) fill in your information in the PowerShell script.

#### Automatically fill in the information
1. Select the ***Automatic*** option.
![Automatic option](https://cdnweb.devolutions.net/docs/docs_en_hub_HUBB2023_2024_1.png)
1. Enter your application identity's ***Application secret*** and ***Application key*** in the corresponding fields.
1. Enter the ***Destination folder path***. This is where your data will be exported.
1. Choose to export in JSON or CSV.
1. Click ***Download***.
1. Run the downloaded script using PowerShell 7.

Your data has been exported to the destination folder.

#### Manually fill in the information
1. Select the ***Manual*** option.
![Manual option](https://cdnweb.devolutions.net/docs/docs_en_hub_HUBB2024_2024_1.png)
1. Choose to export in JSON or CSV.
1. Copy and paste the script in a PowerShell file (.ps1).
1. In your copied script, change the variables with the appropriate information. See the table below.
   | Variable                | Description                                                                                                     |
   |-------------------------|-----------------------------------------------------------------------------------------------------------------|
   | `$url`                  | Enter your {{ en.DHUBB }} URL. This variable is automatically filled in, but it is still possible to change it. |
   | `$appSecret`            | Enter the application user's ***Application Secret***.                                                          |
   | `$appKey`               | Enter the application user's ***Application key***.                                                             |
   | `$pathToExportedFolder` | Enter the ***Destination folder path*** This is where your data will be exported.                               |

   ![Variables in PowerShell](https://cdnweb.devolutions.net/docs/en/kb/KB2082.png)
1. Run the script using PowerShell 7.

Your data has been exported to the destination folder.

### JSON export type
1. In ***Help & Tools***, click on ***Export***.
![Help & Tools – Export](https://cdnweb.devolutions.net/docs/docs_en_hub_HUBB2022_2024_1.png)
1. Select the ***JSON*** export type.
![JSON export type](https://cdnweb.devolutions.net/docs/docs_en_hub_HUBB2026_2024_1.png)
1. Select a {{ en.VLT }} to export ({{ en.DHUBB }} only) and customize the two related options.
    * ***Obfuscate sensitive values***: This option is enabled by default. Your sensitive information will be harder to decypher. For security purposes, it is recommended to leave it checked.
    * ***Include attachments and documents***: If enabled, this option allows you to also export the attachments and documents in your folders and entries.
1. Select the folders and entries to export.  
![Select the folder(s) to export](https://cdnweb.devolutions.net/docs/docs_en_hub_HUBB2027_2024_1.png)
1. Click ***Download*** to export your selection in JSON format. The JSON file can be imported in {{ en.RDM }}, {{ en.DHUBB }}, or {{ en.DHUBP }}.