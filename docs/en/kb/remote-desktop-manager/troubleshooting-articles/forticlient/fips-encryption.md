---
title: FIPS (encryption)
---
System.invalidoperationexception: this implementation is not part of the windows platform FIPS validated cryptographic algorithms.  

The problem could be related to the FIPS mode enabled.  

{{ en.RDM }} uses the AES/Rijndael encryption and SHA-256 hashing algorithms, which are implemented by the Microsoft .NET Framework. If the local security policy on your system enforces FIPS compliant implementations, {{ en.RDM }} cannot run. As a result, you will receive this error message.
## Solution 1
To fix this error, configure the Local Security Policy on your system to allow FIPS non-compliant algorithm implementations.  

Here are the steps:  

1. Go to ***Control Panel - Administrative Tools - Local Security Policy - Open Local Policies - Security Options***.
1. Disable the option ***System cryptography: Use FIPS compliant algorithms for encryption, hashing, and signing***.  

Some software (i.e., Cisco VPN Anyconnect) requires the use of FIPS. If this is your case, you must implement the alternative solution described below.
## Solution 2
Inside {{ en.RDM }} 's installation folder, create a text file named **RemoteDesktopManager.exe.config** containing the following:  

```
<configuration>  
    <runtime>  
        <enforceFIPSPolicy enabled="false"/>  
    </runtime>  
</configuration>  
```
