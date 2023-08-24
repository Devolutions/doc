---
eleventyComputed:
  title: Remote Desktop Manager {{ en.MAC }} – Enable integrated authentication with Kerberos
---
To use Integrated Authentication (Windows Authentication) on {{ en.MAC }}, you will need to setup a ***Kerberos ticket*** linking your current user to a Windows domain account. A summary of key steps are included below.  

{% snippet icon.badgeWarning %}
This experimental feature has worked in our internal tests and is a workaround to the integrated security feature which does not work on {{ en.MAC }} with SQL Server.  

That being said, the initial implementation of Kerberos was meant to help our community with using this authentication method. However, multiple changes have been made on the Kerberos side since the implementation, so it is possible that this method is now outdated.
{% endsnippet %}  

## Pre-requisite: get the Kerberos Domain Controller (KDC) config

We offer two methods, the manual discovery or a PowerShell Script  

Run on: Windows PC that is joined to your Active Directory Domain. Note that any production grade domain will have more than one domain controller. Either of the following methods could answer with a different server depending on a multitude of factors. Be prepared to run this discovery again if the designated server becomes unavailable.  

### Manual Discovery  

{% snippet icon.badgeInfo %}
**nltest.exe** is a console utility that you can run using the basic command interpreter or PowerShell.
{% endsnippet %}  

Run nltest in the command shell of your choice.  

```
nltest /dsgetdc:%USERDNSDOMAIN%  

DC: \\dc-33.domain.company.com  
Address: \\2111:4444:2111:33:1111:ecff:ffff:3333  

The command completed successfully  
```
Copy the DC name which is the required KDC configuration value, in this case dc-33<area>.domain.company.com  

### PowerShell Script 

Run the following in a PowerShell window (remember that the PC must be joined to the target domain)  

```
$dcinfo = Get-ADDomainController -Discover
Write-Output "Domain name $($dcinfo.Domain)"
Write-Output "Domain Controller $($dcinfo.HostName)"
Write-Output "`nSuggested krb5.conf content`n-----------------------------------------"
Write-Output "[libdefaults]"
Write-Output "default_realm = $($dcinfo.Domain.ToUpper())"
Write-Output "
Write-Output "[realms]`n$($dcinfo.Domain.ToUpper()) = {"
Write-Output "kds = $($dcinfo.HostName)"
Write-Output "}"
```
## Setup Kerberos on Mac

### Step 1: Configuring KDC in krb5.conf

Edit the /etc/krb5.conf in an editor of your choice, note that you need to elevate your privileges (sudo or other). If you have obtained the result of the PowerShell script, simply copy the appropriate lines.  Follows the steps needed if you used the manual discovery.  

{% snippet icon.badgeCaution %}
The domain must be in ALL CAPS
{% endsnippet %}  

Configure the following settings:  

```
[libdefaults]  
 default_realm = DOMAIN.COMPANY.COM  

[realms]  
DOMAIN.COMPANY.COM = {  
 kdc = dc-33.domain.company.com  
}  
```
Then save the krb5.conf file and exit.  

### Step 2: Testing the Ticket Granting Ticket retrieval

Use the command kinit username<area>@DOMAIN.COMPANY.COM to get a TGT from KDC. You will be prompted for your domain password.  

`kinit username<area>@DOMAIN.COMPANY.COM`  

Use klist to see the available tickets. If the kinit was successful, you should see a ticket.  

```
klist  

krbtgt/DOMAIN.COMPANY.COM@ DOMAIN.COMPANY.COM.  
```
### Step 3: Connect in {{ en.RDM }}

1. Create a new SQL Server data source.
1. Fill in the data source information (Name and Host).
1. Select the “ ***Integrated Security (Active Directory) - Experimental*** ” mode.
1. Select the database.
1. Save the data source.  
![!!KB4792.png](https://webdevolutions.azureedge.net/docs/en/kb/KB4792.png)  

If you have followed all the steps above, you should be able to connect successfully to the data source.
