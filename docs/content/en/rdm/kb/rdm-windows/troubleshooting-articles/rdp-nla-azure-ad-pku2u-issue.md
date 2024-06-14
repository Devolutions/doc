---
eleventyComputed:
  title: RDP NLA with Azure AD (PKU2U issue)
  description: When connecting to systems using RDP with Azure AD, users often encounter the "Your credentials did not work" error. This issue stems from the PKU2U protocol, which is not enabled by default in Windows.
---
When connecting to systems using RDP with Azure AD, users often encounter the "Your credentials did not work" error. This issue stems from the PKU2U protocol, which is not enabled by default in Windows.

## Solution 1: Disable RDP NLA
Disabling RDP NLA can resolve the issue but is not recommended due to security concerns.

## Solution 2: Make RDP NLA work with Azure AD (recommended)
Some requirements need to be met for RDP NLA to work with Azure AD. It is the recommended solution even if the process is more complex.

### PKU2U on the RDP client and server
PKU2U needs to be enabled on both the RDP client and server. Use one of the methods below.

#### Group policy method
1. Open the Group Policy Editor (gpedit.msc).
1. Navigate to ***Computer Configuration – Windows Settings – Security Settings – Local Policies – Security Options***.
1. Enable ***Network security: Allow PKU2U authentication requests to this computer to use online identities***.
1. Reboot the server.

#### PowerShell method
1. In PowerShell, run the following command:
   ```powershell
   $Pku2uRegPath = 'HKLM:\SYSTEM\CurrentControlSet\Control\Lsa\Pku2u'
   New-Item -Path $Pku2uRegPath -Force | Out-Null
   Set-ItemProperty -Path $Pku2uRegPath -Name 'AllowOnlineID' -Value '1' -Type DWORD
   ```
1. Reboot the server.

### Windows login
You need to either be logged into Windows with the same Azure AD account or be workplace joined with the same Azure AD user. Note that you can only be workplace joined with up to three users at the same time.

1. On your Windows machine, navigate to ***Settings – Accounts – Email & accounts***.
1. Click on ***Add a work or school account***.
1. Enter your Azure AD credentials, then click ***Sign in***.
1. Wait for the Azure AD workplace join to complete.

### Correct username format
* In MSTSC: Use the format "AzureAD\user@domain.com".
* In a RDP file: Use the format ".\AzureAD\user@domain.com" and leave the domain empty.
* In {{ en.RDM }}: Enable the ***Azure AD host*** option in the RDP entry general properties.

{% snippet, "badgeHelp" %}
Refer to the full article for more information: [RDP NLA with Azure AD: The PKU2U Nightmare](https://awakecoding.com/posts/rdp-nla-with-azure-ad-the-pku2u-nightmare/).
{% endsnippet %}