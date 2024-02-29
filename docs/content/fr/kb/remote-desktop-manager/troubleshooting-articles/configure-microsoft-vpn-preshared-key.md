---
eleventyComputed:
  title: Configure a Microsoft VPN with a preshared key
---
The VPN L2TP configuration in {{ en.RDM }} required a Phonebook file. We are also adding a PowerShell script in the VPN session to add the VPN in Windows and inject the Passphrase. Steps are simple but require precise information. In the first step, we need a Phonebook file. I do not cover this example as too many Google search examples exist.

1. Create a phonebook entry with the PBK file.
1. We will configure a Microsoft VPN session.
Important the VPN Name need to be the address that you will connect to. The PowerShell script is not reading the information in the PBK file when creating the local VPN.
![!!KB4243](https://cdnweb.devolutions.net/docs/en/kb/KB4243.png)

Configure the Microsoft VPN entry as:

1. Select the phonebook previously created.
1. Click on the refresh button and select in the dropdown the proper VPN Name.
1. Enter the credentials.

Now it is time for the PreShared key, under ***Common – Custom Fields***, in the ***Custom #1***, click on the name and change it for PreSharedKey (#1). Then enter the Preshared-Key in the field at the right. At the end as a visual protection only click on the lock at the end (#2)
![!!KB4244](https://cdnweb.devolutions.net/docs/en/kb/KB4244.png)
{% snippet icon.badgeCaution %}
The Preshared key is not protected with View Password permission. To prevent the user to see it you need to block the Edit access to the entry.
{% endsnippet %}

The last one and the most important is the integration of the PowerShell which will create the VPN configuration in Windows.

Under ***Events – Before Connect*** select ***PowerShell*** and copy the script above into the box.
```
# Run from elevated PowerShell session (-verb RunAs)
# May need to run commented line below and answer 'A' OR 'Y'
#set-executionpolicy -executionpolicy unrestricted

$wshell = New-Object -ComObject Wscript.Shell;
$ServerAddress = $RDM.Connection.VPN.Name;
$ConnectionName = $RDM.Connection.VPN.Name;
$PresharedKey = $RDM.Connection.MetaInformation.CustomField1Value;

$Exists = Get-VpnConnection -Name $ConnectionName -ErrorAction SilentlyContinue -ErrorVariable ProcessError;
If ($ProcessError) {$wshell.Popup('RDM is creating the VPN  ' + $ConnectionName,0,'Creation',0x0);
$Exists = $False};

If ($Exists -eq $False){;
$ServerAddress = $ServerAddress;
$PresharedKey = $PresharedKey;

Add-VpnConnection -RememberCredential -Name $ConnectionName -ServerAddress $ServerAddress -TunnelType L2tp -L2tpPsk $PresharedKey -AuthenticationMethod Pap -Force -ErrorAction SilentlyContinue;
$ExistsTest = Get-VpnConnection -Name $ConnectionName -ErrorAction SilentlyContinue -ErrorVariable ProcessError;
If ($ProcessError) { $wshell.Popup('VPN ' + $ConnectionName + ' - Cannot be created' + $Error,0,'Error',0x0)} else {$wshell.Popup('VPN ' + $ConnectionName + ' - Succefully Created ',0,'Success',0x0)};
} else {$wshell.Popup('VPN ' + $ConnectionName + ' - Already Exists',0,'Done',0x0)};
```

You are now ready to start the VPN entry and tell me if something goes wrong or if any improvement can be applied.
