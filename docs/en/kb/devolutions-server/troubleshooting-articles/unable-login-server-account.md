---
title: Unable to Login to DVLS Account
---
# {{ en.TOPICTITLE }}
Unable to log into a {{ en.DPS }} account and receiving error message ***Invalid username/password*** or ***COMException - The user name or password is incorrect***
### Solution
* With an access to a local {{ en.DPS }} user to connect to the web interface.
  * Go to ***Administration - Server Settings - Authentication - Domain***
  * Make sure the administration credentials are configured: ***VaultADReader*** in [Pre-Deployment Account Survey](/kb/devolutions-server/knowledge-base/pre-deployment-account-survey/)
  * Once saved, you should be able to connect using AD credentials.
* Without an access to a local {{ en.DPS }} user.
  * Download an older version of the console.
  * Uninstall the new console first (from the control panel) and install.
  * You will be able to click the user button in the top bar to create an account (with admin rights), and then authenticate with that user.
