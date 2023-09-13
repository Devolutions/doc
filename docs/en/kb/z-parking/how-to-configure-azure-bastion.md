---
eleventyComputed:
  title: Configure Azure Bastion
  description: How to configure Azure Bastion in Remote Desktop Manager
---
Azure Bastion is a comprehensive, fully managed service that provides enhanced security and effortless Remote Desktop Protocol (RDP) and Secure Shell Protocol (SSH) access to virtual machines (VMs), while ensuring that they remain shielded from public IP address exposure.

Azure Bastion is compatible with the latest versions (2023.1.x) of {{de.RDM }}. The integration is based on two requirements: the Bastion host must be in ***standard SKU***, and the ***native client support feature*** must be enabled. These requirements are necessary to use Bastion from a native client. 

Azure Bastion is presented as a ***VPN type*** in {{ en.RDM }}. 

![Azure Bastion in {{ en.RDM }}](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6097.png)

In the most straightforward scenario, you can create an RDP connection entry that corresponds to your Azure virtual machine resource. The host name should precisely match the resource name in Azure. Next, navigate to the ***VPN/SSH/Gateway*** tab, where you'll choose ***Always Connect*** and opt for ***Azure Bastion***. The configuration of the Bastion connection can be fine-tuned in the ***Settings*** section, specifically in the ***Azure Bastion*** tab page.

![RDP connection entry representing the virtual machine resource](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6098.png)

It is imperative that you provide the required information, including the ***Host*** (referred to as the Bastion name), ***Subscription ID***, and ***Resource Group***. This information refers to the subscription and resource details specific to Bastion. To illustrate, we assume that in this case both the Bastion and the virtual machine coexist within the same subscription and resource group.


It is important to note the ***connection mode*** configuration. The RD Gateway option, while significantly faster, involves retrieving an .rdp file from the Bastion, which is then executed. However, it is important to note that the RD Gateway only supports RDP. If your requirements extend to functionalities such as non-standard ports or SSH, it is imperative to switch to the ***TCP Tunnel*** mode. This mode mirrors the functionality of the ***az cli Bastion tunnel command***.

![Connection mode configuration](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6099.png)

Lastly, please examine the authentication settings carefully. You have the option to attempt the utilization of the existing Azure PowerShell and/or az cli login context(s), or alternatively, employ interactive authentication. Optionally, you may also furnish a username hint in this process.

![Authentication settings](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6100.png)

Upon initiating your RDP connection to the virtual machine, the initial step involves {{ en.RDM }} establishing a connection to the VPN (Azure Bastion). 

For interactive authentication, and particularly if your credentials are not yet cached, you will encounter a prompt to authenticate against the Azure portal. Once the Bastion connection has been successfully established, the RDP session will commence.
