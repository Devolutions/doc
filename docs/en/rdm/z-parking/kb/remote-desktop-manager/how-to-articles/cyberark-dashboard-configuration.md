---
eleventyComputed:
  title: CyberArk Dashboard configuration and use
  description: The purpose of the ***CyberArk Dashboard*** entry is to provide {{ en.RDM }} users with an interface that eliminates the need to use Password Vault Web Access (PVWA) to see the list of safes and credentials that the currently logged on user has access to.
---
The purpose of the ***CyberArk Dashboard*** entry is to provide {{ en.RDM }} users with an interface that eliminates the need to use Password Vault Web Access (PVWA) to see the list of safes and credentials that the currently logged on user has access to. Combined with password-less scenarios and/or our rich role-based access control (RBAC), this means that a user does NOT need to know the CyberArk credentials to be presented with a list of accounts they have access to. Additionally, since the dashboard is meant to authenticate once to your server and, most importantly, maintain an active session for as long as it is active, it has the significant advantage of only requiring MFA once when you launch the dashboard.

Another design principle of the dashboard is that its main usage model is to go through the CyberArk Privileged Session Manager (PSM) to reach assets. This means that {{ en.RDM }} does NOT need to read the password for the account to be used. Less secure models are available to support older scenarios that some of our customers are still using.

{% snippet, "badgeHelp" %}
Learn more about the [CyberArk MFA delimiter option](/kb/remote-desktop-manager/knowledge-base/mfa-delimiter-cyberark/).
{% endsnippet %}

## Configuration
1. Create a new ***CyberArk Dashboard*** entry or go to the ***Properties*** of your existing one.
1. In the ***General*** section, specify a ***Name*** and ***Folder*** for your entry if that is not already done.
![CyberArk Dashboard Properties – General – Name and Folder](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2166.png)

### General tab
3. Enter the ***Web services URL*** to connect to your CyberArk instance. It is the address of the server and should look like "https://&lt;server name&gt;.&lt;our domain&gt;.loc/".
![General Tab](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2068.png)
   {% snippet, "badgeInfo" %}
   The following is what your ***Web services URL*** will be, depending on your CyberArk subscription:
   * ***SelfHosted***: Short URL
   * ***PrivilegeCloud***: Short URL if the URL does not end in "cyberark.cloud"
   * ***PrivilegeCloud***: /privilegecloud if the URL ends in "cyberark.cloud"
   {% endsnippet %}

4. Enter a ***Virtual directory***. This field is either /privilegecloud or empty.
5. Select a ***Version*** in the drop-down list. This refers to the CyberArk PVWA version seen on the CyberArk authentication page.
   {% snippet, "badgeInfo" %}
   Please note that we only support the CyberArk V12 API for now and that CyberArk version 12.1 is required.
   {% endsnippet %}

