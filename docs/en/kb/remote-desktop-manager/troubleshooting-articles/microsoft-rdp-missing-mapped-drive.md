---
title: Microsoft RDP Missing Mapped Drives
---
Mapped network drives are not available in RDP sessions even though you have selected All drives; or are not displayed in the dialog when attempting to add Specific Drives using the More button.  

This problem happens when you start {{ en.RDM }} with elevated privileges (Run as administrator). Mapped drives are not available from an elevated prompt when UAC is configured to Prompt for credentials in Windows.  

This issue is not caused by {{ en.RDM }} , you will need to apply a fix on all workstations from which you must launch {{ en.RDM }} with elevated privileges.  

![KB4052.png](/img/en/kb/KB4052.png)

## Solution
### Method 1

1. Click on ***Windows Start*** , type ***Run*** and open the app.
1. Type ***gpedit.msc*** to open the ***Local Group Policy Editor*** and ***allow*** the app to make changes.
1. Locate the following ***Group Policy*** path:  

    Local Computer Policy\Windows Settings\Security Settings\Local Policies\Security Options  

1. Configure the following policy to ***Prompt for consent*** :  

    User Account Control: Behaviour of the elevation prompt for administrators in Admin Approval Mode  

### Method 2
Map the required drives again in the elevated session. A good solution would be to create a batch/command file that starts by mapping the drives again, then launches {{ en.RDM }}
