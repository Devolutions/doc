---
_schema: default
eleventyComputed:
  title: PAM {{ en.VLT }}s
  description: PAM {{ en.VLT }}s are one of the key features of {{ variables.DVLS.en }} privileged access management module. They are secure vaults that allow admins to manage their different privileged accounts.
  status:
  keywords:
---
PAM {{ en.VLT }}s are one of the key features of {{ variables.DVLS.en }} privileged access management module. They are secure {{ en.VLT }}s that allow admins to manage their different privileged accounts.

The [security options of the folder](/pam/server/accounts/) thus created can be further customized if need be. The [approvers can also be customized directly on the folder](/pam/server/accounts/), which gives a list of its administrators.

For more information related to PAM providers, settings, scans and importations, consult our [getting started topic](https://docs.devolutions.net/pam/server/getting-started/ "Getting started").

## PAM {{ variables.VLT.en }} creation

In ***Administration*** – ***Privileged Access*** – ***PAM {{ en.VLT }}s***, create at least one PAM {{ en.VLT }} to contain privileged accounts.

![PAM {{ variables.VLT.en }}](https://cdnweb.devolutions.net/docs/docs_en_server_ServerOp2112.png)

Alternatively, PAM {{ en.VLT }}s can be created by clicking the ellipsis button located next to existing PAM {{ en.VLT }}s and in the {{ variables.NPANE.en }}.

![Add PAM {{ variables.VLT.en }}](https://cdnweb.devolutions.net/docs/DVLS4038_2024_2.png "Add PAM vaults")

![Add PAM {{ variables.VLT.en }}](https://cdnweb.devolutions.net/docs/DVLS4040_2024_2.png "Add PAM vaults")

## PAM {{ en.VLT }} setup

Once this is done, the setup window for a new PAM {{ en.VLT }} should appear.

![PAM setup](https://cdnweb.devolutions.net/docs/DVLS4039_2024_2.png "PAM setup")

Start by entering a ***Name*** for your PAM vault (mandatory) and a ***Description*** (optional). Then, set its visibility:

* ***Private***: A private PAM {{ en.VLT }} is not visible to users that do not have access to it. Thus, vault access requests cannot be performed. You can only access it by invitation.
* ***Public***: A public {{ en.VLT }} is visible to all users of the data source, even to those who do not have access to it. A user can request access to the public {{ en.VLT }}.

When clicking ***Add***, the new PAM {{ en.VLT }} will be created. It can then be found in ***Administration*** – ***Privileged access*** – ***PAM {{ en.VLT_MAJ }}s***.

![PAM {{ variables.VLT.en }}](https://cdnweb.devolutions.net/docs/DVLS4041_2024_2.png)