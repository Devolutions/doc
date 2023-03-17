---
title: CyberArk Dashboard Configuration and Use
---
The purpose of the ***CyberArk Dashboard*** entry is to provide {{ en.RDM }} users with an interface that eliminates the need to use Password Vault Web Access (PVWA) to see the list of safes and credentials that the currently logged on user has access to. Combined with password-less scenarios and/or our rich role-based access control (RBAC), this means that a user does NOT need to know the CyberArk credentials to be presented with a list of accounts they have access to. Additionally, since the dashboard is meant to authenticate once to your server and, most importantly, maintain an active session for as long as it is active, it has the significant advantage of only requiring MFA once when you launch the dashboard.

Another design principle of the dashboard is that its main usage model is to go through the CyberArk Privileged Session Manager (PSM) to reach assets. This means that {{ en.RDM }} does NOT need to read the password for the account to be used. Less secure models are available to support older scenarios that some of our customers are still using.

## Configuration

1. Create a new ***CyberArk Dashboard*** entry or go to the ***Properties*** of your existing one.
1. In the ***General*** section, specify a ***Name*** and ***Folder*** for your entry if that's not already done.

### ***General*** Tab

3. Enter the ***Web services URL*** to connect to your CyberArk instance. It is the address of the server and should look like "https://<server name>.<our domain>.loc".
1. Enter a ***Virtual Directory*** if applicable. Most of the time, this field remains empty.
1. Select a ***Version*** in the drop-down list. This refers to the CyberArk PVWA version seen on the CyberArk authentication page.

{% snippet icon.badgeInfo %}
Please note that we only support the CyberArk V12 API for now and that CyberArk version 12.1 is required.
{% endsnippet %}  

6. Select the ***Authentication mode*** used to connect to the CyberArk instance (***CyberArk***, ***Windows***, ***LDAP***, ***RADIUS***, or ***SAML***).
{% snippet icon.badgeNotice %}
SAML authentication is supported with CyberArk since version 2022.3.25 of {{ en.RDM }}, but important improvements and bug fixes have been implemented in ulterior versions. We recommend to at least update to the 2023.1 version of {{ en.RDM }}. If you have trouble with your SAML authentication, try our SAML authentication Troubleshooting topic.
{% endsnippet %}
{% snippet icon.badgeCaution %}
SAML authentication for CyberArk Privilege Cloud is currently **not** supported.
{% endsnippet %}
{% snippet icon.badgeCaution %}
Your CyberArk Vault administrator should provide you with the authentication model being used, but if, in PVWA, you click on a link that matches your corporate domain name, this indicates that the LDAP model is being used. The icon looks like the following:
![LDAP CyberArk Icon](/img/en/kb/iconldapcyberark.png)
{% endsnippet %}

D. Enter your credentials or select them using a {{ en.RDM }} mechanism. As with all dashboards in {{ en.RDM }} , if you are creating an entry that will be visible to multiple users, we recommend choosing ***My Account Settings PVWA*** from the ***Authentication credentials*** drop-down list, then visiting ***File - My Account Settings - CyberArk PVWA*** to enter your personal CyberArk credentials.
![KB2068.png](/img/en/kb/KB2068.png)

### Advanced tab configuration
The ***Advanced*** tab is located in the ***Properties*** of your ***CyberArk Dashboard*** entry, in the ***General*** section of the left side menu.  

### General
E. ***Auto refresh*** is active by default. It maintains the connection to your CyberArk environment and removes the need to enter 2FA on every connection.  

F. Check ***Allow connect to host*** if you want to allow a direct connection to the remote machine. This means that the current logged on user needs to have the right to VIEW the password; it is therefore less secure and is not recommended by the CyberArk team.  

G. Check ***Ask for reason*** if you are required to have a reason to establish a connection.  

H. Check ***Ask for ticket number*** if you are required to provide a ticket number to establish a connection. The ***Ticketing system*** field that is paired with this option is a string value that makes sense in your environment. It is informative and we send it along with the number.  

