---
eleventyComputed:
  title: Azure pre-authentication to a {{ en.DVLS }} data source in {{ en.RDM }}
  description: Azure pre-authentication requires a unique configuration. To use this feature with {{ en.RDM }}, admins must activate the authentication on the desired {{ en.DVLS }}, configure several settings in Microsoft Entra admin center, and set up an Azure app proxy.
---
Azure pre-authentication requires a unique configuration. To use this feature with {{ en.RDM }}, admins must activate the authentication on the desired {{ en.DVLS }}, configure several settings in Microsoft Entra admin center, and set up an Azure app proxy.

In this topic: 

- [Installing and configuring a private connector](#installing-and-configuring-a-private-connector)
- [Configuring an Azure app proxy](#configuring-an-azure-app-proxy)
- [Configuring {{ en.RDM }}](#configuring-remote-desktop-manager)
- [Ensuring TLS 1.2 is enabled](#ensuring-tls-1.2-is-enabled)


## Installing and configuring a private connector

1. In the Microsoft Entra admin center browser interface, navigate to ***Global Secure Access*** – ***Connect*** – ***Connectors***, then activate Global Secure Access in your tenant.
![Global Secure Access activation](https://cdnweb.devolutions.net/docs/INTERFACE4002.png)
1. Go to ***Private Network connectors*** – ***Traffic forwarding*** and toggle the ***Private access profile*** option. 
![Private access profile](https://cdnweb.devolutions.net/docs/INTERFACE4003.png)
1. Then head to ***Private Network connectors*** once more, and click on ***Download connecter service***.
![Download connecter service](https://cdnweb.devolutions.net/docs/INTERFACE4004.png)
1. Once the connecter service is downloaded, run the installation program, login with the Azure prompt, and wait for the installation to finish (the service may be shown as unavailable during this time).

{% snippet, "badgeCaution" %}
When running on a Windows Server, make sure to turn off IE Enhanced Configuration or make Microsoft Edge the default browser (without enhanced configuration). Otherwise the Azure login prompt will most likely fail without allowing all of the required URLs.

Additionally, the Windows connector service must have TLS 1.2 enabled before installation. Adding the below to a notepad file with the .reg extension and double-clicking will import the necessary values into the registry. Then a restart of the server is necessary before running the connector installation.
{% endsnippet %}

## Configuring an Azure app proxy

Here are the prerequisites to the next few steps for configuring Azure pre-authentication to {{ en.DVLS }} data source in {{ en.RDM }}:

- {{ en.DVLS }} is v.2024.2.4.x or above.
- {{ en.RDM }} is v.2024.2.4.x or above.
- A P1 license for the Private Network functionality.
- The URL of {{ en.DVLS }} must not be the root, i.e. <ins>https://myserver.com/dvls</ins> and not <ins>https://myserver.com</ins>
{% snippet icon.badgeInfo %}
Any changes made may take 3-5 minutes to take effect. Be aware of that when testing changes.
{% endsnippet %}

1. In the Azure portal, navigate to ***Microsoft Entra ID*** – ***App registrations***, and click on ***New registration***.
![Create a new registration](https://cdnweb.devolutions.net/docs/INTERFACE4006.png)
1. Enter the app registration name and leave all other values by default.
![New app registration name](https://cdnweb.devolutions.net/docs/INTERFACE4007.png)
1. Next, head to ***Microsoft Entra ID*** – ***Enterprise applications***. Click on the newly created app registration, go to ***Application Proxy***, and fill the following required fields: 
- **Internal URL**: This is the root of the IIS server hosting the DVLS.
- **External URL**: Defaults to the app registration name.
- **Pre Authentication**: Set to Microsoft Entra ID.
- **Connector Group**: The connector group to target.
![App proxy information – Basic](https://cdnweb.devolutions.net/docs/INTERFACE4008.png)
4. Next, navigate to the ***Advanced*** tab. Ensure that all options are unchecked or set to default, excepted ***Validate Backend SSL certificate*** which can be left on if needed.
![App proxy information – Advanced](https://cdnweb.devolutions.net/docs/INTERFACE4009.png)
5. Go back to ***Microsoft Entra ID*** – ***App registrations***, and click on the application to configure. If the app is not listed, it may be necessary to click on ***All applications*** to access it as the view is set to **Owned applications** by default.
6. In the ***Authentication*** screen, click on the ***Add a platform*** button. Three new platforms need to be created:  ***Web***, ***Single-page application***, and ***Mobile and desktop applications***. Start by creating a ***Web*** platform.
![Creating plaforms](https://cdnweb.devolutions.net/docs/INTERFACE4010.png)
7. Enter the ***Redirect URL***, which should be the same as the root ***External URL***. While on this page, check the options for ***Access Tokens*** and ***ID tokens*** in the Implicit grant and hybrid flows section. Click ***Configure*** to continue.
![Configuring Web platform](https://cdnweb.devolutions.net/docs/INTERFACE4015.png)
8. With the first platform added, click the ***Add a platform*** button once more and choose ***Single-page application***. Enter the ***Redirect URI***, which should be the same as the ***External URL***, with the following appended to the end: `/dvls/api/external-provider-response` (replace the /dvls/ with the URL of the desired {{ en.DVLS }} instance). Finally, click ***Configure*** to continue.
![Configuring single-page application platform](https://cdnweb.devolutions.net/docs/INTERFACE4016.png)
9. With the second platform added, click the ***Add a platform*** button once more and choose ***Mobile and desktop applications***. Enter <ins>http://localhost</ins> exactly in the ***Custom redirect URIs*** field. Leave all other values unchecked (if there are any) and click the ***Configure*** button.
![Configuring Desktop + devices platform](https://cdnweb.devolutions.net/docs/INTERFACE4013.png)
10. With the three platforms created, scroll to the bottom of the ***Authentication*** page and toggle ***Allow public client flows*** before clicking on ***Save***.
![Allowing public client flows](https://cdnweb.devolutions.net/docs/INTERFACE4017.png)
11. Now go to ***API permissions*** and click the ***Add a permission*** button.
![Add API permission](https://cdnweb.devolutions.net/docs/INTERFACE4018.png)
12. Choose ***Delegated permissions***, and toggle the User.Read permission under ***User***. Click ***Add permissions***.
![Add User.Read permission](https://cdnweb.devolutions.net/docs/INTERFACE4019.png)
13. Click on the ***Grant admin consent for tenant*** button and confirm by clicking ***Yes***.
![Grant admin consent for tenant](https://cdnweb.devolutions.net/docs/INTERFACE4020.png)
14. Next, navigate to ***Expose an API*** and click on ***Add*** next to ***Application ID URI***. Then enter the same URI as the ***External URL*** of your ***Application Proxy***.
![Add application ID URI – step 1](https://cdnweb.devolutions.net/docs/INTERFACE4022.png)
![Add application ID URI – step 2](https://cdnweb.devolutions.net/docs/INTERFACE4023.png)
15. Click on ***Add a scope*** and enter the following:
- **Scope name**: user_impersonation
- **Who can consent**: Admins and users
- **Admin consent display name**: Access DVLS
- **Admin consent description**: Allow the application to access DVLS on behalf of the signed-in user.
- **User consent display name**: Access DVLS
- **User consent description**: Allow the application to access DVLS on behalf of the sign-in user.
![Add a scope – step 1](https://cdnweb.devolutions.net/docs/INTERFACE4024.png)
![Add a scope – step 2](https://cdnweb.devolutions.net/docs/INTERFACE4025.png)
16. Next, go to ***App roles*** and click the ***Create app role*** button. Two roles need to be created: **User** and **msiam_access**.
![Create app role](https://cdnweb.devolutions.net/docs/INTERFACE4026.png)
17. On the ***Create app role*** screen, fill the fields below, and check the case under ***Do you want to enable this app role?***.
- **Display name**: User
- **Allowed member types**: Users/Groups
- **Value**: User
- **Description**: User
![Fill user information](https://cdnweb.devolutions.net/docs/INTERFACE4027.png)

18. With the first role created, once again click on ***Create app role***, fill the fields below, and check the case under ***Do you want to enable this app role?*** like before.
- **Display name**: msiam_access
- **Allowed member types**: Users/Groups
- **Value**: msiam_access
- **Description**: msiam_access
![Fill msiam information](https://cdnweb.devolutions.net/docs/INTERFACE4032.png)
19. Go to ***Manifest*** and modify the value for “accessTokenAcceptedVersion” to 2. Click the ***Save*** button.
![Set accessTokenAcceptedVersion to 2](https://cdnweb.devolutions.net/docs/INTERFACE4028.png)
20. Go back to ***Microsoft Entra ID*** – ***Enterprise applications***. Click on the newly created app registration and navigate to ***Users and groups***. Click on ***Add user/group***.
![Add user/group](https://cdnweb.devolutions.net/docs/INTERFACE4029.png)
21. Select the user or group and the role should auto-populate to User. Click the ***Assign*** button to finish assigning the permissions.
![Assign desired permissions](https://cdnweb.devolutions.net/docs/INTERFACE4030.png)
## Configuring Remote Desktop Manager
With Azure configured, and after waiting at least 5 minutes from the last configuration change, open {{ en.RDM }}.
1. Go to ***File*** – ***Data sources***.
![{{ en.RDM }} data sources](https://cdnweb.devolutions.net/docs/INTERFACE4031.png)
2. Locate the Devolutions Server data source to modify and click the ***Edit*** button. Enter the following:
- **Host**: The same value as the External URI with the DLVS server suffix.
- **Username**: The same as the DVLS username, not necessarily the same as the Azure user (unless using “Use pre-authentication user for DVLS connection”).
Then check ***Use pre-authentication proxy*** and, optionally,*** Use pre-authentication proxy for DVLS connection*** (if ***Microsoft Authentication*** is already checked).
3. The configuration is then completed, and Azure Microsoft login should open in an embedded window or system browser (may occur twice if an embedded window appears and once more in a system browser prior to DVLS authentication). Once this is done, a prompt for DVLS authentication should appear.
## Additional notes
HTTP2 may need to be disabled on Windows Server 2019 or later in the `WinHTTP` component for Kerberos Constrained Delegation to properly work. Run the following PowerShell command and restart the server for the change to take effect:

```
Set-ItemProperty 'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Internet Settings\WinHttp\' -Name EnableDefaultHTTP2 -Value 0
```

## Ensuring TLS 1.2 is enabled
Additionally, the Windows connector service must have TLS 1.2 enabled before installation. Adding the below to a notepad file with the .reg extension and double-clicking will import the necessary values into the registry. A restart of the server is then necessary before running the connector installation.

```
Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2]
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Client]
"DisabledByDefault"=dword:00000000
"Enabled"=dword:00000001
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurityProviders\SCHANNEL\Protocols\TLS 1.2\Server]
"DisabledByDefault"=dword:00000000
"Enabled"=dword:00000001
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\.NETFramework\v4.0.30319]
"SchUseStrongCrypto"=dword:00000001
```
{% snippet, "badgeCaution" %}
A secret is configured automatically upon ***Application Proxy App*** creation. Deleting it will break pre-authentication and may necessitate recreation of the entire application proxy.
{% endsnippet %}