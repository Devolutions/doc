---
title: The Remote Server Returned an Error (400) Bad Request
---
You get the following error message dialog when you try to authenticate on the {{ en.DPS }} instance with {{ en.RDM }}.  
![!!KB4289.png](/img/en/kb/KB4289.png)

## Solution

There are two different solutions for this issue.

1. Reduce the number of AD Groups that the user account is part of. We are aware that most of the time, because of the design of the AD structure, it is not possible to reduce the number of AD groups.
2. Increase the settings for the ***MaxFieldLength*** and the ***MaxRequestBytes*** registry entries on the server. Please consult the following Microsoft article for more information on how to increase these values. [https://support.microsoft.com/en-us/help/2020943/http-400-bad-request-request-header-too-long-response-to-http-request](https://support.microsoft.com/en-us/help/2020943/http-400-bad-request-request-header-too-long-response-to-http-request)
