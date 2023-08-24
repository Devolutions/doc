---
title: LDAPS enforcing usage
---
To require that a directory server reject simple binds that occur on a clear text connection, you must apply a policy.

You can refer to the [original Microsoft article](https://support.microsoft.com/en-ca/kb/935834), but its content will be duplicated below for ease of use.

## Configure the directory to require LDAP server signing using Group Policy

### Set the server LDAP signing requirement

1. Click ***Start***, click ***Run***, type **mmc.exe**, and then click ***OK***.
1. On the File menu, click ***Add/Remove Snap-in***.
1. In the ***Add*** or ***Remove Snap-ins*** dialog box, click ***Group Policy Management Editor***, and then click ***Add***.
1. In the ***Select Group Policy Object*** dialog box, click ***Browse***.
1. In the ***Browse*** for a ***Group Policy Object*** dialog box, click ***Default Domain Policy*** under the ***Domains***, ***OUs*** and linked ***Group Policy Objects*** area, and then click ***OK***.
1. Click ***Finish***.
1. Click ***OK***.
1. Expand ***Default Domain Controller Policy***, expand ***Computer Configuration***, expand ***Policies***, expand ***Windows Settings***, expand ***Security Settings***, expand ***Local Policies*** and then click ***Security Options***.
1. Right-click ***Domain controller: LDAP server signing requirements*** and then click ***Properties***.
1. In the ***Domain controller***: LDAP server signing requirements ***Properties*** dialog box, enable ***Define*** this policy setting, click to select ***Require signing in*** the ***Define this policy setting*** drop-down list, and then click ***OK***.
1. In the ***Confirm Setting Change*** dialog box, click ***Yes***.

### Set the client LDAP signing requirement through local computer policy

1. Click ***Start***, click ***Run***, type **mmc.exe**, and then click ***OK***.
1. On the ***File*** menu, click ***Add/Remove Snap-in***.
1. In the ***Add or Remove Snap-ins*** dialog box, click ***Group Policy Object Editor***, and then click ***Add***.
1. Click ***Finish***.
1. Click ***OK***.
1. Expand ***Local Computer Policy***, expand ***Computer Configuration***, expand ***Policies***, expand ***Windows Settings***, expand ***Security Settings***, expand ***Local Policies***, and then click ***Security Options***.
1. Right-click ***Network security: LDAP*** client signing requirements, and then click ***Properties***.
1. In the ***Network security: LDAP*** client signing requirements ***Properties*** dialog box, click to select ***Require signing in*** the drop-down list, and then click ***OK***.
1. In the ***Confirm Setting Change*** dialog box, click ***Yes***.

### Set the client LDAP signing requirement through a domain Group Policy Object

1. Click ***Start***, click ***Run***, type **mmc.exe**, and then click ***OK***.
1. On the ***File*** menu, click ***Add/Remove Snap-in***.
1. In the ***Add or Remove Snap-ins*** dialog box, click ***Group Policy Object Editor***, and then click ***Add***.
1. Click ***Browse***, and then select ***Default Domain Policy*** (or the ***Group Policy Object*** for which you want to enable client LDAP signing).
1. Click ***OK***.
1. Click ***Finish***.
1. Click ***Close***.
1. Click ***OK***.
1. Expand ***Default Domain Policy***, expand ***Computer Configuration***, expand ***Windows Settings***, expand ***Security Settings***, expand ***Local Policies***, and then click ***Security Options***.
1. In the ***Network security: LDAP*** client signing requirements ***Properties*** dialog box, click to select ***Require signing in*** the drop-down list, and then click ***OK***.
1. In the ***Confirm Setting Change*** dialog box, click ***Yes***.
