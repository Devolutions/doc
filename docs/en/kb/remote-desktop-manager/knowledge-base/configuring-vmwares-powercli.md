---
title: Configuring VMware's PowerCLI for use by Remote Desktop Manager
---
The [VMware PowerCLI](http://www.vmware.com/support/developer/PowerCLI/index.html) is used by {{ en.RDM }} to interact with vSphere/vCenter in three distinct cases:
1. Getting the list of virtual machines from a vSphere/vCenter;
1. Performing operations on these virtual machines (start, stop, etc); and
1. Launching a VMware Remote Console.  
{% snippet icon.badgeCaution %}
Some operations are not allowed on the Free edition of VMware Esxi. All operations acting on the state of the virtual machine need the vSphere API license.
{% endsnippet %}  

As a service to our community, we will provide the procedure to get the PowerCLI up and running. Please remember that this is not a product of Devolutions and that we have no control over breaking changes that may occur between versions of the PowerCLI. You should always refer to the manufacturer's documentation.
## Procedure  
{% snippet icon.badgeInfo %}
This procedure is valid for version 6.5 of VMware's PowerCLI.
{% endsnippet %}  
{% snippet icon.badgeCaution %}
The [bitness](https://en.wiktionary.org/wiki/bitness) of both {{ en.RDM }} and the PowerCLI must be taken into account for this procedure. Since these steps are performed only once, we would recommend that you follow the procedure for BOTH the 32 bit and the 64 bit editions of the PowerCLI.
{% endsnippet %}  

1. Ensure that PowerShell's script execution policy is configured. Please refer to Script Execution Policy.
1. Launch VMware vSphere PowerCLI using the shortcut on your system, this is the 64 bit version (using ***Run As Administrator*** ).
1. Launch VMware vSphere PowerCLI (32-Bit), adjust both windows side by side(using ***Run As Administrator*** ).
1. In both windows, set the SSL certificate setting of your choice. Obviously deploying a valid certificate on the vSphere server and trusting the Certification Authority is the most secure route. In secure environments or in a low-risk setting, we simply set to ignore.  

    `set-PowerCLIConfiguration -invalidCertificateAction "ignore" -confirm:$false`
5. Connect to a vSphere/vCenter server. If there are prompts by the PowerCLI, respond accordingly.  

    `Connect-VIServer {your server}`
6. Run the following command to see if there are error messages:  

    `Get-View -ViewType VirtualMachine | select -Property Name, {$_.Moref.Value};`  

If you see no error messages, you can close both PowerCLIs and you are now ready to test it using {{ en.RDM }}