I. Set the default ***Username format*** to be able to connect to the remote machine. It can also be changed in the dashboard for ad hoc connections, but this will be the default format for this dashboard instance.  

J. ***Domain field*** drop-down list (relevant only when the ***Username format*** drop-down list is set to the ***Field*** value): Depending on how your {{ en.VLT }} was set up, there can be various CyberArk fields used to hold the domain information. Choose the value that corresponds to your {{ en.VLT }} 's settings.  

![KB4930.png](/img/en/kb/KB4930.png)
### PVWA
K. ***Allow direct connections (PVWA)*** is checked by default. It allows the exact same action that the ***Connect*** button offers in PVWA.  

L. In the ***Connection components*** box, enter the components you wish to use for your connections. We initialize the field with the default components of a vanilla CyberArk installation, but this list MUST match with the components configured in your vault.  

![KB4931.png](/img/en/kb/KB4931.png)
### PSM
M. Enable to allow connections via PSM, but by using the legacy method of providing an alternate shell.  
{% snippet icon.badgeCaution %}
This is provided as a convenience and is not recommended by the CyberArk team anymore. It has some limitations when compared to the ***Connect*** action from PVWA which uses a limited lifetime token.
{% endsnippet %}  
{% snippet icon.badgeCaution %}
You must have a PSM Server entry configured in the same vault and selected in the drop-down list.
{% endsnippet %}  

![KB4932.png](/img/en/kb/KB4932.png)
### Using the dashboard  
{% snippet icon.badgeHelp %}
Please note that for the sake of clarity, in this section we will provide only information about the main usage model of connecting through the PSM.
{% endsnippet %}  

![KB2072.png](/img/en/kb/KB2072.png)  

A. Log in or out from the dashboard.  

B. Connect to a host using the selected credentials.  

C. Select a safe.  <a name="c"></a>

D. Select a username format.  

E. Refresh the content of the safe.  

F. Enable/disable the automatic refresh. If disabled, PSM connections may require MFA upon every connection.  

### Selecting a credential
With the safe selector (<a href="#c">point C</a> of the previous section), you can browse your safes and select the one you wish to use.  

![KB2069.png](/img/en/kb/KB2069.png)

1. The upper section of the drop-down list contains a subset of the safes that one has access to. This is admittedly made ineffective by containing system safes, but we are going to improve this in the next release. It is listed in the order returned from CyberArk at this time and we recommend choosing the ***Browse...*** action at the bottom (<a href="#4">point 4</a>).
1. ***Favorites*** will display accounts that have been tagged as a favorite, but from within {{ en.RDM }} This is not a CyberArk functionality.
1. ***Show all*** will list ALL accounts that the user has access to. For certain users, this we be a sizeable list and will not be a quick operation. It is provided for users that have access to a finite list of accounts.
1. ***Browse...*** will display the safe selection dialog, where there is paging and filtering to help the user to locate the relevant safe. Again, they are listed by default in the order received from CyberArk.  <a name="4"></a>

![KB4934.png](/img/en/kb/KB4934.png)

You will then be able to view the accounts from that safe  

![KB2073.png](/img/en/kb/KB2073.png)
### Connecting to a host
After selecting the account you wish to use, you can either use the ***Connect*** button to the left of the list or right-click and select the appropriate connection component.  

![KB2070.png](/img/en/kb/KB2070.png)

In both cases, you will then see a dialog that allows for specifying which host to connect to.
### Host selection dialog
![KB2071.png](/img/en/kb/KB2071.png)

1. Host control
    1. If the CyberArk Remote machine access field is used in the account properties, this will list the endpoints that we entered. It allows for connections even for assets that are not managed in {{ en.RDM }}
    1. If the CyberArk Remote machine access field is not used, you can type in any name in the control to connect to it. Please note that name resolution is performed at the PSM level. Therefore, please adhere to standards of your CyberArk installation to achieve success.
1. Filter: Type in characters that fit an asset name to have a filter applied in the grid below.
1. The grid will display entries that represent a host system. Therefore, connect to the one that represents the endpoint you need to connect to.
