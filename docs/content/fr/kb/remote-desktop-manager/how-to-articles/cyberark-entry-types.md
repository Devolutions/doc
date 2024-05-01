---
eleventyComputed:
  title: CyberArk entry types
  description: List of CyberArk entry types in {{ en.RDM }}
---
All target system connections ultimately utilize a variant of the psm `/u {user} /a {target} /c {connection_type}` executable. Once you have authenticated to PSM through AAM password-less or PVWA credentials, a connection to the target system is launched on PSM through the `psm` executable. This open connection is then streamed back to the {{ en.RDM }} client, PVWA HTML5 web interface, or an RDP client via the generated RDP file.

The general distinction between the CyberArk types in {{ en.RDM }} is how a user authenticates to PSM and whether the integrated PVWA dashboard is used within {{ en.RDM }} to open a connection rather than directly launching the connection.

## Credentials

These credentials are often linked directly to a connection to facilitate seamless connections to a target system through CyberArk PSM.

***CyberArk AAM***: Links a user's locally stored private certificate (key) in the user certificate store and the CyberArk CCP REST API service. The certificate thumbprint, linked to an Application (defined in PVWA) that identifies an {{ en.RDM }} client (optionally restricted to specific IP addresses), retrieves the requested credentials from the Digital Vault, optionally managed by the CPM.

***CyberArk PVWA***: Similar to AAM, but supporting non-AAM authentication methods such as CyberArk (internal authentication), LDAP, Windows (Kerberos integrated authentication), Radius, and SAML (SSO).

## Connections

***CyberArk Dashboard***: Provide {{ en.RDM }} users with an alternate interface to PVWA. View a list of Digital Vault Safes and Accounts the currently logged-on user can access. Connect to target systems through the following methods:

- Traditional PSM Connection
- Bypassing PSM via the ***Allow connect to host*** option under ***Advanced*** – ***General***. Not recommended.

![Bypassing PSM via the Allow connect to host option](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6114.png)

PSM Alternate Shell (also internally known as the Ad-Hoc connection method, different from the Ad-Hoc connection in PVWA). Requires a pre-existing CyberArk PSM Server to be configured.

![PSM Alternate Shell  option](https://cdnweb.devolutions.net/docs/docs_en_kb_KB6116.png)

- ***CyberArk PSM Connection*** - Intended to connect to a specific host using a privileged account and a PSM server connection, leveraging the PSM Alternate Shell connection method.

- ***CyberArk PSM Server*** - Used with the PSM Connection (and PSM Alternate Shell option of the CyberArk  Dashboard connection) to define a PSM server for connecting to a given host.

## Authentication Modes and Authentication Credentials

The CyberArk PVWA credential, CyberArk Dashboard connection, and CyberArk PSM Connection all offer several authentication methods. These authentication methods are to ***authenticate to PVWA*** (i.e., if you navigated to the web interface and chose the authentication method), not the target endpoint. Below is how the authentication modes map to the authentication credentials.

## CyberArk Dashboard (Connection)

{% snippet icon.badgeInfo %}
The ***My Account Settings PVWA*** option is the setting located in ***File*** – ***My Account Settings*** – ***CyberArk PVWA***. ***AAM ({{ en.UVLT }} search)*** is to find a stored AAM entry within an Advanced Data Source {{ en.UVLT }}.
{% endsnippet %}  

- ***CyberArk***: Custom, My Account Settings PVWA, AAM (Linked), AAM ({{ en.UVLT }} search)
- ***LDAP***: Custom, My Account Settings PVWA, AAM (Linked), AAM ({{ en.UVLT }} search)
- ***Radius***: Custom, My Account Settings PVWA, AAM (Linked), AAM ({{ en.UVLT }} search)
- ***Windows***: Custom, My Account Settings PVWA, AAM (Linked), AAM ({{ en.UVLT }} search)
- ***SAML:*** None

## CyberArk PVWA (Credential)

{% snippet icon.badgeInfo %}
The AAM option offers a drop-down to choose an existing credential.
{% endsnippet %}  

- ***CyberArk***: Custom, AAM
- ***LDAP***: Custom, AAM
- ***Radius***: Custom, AAM
- ***Windows***: Custom, AAM
- ***SAML***: None

## CyberArk PSM Server (Connection)

{% snippet icon.badgeInfo %}
The AAM option offers a drop-down to choose an existing credential.
{% endsnippet %}  

- ***AAM***: Linked Credential
- ***Custom***: Username and Password
