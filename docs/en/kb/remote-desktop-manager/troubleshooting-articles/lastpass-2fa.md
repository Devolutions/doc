---
title: LastPass two-factor authentication
---
Every time I use a device referencing to my LastPass integration, it asks for my Two Factor Authentication (2FA) every single time.

## Solution

This behavior is caused by the recent changes made to the two-factor authentication mode of LastPass in {{ en.RDM }} 2020.1.20.  

You can now go under ***File - Options - Types - Credentials***, under the LastPass section to decide how you want to manage your 2FA.  

![LastPass two-factor authentication mode](https://webdevolutions.azureedge.net/docs/en/kb/KB4000.png)

Here is a brief overview of what each mode does:  

1. Don't trust this device: You will be prompted for your 2FA every time you will use your LastPass entry.
1. Trust this device: You will be prompted once for your 2FA on this device.
1. Trust this device (clear on application close): You will be prompted once for your 2FA on this device but the token will be cleared when you will close the application.  

Note: If you are using multiple LastPass account with a 2FA configured, you will be prompted for each separate account. The number of times you will be prompted will vary depending on the "Two-factor authentication mode" chosen above.
