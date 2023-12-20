---
eleventyComputed:
  title: Export and import entries
  status: Topic available in German language
---
{% youtube 'jipoCzhIEs8' %}

It is possible to export and import entries from one type of data source to another. There are many ways of exporting entries with {{ en.RDM }}.

{% snippet icon.badgeCaution %}
If you have users who override entry properties with ***User Specific Settings***, they will be required to export and import their ***User Specific Settings List***. See [Export and Import User Specific Settings](/kb/remote-desktop-manager/how-to-articles/export-import-user-specific-settings/).
{% endsnippet %}

The first method is done directly in [{{ en.RDM }}](#exportimport-through-remote-desktop-manager), while the second one uses a [PowerShell script](#exportimport-using-powershell).

## Export/Import Through {{ en.RDM }}
1. In {{ en.RDM }}, select your data source in the ***{{ en.NPANE }}***.
   {% snippet icon.badgeNotice %}
   To export the entire {{ en.VLT }}, go to ***File*** – ***Export*** – ***Export {{ en.VLT }} (.rdm)*** and skip to step 4.
   {% endsnippet %}  

1. Select the entries and/or folders you wish to export. Use the <kbd>Ctrl</kbd>+click shortcut to select multiple items at once.
1. Right-click on the selection. In the contextual menu, select ***Export*** – ***Export Selection (.rdm)***.  
![Export Selection (.rdm)](https://webdevolutions.azureedge.net/docs/en/kb/KB4998.png)
1. In the ***Export Entries*** window, check the options that you want to enable. For a typical migration, check the ***Include credentials, Include attachments and documents***, and ***Encrypt with master key*** options.
   {% snippet icon.badgeInfo %}
   By default, credentials are **not** included. It is critical to check the ***Include credentials*** option for the exported data to include them.
   {% endsnippet %}  
   {% snippet icon.shieldWarning %}
   Specifying a master key will encrypt the entire content of the **.rdm** file to protect it. It is highly recommended as a backup measure, but the key is absolutely necessary for decryption. Store it in a separate storage device for added security.
   {% endsnippet %}  

   ![Entry Export Options](https://webdevolutions.azureedge.net/docs/en/kb/KB4839.png)
1. Click ***OK***.
1. Save the **.rdm** file on your computer.
1. In the ***{{ en.NPANE }}***, select the data source and {{ en.VLT }} in which to import the entries.
1. Right-click on the folder and select ***Import*** – ***Import (.rdm)***.
![Import (.rdm)](https://webdevolutions.azureedge.net/docs/en/kb/KB4999.png)
   {% snippet icon.badgeNotice %}
   You can import the entire {{ en.VLT }} in ***File*** – ***Import*** – ***Import (.rdm)***.
   {% endsnippet %}  

1. Locate the **.rdm** file saved on your computer and click ***Open***.
1. Select if you wish to ***Import in root***, ***Import in current folder***, or ***Import in specific folder***.
![Location of Imported Entries](https://webdevolutions.azureedge.net/docs/en/kb/KB5000.png)
1. Click ***OK***.
1. In the next dialog, you will be presented with a list of all the entries that are in the data file. You can select specific entries you wish to import or ***Select All*** to import all your entries.
   {% snippet icon.badgeCaution %}
   If you have users who override entry properties with ***User Specific Settings***, uncheck ***Change ID***.
   {% endsnippet %}  

1. Click ***OK***.

## Export/Import Using PowerShell
The following PowerShell script is intended for exporting all entries from a data source into **.rdm** files. One file per repository will be created. Before being able to export the entries from the data source, some preparations are required.

1. Install {{ en.RDM }} on the machine where the PowerShell script will be running.
1. Create a new data source configuration in {{ en.RDM }} within the user's Windows profile.
1. Set up proper permissions on the destination folder for the user account that will run the script.
1. Update the password in the script.
1. Adapt the destination path in the script where the **.rdm** files will be saved.
1. Save the PowerShell script in a **.ps1** file on the computer on which it will run.
1. Create a scheduled task to run the script on a regular basis.  

   ```powershell
   Import-Module 'C:\Program Files (x86)\Devolutions\Remote Desktop Manager\RemoteDesktopManager.PowerShellModule.psd1'

   $ds = Get-RDMDataSource -Name "NameOfYourDataSourceHere"
   Set-RDMCurrentDataSource $ds

   # Update the password
   $passwd = ConvertTo-SecureString -AsPlainText -Force "YourPasswordHere"

   $repos = Get-RDMRepository

   foreach ($repo in $repos)
   {
       Set-RDMCurrentRepository $repo
       Update-RDMUI

       $sessions = Get-RDMSession
       $reponame = $repo.name

       # Adapt the destination path for the .rdm files
       Export-RDMSession -Path "C:\temp\$reponame.rdm" -Sessions $sessions -IncludeCredentials -XML -Password $passwd
   }
   ```
