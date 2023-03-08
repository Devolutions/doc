---
title: Configure LAPS with a Custom Credential entry
---
The following guide describe how to add a PowerShell script in a Custom Credential entry to connect on remote machine using [Microsoft LAPS](https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-overview).

{% snippet icon.badgeInfo %}
[Microsoft LAPS](https://learn.microsoft.com/en-us/windows-server/identity/laps/laps-overview) is required and must be properly configured in your environment to use this solution.
{% endsnippet %}

## Steps

1. In {{ en.RDM }} , create a new Custom Credential entry.  
![Create a Custom Credential entry.png](/img/en/kb/KB8115.png)  
1. Add the following PowerShell script in General - Command.
   - Please note that it uses the $HOST$ variable for the -ComputerName switch of the Get-AdmPwdPassword cmdlet and use the $PARAMETER1$ variable for the username (see step 3 below).  
      ```
      Import-Module AdmPwd.PS -ErrorAction SilentlyContinue
      $isImport = Get-Module -List AdmPwd.PS
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
          $MyPassword=Get-AdmPwdPassword -ComputerName:$HOST$
          if ($MyPassword.Password)
          {
            $Result.Username=$PARAMETER1$
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
      ![Add the PowerShell script in General - Command.png](/img/en/kb/KB8116.png)  

3. Add the local administrator account name in the Parameter #1 field of the Parameters tab.  
![Set local administrator account name in Parameters - Parameter #1.png](/img/en/kb/KB8117.png)  

1. Save the Custom Credential entry.

1. In the RDP entry properties, set the Credentials property to use the newly created Custom Credential entry.  
![Set Credential parameter to use the Custom Credential entry.png](/img/en/kb/KB8118.png)

1. In Advanced - Advanced of the RDP entry, set the Override domain property to Use Host Name and the Username format property to {Domain}\{User}.  
![Set Advanced properties.png](/img/en/kb/KB8119.png)
1. The RDP entry is now ready to be used and connect with the local administrator account managed by Microsoft LAPS.
