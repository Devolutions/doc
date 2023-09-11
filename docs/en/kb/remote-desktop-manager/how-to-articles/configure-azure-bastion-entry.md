---
eleventyComputed:
  title: Configure an Azure Bastion entry in {{ en.RDM }}
  description: '{{ en.RDM }} allows seamless connection to Azure Bastion instances through a VPN/Tunnel/Gateway entry either per connection or shared amongst many.'
---
Microsoft Azure Bastion is a managed service providing both RDP and SSH access to Azure virtual machines (VMs) without their public IP exposure. An hourly billed service, Azure Bastion is tied to a specific Azure Virtual Network, allowing access to all VMs contained within.

{{ en.RDM }} allows seamless connection to Azure Bastion instances through a VPN/Tunnel/Gateway entry either per connection or shared amongst many. Once Azure Bastion is provisioned, add the necessary details to {{ en.RDM }}, authenticate to Azure, and connect to any VMs within the given Azure virtual network.

## Provisioning Azure Bastion for an Azure Virtual Network

1. Open your [Microsoft Azure Portal](https://azure.microsoft.com/en-us/) and sign in to your account.
1. Select ***Virtual Networks*** in the ***Azure services*** section. If you do not see it, click on ***More services*** to make other services appear.

![]()

1. Choose a specific virtual network to add Bastion to (or create one).

![]()

1. In the left menu, click the ***Bastion*** pane to open the details.

    {% snippet icon.badgeInfo %}
   If there is no existing subnet with enough space, then Bastion will only show the ***Configure manually*** button and prompt for the subnet creation. In the image below, subnet `172.16.2.0/64` was provided, and the ***Deploy Bastion*** button becomes enabled once the subnet is added.
   {% endsnippet %}  

![]()

1. Click the ***Deploy Bastion*** button to start the process. 

   {% snippet icon.badgeInfo %}
   This is a multi-step process, which can take 10 minutes or more to complete. 
   * Creates a subnet named `AzureBastionSubnet`.
   * Creates a resource for Azure Bastion - `{Existing Virtual Network}-bastion`.
   * Deploys at least one Bastion application instance.
   * Provisions a public IP tied to the Azure Bastion resource.
   {% endsnippet %}  

1. Once Azure Bastion is provisioned, navigate to the ***Bastion*** pane once again.

1. Select an available VM to connect to.

![]()

1. Enter appropriate local VM credentials under ***Connection Settings***.

![]()

1. Click on ***Connect***. Once connected, a new browser tab opens and shows the connection.

1. Still in the Azure Portal, navigate to the `{Existing Virtual Network}-bastion` resource.

1. In the left menu, click the ***Configuration*** pane.

1. Select the ***Standard*** tier and enable the ***Native client support*** (disabled by default).

   {% snippet icon.badgeInfo %}
   By default, Azure Bastion provisions the ***Basic*** tier, which does not allow for Native Client Support, which {{ en.RDM }} relies on.
   {% endsnippet %}  

1. Save the configuration and allow time to complete the upgrade and feature changes.

   {% snippet icon.badgeCaution %}
   Once you have upgraded, you can no longer downgrade. Therefore, make sure you intend to do so, and be aware of the associated price increase.
   {% endsnippet %}  

## Connecting {{ en.RDM }} to Azure Bastion

With Azure Bastion now configured, you can now configure {{ en.RDM }} to connect to VMs behind Azure Bastion. 

1. Before connecting, locate the following property details:

   * ***Host***
   * ***Subscription ID***: It is assumed to be the same as the Azure Bastion Host, in which case it can be omitted.
   * ***Resource Group***: It is assumed to be the same as the Azure Bastion Host, in which case it can be omitted.
   * ***Tenant ID***: It is only needed if it is not the default tenant for the Azure user.

   For more information, see this table:

   | Property | Example value | Notes |
   | --- | --- | --- |
   | ***Host*** | `Devolutions-202309011056-vnet-bastion` | This value is derived from `{Existing Virtual Network}-bastion` and is not the provided Public DNS or Public IP value found in the resource information. |
   | ***Subscription ID*** | `6f14d593-b33a-48ca-81es-428eeb0ff8b1` | Locate this value by navigating to ***Subscriptions***. Then, select your specific subscription and copy the ***Subscription ID*** value. |
   | ***Resource Group*** | `Devolutions-202309011056` | It is the Resource Group that the Virtual Network and attached Bastion object is located in. |
   | ***Tenant ID*** | `76377918-3e78-4fd7-b07a-6eb5d4bbf18f` | Either click the “…” button next to the ***Tenant ID*** in {{ en.RDM }} to populate the field or manually locate this value by navigating to Azure Active Directory, choosing the ***Properties*** tab, and copying the ***Tenant ID*** value. |

1. With details in hand, open {{ en.RDM }} and navigate to where you want your Azure Bastion entry to be.

1. 
