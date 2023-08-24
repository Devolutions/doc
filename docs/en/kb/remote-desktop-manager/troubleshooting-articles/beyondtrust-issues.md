---
title: BeyondTrust issues
---
## Problem 1
System.uriformatexception: invalid uri: the format of the uri could not be determined.
### Solution
In the ***Host*** field of the BeyondTrust Password Safe Dashboard entry, make sure to enter the server name like https<area>://beyondtserver.  

Do not enter the IP address of the server. Entering the IP address instead of the server name will return this error.
## Problem 2
System.net.webexception: the remote server returned an error: (404)
### Solution
In the ***Host*** field of the BeyondTrust Password Safe Dashboard entry, make sure to enter the server name like https<area>://beyondtserver.  

Do not enter the web URL to access the console from a web browser, example https<area>://beyondtserver/eEye.RetinaCS.Server/PasswordSafe.
## Problem 3
Not found system.net.webexception: the remote server returned an error: (500) internal server error.
### Solution
In the ***Host*** field of the BeyondTrust Password Safe Dashboard entry, make sure to enter the server name like https<area>://beyondtserver.  

Do not enter the web URL to access the console from a web browser, example https<area>://beyondtserver/eEye.RetinaCS.Server/PasswordSafe.
## Problem 4
System.net.webexception: the remote server returned an error: (401) unauthorized.
### Solution
In the ***Application API*** key field of the BeyondTrust Password Safe Dashboard entry, make sure that you have entered the appropriate key.
## Problem 5
Beyond Trust Password Safe or BeyondTrust Password Safe Dashboard is empty and no error is returned.
### Solution
Make sure that the ***Enable for API*** access option is checked for your privileged account in BeyondTrust.