6. Select the ***Authentication mode*** used to connect to the CyberArk instance (***CyberArk***, ***Windows***, ***LDAP***, ***RADIUS***, or ***SAML***).
   {% snippet, "badgeNotice" %}
   SAML authentication is supported with CyberArk since version 2022.3.25 of {{ en.RDM }}, but important improvements and bug fixes have been implemented in ulterior versions. We recommend to at least update to the 2023.1 version of {{ en.RDM }} if your current version is older. One of the improvements in version 2023.1 is that you no longer have to provide the ***IdP sign-in URL*** when configuring your SAML authentication. If you have trouble with your SAML authentication, consult [SAML Configuration and Troubleshooting](/kb/remote-desktop-manager/troubleshooting-articles/saml-configuration-troubleshooting-cyberark-dashboard/).

   SAML authentication for CyberArk Privilege Cloud requires {{ en.RDM }} 2023.2.17 or newer.

   Your CyberArk {{ en.VLT }} administrator should provide you with the authentication model being used, but if, in the PVWA, you click on a link that matches your corporate domain name, this indicates that the LDAP model is being used. The icon looks like the following:
   ![LDAP CyberArk Icon](https://cdnweb.devolutions.net/docs/docs_en_kb_iconldapcyberark.png)
   {% endsnippet %}

7. In the ***Authentication credentials*** drop-down list, select ***Custom*** to enter your credentials below or select them using a {{ en.RDM }} mechanism. This list is not available with the ***SAML Authentication mode***.
   {% snippet, "badgeNotice" %}
   As with all ***Dashboard*** entries in {{ en.RDM }}, if you are creating an entry that will be visible to multiple users, we recommend choosing ***My Account Settings PVWA***, then visiting ***File – My Account Settings – CyberArk PVWA*** to enter your personal CyberArk credentials.
   {% endsnippet %}

8. Follow this step if you selected ***Custom*** in the ***Authentication credentials*** list. If not, skip to the [Advanced tab](#advanced-tab) section.
    1. Enter your ***Username*** and ***Password*** in the corresponding fields. Use the ***Password generator*** to help you create a secure password.
{type="a"}
    1. Check the ***Always ask password*** box to be prompted for your password each time you connect.
    1. If you have a RSA SecurID code, check the ***Append RSA SecurID code to password*** box, then select below the ***RSA SecurID source***.

### Advanced tab

#### General
9. The ***Auto refresh*** option is enabled by default. It maintains the connection to your CyberArk environment and removes the need to enter 2FA credentials on every connection. It is recommended to leave it enabled.
![Advanced Tab – General](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4930.png)
1. Check ***Open sessions externally*** if you do not want your sessions to open in embedded mode in {{ en.RDM }}. This is mostly useful for applications that only support being open externally, such as PSM-Putty (PSM-SSH) and many other PSM connection components. It is required to connect to remote applications using PVWA connections.
   {% snippet, "badgeInfo" %}
   For most connection components requiring the opening of an application on PSM, the ***Open Externally*** option must be enabled. This is due to a limitation of the RDP ActiveX we use, which does not support RDP RemoteApp mode. However, this limitation can be mitigated by setting a connection component parameter in CyberArk. This parameter is called DisableRemoteApp and must be set to ***Yes***. For more information, see [CyberArk's documentation page](https://docs.cyberark.com/PrivCloud-SS/Latest/en/Content/Privilege%20Cloud/PrivCloud-psm-UX.htm) on the subject.
   {% endsnippet %}
1. Check ***Allow connect to host*** if you want to allow a direct connection to the remote machine, meaning that the currently logged on user needs to have the right to view the password; it is therefore less secure and is not recommended by the CyberArk team.
1. Check ***Ask for reason*** if you are required to have a reason to establish a connection.
1. Check ***Ask for ticket number*** if you are required to provide a ticket number to establish a connection depending of your CyberArk configuration. The ***Ticketing system*** field that is paired with this option is a string value that makes sense in your environment. It is informative and we send it along with the number.
1. The ***Default Save*** loads your Safes. You can also check the ***Load favorites by default*** box to load your favorite safes.
1. Set the default ***Username format*** to be able to connect to the remote machine. It can also be changed in the dashboard for ad hoc connections, but this will be the default format for this dashboard instance.
1. Select the ***Domain search method*** in the drop-down list.
1. The ***Domain field*** drop-down list is only relevant when the ***Username format*** is set to the ***Field*** value. Depending on how your {{ en.VLT }} was set up, there can be various CyberArk fields used to hold the domain information. Choose the value that corresponds to your {{ en.VLT }} settings.

#### PVWA
18. The ***Allow direct connections (PVWA)*** option is enabled by default and is the recommended method. It allows the exact same action as the ***Connect*** button offers in PVWA.
![Advanced Tab – PVWA](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2263.png)
1. In the ***Connection components*** box, enter the components you wish to use for your connections. We initialize the field with the default components of a vanilla CyberArk installation, but this list MUST match the components configured in your {{ en.VLT }}.
1. Since {{ en.RDM }} version 2023.2.24, there is a new feature called ***Override RDP Settings***. By default, RDP settings are fetched from CyberArk PVWA when generating the PSM session. This new option allows you to ignore settings provided by CyberArk and apply the ones specified in the ***CyberArk Dashboard*** entry instead. This override is for all PSM sessions established from this dashboard to have different display settings. One might consider creating different instances of the dashboard entry to reflect different users' preferences.
![Override RDP Settings](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2264.png)
   {% snippet, "badgeInfo" %}
   {{ en.RDM }} and {{ en.DVLS }} versions must be at least 2023.2.28 and 2023.2.8 for ***Override RDP Settings*** to work.
   {% endsnippet %}

#### PSM
21. The ***Allow connect using PSM (alternate shell)*** option is disabled by default. Enable it if you want to allow connections via PSM, but using the legacy method of providing an alternate shell.
![Advanced Tab – PSM](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4932.png)

Here are the restrictions related to PSM:
```powershell
PSM Alternate Shell PSM /u <account to use> /a <endpoint> /c <component> restrictions
```
* A user must connect to the PSM server via RDP and be granted permission to do so.
* PSM has to be able to link the LDAP account with a CyberArk PVWA profile (could work with a SAML Azure AD when LDAP is cloned on Azure AD)
* The ***account to use*** must be found without any ambiguity in the CyberArk {{ en.VLT }}.

{% snippet, "badgeCaution" %}
This is provided as a convenience and is not recommended by the CyberArk team. It has some limitations when compared to the ***Connect*** action from PVWA which uses a limited lifetime token.

You must have a PSM Server entry configured in the same {{ en.VLT }}. Select it in the ***PSM server*** drop-down list.
{% endsnippet %}

## Using the Dashboard
{% snippet, "badgeInfo" %}
Please note that for the sake of clarity, this section will only provide information about the main usage model of connecting through the PSM.
{% endsnippet %}

### User interface
![CyberArk Dashboard User Interface](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2072.png)

1. The ***Actions*** menu allows you to:
    * Log in or out from the dashboard.
    * Connect to a host using the selected credentials.
    * Refresh the content of the safe.
    * Add a safe to your favorites.
1. The top menu allows you to:
    * Select a safe to connect to.
    * Select the ***Username format***.
    * Allow or disallow the session to ***Open externally*** (not embedded in {{ en.RDM }}).
    * Refresh the content of the safe.
    * Enable or disable the ***Auto refresh***. If disabled, PSM connections may require MFA upon every connection.
1. The content area allows you to see and interact with the accounts within a safe or group. You can see the ***Account***, its ***Address***, its ***Platform***, and the ***Safe*** in which it is located.

### Selecting a safe
With the safe selector, you can browse your safes and select the one you wish to use.

![Safe Selector](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2069.png)

1. The upper section of the drop-down list contains a subset of the safes that one has access to. You can also see and manage the list of excluded safes in ***File – Settings – Types – CyberArk***.
1. ***Favorites*** will display accounts that have been tagged as favorites, but from within {{ en.RDM }}. This is not a CyberArk functionality.
1. ***Show all*** will list all accounts that the user has access to. For certain users, this we be a sizeable list and will not be a quick operation. It is provided for users that have access to a finite list of accounts.
1. ***Browse...*** will display the safe selection dialog, where there is paging and filtering to help the user to locate the relevant safe. Again, they are listed by default in the order received from CyberArk.

Below is a preview of the ***CyberArk Select Safe*** page that appears after selecting ***Browse...*** in the safe selector.
![CyberArk Select Safe](https://cdnweb.devolutions.net/docs/docs_en_kb_KB4934.png)

In this view, if you select a safe and click ***OK***, you will then be able to view the accounts from that safe.

![Accounts View](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2073.png)

### Connecting to a host
After selecting the account you wish to use, you can either use the ***Connect*** button in the ***Actions*** menu or right-click and select the appropriate connection component.

![Connect to an Account](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2070.png)

In both cases, you will then see a dialog box that allows you to specify the host you want to connect to.

### Selecting a host
![CyberArk Select Host](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2071.png)

1. ***Host*** field
    * If the CyberArk Remote machine access field is used in the account properties, the endpoints that were entered will be listed in this field. It allows for connections even for assets that are not managed in {{ en.RDM }}.
    * If the CyberArk Remote machine access field is not used, you can type in any name in the control to connect to it. Please note that name resolution is performed at the PSM level. Therefore, please adhere to the standards of your CyberArk installation to achieve success.
1. Filter field: Type in characters that fit an asset name to have a filter applied in the grid below.
1. The grid will display entries that represent a host system. Therefore, connect to the one that represents the endpoint you need to connect to.

### Using the {{ en.RDM }} ***{{ en.NPANE }}*** to establish connections
After selecting the account in the CyberArk Dashboard, you can also use the ***{{ en.NPANE }}*** to select a host by right-clicking an entry and navigating to the ***Connect using*** menu.

![Connect using](https://cdnweb.devolutions.net/docs/docs_en_kb_KB2205.png)

The menu can be bypassed by allowing a double-click action when there is only one possible combination of account/gateway/component.

{% snippet, "badgeHelp" %}
You can use a batchedit PowerShell script to allow a double-click action instead of selecting the option described in the steps below.
{% endsnippet %}

```powershell
$connection.ConnectUsingDashboardOnDoubleClick = "True";
$RDM.Save();
```

1. Select an entry and go to ***Properties*** – ***Advanced***.
1. Go to ***Connect using dashboard on double click*** and click ***Yes***.
![Properties – Advanced](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6160.png)
   {% snippet, "badgeInfo" %}
   The same option can be found in ***File*** – ***Settings*** – ***Types***.
   {% endsnippet %}

   ![File – Settings – Types](https://cdnweb.devolutions.net/docs/docs_en_rdm_windows_RDMWin6162.png)
3. Click ***OK*** to save and close the window.

Double-clicking will now automatically open the ***Dashboard***.
