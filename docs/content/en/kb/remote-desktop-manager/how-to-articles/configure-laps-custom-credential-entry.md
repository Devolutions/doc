---
eleventyComputed:
  title: Configure LAPS with a custom credentials entry
  description: The following guide describes how to add a PowerShell script in a custom credentials entry to connect on a remote machine using Windows LAPS.
---
The following guide describes how to add a PowerShell script in a custom credentials entry to connect on a remote machine using [Windows LAPS](https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-overview) (formerly Microsoft Laps).

{% snippet, "badgeInfo" %}
Windows LAPS is required and must be properly configured in your environment to use this solution.
{% endsnippet %}

1. In {{ en.RDM }}, create a new entry in the ribbon under the ***Edit*** tab.
1. In Credential management, select the ***Custom*** entry type.
![Create a Custom credentials entry](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2334.png)
1. Name your entry and select its destination folder.
1. In the ***General*** tab, make sure the drop-down menu is set to ***PowerShell***.
![Set the drop-down menu to PowerShell](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2335.png)
1. Add the following PowerShell script in the ***Command*** box.
   {% snippet, "badgeInfo" %}
   Please note that the script uses the $HOST$ variable for the `-ComputerName` switch of the `Get-LapsADPassword` cmdlet and use the $PARAMETER1$ variable for the username (see step 6 below).
   {% endsnippet %}

   ```powershell
   Import-Module LAPS -ErrorAction SilentlyContinue
   $isImport = Get-Module -List LAPS
   if ($isImport)
   {
       try
           {
            $null2 = [System.DirectoryServices.ActiveDirectory.Domain]::GetComputerDomain()
            $isDomain = $true
           }
       catch
           {
            $isDomain = $false
           }

       if ($isDomain)
       {
           $MyPassword=Get-LapsADPassword -Identity $PARAMETER1$ -AsPlainText
           if ($MyPassword.Password)
              {
               $Result.Username="%USERNAME%"
               $Result.Password=$MyPassword.Password
              }
           else
              {
               $Result.Cancel=$True
               $Result.ErrorMessage="LAPS did not return any value!"
              }
       }
       else
       {
           $Result.Cancel=$True
           $Result.ErrorMessage="Your computer must be connected to a domain to use LAPS features!"
       }
   }
   else
   {
           $Result.Cancel=$True
           $Result.ErrorMessage="The LAPS module must be installed in this architecture!"
   }
   ```

   ![Add the PowerShell script](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2336.png)
1. In the ***Parameters*** tab, add the local administrator account name in the ***Parameter #1*** field.
![Set the local administrator account name](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2337.png)
1. Click ***Add*** to save the entry in the specified destination folder.
1. In your RDP entry properties, set the Credentials property to use the newly created ***Custom*** credentials entry.
![Set the Credentials parameter to use the Custom credentials entry](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2338.png)
1. Still in the RDP entry properties, go to ***Advanced – Advanced***.
1. Set the ***Override domain*** property to ***Use Host Name*** and the ***Username format property*** to ***{Domain}\\{User}***.
![Set the advanced properties](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2339.png)
1. Click on ***Update*** to save your changes.

The RDP entry is now ready to be used and connect with the local administrator account managed by Windows LAPS.
