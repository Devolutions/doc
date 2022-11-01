### Upgrading an instance of ***Devolutions Password Server***
Please visit the <a href="https://helpserver.devolutions.net/upgrade_rdms.htm" target="_blank">online version</a> of this topic for up to date information.
> DPS upgrades are not overly complicated, but certain steps must be planned carefully. Please [contact us](mailto:ticket@devolutions.net?subject=DPS%20upgrade%20request) to book a session where we'll help out.

::: warning
:x: Devolutions Password Server is used by *_`TEAMS`_*, this means that other users must be taken into account before starting with the upgrade.
:::

### Prior to the upgrade!
1. :warning: Ensure a backup of the database is made :warning:
2. Instruct your colleagues to switch `offline` (if allowed and enabled)
3. Upgrade the copy of DPS Console on the server to our latest General Availability release
4. Set the instance `offline` using the DPS Console action
5. Perform the server diagnostic to see if you are missing pre-requisites
You can now come back to this form to resume your upgrade.
### Version specific warnings
Here are aspects that have changed versions but from the version directly prior to that. You must therefore read this from the version number that you are starting from.
#### Version 6.0
- Introduction of Office365 (AzureAD) authentication
- Introduction of users and roles cache for Domain and Office365 (AzureAD) authentication
#### Version 5.1
- If you have set a *_Shared Passphrase v1 Security Provider_* on your current Devolutions Password Server instance, please [contact us](mailto:ticket@devolutions.net?subject=DPS%20upgrade%20request%20Security%20Provider) for further details.
#### Version 5.0
- RDM is no longer required as now the DPS Console is a stand alone application.
#### Version 4.7
- No breaking change
#### Version 4.6
- No breaking change
#### Version 4.5
- Introduction of Encryption keys
#### Version 4.0
- New dependency: URL Rewrite Module
- Introduction of Administration Credentials
#### Version 3.2
- User accounts must be adjusted to ensure *User Type* is specified and the User Principal Name (UPN) is filled in
